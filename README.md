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

**最后更新**: 2026-08-21 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 229.4k | 3.4k | 这是一个为工程师设计的实用技能集合，旨在帮助开发者进行真实的工程构建而非“氛围编码”。它包含一系列小型、可组合的 Shell 脚本，支持通过 Claude Code 插件或 npx 安装。这些技能旨在提供工程控制权，简化开发流程，并允许用户根据需要进行定制。 |
| 2 | [mahlernim/google-timeline-visualizer](https://github.com/mahlernim/google-timeline-visualizer) | Visualize your year in travel using your Google Lo... | Kotlin | 2.2k | 1.0k | 该项目允许用户将 Google 位置历史数据转换为动画旅行视频。支持 Android 和 iOS 平台，用户需导出 Timeline.json 文件，选择日期范围和相机视角，最终生成 MP4 视频以便回顾和分享年度旅行足迹。 |
| 3 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD sho... | Python | 113.9k | 1.2k | 这是一个基于 Python 的一站式 AI 短视频生成工具。用户只需输入主题或关键词，系统即可自动生成视频脚本、匹配素材、添加字幕和背景音乐，并合成高清短视频。项目集成了多种大模型（如 Kimi、豆包等）和多媒体 API，旨在降低视频制作门槛，实现自动化内容生产。 |
| 4 | [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi) | ⚡️A native, local-first alternative to Logitech Op... | Rust | 12.9k | 1.4k | OpenLogi 是一款用 Rust 编写的本地优先开源软件，旨在替代 Logitech Options+。它支持跨平台（macOS/Linux/Windows），允许用户通过 HID++ 协议重映射鼠标按键、DPI、SmartShift 及键盘功能，且无需账户或遥测，提供纯文本配置和 CLI 工具。 |
| 5 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is the leading platform for building se... | Python | 38.3k | 334 | PostHog 是一个开源的全栈产品分析平台，提供会话回放、功能标志、A/B 测试、错误跟踪和日志分析等全方位开发者工具。它支持从 Slack 或 MCP 进行控制，能够捕获用户行为上下文，帮助团队主动诊断问题、发现机会并快速修复，且所有功能均可免费使用。 |
| 6 | [microsoft/TypeScript](https://github.com/microsoft/TypeScript) | TypeScript is a superset of JavaScript that compil... | Go | 110.4k | 65 | TypeScript 是微软开发的开源编程语言，作为 JavaScript 的超集，它引入了可选的静态类型系统。该项目旨在为大型 JavaScript 应用程序提供更好的工具支持，编译后生成标准且可读的 JavaScript 代码。它支持在任何浏览器、主机和操作系统上运行，广泛应用于现代前端开发，帮助开发者构建更健壮的应用。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 275.6k | 789 | Superpowers 是一个为 AI 编码代理构建的技能框架与软件开发方法论。它通过一套可组合的技能，引导代理从需求分析、规范拆解、实施计划制定到自主执行开发的全流程。强调 TDD、YAGNI 和 DRY 原则，支持多种主流 AI 编码工具。 |
| 8 | [santifer/career-ops](https://github.com/santifer/career-ops) | Open-source AI job search: scan job portals, evalu... | JavaScript | 67.4k | 918 | 这是一个开源的 AI 求职助手，旨在通过 AI 编码 CLI（如 Claude Code）自动化求职流程。它能自动扫描职位门户，利用结构化评分系统（A-F 评分，1.0-5.0）评估职位匹配度，并生成 ATS 优化的 PDF 简历。项目强调“过滤器”理念，帮助用户筛选高质量职位，避免盲目投递，从而提高求职效率。 |
| 9 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 4.4k | 391 | 该项目是 Cursor 编辑器的官方插件集合，包含教学、持续学习、团队工作流、代码审查、自动化等多种工具。涵盖 AI 代理协作、文档渲染、CLI 设计模式及生产力集成（如 Gmail/Drive），旨在提升开发效率和代码质量。 |
| 10 | [modular/modular](https://github.com/modular/modular) | The Modular Platform (includes MAX & Mojo)... | Mojo | 28.7k | 905 | Modular Platform 是一个统一的 AI 开发和部署平台，包含 Mojo 编程语言和 MAX 框架。项目开源了编译器、标准库、加速器库、推理服务器及模型管道等核心组件，旨在提供高性能的 AI 开发体验。 |
| 11 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 241.8k | 348 | ECC 是一个代理框架性能优化系统，为 Claude Code、Codex 等提供技能、记忆和安全功能。它通过“计划-测试-审查”等流程优化上下文窗口，将重复性工作转化为可复用技能，支持研究优先的开发模式。 |
| 12 | [TryGhost/Ghost](https://github.com/TryGhost/Ghost) | Independent technology for modern publishing, memb... | JavaScript | 54.9k | 32 | Ghost 是一个基于 JavaScript 的现代发布平台，专注于博客、会员资格和新闻通讯。它提供官方托管服务（Ghost(Pro)）以实现快速部署，支持通过 CLI 进行本地和生产环境安装。该项目由 Ghost 基金会维护，鼓励开源贡献和社区支持。 |
| 13 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent meta-harness. Deploy intelli... | TypeScript | 68.6k | 140 | Ruflo 是一个为 Claude Code 和 Codex 提供的智能执行层（Harness），旨在部署协调多智能体群组。它集成了 100+ 专用代理、自适应记忆、自我学习能力和联邦通信，支持 RAG 和企业安全。用户只需初始化即可自动路由任务，让 AI 代理在后台协作，无需手动管理复杂工具。 |
| 14 | [apache/maka](https://github.com/apache/maka) | Apache Maka (Incubating) is a local-first AI agent... | TypeScript | 2.0k | 141 | Apache Maka 是一个本地优先的 AI 代理工作空间，旨在进行实际工作。它通过追加日志记录模型消息、工具调用和结果，作为可恢复的执行事实。支持桌面、终端和评估界面，允许在本地模型或云 API 之间进行灵活连接，并执行复杂的工具操作。 |
| 15 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 71.8k | 4 | Protocol Buffers 是 Google 开发的语言中立、平台中立的数据序列化机制。它支持高效的结构化数据交换，适用于多种编程语言。项目提供了源码构建指南及 Bazel 构建支持，是构建高性能、跨平台分布式系统的核心工具。 |
| 16 | [elder-plinius/OBLITERATUS](https://github.com/elder-plinius/OBLITERATUS) | OBLITERATE THE CHAINS THAT BIND YOU... | Python | 7.8k | 63 | OBLITERATUS 是一个用于移除大语言模型拒绝行为的先进开源工具包。它通过识别并切断内部表示，无需重新训练即可让模型响应所有提示。项目支持在 HuggingFace Spaces 上免费运行，并允许用户贡献数据参与分布式研究。 |
| 17 | [microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) | ONNX Runtime: cross-platform, high performance ML ... | C++ | 21.4k | 5 | ONNX Runtime 是一个跨平台的高性能机器学习推理和训练加速器。它支持 PyTorch、TensorFlow 等深度学习框架及 scikit-learn 等传统库的模型，兼容多种硬件和操作系统。通过利用硬件加速器和图优化技术，它能显著提升推理速度和降低成本，并支持多节点 NVIDIA GPU 上的模型训练加速。 |

[查看完整数据](api/github/2026-08-21.json)
<!-- END GITHUB TRENDING -->




