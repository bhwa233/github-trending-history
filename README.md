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

**最后更新**: 2026-06-19 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 8.2k | 1.1k | 这是一个高性能的代码智能 MCP 服务器，使用 C 语言编写。它通过 Tree-sitter AST 分析和混合 LSP 语义解析，将代码库索引为持久知识图谱。支持 158 种语言，平均仓库毫秒级索引，Linux 内核 3 分钟可完成。提供 14 个 MCP 工具，支持 3D 可视化，零依赖单二进制运行，安全且高效。 |
| 2 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 24.1k | 1.5k | TimesFM 是 Google Research 开发的预训练时间序列基础模型，基于解码器架构。最新版本 TimesFM 2.5 拥有 2 亿参数，支持长达 16k 的上下文长度和协变量输入。项目提供 Flax 版本以加速推理，并支持通过 LoRA 进行微调，已集成至 BigQuery ML 等产品中。 |
| 3 | [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | macOS video editor built for AI... | Swift | 1.9k | 756 | Palmier Pro 是一款基于 Swift 构建的 macOS 视频编辑器，专为 AI 工作流设计。它允许用户与 AI 代理在时间轴上协作生成和编辑视频。项目包含开源的 MCP 服务器，可与 Claude、Codex、Cursor 等工具集成。编辑器免费，但生成式 AI 功能需订阅。目前仅支持 macOS 26 (Tahoe) on Apple Silicon。 |
| 4 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 57.2k | 156 | 这是一个基于 AI 的实时全球情报仪表盘，集成了新闻聚合、地缘政治监控和基础设施追踪。支持 3D/2D 地图引擎、本地 AI（Ollama）运行、国家不稳定指数及金融雷达，提供多语言支持和跨平台桌面应用，适合需要全球态势感知的专业用户。 |
| 5 | [aishwaryanr/awesome-generative-ai-guide](https://github.com/aishwaryanr/awesome-generative-ai-guide) | A one stop repository for generative AI research u... | HTML | 27.6k | 107 | 这是一个生成式 AI 的综合资源库，汇集了最新的研究论文、面试资料、免费课程（超90门）及开发笔记。项目提供了从 LLM 基础到 RAG、Agent 的学习路线图，包含认证课程和常用 AI 工具推荐，旨在为学习者提供一站式学习与求职支持。 |
| 6 | [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | A framework for building agent-native applications... | TypeScript | 1.0k | 147 | BuilderIO/agent-native 是一个 TypeScript 框架，旨在构建 UI 与自主代理完全融合的 Agent-Native 应用。它支持实时协作、上下文感知、多代理调用及自我改进，基于 SQL 数据库和无服务器架构，提供高度灵活且无供应商锁定的开发体验。 |
| 7 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 38.6k | 4.0k | Headroom 是一个专为 AI 代理设计的上下文压缩层，旨在大幅减少 LLM 的 token 消耗。它通过压缩工具输出、日志、文件及 RAG 块，实现 60-95% 的 token 减少，同时保证答案一致。支持库、代理、MCP 服务器等多种部署方式，具备本地优先、可逆压缩及跨代理记忆功能。 |
| 8 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 6.3k | 156 | 这是一个开源的代理驱动视频制作系统，基于 Python。它将 AI 编程助手转化为全能视频工作室，拥有 12 条流水线和 500+ 技能。不仅能生成基于图像的视频，还能通过检索真实运动素材和编辑制作真实视频。支持科幻、动画、广告等多种风格，成本极低。 |
| 9 | [zai-org/GLM-5](https://github.com/zai-org/GLM-5) | GLM-5: From Vibe Coding to Agentic Engineering... | - | 4.6k | 480 | GLM-5 是 zai-org 推出的旗舰大语言模型系列，包含 GLM-5.1 和 GLM-5.2。GLM-5.2 拥有 1M token 稳定上下文，通过 IndexShare 架构和 MTP 层优化，在编码基准测试（如 Terminal-Bench）中表现卓越，接近闭源模型水平。GLM-5.1 专注于代理工程，在代码生成和终端任务上表现强劲。项目致力于推动从 Vibe Coding 到 Agentic Engineering 的技术 |
| 10 | [withastro/flue](https://github.com/withastro/flue) | The sandbox agent framework.... | TypeScript | 5.8k | 309 | Flue 是一个基于 TypeScript 的沙箱代理框架，旨在构建自主 AI 代理和强大工作流。它提供了一个可编程的 TypeScript 引擎，允许模型通过工具、技能和指令执行复杂任务。框架内置安全沙箱，支持本地或远程部署，类似于 Claude Code，能够安全地与环境交互并完成端到端工作。 |
| 11 | [n0-computer/iroh](https://github.com/n0-computer/iroh) | IP addresses break, dial keys instead. Modular net... | Rust | 10.2k | 302 | Iroh 是一个 Rust 编写的模块化网络栈，旨在解决 IP 地址失效问题。它通过公钥进行连接，自动寻找最快路径（支持打洞和中继）。基于 QUIC 协议，提供安全加密和并发流支持。内置了 iroh-blobs、iroh-gossip 和 iroh-docs 等协议，适用于分布式存储、发布订阅和键值存储等场景。 |
| 12 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 233.3k | 1.1k | Superpowers 是一个面向编码代理的软件开发方法论框架。它通过一组可组合的技能，自动引导代理从需求分析、规范拆解、实施计划制定到子代理驱动的自主开发。该框架强调 TDD、YAGNI 和 DRY 原则，旨在让 AI 代理在没有人工干预的情况下独立完成复杂工程任务。 |
| 13 | [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design tool for design and... | Clojure | 50.6k | 85 | Penpot 是一款专为大规模团队设计的开源设计平台。它支持自托管，确保团队对设计基础设施的完全控制。项目采用 SVG、CSS、HTML 等开放标准，实现设计与代码的直接转化。核心功能包括实时协作、设计令牌、MCP 服务器及强大的 API，旨在连接设计、代码与 AI 工作流，提升开发效率与产品一致性。 |
| 14 | [Kong/insomnia](https://github.com/Kong/insomnia) | The open-source, cross-platform API client for Gra... | TypeScript | 39.0k | 292 | Insomnia 是一个开源的跨平台 API 客户端，支持 GraphQL、REST、WebSockets、SSE 和 gRPC 等多种协议。它提供 API 调试、OpenAPI 设计、测试套件、Mock 服务器以及 CI/CD 集成功能。支持本地、Git 和云存储，允许用户在隐私和协作之间灵活选择。 |
| 15 | [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Official Python inference and LoRA trainer package... | Python | 7.7k | 196 | LTX-2 是首个基于 DiT 的音视频基础模型，官方提供了 Python 推理和 LoRA 训练包。它支持同步音视频生成、高保真输出及多种性能模式，包含空间和时间上采样器以及多种控制 LoRA，适用于生产级视频创作。 |

[查看完整数据](api/github/2026-06-19.json)
<!-- END GITHUB TRENDING -->




