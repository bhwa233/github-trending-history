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

**最后更新**: 2026-07-20 | **成功**: 20 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Local-first code intelligence graph for MCP and CL... | Python | 23.1k | 1.8k | 这是一个本地优先的代码智能图工具，利用 Tree-sitter 构建代码结构映射，通过 MCP 协议为 AI 编码助手提供精确上下文，显著减少 token 消耗，优化大型代码库的审查与工作流效率。 |
| 2 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | The most intelligent agent harness for code... | Rust | 9.6k | 568 | 这是一个基于 Rust 构建的下一代代码智能体框架，旨在提升编码技能上限。它专注于多会话工作流、高度可定制性及极致性能，通过优化资源使用（如极低的内存占用）来支持大规模并发场景。 |
| 3 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free MIT AI gateway: one endpoi... | TypeScript | 21.8k | 1.1k | OmniRoute 是一个免费的 MIT AI 网关，聚合 268+ 提供商和 500+ 模型。它提供零配置的自动故障转移和智能路由，支持 Claude、GPT 等主流模型，并兼容多种编辑器。项目还包含代币追踪和压缩功能，帮助开发者节省成本并提高可用性。 |
| 4 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 40.5k | 823 | 这是一个全面的 AI 工程课程，包含 503 个课程和 20 个阶段，涵盖 Python、TypeScript、Rust 和 Julia。它强调从零开始构建 AI，从原始数学到复杂的代理，而不是仅仅使用工具。它免费且开源，旨在弥合学生使用 AI 与专业使用之间的差距。 |
| 5 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 134.7k | 862 | Agency Agents 是一个包含多个具有特定个性、流程和交付成果的 AI 代理的项目。它提供了一个原生桌面应用，用于浏览、安装和管理这些代理到各种 AI 编码工具（如 Claude Code、Cursor 等），旨在帮助用户快速组建“AI 专家团队”以提升开发效率。 |
| 6 | [kvcache-ai/ktransformers](https://github.com/kvcache-ai/ktransformers) | A Flexible Framework for Experiencing Heterogeneou... | Python | 18.7k | 458 | KTransformers 是一个专注于异构计算的高效 LLM 推理与微调框架。它支持 CPU-GPU 资源调度，提供 AVX2 和 NPU 后端，支持多种前沿模型（如 GLM, Kimi, DeepSeek）。项目集成了 LLaMA-Factory，支持 SFT 和推理优化，旨在在消费级硬件上实现高性能边缘 AI。 |
| 7 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 44.1k | 821 | Voicebox 是一个完全本地运行的开源 AI 声音工作室。它支持零样本声音克隆、23种语言的语音生成（基于7种TTS引擎）以及全局语音输入。项目注重隐私，提供丰富的后期处理效果和故事编辑器，是 ElevenLabs 和 WisprFlow 的本地替代方案。 |
| 8 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Cognee is the open-source AI memory platform for a... | Python | 28.8k | 234 | Cognee 是一个开源的 AI 记忆平台，专为智能体设计。它利用自托管的知识图谱引擎，为 AI 智能体提供跨会话的持久化长期记忆，帮助它们更好地处理信息。 |
| 9 | [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | A feed-forward 3D foundation model for reconstruct... | Python | 14.2k | 565 | LingBot-Map 是一个用于流式 3D 重建的几何上下文 Transformer 模型。它通过锚点上下文、姿态参考窗口和轨迹记忆，统一了坐标定位与几何线索。该模型具备高效的前馈架构，支持长序列（>10,000帧）稳定推理（~20 FPS），在多种基准测试中表现优异，优于现有流式及迭代优化方法。 |
| 10 | [every-app/open-seo](https://github.com/every-app/open-seo) | Open source alternative to Semrush and Ahrefs... | TypeScript | 5.8k | 939 | OpenSEO 是一款开源的 SEO 工具，旨在替代 Semrush 和 Ahrefs。它采用按需付费模式，无订阅费，支持自托管。核心功能包括关键词研究、排名追踪、竞争对手分析等。特别之处在于集成了 MCP 协议，可与 Claude Code 等 AI 代理无缝协作，提供 AI 可见性分析，适合个人开发者及 AI 辅助的 SEO 工作流。 |
| 11 | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | Kimi Code CLI is your next CLI agent.... | Python | 10.2k | 410 | Kimi CLI 是一个运行在终端的下一代 AI 代理，旨在帮助完成软件开发和终端操作。它具备代码读写、Shell 命令执行、网页搜索及自主规划能力。支持通过 Ctrl-X 切换 Shell 模式，并可与 VS Code、Zed、JetBrains 等 IDE 或编辑器深度集成，提供强大的终端 AI 助手体验。 |
| 12 | [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | AI Agent Assistant & development framework that in... | Python | 37.1k | 317 | AstrBot 是一个开源的 AI Agent 聊天机器人平台，支持多平台集成（QQ、微信、飞书等）和多种 LLM。它提供丰富的插件生态、Agent 沙箱、角色扮演及 WebUI，旨在帮助用户快速构建生产级的 AI 应用，如个人助手或企业知识库。 |
| 13 | [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 🚀 The fast, Pythonic way to build MCP servers and... | Python | 26.5k | 96 | FastMCP 是构建 Model Context Protocol (MCP) 服务器和客户端的 Python 框架。它通过装饰器将 Python 函数自动转换为 MCP 工具，自动处理模式生成、验证和协议生命周期。作为 MCP 的标准框架，它支持服务器、客户端和应用三种模式，被广泛用于连接 LLM 与工具数据。 |
| 14 | [KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo) | The go-to web for your AI coding agent — local-fir... | TypeScript | 2.5k | 689 | wigolo 是一个面向 AI 编程代理的本地优先 Web 智能工具。它提供搜索、抓取、爬取和研究功能，无需 API 密钥或云端，确保数据隐私且零成本。支持 Claude Code、Cursor 等多种 IDE 及 LangChain 等框架，可作为 MCP 服务器或 SDK 嵌入运行。 |
| 15 | [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) | A batteries-included framework for building web ap... | Rust | 1.5k | 371 | Topcoat 是一个基于 Rust 的全栈 Web 框架，旨在提供开箱即用的功能。它支持服务器端渲染，允许组件直接查询数据库。其独特之处在于通过 $(...) 表达式实现客户端响应性，无需 WebAssembly 或构建步骤。它还支持 #[shard] 进行服务器端更新，简化了全栈开发流程。 |
| 16 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 133.8k | 240 | 该项目是一个全球公开 IPTV 频道集合库，提供 M3U 格式的播放列表。它整合了 API 和数据库，方便开发者获取数据。用户只需将链接粘贴至播放器即可观看直播，项目不存储视频文件，仅提供公开链接。 |
| 17 | [oblien/openship](https://github.com/oblien/openship) | Self-hosted deployment platform... | TypeScript | 4.8k | 1.6k | OpenShip 是一个自托管的部署平台，内置 CI/CD 能力。它支持多种编程语言和框架，提供零配置的推送部署体验。平台集成了数据库、域名管理、SSL、CDN、邮件服务器和备份功能，支持自动扩展和实时监控。用户可通过 CLI、桌面应用或 Web 仪表板进行管理。 |
| 18 | [microsoft/Ontology-Playground](https://github.com/microsoft/Ontology-Playground) | Free, open-source web app for learning about ontol... | TypeScript | 1.7k | 464 | 这是一个用于学习和设计本体的免费开源 Web 应用。它支持可视化编辑、交互式图探索、RDF 导入导出以及一键提交社区目录。项目完全静态，无后端依赖，旨在帮助用户理解本体结构并与 Microsoft Fabric IQ 集成。 |
| 19 | [handy-computer/transcribe.cpp](https://github.com/handy-computer/transcribe.cpp) | ggml speech-to-text inference for 16+ model famili... | C++ | 1.2k | 395 | 这是一个基于 C++ 的语音转文字推理库，支持 16+ 种模型家族。它利用 GGML 运行时和 GGUF 模型，提供 Metal、Vulkan、CUDA 等多后端加速，支持流式和批处理。所有模型均经过数值验证和 WER 测试。 |
| 20 | [moonshine-ai/moonshine](https://github.com/moonshine-ai/moonshine) | Very low latency speech to text, intent recognitio... | C++ | 9.8k | 282 | Moonshine 是一个开源 AI 工具包，专为构建低延迟、隐私优先的实时语音代理设计。它支持语音转文本、文本转语音及意图识别，所有模型均在设备端运行。项目提供从 1MB 小型模型到高精度模型的多种选择，支持跨平台部署（包括移动端、嵌入式及 IoT 设备），并包含语音克隆、说话人识别等高级功能。 |

[查看完整数据](api/github/2026-07-20.json)
<!-- END GITHUB TRENDING -->




