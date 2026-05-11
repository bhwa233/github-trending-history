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

**最后更新**: 2026-05-10 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 32.1k | 656 | TARS 是一个开源的多模态 AI Agent 栈，包含 Agent TARS 和 UI-TARS-desktop。Agent TARS 提供了 CLI 和 Web UI，旨在通过前沿多模态 LLM 和 MCP 工具集成，实现更接近人类任务完成的工作流。UI-TARS-desktop 则是基于模型的原生 GUI Agent 桌面应用，支持本地和远程计算机及浏览器操作。 |
| 2 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 18.8k | 1.5k | 该项目为金融服务业提供参考代理、技能和数据连接器，覆盖投资银行、股权研究等领域。包含 Pitch Agent、Market Researcher 等端到端工作流代理及估值插件。支持通过 Claude Cowork 插件或 API 部署，旨在辅助生成分析师工作产品，需人工审核。 |
| 3 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 38.4k | 1.1k | 为 AI 编码代理提供生产级工程技能，将资深工程师的工作流程与最佳实践编码为技能。通过 7 个斜杠命令覆盖开发全生命周期，确保 AI 在定义、计划、构建、测试、审查和发布阶段遵循标准，提升代码质量与工程效率。 |
| 4 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 4.7k | 567 | CloakBrowser 是一个基于 Python 的隐身浏览器项目，通过修改 C++ 源代码实现绕过反机器人检测。它作为 Playwright/Puppeteer 的替代品，内置 49 个源级补丁和人类行为模拟，自动下载二进制文件，可轻松通过 Cloudflare Turnstile、reCAPTCHA v3 等检测。 |
| 5 | [HKUDS/AI-Trader](https://github.com/HKUDS/AI-Trader) | "AI-Trader: 100% Fully-Automated Agent-Native Trad... | Python | 15.5k | 255 | AI-Trader 是一个 100% 全自动的原生 AI 代理交易平台。它支持 OpenClaw、Claude Code 等多种 AI 代理，允许代理协作交易、跨平台同步信号，并提供一键跟单和通用市场访问功能。项目采用 FastAPI 架构，旨在通过集体智能提升交易效率。 |
| 6 | [jundot/omlx](https://github.com/jundot/omlx) | LLM inference server with continuous batching & SS... | Python | 13.3k | 187 | oMLX 是专为 Apple Silicon 优化的 LLM 推理服务器。它支持持续批处理和分层 KV 缓存（内存+SSD），确保上下文变更时缓存持久化。通过 macOS 菜单栏管理，支持 MCP 协议，让本地大模型在 Mac 上高效运行，适合编码等实际工作场景。 |
| 7 | [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 💻 vibe coding 2026 | Your first modern Coding cou... | JavaScript | 9.1k | 642 | 这是一个面向初学者的现代编程课程，专注于“Vibe Coding”理念。课程旨在帮助用户利用 AI 将想法转化为真实产品，涵盖从入门到高级的全栈开发路径。内容包括 SaaS 副业项目实战、支付系统集成及微信小程序开发，并附带用户研究和需求验证等附录知识，适合零基础开发者系统学习。 |
| 8 | [playcanvas/supersplat](https://github.com/playcanvas/supersplat) | 3D Gaussian Splat Editor... | TypeScript | 6.8k | 604 | SuperSplat 是一个基于 Web 的开源 3D Gaussian Splat 编辑器，支持检查、编辑、优化和发布 3D 模型。它无需安装，直接在浏览器运行，支持本地开发环境搭建、多语言本地化及社区贡献。 |
| 9 | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Self-evolving agent: grows skill tree from 3.3K-li... | Python | 10.5k | 170 | GenericAgent 是一个极简的自主代理框架，仅用约 3K 行核心代码实现系统级控制。它通过 9 个原子工具和自进化机制，将任务转化为技能，形成个人技能树。支持多模型，Token 消耗极低，具备浏览器、终端、文件系统等全方位操作能力。 |
| 10 | [decolua/9router](https://github.com/decolua/9router) | Unlimited FREE AI coding. Connect Claude Code, Cod... | JavaScript | 7.3k | 806 | 9Router 是一个免费的 AI 编码智能路由器，旨在连接 Claude Code、Cursor 等工具到 40+ AI 提供商。它通过 RTK 技术（压缩工具输出）节省 20-40% tokens，并具备自动故障转移机制（订阅→便宜→免费），帮助开发者避免配额限制，实现低成本无限次 AI 编码。 |
| 11 | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | The agent harness performance optimization system.... | JavaScript | 178.1k | 1.0k | Anthropic Hackathon 获奖项目，专为 Claude Code、Cursor 等 AI 代理框架设计的性能优化系统。提供技能、记忆持久化、安全扫描及持续学习功能，支持多平台。v2.0 版本新增 Tkinter 仪表板和 Hermes 操作员工作流，包含 48 个代理和 182 个技能，助力研究优先的开发。 |
| 12 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程... | Python | 46.4k | 756 | Datawhale 社区开源的《从零开始构建智能体》教程，专注于 AI 原生智能体开发。内容涵盖从基础理论、经典范式（如 ReAct）到高级技术（记忆、上下文工程、Agentic-RL）及实战案例（旅行助手、赛博小镇）。项目旨在帮助开发者从模型使用者转变为系统构建者，提供从零构建框架到模型训练的全流程实战指南。 |

[查看完整数据](api/github/2026-05-10.json)
<!-- END GITHUB TRENDING -->




