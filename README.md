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

**最后更新**: 2026-09-29 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 48.3k | 4.8k | VoiceStudio 是开源的本地化 ElevenLabs 替代品，支持语音克隆、设计、视频配音、听写、转录及有声书制作，覆盖 646 种语言。它提供本地 API 和 MCP 支持，允许用户在本地硬件上运行工作流，也可选择远程服务，满足多样化语音处理需求。 |
| 2 | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | OpenShell is the safe, private runtime for autonom... | Rust | 10.7k | 990 | OpenShell 是 NVIDIA 开发的 Rust 语言项目，旨在为自主 AI 代理提供安全、私有的运行时环境。它通过内核级强制执行和形式化验证，确保代理在读取文件、调用 API 和使用凭证时受到严格限制，防止数据泄露和未授权访问。 |
| 3 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 42.9k | 2.6k | Hindsight 是一个专注于智能体学习的记忆系统，旨在超越传统的 RAG 和知识图谱。它在 LongMemEval 基准测试中取得了最先进的性能，能够帮助智能体在长期任务中持续学习和改进。该项目支持多种集成方式，已被 Fortune 500 企业和初创公司用于生产环境，是构建高性能 AI 智能体的理想选择。 |
| 4 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 94.5k | 2.5k | Paperclip 是一个开源的 AI 代理编排平台，旨在帮助团队管理 AI 代理团队。它提供类似任务管理器的界面，底层支持组织架构、预算控制和审计功能。用户可以定义业务目标、雇佣不同提供商的代理，并从仪表盘监控工作进度和成本，支持 24/7 自主运行。 |
| 5 | [t8y2/dbx](https://github.com/t8y2/dbx) | 25 MB lightweight cross-platform database client f... | Rust | 22.1k | 232 | 这是一个基于 Rust 开发的轻量级跨平台数据库管理工具，体积仅 25MB。它支持 MySQL、PostgreSQL、Redis、MongoDB 等超过 100 种数据库，提供桌面端、CLI 和 Docker 部署方式。内置 AI 助手和 MCP Server，旨在为开发者提供高效、便捷的多数据库管理体验。 |
| 6 | [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | Multi-agent harness that runs Claude Code and Code... | TypeScript | 2.5k | 737 | OpenRig 是一个 TypeScript 编写的多代理框架，旨在将 Claude Code 和 Codex 整合为一个统一的系统。它通过 YAML 定义代理团队，允许一个主管代理协调多个专家代理，从而将杂乱的终端会话转变为持久、有序的团队协作模式。用户可以通过一个命令启动整个团队，专注于业务结果而非具体实现细节。 |
| 7 | [oblien/openship](https://github.com/oblien/openship) | Self-hosted deployment platform... | TypeScript | 13.9k | 437 | OpenShip 是一个开源自托管部署平台，内置 CI/CD。支持通过桌面应用、Web 仪表板或 CLI 管理应用。用户可连接仓库，自动完成构建、部署、路由及 TLS 终止。提供 Solo 本地模式及团队自托管模式，灵活适配不同规模需求。 |
| 8 | [averygan/reclip](https://github.com/averygan/reclip) | Download videos from almost any website. Lightweig... | HTML | 10.2k | 113 | 这是一个自托管的开源视频音频下载工具，拥有简洁的 Web 界面。它利用 Python 和 Flask 后端，结合 yt-dlp 引擎，支持从 YouTube、TikTok 等 1000+ 网站下载 MP4 或 MP3 格式。项目代码轻量（后端仅约 150 行），支持批量下载和画质选择，适合个人在本地搭建使用。 |
| 9 | [cs341-illinois/coursebook](https://github.com/cs341-illinois/coursebook) | Open Source Introductory Systems Programming Textb... | TeX | 3.1k | 572 | 伊利诺伊大学 CS 341 系统编程课程的开放源码教材，旨在提升原教材质量。项目包含引用、脚注和词汇表，支持自动构建并导出为 PDF、Markdown 和 HTML 格式。内容基于 C 语言，适合熟悉汇编指令的学习者。 |
| 10 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 61.5k | 786 | 这是一个全面的 AI 工程自学课程，涵盖从数学基础到 LLM 工程和代理开发的 523 个课程。支持 Python、TypeScript、Rust 和 Julia。每个课程交付可复用的工件（如提示词、代理），强调“边做边学”。旨在弥合学生使用 AI 工具与专业准备之间的差距。 |
| 11 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 37.4k | 835 | PageIndex 是一个无向量、基于推理的 RAG 引擎，利用树状索引替代向量索引，通过 LLM 模拟人类专家思维进行检索。它提供可解释、上下文丰富的结果，支持本地和云端模式，特别适合金融报告等长篇复杂文档。 |
| 12 | [willfaust/Madeira](https://github.com/willfaust/Madeira) | Run x86-64 Windows PC games on jailed iOS via FEX-... | C | 1.1k | 81 | 这是一个研究项目，旨在在非越狱的 iPhone 上运行 x86-64 Windows 游戏。它结合了 Wine (ARM64EC)、FEX-Emu (x86-64 翻译) 和 DXMT (D3D11 转 Metal)。目前支持 Thumper 和 ULTRAKILL 等游戏，但存在帧率低、控制不稳定等问题，需要通过侧载安装。 |
| 13 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 21.9k | 696 | Univer 是一个高性能、可定制的办公 SDK，支持电子表格、文档、演示文稿、数据库、看板和 PDF。它提供插件架构、公式引擎和 Canvas 渲染，可在浏览器和 Node.js 运行。专为 AI 代理设计，允许开发者构建嵌入产品内部的协作生产力体验。 |
| 14 | [rakyll/hey](https://github.com/rakyll/hey) | HTTP load generator, ApacheBench (ab) replacement... | Go | 20.5k | 34 | hey 是一个用 Go 语言编写的轻量级 HTTP 负载生成器，作为 ApacheBench (ab) 的替代品。它支持并发请求、HTTP/2、速率限制、自定义请求头及代理等功能，能够生成详细的性能统计报告，适用于 Web 应用性能测试。 |

[查看完整数据](api/github/2026-09-29.json)
<!-- END GITHUB TRENDING -->




