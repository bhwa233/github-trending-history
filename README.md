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

**最后更新**: 2026-03-15 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 18.4k | 1.3k | Lightpanda是用Zig语言开发的无头浏览器，专为AI和自动化设计。支持JavaScript执行和部分Web API，兼容Puppeteer等工具，具备9倍于Chrome的内存优化和11倍速度优势，适用于快速网页抓取、测试及低资源环境。 |
| 2 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 1.1k | 241 | Project N.O.M.A.D 是一个离线知识服务器，集成AI聊天、教育平台、离线地图、数据工具等多功能模块，通过Docker容器化管理，支持终端安装和浏览器访问，适用于无网络环境下的信息获取与数据处理。 |
| 3 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | OpenViking is an open-source context database desi... | Python | 12.3k | 1.9k | OpenViking是面向AI代理的开源上下文数据库，通过文件系统范式统一管理记忆、资源与技能，支持分层加载、递归检索与可视化追踪，解决上下文碎片化、高成本及不可观测问题。 |
| 4 | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need - A nano Claude Code–like age... | TypeScript | 27.8k | 865 | 该项目通过12个渐进式会话，从零构建类似Claude Code的AI代码代理系统，重点演示代理的核心循环机制与逐步扩展方案，涵盖工具调用、任务分解、上下文压缩等关键技术点。 |
| 5 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | practice made claude perfect... | HTML | 16.9k | 852 | 该项目聚焦Claude代码最佳实践，提供命令、子代理、技能、工作流等模块化开发方案，支持上下文工程与智能体协作，包含MCP服务器集成与自动检查点功能，推动AI工程化开发流程。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 85.7k | 1.9k | Superpowers 是一个基于可组合技能的代码代理框架，通过TDD/YAGNI/DRY原则实现自动化软件开发流程，支持编码代理自主完成需求分析、设计确认、任务分解和代码生成。 |
| 7 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 14.7k | 1.1k | Heretic是一款全自动语言模型审查移除工具，通过结合方向性消融技术与Optuna参数优化，无需人工干预即可降低模型拒绝率并最小化对原始模型性能的损害，实现高效去审查化。 |
| 8 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 27.0k | 3.0k | MiroFish是一个基于多智能体的群体智能预测引擎，通过构建数字平行世界模拟现实事件发展。支持政策、金融、舆情等场景的预测推演，提供可交互的数字沙盘与深度分析报告。 |
| 9 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 14.2k | 450 | GitNexus 是一个浏览器端代码知识图谱工具，通过本地解析GitHub仓库或ZIP文件生成交互式代码关系图谱，支持CLI和Web界面，提供依赖关系、调用链等深度代码分析能力，强调隐私和本地处理。 |
| 10 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Knowledge Engine for AI Agent Memory in 6 lines of... | Python | 13.9k | 310 | Cognee是一个开源知识引擎，支持多格式数据 ingestion，结合向量搜索与图数据库技术，为AI代理提供持续学习的上下文管理。通过语义搜索与关系连接，实现文档的智能检索与知识演化。 |
| 11 | [InsForge/InsForge](https://github.com/InsForge/InsForge) | Give agents everything they need to ship fullstack... | TypeScript | 4.6k | 509 | InsForge是面向AI代码代理的后端开发平台，通过语义层抽象数据库、认证、存储等后端服务，支持全栈应用快速开发与部署。 |
| 12 | [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) | Vite+ is the unified toolchain and entry point for... | Rust | 1.7k | 301 | Vite+ 是统一的Web开发工具链，整合Vite、Vitest等工具，提供零配置的开发环境管理、包管理、代码校验、测试、构建和任务调度功能，覆盖前端开发全流程。 |
| 13 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 11.9k | 608 | Anthropic官方维护的Claude代码插件目录，提供内部及第三方高质量插件管理。包含标准化插件结构、安装指南和贡献规范，强调安全验证与质量控制。 |

[查看完整数据](api/github/2026-03-15.json)
<!-- END GITHUB TRENDING -->








