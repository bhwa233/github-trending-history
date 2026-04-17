import axios from 'axios';
import { AIInput, AISummary } from './github-types';

const AI_API_KEY = process.env.AI_API_KEY || process.env.CLOUDFLARE_AI_GATEWAY_TOKEN;
const AI_API_URL =
  process.env.AI_API_URL ||
  'https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions';
const AI_MODEL = process.env.AI_MODEL || 'workers-ai/@cf/zai-org/glm-4.7-flash';
const AI_AUTH_HEADER = process.env.AI_AUTH_HEADER || 'Authorization';
const AI_AUTH_PREFIX = process.env.AI_AUTH_PREFIX || 'Bearer';

function buildPrompt(input: AIInput, locale: 'zh-CN' | 'en') {
  const truncatedReadme = input.readmeContent.slice(0, 2000);

  if (locale === 'en') {
    return `You are a GitHub project analyst. Analyze the following project and return strict JSON only.\n\nProject: ${input.fullName}\nLanguage: ${input.language || 'Unknown'}\nDescription: ${input.description}\n\nREADME:\n${truncatedReadme}\n\nReturn JSON only in this format:\n{\n  "summary": "Core summary in English, 50-200 chars",\n  "techStack": ["stack1", "stack2", "stack3"],\n  "useCase": "One-sentence use case in English"\n}`;
  }

  return `你是 GitHub 项目分析助手。请分析以下项目并以 JSON 格式输出，总结控制在200字以内。\n\n项目名称: ${input.fullName}\n编程语言: ${input.language || '未知'}\n项目描述: ${input.description}\n\nREADME 内容:\n${truncatedReadme}\n\n请严格按照以下 JSON 格式输出（不要包含其他文字）：\n{\n  "summary": "项目核心功能总结，50-200字中文",\n  "techStack": ["技术栈1", "技术栈2", "技术栈3"],\n  "useCase": "适用场景，一句话"\n}`;
}

async function callAIProvider(input: AIInput, locale: 'zh-CN' | 'en'): Promise<AISummary> {
  if (!AI_API_KEY) {
    throw new Error('缺少 AI API 配置。请设置环境变量 AI_API_KEY 或 CLOUDFLARE_AI_GATEWAY_TOKEN');
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

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    [AI_AUTH_HEADER]: `${AI_AUTH_PREFIX} ${AI_API_KEY}`,
  };

  let lastError: Error | null = null;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await axios.post(
        AI_API_URL,
        {
          model: AI_MODEL,
          messages,
          response_format: {
            type: 'json_object',
          },
          temperature: 0.2,
        },
        {
          timeout: 45000,
          headers,
        }
      );

      const content = response.data?.choices?.[0]?.message?.content?.trim();
      if (!content) {
        throw new Error('AI 返回格式错误：缺少 choices[0].message.content');
      }

      let parsed: Record<string, unknown>;
      try {
        parsed = JSON.parse(content);
      } catch {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error('AI 响应中未找到 JSON 格式');
        }
        parsed = JSON.parse(jsonMatch[0]);
      }

      if (!parsed.summary || !parsed.techStack || !parsed.useCase) {
        throw new Error('AI 返回的 JSON 缺少必需字段');
      }

      const techStack = Array.isArray(parsed.techStack)
        ? parsed.techStack.map((item: unknown) => String(item)).slice(0, 5)
        : String(parsed.techStack)
            .split(/[,，、]/)
            .map((item) => item.trim())
            .filter(Boolean)
            .slice(0, 5);

      return {
        summary: String(parsed.summary).slice(0, 220),
        techStack,
        useCase: String(parsed.useCase).slice(0, 120),
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 'unknown';
        const message = JSON.stringify(error.response?.data || error.message);
        lastError = new Error(`AI 请求失败 (${status}): ${message}`);
      } else {
        lastError = error instanceof Error ? error : new Error(String(error));
      }

      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        continue;
      }
    }
  }

  throw lastError || new Error('AI 请求失败');
}

export async function callAI(input: AIInput): Promise<AISummary> {
  const [zhSummary, enSummary] = await Promise.all([
    callAIProvider(input, 'zh-CN'),
    callAIProvider(input, 'en'),
  ]);

  return {
    summary: zhSummary.summary,
    summary_en: enSummary.summary,
    techStack: zhSummary.techStack.length > 0 ? zhSummary.techStack : enSummary.techStack,
    useCase: zhSummary.useCase,
    useCase_en: enSummary.useCase,
  };
}
