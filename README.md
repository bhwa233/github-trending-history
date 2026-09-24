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

**最后更新**: 2026-09-23 | **成功**: 16 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 36.9k | 664 | 该项目为金融服务业提供 Claude 代理、技能和数据连接器，涵盖投资银行、股权研究等领域。包含 Pitch Agent、Market Researcher 等端到端工作流代理及垂直插件。支持作为插件或 API 部署，旨在辅助分析师起草工作产品，需人工审核。 |
| 2 | [google/ax](https://github.com/google/ax) | Google's open agentic orchestration runtime... | Go | 9.1k | 1.5k | Google 开源的代理编排运行时，类似 Kubernetes。它提供声明式 API，用于在集群中大规模运行自主代理。核心功能包括沙箱隔离、工作区预置、网络网关限制及模型配置，支持暂停/恢复和 SSH 调试，旨在解决代理工作负载的状态管理、安全隔离和成本控制问题。 |
| 3 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 31.5k | 389 | 这是一个用于 Anthropic Claude Code 的 CLI 工具，提供即用型配置。它包含 AI 代理、自定义命令、MCPs 和项目模板，旨在增强开发工作流。用户可通过命令行轻松安装和管理这些组件，提升开发效率。 |
| 4 | [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | A framework for building agentic apps... | TypeScript | 6.5k | 87 | Agent-Native 是一个 TypeScript 框架，旨在构建将自主智能体与专用 UI 配对的智能体应用。它通过共享操作、数据和应用状态，实现了智能体与 UI 的无缝协作。开发者只需定义一次动作，即可在智能体、React UI、HTTP、MCP 等多种场景中复用，解决了智能体工作流可视化与交互的难题。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 290.7k | 474 | Superpowers 是一个为编码代理设计的软件开发方法论与技能框架。它通过引导用户定义规范、分解任务并制定计划，利用子代理自主执行 TDD、YAGNI 和 DRY 原则，实现高效的自动化编码。支持多种主流 AI 编码工具。 |
| 6 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 16.3k | 1.1k | Univer 是一个开源的 Office SDK，专为 AI 代理打造，支持电子表格、文档、演示文稿等多种办公场景。它提供高性能、可定制的渲染引擎和公式支持，具备插件化架构，允许开发者构建嵌入式的生产力体验，适用于 SaaS、BI 工作流及 AI 应用开发。 |
| 7 | [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock) | OpenStock is an open-source alternative to expensi... | TypeScript | 18.8k | 344 | OpenStock 是一个开源免费的股票市场平台，旨在替代昂贵的付费服务。它提供实时价格追踪、个性化警报和详细的公司洞察，完全免费且社区驱动。项目使用 Next.js 和 MongoDB 构建，旨在打破知识壁垒，让所有人都能无障碍地获取市场信息。 |
| 8 | [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Agent Substrate: the core system... | Go | 3.5k | 558 | Agent Substrate 是一个用 Go 编写的安全代理执行运行时，旨在以比标准容器高 10 倍的密度运行数百万个沙箱。它基于 Kubernetes 构建，通过重度多路复用技术将应用程序映射到较小的“工作者”上，提供原生零信任隔离和低延迟的暂停/恢复操作。该系统专为自主代理设计，提供生命周期管理和流量路由，旨在实现大规模、高效的代理部署。 |
| 9 | [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | Build an agent harness and control it end-to-end. ... | Python | 7.8k | 115 | Strands Agents 是一个开源 SDK，用于在 Python 和 TypeScript 中构建和运行生产级 AI 代理。它提供了一个强大的“harness”框架，支持端到端控制，包括生命周期管理、工具调用、MCP 协议、多代理协作、内存管理和模型无关性。内置护栏、流式传输和追踪功能，帮助开发者轻松构建可观测且健壮的智能体系统。 |
| 10 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 49.9k | 57 | CLI-Anything 旨在让所有软件“代理原生化”。它通过 CLI-Hub 注册表，提供浏览、安装和管理社区构建的命令行工具。这使得 AI 代理（如 Claude Code、Cursor）能够通过单一命令行指令与各种软件进行交互，实现自动化操作，并支持用户贡献和请求新功能。 |
| 11 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for agent tools. Join community here: h... | Python | 2.7k | 506 | treg 是一个为代理工具设计的统一 API 网关，类似于 OpenRouter。它聚合了 3000+ 个来自 60+ 个提供商的端点（涵盖 SEO、数据丰富、图像生成等），允许代理通过单一令牌访问，无需单独注册或订阅。它支持按调用付费（从几分钱起）和团队内部工具，确保凭证安全。 |
| 12 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 70.3k | 304 | 处理失败 |
| 13 | [mvt-project/mvt](https://github.com/mvt-project/mvt) | MVT (Mobile Verification Toolkit) helps with condu... | Python | 14.5k | 543 | MVT (Mobile Verification Toolkit) 是 Amnesty International 开发的开源取证工具，旨在自动化收集 Android 和 iOS 设备的数字痕迹。它支持使用公开的指标（IOCs）扫描设备，帮助调查员识别潜在的间谍软件感染或针对性攻击。该工具专为技术人员和调查员设计，用于辅助安全调查。 |
| 14 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 44.6k | 190 | 这是一个高性能的代码智能 MCP 服务器，使用 C 语言编写。它利用 Tree-sitter 和 LSP 将代码库索引为持久化知识图谱，支持 158 种语言。平均仓库毫秒级索引，查询低于 1ms。支持 17 个 MCP 工具，完全本地运行，内置 3D 可视化，专为 AI 编码代理设计。 |
| 15 | [harry7557558/spirula-studio](https://github.com/harry7557558/spirula-studio) | Cross-vendor 3D Gaussian Splatting trainer - video... | C++ | 741 | 69 | Spirula Studio 是一款跨供应商的 3D Gaussian Splatting 训练器，支持从视频/照片到 3D 网格的端到端流程。它基于 Vulkan 运行，兼容 NVIDIA、AMD、Intel 和 Apple GPU，无需 Python 或 COLMAP。具备高 VRAM 效率，原生支持 360° 相机，内置 SfM 和 AI 掩码，能快速生成高质量 3D 模型。 |
| 16 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 26.5k | 746 | 这是一个开源项目，允许用户通过 Claude Code 等编码代理自动编辑视频。它支持自动剪除填充词、自动调色、添加字幕和生成动画，利用 FFmpeg 进行处理，并支持会话记忆，适合需要快速批量处理视频内容的开发者或创作者。 |
| 17 | [TNT-Likely/PanWatch](https://github.com/TNT-Likely/PanWatch) | 盯盘侠 PanWatch · 自托管 AI 盯盘助手，集成 TradingAgents 多 Agen... | Python | 1.5k | 95 | PanWatch 是一个自托管的 AI 盯盘助手，集成 TradingAgents 多 Agent 投资决策框架。支持 A股、港股、美股实时监控，具备持仓管理、智能分析（技术指标共振）、价格提醒及全渠道推送功能。支持 Docker 一键部署，数据私有，适合个人投资者进行量化决策。 |

[查看完整数据](api/github/2026-09-23.json)
<!-- END GITHUB TRENDING -->




