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

**最后更新**: 2026-04-26 | **成功**: 12 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mattpocock/skills](https://github.com/mattpocock/skills) | Agent Skills for real engineers. Straight from my ... | Shell | 23.5k | 2.5k | 该项目是一套为 Claude AI 设计的工程化技能集，专注于真实开发而非“氛围编码”。它提供规划、设计及开发阶段的自动化工具，包括生成 PRD、拆分任务、TDD 测试驱动开发、代码重构计划及架构优化等，旨在提升工程师的效率与代码质量。 |
| 2 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 13.5k | 1.7k | 这是一个轻量级代理项目，旨在让Claude Code免费使用。它通过路由API调用至NVIDIA NIM、OpenRouter、DeepSeek等免费或本地提供商，实现零成本代码辅助。支持VSCode和CLI，无需修改原软件，具备多模型映射、思考块解析及Discord机器人等功能。 |
| 3 | [Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool) | ALL IN ONE Hacking Tool For Hackers... | Python | 65.4k | 1.7k | 这是一个功能全面的黑客工具箱，包含185+种安全工具，涵盖信息收集、Web攻击、DDOS、云安全等20个类别。支持Python 3.10+，具备搜索、标签过滤、智能安装和更新功能。提供交互式终端界面，支持Docker部署，旨在为安全研究人员提供便捷的一站式渗透测试解决方案。 |
| 4 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 30.1k | 667 | GitNexus 是一个零服务器代码智能引擎，运行于浏览器端。它利用 Tree-sitter 将代码库索引为知识图谱，支持 CLI 和 Web UI 两种模式。通过 Graph RAG 技术，为 AI 代理（如 Cursor）提供深度架构视图，解决依赖缺失问题，强调本地隐私与高性能解析。 |
| 5 | [PostHog/posthog](https://github.com/PostHog/posthog) | 🦔 PostHog is an all-in-one developer platform for... | Python | 33.8k | 338 | 处理失败 |
| 6 | [microsoft/typescript-go](https://github.com/microsoft/typescript-go) | Staging repo for development of native port of Typ... | Go | 25.2k | 38 | 这是 TypeScript 的原生 Go 移植版本，目前处于预览阶段。项目实现了类型检查、解析、命令行工具及增量构建等核心功能，支持 JSX。虽然语言服务和部分 JS 特性仍在开发中，但已具备基本的编译能力。 |
| 7 | [trycua/cua](https://github.com/trycua/cua) | Open-source infrastructure for Computer-Use Agents... | HTML | 14.4k | 200 | Cua 是一个为计算机使用代理提供开源基础设施的项目。它包含 Cua Driver（用于 macOS 后台操作）、Cua（跨平台沙箱 SDK）和 CuaBot（协作沙箱工具）。支持 Linux、macOS、Windows、Android 等系统，提供云端和本地部署方案，旨在帮助训练和评估能够控制完整桌面的 AI 代理。 |
| 8 | [gastownhall/beads](https://github.com/gastownhall/beads) | Beads - A memory upgrade for your coding agent... | Go | 21.7k | 133 | Beads 是一个基于 Go 语言开发的分布式图问题跟踪器，专为 AI 编码代理提供持久化结构化记忆。它利用 Dolt 数据库实现版本控制和分支管理，通过依赖感知的图结构替代 Markdown，帮助代理处理长期任务。支持零冲突哈希 ID、语义压缩和消息线程。 |
| 9 | [curl/curl](https://github.com/curl/curl) | A command line tool and library for transferring d... | C | 41.5k | 50 | curl 是一个用 C 语言编写的开源命令行工具和库，用于通过 URL 语法传输数据。它支持超过 30 种协议，功能强大且广泛用于网络请求测试和软件开发。 |
| 10 | [home-assistant/core](https://github.com/home-assistant/core) | 🏡 Open source home automation that puts local con... | Python | 86.5k | 52 | Home Assistant 是一个开源的家庭自动化系统，优先强调本地控制和隐私保护。它基于模块化架构，支持在 Raspberry Pi 或本地服务器上运行，拥有庞大的社区支持，易于集成各种设备和自定义组件，适合 DIY 爱好者构建智能家居。 |
| 11 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 496.8k | 1.1k | 这是一个通过从头开始重新创建著名技术来学习编程的项目。它提供了详细的分步指南，涵盖操作系统、数据库、Web服务器、AI模型、游戏引擎等多个领域。通过实践这些教程，开发者可以深入理解底层原理，提升编程能力。 |
| 12 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 364.6k | 620 | OpenClaw 是一个在本地设备上运行的个人 AI 助手，支持 macOS、iOS 和 Android。它通过 CLI 工具安装，支持 WhatsApp、Telegram、Slack 等多种消息渠道，利用 OpenAI 或其他大模型提供快速、本地化的智能交互体验。 |
| 13 | [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | A curated list of practical Codex skills for autom... | Python | 2.0k | 518 | 该项目是一个精选的 Codex 技能库，旨在通过模块化指令包自动化工作流。它包含 Python 安装脚本，支持通过 Skill Installer 或手动安装技能。技能涵盖开发、生产力、通信等领域，允许 Codex 执行跨应用操作（如邮件、Slack）及代码审查等任务。 |

[查看完整数据](api/github/2026-04-26.json)
<!-- END GITHUB TRENDING -->




