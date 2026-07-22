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

**最后更新**: 2026-07-21 | **成功**: 21 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 65.3k | 1.2k | 这是一个实时全球情报仪表板，基于 TypeScript 开发。它集成了 AI 新闻聚合、地缘政治监控和基础设施跟踪。支持双地图引擎（3D地球和平面地图），提供国家不稳定指数(CII)和金融雷达。支持本地 AI (Ollama) 运行，无需 API 密钥，并支持多平台桌面应用和多种语言。 |
| 2 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF... | Python | 14.3k | 4.4k | 这是一个开源的 AI Agent 技术书籍项目，核心围绕 Agent = LLM + 上下文 + 工具展开。全书包含 10 章正文及 88 个配套实验代码，涵盖从基础原理到多模态协作的全栈知识。支持中、英、繁体等多语言版本，提供 PDF 和 EPUB 电子书，适合开发者系统学习 AI Agent 的设计与工程实现。 |
| 3 | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Local-first code intelligence graph for MCP and CL... | Python | 24.5k | 1.9k | 这是一个本地优先的代码智能图工具，利用 Tree-sitter 构建代码库结构映射，通过增量跟踪变化，为 AI 编码工具提供精确上下文。它能显著减少 token 消耗，解决 AI 在代码审查时重复读取大代码库的问题，支持 Codex、Cursor、Claude Code 等多种平台配置。 |
| 4 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | A skill for your coding agent to stop it from bury... | - | 6.8k | 1.8k | 这是一个为 AI 编码助手设计的技能，旨在生成 ADHD 友好的输出。它通过强制 AI 以行动开头、编号步骤、提供具体时间估算等规则，消除冗余废话和隐藏答案，提供直接、清晰的代码解决方案。 |
| 5 | [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | A collection of agent skills for CAD, robotics and... | JavaScript | 9.1k | 378 | 这是一个面向 CAD、机器人和硬件设计的代理技能库。它提供了一系列技能，包括从自然语言或图像创建/编辑 CAD 模型、生成 2D DXF 绘图、编写机器人结构文件（URDF/SRDF）、切片 3D 模型以及检查文件。主要输出格式为 STEP，并支持 STL、3MF 和 GLB。旨在为代理提供专注于 CAD、制造和仿真的工作流。 |
| 6 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | The most intelligent agent harness for code... | Rust | 10.3k | 835 | jcode 是一个基于 Rust 的高性能代码智能体框架，旨在提升开发技能上限。它专为多会话工作流设计，具备极高的资源效率和无限的可定制性，在内存占用上显著优于同类竞品。 |
| 7 | [oblien/openship](https://github.com/oblien/openship) | Self-hosted deployment platform... | TypeScript | 6.2k | 1.6k | OpenShip 是一个开源自托管部署平台，内置 CI/CD。支持零配置部署，自动检测技术栈，并统一管理数据库、域名、SSL、CDN、邮件及备份。提供桌面应用、Web 仪表板和 CLI 多种接口，适合个人开发者或团队部署全栈应用。 |
| 8 | [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | AI Agent Assistant & development framework that in... | Python | 37.4k | 416 | AstrBot 是一个开源的 AI Agent 聊天机器人平台，支持主流即时通讯软件。它集成了大模型对话、多模态、知识库及 Agent 沙箱等核心功能，拥有 1000+ 插件。支持一键部署，可快速构建个人伴侣、智能客服或企业知识库等生产级应用。 |
| 9 | [every-app/open-seo](https://github.com/every-app/open-seo) | Open source alternative to Semrush and Ahrefs... | TypeScript | 6.6k | 850 | OpenSEO 是一个开源的 Semrush 和 Ahrefs 替代品，采用按需付费模式。它提供关键词研究、排名追踪等一站式 SEO 功能，支持 MCP 协议与 Claude Code 等 AI 代理集成，允许用户通过 Docker 或 Cloudflare 自托管。 |
| 10 | [tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp) | AI-assisted TradingView chart analysis — connect C... | JavaScript | 4.8k | 219 | 该项目通过 Chrome DevTools Protocol (CDP) 将 Claude Code 连接到本地运行的 TradingView Desktop 应用。它允许用户利用 AI 进行图表分析、Pine Script 开发及工作流自动化。所有数据处理均在本地进行，不连接 TradingView 服务器，但需注意内部 API 可能随版本更新而变化。 |
| 11 | [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | Hundreds of models & providers. One command to fin... | Rust | 30.2k | 194 | 这是一个用 Rust 编写的终端工具，旨在根据用户的硬件（RAM、CPU、GPU）为本地 LLM 找到合适的模型。它支持多 GPU 和 MoE 架构，提供交互式 TUI 和 CLI 模式，并能动态选择量化级别。新功能允许用户在 TUI 中直接进行基准测试并分享结果。 |
| 12 | [hyprwm/Hyprland](https://github.com/hyprwm/Hyprland) | Hyprland is an independent, highly customizable, d... | C++ | 37.0k | 88 | Hyprland 是一个基于 C++ 开发的独立、高度可定制的动态平铺 Wayland 合成器。它不依赖 wlroots，支持强大的插件系统、自定义动画、 tearing 和即时配置重载，提供现代化的窗口管理体验。 |
| 13 | [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) | Original Apollo 11 Guidance Computer (AGC) source ... | Assembly | 70.0k | 1.2k | 该项目包含阿波罗11号指令舱和登月舱的原始制导计算机（AGC）源代码，使用汇编语言编写。代码由MIT博物馆数字化，旨在保存历史并允许社区验证转录准确性，属于公共领域资源。 |
| 14 | [DioxusLabs/dioxus](https://github.com/DioxusLabs/dioxus) | Fullstack app framework for web, desktop, and mobi... | Rust | 37.6k | 261 | Dioxus 是一个基于 Rust 的全栈应用框架，支持 Web、桌面和移动端。它提供单一代码库开发体验，具备零配置、毫秒级热重载和基于信号的状态管理。通过集成 Axum，它支持服务器端渲染和后端功能，并拥有多种原生渲染器。 |
| 15 | [langchain-ai/open_deep_research](https://github.com/langchain-ai/open_deep_research) | ... | Python | 12.2k | 14 | 这是一个开源的深度研究代理，支持多种大模型提供商、搜索工具和MCP服务器。它性能强劲，在Deep Research Bench排行榜上排名靠前。用户可以通过配置环境变量轻松定制，使用LangGraph Studio UI进行交互，适合需要自主进行复杂信息检索和深度分析的开发者和研究人员。 |
| 16 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free MIT AI gateway: one endpoi... | TypeScript | 23.6k | 2.0k | OmniRoute 是一个免费的 MIT AI 网关，聚合了 268+ 个提供商和 500+ 个模型。它提供零配置的自动故障转移（组合）和压缩功能以节省 token。支持 43 种语言，拥有活跃社区。 |
| 17 | [agegr/pi-web](https://github.com/agegr/pi-web) | Web UI for the pi coding agent... | TypeScript | 1.7k | 286 | 这是一个为 pi 编码代理提供的本地 Web UI。它允许用户通过浏览器浏览会话、实时聊天、管理模型和技能，并预览项目文件。支持 Git 工作树切换和会话状态监控，替代了繁琐的终端操作，提供更直观的交互体验。 |
| 18 | [schollz/croc](https://github.com/schollz/croc) | Easily and securely send things from one computer ... | Go | 36.8k | 396 | croc 是一个用 Go 语言编写的跨平台命令行工具，允许任意两台计算机之间安全传输文件和文件夹。它支持端到端加密、断点续传、多文件传输，无需本地服务器或端口转发，且兼容 IPv6 和代理，使用简单。 |
| 19 | [microsoft/Ontology-Playground](https://github.com/microsoft/Ontology-Playground) | Free, open-source web app for learning about ontol... | TypeScript | 2.0k | 355 | 这是一个免费开源的 Web 应用，旨在帮助用户学习和设计本体。它提供交互式图谱探索、可视化本体设计器，支持导入导出 RDF/XML 格式。用户可浏览官方及社区本体目录，直接提交 PR 贡献，并分享交互式图表。项目完全静态，无需后端。 |
| 20 | [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | Structured Outputs... | Python | 14.8k | 49 | Outlines 是一个 Python 库，旨在确保大语言模型生成结构化输出。它利用 Python 类型系统（如 Pydantic）定义模式，支持 JSON、XML 等格式，与多种模型兼容，提供生成过程中的结构保证，解决了传统解析方法的脆弱性问题。 |
| 21 | [KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo) | The go-to web for your AI coding agent — local-fir... | TypeScript | 3.1k | 641 | wigolo 是一款专为 AI 代理打造的本地优先 Web 智能工具，提供搜索、抓取、爬取及研究功能。无需 API 密钥或云端服务，完全免费且保护隐私。支持 Claude Code、Cursor 等主流编辑器及 LangChain 等框架，通过 MCP 协议无缝集成。 |

[查看完整数据](api/github/2026-07-21.json)
<!-- END GITHUB TRENDING -->




