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

**最后更新**: 2026-10-27 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) | ... | - | 9.5k | 1.4k | 这是一个为 AI 编码工具（如 Claude Code、Cursor 等）提供设计技能的集合。每个技能是自包含文件夹，包含设计规范和代码生成规则（如 landing-page-design）。用户可按需安装，自定义设计值（字体、颜色等），用于指导 AI 生成符合特定视觉系统的代码。采用 MIT 许可证。 |
| 2 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 39.1k | 2.8k | Hallmark 是一个用于 Claude Code、Cursor 和 Codex 的设计技能，旨在防止 AI 生成“AI-slop”网页。它提供 50 种独特的主题（材质），根据用户意图构建页面，并通过检查常见的机器生成标记（如眉毛、空框架、虚假表单）来确保高质量、真实的外观。它支持自定义、重设计和审计。 |
| 3 | [nightly-labs/openbot](https://github.com/nightly-labs/openbot) | A local-first desktop workspace for persistent AI ... | TypeScript | 2.5k | 777 | OpenBot 是一个本地优先的桌面工作空间，旨在为 Codex、Claude、Grok 等 AI 模型提供持久化环境。它支持创建和管理多个 AI 队友，提供专用工作区、任务队列、文件共享、浏览器控制及代理间协作。目前处于开发预览阶段，允许 AI 具有完全访问权限，需谨慎使用。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 306.5k | 617 | Superpowers 是一个为编码代理设计的代理技能框架和软件开发方法论。它通过一套可组合的技能和指令，引导 AI 在编写代码前先明确需求、制定计划并遵循 TDD、YAGNI 等最佳实践。支持多种主流 AI 编码工具，旨在实现自主化的软件开发流程。 |
| 5 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | Rust | 90.6k | 1.4k | 这是一个为 AI 编码代理提供设计指导的 Rust 工具。它包含 24 个命令和 62 条确定性检测规则，旨在防止 AI 生成陈词滥调的设计。通过 `/impeccable init` 记录产品真相，并提供实时浏览器迭代功能，帮助 AI 生成更高质量、多样化的前端设计。 |
| 6 | [makecindy/cindy](https://github.com/makecindy/cindy) | Consider it done. The open-source AI agent that wo... | TypeScript | 7.5k | 1.5k | Cindy 是一个开源、开箱即用的 AI Agent，旨在连接用户的电脑和手机。它支持多设备协同工作，允许跨设备继续会话、共享模型提供商（如 Claude Code、Codex、Pi）以及使用内置远程桌面功能。无需自建服务器，设备即服务器，提供统一的工作界面和强大的多模态操作能力。 |
| 7 | [gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app) | 📨 The ultimate agentic social media scheduling to... | TypeScript | 39.4k | 951 | Postiz 是一款全功能的社交媒体管理平台，支持调度、自动化及分析内容。它集成了 AI 代理生成内容，支持团队协作与多平台发布。提供 Cloud 托管或自托管选项，并支持通过 API 与 N8N 等工具集成，适合需要高效管理社交媒体的团队。 |
| 8 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 290.9k | 1.2k | ECC 是一个代理性能优化系统，旨在为 Claude Code、Codex 等多种 AI 编程助手提供协调的工程系统。它通过“计划-测试-实现-审查-验证-记忆-改进”的闭环工作流，优化上下文窗口，提供技能、记忆和安全功能，帮助 AI 更高效地编写和审查代码。 |
| 9 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 46.0k | 1.6k | DeepTutor 是一个基于 AI 的终身个性化辅导系统。它支持多模态学习（PDF、视频、语音），具备强大的知识库管理和文档解析能力。项目提供多语言界面、学习路径规划、每日练习及研究工具，旨在通过智能交互实现高效、个性化的自主学习体验。 |
| 10 | [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | Vibe code with pi in a lightweight, real IDE that ... | TypeScript | 4.1k | 1.2k | ThinkRail 是一个基于 TypeScript 的智能 IDE，围绕 pi 编码代理构建。它提供隔离的 git worktree 工作区，支持并行开发，并具备持久的项目知识。界面包含 Monaco 编辑器、文件树和终端，支持代理自主创建工具，实现个性化开发体验。 |
| 11 | [togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks) | LIST OF ALL MY JAILBREAKS... | - | 5.6k | 902 | 这是一个针对25+个AI模型（包括Claude、Gemini等）的精选系统提示词与配置集合，包含31个完整且可直接粘贴的文件。项目涵盖系统提示词、人设锁定及工作区策略，旨在研究指令层级对模型行为的影响，仅供教育和研究目的使用。 |

[查看完整数据](api/github/2026-10-27.json)
<!-- END GITHUB TRENDING -->




