# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
4. **数据归档**: 将数据按日期归档到 `api/github/` 目录
5. **数据可视化**: [在线查看](https://github-trending-history.vercel.app/)每日 GitHub Trending 数据

## 数据结构

每个项目包含以下信息：
- `fullName`: 仓库全名（owner/repo）
- `description`: 项目描述
- `language`: 主要编程语言
- `stars`: 总 Star 数
- `forks`: Fork 数
- `todayStars`: 今日新增 Star 数
- `url`: 项目链接
- `aiSummary`: AI 生成的总结
  - `summary`: 项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

# 运行抓取
pnpm start
```

## 数据访问

原始数据存储在 `api/github/YYYY-MM-DD.json`，可以直接通过以下方式访问：

```
https://raw.githubusercontent.com/lxw15337674/github-trending-history/master/api/github/2025-12-15.json
```

## License

MIT

---

<!-- BEGIN GITHUB TRENDING -->
## 📊 GitHub Trending

**最后更新**: 2026-02-25 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ An adaptive Web Scraping framework that handle... | Python | 14.9k | 1.8k | Scrapling是自适应网络爬虫框架，支持单请求到大规模爬取。自动处理网页结构变化，内置反反爬功能（如Cloudflare），提供异步爬虫、代理旋转、实时统计和CLI工具，简化数据采集流程。 |
| 2 | [huggingface/skills](https://github.com/huggingface/skills) | ... | Python | 6.3k | 1.5k | Hugging Face Skills 提供标准化的AI/ML任务定义，支持多种编码代理工具。每个技能为自包含文件夹，包含指令、脚本和资源，通过SKILL.md文件定义流程，兼容Claude Code、Codex、Gemini等工具。 |
| 3 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 3.7k | 936 | GitNexus 是一款浏览器端代码知识图谱生成工具，支持通过GitHub仓库或ZIP文件构建交互式代码关系图谱，并集成Graph RAG代理实现深度代码分析。提供CLI和Web UI两种使用方式，适用于AI代理的代码理解与智能查询场景。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 61.8k | 1.2k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理驱动的工作流实现自动化编码。强调TDD、YAGNI和DRY原则，支持编码代理在获得设计确认后自主执行开发任务，减少人工干预。 |
| 5 | [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | A comprehensive collection of Agent Skills for con... | Python | 10.6k | 1.0k | 该项目提供一套代理技能工具集，专注于上下文工程以优化AI代理系统。通过管理上下文窗口、解决注意力机制问题，提升代理在复杂任务中的表现，涵盖基础技能、故障识别与压缩方法。 |
| 6 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程... | Python | 21.9k | 283 | 《从零开始构建智能体》教程，涵盖智能体原理、框架开发、高级技术（记忆系统、上下文工程）及实战案例，结合理论与实践指导AI原生智能体开发。 |
| 7 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source SuperAgent harness that researches,... | TypeScript | 20.4k | 55 | DeerFlow 是一个开源的超级代理框架，通过子代理、沙箱、记忆和技能协同处理复杂任务。支持多步骤任务自动化，具备上下文工程和长期记忆功能，适用于研究、数据处理等需要智能协作的场景。 |
| 8 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 17.7k | 378 | PageIndex是一个无需向量数据库和分块的推理型RAG系统，通过构建文档结构树索引并利用LLM进行树状推理检索，提升长文档精准检索效果。支持PDF图像直接处理，适用于需要领域知识和多步推理的文档分析场景。 |
| 9 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like openclaw (mo... | Python | 10.8k | 222 | memU是面向24/7主动代理的内存框架，通过文件系统结构化管理长期记忆，降低LLM token成本。支持用户意图主动识别、跨记忆链接和知识图谱构建，适用于持续在线的智能代理系统。 |
| 10 | [ruvnet/ruvector](https://github.com/ruvnet/ruvector) | RuVector is a High Performance, Real-Time, Self-Le... | Rust | 1.2k | 437 | RuVector是用Rust开发的高性能向量图神经网络与数据库，支持实时自学习、本地LLM运行、图查询和水平扩展。通过单文件部署，具备认知容器特性，可自动优化搜索结果并实现分布式集群，适用于需要动态数据关系分析的AI场景。 |
| 11 | [NVIDIA/Megatron-LM](https://github.com/NVIDIA/Megatron-LM) | Ongoing research training transformer models at sc... | Python | 15.3k | 62 | NVIDIA/Megatron-LM 是用于大规模Transformer模型研究的分布式训练框架，包含预配置训练脚本（Megatron-LM）和可组合的GPU优化库（Megatron Core），支持多种并行策略、混合精度及模型转换工具，适用于研究团队和框架开发者。 |
| 12 | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need - A nano Claude Code–like age... | TypeScript | 17.9k | 174 | 基于TypeScript的AI编码代理构建教程，通过12个阶段教学展示从基础循环到进程隔离、状态管理等核心机制，模拟Claude Code功能实现自动化任务处理。 |
| 13 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 124.1k | 1.2k | 该项目收集了30,000+行AI工具系统提示、内部工具和模型配置，涵盖Claude Code、Comet、VSCode Agent等主流AI开发工具，提供AI系统结构分析与安全研究价值。 |
| 14 | [katanemo/plano](https://github.com/katanemo/plano) | Delivery infrastructure for agentic apps - Plano i... | Rust | 5.5k | 199 | Plano是Rust编写的AI原生代理与数据平面，专注于智能体应用的基础设施管理。通过集中处理路由协调、信号追踪、安全过滤和模型调度，降低开发复杂度，提升生产部署效率。 |
| 15 | [liyupi/ai-guide](https://github.com/liyupi/ai-guide) | 程序员鱼皮的 AI 资源大全 + Vibe Coding 零基础教程，分享大模型选择指南（DeepS... | JavaScript | 7.7k | 203 | AI资源导航与零基础教程，整合大模型选择、编程工具、实战项目及变现指南，提供免费学习路径和工具测评。 |
| 16 | [siteboon/claudecodeui](https://github.com/siteboon/claudecodeui) | Use Claude Code, Cursor CLI or Codex on mobile and... | TypeScript | 7.0k | 101 | 提供Claude Code、Cursor CLI和Codex的跨平台图形界面，支持移动端与桌面端操作，具备响应式设计、实时聊天、终端集成、文件管理、Git操作及会话管理功能，简化代码工具的远程交互与项目管理。 |

[查看完整数据](api/github/2026-02-25.json)
<!-- END GITHUB TRENDING -->








