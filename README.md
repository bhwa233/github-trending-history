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

**最后更新**: 2026-06-08 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 34.5k | 3.6k | 这是一个基于 Python 的 AI Agent 技能，跨 Reddit、X、YouTube、HN、Polymarket 和全网搜索特定主题。它通过分析真实用户互动（点赞、投票、金钱）来评分，并由 AI 代理综合生成基于事实的摘要。它旨在提供超越传统搜索引擎的、由真实人群驱动的信息聚合。 |
| 2 | [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | A vector index built on TurboQuant, written in Rus... | Python | 8.8k | 1.7k | turbovec 是一个基于 Rust 和 Python 绑定的高性能向量索引库，利用 Google Research 的 TurboQuant 算法实现极致压缩（10M文档仅4GB）和极速检索。它支持在线增量索引、搜索时过滤以及本地化部署，特别适合对隐私、内存或延迟敏感的 RAG 场景。 |
| 3 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 12.4k | 461 | 该项目为 Google 产品和技术提供 Agent Skills，涵盖 Google Cloud、Gemini API 等核心服务。包含 AlloyDB、BigQuery、Cloud Run 等基础技能及入网、认证等配方，旨在帮助开发者快速掌握 Google 云服务，目前处于积极开发中。 |
| 4 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 13.6k | 651 | Tolaria 是一款跨平台桌面应用，专为管理 Markdown 知识库设计。它采用文件优先和 Git 优先原则，支持离线使用和版本控制，内置 AI 集成，适配 Claude、Codex 等工具，专为键盘操作设计。 |
| 5 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 24.1k | 679 | Agent Reach 是一个 Python CLI 工具，旨在赋予 AI Agent 浏览整个互联网的能力。它通过整合开源工具（如 yt-dlp、twitter-cli 等）解决了 Twitter、Reddit、YouTube、Bilibili、小红书等平台 API 付费、封锁或登录难的问题。该工具完全免费，支持本地 Cookie 存储，兼容所有命令行 Agent（如 Claude Code、Cursor），让 Agent 能轻松获取 |
| 6 | [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) | Agentic AI Infrastructure for magnifying HUMAN cap... | TypeScript | 15.4k | 62 | PAI 是一个旨在放大人类能力的个人 AI 基础设施，被定位为“生活操作系统”。它包含 Pulse 仪表盘、DA 数字助手及 Algorithm 算法，通过 ISA（理想状态）和技能帮助用户管理目标与隐私。项目强调“人类第一，技术第二”，旨在通过 AI 辅助个人实现理想状态。 |
| 7 | [santifer/career-ops](https://github.com/santifer/career-ops) | AI-powered job search system built on Claude Code.... | JavaScript | 50.5k | 308 | 这是一个基于 Claude Code 的 AI 驱动求职系统。它利用代理自动扫描职位门户，通过结构化评分评估匹配度，并生成针对特定职位的 ATS 优化简历。支持批量处理与个性化定制，帮助求职者高效过滤低质量职位，专注于高价值机会。 |
| 8 | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | PM Skills Marketplace: 100+ agentic skills, comman... | - | 12.6k | 164 | 这是一个面向产品经理的 AI 技能市场，旨在通过 Claude Code 和 Cowork 提供结构化的产品决策支持。它包含 100+ 个技能、命令和插件，将成熟的产品管理框架（如发现、战略、执行）编码为可复用的工作流，帮助用户从想法到发布的全流程做出更严谨的决策。 |
| 9 | [openai/plugins](https://github.com/openai/plugins) | OpenAI Plugins... | JavaScript | 2.3k | 296 | 这是一个包含 Codex 插件示例的精选集合，展示了如何构建与 OpenAI 集成的插件。项目涵盖了从设计工具（Figma）、知识管理（Notion）到应用开发（iOS、macOS、Web、Expo）以及部署（Netlify）等多种场景。每个插件遵循特定的目录结构和清单文件规范，包含技能、代理和 MCP 等组件，旨在为开发者提供丰富的参考实现。 |
| 10 | [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | Find the local LLM that actually runs and performs... | Python | 3.4k | 143 | 该项目是一个 Python 命令行工具，旨在帮助用户在本地硬件上找到性能最佳的 LLM。它通过自动检测硬件配置，基于真实基准测试而非参数量，从 HuggingFace 排名推荐模型，支持多种安装方式及模拟 GPU 测试。 |
| 11 | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | The best-benchmarked open-source AI memory system.... | Python | 54.9k | 170 | MemPalace 是一个本地优先的开源 AI 记忆系统，逐字存储对话历史并利用语义搜索检索。它采用结构化索引（宫殿概念）实现精准搜索，支持可插拔后端（默认 ChromaDB），在 LongMemEval 上达到 96.6% 的 R@5 准确率，确保数据隐私且无需 API 调用。 |
| 12 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 42.3k | 1.3k | 这是一个用于计算机视觉的 Python 工具包，提供从数据加载到实时区域计数的构建模块。它支持模型无关性，可与多种主流深度学习库无缝集成，并提供高度可定制的标注器和数据集处理工具，帮助开发者专注于应用构建。 |
| 13 | [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | The Frontend Stack for Agents & Generative UI. Rea... | TypeScript | 34.1k | 378 | CopilotKit 是一个全栈 SDK，用于构建代理应用和生成式 UI。它支持 React、Angular、Vue、React Native 及 Slack 等多平台。核心功能包括聊天 UI、动态生成 UI、共享状态和人机协同。基于 AG-UI 协议，它允许同一代理逻辑跨不同前端框架运行，实现统一的智能体验。 |
| 14 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 73.0k | 592 | 该项目是一个开源的中国中小学及大学数学教材PDF资源库，旨在促进教育公平，帮助海外华人获取教育资源。由于GitHub文件大小限制，大文件被拆分，项目提供了合并工具供用户下载使用。 |
| 15 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 35.8k | 312 | 这是一个面向 Claude Code 的视觉化、示例驱动指南。项目通过 Mermaid 图表和即拿即用的生产模板，帮助开发者从基础概念进阶到高级代理编排，解决官方文档缺乏组合示例和学习路径的问题。 |
| 16 | [aaif-goose/goose](https://github.com/aaif-goose/goose) | an open source, extensible AI agent that goes beyo... | Rust | 48.1k | 699 | goose 是一个基于 Rust 开发的通用 AI 代理，支持桌面应用、CLI 和 API。它不仅能进行代码建议，还能执行、编辑和测试任务。支持 15+ 种 LLM 提供商及 70+ 扩展，适用于研究、写作、自动化等多种场景，现由 Linux Foundation 的 Agentic AI Foundation 维护。 |

[查看完整数据](api/github/2026-06-08.json)
<!-- END GITHUB TRENDING -->




