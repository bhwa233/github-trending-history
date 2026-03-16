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

**最后更新**: 2026-03-16 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 29.9k | 3.3k | MiroFish是一个基于多智能体的群体智能预测引擎，通过构建数字世界模拟现实事件演化。支持舆情分析、文学推演等场景，用户上传数据后自动生成预测报告与交互式数字环境，采用GraphRAG和LLM技术实现动态模拟。 |
| 2 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 36.7k | 1.0k | Claude-Mem 是一个为 Claude Code 设计的插件，通过自动捕获编码会话中的操作记录，利用 AI 生成语义摘要并压缩存储，实现跨会话的上下文持久化，确保项目知识连续性。 |
| 3 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 1.8k | 773 | Project N.O.M.A.D 是一个离线知识服务器，集成AI聊天、离线百科、教育平台、地图工具和数据加密等功能，通过Docker容器化管理，支持终端安装和浏览器访问，适用于无网络环境下的信息获取与工具使用。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 88.5k | 3.1k | Superpowers 是一个基于可组合技能的软件开发代理框架，通过分步设计、TDD测试驱动开发和YAGNI原则，实现编码代理的自动化流程管理。项目提供从需求分析到代码实现的全流程支持，强调技能自动化触发与子代理协作开发。 |
| 5 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 15.6k | 1.9k | GitNexus是一款浏览器端代码知识图谱工具，通过本地索引GitHub仓库或ZIP文件生成交互式代码关系图谱，并集成Graph RAG代理实现深度代码分析。支持CLI与WebUI双模式，强调隐私安全与离线运行。 |
| 6 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 20.2k | 2.1k | Lightpanda是用Zig语言开发的高性能无头浏览器，支持JavaScript执行和部分Web API，兼容Puppeteer等工具。具有低内存占用（仅为Chrome的1/9）和快速执行速度（11倍于Chrome），适用于AI代理、自动化测试及网络爬虫场景。 |
| 7 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | OpenViking is an open-source context database desi... | Python | 14.1k | 2.0k | OpenViking是面向AI代理的开源上下文数据库，通过文件系统范式统一管理记忆、资源与技能，解决上下文碎片化、高成本及不可观测问题。支持分层加载、目录递归检索与可视化路径追踪，提升上下文管理效率与可调试性。 |
| 8 | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need - A nano Claude Code–like age... | TypeScript | 29.3k | 1.5k | 该项目是一个基于TypeScript的AI代码代理开发教程，通过12个渐进式会话逐步构建 Claude Code 类似工具。从基础循环到多任务分解、上下文压缩、后台任务处理等机制，演示如何实现自动化代码生成与执行。 |
| 9 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 15.3k | 787 | Heretic是一款全自动语言模型去审查工具，通过结合方向性消融与Optuna优化算法，自动调整模型参数以降低审查机制，同时最小化对原始模型性能的损害。支持无需人工干预的批量处理，实现高精度的去审查效果。 |
| 10 | [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | Agent harness built with LangChain and LangGraph. ... | Python | 12.8k | 1.2k | DeepAgents是基于LangChain和LangGraph的代理框架，提供任务分解、文件系统操作、子代理协作和上下文管理功能，支持快速构建复杂AI代理应用。 |
| 11 | [YishenTu/claudian](https://github.com/YishenTu/claudian) | An Obsidian plugin that embeds Claude Code as an A... | TypeScript | 4.1k | 109 | Claudian是Obsidian插件，集成Claude Code实现智能文档协作。提供文件操作、搜索、bash命令执行、多步骤工作流等代理能力，支持上下文感知、图像分析、内联编辑及自定义指令，提升知识管理自动化水平。 |
| 12 | [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) | Vite+ is the unified toolchain and entry point for... | Rust | 2.2k | 622 | Vite+ 是统一的前端开发工具链，整合 Vite、Vitest、Oxlint 等工具，提供从环境管理、开发调试到构建打包的全流程解决方案，支持零配置多框架开发。 |

[查看完整数据](api/github/2026-03-16.json)
<!-- END GITHUB TRENDING -->








