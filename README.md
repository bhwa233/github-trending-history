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

**最后更新**: 2026-05-31 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 74.1k | 1.9k | 这是一个基于 Python 的 AI 视频生成工具，采用 MVC 架构，支持一键生成高清短视频。它集成了多种大模型（如 DeepSeek、OpenAI）和语音合成技术，能自动生成文案、字幕、背景音乐并合成视频。支持竖屏与横屏，具备批量生成功能，适合内容创作者快速制作视频。 |
| 2 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 134.9k | 2.8k | MarkItDown 是微软推出的轻量级 Python 工具，旨在将 PDF、Office、图像、音频等多种文件转换为 Markdown。它专注于保留文档结构（如标题、列表、表格），专为 LLM 文本分析管道设计，输出结构化数据以供机器消费。 |
| 3 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ An adaptive Web Scraping framework that handle... | Python | 56.6k | 606 | Scrapling 是一个自适应的 Web 抓取框架，支持从单次请求到大规模爬取。它具备智能解析功能，能自动适应网站结构变化。内置反检测机制，可绕过 Cloudflare Turnstile 等反爬虫系统。支持并发爬取、代理轮换、暂停恢复等功能，且代码简洁，适合各种规模的爬虫需求。 |
| 4 | [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | Hermes WebUI: The best way to use Hermes Agent fro... | Python | 9.9k | 357 | Hermes WebUI 是一个轻量级、暗色主题的 Web 界面，用于访问 Hermes Agent。它实现了与 CLI 完全一致的功能，无需构建步骤。支持持久记忆、自托管调度，可通过 SSH 隧道安全访问，适合远程管理和使用 AI 代理。 |
| 5 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Compound Engineering plugin for Claude Co... | TypeScript | 18.7k | 251 | 该插件旨在通过 'Compound Engineering'（复合工程）理念，利用 AI 技能（如 /ce-strategy、/ce-brainstorm 等）优化开发流程。它强调 80% 的计划与审查，20% 的执行，通过编码知识减少技术债务，使后续工程工作更轻松。适用于 Claude Code、Codex、Cursor 等开发环境。 |
| 6 | [github/docs](https://github.com/github/docs) | The open-source repo for docs.github.com... | TypeScript | 19.7k | 27 | GitHub 官方文档的开源仓库，使用 TypeScript 构建。支持外部贡献者编辑 Markdown 内容文件，并与内部仓库同步。项目采用双重许可（CC BY 4.0 和 MIT），旨在为用户提供准确的技术文档并促进社区协作。 |
| 7 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 23.5k | 635 | VoxCPM2 是一个基于扩散自回归架构的 tokenizer-free TTS 系统，支持 30 种语言。它具备声音设计、可控克隆和终极克隆功能，能输出 48kHz 高质量音频，支持实时流式传输，且完全开源。 |
| 8 | [revfactory/harness](https://github.com/revfactory/harness) | A meta-skill that designs domain-specific agent te... | HTML | 4.6k | 323 | Harness 是一个为 Claude Code 设计的团队架构工厂。它利用 Claude Code 的代理团队系统，将域描述转化为由 6 种预定义模式（如流水线、专家池等）定义的代理团队和技能。它位于 L3 Meta-Factory 层，专注于生成团队架构而非运行时配置。 |
| 9 | [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | A straightforward method for training your LLM, fr... | Jupyter Notebook | 2.9k | 626 | 该项目基于 PyTorch 和《Attention is All You Need》论文，从头实现 Transformer 模型。它提供了从数据准备、模型构建（MLP、多头注意力、Transformer 块）到训练和文本生成的完整流程，使用 Pile 数据集，适合在单 GPU 上训练数十亿参数的 LLM。 |
| 10 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 23.3k | 264 | Supermemory 是一个极速、可扩展的 AI 记忆引擎，旨在解决 AI 记忆丢失问题。它通过自动提取事实、构建用户画像和混合搜索，提供完整的上下文管理。支持多模态文件处理及 Google Drive、Notion 等连接器，开发者可通过 API 无需配置向量库即可为应用添加持久记忆。 |
| 11 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 27.7k | 374 | Project N.O.M.A.D. 是一个基于 TypeScript 的自包含离线生存计算机。它通过 Docker 容器化工具和资源，提供管理 UI（Command Center）和 API，旨在任何时间、任何地点为用户提供关键工具、知识和 AI 支持，确保数据永不离线。 |
| 12 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Python | 128.9k | 489 | Claude Code 是一个运行在终端中的智能编码工具，通过自然语言命令理解代码库、执行例行任务、解释复杂代码并处理 Git 工作流，旨在帮助开发者提升编码效率。 |
| 13 | [nicobailon/pi-subagents](https://github.com/nicobailon/pi-subagents) | Pi extension for async subagent delegation with tr... | TypeScript | 1.8k | 69 | 这是一个 Pi 的扩展插件，允许 Pi 将任务委托给专注的子代理。它支持代码审查、并行审计、后台作业等功能。用户无需配置，只需用自然语言请求即可。通过创建具有特定任务的专注子会话，Pi 能够更高效地处理复杂工作流，如代码检查和任务执行。 |
| 14 | [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios) | A list of developer portfolios for your inspiratio... | Python | 23.4k | 73 | 这是一个由 Emma Bostian 维护的 GitHub 仓库，旨在收集并展示 1700 多个开发者的个人作品集网站。它按字母顺序排列，旨在为开发者提供寻找灵感、展示作品或提交 PR 的平台，是寻找优秀前端或全栈项目展示的绝佳资源。 |
| 15 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 509.4k | 1.2k | 这是一个旨在通过从零开始构建经典技术来掌握编程的项目。它提供了涵盖操作系统、编程语言、数据库、3D 渲染器、AI 模型等领域的详细教程。通过实践这些项目，开发者可以深入理解底层原理，提升工程能力。 |

[查看完整数据](api/github/2026-05-31.json)
<!-- END GITHUB TRENDING -->




