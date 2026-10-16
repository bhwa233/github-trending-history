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

**最后更新**: 2026-10-15 | **成功**: 11 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 270.4k | 32.3k | REA 是一个基于 TypeScript 的逆向工程工具，允许 AI 代理通过 MCP 协议连接到 Ghidra、IDA 等分析工具。它支持对原生二进制文件、JavaScript、Electron 应用和 .NET 程序集进行本地静态分析。用户无需源代码即可理解应用功能、获取证据并构建类似功能，适用于 Claude Code、Cursor 等多种 AI 代理环境。 |
| 2 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 39.1k | 307 | Anthropic 官方维护的 Claude Code 插件市场，包含内部及第三方高质量插件。提供标准化的插件结构规范，支持通过命令行或界面安装。旨在为用户提供安全、可信赖的 AI 辅助工具扩展库。 |
| 3 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 50.5k | 1.1k | 这是一个将任何 AI 代理转化为 AI 科学家的大型技能库。包含 177 个经过验证的科学技能和 100+ 数据库，覆盖生物、化学、医学等领域。支持 Cursor、Claude Code 等多种环境，遵循开放 Agent Skills 标准。还提供本地运行的 K-Dense BYOK 工具，保护数据隐私。 |
| 4 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick. Vir... | Go | 112.6k | 433 | 处理失败 |
| 5 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 69.1k | 3.0k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，支持语音克隆、语音设计、视频配音、听写和转录等功能，覆盖 646 种语言。它提供本地 API 和 MCP 支持，允许用户在本地硬件上运行，无需依赖远程服务，适合需要隐私保护和本地部署的语音处理场景。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 299.9k | 582 | Superpowers 是一个面向编码代理的软件开发框架和技能系统。它通过询问用户目标、分解规范、制定实施计划（强调 TDD、YAGNI、DRY），并利用子代理进行自主开发，实现高效的自动化编程。支持多种主流 AI 编码工具。 |
| 7 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent harness. Deploy intelligent ... | TypeScript | 75.1k | 147 | Ruflo 是一个专为 Claude Code 和 Codex 设计的智能代理元框架。它通过提供工具、记忆、循环和控制，赋予代理协作能力。支持多代理群集、自适应记忆、自学习和联邦通信，能够部署智能多玩家群集，协调自主工作流，并构建对话式 AI 系统。 |
| 8 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 29.8k | 904 | 这是一个 TypeScript 项目，旨在优化 AI 编码代理的上下文窗口。它通过沙箱化工具输出（减少 98%）、使用 SQLite 和 FTS5 持久化会话记忆，以及强制“代码思维”模式（让 LLM 编写脚本而非读取数据）来解决上下文溢出问题，支持 17 个平台。 |
| 9 | [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | Ghidra is a software reverse engineering (SRE) fra... | Java | 88.8k | 1.4k | Ghidra 是美国国家安全局（NSA）开发的软件逆向工程框架，支持反汇编、反编译、绘图及脚本编写。它运行在 Windows、macOS 和 Linux 上，支持多种处理器指令集和可执行格式，具有高度的可扩展性，用于分析恶意代码和发现系统漏洞。 |
| 10 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 280.4k | 1.0k | ECC 是一个 Agent harness 性能优化系统，旨在为 Claude Code、Codex 等 AI 编码助手提供协调的工程系统。它通过“计划-测试-实施-审查-验证-记忆-改进”的闭环流程，优化上下文窗口并持久化记忆。项目提供 71 个 agents 和 311 个 skills，支持多种主流 AI 编码工具，帮助 AI 更高效、安全地完成代码编写与维护。 |
| 11 | [lightseekorg/tokenspeed](https://github.com/lightseekorg/tokenspeed) | TokenSpeed is a speed-of-light LLM inference engin... | Python | 2.5k | 30 | TokenSpeed 是一个专为代理工作负载设计的极速 LLM 推理引擎，旨在提供 TensorRT-LLM 级别的性能和 vLLM 级别的易用性。其核心架构创新性地将控制平面（C++ 有限状态机）与执行平面（Python）分离，利用类型系统确保资源安全。此外，它采用可插拔内核系统，支持异构加速器，是 PyTorch 生态系统中的重要组件。 |
| 12 | [xerj-org/xerj](https://github.com/xerj-org/xerj) | XERJ is the new way for AI to search data. Its aut... | Rust | 5.7k | 715 | XERJ 是一个基于 Rust 的本地 AI 搜索工具，通过自动索引代码、文档和日志，为 AI 代理提供高效的数据检索能力。它比 grep 节省 40 倍 token，支持 RAG 和安全审计。主要应用于参考编码，帮助 AI 重用开源解决方案，显著降低 token 消耗并提升开发效率。 |

[查看完整数据](api/github/2026-10-15.json)
<!-- END GITHUB TRENDING -->




