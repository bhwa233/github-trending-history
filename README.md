# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2026-02-04 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 22.4k | 2.6k | Claude-Mem是为Claude Code设计的持久化记忆压缩系统，通过自动捕获编码行为、生成语义摘要并跨会话注入上下文，实现开发知识的连续性维护。支持隐私控制、多语言界面和实时内存可视化，提升长期项目开发效率。 |
| 2 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 3.6k | 730 | OpenAI Skills 项目为 Codex 提供可重复使用的技能模块，包含指令、脚本和资源，支持通过命令行工具安装和管理。涵盖基础技能、实验性技能及第三方集成，促进 AI 代理任务自动化。 |
| 3 | [disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery) | Master Claude Code Hooks... | Python | 2.3k | 47 | 该项目旨在帮助开发者掌握Claude Code钩子技术，实现对AI行为的确定性或非确定性控制，包含子代理、元代理及团队验证等高级功能演示。 |
| 4 | [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | ChatDev 2.0: Dev All through LLM-powered Multi-Age... | Python | 30.0k | 226 | ChatDev 2.0 是基于LLM的零代码多智能体协作平台，支持用户通过配置构建定制化多智能体系统。无需编程即可实现数据可视化、3D生成、深度研究等复杂场景，提供自动化工作流编排和智能体协作能力。 |
| 5 | [ankitects/anki](https://github.com/ankitects/anki) | Anki is a smart spaced repetition flashcard progra... | Rust | 26.1k | 28 | Anki是基于间隔重复算法的闪卡程序，通过智能复习计划提升记忆效率。使用Rust开发，提供跨平台桌面应用，支持自定义卡片和多语言学习。 |
| 6 | [open-telemetry/opentelemetry-collector-contrib](https://github.com/open-telemetry/opentelemetry-collector-contrib) | Contrib repository for the OpenTelemetry Collector... | Go | 4.3k | 3 | OpenTelemetry Collector Contrib 是 OpenTelemetry Collector 的扩展组件仓库，提供核心仓库外的可扩展组件，支持多种可观测性数据（如追踪、指标、日志）的收集与处理，允许用户通过自定义分发版灵活集成所需功能。 |
| 7 | [Canner/WrenAI](https://github.com/Canner/WrenAI) | ⚡️ GenBI (Generative BI) queries any database in n... | TypeScript | 13.9k | 84 | WrenAI 是一个开源的生成式商业智能（GenBI）工具，支持通过自然语言查询数据库，生成精准SQL、图表及AI驱动的业务分析报告，集成多种数据库和大语言模型，提升数据交互效率。 |
| 8 | [pedramamini/Maestro](https://github.com/pedramamini/Maestro) | Agent Orchestration Command Center... | TypeScript | 1.6k | 186 | Maestro是一款跨平台AI代理协调工具，支持多AI框架并行任务处理。提供Git工作树隔离、自动运行剧本、群组聊天协作等功能，适用于需要高效管理多个AI代理和并行开发项目的场景。 |
| 9 | [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | Node Version Manager - POSIX-compliant bash script... | Shell | 91.2k | 34 | nvm-sh/nvm 是一个POSIX兼容的Node.js版本管理工具，通过Shell脚本实现多版本Node.js的安装与切换，支持命令行快速管理不同项目所需的Node.js环境。 |
| 10 | [microsoft/qlib](https://github.com/microsoft/qlib) | Qlib is an AI-oriented Quant investment platform t... | Python | 36.5k | 82 | Qlib是微软开源的AI量化投资平台，支持监督学习、市场建模与强化学习，集成RD-Agent实现因子挖掘、模型优化与自动化研发，覆盖从研究到生产的量化投资全流程。 |
| 11 | [LadybirdBrowser/ladybird](https://github.com/LadybirdBrowser/ladybird) | Truly independent web browser... | C++ | 58.3k | 74 | Ladybird是一款基于Web标准的独立浏览器项目，采用多进程架构提升安全性，核心组件继承自SerenityOS，包含渲染引擎、JS引擎、WebAssembly支持等，目前处于预Alpha阶段，面向开发者提供现代Web浏览功能。 |
| 12 | [likec4/likec4](https://github.com/likec4/likec4) | Visualize, collaborate, and evolve the software ar... | TypeScript | 1.4k | 29 | LikeC4是基于TypeScript的架构建模工具，支持从代码生成实时更新的架构图。用户可自定义符号、元素类型和层级结构，通过CLI工具预览协作，适用于动态维护软件架构文档的场景。 |

[查看完整数据](api/github/2026-02-04.json)
<!-- END GITHUB TRENDING -->








