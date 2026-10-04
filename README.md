# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
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
  - `summary_en`: 英文项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景
  - `useCase_en`: 英文适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

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

**最后更新**: 2026-10-03 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 153.5k | 1.3k | Ponytail 是一个 JavaScript 项目，旨在让 AI 代理表现得像最懒的高级开发人员。它通过注入特定提示词，鼓励 AI 编写最少的代码，避免过度工程。实测显示，它能减少约 54% 的代码量、降低成本并提高速度，同时保持 100% 的安全性。适用于希望优化 AI 编码效率、减少冗余代码的开发者。 |
| 2 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 75.4k | 699 | 这是一个为 AI 编码代理提供的设计语言，旨在解决 AI 生成前端设计时的重复性问题。它包含 24 个命令、61 条确定性检测规则和实时浏览器迭代功能。通过 /impeccable init 记录产品真理，帮助 AI 生成更独特、高质量的设计。 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 272.3k | 897 | ECC 是一个针对 Claude Code、Codex 等代理的性能优化系统。它提供协调工程工具箱，包含计划、测试、审查、记忆和技能等功能，旨在优化上下文窗口并提升开发效率。 |
| 4 | [Effect-TS/effect](https://github.com/Effect-TS/effect) | Build production-ready applications in TypeScript... | TypeScript | 16.8k | 302 | Effect 是一个用于构建健壮、可维护且类型安全的生产级 TypeScript 应用的库。它提供了类型化错误处理、依赖注入、结构化并发、调度、追踪和统一模式验证等高级功能，支持长期维护（LTS），适合构建大规模企业级应用。 |
| 5 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick. Vir... | Go | 109.6k | 507 | 这是一个 Go 语言项目，通过将 AI 代理的对话风格压缩为 'caveman' 语言，并压缩日志和工具输出，从而大幅减少 token 使用量。它提供了 skill、本地 proxy 和 middleware，旨在为 LLM 应用节省成本。 |
| 6 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 89.9k | 1.7k | Agent-Reach 是一个 Python CLI 工具，旨在为 AI Agent 提供互联网访问能力。它支持 Twitter、Reddit、YouTube、GitHub、Bilibili 和小红书等主流平台，无需付费 API。通过本地 Cookie 和开源工具，实现零成本、高隐私的网页抓取与内容检索，兼容所有命令行 Agent。 |
| 7 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 24.7k | 252 | T3 Code 是一个开源的 AI 代理控制台，旨在提供跨平台（移动端、Web、桌面端）的最佳开发体验。它支持集成 Claude、Codex、Cursor 等多种主流 AI 编程工具，通过统一的界面集中管理，无需切换应用，专注于高性能和远程协作。 |
| 8 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 95.6k | 79 | 这是一个专为 Claude Code 构建的持久记忆压缩系统。它自动捕获工具使用观察结果并生成语义摘要，确保 AI 代理在会话结束后或重新连接后仍能保持项目上下文的连续性，支持多种主流 AI 平台。 |
| 9 | [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os) | Agent workspace built on Cloudflare Workers for cr... | TypeScript | 10.6k | 85 | Cloudflare OS 是一个基于 Cloudflare Workers 的 AI 生产力环境。它提供 Agent 聊天界面、沙盒应用开发以及名为 Gatekeepers 的安全框架，旨在让非技术人员安全地使用 AI 完成任务。该项目开源，允许企业定制为“公司专属操作系统”。 |
| 10 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 100.9k | 252 | 该项目为 AI 编码代理提供生产级工程技能，通过 9 个斜杠命令将资深工程师的工作流、质量门控和最佳实践编码化。它覆盖从定义到发布的全生命周期，支持自动技能激活和自主实施，旨在提升 AI 开发的代码质量和一致性。 |
| 11 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 294.9k | 577 | Superpowers 是一个面向编码代理的代理技能框架与软件开发方法论。它通过引导用户定义需求、展示设计、制定实现计划（强调 TDD、YAGNI、DRY），并利用子代理自动执行开发任务，实现高效的自主编程。 |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 275.4k | 751 | 这是一个为工程师设计的技能集合，旨在帮助开发者进行真实的工程实践而非“氛围编码”。项目包含一系列小型、可组合的 Shell 脚本，支持 Claude Code 和 Codex 等编码代理。用户可通过插件或命令行工具安装，用于提升开发效率和代码质量。 |
| 13 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 25.3k | 256 | 这是一个针对AI编码代理的上下文窗口优化工具。通过沙箱化工具输出（减少98%数据）、SQLite持久化会话记忆（利用FTS5和BM25搜索）以及强制“代码思维”模式（让LLM编写脚本代替读取大量文件），解决上下文丢失和冗余问题，防止压缩时丢失状态。 |
| 14 | [earendil-works/pi](https://github.com/earendil-works/pi) | AI agent toolkit: unified LLM API, agent loop, TUI... | TypeScript | 112.2k | 408 | Pi 是一个极简且可扩展的 AI Agent 工具包，支持统一的 LLM API、Agent 循环和 TUI。它允许用户通过扩展、技能和模板自定义工作流，支持交互式使用、自动化脚本及 RPC 控制。项目默认不包含复杂功能，鼓励用户根据需求安装包或自行构建。 |
| 15 | [getsentry/sentry](https://github.com/getsentry/sentry) | Developer-first error tracking and performance mon... | Python | 45.2k | 214 | Sentry 是一个开发者优先的错误追踪和性能监控平台。它帮助开发者快速检测、追踪和修复代码问题。支持多种编程语言的 SDK，提供用户日志线索和调试答案，旨在提高开发效率和问题解决速度。 |
| 16 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 149.2k | 128 | Claude Code 是一个运行在终端中的智能编码工具，基于 Anthropic 的 Claude 模型。它能够理解代码库，通过自然语言命令执行常规任务、解释复杂代码以及处理 Git 工作流。支持多种安装方式，包含插件系统，旨在帮助开发者提高编码效率。 |
| 17 | [jamwithai/production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) | ... | Python | 9.4k | 193 | 这是一个专注于生产级 RAG 系统构建的实战课程项目。学员将通过7周的学习，从零开始构建一个基于 arXiv 的智能研究助手。课程强调专业路径，先掌握 BM25 关键词搜索，再结合向量检索。涵盖 Docker、FastAPI、PostgreSQL、OpenSearch 等全栈技术，最终实现 Agentic RAG 与 Telegram 机器人集成，适合希望掌握现代 AI 工程技能的开发者。 |
| 18 | [meituan-longcat/LongCat-Video](https://github.com/meituan-longcat/LongCat-Video) | ... | Python | 8.8k | 44 | LongCat-Video 是美团推出的 136 亿参数视频生成模型，支持文本转视频、图像转视频及视频续写。它采用统一架构，擅长生成无质量下降的高效长视频，并通过多奖励 RLHF 训练，性能媲美商业方案。 |
| 19 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 91.6k | 232 | OpenCut 是一款免费开源的视频编辑器，支持 Web、桌面及移动端。项目正在进行从零开始的架构重写，旨在提供插件优先的架构、编辑器 API、MCP 服务器支持及无头模式，以实现跨平台自动化和 AI 集成。目前经典版本仍在使用，重写版即将上线。 |

[查看完整数据](api/github/2026-10-03.json)
<!-- END GITHUB TRENDING -->




