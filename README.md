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

**最后更新**: 2026-05-28 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 66.2k | 4.7k | 这是一个基于 Python 的 AI 视频生成工具，利用大模型一键生成短视频。它支持自动生成文案、素材、字幕和背景音乐，提供 Web 和 API 接口。支持多种视频尺寸（竖屏/横屏）和批量生成，兼容多种大模型（如 DeepSeek, OpenAI），适合内容创作者快速制作无版权高清视频。 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 197.2k | 1.4k | ECC 是一个跨 AI 代理框架（如 Cursor、Claude Code）的性能优化系统。它提供了一套完整的技能、本能、记忆优化、安全扫描和持续学习机制，旨在提升代理的工作流效率和生产力。支持多语言生态，包含 Token 优化、并行化和子代理编排等功能，并推出了基于 Tkinter 的 GUI 管理界面。 |
| 3 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the ... | Shell | 26.4k | 2.2k | Taste-Skill 是一个专为 AI Agent 设计的“反垃圾”前端框架。它提供可移植的技能，帮助 AI 生成高质量的 UI（布局、排版、动画），避免通用的样板代码。项目包含图像生成技能，用于创建参考板，可与 Codex、Cursor 等工具配合使用，提升 AI 构建界面的审美和设计质量。 |
| 4 | [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | A skill file for removing AI tells from prose... | - | 6.4k | 761 | 这是一个用于从文本中移除 AI 写作痕迹的技能文件。它通过提供核心指令和参考数据，教导 Claude 或其他 LLM 识别并修正可预测的短语、结构陈词滥调以及句子级错误。该项目旨在提升文本的直接性、节奏感和真实性，使其听起来更像人类写作。 |
| 5 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for A... | TypeScript | 47.8k | 493 | twenty 是一个开源的 Salesforce 替代品，专为 AI 设计。它允许技术团队通过代码（SDK）快速构建和定制符合复杂业务需求的 CRM 系统。项目提供了对象、视图、工作流和代理等构建模块，支持云端部署和自托管，旨在让 CRM 的开发、发布和版本控制像其他技术栈一样简单高效。 |
| 6 | [DigitalPlatDev/FreeDomain](https://github.com/DigitalPlatDev/FreeDomain) | DigitalPlat FreeDomain: Free Domain For Everyone... | HTML | 170.7k | 1.8k | DigitalPlat FreeDomain 是一个致力于为个人和组织提供免费域名的平台。该项目支持 .DPDNS.ORG 等多种扩展名，用户可自由注册并托管在 Cloudflare 等服务商。项目由 DigitalPlat Foundation 维护，拥有庞大的用户群体，旨在降低建站门槛，让每个人都能拥有数字身份。 |
| 7 | [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips) | An advanced guide to learn English which might ben... | - | 48.5k | 2.0k | 这是一个基于作者自身高考和托福备考经验整理的英语进阶指南。内容涵盖英语水平等级、特色章节以及2026版AI学习方案，详细介绍了如何利用Gemini、ChatGPT等工具构建听说读写训练回路，旨在帮助用户高效学习英语。 |
| 8 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 127.7k | 1.4k | 这是一个微软开源的轻量级 Python 工具，用于将 PDF、Word、Excel、图片、音频等多种文件格式转换为 Markdown。它专注于保留文档结构（如标题、列表、表格），专为 LLM 文本分析和处理管道设计，输出格式对机器友好且 token 效率高。 |
| 9 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 211.0k | 1.7k | Superpowers 是一个为 Claude Code、Codex 等编码代理构建的技能框架和软件开发方法论。它通过自动触发技能，引导代理在开发前询问用户需求、展示规范、制定实施计划（强调 TDD、YAGNI、DRY），并利用子代理进行自主开发。旨在让编码代理具备更强的自主性和工程化能力。 |
| 10 | [revfactory/harness](https://github.com/revfactory/harness) | A meta-skill that designs domain-specific agent te... | HTML | 3.9k | 65 | Harness 是一个为 Claude Code 设计的团队架构工厂。它利用 6 种预定义模式（如流水线、专家池等）将域描述转化为专门的代理团队和技能。该工具自动生成 `.claude/agents/` 和 `.claude/skills/` 文件，帮助用户快速构建复杂的 AI 代理系统。 |
| 11 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 506.5k | 1.1k | 这是一个通过从头开始重新创建著名技术来学习编程的指南集合。涵盖了从3D渲染器、AI模型、区块链到操作系统、编程语言等众多领域。项目提供详细的分步教程，帮助开发者深入理解底层原理，适合希望提升技术深度的开发者。 |
| 12 | [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | Graphs that teach > graphs that impress. Turn any ... | TypeScript | 42.7k | 3.8k | 这是一个 Claude Code 插件，旨在将代码库、知识库或文档转化为交互式知识图谱。通过多智能体管道分析文件、函数和依赖，提供结构图、业务逻辑视图及知识库分析功能。用户可交互式探索代码，帮助新成员快速理解大型项目，实现从“阅读代码”到“理解全貌”的转变。 |
| 13 | [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawle... | Python | 66.9k | 154 | Crawl4AI 是一个开源的 LLM 友好型网络爬虫，专注于将网页转换为干净的 Markdown 格式，专为 RAG、AI 代理和数据管道设计。它具备反机器人检测、Shadow DOM 解析、崩溃恢复等高级功能，速度快且可控，旨在提供比现有解决方案更具成本效益的大规模网页提取服务。 |
| 14 | [OpenMOSS/MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS) | MOSS‑TTS Family is an open‑source speech and sound... | Python | 2.2k | 71 | MOSS-TTS 是一个开源的高保真语音和声音生成模型家族，支持长文本语音、多说话人对话、角色设计及环境音效生成。具备实时流式 TTS 能力，支持多语言、高采样率（48kHz）及 llama.cpp 集成，适用于复杂现实场景。 |
| 15 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Compound Engineering plugin for Claude Co... | TypeScript | 17.8k | 184 | 这是一个为 Claude Code、Codex 和 Cursor 等工具设计的官方 Compound Engineering 插件。它旨在通过 AI 代理简化工程工作，遵循“复合工程”理念（80%规划/审查，20%执行）。插件提供 /ce-strategy、/ce-brainstorm、/ce-code-review 等技能，帮助用户制定策略、头脑风暴、规划实现、审查代码文档及沉淀知识，从而减少技术债务，提升开发效率。 |
| 16 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 142.8k | 718 | Anthropic 为 Claude AI 提供的技能公共仓库，包含用于动态加载的指令、脚本和资源。旨在提升 Claude 在创意、技术及企业工作流等特定任务上的表现。项目涵盖艺术创作、Web 测试、文档处理等多种场景，部分技能开源（Apache 2.0），部分为生产环境使用的源可用技能。 |

[查看完整数据](api/github/2026-05-28.json)
<!-- END GITHUB TRENDING -->




