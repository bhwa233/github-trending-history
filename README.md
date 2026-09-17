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

**最后更新**: 2026-09-16 | **成功**: 19 | **失败**: 2

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Fast, efficient, battle-tested at Alibaba's scale.... | Go | 31.9k | 3.2k | 这是一个由阿里巴巴开源的 AI 驱动代码审查 CLI 工具，基于 Go 开发。它采用确定性管道与 LLM Agent 混合架构，能精准生成逐行评论。内置多语言规则集，支持 OCR 扫描和上下文搜索，在保证高精度的同时大幅降低 Token 消耗，专为大规模生产环境设计。 |
| 2 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 7.3k | 927 | 这是一个由 Cloudflare 开发的 JavaScript 编码代理技能，旨在将代理转化为安全审计员。它通过六个阶段（侦察、狩猎、验证等）执行深度漏洞挖掘，支持独立验证和机器可读输出。该工具最初是 Cloudflare 漏洞发现工具的种子，现作为单仓库起点，帮助团队构建全面的安全审计体系。 |
| 3 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | Run frontier MoE models on hardware you already ow... | C | 35.0k | 1.5k | Colibri 是一个纯 C 语言编写的轻量级推理引擎，旨在让用户在普通硬件上运行大规模 MoE 模型。它通过将存储、内存和显存视为单一层级，实现专家从磁盘流式加载，支持 744B 到 2.8T 参数的模型。该项目专注于跨软硬件边界的推理性能优化，旨在降低大模型运行门槛和成本。 |
| 4 | [abue-ammar/tinycast](https://github.com/abue-ammar/tinycast) | Tinycast — a tiny, fully native macOS launcher, ho... | Swift | 5.6k | 1.2k | Tinycast 是一款轻量级、原生的 macOS 启动器和工具箱。它支持应用启动、全局/应用级热键、剪贴板历史、计算器、快捷链接和窗口管理等。项目使用 SwiftUI 和 AppKit 开发，零第三方依赖，无 Electron，支持运行 Raycast 扩展，完全免费开源。 |
| 5 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 54.4k | 417 | Voicebox 是一个本地优先的 AI 声音工作室，开源替代 ElevenLabs 和 WisprFlow。它支持零样本声音克隆、23种语言的语音生成、全局语音输入以及与 AI 代理集成。所有模型和语音数据均在本地运行，保护隐私，提供丰富的语音处理效果和编辑功能。 |
| 6 | [Lakr233/vphone-cli](https://github.com/Lakr233/vphone-cli) | ... | Swift | 13.3k | 547 | 这是一个基于 Swift 的命令行工具，利用 Apple Virtualization.framework 和 PCC 研究基础设施，在 Apple Silicon Mac 上启动虚拟 iPhone。它支持自动化流程（下载、打补丁、恢复、安装 CFW），并提供克隆、导出、导入等管理功能，方便在 Mac 上运行 iOS 虚拟机。 |
| 7 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 24.3k | 110 | 该项目为 Claude Cowork 和 Claude Code 提供开源插件，旨在将 Claude 转变为特定角色的专家。包含生产力、销售等 11 个插件，集成了 Slack、Notion 等工具连接器，允许用户自定义工作流程和数据源，从而提升团队协作效率与一致性。 |
| 8 | [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy) | Ever® Gauzy™ - Open Business Management Platform (... | TypeScript | 7.3k | 778 | 处理失败 |
| 9 | [ankitects/anki](https://github.com/ankitects/anki) | Anki is a smart spaced repetition flashcard progra... | Rust | 30.9k | 58 | 处理失败 |
| 10 | [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | Ghidra is a software reverse engineering (SRE) fra... | Java | 77.8k | 1.1k | NSA 开发的软件逆向工程框架，提供反汇编、反编译及脚本功能，支持多平台。旨在解决复杂 SRE 任务的扩展协作问题，用于分析恶意代码和系统漏洞。 |
| 11 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 145.5k | 165 | Claude Code 是一个运行在终端中的 AI 编码助手，基于 TypeScript 开发。它利用自然语言命令理解代码库，帮助开发者执行常规任务、解释复杂代码并处理 Git 工作流，从而提升编码效率。 |
| 12 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 50.6k | 260 | Roboflow Supervision 是一个 Python 计算机视觉工具包，旨在提供可复用的构建模块。它支持模型无关的集成，兼容 Ultralytics、Transformers 等主流库，并提供丰富的标注器用于可视化检测结果。开发者可以专注于应用逻辑，快速构建数据加载、目标检测和区域计数等应用。 |
| 13 | [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Turn your coding agents into research agents... | Rust | 4.4k | 1.0k | OpenResearch 是一个本地优先的研究工作区，旨在将 Claude Code、Codex 等编码代理转化为强大的研究代理。它支持并行探索、可重现的实验和上下文证据管理。用户可以自主运行研究循环，或使用本地/云端基础设施。它确保数据本地化，并提供跨多种环境的可移植性。 |
| 14 | [supabase/supabase](https://github.com/supabase/supabase) | The Postgres development platform. Supabase gives ... | TypeScript | 109.7k | 120 | Supabase 是一个基于 PostgreSQL 的开源后端即服务（BaaS）平台，旨在用企业级开源工具复刻 Firebase 的功能。它提供托管数据库、认证授权、自动生成 REST/GraphQL API、实时订阅、文件存储以及 AI 向量工具包，帮助开发者快速构建 Web、移动和 AI 应用。 |
| 15 | [rlaope/oh-my-hermes](https://github.com/rlaope/oh-my-hermes) | All in one plugin for Hermes Agent ⚚ the coding in... | Python | 2.6k | 80 | 这是一个为 Hermes Agent 设计的 Python 插件，旨在增强其工作流。它提供了一个专业的操作层，负责规划、研究和项目记忆，确保明确的证据边界。它将普通请求转化为清晰的能力和下一步，而不会替换核心代理。 |
| 16 | [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Open-source LLM knowledge platform: turn raw docum... | Go | 25.3k | 1.2k | WeKnora 是一个基于 Go 语言的开源 LLM 知识框架，旨在将原始文档转化为可查询的 RAG、自主推理代理和自维护 Wiki。它支持多源数据摄取、树状文件夹管理、块级编辑及跨会话长期记忆。具备企业级多租户 RBAC、多 LLM 提供商集成及 Langfuse 可观测性，适合构建智能知识库和自动化工作流。 |
| 17 | [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | claude-red is a curated library of offensive secur... | Python | 5.8k | 367 | 这是一个为 Claude AI 定制的攻击性安全技能库，包含结构化的 SKILL.md 文件，涵盖 Web 应用、身份验证、Active Directory 等领域的红队操作方法论。旨在通过上下文感知的技能加载，将 Claude 转化为专业的红队操作员，适用于授权渗透测试、漏洞赏金和研究。 |
| 18 | [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | YuE2: frontier music generation with symbolic plan... | Python | 9.4k | 332 | YuE2 是一个前沿音乐生成项目，基于 Python 实现。它通过符号规划将歌词与风格转化为可编辑的乐谱，再渲染为高质量歌曲。支持零样本翻唱和代理编辑，允许用户在渲染前白盒查看与修改。在 WildSongBench 上表现优异，与 Suno v5/v6 相当。 |
| 19 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 95.5k | 658 | 该项目为 AI 编码代理提供生产级工程技能，通过 9 个斜杠命令封装资深工程师的工作流、质量门禁和最佳实践，确保 AI 在开发全生命周期中遵循一致标准。支持基于上下文的自动技能激活。 |
| 20 | [cline/cline](https://github.com/cline/cline) | Autonomous coding agent as an SDK, IDE extension, ... | TypeScript | 68.4k | 112 | Cline 是一个开源的自主编码代理，支持 CLI、桌面应用、VS Code 和 JetBrains 插件。它具备跨项目编辑能力，能理解代码结构并自动修复错误，同时提供 SDK 允许开发者自定义工具和多代理协作。 |
| 21 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 260.3k | 1.1k | ECC 是一个面向 Claude Code、Codex、Cursor 等 AI 编码助手的代理性能优化系统。它提供协调的工程工作流（计划-测试-审查-记忆），优化上下文窗口，集成技能、记忆和安全功能，提升 AI 代理的代码编写与维护效率。 |

[查看完整数据](api/github/2026-09-16.json)
<!-- END GITHUB TRENDING -->




