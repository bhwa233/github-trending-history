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

**最后更新**: 2026-10-29 | **成功**: 10 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 50.3k | 1.9k | DeepTutor 是一个基于 Python 的终身个性化辅导系统。它支持模块化安装，提供学习工作区、视频课程和 AI 聊天辅导。集成了 RAG 技术（如 LightRAG）进行知识检索，支持多语言界面（德、法、乌等），并能解析 PDF 和 Office 文档。项目旨在通过插件管理和科学工具，为用户提供可靠、可恢复的个性化学习体验。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 308.6k | 1.0k | Superpowers 是一个为 AI 编码代理设计的软件开发方法论框架。它通过技能和指令自动引导代理，在编写代码前先与用户确认需求、制定规范和实现计划。该框架强调 TDD、YAGNI 和 DRY 原则，支持多种主流 AI 编码工具，并能实现自主化的子代理驱动开发流程。 |
| 3 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design vocabulary for your coding agent. Steer... | Rust | 95.5k | 2.9k | 处理失败 |
| 4 | [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | Vibe code with pi in a lightweight, real IDE that ... | TypeScript | 6.1k | 1.1k | ThinkRail 是一个基于 TypeScript 的智能 IDE，围绕 pi 编码代理构建。它提供隔离的工作区管理（基于 git worktrees），支持并行开发，并能自动生成、合并和管理 Pull Request。IDE 集成了 Monaco 编辑器和终端，通过 living specs 学习项目，旨在提升开发效率和自动化程度。 |
| 5 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | Open-source Grok Bot alternative with a virtual ma... | TypeScript | 7.5k | 1.2k | OpenMausBot 是一个开源的 Grok Bot 替代品，提供虚拟机环境供 AI 代理运行。它支持“自带代理”，允许用户在本地使用 Claude、Codex 等模型，每个代理拥有独立的个性、记忆和工具。项目强调本地优先，无需中间代理，适合需要多代理协作和本地化部署的用户。 |
| 6 | [nightly-labs/openbot](https://github.com/nightly-labs/openbot) | A local-first desktop workspace for persistent AI ... | TypeScript | 3.9k | 709 | 这是一个本地优先的桌面工作空间，旨在为持久化的 AI 队友提供运行环境。支持 Codex、Claude、Grok 等多种模型，提供独立工作空间、任务队列、文件共享、嵌入式浏览器控制及代理间协作功能。目前处于开发预览阶段，需注意安全风险。 |
| 7 | [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) | ... | - | 12.2k | 1.2k | 该项目为 Claude Code、Cursor 等 AI 编码工具提供了一套可定制的“设计技能”集合。每个技能（如着陆页设计）包含独立的设计规则和视觉系统。用户可按需安装，通过修改配置文件即可适配个人设计风格，旨在提升 AI 生成设计稿的质量和一致性。 |
| 8 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 104.9k | 336 | Claude-Mem 是一个为 Claude Code 设计的持久化内存系统。它自动捕获会话中的工具使用和观察，通过 AI 压缩生成语义摘要，并在未来会话中注入相关上下文，确保 AI 代理保持项目知识的连续性。支持多种主流 AI 编程助手。 |
| 9 | [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | Open-source AI coworkers that each get a computer ... | TypeScript | 8.2k | 247 | OpenBot 是一个开源的 AI 同事框架，允许用户在本地或私有基础设施上运行完全可控的 AI 智能体。每个 AI 拥有独立的浏览器、文件和工具，支持任何 AG-UI 代理，强调私有化部署和深度定制。 |
| 10 | [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) | LIST OF ALL MY JAILBREAKS... | - | 9.2k | 1.6k | 这是一个针对26+种前沿大模型（如Claude、Gemini、Grok等）的提示词集合，包含系统提示词、人设定义及Ollama配置。项目旨在通过展示指令层级和策略覆盖来研究AI行为，仅供教育和研究目的。 |
| 11 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 29.3k | 353 | 该项目将 Claude Code 转化为一个完整的游戏开发工作室，包含 49 个专业化 AI 代理和 74 个工作流技能。它通过模拟真实工作室的层级结构，解决了单次 AI 会话缺乏结构、代码混乱的问题。项目提供了一套完整的协调系统，涵盖设计、编程、艺术、QA 等领域，包含 15 个自动化钩子、14 条编码规则和 62 个文档模板，确保项目从构思到发布的高质量与规范化管理。 |

[查看完整数据](api/github/2026-10-29.json)
<!-- END GITHUB TRENDING -->




