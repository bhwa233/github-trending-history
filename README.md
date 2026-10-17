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

**最后更新**: 2026-10-16 | **成功**: 12 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 40.6k | 1.6k | Anthropic 官方维护的 Claude Code 插件目录，托管高质量插件。包含 Anthropic 内部插件及第三方合作伙伴/社区插件。用户可通过插件系统直接安装，但需注意安全风险。插件遵循标准结构，包含元数据、MCP 配置等，且名称不可更改。 |
| 2 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 51.5k | 1.2k | 该项目是一个将任意 AI 代理转化为 AI 科学家的大型技能库。包含 177 个经过验证的科学技能及 100+ 数据库，覆盖生物、化学、医学等领域。支持 Cursor、Claude Code 等多种工具，并推出了本地运行的 BYOK 版本，保护数据隐私。 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 281.5k | 1.1k | ECC 是一个代理性能优化系统，为 Claude Code、Codex 等提供协调的工程系统。它通过“计划-测试-实施-审查-验证-记忆-改进”工作流优化上下文窗口，提供记忆、技能和安全功能。开源项目包含 71 个代理和 311 个技能，支持多种编程环境。 |
| 4 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 53.5k | 281 | CLI-Anything 旨在让所有软件具备 AI Agent 原生能力。通过 CLI-Hub 注册表，用户可以安装和管理社区构建的 CLI 工具，使 AI 代理（如 Cursor、Claude Code）能够通过命令行控制各类软件，实现自动化操作。 |
| 5 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 30.2k | 449 | 这是一个针对 AI 编码代理的上下文窗口优化 MCP 服务器。它通过沙箱化工具输出（减少 98%）、SQLite + FTS5 索引持久化会话记忆，以及强制 LLM 以“代码思维”编写分析脚本，解决了上下文溢出、状态丢失和冗余输出问题，支持 17 个平台。 |
| 6 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent harness. Deploy intelligent ... | TypeScript | 75.6k | 672 | Ruflo 是一个专为 Claude Code 和 Codex 设计的 Agent Harness（代理框架）。它通过提供工具、内存、循环和控制，赋予 AI 实际工作的能力。支持部署智能多智能体群集、自适应记忆、自学习及联邦通信，集成向量 RAG，可协调自主工作流并构建对话式 AI 系统。 |
| 7 | [android/skills](https://github.com/android/skills) | ... | Kotlin | 8.1k | 36 | 这是一个专为 Android 开发优化的 AI 技能库，提供模块化的 SKILL.md 指令。旨在帮助 AI 代理更好地理解复杂工作流和最佳实践，特别关注 LLM 表现不佳的领域，如 R8 分析器和 Wear Compose M3。 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 300.7k | 973 | Superpowers 是一个为编码代理设计的代理技能框架和软件开发方法论。它通过交互式对话获取需求，分解设计，并制定包含 TDD、YAGNI 和 DRY 原则的实施计划。随后，它利用子代理自主执行开发任务，支持多种主流 AI 编码工具，旨在让代理具备自动化的“超能力”。 |
| 9 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 12.0k | 278 | 该项目是 Cursor 编辑器的官方插件集合，涵盖教学、持续学习、团队工作流、代码审查、文档渲染、代理兼容性、CLI 设计、SDK、Origin API 应用构建及任务编排等工具，旨在提升 AI 辅助编程的效率与团队协作能力。 |
| 10 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 71.2k | 2.3k | VoiceStudio 是一个完全本地化的开源语音处理平台，支持语音克隆、视频配音、听写转录及有声书创作，覆盖 646 种语言。提供本地 API 和 MCP 支持，兼容 NVIDIA GPU、Apple Silicon 及 CPU，适合需要隐私保护和离线使用的开发者及创作者。 |
| 11 | [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | The job search that runs on your machine. AI job a... | Python | 48.5k | 898 | 处理失败 |
| 12 | [hmjz100/LinkSwift](https://github.com/hmjz100/LinkSwift) | 一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百... | JavaScript | 23.7k | 538 | LinkSwift 是一个基于 JavaScript 的网盘直链获取工具，支持百度、阿里、夸克等八大主流网盘。它集成了 IDM、Aria2 等多种下载器，提供 API 下载、多线程支持及界面美化功能，致力于解决网盘分享链接无法直接下载的问题。 |
| 13 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | XERJ is the new way for AI to search data. Its aut... | Rust | 6.9k | 1.6k | XERJ 是一个用 Rust 编写的本地 AI 搜索工具，通过自动索引代码、文档和日志，显著减少 AI 代理的 token 消耗。它兼容 Elasticsearch，支持参考编码和安全审计，帮助开发者在编写新代码前快速检索开源解决方案，大幅降低成本并提升效率。 |

[查看完整数据](api/github/2026-10-16.json)
<!-- END GITHUB TRENDING -->




