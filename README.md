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

**最后更新**: 2026-08-10 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Graph-Native Infrastructure for Context and Accoun... | Python | 4.1k | 967 | 这是一个面向 AI 代理的原生图基础设施，旨在提供可解释、可追溯和可信的决策智能。它通过构建上下文图和知识图谱，支持因果推理和确定性推理，无需依赖 LLM 即可完成图构建和推理，确保决策的可审计性。 |
| 2 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 141.8k | 1.4k | 这是一个包含多个专业化AI代理的项目，旨在集成到Claude Code、Cursor等开发工具中。每个代理都有独特的个性和专业领域，如前端开发或社区管理。项目提供了原生桌面应用和Shell脚本两种安装方式，方便用户一键部署和自动更新，打造永不疲倦的AI开发团队。 |
| 3 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 61.0k | 215 | MediaCrawler 是一个功能强大的多平台自媒体数据采集工具，支持小红书、抖音、B站、微博等主流平台。基于 Playwright 浏览器自动化技术，无需复杂 JS 逆向即可获取签名参数。支持关键词搜索、评论爬取、主页采集及词云生成，适合学习爬虫架构与数据采集。 |
| 4 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 85.7k | 659 | 该项目为 AI 编码代理提供生产级工程技能，包含 8 个斜杠命令覆盖从定义到发布的全流程。通过标准化工作流、质量门控和最佳实践，帮助 AI 代理遵循最佳实践，提升代码质量和开发效率，支持 Claude Code、Cursor 等多种代理工具。 |
| 5 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 76.4k | 167 | Paperclip 是一个开源的 AI 代理管理应用，旨在帮助企业团队编排和管理 AI 代理。它提供类似任务管理器的界面，支持定义目标、分配任务、监控预算和审计工作流。基于 Node.js 和 React 构建，允许用户将各种 AI 代理（如 Claude、Codex）组织起来，共同完成商业目标，实现自主 AI 公司的运营。 |
| 6 | [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | A self-improving RLM agent for coding workflows an... | TypeScript | 13.0k | 2.7k | Prime Agent 是一个基于递归语言模型（RLM）和持续挂载（Continual Harness）的开源编码与研究代理。它具备持久化 REPL、子代理、技能及后台运行能力，支持长期自主任务，并能通过证据驱动的更新实现自我改进。 |
| 7 | [LadybirdBrowser/ladybird](https://github.com/LadybirdBrowser/ladybird) | Truly independent web browser... | C++ | 65.2k | 106 | Ladybird 是一个基于 Web 标准的真正独立网络浏览器，采用多进程架构（UI、渲染、解码等），旨在构建现代 Web 的完整浏览器。目前处于预-alpha 阶段，仅适合开发者使用。项目从 SerenityOS 继承了核心库支持，如 LibWeb、LibJS 和 LibGfx 等，支持 Linux、macOS 和 Windows (WSL2)。 |
| 8 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 89.4k | 186 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 WiFi 信号（CSI）实现无视频的穿墙检测、生命体征监测和活动识别。它支持与主流智能家居生态（Home Assistant, Apple Home 等）集成，无需摄像头或可穿戴设备即可感知房间内的人员存在、呼吸心率及异常行为。 |
| 9 | [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | ⛰️A General Hill-climbing AI harness that helps yo... | TypeScript | 17.9k | 357 | LifeOS 是一个通用 AI Harness，旨在帮助用户从当前状态迈向理想状态。它通过捕获用户的个人背景和目标，利用 AI 提供个性化指导。项目基于 TypeScript 开发，支持一键安装，可作为 Skill 集成到 Claude Code 等工具中，提升生活和工作的效率。 |
| 10 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | The context API to search, scrape, and interact wi... | TypeScript | 165.0k | 815 | Firecrawl 是一个开源的 Web 上下文 API，旨在大规模搜索、抓取和交互网页。它覆盖 96% 的网页，支持 JS 渲染，提供 LLM 就绪的 Markdown 和 JSON 输出。项目自动处理代理、速率限制等复杂问题，支持媒体解析和网页交互（点击、滚动等），非常适合构建 AI 代理和动态应用。 |
| 11 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 97.2k | 234 | TradingAgents 是一个基于多智能体架构的 LLM 金融交易框架。它利用 LangGraph 实现结构化代理（研究、交易、投资组合管理），支持多种大模型（GPT-5, Claude 4 等）和数据源。项目具备回测、情绪分析、风险管理及 Docker 部署能力，旨在通过 AI 智能体实现自动化金融决策。 |
| 12 | [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | ... | Python | 7.3k | 327 | Google DeepMind 开发的全球中尺度大气及气旋预测模型项目。包含 WeatherNext 2 (WN2) 及 GraphCast、GenCast 等前身模型。提供代码和预训练权重，支持 0.25° 分辨率（约30km）的天气与气旋预测。用户可通过 Google Cloud、WeatherLab 和 OpenMeteo 等平台获取预测数据。 |
| 13 | [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | The ultimate RAG for your monorepo. Query, underst... | Python | 3.5k | 682 | 这是一个基于知识图谱的多语言代码库 RAG 系统。利用 Tree-sitter 解析代码，在 Memgraph 中构建结构化图谱。支持自然语言查询、基于 AST 的代码编辑、结构化搜索及数据流追踪，适用于复杂单体仓库的代码理解与优化。 |
| 14 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 18.0k | 388 | T3 Code 是一个开源的 AI 代理控制台，旨在通过移动端、Web 和桌面端应用统一管理 Claude、Codex、Cursor 等多个 AI 编程助手。它提供了一个高性能、远程就绪且完全开源的控制界面，帮助开发者优化与 AI 代理的交互体验。 |
| 15 | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI,... | Python | 126.3k | 921 | ComfyUI 是一个基于 Python 的强大且模块化的扩散模型 GUI 和后端，采用节点图界面。它支持本地和云端执行，兼容多种主流模型（如 SDXL, Flux），能高效生成图像、视频、3D 模型和音频，并提供 API 便于集成到生产流程中。 |
| 16 | [opa334/Dopamine](https://github.com/opa334/Dopamine) | Dopamine is a semi-untethered jailbreak for iOS 15... | C | 6.0k | 174 | Dopamine 是一款针对 iOS 15 至 iOS 26(.0.1) 的半无 tethered 越狱工具，支持 rootless 模式。它兼容多种设备架构（如 A12/A13 和 arm64/arm64e），旨在为较新的 iOS 版本提供系统级权限访问和自定义能力。 |

[查看完整数据](api/github/2026-08-10.json)
<!-- END GITHUB TRENDING -->




