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

**最后更新**: 2026-10-17 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 41.8k | 1.4k | Anthropic 官方维护的 Claude Code 插件目录，包含内部及第三方高质量插件。支持通过 Claude Code 系统直接安装，遵循标准化插件结构。开发者需注意安全风险，且插件名称发布后不可更改。适用于需要扩展 Claude Code 功能的用户。 |
| 2 | [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | The job search that runs on your machine. AI job a... | Python | 50.4k | 1.4k | 这是一个基于 Claude Code 的本地 AI 求职框架，使用 Python 实现自动化工作流。它能评估职位匹配度、定制简历与求职信，并辅助面试准备。项目针对丹麦市场优化，但核心流程可扩展至其他地区，旨在提升求职效率。 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 282.5k | 1.1k | ECC 是一个代理工具包性能优化系统，旨在为 Claude Code、Codex 等提供协调的工程系统。它集成了技能、记忆和安全功能，通过规划、测试、审查等流程优化上下文窗口，支持多种 AI 编程工具，提升开发效率。 |
| 4 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 54.1k | 574 | CLI-Anything 旨在让所有软件具备“代理原生”能力，通过 CLI-Hub 平台连接 AI 代理（如 Claude Code、Cursor）与各类软件工具。用户可安装社区构建的 CLI 工具，使 AI 代理通过命令行执行复杂任务，生成 CAD、3D 场景、游戏等实际工件。 |
| 5 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 52.2k | 878 | 这是一个为 AI 科学家提供 177 个科学技能库的项目，涵盖生物、化学、医学、物理等多个领域。它遵循 Agent Skills 标准，兼容 Cursor、Claude Code 等多种工具。项目还推出了 K-Dense BYOK，允许用户在本地运行免费开源的 AI co-scientist，保护数据隐私。 |
| 6 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 9.9k | 178 | 这是一个为AI编程助手提供长期记忆的Rust项目。它允许用户在不同编程工具（如Claude Code、Cursor等）之间无缝切换，共享记忆和上下文。项目支持跨项目、跨机器的记忆存储，通过本地服务器管理，确保用户在不同代理间交接任务时无需重复解释架构或历史，极大提升了开发效率。 |
| 7 | [android/skills](https://github.com/android/skills) | ... | Kotlin | 8.4k | 355 | 这是一个为 AI 代理优化的 Android 开发技能库，提供模块化的 Markdown 指令和资源，帮助 LLM 理解并执行 Android 开发最佳实践，特别关注 LLM 表现不佳的复杂工作流。 |
| 8 | [stablyai/orca](https://github.com/stablyai/orca) | Orca is the place for working with a fleet of agen... | TypeScript | 95.4k | 830 | Orca 是一个 AI 编排平台，旨在帮助开发者高效管理多个 AI 编码代理（如 Claude、Codex）。它支持并行工作树、移动端监控、SSH 远程执行及原生 GitHub/Linear 集成，允许用户在一个界面中对比和合并不同 AI 的代码生成结果，提升开发效率。 |
| 9 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 151.7k | 179 | Claude Code 是一个运行在终端中的代理编码工具，基于 TypeScript 开发。它利用自然语言命令理解代码库，帮助开发者执行常规任务、解释复杂代码以及处理 Git 工作流，从而提升编码效率。支持多种安装方式，并包含可扩展的插件系统。 |
| 10 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 73.4k | 2.1k | VoiceStudio 是一个开源、完全本地化的 ElevenLabs 替代品。它支持语音克隆、语音设计、视频配音、听写、转录及有声书创作，覆盖 646 种语言。项目基于 Electron 开发，支持 NVIDIA GPU、Apple Silicon 及 CPU 运行，提供本地 API 和 MCP 支持，适合个人和企业进行本地化语音处理。 |
| 11 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 215.3k | 438 | OpenCode 是一个基于 TypeScript 的开源 AI 编码代理，提供命令行工具和桌面应用，支持跨平台（Windows、macOS、Linux）使用，旨在辅助开发者进行代码编写与自动化任务。 |
| 12 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent harness. Deploy intelligent ... | TypeScript | 76.1k | 420 | Ruflo 是一个专为 Claude Code 和 Codex 设计的 Agent 元框架。它通过提供工具、记忆、循环和沙箱，赋予 AI 模型执行能力。项目支持部署智能多玩家 swarms、协调自主工作流，并具备自适应记忆、自学习智能和联邦通信功能，旨在让 AI 代理不仅运行，还能协作。 |
| 13 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | XERJ is the new way for AI to search data. Its aut... | Rust | 7.8k | 1.2k | XERJ 是一个用 Rust 编写的本地 AI 搜索工具，能够自动索引代码、文档和日志。它通过智能索引大幅减少 token 消耗（比 grep 少 40 倍），支持参考编码和代理记忆。它旨在替代 ElasticSearch，帮助 AI Agent 快速定位代码片段，降低基础设施成本。 |

[查看完整数据](api/github/2026-10-17.json)
<!-- END GITHUB TRENDING -->




