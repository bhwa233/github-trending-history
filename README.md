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

**最后更新**: 2026-06-28 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat) | SimpleX - the first messaging network operating wi... | Haskell | 15.0k | 1.2k | SimpleX Chat 是首个完全无用户标识符的即时通讯网络，强调 100% 隐私设计。它采用双重 ratchet 端到端加密，保护消息和元数据。支持 iOS、Android 以及桌面端（包括 Linux、macOS、Windows 的终端应用），提供跨平台的安全通讯体验。 |
| 2 | [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | A list of SaaS, PaaS and IaaS offerings that have ... | HTML | 125.2k | 495 | 这是一个由社区维护的免费开发者服务列表，涵盖 SaaS、PaaS 和 IaaS。项目专注于基础设施开发者，筛选出提供长期免费层级且支持 SSO 的服务，帮助开发者做出明智决策。 |
| 3 | [commaai/openpilot](https://github.com/commaai/openpilot) | openpilot is an operating system for robotics. Cur... | Python | 62.4k | 266 | openpilot 是一个基于 Python 的机器人操作系统，旨在升级 300 多种支持车辆的驾驶员辅助系统。它支持 comma four 硬件，遵循 ISO26262 安全标准，拥有软件在环测试，并欢迎社区贡献。 |
| 4 | [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | AI 时代的伯克希尔：基于 Claude Code / Codex 的价值投资研究框架。巴菲特·芒格... | Python | 5.3k | 1.4k | 这是一个基于 Python 的价值投资研究框架，兼容 Claude Code 和 Codex。它整合了巴菲特、芒格、段永平、李录四位大师的投资方法论，通过多 Agent 并行对抗分析，强制输出结论并内置反偏见机制。项目强调金融数据的精确计算，旨在通过 AI 将个人研究能力提升至专业团队水平。 |
| 5 | [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map) | A feed-forward 3D foundation model for reconstruct... | Python | 8.2k | 372 | LingBot-Map 是一个用于流式 3D 重建的前馈 3D 基础模型。它采用几何上下文变换器架构，统一了坐标定位、几何线索和漂移校正。支持高效推理（~20 FPS），在长序列（>10,000 帧）上表现优异，在 KITTI 和 Oxford Spires 等基准测试中达到最先进水平。 |
| 6 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 19.6k | 2.2k | 这是一个高性能的代码智能 MCP 服务器，利用 Tree-sitter 和混合 LSP 语义解析技术，将代码库索引为持久知识图谱。支持 158 种语言，平均仓库毫秒级索引，查询速度极快。提供单静态二进制，零依赖，内置 3D 可视化，专为 AI 编码代理设计，确保本地安全处理。 |
| 7 | [cupy/cupy](https://github.com/cupy/cupy) | NumPy & SciPy for GPU... | Python | 11.5k | 174 | CuPy 是一个兼容 NumPy 和 SciPy 的 GPU 加速数组库。它作为现有代码的即插即用替代品，支持 NVIDIA CUDA 和 AMD ROCm 平台。除了高性能数组操作外，它还提供对低级 CUDA 特性的访问，如 RawKernels 和 Streams，允许直接调用 CUDA 运行时 API。 |
| 8 | [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | FluidVoice - Fastest macOS Offline Dictation app -... | Swift | 3.7k | 365 | FluidVoice 是一款专为 macOS 设计的极速离线语音转文字应用。它利用本地 AI 模型（Fluid Intelligence）实现零延迟的语音识别和智能增强（如自动格式化），无需云端服务，保护用户隐私。项目基于 GPLv3 开源，支持 Homebrew 安装。 |
| 9 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | Transforms complex documents like PDFs and Office ... | Python | 71.6k | 380 | MinerU 是一个高精度文档解析引擎，支持将 PDF、Office 文档及网页转换为结构化的 Markdown/JSON。它采用 VLM+OCR 双引擎，支持 109 种语言，具备公式转 LaTeX、表格重建等强大功能。项目支持国产 AI 芯片，提供 MCP Server 和多种 RAG 框架集成，专为 LLM、RAG 和 Agent 工作流设计。 |
| 10 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 14.3k | 492 | Vibe-Trading 是一个基于 Python 的个人交易代理，旨在通过一条命令赋予代理全面的交易能力。它集成了 LLM（如 OpenAI 和 Gemini）进行智能决策，支持 Shadow Account 影子账户策略、Tushare 数据加载以及 MCP 协议。项目具备跨平台支持、内容过滤韧性和事件驱动架构，能够自动执行交易信号生成和资金管理。 |
| 11 | [ByteByteGoHq/system-design-101](https://github.com/ByteByteGoHq/system-design-101) | Explain complex systems using visuals and simple t... | - | 84.4k | 250 | 该项目旨在通过可视化和通俗易懂的语言解释复杂的系统概念，帮助开发者系统性地准备系统设计面试。 |
| 12 | [usestrix/strix](https://github.com/usestrix/strix) | Open-source AI hackers to find and fix your app’s ... | Python | 26.7k | 122 | Strix 是一个开源 AI 黑客工具，利用自主 AI 代理模拟真实黑客行为，动态运行代码以发现并验证漏洞。它提供完整的黑客工具包，支持 CI/CD 集成，能够自动生成 PoCs 并修复问题，帮助开发者和安全团队快速进行渗透测试和应用安全检测。 |
| 13 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 11.0k | 196 | 这是一个基于 Python 的开源项目，允许用户通过 Claude Code 等编程代理自动编辑视频。它支持自动剪除填充词、调色、添加字幕及生成动画叠加层。用户只需将素材放入文件夹，与代理对话即可生成 final.mp4。项目依赖 ffmpeg 和 ElevenLabs API，旨在实现无需预设的智能视频剪辑。 |

[查看完整数据](api/github/2026-06-28.json)
<!-- END GITHUB TRENDING -->




