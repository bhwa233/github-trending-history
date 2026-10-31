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

**最后更新**: 2026-10-30 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 106.3k | 1.1k | 这是一个为 Claude Code 构建的持久记忆压缩系统。它通过自动捕获会话中的工具使用情况并利用 AI 进行语义压缩，将上下文注入到未来的会话中。支持多种 AI 代理和 IDE，帮助 AI 在会话结束后保持对项目的连续性认知。 |
| 2 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | Open-source Grok Bot alternative with a virtual ma... | TypeScript | 8.7k | 895 | OpenMausBot 是一个开源的本地优先 AI 通讯应用，作为 Grok Bot 的替代品。它允许用户在本地运行 Claude、Codex 和 Grok 等多种 AI 模型，每个代理拥有独立的个性、记忆和工具。该项目强调隐私与自主性，适合需要在本地管理多个 AI 代理的开发者和用户。 |
| 3 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design vocabulary for your coding agent. Steer... | Rust | 97.1k | 2.3k | 这是一个为 AI 编码代理提供设计词汇表的 Rust 项目。它通过命令行工具帮助用户引导 AI 生成更美观、大胆的设计，同时提供批评和审计功能来检查可用性和无障碍性。它使用确定性规则检测“AI slop”（糟糕的设计），无需 LLM，适用于 Claude Code、Cursor 等多种代理，旨在提升 AI 生成的代码和界面的设计质量。 |
| 4 | [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | Open-source AI coworkers that each get a computer ... | TypeScript | 8.8k | 706 | OpenBot 是一个允许在本地基础设施上运行的自定义 AI 同事框架。每个 AI 代理拥有独立的浏览器、文件和工具，通过 AG-UI 协议连接。它强调完全的可控性和私有化部署，适合企业构建完全属于自己的 AI 助手。 |
| 5 | [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu) | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据... | TypeScript | 11.3k | 1.1k | 这是一个基于倪海厦《天纪》体系的紫微斗数开源排盘引擎。项目包含完整的排盘算法、四化系统及古籍数据。最新发布了包含67.5万张命盘的v4.0解读数据集，修正了断语并优化了引擎。旨在通过技术手段普及传统命理学，提供在线排盘与AI解读服务。 |
| 6 | [expo/skills](https://github.com/expo/skills) | A collection of AI agent skills for working with E... | Shell | 3.9k | 38 | Expo 官方提供的 AI 代理技能集合，旨在帮助 AI 代理掌握 Expo、EAS 及 React Native 的开发规范与约束。支持通过插件或 CLI 安装，用于辅助构建、部署、升级和调试 Expo 应用程序。 |
| 7 | [macro-inc/macro](https://github.com/macro-inc/macro) | Macro is a unified workspace for teams: email, cha... | Rust | 5.9k | 57 | Macro 是一个为团队打造的统一协作工作空间，旨在替代多个分散的工具。它集成了邮件、消息、文档、任务、CRM 和 AI 代理，通过共享记忆和双向链接实现无缝协作。项目采用 Rust 和 SolidJS 构建，强调速度与可靠性，致力于成为团队的数字化操作系统。 |
| 8 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 307.5k | 876 | 这是一个为工程师设计的实用技能集合，旨在提供真实的工程能力而非“氛围编码”。它包含一系列小型的、可组合的 Shell 脚本，支持 Claude Code、Copilot、Codex 等多种 AI 编程助手。通过自动更新机制，用户可以轻松将这些技能集成到日常开发流程中，提升工程效率。 |
| 9 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 32.8k | 930 | T3 Code 是一个统一的 AI 代理控制台，支持 iOS、Android、Web 和桌面端。它允许用户通过单一界面控制 Claude Code、Codex、Cursor 等多个 AI 编程工具。该项目旨在提供高性能、远程就绪且完全开源的开发体验。 |
| 10 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 51.8k | 2.3k | DeepTutor 是一个终身个性化辅导系统，提供模块化安装和灵活的学习工作区。支持多语言界面（德语、法语、乌克兰语），具备强大的文档解析（PDF、Office）、视频旁白、题库练习及知识库自同步功能。集成了多种AI提供商，支持聊天恢复、历史搜索和任务管理，旨在打造可靠且可恢复的AI导师体验。 |
| 11 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 185.4k | 295 | Anthropic 官方维护的 Claude Agent Skills 仓库，提供一系列动态加载的技能模块。这些技能通过独立的文件夹和 SKILL.md 文件，涵盖创意、技术及企业工作流，旨在教会 Claude 以可重复方式完成文档创建、数据分析及自动化等复杂任务，为开发者提供参考和灵感。 |
| 12 | [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | Vibe code with pi in a lightweight, real IDE that ... | TypeScript | 6.6k | 722 | ThinkRail 是一个基于 TypeScript 的智能 IDE，旨在通过 AI 代理（pi）提升开发效率。它利用 git worktrees 实现工作区隔离，允许代理并行工作。项目通过 living specs 学习代码库，支持自动化 PR 创建、合并及 CI 检查。它提供类似 Monaco 的编辑器界面，专注于根据用户工作习惯定制化开发体验。 |
| 13 | [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) | LIST OF ALL MY JAILBREAKS... | - | 11.1k | 2.1k | 该项目是一个包含32个提示词的集合，针对26+种大语言模型。涵盖了系统提示词、人设锁定、工作区策略及Ollama Modelfiles，支持OpenCode Zen、GLM、DeepSeek、Claude等多种模型。仅供研究和教育用途，用于分析指令层级和提示词注入防御。 |
| 14 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 309.5k | 1.3k | Superpowers 是一个面向 AI 编码代理的软件开发方法论和技能框架。它通过对话获取需求，分解规格，制定包含 TDD、YAGNI 和 DRY 的实施计划，并利用子代理自主执行开发任务，从而提升代理的编程能力和工作流效率。 |
| 15 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 38.4k | 626 | Lightpanda 是一个专为 AI 代理和自动化设计的无头浏览器，使用 Zig 语言从零构建。它不是 Chromium 或 WebKit 的分支，而是全新的浏览器。在基准测试中，它比 Headless Chrome 轻量 16 倍且速度快 9 倍，非常适合资源受限或高性能要求的自动化场景。 |

[查看完整数据](api/github/2026-10-30.json)
<!-- END GITHUB TRENDING -->




