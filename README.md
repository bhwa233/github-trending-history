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

**最后更新**: 2026-10-28 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | Vibe code with pi in a lightweight, real IDE that ... | TypeScript | 5.1k | 1.1k | ThinkRail 是一个基于 TypeScript 的智能 IDE，围绕 pi 编码代理构建。它通过隔离的 git worktree 工作区实现并行开发，利用“活规范”持久化项目知识。IDE 具备 Monaco 编辑器、终端和 PR 管理功能，支持代理自动生成代码、合并分支并处理 CI 检查，旨在根据用户工作习惯自适应进化。 |
| 2 | [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) | ... | - | 11.2k | 2.1k | 这是一个为 Claude Code、Cursor 等 AI 编码工具提供设计技能的集合库。项目包含自包含的文件夹，每个文件夹代表一个特定技能（如着陆页设计）。用户可按需安装，AI 将根据 Markdown 规则文件生成设计。设计系统（字体、颜色等）易于自定义，遵循 MIT 许可证。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 307.5k | 1.1k | Superpowers 是一个为编码代理设计的代理技能框架和软件开发方法论。它通过引导用户定义规格、展示设计、制定实现计划（强调 TDD、YAGNI、DRY），并利用子代理自主执行任务，使 AI 代理具备结构化的开发能力。支持多种主流 AI 工具，旨在提升自动化编程的效率和质量。 |
| 4 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 48.1k | 2.4k | DeepTutor 是一个基于 Python 的终身个性化 AI 导师系统。它利用 RAG 技术和知识库管理，提供模块化的学习工作区、视频课程、阅读练习和评估功能。支持多语言界面，具备强大的文档解析和聊天恢复能力，旨在为用户提供可靠且可定制的终身学习体验。 |
| 5 | [macro-inc/macro](https://github.com/macro-inc/macro) | Macro is a unified workspace for teams: email, cha... | Rust | 5.5k | 117 | Macro 是一个为团队设计的统一工作空间，旨在替代 Slack、Linear 等多个工具。它集成了邮件、消息、文档、任务、代理和 CRM，通过共享 AI 记忆和双向图实现跨工具的 @链接与协作。项目使用 Rust 和 SolidJS 构建，强调速度、可靠性和模块化设计，旨在成为团队的“操作系统”。 |
| 6 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 40.8k | 2.1k | Hallmark 是一个旨在防止 AI 生成“AI-slop”设计的技能。它提供 50 种独特主题，检查机器生成的迹象，支持自定义、重设计及审计，确保输出符合人类审美标准。 |
| 7 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design vocabulary for your coding agent. Steer... | Rust | 92.8k | 1.5k | Impeccable 是一个 Rust 编写的工具，旨在为 AI 编码代理提供设计词汇表。它通过命令引导 AI 生成更美观的代码，并提供批评和审计功能，检查可用性、可访问性和性能。它使用确定性规则检测“AI 垃圾内容”，无需 API 密钥即可提升代码质量。 |
| 8 | [makecindy/cindy](https://github.com/makecindy/cindy) | Consider it done. The open-source AI agent that wo... | TypeScript | 8.1k | 728 | Cindy 是一个开源、开箱即用的 AI Agent，基于 TypeScript 开发。它支持多设备连接，允许用户在电脑和手机间无缝切换会话，共享模型提供商和文件。内置远程桌面功能，无需自建服务器，集成了 Claude Code、Codex 和 Pi 等多种工作流。 |
| 9 | [nightly-labs/openbot](https://github.com/nightly-labs/openbot) | A local-first desktop workspace for persistent AI ... | TypeScript | 3.3k | 1.1k | OpenBot 是一个本地优先的桌面工作区，为 Codex、Claude、Grok 等 AI 代理提供持久化协作环境。支持专用工作区、任务队列、文件共享及浏览器控制，允许代理间通信。目前处于开发预览阶段，提供跨平台计算机使用功能，但需注意安全风险。 |
| 10 | [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) | LIST OF ALL MY JAILBREAKS... | - | 7.2k | 1.5k | 该项目是一个针对26+种大模型的系统提示词与越狱指令集合，包含32个完整的提示词文件。涵盖Claude、Gemini、Grok等前沿及开源模型，提供人设锁定、工作区策略及代理操作规范。所有文件均为即插即用的完整格式，主要用于研究提示词注入、指令层级及模型行为控制。 |
| 11 | [hmjz100/LinkSwift](https://github.com/hmjz100/LinkSwift) | 一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百... | JavaScript | 34.9k | 1.6k | LinkSwift 是一个基于 JavaScript 的网盘直链获取工具，支持百度、阿里、夸克等八大主流网盘。它不仅能获取下载链接，还集成了 IDM、Aria2 等下载器，支持多线程下载和批量操作，界面美观且持续更新。 |
| 12 | [expo/skills](https://github.com/expo/skills) | A collection of AI agent skills for working with E... | Shell | 3.6k | 90 | Expo 官方提供的 AI 代理技能集合，旨在帮助 AI 代理更高效地构建、部署、升级和调试 Expo 应用。它为 AI 提供了关于 Expo API、工作流及平台约束的专门知识，确保正确应用官方文档。支持通过插件市场或 Skills CLI 安装到 Claude Code、Cursor 等多种 AI 编码工具中。 |
| 13 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 101.1k | 557 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 WiFi 信号（CSI）实现穿墙检测、生命体征监测（呼吸/心率）和活动识别。它无需摄像头或可穿戴设备，支持与 Home Assistant、Apple Home、Google Home 等主流智能家居生态无缝集成，提供房间占用、睡眠质量及跌倒检测等空间智能数据。 |
| 14 | [xiaolai/the-craft-of-selfteaching](https://github.com/xiaolai/the-craft-of-selfteaching) | One has no future if one couldn't teach themself.... | Jupyter Notebook | 18.5k | 148 | 这是一个关于“自学”的 Python 伪代码项目。它通过 `teach_yourself` 函数展示了自学的核心循环：不断学习、练习，直到创造成果。项目旨在传达“如果不能自学，就没有未来”的理念，鼓励通过持续的行动实现自我提升。 |

[查看完整数据](api/github/2026-10-28.json)
<!-- END GITHUB TRENDING -->




