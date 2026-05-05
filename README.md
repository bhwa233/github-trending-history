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

**最后更新**: 2026-05-04 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 41.3k | 2.6k | Ruflo 是专为 Claude Code 打造的智能体编排平台，支持跨机器和团队编排 100+ 专业智能体。它具备自学习记忆、联邦通信和企业级安全架构，通过插件系统实现智能体协作与自主运行，简化 AI 系统开发。 |
| 2 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 67.4k | 2.2k | TradingAgents 是一个基于 Python 的多智能体 LLM 金融交易框架。它模拟真实交易公司，通过基本面、情感、技术分析师、交易员和风控团队等智能体协作评估市场并决策。支持多种大模型（如 GPT-5.4、Claude 4.6）及 LangGraph，具备回测、Docker 部署等功能，专为研究目的设计。 |
| 3 | [browserbase/skills](https://github.com/browserbase/skills) | Claude Agent SDK with a web browsing tool... | JavaScript | 2.1k | 320 | 这是一个为 Claude Code 提供的 Browserbase 浏览器自动化技能集。它包含多种技能，如浏览器自动化、CLI 操作、无服务器函数部署、站点调试、性能追踪、Cookie 同步、静态抓取、结构化搜索以及 AI 驱动的 UI 测试。旨在通过 Browserbase 平台实现强大的网页交互和测试能力。 |
| 4 | [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) | Coding agent for DeepSeek models that runs in your... | Rust | 3.9k | 1.3k | 这是一个基于 Rust 构建的终端原生编码代理，专为 DeepSeek V4 模型设计。它支持 1M token 上下文，具备并行推理、思维模式流、文件操作、Shell 执行及 Git 管理等全功能工具集。内置 MCP 协议支持，支持会话保存与持久化任务队列，适合在终端中进行高效的代码编写与自动化任务处理。 |
| 5 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 24.8k | 1.1k | Maigret 是一款强大的开源 OSINT 工具，支持通过用户名在 3000+ 网站上收集个人资料信息。具备递归搜索、绕过封锁、Tor/I2P 支持、Web UI 及报告生成功能，无需 API 密钥，适合专业情报分析。 |
| 6 | [qbittorrent/qBittorrent](https://github.com/qbittorrent/qBittorrent) | qBittorrent BitTorrent client... | C++ | 37.0k | 68 | qBittorrent 是一个用 C++ 和 Qt 编写的开源 BitTorrent 客户端。它基于 libtorrent 库开发，旨在成为其他客户端的优秀替代品。该软件以速度快、稳定性高著称，支持 Unicode，功能丰富，提供命令行界面和图形用户界面，适合需要高效下载和管理的用户。 |
| 7 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | A MCP for Claude Desktop / Claude Code / Windsurf ... | TypeScript | 19.9k | 497 | 这是一个 TypeScript 编写的 MCP 服务器，为 Claude 等智能体提供对 n8n 1,650 个节点的全面访问。它包含节点文档、属性及操作，帮助 AI 高效构建自动化工作流，支持核心与社区节点。 |
| 8 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness... | Rust | 3.9k | 545 | 这是一个基于 Rust 的高性能 Coding Agent Harness。它专注于提升编码技能上限，支持多会话工作流与高度自定义。项目核心优势在于极致的资源效率，内存占用显著低于同类竞品，适合需要大规模并发会话的开发者。 |
| 9 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 92.6k | 1.3k | 该项目提供了一套精心设计的 AI 代理集合，涵盖前端开发、社区运营等不同领域。每个代理具备独特人格和专业化流程，支持通过 Shell 脚本一键安装至 Claude Code、Copilot 等主流开发工具中，旨在构建全天候工作的 AI 专家团队。 |
| 10 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 23.2k | 497 | Dexter 是一个基于 TypeScript 的自主金融研究代理。它利用任务规划、自我反思和实时市场数据，将复杂的金融问题分解为结构化的研究步骤。它具备自主执行、自我验证和循环检测等安全功能，能够独立完成深度财务分析并输出数据支持的结论。 |
| 11 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 27.3k | 106 | 这是一个用于 Windows 的批处理脚本项目，旨在绕过 Discord 和 YouTube 的网络封锁。它利用 WinDivert 驱动程序拦截和过滤网络流量。项目警告用户注意杀毒软件可能将其误报为风险工具，并建议启用安全 DNS。 |
| 12 | [fspecii/ace-step-ui](https://github.com/fspecii/ace-step-ui) | 🎵 The Ultimate Open Source Suno Alternative - Pro... | JavaScript | 2.8k | 222 | 这是一个为 ACE-Step 1.5 AI 音乐生成模型提供专业界面的开源项目。它允许用户在本地免费、无限地生成高质量音乐，支持全歌生成、人声/乐器模式、批量处理及高级参数调整。相比商业服务，它提供完全的隐私控制和所有权，是 Suno 的理想替代方案。 |
| 13 | [jellyfin/jellyfin](https://github.com/jellyfin/jellyfin) | The Free Software Media System - Server Backend & ... | C# | 51.1k | 35 | Jellyfin 是一个免费开源的媒体系统，旨在替代专有的 Emby 和 Plex。它提供后端服务器和 API，允许用户从专用服务器跨平台管理和流式传输媒体。项目完全开源，无付费功能，支持多设备访问。 |
| 14 | [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) | Incremental engine for long horizon agents 🌟 Star... | Python | 8.0k | 204 | CocoIndex 是一个专为 AI 代理和 LLM 应用设计的增量上下文引擎。它支持将代码库、文档、视频等多种数据源实时转化为向量索引，具备增量处理和并行计算能力，确保数据始终新鲜，无需手动维护批次，能快速构建生产级 AI 应用。 |
| 15 | [docusealco/docuseal](https://github.com/docusealco/docuseal) | Open source DocuSign alternative. Create, fill, an... | Ruby | 13.2k | 900 | DocuSeal 是一个开源的 DocuSign 替代方案，使用 Ruby 构建。它提供安全的数字文档签署与处理平台，支持 WYSIWYG 表单构建、多种字段类型、自动电子签名、移动端优化及多语言支持。项目具备完善的 API 和 Webhook，支持多种部署方式，适合企业快速集成文档签署流程。 |

[查看完整数据](api/github/2026-05-04.json)
<!-- END GITHUB TRENDING -->




