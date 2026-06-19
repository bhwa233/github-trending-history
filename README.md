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

**最后更新**: 2026-06-18 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 23.2k | 844 | TimesFM 是 Google Research 开发的预训练时间序列基础模型，基于 ICML 2024 论文。支持 16k 长上下文与连续分位数预测，参数量 2 亿。包含 Flax 版本、协变量支持及微调示例，已集成至 BigQuery ML 等产品中。 |
| 2 | [n0-computer/iroh](https://github.com/n0-computer/iroh) | IP addresses break, dial keys instead. Modular net... | Rust | 10.0k | 369 | Iroh 是一个 Rust 编写的模块化网络堆栈，支持通过公钥而非 IP 地址进行连接。它利用 QUIC 协议和 NAT 穿透技术自动寻找并维护最佳连接路径。项目提供了 iroh-blobs、iroh-gossip 和 iroh-docs 等预构建协议，适用于构建可扩展的 P2P 应用、分布式存储和发布订阅网络。 |
| 3 | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp.org's open-source codebase and curric... | TypeScript | 449.6k | 417 | freeCodeCamp 是一个由捐赠支持的 501(c)(3) 慈善机构运营的开源教育平台。它提供完全免费、自定进度的全栈 Web 开发和机器学习课程，包含数千个交互式编程挑战。用户通过完成项目并通过考试获得认证，旨在帮助数百万人转型进入科技行业。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 232.4k | 1.4k | Superpowers 是一个为编码代理设计的代理技能框架和软件开发方法论。它通过一套可组合的技能，指导代理在编写代码前先与用户确认需求、展示设计规格、制定清晰计划，并执行自主的子代理开发。它强调 TDD、YAGNI 和 DRY 原则，旨在让代理在没有项目上下文的情况下也能高效工作。 |
| 5 | [zai-org/GLM-5](https://github.com/zai-org/GLM-5) | GLM-5: From Vibe Coding to Agentic Engineering... | - | 4.1k | 202 | GLM-5 是由 zai-org 开发的一系列先进大语言模型，包含旗舰版 GLM-5.2 和代理工程版 GLM-5.1。GLM-5.2 拥有 100 万 token 的超长上下文窗口，支持灵活的编码思考级别，并在 Terminal-Bench 和 SWE-bench Pro 等基准测试中表现优异，接近闭源模型水平。GLM-5.1 则专注于代理工程，具备更强的长时任务执行能力，解决了模型过早耗尽技巧的问题。项目旨在推动从“氛围编码”到“代 |
| 6 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 7.1k | 2.3k | 这是一个高性能的代码智能 MCP 服务器，使用 C 语言编写。它通过 Tree-sitter 和 LSP 将代码库索引为持久化知识图谱，支持 158 种语言，平均仓库毫秒级索引，查询速度极快。单静态二进制，零依赖，专为 AI 编码代理设计。 |
| 7 | [yifanfeng97/Hyper-Extract](https://github.com/yifanfeng97/Hyper-Extract) | Transform unstructured text into structured knowle... | Python | 1.8k | 124 | Hyper-Extract 是一个基于 LLM 的智能知识提取框架，旨在将非结构化文本转化为结构化知识。它支持 8 种知识结构（如图谱、超图）及 10+ 种提取引擎，内置 80+ YAML 模板，支持增量演化，适用于科研、金融等领域，实现零代码的知识库构建。 |
| 8 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 11.2k | 259 | Zvec 是阿里巴巴开源的轻量级、高性能进程内向量数据库。它支持密集和稀疏向量混合检索、原生全文搜索及 DiskANN 索引，具备毫秒级搜索数十亿向量的能力。通过 WAL 保证数据持久化，支持多进程并发读取，无需外部服务器配置，专为嵌入式应用设计。 |
| 9 | [withastro/flue](https://github.com/withastro/flue) | The sandbox agent framework.... | TypeScript | 5.5k | 162 | Flue 是一个基于 TypeScript 的沙盒代理框架，旨在构建下一代自主 AI 智能体。它提供安全的运行环境、工具集成和上下文管理，允许开发者通过编程方式定义代理行为，实现从本地 CLI 到云端部署的自动化工作流。 |
| 10 | [Kilo-Org/kilocode](https://github.com/Kilo-Org/kilocode) | Kilo is the all-in-one agentic engineering platfor... | TypeScript | 22.2k | 1.3k | Kilo 是一个开源的 AI 编程代理平台，支持在 VS Code、JetBrains 和 CLI 中使用。它提供 500+ 种模型选择，支持中途切换，采用开放定价模式（无加价），无需 API 密钥即可开始。此外，还提供云端代理、代码审查和 KiloClaw 等功能，帮助开发者快速构建和迭代代码。 |
| 11 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥🔥🔥 Open-source Jira, Linear, Monday, and Click... | TypeScript | 51.8k | 613 | Plane 是一个开源的现代项目管理平台，旨在替代 Jira、Linear 等工具。它支持任务管理、冲刺周期、路线图规划、文档协作（含 AI 功能）以及数据分析。用户可选择云端部署或自托管，提供灵活的工作流视图和模块化管理，适合各类团队高效协作。 |
| 12 | [Kong/insomnia](https://github.com/Kong/insomnia) | The open-source, cross-platform API client for Gra... | TypeScript | 38.7k | 18 | Insomnia 是一个开源的跨平台 API 客户端，使用 TypeScript 编写。它支持 GraphQL、REST、WebSockets、SSE 和 gRPC 等多种协议。用户可以使用它调试、设计、测试和模拟 API，支持本地、Git 和云端存储，并具备强大的协作功能。 |
| 13 | [Universal-Debloater-Alliance/universal-android-debloater-next-generation](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation) | Cross-platform GUI written in Rust using ADB to de... | Rust | 7.9k | 244 | 这是一个基于 Rust 开发的跨平台 GUI 工具，利用 ADB 技术为非 Root 的 Android 设备提供深度卸载服务。它旨在移除不必要的系统应用，从而提升设备的隐私保护、安全性和电池续航。项目不收集用户数据，拥有完善的 Wiki 文档支持。 |
| 14 | [dotnet/aspnetcore](https://github.com/dotnet/aspnetcore) | ASP.NET Core is a cross-platform .NET framework fo... | C# | 38.1k | 14 | ASP.NET Core 是一个开源、跨平台的 C# 框架，专为构建现代云原生互联网应用（如 Web、IoT、移动后端）而设计。它运行在 .NET 运行时上，支持 Windows、Mac 和 Linux，具有模块化组件和最小开销，适合云部署或本地运行。 |
| 15 | [owainlewis/awesome-artificial-intelligence](https://github.com/owainlewis/awesome-artificial-intelligence) | A curated list of Artificial Intelligence (AI) cou... | - | 14.4k | 40 | 这是一个精选的 AI 资源列表，涵盖课程、书籍、视频和论文。重点聚焦于 AI 工程（RAG、代理、评估、部署），提供从现代实用书籍到基础理论的全面学习路径，适合不同水平的开发者构建和部署 AI 系统。 |
| 16 | [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Official Python inference and LoRA trainer package... | Python | 7.5k | 51 | 这是一个用于 LTX-2 音频-视频生成模型的官方 Python 推理和 LoRA 训练包。LTX-2 是首个基于 DiT 的音频-视频基础模型，支持同步音频与视频生成、高保真输出及多种性能模式。项目提供了完整的推理流程、模型权重下载指南以及多种 LoRA 扩展（如控制、相机、HDR等），旨在实现生产就绪的 AI 视频生成。 |
| 17 | [LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) | Free and Open Source Machine Translation API. Self... | Python | 15.0k | 51 | LibreTranslate 是一个完全自托管的免费开源机器翻译 API，不依赖专有云服务。它基于开源的 Argos Translate 引擎，支持离线运行，易于部署，适合构建私有化翻译服务。 |

[查看完整数据](api/github/2026-06-18.json)
<!-- END GITHUB TRENDING -->




