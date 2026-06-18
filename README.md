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

**最后更新**: 2026-06-17 | **成功**: 20 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 5.2k | 371 | 这是一个高性能的代码智能 MCP 服务器，使用 C 语言编写。它能将代码库索引到持久化知识图谱中，平均毫秒级索引，结构化查询低于 1ms。支持 158 种语言，具备混合 LSP 语义解析能力，生成函数、类、调用链等信息。提供单静态二进制，零依赖，内置 3D 可视化，专为 AI 编码代理设计，确保本地处理安全。 |
| 2 | [n0-computer/iroh](https://github.com/n0-computer/iroh) | IP addresses break, dial keys instead. Modular net... | Rust | 9.6k | 421 | Iroh 是一个基于 Rust 的模块化网络栈，通过公钥而非 IP 地址建立连接。它支持 NAT 穿透、QUIC 协议及自动路由优化，确保连接稳定高效。项目包含用于内容寻址、发布订阅和键值存储的模块，适合构建去中心化网络应用。 |
| 3 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 33.1k | 1.2k | 这是一个为 AI Agent 提供全网浏览能力的 Python CLI 工具。它解决了 Agent 无法访问 Twitter、YouTube、Bilibili 等平台的问题，提供一键安装和零 API 费用方案。项目支持多平台（含视频、社交、搜索），兼容各类 Agent，具备自动切换失效接口的容错机制，让 Agent 轻松获取互联网信息。 |
| 4 | [meshery/meshery](https://github.com/meshery/meshery) | Meshery, the cloud native manager... | TypeScript | 11.0k | 196 | Meshery 是一个开源的云原生管理平台，基于 TypeScript 开发。它支持多集群、多云环境下的基础设施生命周期管理，提供可视化的 GitOps 工作流。平台内置 380+ 种集成，支持配置验证和部署模拟，帮助开发者从 YAML 中解放出来，高效管理 Kubernetes 应用。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 231.0k | 1.1k | Superpowers 是一个面向编码代理的软件开发方法论框架。它通过一套可组合的技能，引导代理在编写代码前先与用户确认需求和设计规范，强调 TDD、YAGNI 和 DRY 原则。代理会自动执行子代理驱动的开发流程，实现自主编码，适用于需要自动化和结构化开发流程的团队。 |
| 6 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 21.9k | 606 | TimesFM 是 Google Research 开发的预训练时间序列基础模型，基于解码器架构，支持长上下文（16k）和协变量。最新版本 2.5 参数量降至 200M，支持连续分位数预测。项目提供 Flax 版本加速推理，并集成了微调（LoRA）和代理技能，广泛应用于 BigQuery ML、Google Sheets 等企业级产品中。 |
| 7 | [RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) | The Secure CommsOS™ for mission-critical operation... | TypeScript | 45.6k | 22 | Rocket.Chat 是一个开源、安全且高度可定制的团队通讯平台，采用 TypeScript 开发。它支持实时对话、语音通话及联邦功能，提供端到端加密和基于角色的访问控制。支持自托管、云部署及 Kubernetes 等多种方式，适用于对数据隐私要求高的企业及组织，能显著提升协作效率。 |
| 8 | [continuedev/continue](https://github.com/continuedev/continue) | open-source coding agent... | TypeScript | 33.9k | 49 | 这是一个开源的编码代理，提供 CLI、VS Code 扩展和 JetBrains 插件。项目在 2.0.0 版本后停止维护，移除了匿名遥测和认证功能，代码库已转为只读。 |
| 9 | [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design tool for design and... | Clojure | 50.1k | 70 | Penpot 是一个开源的跨平台设计平台，专为大规模数字产品团队打造。它支持自托管，确保合规与治理。核心优势在于“设计即代码”，通过设计令牌和 MCP 服务器实现设计与开发的实时协作与自动化，支持 SVG、CSS、HTML 等标准，加速产品交付。 |
| 10 | [krahets/hello-algo](https://github.com/krahets/hello-algo) | 《Hello 算法》：动画图解、一键运行的数据结构与算法教程。支持简中、繁中、English、日本語... | Java | 127.4k | 96 | 这是一个开源的数据结构与算法入门教程，主打动画图解和一键运行。支持简繁中、英、日、俄等多语言，提供Python、Java、C++等十余种编程语言的代码实现。内容清晰易懂，适合初学者手脑并用学习。 |
| 11 | [Universal-Debloater-Alliance/universal-android-debloater-next-generation](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation) | Cross-platform GUI written in Rust using ADB to de... | Rust | 7.6k | 457 | 这是一个基于 Rust 开发的跨平台 GUI 工具，利用 ADB 对非 Root 的 Android 设备进行去臃肿。它通过移除不必要的系统应用来提升隐私、安全性和电池续航。项目不收集用户数据，仅连接 GitHub 获取列表和更新。适合希望优化设备性能和隐私的用户。 |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 133.5k | 1.5k | 这是一个为 Claude 等编码代理设计的技能集合，旨在帮助工程师进行‘真实工程’而非‘氛围编码’。项目通过 Shell 脚本提供可组合的技能，解决 AI 代理无法准确理解用户需求的问题。核心功能包括 `/grill-me` 等命令，用于在编码前通过详细提问来明确需求，确保开发过程可控且易于调试。 |
| 13 | [yairm210/Unciv](https://github.com/yairm210/Unciv) | Open-source Android/Desktop remake of Civ V... | Kotlin | 10.7k | 24 | Unciv 是一款开源的 Android 和桌面端《文明 V》重制版，使用 Kotlin 和 LibGDX 开发。它是一款轻量级、可模组化的 4X 策略游戏，支持多平台，致力于还原原版 Civ V 的核心玩法，并持续更新 G&K 和 BNW 等扩展包机制。 |
| 14 | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp.org's open-source codebase and curric... | TypeScript | 449.1k | 757 | 这是一个由慈善机构运营的开源编程学习平台，提供全栈 Web 开发、机器学习及多语言认证课程。平台包含数千个互动挑战，用户通过完成项目与考试获得免费证书，证书可在 LinkedIn 上验证，旨在帮助忙碌的成年人转型进入科技行业。 |
| 15 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 36.7k | 150 | 这是一个由字节跳动开源的多模态 AI Agent 堆栈，包含 Agent TARS 和 UI-TARS-desktop。它利用先进的视觉和多模态大模型，通过 CLI 和桌面应用实现类似人类的 GUI 任务完成。支持本地/远程计算机及浏览器操作，旨在连接前沿 AI 模型与智能体基础设施。 |
| 16 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | Production-grade Rust-native trading engine with d... | Rust | 23.8k | 98 | NautilusTrader 是一个生产级的 Rust 原生交易引擎，采用确定性事件驱动架构。它结合了 Rust 的高性能与 Python 的灵活性，支持多资产、多交易场所。系统提供从研究、模拟到实盘执行的统一架构，确保研究环境与生产环境的一致性。支持通过模块化适配器集成各类 REST API 和 WebSocket 数据源。 |
| 17 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | Open-source live-chat, email support, omni-channel... | Ruby | 32.4k | 264 | Chatwoot 是一个开源的全渠道客户支持平台，支持网站聊天、邮件、WhatsApp、Facebook 等多种渠道。它提供 AI 代理 Captain 自动化回复，内置帮助中心，以及团队协作工具。作为 Intercom 的替代方案，它允许企业自托管，提供数据控制，并具备强大的自动化和生产力功能，帮助企业高效管理客户互动。 |
| 18 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 5.3k | 98 | OpenMontage 是全球首个开源代理驱动视频制作系统，将 AI 编程助手转化为全能工作室。它包含 12 个管道、52 个工具和 500+ 代理技能，支持通过自然语言描述自动完成从研究、脚本、素材生成到剪辑合成的全流程。不仅能制作动画视频，还能利用免费素材库生成真实视频，支持多种风格创作。 |
| 19 | [alexzhang13/rlm](https://github.com/alexzhang13/rlm) | General plug-and-play inference library for Recurs... | Python | 4.9k | 43 | 这是一个通用即插即用的递归语言模型（RLM）推理库，支持多种沙箱环境。RLM 允许语言模型通过递归调用自身来处理无限长度的上下文，将上下文视为代码环境中的变量。项目提供推理引擎和训练环境，旨在通过代码执行方式超越传统的 JSON 工具调用标准。 |
| 20 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥🔥🔥 Open-source Jira, Linear, Monday, and Click... | TypeScript | 51.3k | 89 | Plane 是一个开源的项目管理平台，旨在替代 Jira、Linear 等工具。它提供任务管理、冲刺周期、产品路线图、文档协作（含 AI）及数据分析功能。支持云端或自托管（Docker/K8s），具备灵活的视图定制和模块化管理能力，帮助团队高效追踪进度。 |

[查看完整数据](api/github/2026-06-17.json)
<!-- END GITHUB TRENDING -->




