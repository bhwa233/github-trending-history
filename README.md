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

**最后更新**: 2026-06-22 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 12.0k | 2.9k | 这是一个开源的代理驱动视频制作系统，包含12条流水线和52个工具，拥有500+代理技能。它能将AI编程助手转化为完整的视频制作工作室，支持从脚本到成片的自动化流程，不仅能制作图片视频，还能通过检索真实素材剪辑生成电影级作品。 |
| 2 | [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | macOS video editor built for AI... | Swift | 7.3k | 2.5k | Palmier Pro 是一款基于 Swift 开发的 macOS 视频编辑器，对标 Premiere Pro。它集成了生成式 AI，允许用户在时间轴上直接生成视频和图像，并支持通过 MCP 协议与 Claude、Cursor 等代理协作。编辑器核心与 MCP 服务器开源，生成式 AI 功能需订阅。 |
| 3 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 32.2k | 529 | Voicebox 是一个本地优先的开源 AI 声音工作室。支持零样本声音克隆、23 种语言的 7 种 TTS 引擎合成语音，以及全局听写功能。集成本地 LLM 提供完整语音 I/O 栈，确保数据隐私，是 ElevenLabs 和 WisprFlow 的本地替代方案。 |
| 4 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 817 structured cybersecurity skills for AI agents ... | Python | 18.7k | 956 | 该项目为 AI 代理提供 817 个结构化网络安全技能，覆盖 29 个安全领域。每个技能均映射至 MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND、NIST AI RMF 及 MITRE F3 六大框架，遵循 agentskills.io 标准。旨在赋予 AI 代理资深分析师的能力，支持 Claude Code 等平台，辅助安全调查与合规检查。 |
| 5 | [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design tool for design and... | Clojure | 52.9k | 728 | Penpot 是一个开源的跨平台设计平台，专为大规模团队构建数字产品设计系统而设计。它支持自托管，确保数据合规与治理。平台采用开放标准（SVG, CSS, HTML, JSON），实现设计与代码的无缝协作。通过实时协作、Design Tokens 和 MCP 服务器，它支持多向工作流，帮助团队加速产品交付并保持一致性。 |
| 6 | [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) | #1 PDF Application on GitHub that lets you edit PD... | TypeScript | 82.9k | 547 | Stirling PDF 是一个强大的开源 PDF 编辑平台，支持桌面、浏览器和自托管部署。它提供 50+ 种工具，包括编辑、合并、签名、OCR 和转换。支持自动化工作流、企业级安全（SSO、审计）以及 REST API，适合个人和企业处理 PDF 文档。 |
| 7 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 113.1k | 573 | gstack 是由 Y Combinator 总裁 Garry Tan 开发的 TypeScript 项目，旨在将 Claude Code 转化为虚拟工程团队。它包含 23 个意见化工具，模拟 CEO、设计经理、发布经理等角色，帮助个人开发者以媲美小型团队的速度和效率交付产品。 |
| 8 | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Write HTML. Render video. Built for agents.... | TypeScript | 30.0k | 395 | HyperFrames 是一个开源框架，用于将 HTML、CSS 和动画转换为确定性的 MP4 视频。它专为 AI 编程代理设计，支持通过 CLI 或技能进行本地渲染。项目包含设计系统翻译层，可用于产品发布、数据可视化和文档转视频等多种场景。 |
| 9 | [tursodatabase/turso](https://github.com/tursodatabase/turso) | Turso is an in-process SQL database, compatible wi... | Rust | 21.5k | 540 | Turso 是一个用 Rust 编写的进程内 SQL 数据库，完全兼容 SQLite。它支持 MVCC、异步 I/O、多语言绑定及 WebAssembly。提供向量搜索、变更数据捕获 (CDC) 和静态加密等实验性功能。目前处于 BETA 阶段，旨在提供高性能的数据库体验。 |
| 10 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source long-horizon SuperAgent harness tha... | Python | 73.2k | 738 | DeerFlow 是字节跳动开源的长周期 SuperAgent 框架，专注于研究、编码与任务自动化。它通过编排子代理、沙箱、记忆和工具，支持从几分钟到几小时的任务处理。v2.0 是全新重写版本，集成了 Claude Code 和字节跳动的 InfoQuest 搜索工具，推荐使用 DeepSeek 和 Kimi 等模型运行。 |
| 11 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 11.5k | 1.2k | 这是一个高性能的代码智能 MCP 服务器，使用 C 语言编写。它通过树-sitter 和 LSP 技术将代码库索引为持久知识图谱，支持 158 种语言。平均仓库毫秒级索引，Linux 内核 3 分钟，查询速度亚毫秒级，令牌减少 99%。提供单静态二进制文件，零依赖，支持本地处理和 3D 可视化，专为 AI 编码代理设计。 |
| 12 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 45.8k | 1.6k | 这是一个基于 Python 的 LLM 驱动多市场股票智能分析系统，支持 A股、港股、美股等。它能聚合多源行情与新闻，利用 AI 生成决策仪表盘，并通过企业微信、飞书等渠道自动推送。支持 GitHub Actions 零成本部署，适合个人投资者进行自动化选股与决策辅助。 |
| 13 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | The API to search, scrape, and interact with the w... | TypeScript | 137.3k | 615 | Firecrawl 是一个用于大规模搜索、抓取和交互 Web 的 API。它将网页内容转化为干净的 Markdown 或结构化 JSON，专为 AI 代理设计。项目覆盖 96% 的网络，支持 JS 渲染，自动处理代理和速率限制，提供快速可靠的实时数据提取服务。 |
| 14 | [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Clone any website with one command using AI coding... | TypeScript | 17.7k | 100 | 这是一个基于 Next.js 的可复用模板，利用 AI 编码代理（如 Claude Code）通过一个命令自动克隆任意网站。它支持提取设计令牌和资产，将目标网站重构为现代化的 Next.js 代码库，支持多种 AI 代理平台。 |
| 15 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 21.0k | 193 | AirLLM 是一个优化推理内存使用的库，允许在单张 4GB GPU 上运行 70B 大语言模型，无需量化或剪枝。它支持 Llama3.1、Qwen 等多种模型，并提供压缩功能以提升速度，适合在消费级硬件上部署大模型。 |
| 16 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 141.6k | 2.1k | 这是一个为 Claude 等编码代理设计的可组合技能集合，旨在解决 AI 代理常见的“误解意图”问题。通过安装脚本和特定命令（如 /grill-me），它帮助工程师在编码前进行详细的需求对齐，确保开发符合预期。这些技能小巧、易用且可定制，旨在提升真实工程开发的效率和质量。 |

[查看完整数据](api/github/2026-06-22.json)
<!-- END GITHUB TRENDING -->




