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

**最后更新**: 2026-08-20 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [modular/modular](https://github.com/modular/modular) | The Modular Platform (includes MAX & Mojo)... | Mojo | 27.9k | 340 | Modular Platform 是一个统一的 AI 开发和部署平台，包含 Mojo 编程语言和 MAX 框架。该项目开源了核心组件，包括 Mojo 编译器、标准库、MAX 加速器库、推理服务器及模型管道等。它旨在提供高性能的 AI 开发体验，支持模型部署，并接受社区贡献。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 226.4k | 2.3k | 该项目提供了一套面向真实工程师的实用技能集合，旨在通过小型、可组合的脚本解决开发流程中的控制权问题。支持 Claude Code 和其他 AI 代理，帮助开发者摆脱“氛围编码”，专注于实际应用构建。 |
| 3 | [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi) | ⚡️A native, local-first alternative to Logitech Op... | Rust | 11.8k | 1.5k | OpenLogi 是一款用 Rust 编写的本地优先的 Logitech Options+ 替代品。它支持重映射鼠标按钮、DPI、SmartShift 和键盘 F 键，支持手势和应用程序配置文件。它跨平台运行，无需账户或遥测，并提供 CLI 和 GUI。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 274.9k | 749 | Superpowers 是一个为编码智能体设计的技能框架和软件开发方法论。它通过一套可组合的技能和指令，引导智能体从需求分析到设计审查，再到基于 TDD、YAGNI 和 DRY 原则的实施计划，最后通过子代理驱动开发实现自主编码。它支持多种主流 AI 编码工具，旨在提升智能体的开发效率和代码质量。 |
| 5 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 4.1k | 473 | 该项目是 Cursor 编辑器的官方插件集合，包含教学、持续学习、团队协作、代码审查、自动化工具等多种插件。它提供了插件开发规范和 SDK，支持构建 AI 代理、并行任务编排及文档/PR 可视化，旨在提升开发效率和代码质量。 |
| 6 | [santifer/career-ops](https://github.com/santifer/career-ops) | Open-source AI job search: scan job portals, evalu... | JavaScript | 66.6k | 855 | 这是一个开源的 AI 求职工具，利用 AI 编码 CLI 在本地运行。它可以自动扫描职位门户，使用结构化评分系统（1-5分）评估职位匹配度，并生成针对特定职位的 ATS 优化简历。它旨在帮助求职者高效筛选高质量职位，而非盲目投递。 |
| 7 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 3.6k | 335 | 这是一个用 Rust 编写的项目，旨在为 AI 编码 CLI 提供长期记忆解决方案。它允许用户在不同的 AI Agent（如 Claude Code 和 Codex）之间无缝切换，无需重新解释项目架构或上下文，支持 Linux、macOS、Windows 等多平台。 |
| 8 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD sho... | Python | 112.9k | 2.8k | 这是一个基于 Python 的一站式 AI 短视频生成工具。用户只需输入主题或关键词，系统利用大模型自动生成脚本、匹配素材、添加字幕和背景音乐，最终合成高清短视频。支持 WebUI 和 API 接口，极大降低了视频创作门槛。 |
| 9 | [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Agent Substrate: the core system... | Go | 1.4k | 66 | Agent Substrate 是一个用 Go 编写的核心系统，旨在为大规模代理部署提供高性能、高密度的运行时环境。它支持微秒级的暂停/恢复操作，利用 Kubernetes 进行基础设施管理，并能将大量代理高效地多路复用到较少的工作节点上，适用于 AI 代理等应用的规模化运行。 |
| 10 | [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | local multi-agent harness... | TypeScript | 3.1k | 517 | 这是一个本地多代理协作编排工具，将Claude、Gemini等终端编码CLI包装成具有记忆能力的智能代理。它通过Electron构建桌面应用，利用Pixi.js可视化代理在办公室的协作。用户克隆体“Michael”作为协调者，管理这些代理完成复杂任务，适合需要自动化和本地化AI协作的开发场景。 |
| 11 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is the leading platform for building se... | Python | 38.0k | 100 | PostHog 是一个全栈产品分析平台，集成了产品分析、会话回放、错误追踪、A/B 测试、功能标志及 AI 可观测性等工具。它支持从 Slack 或 MCP 管理数据，帮助开发者主动诊断问题、发现机会并快速修复，所有功能均可免费使用。 |
| 12 | [mahlernim/google-timeline-visualizer](https://github.com/mahlernim/google-timeline-visualizer) | Visualize your year in travel using your Google Lo... | Kotlin | 1.5k | 575 | 这是一个将 Google 位置历史数据转换为动画旅行视频的工具。支持 Android 和 iOS（Web 版）。用户可导出 Timeline.json 文件，选择日期范围和相机视角，生成 MP4 视频进行预览和分享。Android 版本需安装 APK，iOS 版本通过 Safari Web App 使用，无需上传文件。 |
| 13 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Self-evolving Context Database for AI Agents. Unif... | Python | 31.0k | 955 | OpenViking 是一个开源的 AI Agent 上下文数据库，通过虚拟文件系统（viking:// 协议）统一管理记忆、知识和技能。它采用分层加载机制（L0-L2）以节省 Token，支持可观察的检索轨迹，并能将会话转化为长期记忆，帮助 Agent 更高效地处理上下文。 |
| 14 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick — Cl... | Go | 99.6k | 309 | 该项目通过“穴居人模式”大幅降低 AI 代理的 Token 消耗。包含 Caveman Proxy（本地代理，压缩输入数据）和 Caveman Skill（让 Agent 用简短语言回答）。两者结合可减少约 65% Token，在保持代码准确性的同时显著降低成本。 |
| 15 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥🔥🔥 Open-source Jira, Linear, Monday, and Click... | TypeScript | 56.5k | 206 | Plane 是一个开源的项目管理平台，旨在替代 Jira、Linear 等工具。它提供任务管理、冲刺周期、模块化、自定义视图、文档编写（含 AI）以及实时数据分析等功能。支持云端托管或自托管部署。 |
| 16 | [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | A full-stack AI Red Teaming platform securing AI e... | Python | 4.9k | 28 | AI-Infra-Guard 是腾讯紫鹊实验室推出的全栈 AI 红队平台。它集成了 ClawScan、Agent Scan、MCP 扫描及 LLM 越狱评估等多种能力，旨在为用户提供全面的 AI 安全风险自检方案，帮助开发者发现并修复 AI 基础设施及应用中的漏洞。 |
| 17 | [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | A vector index built on TurboQuant, written in Rus... | Rust | 15.9k | 251 | turbovec 是一个基于 TurboQuant 算法的 Rust 向量索引库，提供 Python 绑定。它具有极高的压缩率（10M 文档仅需 4GB 内存），支持在线增量摄取和快速 SIMD 搜索，性能优于 FAISS。它支持搜索时过滤和纯本地部署，适合对隐私、内存和延迟敏感的 RAG 场景。 |

[查看完整数据](api/github/2026-08-20.json)
<!-- END GITHUB TRENDING -->




