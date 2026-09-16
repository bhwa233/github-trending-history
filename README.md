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

**最后更新**: 2026-09-15 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Fast, efficient, battle-tested at Alibaba's scale.... | Go | 28.6k | 2.8k | 这是一个源自阿里巴巴内部的高效 AI 代码审查 CLI 工具。它采用确定性管道结合 LLM Agent 的混合架构，能生成精确的行级评论。内置多语言规则集，支持 OCR 扫描。在基准测试中，相比通用 Agent 具有更高的精确度和 F1 分数，且 Token 消耗更低。 |
| 2 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | Run frontier MoE models on hardware you already ow... | C | 33.9k | 2.0k | Colibrì 是一个纯 C 语言编写的轻量级推理引擎，旨在让用户在现有硬件上运行大规模 MoE 模型。它通过将存储、内存和显存视为统一层级，实现专家模型的磁盘流式加载。项目支持从 744B 到 2.8T 参数的多种前沿模型，致力于降低大模型运行门槛和成本，同时保证语义准确性。 |
| 3 | [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy) | Ever® Gauzy™ - Open Business Management Platform (... | TypeScript | 6.7k | 634 | Ever Gauzy 是一个基于 TypeScript 的开源商业管理平台，专为协作、按需和共享经济设计。它集成了 ERP、CRM、HRM、ATS 和项目管理功能，提供时间追踪、活动监控、财务管理和库存控制等全面解决方案，支持 Headless API 和仪表盘。 |
| 4 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 31.0k | 2.1k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，基于 Python 开发。它支持语音克隆、语音设计、视频配音、听写及有声书创作，覆盖 646 种语言。项目集成了 16 个 TTS 和 11 个 ASR 引擎，支持 macOS、Windows 和 Linux，无需账号或订阅即可在本地运行。目前处于活跃 Beta 阶段，提供桌面应用及多种 API 接口。 |
| 5 | [Homebrew/BrewUI](https://github.com/Homebrew/BrewUI) | 📺 Homebrew's official macOS GUI... | Swift | 1.4k | 271 | Homebrew/BrewUI 是 Homebrew 官方的 macOS 图形界面工具。它利用 SwiftUI 构建，允许用户通过图形方式安全地安装、更新和管理软件包，同时保持对底层操作的完全透明。项目支持严格的并发控制和配置隔离。 |
| 6 | [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | Open-source AI sales OS — self-hosted CRM with nat... | TypeScript | 2.8k | 193 | DeskcommCRM 是一个开源的 AI 销售操作系统。它是一个自托管的 CRM，集成了原生 AI 代理和 WhatsApp（WAHA）。它旨在成为 Kommo、Octadesk 和 Intercom 的开源替代方案，支持多租户和 LGPD 合规，无需订阅费用。 |
| 7 | [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Turn your coding agents into research agents... | Rust | 3.4k | 531 | OpenResearch 是一个基于 Rust 的本地优先研究工作空间，旨在将 Claude Code、Codex 等编码代理转化为强大的研究代理。它支持并行探索、基于 Git 的可复现实验追踪以及上下文证据管理，允许用户在本地或云端运行自主研究循环。 |
| 8 | [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | Ghidra is a software reverse engineering (SRE) fra... | Java | 76.7k | 725 | Ghidra 是由美国国家安全局（NSA）创建和维护的软件逆向工程（SRE）框架。它提供了一套全功能的分析工具，支持反汇编、反编译、汇编和脚本编写等功能，能够分析多种平台和指令集的编译代码。该框架支持用户交互和自动化模式，并允许通过 Java 或 Python 开发扩展组件，旨在解决复杂 SRE 任务的扩展和团队协作问题。 |
| 9 | [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | Enhanced ChatGPT Clone: Features Agents, MCP, Skil... | TypeScript | 43.8k | 254 | LibreChat 是一个功能强大的开源 ChatGPT 克隆版，支持多种 AI 模型（如 GPT-5、Claude、Gemini 等）。它具备 Agents、MCP、Code Interpreter 等高级功能，支持多用户认证和自托管。最新版本引入了 Agent 管理 API、工作区、代码审批及上下文压缩等特性，提供统一的 UI 和可观测性，适合需要高度定制化和多模型协作的开发者或团队。 |
| 10 | [pacifio/atlas](https://github.com/pacifio/atlas) | Source control for agents. Use multiple coding age... | Rust | 4.6k | 91 | Atlas 是专为 AI 编码代理设计的源代码控制系统。它支持多代理并行运行，通过共享内存实现上下文互通，避免重复工作。项目详细跟踪提示、工具调用和推理过程，数据默认本地存储，旨在解决 AI 编码代理缺乏推理记录和上下文共享的问题。 |
| 11 | [MG1937/ASC](https://github.com/MG1937/ASC) | ASC is a super FAST Android decompiler front-end d... | Python | 1.2k | 129 | ASC 是一个专为移动研究人员设计的极速 Android 反编译前端。它通过直接查询 Deflate 位流和利用 R8 编译器优化（如确定性常量重定位），避免了传统工具的内存膨胀和预处理瓶颈。实现了毫秒级的代码搜索和 O(1) 指令定位，极大提升了反编译效率。 |
| 12 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 94.8k | 307 | 为 AI 编码代理提供生产级工程技能，包含 9 个斜杠命令覆盖开发全流程。它封装了资深工程师的最佳实践，支持上下文自动激活和单次批准的自主执行，确保 AI 在各阶段遵循一致的质量标准。 |
| 13 | [tonhowtf/omniget](https://github.com/tonhowtf/omniget) | Download Udemy and Hotmart courses, YouTube videos... | Rust | 12.9k | 258 | OmniGet 是一款基于 Rust 开发的跨平台桌面应用，支持从 1800+ 网站下载课程、视频、音乐和书籍。它集成了 yt-dlp 和 FFmpeg，提供无终端的一键下载体验，内置播放器和阅读器，且完全开源免费，注重用户隐私。 |
| 14 | [earendil-works/pi](https://github.com/earendil-works/pi) | AI agent toolkit: unified LLM API, agent loop, TUI... | TypeScript | 105.7k | 458 | 这是一个名为 Pi 的 AI Agent 工具包，基于 TypeScript 开发。它包含统一的 LLM API、Agent 运行时、TUI 终端界面以及交互式编码 CLI。项目旨在提供可扩展的 AI 编码能力，支持多模型提供商，并具备状态管理和工具调用功能。 |

[查看完整数据](api/github/2026-09-15.json)
<!-- END GITHUB TRENDING -->




