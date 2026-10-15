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

**最后更新**: 2026-10-14 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 242.8k | 41.0k | REA 是一个基于 TypeScript 的逆向工程工具，允许 AI 代理通过本地分析无源码检查应用程序。它连接代理与原生二进制、JS/Electron、.NET 等检查工具，支持解释功能、展示证据并构建版本。项目支持 Claude Code、Cursor 等多种代理，旨在帮助开发者快速理解竞品或应用行为。 |
| 2 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 66.4k | 3.5k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，支持语音克隆、语音设计、视频配音、听写和有声书制作，覆盖 646 种语言。它提供本地 API 和 MCP 支持，兼容 NVIDIA GPU、Apple Silicon 和 CPU，强调隐私和完全本地运行。 |
| 3 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 29.1k | 947 | 这是一个 TypeScript 开发的 MCP 服务器，旨在解决 AI 编码代理的上下文窗口溢出问题。它通过沙箱工具将原始数据（如文件快照）从上下文中移除，实现 98% 的数据压缩。同时，利用 SQLite 和 FTS5 索引技术持久化会话状态，确保对话压缩后不丢失关键信息。此外，它强制采用“代码思维”模式，让 LLM 生成脚本来处理分析任务，而非读取大量文件，从而大幅减少 token 消耗。 |
| 4 | [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | Node Version Manager - POSIX-compliant bash script... | Shell | 95.5k | 52 | nvm 是一个 POSIX 兼容的 Shell 脚本，用于管理多个 Node.js 版本。它允许用户轻松安装、切换和卸载不同版本的 Node.js，支持 bash、zsh 和 fish 等多种 Shell。项目还提供 Docker 支持、全局包迁移以及通过 .nvmrc 文件自动切换版本的功能。 |
| 5 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 49.4k | 163 | 这是一个将任何AI代理转化为AI科学家的技能库。包含177个经过验证的科学技能和100多个科学数据库，覆盖生物、化学、医学等多个领域。项目支持Cursor、Claude Code等多种AI工具，遵循开放Agent Skills标准。此外，还推出了K-Dense BYOK本地AI共同科学家工具，允许用户使用自己的API密钥在本地运行研究工作流。 |
| 6 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 52.5k | 103 | CLI-Anything 旨在让所有软件具备 AI 代理原生能力。通过 CLI-Hub 注册中心，用户可浏览、安装和管理社区构建的命令行工具，使 Claude、Cursor 等 AI 代理能够通过命令行与各类桌面软件（如 CAD、Obsidian）交互，实现自动化操作。 |
| 7 | [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | Independent Auditing of AI Agents. Run by human or... | Python | 27.4k | 2.1k | iFixAi 是一个用于 AI 代理独立审计的 Python 项目。它解决了现有工具仅关注技术指标而忽略业务 KPI 的问题。通过结合 AI 红队测试与运营保障，它能在 120 秒内验证代理是否按预期执行任务，帮助用户在问题爆发前发现错误和盲点。 |
| 8 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Fully autonomous AI Agents system capable of perfo... | Go | 29.5k | 1.0k | 这是一个基于 Go 语言开发的完全自主 AI 代理系统，专注于执行复杂的渗透测试任务。项目包含前后端及 Docker 部署配置，支持可观测性追踪，旨在自动化安全测试流程。 |
| 9 | [rust-lang/rust](https://github.com/rust-lang/rust) | Empowering everyone to build reliable and efficien... | Rust | 120.0k | 207 | 这是一个用于构建可靠且高效软件的编程语言项目，包含编译器、标准库和文档。Rust 以其高性能、内存安全和丰富的类型系统著称，能有效减少运行时错误。项目提供了强大的工具链，包括 Cargo 包管理器、rustfmt 格式化工具、Clippy linter 和 rust-analyzer 编辑器支持，极大地提升了开发者的生产力。 |
| 10 | [xtool-org/xtool](https://github.com/xtool-org/xtool) | Cross-platform Xcode replacement. Build and deploy... | Swift | 10.8k | 1.5k | xtool 是一个跨平台的 Xcode 替代品，支持在 Linux、Windows 和 macOS 上使用 SwiftPM 构建 iOS 应用。它提供命令行工具用于构建、签名、安装及管理 Apple Developer Services，并包含 XKit 库供开发者在其应用中直接交互。 |
| 11 | [ntdevlabs/tiny11builder](https://github.com/ntdevlabs/tiny11builder) | WinUI app for building smaller, customized Windows... | C# | 20.2k | 139 | 这是一个基于 WinUI 的 C# 应用，用于构建精简版 Windows 11 ISO。支持下载官方镜像或自定义，提供 Tiny11、Core 和 Custom 三种模式移除冗余组件。具备 Turbo 加速和断点续传功能。注意 Core 模式不可更新，自定义移除需谨慎。 |
| 12 | [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | Ghidra is a software reverse engineering (SRE) fra... | Java | 87.5k | 1.0k | Ghidra 是由美国国家安全局（NSA）开发的开源软件逆向工程（SRE）框架。它提供反汇编、反编译、汇编和脚本编写等高级分析工具，支持 Windows、macOS 和 Linux。该框架旨在解决复杂 SRE 任务中的扩展和团队协作问题，支持通过 Java 或 Python 开发自定义扩展，广泛用于恶意代码分析和漏洞研究。 |

[查看完整数据](api/github/2026-10-14.json)
<!-- END GITHUB TRENDING -->




