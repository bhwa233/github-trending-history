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

**最后更新**: 2026-09-07 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Write HTML. Render video. Built for agents.... | TypeScript | 45.9k | 474 | HyperFrames 是一个开源框架，用于将 HTML、CSS、媒体和动画转换为确定性的 MP4 视频。它专为 AI 代理设计，支持本地 CLI 和 AI 编程技能，帮助代理自动完成视频规划、代码编写及渲染流程。 |
| 2 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 180.2k | 886 | 微软开发的轻量级 Python 工具，用于将 PDF、Office 文档、图片、音频等多种格式转换为 Markdown。它专注于保留文档结构（如标题、表格），专为 LLM 和文本分析管道设计，输出格式对大模型友好且 token 高效。 |
| 3 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 20.8k | 96 | 这是一个针对 AI 编码代理的上下文窗口优化 MCP 服务器。它通过沙箱化工具输出（减少 98%）、SQLite 持久化会话记忆（FTS5/BM25 索引）以及强制 LLM 生成代码而非读取数据来解决问题。它支持 17 个平台，防止上下文丢失和冗余输出。 |
| 4 | [jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser) | Stealth headless browser for AI agents — bypass Cl... | JavaScript | 9.7k | 135 | 这是一个专为 AI 代理设计的隐身无头浏览器服务，基于 Camoufox（Firefox 分支）。它通过 C++ 级别的指纹欺骗绕过 Cloudflare 和机器人检测，作为 Puppeteer/Playwright 的轻量级替代品。提供 REST API，支持会话隔离、代理和文件上传，内存占用低，适合在资源受限环境中运行。 |
| 5 | [MoonTechLab/LunaTV](https://github.com/MoonTechLab/LunaTV) | 本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同... | TypeScript | 9.7k | 197 | LunaTV 是一个基于 Next.js 14 和 TypeScript 的跨平台影视聚合播放器。支持多源搜索、在线播放、收藏同步及 PWA 离线功能。项目采用 Docker 部署，需自行收集播放源，禁止商业化。 |
| 6 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 252.9k | 1.9k | ECC 是一个面向 Claude Code、Codex 等的代理工具包性能优化系统。它提供技能、直觉、记忆和安全功能，帮助 AI 代理在构建前规划、验证更改、自我审查并记住重要信息，将重复性工作转化为可复用的技能。 |
| 7 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CR... | JavaScript | 48.1k | 580 | 这是一个专为 Claude Code 和 AI 代理设计的营销技能集合，涵盖 CRO、文案、SEO、分析和增长工程。项目提供 Markdown 格式的专业工作流，旨在帮助技术型营销人员和创始人利用 AI 自动化营销任务，支持多种主流 AI 编码工具。 |
| 8 | [The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge) | Build your autonomous hedge fund in minutes. AutoH... | Python | 5.3k | 517 | AutoHedge 是一个基于 Python 的企业级自主交易系统，利用群智能和多代理架构实现全自动化的对冲基金运作。它集成了市场分析、风险管理和交易执行功能，目前支持 Solana 交易，未来将扩展至 Coinbase。系统具备风险优先设计、结构化输出和企业级日志，旨在为机构提供可扩展的自动化交易解决方案。 |
| 9 | [BraveOPotato/FckSignups](https://github.com/BraveOPotato/FckSignups) | A list of tools that are open-source, in-browser, ... | TypeScript | 3.8k | 501 | 这是一个名为 NoSignups（原 FckSignups）的开源项目，旨在收集无需注册即可直接在浏览器使用的开源工具。项目采用 React + TypeScript 构建，强调隐私保护，拒绝数据追踪和强制注册墙。用户可以按类别浏览工具，无需创建账户即可立即使用。它提倡“开源是默认”的理念，适合追求快速、无隐私泄露工具的用户。 |
| 10 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source long-horizon SuperAgent harness tha... | Python | 81.9k | 195 | DeerFlow 是一个开源的长周期超级代理框架，由字节跳动开发。它通过编排子代理、记忆系统和沙箱环境，利用可扩展技能处理从研究到编码的复杂任务。版本 2.0 是全面重写，支持 Claude Code 集成，旨在实现高效探索和自动化工作流。 |
| 11 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 26.0k | 351 | 该项目是 Codex AI 代理的技能目录，包含用于特定任务的指令、脚本和资源。它旨在帮助团队和个人以可重复的方式完成任务。注意：该项目已被弃用，建议迁移至 OpenAI Plugins。 |
| 12 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 34.9k | 58 | Lightpanda 是一个专为 AI 代理和自动化设计的无头浏览器，完全使用 Zig 语言从零编写。相比 Headless Chrome，它在内存占用（123MB）和执行速度（快9倍）上具有显著优势，支持 Linux、macOS 及 Docker 部署，适合轻量级自动化场景。 |
| 13 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 22.3k | 168 | 这是一个基于 React Three Fiber 和 WebGPU 构建的 3D 建筑编辑器。项目采用 Turborepo 单体仓库架构，包含核心、查看器、编辑器、节点定义及 CLI 等模块。支持本地持久化安装、MCP 服务集成，旨在帮助用户创建和分享 3D 建筑项目。 |
| 14 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent meta-harness. Deploy intelli... | TypeScript | 71.4k | 394 | Ruflo 是一个智能代理执行层，为 Claude Code/Codex 提供工具、记忆和沙箱。它支持 100+ 专用代理、协调群组、自学习记忆及跨机器联邦通信，旨在让 AI 代理不仅能运行，还能高效协作。 |

[查看完整数据](api/github/2026-09-07.json)
<!-- END GITHUB TRENDING -->




