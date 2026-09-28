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

**最后更新**: 2026-09-27 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 90.0k | 2.4k | Paperclip 是一个开源的 AI 代理团队编排工具，基于 Node.js 和 React 构建。它允许用户定义业务目标，雇佣各种 AI 代理，并从仪表盘监控工作进度、成本和预算。它将代理管理类比为企业管理，提供任务管理、组织架构、预算控制和审计功能，旨在帮助用户构建自主的 AI 组织。 |
| 2 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 37.4k | 4.5k | Hindsight 是一个专注于让智能体“学习”而非仅仅“记忆”的智能体记忆系统。它声称通过消除 RAG 和知识图谱的缺点，在长时记忆任务中实现了 SOTA 性能，支持 LLM 包装器及编码代理集成，并已在 Fortune 500 企业中投入生产使用。 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 40.2k | 3.1k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，支持语音克隆、语音设计、视频配音、听写和转录等功能，覆盖 646 种语言。它默认使用 k2-fsa/OmniVoice 引擎，提供本地 API 和 MCP 支持，允许用户在本地硬件上运行，也可选择远程服务。支持有声书创作和批量作业，提供一键安装脚本。 |
| 4 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 59.3k | 790 | 这是一个全面的 AI 工程自学课程，包含 523 个课程、20 个阶段及约 342 小时内容。涵盖 Python、TypeScript、Rust 和 Julia，教授从数学基础到 LLM 工程、代理构建及 MCP 协议。项目强调通过构建可重用工件（提示词、代理、服务器）来“亲手打造” AI，旨在弥合学生使用 AI 工具与专业准备之间的差距。 |
| 5 | [InfinityLoop1308/PipePipe](https://github.com/InfinityLoop1308/PipePipe) | An open-source Android app to let you browse YouTu... | Shell | 6.6k | 242 | PipePipe 是一个基于 NewPipe 的开源 Android 应用，旨在自由浏览 YouTube 和其他服务。它提供了比 NewPipe 更快、更稳定且功能更丰富的体验。主要特性包括集成 SponsorBlock、恢复 YouTube 点赞数、弹幕显示、支持 AV1/VP9 编解码器、高级过滤、手势控制以及播放列表下载等功能。该项目为硬 fork，独立于 NewPipe 开发。 |
| 6 | [vercel-labs/scriptc](https://github.com/vercel-labs/scriptc) | TypeScript-to-Native Compiler... | TypeScript | 5.4k | 102 | scriptc 是 Vercel Labs 开发的实验性 TypeScript 到原生编译器。它利用 TypeScript 编译器进行解析和类型检查，将 TS/JS 编译为 C、LLVM IR、汇编及 WebAssembly 等多种格式。生成的可执行文件无需 Node.js 运行时，支持静态和动态构建，适用于跨平台高性能应用开发。 |
| 7 | [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | Multi-agent harness that runs Claude Code and Code... | TypeScript | 996 | 114 | OpenRig 是一个 TypeScript 编写的多智能体框架，旨在将 Claude Code 和 Codex 整合为一个统一的系统。它允许用户通过 YAML 定义代理团队，通过一个命令启动。该工具将分散的终端会话转化为持久化、有组织的团队，支持协调专家代理完成复杂任务，并保持工作上下文的一致性。 |
| 8 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 20.3k | 895 | Univer 是一个专为 AI Agents 设计的高性能开源 Office SDK。它提供电子表格、文档、演示文稿、关系型数据库和看板等核心功能，支持基于 Canvas 的渲染和插件架构。开发者可将其嵌入 SaaS 或 AI 应用中，构建可协作的办公体验，而不仅仅是查看器。 |
| 9 | [willfaust/Madeira](https://github.com/willfaust/Madeira) | Run x86-64 Windows PC games on jailed iOS via FEX-... | C | 821 | 83 | 这是一个在非越狱 iPhone 上运行 Windows PC 游戏的研究项目。它结合了 Wine、FEX-Emu 和 DXMT 技术，通过 JIT 翻译和 Metal 渲染实现 x86-64 游戏在 iOS 上的运行。目前 Thumper 和 ULTRAKILL 可玩，但存在性能和兼容性问题，需每周侧载。 |

[查看完整数据](api/github/2026-09-27.json)
<!-- END GITHUB TRENDING -->




