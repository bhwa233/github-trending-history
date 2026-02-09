import type { GitHubRepo } from '@/lib/trending-data';

export interface TopicDefinition {
  slug: string;
  name: string;
  description: string;
  keywords: string[];
  excludedKeywords?: string[];
}

export const TOPIC_DEFINITIONS: TopicDefinition[] = [
  {
    slug: 'coding-agents',
    name: 'Coding Agents',
    description: 'AI 编程助手、代码智能体与自动化开发工作流。',
    keywords: ['agentic coding', 'coding agent', 'code agent', 'claude code', 'aider', 'copilot', 'autonomous coding'],
  },
  {
    slug: 'ai-agents',
    name: 'AI Agents',
    description: '通用智能体框架、Agent 平台与多代理协作。',
    keywords: ['agent framework', 'multi-agent', 'autonomous agent', 'agent orchestration', 'agents'],
  },
  {
    slug: 'rag-knowledge-bases',
    name: 'RAG & Knowledge Bases',
    description: '检索增强生成、向量检索与知识库应用。',
    keywords: ['rag', 'retrieval', 'knowledge base', 'vector database', 'embedding', 'langchain', 'llamaindex'],
    excludedKeywords: ['garage'],
  },
  {
    slug: 'llm-inference',
    name: 'LLM Inference',
    description: '大模型推理、服务化部署与模型应用。',
    keywords: ['llm', 'inference', 'chat model', 'transformer', 'prompt engineering'],
  },
  {
    slug: 'ai-audio-and-tts',
    name: 'AI Audio & TTS',
    description: '语音合成、语音识别、音频生成和声音模型。',
    keywords: ['tts', 'speech', 'voice', 'audio', 'asr', 'stt'],
  },
  {
    slug: 'developer-cli-tools',
    name: 'Developer CLI Tools',
    description: '命令行效率工具、终端助手、开发者自动化。',
    keywords: ['cli', 'terminal', 'command line', 'shell', 'developer tool', 'devtool', 'command-line'],
    excludedKeywords: ['client'],
  },
  {
    slug: 'frontend-web',
    name: 'Frontend & Web',
    description: '前端框架、Web 应用、UI 组件和交互开发。',
    keywords: ['react', 'next.js', 'nextjs', 'vue', 'svelte', 'frontend', 'web ui', 'tailwind', 'ui component'],
  },
  {
    slug: 'backend-and-api',
    name: 'Backend & API',
    description: '后端服务、API 框架、网关和服务端工程。',
    keywords: ['backend', 'api', 'server', 'microservice', 'rest api', 'graphql'],
  },
  {
    slug: 'devops-and-infra',
    name: 'DevOps & Infra',
    description: '部署、容器、云原生、可观测性与基础设施。',
    keywords: ['kubernetes', 'docker', 'devops', 'infra', 'cloud', 'monitoring', 'observability'],
  },
  {
    slug: 'data-and-ml',
    name: 'Data & ML',
    description: '数据处理、机器学习训练、推理与分析工具链。',
    keywords: ['machine learning', 'ml', 'data pipeline', 'dataset', 'training', 'pytorch', 'tensorflow', 'xgboost'],
  },
  {
    slug: 'security-and-auth',
    name: 'Security & Auth',
    description: '身份认证、访问控制、漏洞防护与安全工程。',
    keywords: ['security', 'auth', 'authentication', 'authorization', 'oauth', 'jwt', 'vulnerability'],
  },
];

function normalizeText(input: string) {
  return input
    .toLowerCase()
    .replace(/[\/_\-.]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getRepoSearchText(repo: GitHubRepo) {
  const parts = [
    repo.fullName,
    repo.description,
    repo.aiSummary?.summary,
    repo.language,
  ].filter(Boolean);

  return normalizeText(parts.join(' '));
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function hasKeyword(text: string, keyword: string) {
  const normalizedKeyword = normalizeText(keyword);
  if (!normalizedKeyword) {
    return false;
  }

  const pattern = escapeRegExp(normalizedKeyword).replace(/\s+/g, '\\s+');
  const regex = new RegExp(`(^|[^a-z0-9])${pattern}([^a-z0-9]|$)`, 'i');
  if (regex.test(text)) {
    return true;
  }

  return text.includes(normalizedKeyword);
}

export function getTopicBySlug(slug: string) {
  return TOPIC_DEFINITIONS.find((topic) => topic.slug === slug) || null;
}

export function getReposByTopic(repos: GitHubRepo[], topic: TopicDefinition) {
  return repos.filter((repo) => {
    const text = getRepoSearchText(repo);
    if (topic.excludedKeywords?.some((keyword) => hasKeyword(text, keyword))) {
      return false;
    }

    return topic.keywords.some((keyword) => hasKeyword(text, keyword));
  });
}

export function getTopicStats(repos: GitHubRepo[]) {
  return TOPIC_DEFINITIONS.map((topic) => ({
    topic,
    count: getReposByTopic(repos, topic).length,
  }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);
}
