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

**最后更新**: 2026-05-23 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 21.5k | 2.3k | 这是一个 Claude Code 插件，旨在将任何代码库、知识库或文档转换为交互式知识图谱。它通过多智能体管道分析项目，构建文件、函数、类和依赖关系的可视化图谱，帮助开发者快速理解大型代码库结构。 |
| 2 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 26.4k | 2.2k | Anthropic 官方维护的 Claude Code 插件精选目录，包含内部及第三方高质量插件。支持通过 Claude Code 插件系统直接安装，遵循标准插件结构（含元数据、MCP 配置等）。开发者可参考示例或提交新插件，但需注意安装前需信任插件内容。 |
| 3 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code, ... | TypeScript | 19.4k | 2.5k | 这是一个 TypeScript 项目，为 Claude Code、Cursor 等 AI 编程助手提供预索引的代码知识图谱。它通过构建符号关系和调用图，让 AI 代理直接查询数据库而非扫描文件，从而显著降低 Token 消耗、工具调用次数和成本，提升代码理解速度。 |
| 4 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 13.7k | 1.5k | 这是一个涵盖 435 课、20 个阶段的 AI 工程实战课程。课程从底层数学推导算法，涵盖 Python、TypeScript、Rust 和 Julia，强调从零构建可重用工件（如代理、MCP 服务器）。旨在通过系统化的学习路径，帮助开发者掌握 AI 核心原理，具备专业工程能力。 |
| 5 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | FinceptTerminal is a modern finance application of... | Python | 23.1k | 545 | FinceptTerminal 是一款基于 C++20 和 Qt6 的专业桌面金融终端，集成 Python 进行高级分析。它提供多资产分析、AI 代理、实时交易及 100+ 数据源连接，支持量化建模、算法交易和全球情报，旨在为用户提供数据驱动的投资决策环境。 |
| 6 | [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 149.6k | 3.5k | 这是一个基于 Andrej Karpathy 观察的 Claude Code 指南文件。旨在解决 LLM 编码中的常见陷阱，如错误假设、过度复杂化和破坏性更改。通过四个核心原则——思考前编码、简单优先、外科手术式更改和目标驱动执行，帮助 Claude 生成更简洁、可靠且符合预期的代码。 |
| 7 | [dotnet/skills](https://github.com/dotnet/skills) | Repository for skills to assist AI coding agents w... | C# | 2.7k | 266 | 该项目是 .NET 官方维护的技能库，专为 AI 编码代理设计。包含 dotnet、数据访问、性能诊断、构建优化、包管理、项目迁移、MAUI、AI/ML 集成、模板引擎及测试等 12 个核心插件，覆盖 .NET 开发全流程，支持通过 Copilot CLI 或 Claude Code 安装使用。 |
| 8 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 41.3k | 435 | 这是一个基于 TypeScript 的 MCP 服务器，旨在让 AI 编码代理（如 Claude、Cursor）能够控制并调试 Chrome 浏览器。它利用 Puppeteer 实现自动化操作，提供性能分析、网络请求检查、截图和日志记录等功能，帮助 AI 进行可靠的自动化测试和深度调试。 |
| 9 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 754 structured cybersecurity skills for AI agents ... | Python | 7.4k | 281 | 这是一个为 AI 代理提供高级网络安全技能的开源库，包含 754 个结构化技能，覆盖 26 个安全领域。它将每个技能映射到 MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND 和 NIST AI RMF 五大框架，确保合规性和全面性。项目兼容 Claude Code、Copilot 等多种 AI 平台，旨在帮助 AI 代理像资深分析师一样进行安全调查。 |
| 10 | [presenton/presenton](https://github.com/presenton/presenton) | Open-Source AI Presentation Generator and API (Gam... | TypeScript | 6.3k | 241 | Presenton 是一个开源的 AI 演示文稿生成器，支持自托管和桌面应用。它兼容多种 AI 模型（如 OpenAI、Ollama），允许用户完全控制数据和模型。项目提供 API 和 PPTX 导出功能，支持自定义模板，旨在作为 Gamma、Beautiful AI 等商业 SaaS 的替代方案，强调隐私和灵活性。 |
| 11 | [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn codi... | TypeScript | 31.9k | 410 | Multica 是一个开源的托管代理平台，旨在将编码 AI 代理转化为真正的团队成员。它支持任务分配、进度跟踪和技能积累，允许代理自主工作并参与对话。该平台支持多种 AI 工具，专为人类与 AI 协作团队设计，提供自托管方案。 |
| 12 | [trimstray/the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge) | A collection of inspiring lists, manuals, cheatshe... | - | 223.8k | 628 | 这是一个汇集了各类灵感列表、技术手册、速查表、黑客技巧及CLI/Web工具的综合性知识库。它旨在为开发者提供丰富的学习资源和参考资料，涵盖软件开发生命周期的多个方面。 |
| 13 | [odoo/odoo](https://github.com/odoo/odoo) | Odoo. Open Source Apps To Grow Your Business.... | Python | 51.5k | 386 | Odoo 是一套基于 Web 的开源商业应用套件，包含 CRM、网站构建、电子商务、仓库管理、会计、POS 等多种功能。它既可以作为独立应用使用，也可以集成以提供全功能的开源 ERP 解决方案，适用于企业业务增长。 |
| 14 | [NVlabs/LongLive](https://github.com/NVlabs/LongLive) | LongLive 2.0: Infra - Long Video Gen... | Python | 1.8k | 94 | LongLive 2.0 是 NVIDIA 实验室推出的长视频生成 NVFP4 并行基础设施。支持 AR 训练与多镜头推理，利用 NVFP4 和序列并行技术实现高达 45.7 FPS 的实时生成，解决了长序列处理难题。 |
| 15 | [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | A feature-rich command-line audio/video downloader... | Python | 164.9k | 759 | yt-dlp 是一个功能丰富的命令行音频/视频下载器，支持数千个网站。作为 youtube-dl 的活跃分支，它提供格式选择、元数据修改、插件支持及多平台安装方式。 |
| 16 | [janestreet/magic-trace](https://github.com/janestreet/magic-trace) | magic-trace collects and displays high-resolution ... | OCaml | 5.8k | 68 | magic-trace 是一个用于收集和显示进程高分辨率跟踪信息的 OCaml 工具。它利用 Intel Processor Trace 技术，以约 40ns 的分辨率记录控制流，提供约 10ms 的回溯。该工具具有低开销（2%-10%）且无需修改应用程序代码，类似于 perf 但提供环形缓冲区快照，适用于性能分析、调试和崩溃后分析。 |

[查看完整数据](api/github/2026-05-23.json)
<!-- END GITHUB TRENDING -->




