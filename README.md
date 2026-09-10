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

**最后更新**: 2026-09-09 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | A skill to stop your coding agent from burying the... | Python | 34.6k | 4.7k | 这是一个专为 ADHD 用户设计的 AI 编码助手技能插件。它通过强制执行严格的输出规则（如以行动开头、步骤编号、抑制废话等），防止 AI 助手给出冗长、难以阅读的回答，确保答案清晰直接，提升编码效率。 |
| 2 | [Tencent/teamai-cli](https://github.com/Tencent/teamai-cli) | Make Every Team AI Native... | TypeScript | 3.0k | 556 | 这是一个 TypeScript CLI 工具，旨在让团队 AI 原生化。它通过 Git 仓库统一管理团队的技能、规则、MCP 和知识库，支持 Claude、Cursor 等多种 AI 代理。项目包含团队执行、上下文和改进三个核心层，帮助团队标准化 AI 行为，实现配置自动同步。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 284.0k | 688 | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过一套可组合的技能和初始指令，引导代理从需求分析、规范拆解、计划制定到自主开发的全流程。系统强调 TDD、YAGNI 和 DRY 原则，旨在让 AI 编码代理具备自主完成复杂工程任务的能力。 |
| 4 | [pascalorg/editor](https://github.com/pascalorg/editor) | Open-source 3D architectural editor with a local C... | TypeScript | 22.9k | 107 | 这是一个基于 React Three Fiber 和 WebGPU 的开源本地优先 3D 建筑编辑器。支持通过 CLI 或浏览器运行，具备持久化存储和 MCP 工具，专为人类和 AI 代理提供实用的 3D 建模工作流。 |
| 5 | [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | A library of agent skills for CAD, CAE and CAM... | Python | 15.0k | 124 | 这是一个面向 CAD、CAE 和 CAM 的代理技能库，提供从自然语言生成 3D 模型（STEP/STL）、创建 2D 绘图、查找标准零件、检查打印性（DfAM）、生成 G-code 以及管理机器人仿真文件（URDF/SDF）等全流程自动化能力。 |
| 6 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 38 editorial diagram types for Claude Code, Codex,... | HTML | 36.6k | 2.2k | 该项目为 Claude Code 等工具提供 39 种高质量的编辑类图表库，采用自包含的 HTML 和 SVG 实现。它支持多种布局语法（如 Sankey、UML 等），具备极简主义和高密度设计风格，并能将其他工具源文件转换为高质量图表。 |
| 7 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 104.0k | 367 | 这是一个基于多智能体 LLM 的金融交易框架。集成了研究、交易和投资组合管理功能，支持 GPT-5.x、Claude 等多种大模型及 FRED、Polymarket 数据源。具备回测、情绪分析、价格锚定及持久化检查点恢复能力，旨在通过 AI 智能体实现自动化金融决策。 |
| 8 | [liquidslr/system-design-notes](https://github.com/liquidslr/system-design-notes) | Notes of the book System Desgin Interview - An Ins... | - | 18.0k | 1.4k | 这是一个关于系统设计面试的笔记项目，基于《System Design Interview - An Insider's Guide》一书。内容涵盖了系统设计的关键概念、架构模式及常见面试题的解决方案，旨在帮助开发者系统性地掌握大型系统设计的核心知识，为技术面试做准备。 |
| 9 | [openai/plugins](https://github.com/openai/plugins) | OpenAI Plugins... | JavaScript | 6.2k | 498 | 这是一个 OpenAI Codex 插件的精选集合。项目提供了插件的标准结构（如 plugin.json）及丰富的示例，涵盖 Figma 设计、Notion 知识管理、iOS/macOS/Web 应用开发、Expo 以及 Netlify 等场景。旨在帮助开发者快速构建和集成 Codex 插件。 |
| 10 | [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，530+ 个案例逆... | JavaScript | 30.0k | 705 | 这是一个 GPT-Image2 工业级提示词引擎与模板库，包含 500+ 逆向工程案例和 20+ 模板。项目支持 GPT Image 2.5 Spotlight（Sunburst 和 Flare），提供 4 个真实复刻案例展示。用户可通过可视化网站浏览、筛选并测试生成效果，还包含社区交流群和持续更新的 Skills，旨在帮助用户高效生成高质量图像。 |
| 11 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 53.7k | 343 | 这是一个全面的 AI 工程自学课程，旨在弥合学生使用 AI 工具与专业准备之间的差距。项目包含 523 节课、20 个阶段和约 342 小时的内容，涵盖 Python、TypeScript、Rust 和 Julia。核心特色是“动手实践”，每节课都会产出可重用的工件（如提示词、代理、MCP 服务器），支持从数学基础到 LLM、代理工程及 MCP 等多种学习路径。 |
| 12 | [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | Local-first AI coding agent desktop: Electron + Ru... | TypeScript | 1.7k | 417 | PI-Desktop 是一个本地优先的 AI 编码代理桌面工作区，基于 Electron 和 Rust 构建。它允许用户自带模型，在本地项目中运行代理，并提供桌面级工作区体验。支持插件扩展和权限审查，确保用户对 AI 操作保持控制，无需强制账号或编辑器锁定。 |
| 13 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 255.2k | 1.1k | ECC 是一个智能体运行时性能优化系统，旨在为 Claude Code、Cursor 等 AI 编码助手提供技能、记忆、安全和研究优先的开发能力。它通过规划、测试、审查和记忆机制，将 AI 转变为具备工程素养的智能体，支持 MIT 开源协议。 |

[查看完整数据](api/github/2026-09-09.json)
<!-- END GITHUB TRENDING -->




