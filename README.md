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

**最后更新**: 2026-09-10 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | A skill to stop your coding agent from burying the... | Python | 38.3k | 3.9k | 这是一个专为编码代理设计的 ADHD 友好技能，旨在解决 AI 回答冗长、埋没核心答案的问题。它强制 AI 遵循严格规则：以行动开头、步骤编号、无废话、提供具体时间估算，并确保输出直接可执行。适用于需要高效、清晰代码解决方案的开发场景。 |
| 2 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 24.3k | 1.8k | 这是一个基于浏览器的间谍卫星模拟器，利用真实公开数据（航班、船只、卫星等）在3D地球上进行实时可视化。支持语音控制和本地运行，模块化设计允许用户扩展数据源。曾登顶GitHub趋势榜，视觉效果酷炫且代码开源。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 284.7k | 732 | Superpowers 是一个面向编码代理的软件开发框架和方法论。它通过一套可组合的技能，引导代理在编码前先与用户确认需求，制定详细的实施计划，并采用 TDD、YAGNI 和 DRY 原则进行自主开发。它支持多种主流 AI 编码工具，旨在提升代理的自主性和代码质量。 |
| 4 | [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | Open Source AI trading agent that operates autonom... | TypeScript | 1.6k | 277 | Clodds 是一个基于 Claude 的开源 AI 交易代理，支持预测市场、加密货币现货、期货和代币发行。它支持 Solana 和 EVM 链，提供 118+ 种策略，包括鲸鱼追踪和套利。用户可以通过 21 个消息平台或 WebChat 进行自然语言交互，实现 24/7 自主交易和风险管理。 |
| 5 | [Tencent/teamai-cli](https://github.com/Tencent/teamai-cli) | Make Every Team AI Native... | TypeScript | 3.8k | 841 | TeamAI 是一个面向团队的 CLI 工具，旨在让 AI 原生化。它支持管理 Claude、Cursor 等多种 AI 代理的技能、规则和知识。通过“执行、上下文、改进”三层架构，实现团队 AI 工作流的标准化、知识共享与持续优化，无需手动同步。 |
| 6 | [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | Hundreds of models & providers. One command to fin... | Rust | 35.7k | 258 | llmfit 是一款 Rust 编写的终端工具，通过检测硬件配置（CPU、GPU、VRAM）来推荐适合的 LLM 模型。支持 GGUF、AWQ 等量化格式，提供交互式 TUI 和基准测试功能，帮助用户找到最佳运行配置。 |
| 7 | [liquidslr/system-design-notes](https://github.com/liquidslr/system-design-notes) | Notes of the book System Desgin Interview - An Ins... | - | 18.8k | 900 | 该项目是《System Design Interview - An Insider's Guide》一书的笔记集合，专注于系统设计面试的核心知识点。内容涵盖了架构设计原则、常见系统组件及面试解题思路，适合开发者系统性地学习和复习系统设计技能。 |
| 8 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 38 editorial diagram types for Claude Code, Codex,... | HTML | 37.8k | 1.3k | 为 Claude Code 等工具提供 39 种编辑类图表生成技能，支持 HTML 和 SVG，无构建步骤。具备语义系统模式、可选动画及源码转换功能。旨在生成符合品牌风格的精美图表，避免通用圆角框，支持导入 draw.io/Mermaid 等格式。 |
| 9 | [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | Prompt as Code | GPT Image 2 / 2.5 提示词与案例库，530+ 个案... | JavaScript | 30.8k | 962 | 这是一个工业级 GPT Image 2/2.5 提示词引擎与案例库，收录 530+ 案例及 20+ 工业模板。项目新增 2.5 版本亮点展示（Sunburst/Flare）及 4 个真实复刻案例。提供可视化网站浏览、社区交流及持续更新，助力高效提示词开发。 |
| 10 | [armory3d/armorpaint](https://github.com/armory3d/armorpaint) | Graphics Creation Tools... | C | 4.4k | 72 | ArmorPaint 是一款基于 C 语言开发的 3D PBR 纹理绘画软件，支持跨平台（Windows/Linux/macOS/Android/iOS/WASM）。项目旨在为开发者提供核心功能，通过付费分发支持开发，致力于让纹理创作工具普及化。 |
| 11 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free MIT AI gateway: one endpoi... | TypeScript | 64.2k | 626 | OmniRoute 是一个开源的 AI 网关，聚合了 352 个提供商（含 150+ 免费）的 1200+ 模型。它通过配额感知自动回退和 RTK+Caveman 压缩技术（节省 15-95% 令牌）解决手动管理免费层级的痛点，支持 Claude Code、Cursor 等工具，并提供仪表盘监控。 |
| 12 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | Run frontier MoE models on hardware you already ow... | C | 27.5k | 98 | Colibrì 是一个纯 C 语言编写的轻量级推理引擎，旨在让用户在现有硬件上运行大规模 MoE 模型。它通过将存储、内存和显存视为统一的层级，实现专家模型的磁盘流式加载，支持高达 2.8T 参数的模型，旨在降低对昂贵硬件的依赖并优化推理性能。 |
| 13 | [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | Open Multi-Agent Interactive Classroom — Get an im... | TypeScript | 35.3k | 837 | OpenMAIC 是一个基于 TypeScript 的开源多智能体交互式课堂项目。它允许用户通过一个提示词生成完整课程，并引入了 Agent Workbench 进行对话式课程规划与修订。项目支持服务器端持久化会话，可上传多种材料，并内置20+种教学工具（如幻灯片、测验、PBL），采用中立设计，支持自定义模型和存储后端，旨在提供沉浸式的多智能体学习体验。 |
| 14 | [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | LLM Wiki is a cross-platform desktop application t... | TypeScript | 18.1k | 142 | LLM Wiki 是一款跨平台桌面应用，利用 LLM 自动将文档转化为自组织的知识库。支持多模态、多格式解析，具备增量构建、基于来源的检索、知识图谱分析及深度研究等功能，旨在打造个人知识库。 |
| 15 | [vercel-labs/skills](https://github.com/vercel-labs/skills) | The open agent skills tool - npx skills... | TypeScript | 31.1k | 122 | 这是一个用于开放代理技能生态系统的 CLI 工具，支持 OpenCode、Claude Code、Cursor 等 75+ 种 AI 编码代理。用户可以通过 GitHub、GitLab 或本地路径安装技能，并直接与支持的代理交互，无需手动复制提示词。 |
| 16 | [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | Local-first AI coding agent desktop: Electron + Ru... | TypeScript | 2.3k | 624 | PI-Desktop 是一个本地优先的 AI 编码代理桌面工作区。基于 Electron 和 Rust 构建，支持“自带模型”和本地运行，无需强制中继。它提供强大的权限层以审查代理操作，并支持通过插件扩展功能。适合需要完全控制权的高级开发人员。 |

[查看完整数据](api/github/2026-09-10.json)
<!-- END GITHUB TRENDING -->




