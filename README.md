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

**最后更新**: 2026-11-15 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [dream-num/univer](https://github.com/dream-num/univer) | Build your own AI office with Univer Office SDK. B... | TypeScript | 26.3k | 988 | Univer 是一个开源的 Office SDK，基于 TypeScript 构建。它提供电子表格、文档、演示文稿等全场景编辑、计算与协作能力。开发者可利用其可扩展核心，将办公功能集成到自有产品中，并支持 AI 代理接入。包含 Web、Server 及 AI SDK 三大组件。 |
| 2 | [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | AG-UI: the Agent-User Interaction Protocol. Bring ... | TypeScript | 18.0k | 355 | AG-UI 是一个开源、轻量级的事件协议，旨在标准化 AI 代理与前端应用之间的交互。它支持实时流式聊天、双向状态同步及上下文丰富，兼容多种传输方式，帮助开发者快速将智能代理集成到用户界面中。 |
| 3 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 9.4k | 247 | 这是一个为 Google Stitch 设计的 Agent Skills 库，遵循 Agent Skills 开放标准。它包含设计、构建和实用工具三类技能，旨在提升 Claude Code、Cursor、Codex 等编码代理的能力，提供从设计到构建的完整工作流支持。 |
| 4 | [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | The workspace to stay in the loop and on top of ag... | TypeScript | 11.9k | 866 | Plannotator 是一个基于 TypeScript 的本地浏览器工作区，旨在帮助用户与 AI 编码代理保持同步。它提供“收件箱”表面，用于审查决策、计划和代码。用户可注释文档、审查 PR 并将反馈直接发送回代理。支持 Claude、Copilot 等多种主流 AI 编码工具。 |
| 5 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 57.0k | 717 | 这是一个为 AI 编码代理提供的 Chrome DevTools MCP 服务器和 CLI。它允许代理控制实时浏览器，进行性能分析、网络调试和自动化操作。支持 Claude、Cursor 等工具，利用 Puppeteer 实现可靠的自动化和深度调试。 |
| 6 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Secure, fast, efficient, battle-tested at Alibaba'... | Go | 52.2k | 691 | OpenCodeReview 是阿里巴巴开源的 AI 代码审查 CLI 工具。采用确定性管道与 LLM Agent 混合架构，支持多语言规则集（如 NPE、SQL 注入），能精准生成逐行评论。相比通用 Agent，其在相同模型下精度更高、Token 消耗更少。基于大规模真实数据集构建，专为高精度代码审查设计。 |
| 7 | [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Self-hosted workflows for coding-agent delivery. O... | Go | 1.6k | 423 | LoopForge 是腾讯开源的自托管工作流平台，用于编排 AI 编码助手。它支持通过聊天或 SOP（标准作业程序）管理 CodeBuddy、Codex 等多个代理，提供 Docker 沙箱环境，允许团队在本地基础设施上安全地执行代码生成、审查和合并，实现可重复的软件交付流程。 |
| 8 | [ggml-org/ggml](https://github.com/ggml-org/ggml) | Tensor library for machine learning... | C++ | 15.9k | 43 | 这是一个用于机器学习的张量库，旨在提供简单、可移植且高效的计算核心。它支持多种架构和后端，具备SIMD优化及2-8位整数量化能力，且运行时零内存分配，非常适合在资源受限环境下进行模型推理。 |
| 9 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 6.5k | 98 | 这是一个专为 Claude Code 设计的漏洞挖掘与红队操作技能包，包含83个技能、15个命令及681个漏洞模式。通过四层架构（思考、猎取Web应用、击穿边界、交付）实现自动化漏洞检测、企业平台攻击链构建及报告撰写，支持Burp MCP集成。 |
| 10 | [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | Keep your coding agent up to date with the latest ... | TypeScript | 7.3k | 1.2k | 该项目旨在将现代 Web 平台的最佳实践和浏览器兼容性数据嵌入到 AI 编码代理中。通过 CLI 工具提供专家级指南，帮助模型避免遗留模式，转而采用高性能的原生 API，从而提升代码质量和性能。 |
| 11 | [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Claude Code skills for equity investors and trader... | Python | 5.6k | 706 | 这是一个面向个人投资者的 Claude Skills 交易工作流工具包，主要使用 Python 开发。它旨在帮助时间受限的投资者构建更好的决策过程，包括市场分析、技术图表、经济日历和选股器等功能。项目强调纪律性波段交易作为长期投资的辅助策略，旨在通过共享工作流和习惯来改进交易决策，而非提供直接的买卖信号或盈利承诺。 |
| 12 | [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Multi-tier framework for evaluating AI agent skill... | Python | 1.8k | 122 | NVIDIA 开发的多层级 AI 代理技能评估框架。它通过质量门控、语义重叠检测和合成数据生成，评估 AI 代理技能对任务结果的影响。支持 CI/CD 集成，无需 LLM 即可进行静态质量检查，也可结合模型进行评分，适用于 Claude Code、Codex 等技能感知代理的验证。 |

[查看完整数据](api/github/2026-11-15.json)
<!-- END GITHUB TRENDING -->




