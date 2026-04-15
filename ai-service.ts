import axios from 'axios';
import { AIInput, AISummary } from './github-types';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'openrouter/free';
const OPENROUTER_REFERER = process.env.OPENROUTER_SITE_URL || 'https://github.com/lxw15337674/github-trending-history';
const OPENROUTER_TITLE = process.env.OPENROUTER_SITE_NAME || 'github-trending-history';

function buildPrompt(input: AIInput, locale: 'zh-CN' | 'en') {
  const truncatedReadme = input.readmeContent.slice(0, 2000);

  if (locale === 'en') {
    return `You are a GitHub project analyst. Analyze the following project and return strict JSON only.\n\nProject: ${input.fullName}\nLanguage: ${input.language || 'Unknown'}\nDescription: ${input.description}\n\nREADME:\n${truncatedReadme}\n\nReturn JSON only in this format:\n{\n  "summary": "Core summary in English, 50-200 chars",\n  "techStack": ["stack1", "stack2", "stack3"],\n  "useCase": "One-sentence use case in English"\n}`;
  }

  return `你是 GitHub 项目分析助手。请分析以下项目并以 JSON 格式输出，总结控制在200字以内。\n\n项目名称: ${input.fullName}\n编程语言: ${input.language || '未知'}\n项目描述: ${input.description}\n\nREADME 内容:\n${truncatedReadme}\n\n请严格按照以下 JSON 格式输出（不要包含其他文字）：\n{\n  "summary": "项目核心功能总结，50-200字中文",\n  "techStack": ["技术栈1", "技术栈2", "技术栈3"],\n  "useCase": "适用场景，一句话"\n}`;
}

async function callOpenRouter(input: AIInput, locale: 'zh-CN' | 'en'): Promise<AISummary> {
  if (!OPENROUTER_API_KEY) {
    throw new Error('缺少 OpenRouter API 配置。请设置环境变量 OPENROUTER_API_KEY');
  }

  const prompt = buildPrompt(input, locale);
  const messages = [
    {
      role: 'system',
      content:
        locale === 'en'
          ? 'You are a technical analysis assistant. Your response must be valid JSON only.'
          : '你是一个专业的技术项目分析专家。你的回答必须是有效的 JSON 格式，不包含任何其他文字。',
    },
    {
      role: 'user',
      content: prompt,
    },
  ];

  let lastError: Error | null = null;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await axios.post(
        OPENROUTER_API_URL,
        {
          model: OPENROUTER_MODEL,
          messages,
          temperature: 0.2,
        },
        {
          timeout: 45000,
          headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': OPENROUTER_REFERER,
            'X-OpenRouter-Title': OPENROUTER_TITLE,
          },
        }
      );

      const content = response.data?.choices?.[0]?.message?.content?.trim();
      if (!content) {
        throw new Error('OpenRouter 返回格式错误：缺少 choices[0].message.content');
      }

      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('AI 响应中未找到 JSON 格式');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      if (!parsed.summary || !parsed.techStack || !parsed.useCase) {
        throw new Error('AI 返回的 JSON 缺少必需字段');
      }

      return {
        summary: String(parsed.summary).slice(0, 220),
        techStack: Array.isArray(parsed.techStack)
          ? parsed.techStack.map((item: unknown) => String(item)).slice(0, 5)
          : [],
        useCase: String(parsed.useCase).slice(0, 120),
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 'unknown';
        const message = JSON.stringify(error.response?.data || error.message);
        lastError = new Error(`OpenRouter 请求失败 (${status}): ${message}`);
      } else {
        lastError = error instanceof Error ? error : new Error(String(error));
      }

      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        continue;
      }
    }
  }

  throw lastError || new Error('OpenRouter 请求失败');
}

export async function callAI(input: AIInput): Promise<AISummary> {
  const [zhSummary, enSummary] = await Promise.all([
    callOpenRouter(input, 'zh-CN'),
    callOpenRouter(input, 'en'),
  ]);

  return {
    summary: zhSummary.summary,
    summary_en: enSummary.summary,
    techStack: zhSummary.techStack.length > 0 ? zhSummary.techStack : enSummary.techStack,
    useCase: zhSummary.useCase,
    useCase_en: enSummary.useCase,
  };
}
