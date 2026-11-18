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

**最后更新**: 2026-11-17 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 9.6k | 1.0k | 这是一个专为 Claude Code 设计的漏洞挖掘与红队技能包，包含 83 个技能、15 个斜杠命令及 681 个已披露漏洞模式。项目通过四层架构（思考、狩猎 Web 应用、击穿边界、交付）自动化漏洞挖掘流程，支持企业级攻击矩阵与报告生成，旨在将 Claude Code 转化为资深红队研究员。 |
| 2 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 69.2k | 696 | 这是一个基于 Python 的 AI agent 技能，能够跨 Reddit、X、YouTube、HN、Polymarket 等多个平台搜索任何主题，并合成总结。它通过点赞、金钱等真实互动数据对搜索结果进行评分，而非依赖编辑，提供独特的“由人驱动”的搜索体验。 |
| 3 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Secure, fast, efficient, battle-tested at Alibaba'... | Go | 53.9k | 763 | OpenCodeReview 是阿里巴巴开源的 AI 代码审查 CLI 工具，采用确定性管道与 LLM Agent 架构。它内置多语言规则集，能精准生成逐行评论。相比通用 Agent，其在相同模型下精度和 F1 值更高，且 Token 消耗更少，适合企业级代码质量保障。 |
| 4 | [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Self-hosted workflows for coding-agent delivery. O... | Go | 3.4k | 591 | LoopForge 是腾讯开源的自托管工作流平台，旨在编排各类编码代理（如 CodeBuddy, Codex）。它通过 Docker 沙盒管理代码仓库，支持 Chat 交互与 SOP 标准流程，集成人工审批门控，帮助团队在私有基础设施上高效、可控地交付软件。 |
| 5 | [dream-num/univer](https://github.com/dream-num/univer) | Build your own AI office with Univer Office SDK. B... | TypeScript | 29.0k | 1.8k | Univer 是一个基于 TypeScript 的开源 Office SDK，旨在帮助开发者构建包含电子表格、文档、演示文稿等功能的办公应用。它提供 Web、Server 和 AI 三大 SDK，支持实时协作、公式计算及文件处理，并能与 AI 代理集成，实现智能办公场景。 |
| 6 | [getarcaneapp/arcane](https://github.com/getarcaneapp/arcane) | Modern Docker Management, Designed for Everyone... | Go | 9.4k | 618 | Arcane 是一个用 Go 语言编写的现代化 Docker 管理工具，旨在为所有人提供便捷的容器管理体验。项目目前处于 v3 版本开发阶段，专注于提供现代化的 Docker 管理功能。 |
| 7 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 10.2k | 350 | 这是一个遵循 Agent Skills 开放标准的 TypeScript 库，专为 Google Stitch 设计。它提供 stitch-design、stitch-build 和 stitch-utilities 三类插件，兼容 Codex、Claude Code、Cursor 等多种编码代理，旨在为 AI 助手提供设计、构建及工具辅助能力。 |
| 8 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 16.9k | 201 | 该项目是 Cursor 编辑器的官方插件集合，基于 TypeScript 开发。包含教学、持续学习、团队工作流、代码审查、插件创建工具等多种实用工具。旨在提升 AI 辅助编程效率，支持团队协作、自动化流程及插件生态构建。 |
| 9 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 319.4k | 1.9k | Superpowers 是一个面向编码代理的技能框架和软件开发方法论。它通过引导用户明确需求、展示设计细节、制定实施计划，并利用子代理驱动开发，实现自主编码。支持多种主流 AI 编码工具，强调 TDD、YAGNI 和 DRY 原则。 |
| 10 | [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | AG-UI: the Agent-User Interaction Protocol. Bring ... | TypeScript | 20.1k | 1.4k | AG-UI 是一个标准化 AI 代理与前端应用交互的开源协议。它通过双向事件流解决了代理流式输出、工具调用等非请求/响应模型的复杂性，实现了框架无关的通信。1.0 版本已发布，提供 TypeScript、Python 和 .NET SDK，并支持向后兼容。 |
| 11 | [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | The workspace to stay in the loop and on top of ag... | TypeScript | 13.1k | 691 | Plannotator 是一个基于浏览器的本地工作区，旨在帮助开发者与 AI 编码代理保持同步。它提供 Inbox 功能，用于审查决策、计划、代码和 PR。支持对文档和 HTML 进行注释，并将反馈直接发送回代理。它兼容 Claude Code、Copilot 等多种主流 AI 编码工具。 |
| 12 | [sveltejs/svelte](https://github.com/sveltejs/svelte) | web development for the rest of us... | JavaScript | 89.6k | 477 | Svelte 是一个用于构建 Web 应用程序的编译器。它将声明式组件转换为高效的 JavaScript，以进行 DOM 的手术式更新，旨在让 Web 开发变得简单高效。项目采用 MIT 许可证，由志愿者维护。 |
| 13 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 305.7k | 883 | ECC 是一个 AI 代理性能优化系统，旨在为 Claude Code、Codex 等多种 AI 编程工具提供统一的工程化框架。它通过标准化的开发工作流（计划-测试-实现-审查-验证-记忆-改进）优化上下文窗口，管理技能与记忆，提升代码质量与开发效率。 |
| 14 | [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 🧠 Train a 64M-parameter LLM from scratch in just ... | Python | 66.1k | 192 | 这是一个极简的 LLM 训练项目，旨在用极低成本（3元）和极短时间（2小时）从零训练出 64M 参数模型。项目完全使用原生 PyTorch 实现，不依赖高层抽象，覆盖了从数据清洗、预训练、SFT 到 RLHF、RLAIF 等全流程代码。它不仅开源了轻量级模型结构，还提供了多模态变体和完整教程，适合个人 GPU 训练及 LLM 入门学习。 |
| 15 | [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | PaperOrchestra is a multi-agent framework for auto... | Python | 3.2k | 1.1k | PaperOrchestra 是 Google Research 开发的多智能体框架，旨在自动化 AI 研究论文写作。它通过编排专门的智能体（如大纲生成、文献综述、内容撰写和绘图），将原始的研究想法和实验日志转化为符合会议模板的 LaTeX 手稿。该框架支持文献综合与可视化生成，填补了从原始材料到最终提交论文之间的差距。 |

[查看完整数据](api/github/2026-11-17.json)
<!-- END GITHUB TRENDING -->




