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

**最后更新**: 2026-08-19 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD sho... | Python | 110.5k | 2.2k | MoneyPrinterTurbo 是一个基于 Python 的一站式 AI 短视频生成工具。用户只需输入主题或关键词，系统即可自动生成视频脚本、匹配素材、生成字幕和背景音乐，并合成高清短视频。项目支持 WebUI 和 API 接口，利用 Kimi 等大模型驱动内容创作，大幅降低了视频制作门槛。 |
| 2 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Self-evolving Context Database for AI Agents. Unif... | Python | 30.1k | 803 | OpenViking 是一个开源的 AI Agent 上下文数据库，旨在统一记忆、知识 RAG 和技能。它采用虚拟文件系统（viking:// 协议）存储上下文，支持确定性浏览。通过分层加载（L0/L1/L2）和可观察的检索轨迹，有效降低 Token 消耗并提升调试效率，实现会话向长期记忆的转化。 |
| 3 | [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | local multi-agent harness... | TypeScript | 2.7k | 797 | Munder Difflin 是一个本地多代理协作工具，将 Claude、Copilot 等终端编码 CLI 转化为拥有记忆和邮箱的协作团队。它通过 Electron 和 React 构建，利用 node-pty 包装终端会话，让用户（Michael）作为协调者管理这些 AI 代理，实现本地高效的 AI 编码协作。 |
| 4 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 817 structured cybersecurity skills for AI agents ... | Python | 29.8k | 767 | 该项目为 AI 代理提供了 817 个结构化的网络安全技能库，遵循 agentskills.io 标准。它将技能深度映射到 MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND、NIST AI RMF 和 MITRE F3 六大框架，覆盖 29 个安全领域。旨在赋予 AI 高级分析师能力，支持 Claude Code、GitHub Copilot 等主流平台。 |
| 5 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | Production-grade Rust-native trading engine with d... | Rust | 26.4k | 79 | NautilusTrader 是一个生产级 Rust 原生交易引擎，采用确定性事件驱动架构。它结合了 Rust 的高性能与 Python 的灵活性，支持研究、模拟和实盘交易。具备多资产、多交易场所支持，以及高级订单类型，确保研究到实盘的无缝部署。 |
| 6 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 223.7k | 1.2k | 这是一套专为真实工程师设计的 AI 辅助技能集合，旨在帮助开发者进行高质量的实际应用开发。项目包含一系列小巧、可组合的 Shell 脚本，支持 Claude Code 和 Codex 等主流 AI 编码助手。用户可选择订阅托管版本或直接克隆可编辑版本，通过运行特定命令快速配置开发环境。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 274.2k | 514 | Superpowers 是一个为编码代理构建的软件开发方法论框架。它通过一套可组合的技能，引导代理先确认需求、拆解规范、制定计划，并严格执行 TDD、YAGNI 和 DRY 原则。代理可自动执行子任务，实现自主开发，适用于多种主流 AI 编码工具。 |
| 8 | [jundot/omlx](https://github.com/jundot/omlx) | LLM inference server with continuous batching & SS... | Python | 19.8k | 467 | oMLX 是一个专为 Apple Silicon 优化的 LLM 推理服务器，支持持续批处理和分层 KV 缓存（内存+SSD）。它提供 macOS 菜单栏管理，支持 MCP 协议及原生自定义内核，旨在解决本地 LLM 在实际编码工作中的缓存与性能痛点。 |
| 9 | [santifer/career-ops](https://github.com/santifer/career-ops) | Open-source AI job search: scan job portals, evalu... | JavaScript | 65.8k | 193 | 这是一个开源的 AI 求职工具，将 AI 编码 CLI 转变为求职中心。它能自动扫描职位门户，使用结构化评分系统（1.0-5.0）评估职位匹配度，并生成针对 ATS 的定制化简历。支持批量处理、申请跟踪和公司研究，帮助求职者高效筛选高质量职位。 |
| 10 | [immich-app/immich](https://github.com/immich-app/immich) | High performance self-hosted photo and video manag... | TypeScript | 111.8k | 137 | Immich 是一个高性能自托管的照片与视频管理解决方案，支持移动端与 Web 端。它具备自动备份、去重、人脸识别、地理标记、智能搜索（含 CLIP）以及相册共享等功能，旨在为用户提供类似 Google Photos 的体验，同时确保数据完全自主可控。 |
| 11 | [amadeusprotocol/node](https://github.com/amadeusprotocol/node) | ... | Rust | 4.5k | 1.4k | 该项目是 Amadeus Protocol 的 Rust 节点实现，旨在运行本地测试网并提供 RPC API。它利用 Docker 进行构建，支持通过 Erlang REPL 部署 AssemblyScript 智能合约及执行交易。同时包含详细的系统网络配置，用于优化高带宽环境下的 UDP 性能。 |
| 12 | [marceloprates/prettymaps](https://github.com/marceloprates/prettymaps) | Draw pretty maps from OpenStreetMap data! Built wi... | Python | 13.1k | 58 | prettymaps 是一个基于 Python 的库，用于从 OpenStreetMap 数据绘制美观的地图。它结合了 osmnx、matplotlib 和 shapely 等工具，支持自定义样式、图层和预设。用户可以通过简单的 API 快速生成艺术风格的地图，并支持 Streamlit 前端交互。 |
| 13 | [genlayerlabs/genlayer-project-boilerplate](https://github.com/genlayerlabs/genlayer-project-boilerplate) | ... | TypeScript | 16.2k | 421 | 这是一个基于 GenLayer 框架的足球博彩游戏样板项目。它集成了 Python 智能合约、Next.js 15 前端及 LLM 功能，提供快速直接模式测试、代码检查和 CI/CD 流程，旨在帮助开发者快速构建去中心化应用。 |

[查看完整数据](api/github/2026-08-19.json)
<!-- END GITHUB TRENDING -->




