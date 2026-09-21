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

**最后更新**: 2026-09-20 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 263.7k | 826 | ECC 是一个旨在优化 AI 代理（如 Claude Code 和 Cursor）性能的工程系统。它提供了一套完整的工作流（计划、测试、审查等），包含 68 个代理、292 个技能和 AgentShield 安全功能，帮助代理优化上下文窗口、管理记忆并提升开发效率。 |
| 2 | [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) | A framework for building agentic apps... | TypeScript | 5.2k | 98 | Agent-Native 是一个 TypeScript 框架，旨在构建具有专用 UI 的智能体应用。它通过共享动作层，将智能体工具与 UI 代码逻辑统一，支持共享数据和应用状态。开发者可定义一次能力，即可在智能体、UI、HTTP、MCP 等多种渠道调用，为智能体提供可视化的交互环境。 |
| 3 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 18.0k | 2.4k | 这是一个将编码代理转化为安全审计员的技能，通过六个阶段执行结构化安全审计。支持独立验证、增量运行及机器可读输出，是 Cloudflare 漏洞发现工具的起点，适用于自动化代码安全审计。 |
| 4 | [trycua/cua](https://github.com/trycua/cua) | Scale computer-use 2.0 with open-source drivers, c... | HTML | 25.1k | 1.0k | Cua 是一个开源的计算机使用 2.0 平台，旨在为 AI 代理提供可操作的桌面环境。它提供隔离的云桌面（Fleets）、本地 macOS 虚拟机以及专用决策模型。项目包含 Sandbox SDK，支持代理在代码、API 和图形界面间切换，并提供基准测试工具，帮助开发者训练、评估和生成数据。 |
| 5 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 35.4k | 260 | 这是一个专为金融行业设计的 Claude 代理、技能及数据连接器库。项目包含针对投资银行、股权研究等场景的端到端工作流代理（如 Pitch Agent、Market Researcher），支持通过插件或 API 部署。旨在辅助生成分析报告和备忘录，但所有输出均需人工审查，不构成投资建议。 |
| 6 | [paperless-ngx/paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) | A community-supported supercharged document manage... | Python | 45.6k | 57 | Paperless-ngx 是一个社区支持的文档管理系统，旨在将物理文档转换为可搜索的在线档案。它支持扫描、索引和归档，帮助用户减少纸张使用。项目基于 Python 开发，提供 Docker 部署方式，易于迁移，并拥有活跃的社区支持。 |
| 7 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 147.1k | 419 | Claude Code 是一个运行在终端中的智能编码工具，基于 TypeScript 开发。它利用自然语言命令理解代码库，帮助开发者执行常规任务、解释复杂代码并处理 Git 工作流。支持插件扩展，旨在通过 AI 辅助提升编码效率。 |
| 8 | [mihail911/modern-software-dev-assignments](https://github.com/mihail911/modern-software-dev-assignments) | Assignments for CS146S: The Modern Software Dev (S... | Python | 4.6k | 172 | 该项目是斯坦福大学 CS146S 课程的作业仓库，专注于现代软件开发。使用 Python 编写，通过 Anaconda、Conda 和 Poetry 配置 Python 3.12 环境，提供依赖管理及作业提交指南。 |
| 9 | [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | Fault-tolerant, highly scalable GPU orchestration,... | Jupyter Notebook | 5.4k | 465 | Higgsfield 是一个开源的、容错且高度可扩展的 GPU 编排与机器学习框架，专为训练数十亿至数万亿参数的大规模模型（如 LLM）设计。它支持 ZeRO-3 和 PyTorch 分片并行，提供资源分配、任务调度及 CI/CD 集成功能，简化了分布式训练流程。 |
| 10 | [Open-Dev-Society/OpenStock](https://github.com/Open-Dev-Society/OpenStock) | OpenStock is an open-source alternative to expensi... | TypeScript | 16.8k | 755 | OpenStock 是一个开源的股票市场应用，旨在替代昂贵的付费平台。它提供实时价格追踪、个性化警报和详细的公司洞察。技术栈基于 Next.js、MongoDB 和 Finnhub，完全免费且透明。该项目由 Open Dev Society 构建，强调知识共享和社区支持，适合个人投资者和开发者使用。 |
| 11 | [coder/coder](https://github.com/coder/coder) | Secure environments for developers and their agent... | Go | 16.1k | 379 | Coder 是一个基于 Go 语言的自托管云开发环境平台。它允许用户通过 Terraform 定义工作区，利用 Wireguard® 实现安全连接，并自动关闭空闲资源以节省成本。核心亮点是支持在基础设施上运行 AI 编码代理，无需在工作区中存储 API 密钥，支持多种大模型，并提供集中化的治理和审计功能。 |
| 12 | [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | The Generative UI framework... | TypeScript | 17.3k | 291 | 这是一个生成式 UI 框架，允许 AI 从自然语言提示生成动态界面。它通过预定义组件和动作确保输出安全可靠，支持流式渲染。框架支持多种平台（React、Vue、Svelte、React Native 等），并提供 36 个预构建组件，适合构建跨平台、可预测的 AI 驱动应用。 |
| 13 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 97.7k | 736 | 这是一个为 AI 编码代理提供生产级工程技能的项目。它包含 9 个斜杠命令，覆盖从定义到发布的完整开发生命周期。这些技能编码了工作流、质量门控和最佳实践，确保 AI 代理遵循一致的高标准。它支持自动技能激活，并能通过 CLI 快速安装使用。 |

[查看完整数据](api/github/2026-09-20.json)
<!-- END GITHUB TRENDING -->




