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

**最后更新**: 2026-10-02 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 88.7k | 696 | Agent Reach 是一个 Python 工具，为 AI Agent 提供全网信息获取能力。它通过 CLI 实现零 API 费用，支持 Twitter、Reddit、YouTube、GitHub、Bilibili 等平台。项目主打免费、开源、隐私安全，具备自动切换失效接口的“持续换代”机制，兼容所有命令行 Agent，解决 Agent 无法获取外部信息的问题。 |
| 2 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick. Vir... | Go | 109.1k | 209 | 这是一个 Go 语言项目，通过“穴居人”风格压缩 AI 交互来大幅节省 token。它提供代理技能、本地代理和中间件，能将 AI 输出及日志、测试结果等输入压缩 65%，降低成本并提升效率，适用于 LangChain、OpenAI 等主流 AI 编码框架。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 294.5k | 556 | Superpowers 是一个为编码代理设计的代理技能框架和软件开发方法论。它通过一套可组合的技能和指令，引导代理在编写代码前先与用户确认需求、展示设计并制定实施计划。系统强调 TDD、YAGNI 和 DRY 原则，支持多种主流 AI 编码工具，旨在实现自主且高质量的软件开发。 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 151.9k | 1.4k | Ponytail 是一个 JavaScript 项目，旨在通过模拟“懒惰资深开发者”的思维模式，优化 AI 代理的代码生成。它鼓励使用浏览器原生功能或极简方案，避免过度工程。实测显示，它能减少 54% 的代码量，降低成本并提升速度，同时保持 100% 安全性。适用于需要 AI 生成高效、简洁代码的场景。 |
| 5 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 74.3k | 722 | Impeccable 是一个为 AI 编码代理提供设计指导的开源项目。它包含 24 个命令、61 条确定性检测规则及实时浏览器迭代功能，旨在防止 AI 生成重复的 SaaS 模板，确保设计独特性。 |
| 6 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 274.7k | 955 | 该项目提供了一套专为真实工程设计的 AI 技能集合，强调小型、可组合和易定制。它支持 Claude Code 和 Codex 等多种编程代理，通过 npx 快速安装，帮助开发者掌控开发流程，避免被框架束缚。 |
| 7 | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | OpenShell is the safe, private runtime for autonom... | Rust | 14.4k | 594 | OpenShell 是 NVIDIA 开发的 Rust 语言安全运行时，专为自主 AI 代理设计。它通过内核级强制执行和形式化验证，在赋予代理访问文件、API 和凭据能力的同时，严格限制其对敏感数据的访问。它确保代理只能在策略允许的范围内操作，防止未经授权的访问。 |
| 8 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CR... | JavaScript | 52.4k | 140 | 这是一个为 Claude Code 和 AI 代理提供营销技能的集合，涵盖 CRO、文案、SEO、分析和增长工程。旨在帮助技术型营销人员和创始人利用 AI 编码代理提升营销效率，支持多种主流 AI 编辑器。 |
| 9 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Write HTML. Render video. Built for agents.... | TypeScript | 55.9k | 580 | HyperFrames 是一个开源框架，用于将 HTML、CSS、媒体和动画转换为确定性的 MP4 视频。它支持本地 CLI 和 AI 编码代理（如 Claude Code），帮助开发者快速生成视频内容。 |
| 10 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 25.0k | 282 | 这是一个针对 AI 编码代理的上下文窗口优化工具。它通过沙箱化工具输出（减少 98%）、利用 SQLite 和 FTS5 索引持久化会话记忆，并强制 LLM 编写脚本执行计算而非读取大量文件，从而解决上下文丢失和冗余问题，支持 17 个平台。 |
| 11 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 20.8k | 39 | 该项目为 Google 产品和技术提供 Agent Skills（代理技能），涵盖 Google Cloud 入门、多产品解决方案、AI/ML 工作流及基础设施管理（如 GKE、GCP）。用户可通过 npx 安装特定技能，用于构建、部署和管理 AI 代理及云基础设施。 |
| 12 | [getsentry/sentry](https://github.com/getsentry/sentry) | Developer-first error tracking and performance mon... | Python | 45.0k | 16 | Sentry 是一个开发者优先的错误追踪和性能监控平台，旨在帮助开发团队快速检测、追踪并修复代码中的问题。它支持多种主流编程语言和框架，提供 SDK，是现代软件开发中不可或缺的调试工具。 |
| 13 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph, auto syncs on co... | C | 73.0k | 98 | CodeGraph 是一个预索引代码知识图谱工具，支持自动同步代码变更。它为 Claude Code、Cursor、Copilot 等 AI 代理提供语义代码智能，旨在减少 Token 消耗和工具调用，确保 100% 本地运行。 |
| 14 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 9.5k | 163 | 该项目提供了 Cursor 编辑器的插件规范及一系列官方开发工具插件。插件功能涵盖持续学习、团队协作、代码审查、文档渲染、代理兼容性检查、任务编排及插件脚手架等，旨在增强 AI 编程助手的开发效率与能力。 |
| 15 | [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | Build your own network of agents from Claude Code,... | TypeScript | 4.3k | 683 | OpenRig 是一个开源的 AI 代理网络构建工具，允许用户通过 YAML 定义由 Claude Code、Codex 等组成的持久化团队。它将多个 AI 编码代理从零散的终端会话整合为具有角色、共享上下文和协作能力的系统，适合自动化复杂开发任务和 AI 文明实验。 |
| 16 | [Effect-TS/effect](https://github.com/Effect-TS/effect) | Build production-ready applications in TypeScript... | TypeScript | 16.6k | 80 | Effect 是一个用于构建健壮、可维护、类型安全且生产级 TypeScript 应用的库。它提供了类型化错误处理、依赖注入、结构化并发、调度、追踪和统一模式验证等高级功能。Effect 4.x 是长期支持版本，旨在解决大规模应用中的复杂问题，适合需要高可靠性和严格类型检查的企业级项目。 |
| 17 | [pablostanley/yoinks](https://github.com/pablostanley/yoinks) | yoink any video from your terminal. no shady ads.... | TypeScript | 3.5k | 623 | 这是一个基于 TypeScript 的终端视频下载工具，利用 yt-dlp 和 ffmpeg 后端，支持从 YouTube、TikTok 等数千个网站下载视频或音频。UI 使用 Ink 构建，提供交互式菜单和自动主题适配，无需安装即可通过 npx 运行，适合命令行用户快速获取媒体资源。 |

[查看完整数据](api/github/2026-10-02.json)
<!-- END GITHUB TRENDING -->




