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

**最后更新**: 2026-11-16 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | AG-UI: the Agent-User Interaction Protocol. Bring ... | TypeScript | 19.3k | 791 | AG-UI 是一个开源的 Agent-User Interaction Protocol，旨在标准化 AI 代理与前端应用的连接。它通过双向事件流替代传统的请求/响应模型，支持流式输出、工具调用和状态更新。项目已发布 1.0 稳定版，提供 TypeScript、Python 和 .NET SDK，兼容多框架和多平台。 |
| 2 | [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | The workspace to stay in the loop and on top of ag... | TypeScript | 12.7k | 696 | Plannotator 是一个基于浏览器的本地工作区，旨在帮助开发者与 AI 编码代理保持同步。它提供 Inbox 功能，用于查看决策、计划和原型，并允许用户进行注释和反馈。此外，它还支持代码审查，可以评论 Git 差异和 PR，并将反馈直接发送回代理以进行迭代改进。支持 Claude、Copilot、Gemini 等多种主流 AI 工具。 |
| 3 | [dream-num/univer](https://github.com/dream-num/univer) | Build your own AI office with Univer Office SDK. B... | TypeScript | 27.9k | 1.8k | Univer 是一个开源的 Office SDK，用于在自有产品中构建办公应用。它提供电子表格、文档、演示文稿等全格式支持，包含编辑、计算、协作及文件处理能力。项目由 Web SDK（核心渲染与计算）、Server SDK（实时协作）和 AI SDK（连接代理）组成，基于可扩展架构，支持开发者集成应用或进行无头处理。 |
| 4 | [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Claude Code skills for equity investors and trader... | Python | 6.5k | 837 | 这是一个基于 Claude Code 的 Python 技能工具包，专为时间受限的个人投资者设计。它结合长期投资与波段交易策略，提供市场分析、技术图表、经济日历等功能，旨在构建结构化的交易决策流程，而非直接提供买卖信号，主要用于流程改进和风险管理的教育研究。 |
| 5 | [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | A Claude Code skill bundle for bug hunting and ext... | Python | 7.6k | 1.1k | 这是一个专为 Claude Code 设计的漏洞挖掘与红队操作技能包，包含 83 个技能及 681 个披露报告模式。它集成了企业攻击矩阵与 Burp MCP，通过四层架构（思考、狩猎 Web 应用、击穿边界、交付）自动加载相关技能，辅助进行授权的红队测试、漏洞赏金挖掘及安全研究。 |
| 6 | [getarcaneapp/arcane](https://github.com/getarcaneapp/arcane) | Modern Docker Management, Designed for Everyone... | Go | 8.9k | 46 | Arcane 是一个用 Go 语言编写的现代 Docker 管理工具，旨在为所有人提供便捷的容器管理体验。项目目前处于 v3 版本开发中，支持功能请求讨论和 Bug 报告，强调文档完善、安全性透明以及多语言支持。 |
| 7 | [DeanChensj/jiangshan-map](https://github.com/DeanChensj/jiangshan-map) | 江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interacti... | JavaScript | 7.1k | 288 | 这是一个展示中国历史（公元前403年至今）的交互式地图项目。它涵盖了18个朝代，包含198个领土快照、古代地名谱系和古典诗歌路线。用户可以通过拖动时间轴来观察朝代更替、追踪君主，并对比古今边界，是探索中国历史地理和文学的绝佳工具。 |
| 8 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | A library of Agent Skills designed to work with th... | TypeScript | 9.8k | 529 | 这是一个为 Google Stitch 设计的 Agent Skills 库，基于 TypeScript 开发。它遵循 Agent Skills 开放标准，旨在与 Codex、Claude Code、Cursor 等多种编码代理兼容。库内包含设计、构建及实用工具类技能，支持通过 CLI 或 npx 快速安装，以增强 AI 编码助手的能力。 |
| 9 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 68.3k | 135 | 这是一个基于 Python 的 AI agent 技能，能够跨 Reddit、X、YouTube、HN、Polymarket 等多个平台进行全网搜索。它通过点赞、真实资金投入等用户行为数据对信息进行评分，并利用 AI 代理综合生成基于事实的摘要，旨在提供超越传统搜索引擎的用户真实反馈视角。 |
| 10 | [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Multi-tier framework for evaluating AI agent skill... | Python | 2.9k | 873 | NVIDIA/SkillEvaluator 是一个用于评估 AI 代理技能和插件的多层框架。它提供质量门控、语义重叠检测、合成数据集生成以及实时行为评估。支持通过 CLI、CI/CD 或直接集成到 Claude Code 等代理中进行技能验证，无需维护评估代码，确保技能的有效性和兼容性。 |
| 11 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Secure, fast, efficient, battle-tested at Alibaba'... | Go | 53.1k | 951 | 这是一个由阿里巴巴开源的 AI 代码审查 CLI 工具，采用混合架构（确定性管道+LLM Agent），支持行级精准审查。相比通用 Agent，它在相同模型下具有更高的 Precision 和 F1，且 Token 消耗仅为 1/9，速度更快，专为大规模生产环境设计。 |
| 12 | [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | PaperOrchestra is a multi-agent framework for auto... | Python | 1.7k | 313 | PaperOrchestra 是 Google Cloud AI Research 开发的多智能体框架，旨在自动化 AI 研究论文写作。它能将非结构化的研究想法和实验日志转化为符合会议模板的 LaTeX 手稿。框架通过编排专门的智能体（如大纲、文献综述、绘图等），自动完成文献综合、内容撰写及图表生成，极大缩短了从原始材料到提交论文的流程。 |
| 13 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 57.8k | 841 | 该项目为 AI 编码代理提供 Chrome DevTools 功能，允许通过 MCP 服务器或 CLI 控制和检查实时浏览器。支持性能分析、高级调试（截图、网络请求、控制台）及基于 Puppeteer 的可靠自动化。适用于需要浏览器自动化、调试和性能优化的场景。 |
| 14 | [sveltejs/svelte](https://github.com/sveltejs/svelte) | web development for the rest of us... | JavaScript | 89.1k | 115 | Svelte 是一种创新的 Web 应用程序构建方式。作为一个编译器，它将声明式组件转换为高效 JavaScript，从而对 DOM 进行外科手术式更新，旨在简化开发流程并提升性能。 |
| 15 | [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Local video editor for coding agents: 42 FFmpeg to... | Python | 7.1k | 367 | 这是一个为 Claude Code、Cursor 和 Codex 等编码代理提供的本地视频编辑工具包。它包含 42 个基于 FFmpeg 的工具，具备机器可读的契约和 MCP 服务器支持。支持剪切、字幕、音频处理等多种功能，完全离线运行，无需云端服务或 API 密钥。 |

[查看完整数据](api/github/2026-11-16.json)
<!-- END GITHUB TRENDING -->




