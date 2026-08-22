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

**最后更新**: 2026-08-22 | **成功**: 16 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [openai/codex](https://github.com/openai/codex) | Lightweight coding agent that runs in your termina... | Rust | 113.3k | 2.0k | Codex CLI 是 OpenAI 推出的轻量级本地编码代理，基于 Rust 开发。它允许用户在终端中直接运行，支持通过多种方式（如 Homebrew、npm 或手动下载）安装。用户可以登录 ChatGPT 账户，利用 AI 辅助代码编写，提供流畅的本地开发体验。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 232.0k | 2.7k | 这是一套专为工程师设计的AI编程技能集合，基于Shell脚本开发。旨在辅助进行真实的软件开发，而非简单的代码生成。这些技能小巧、可组合，支持Claude Code等主流AI编程助手，通过插件或命令行安装，帮助开发者提升工程效率和代码质量。 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 242.2k | 428 | ECC 是一个面向 AI 代理（如 Claude Code）的性能优化系统。它提供了一套完整的工程工具箱，包含技能、记忆、安全及研究优先的开发流程。通过“计划-测试-实现-审查-验证-记忆-改进”的闭环工作流，ECC 帮助代理优化上下文窗口，持久化关键信息，并将重复的成功转化为可复用的技能与工作流，适用于多种主流 AI 编程助手。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 276.2k | 592 | Superpowers 是一个为编码代理设计的软件开发方法论框架。它通过一套可组合的技能，引导代理从需求分析、设计评审到自动化实现的全流程。支持多种主流 AI 编码工具，强调 TDD、YAGNI 和 DRY 原则，旨在让代理具备自主构建软件的能力。 |
| 5 | [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一... | Go | 38.8k | 264 | 这是一个基于 Go 语言开发的 AI API 网关中转服务，旨在统一接入 Claude、OpenAI、Gemini、Grok 等主流大模型订阅。它支持拼车共享模式以高效分摊成本，允许原生工具无缝使用，但用户需自行承担使用风险。 |
| 6 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥🔥🔥 Open-source Jira, Linear, Monday, and Click... | TypeScript | 57.2k | 263 | Plane 是一个开源的项目管理平台，旨在替代 Jira、Linear 等工具。它支持任务管理、冲刺周期、产品路线图及文档协作。用户可选择自托管或使用云服务。核心功能包括 Work Items、Cycles、Modules、Views、Pages（含 AI）和 Analytics，提供现代化的团队协作体验。 |
| 7 | [n8n-io/n8n](https://github.com/n8n-io/n8n) | Fair-code workflow automation platform with native... | TypeScript | 201.8k | 202 | n8n 是一个 Fair-code 工作流自动化平台，专注于 AI 代理和自动化。它结合了可视化画布与自定义代码，拥有 1500+ 集成和 9000+ 模板。支持自托管或云端部署，灵活连接多种 AI 模型，适合从原型到生产环境的 AI 工作流开发。 |
| 8 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Python | 142.5k | 141 | Claude Code 是一个基于 Python 的终端代理编码工具，旨在通过自然语言命令加速开发。它能理解代码库，执行常规任务，解释复杂代码，并处理 Git 工作流。支持在终端、IDE 或 GitHub 中使用，提供插件扩展功能。 |
| 9 | [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi) | ⚡️A native, local-first alternative to Logitech Op... | Rust | 13.9k | 959 | OpenLogi 是一个用 Rust 编写的开源替代方案，旨在替代 Logitech Options+。它支持鼠标、键盘和摄像头，允许用户重映射按钮、DPI、SmartShift 及灯光。项目支持 macOS、Linux 和 Windows，提供 CLI 和 GUI，配置采用纯文本 TOML 格式，无账户及遥测功能。 |
| 10 | [modular/modular](https://github.com/modular/modular) | The Modular Platform (includes MAX & Mojo)... | Mojo | 28.8k | 395 | Modular Platform 是一个统一的 AI 开发与部署平台，集成了 Mojo 编程语言和 MAX 框架。项目开源了编译器、标准库、加速库、推理服务器及模型管道等核心组件，旨在提供高性能的 AI 开发体验。 |
| 11 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 205.3k | 379 | 这是一个基于 Andrej Karpathy 关于 LLM 编码观察的单一 CLAUDE.md 文件，旨在改善 Claude Code 的行为。它包含四个核心原则：思考前编码、简单优先、外科手术式更改和目标驱动执行。这些原则旨在解决 LLM 常见的假设错误、过度复杂化代码、破坏性更改等问题，帮助开发者编写更简洁、可靠和可维护的代码。 |
| 12 | [mahlernim/google-timeline-visualizer](https://github.com/mahlernim/google-timeline-visualizer) | Visualize your year in travel using your Google Lo... | Kotlin | 2.6k | 441 | 该项目可将 Google 位置历史数据转换为动画旅行视频。支持 Android 和 iPhone 平台，用户导出 Timeline.json 文件后，可选择日期范围和相机运镜，生成 MP4 视频进行分享。 |
| 13 | [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | A list of SaaS, PaaS and IaaS offerings that have ... | HTML | 133.9k | 915 | 这是一个由社区维护的免费开发者服务列表，涵盖 SaaS、PaaS 和 IaaS。它专注于基础设施开发人员常用的工具，包括云服务、CI/CD、监控、数据库等。所有收录的服务必须提供长期有效的免费层级，而非仅限试用。 |
| 14 | [microsoft/TypeScript](https://github.com/microsoft/TypeScript) | TypeScript is a superset of JavaScript that compil... | Go | 110.5k | 163 | TypeScript 是 JavaScript 的超集，通过添加可选静态类型系统，显著提升了大型应用的开发效率和代码可维护性。它编译为标准 JavaScript，支持跨平台和跨浏览器运行，是现代前端开发的核心工具。 |
| 15 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 4.7k | 286 | 该项目是 Cursor 编辑器的官方插件集合，涵盖教学、持续学习、团队协作、代码审查及自动化工具。包含 Gmail 和 Google Drive 等生产力插件，技术栈主要为 TypeScript，旨在增强 AI 编程辅助能力，提供从开发到管理的全方位支持。 |
| 16 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is the leading platform for building se... | Python | 38.6k | 288 | 处理失败 |
| 17 | [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | A full-stack AI Red Teaming platform securing AI e... | Python | 5.5k | 161 | 腾讯朱雀实验室开发的 AI-Infra-Guard 是一个全栈 AI 红队平台。它集成了 Agent 扫描、技能扫描、MCP 扫描、AI 基础设施扫描和 LLM 越狱评估等功能，旨在为用户提供全面的 AI 安全风险自我检查解决方案。 |

[查看完整数据](api/github/2026-08-22.json)
<!-- END GITHUB TRENDING -->




