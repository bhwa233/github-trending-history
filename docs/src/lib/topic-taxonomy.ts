import type { GitHubRepo } from '@/lib/trending-data';

import type { SiteLocale } from '@/i18n/config';

export interface TopicLocaleText {
  'zh-CN': string;
  en: string;
}

export interface TopicDefinition {
  slug: string;
  name: TopicLocaleText;
  description: TopicLocaleText;
  keywords: string[];
  excludedKeywords?: string[];
}

export const TOPIC_DEFINITIONS: TopicDefinition[] = [
  {
    slug: 'coding-agents',
    name: { 'zh-CN': 'Coding Agents', en: 'Coding Agents' },
    description: { 'zh-CN': 'AI 编程助手、代码智能体与自动化开发工作流。', en: 'AI coding assistants, coding agents, and automated developer workflows.' },
    keywords: ['agentic coding', 'coding agent', 'code agent', 'claude code', 'aider', 'copilot', 'autonomous coding'],
  },
  {
    slug: 'ai-agents',
    name: { 'zh-CN': 'AI Agents', en: 'AI Agents' },
    description: { 'zh-CN': '通用智能体框架、Agent 平台与多代理协作。', en: 'General agent frameworks, agent platforms, and multi-agent collaboration.' },
    keywords: ['agent framework', 'multi-agent', 'autonomous agent', 'agent orchestration', 'agents'],
  },
  {
    slug: 'rag-knowledge-bases',
    name: { 'zh-CN': 'RAG 与知识库', en: 'RAG & Knowledge Bases' },
    description: { 'zh-CN': '检索增强生成、向量检索与知识库应用。', en: 'Retrieval-augmented generation, vector retrieval, and knowledge base applications.' },
    keywords: ['rag', 'retrieval', 'knowledge base', 'vector database', 'embedding', 'langchain', 'llamaindex'],
    excludedKeywords: ['garage'],
  },
  {
    slug: 'llm-inference',
    name: { 'zh-CN': 'LLM 推理', en: 'LLM Inference' },
    description: { 'zh-CN': '大模型推理、服务化部署与模型应用。', en: 'LLM inference, model serving, and production applications.' },
    keywords: ['llm', 'inference', 'chat model', 'transformer', 'prompt engineering'],
  },
  {
    slug: 'ai-audio-and-tts',
    name: { 'zh-CN': 'AI 音频与 TTS', en: 'AI Audio & TTS' },
    description: { 'zh-CN': '语音合成、语音识别、音频生成和声音模型。', en: 'Speech synthesis, speech recognition, audio generation, and voice models.' },
    keywords: ['tts', 'speech', 'voice', 'audio', 'asr', 'stt'],
  },
  {
    slug: 'developer-cli-tools',
    name: { 'zh-CN': '开发者 CLI 工具', en: 'Developer CLI Tools' },
    description: { 'zh-CN': '命令行效率工具、终端助手、开发者自动化。', en: 'CLI productivity tools, terminal helpers, and developer automation.' },
    keywords: ['cli', 'terminal', 'command line', 'shell', 'developer tool', 'devtool', 'command-line'],
    excludedKeywords: ['client'],
  },
  {
    slug: 'frontend-web',
    name: { 'zh-CN': '前端与 Web', en: 'Frontend & Web' },
    description: { 'zh-CN': '前端框架、Web 应用、UI 组件和交互开发。', en: 'Frontend frameworks, web apps, UI components, and interactive development.' },
    keywords: ['react', 'next.js', 'nextjs', 'vue', 'svelte', 'frontend', 'web ui', 'tailwind', 'ui component'],
  },
  {
    slug: 'backend-and-api',
    name: { 'zh-CN': '后端与 API', en: 'Backend & API' },
    description: { 'zh-CN': '后端服务、API 框架、网关和服务端工程。', en: 'Backend services, API frameworks, gateways, and server-side engineering.' },
    keywords: ['backend', 'api', 'server', 'microservice', 'rest api', 'graphql'],
  },
  {
    slug: 'devops-and-infra',
    name: { 'zh-CN': 'DevOps 与基础设施', en: 'DevOps & Infra' },
    description: { 'zh-CN': '部署、容器、云原生、可观测性与基础设施。', en: 'Deployment, containers, cloud-native operations, observability, and infrastructure.' },
    keywords: ['kubernetes', 'docker', 'devops', 'infra', 'cloud', 'monitoring', 'observability'],
  },
  {
    slug: 'data-and-ml',
    name: { 'zh-CN': '数据与机器学习', en: 'Data & ML' },
    description: { 'zh-CN': '数据处理、机器学习训练、推理与分析工具链。', en: 'Data processing, ML training, inference, and analytics toolchains.' },
    keywords: ['machine learning', 'ml', 'data pipeline', 'dataset', 'training', 'pytorch', 'tensorflow', 'xgboost'],
  },
  {
    slug: 'security-and-auth',
    name: { 'zh-CN': '安全与认证', en: 'Security & Auth' },
    description: { 'zh-CN': '身份认证、访问控制、漏洞防护与安全工程。', en: 'Identity, access control, vulnerability defense, and security engineering.' },
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

export function getTopicLocalizedName(topic: TopicDefinition, locale: SiteLocale) {
  return topic.name[locale];
}

export function getTopicLocalizedDescription(topic: TopicDefinition, locale: SiteLocale) {
  return topic.description[locale];
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
