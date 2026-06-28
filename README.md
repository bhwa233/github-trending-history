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

**最后更新**: 2026-06-27 | **成功**: 18 | **失败**: 2

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat) | SimpleX - the first messaging network operating wi... | Haskell | 13.8k | 1.5k | SimpleX Chat 是一个基于 Haskell 开发的隐私优先即时通讯应用。它采用零用户标识符设计，结合双重 ratchet 端到端加密，保护消息和元数据。支持 iOS、Android 及桌面终端，强调 100% 的隐私保护。 |
| 2 | [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | AI 时代的伯克希尔：基于 Claude Code 的价值投资研究框架。巴菲特·芒格·段永平·李录四... | Python | 4.1k | 685 | 基于 Python 的价值投资研究框架，整合巴菲特、芒格、段永平、李录四位大师方法论。通过多 Agent 对抗分析、结构化反偏见机制及精确金融计算校验，强制输出明确投资结论。项目声称实盘收益显著跑赢指数，旨在将个人 AI 助手转化为专业投研团队。 |
| 3 | [commaai/openpilot](https://github.com/commaai/openpilot) | openpilot is an operating system for robotics. Cur... | Python | 62.1k | 322 | 处理失败 |
| 4 | [IceWhaleTech/CasaOS](https://github.com/IceWhaleTech/CasaOS) | CasaOS - A simple, easy-to-use, elegant open-sourc... | Go | 35.8k | 502 | CasaOS 是一个简单易用的开源个人云系统。它支持多种硬件，提供友好的UI和直观的文件管理。内置应用商店，支持一键安装 Nextcloud、HomeAssistant 等应用，并兼容 Docker 生态。旨在为个人和小型组织提供低成本的数据中心解决方案。 |
| 5 | [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | A list of SaaS, PaaS and IaaS offerings that have ... | HTML | 124.2k | 459 | 这是一个由社区维护的免费开发者服务列表，涵盖 SaaS、PaaS 和 IaaS。项目严格筛选仅提供免费层级而非试用期的服务，旨在帮助 DevOps 和基础设施开发者做出明智决策。列表包含云服务、监控、CI/CD 等多个分类，由 1600+ 贡献者共同维护。 |
| 6 | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | A format specification for describing a visual ide... | TypeScript | 22.3k | 1.5k | 这是一个由 Google Labs 开发的开源项目，旨在为编码代理提供一种标准化的设计系统描述格式。它结合了机器可读的 YAML 设计令牌和人类可读的 Markdown 设计理由，帮助 AI 理解视觉身份。项目包含一个 lint 工具，用于验证设计规范、检查 WCAG 对比度并生成结构化报告，确保 AI 生成的 UI 符合设计意图。 |
| 7 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C | 135.7k | 57 | 处理失败 |
| 8 | [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | AI generates a real, editable PowerPoint from any ... | Python | 33.1k | 589 | 这是一个基于 Python 的 AI 工具，能将文档转换为真实可编辑的 PPT。它支持原生形状、动画、音频旁白，并提供自定义模板选项，不仅限于图片，极大提升了演示文稿制作效率。 |
| 9 | [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Clone any website with one command using AI coding... | TypeScript | 22.1k | 750 | 这是一个基于 Next.js 和 TypeScript 的可重用模板，旨在利用 AI 编码代理（如 Claude Code）一键克隆任何网站。它通过分析目标 URL，提取设计令牌和资产，自动生成组件规范并重建代码库，极大地简化了网站逆向工程和前端开发流程。 |
| 10 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 117.2k | 674 | gstack 是一个 TypeScript 项目，旨在将 Claude Code 转化为虚拟工程团队。它包含 23 个有偏见的工具，模拟 CEO、设计师、工程经理、发布经理、文档工程师和 QA 等角色，帮助开发者通过 AI 工具实现单人高效开发，显著提升生产力。 |
| 11 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 53.8k | 394 | 这是一个功能强大的多平台自媒体数据采集工具，支持小红书、抖音、B站等主流平台。基于Playwright和CDP技术，无需复杂JS逆向，支持登录态缓存、代理池及评论词云生成，适合爬虫架构学习。 |
| 12 | [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | Unrestricted Open-source alternative to AI video p... | JavaScript | 21.4k | 255 | 这是一个无限制的开源 AI 视频平台替代品，提供免费的图像和视频生成工作室，支持 200+ 种先进模型（如 Flux, Midjourney, Kling 等）。项目无内容过滤，支持自托管。它集成了自动化媒体生成技能，支持通过 CLI 和 ComfyUI 节点进行终端操作，并可与 Claude Code 等编码助手配合，构建自动化媒体管道。 |
| 13 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Cognee is the open-source AI memory platform for a... | Python | 24.0k | 780 | Cognee 是一个开源的 AI 记忆平台，旨在为智能体提供持久长期记忆。它通过自托管知识图谱引擎，结合向量嵌入和图推理技术，实现数据的语义搜索与关系连接。支持多模态数据摄取，帮助构建可靠、可信的企业级知识基础设施。 |
| 14 | [dbt-labs/dbt-core](https://github.com/dbt-labs/dbt-core) | dbt enables data analysts and engineers to transfo... | Rust | 13.2k | 18 | dbt-core 是一个用 Rust 重写的数据转换工具，旨在帮助数据分析师和工程师使用软件工程实践来处理数据。它支持 SQL 转换，将查询转换为数据仓库中的表和视图。v2.0 版本提供了更快的性能、更严格的语言规范和 Parquet 格式的可扩展工件，且无需 Python 依赖即可作为单二进制文件分发。 |
| 15 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 38.6k | 141 | 这是一个关于 Claude Code 的视觉化、示例驱动指南，旨在解决官方文档缺乏结构的问题。项目提供从基础到高级的教程、Mermaid 流程图、生产就绪的模板以及互动测验，帮助用户快速掌握 Claude Code 的核心功能，如代理、钩子和 MCP 服务器，构建高效工作流。 |
| 16 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 179.7k | 392 | OpenCode 是一个开源的 AI 编码代理，基于 TypeScript 构建。它提供命令行和桌面应用（Beta）两种使用方式，支持 macOS、Windows 和 Linux 多平台，旨在通过 AI 技术辅助开发者进行代码编写和自动化任务。 |
| 17 | [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | Spec-driven development (SDD) for AI coding assist... | TypeScript | 57.1k | 177 | OpenSpec 是一个基于 TypeScript 的 AI 编码助手规范驱动开发（SDD）框架。它强调流动和迭代，支持从探索想法到实施任务的完整工作流。通过 AI 对话，用户可以快速生成提案、规范、设计和任务清单，适用于个人及企业项目，帮助开发者高效管理代码变更。 |
| 18 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 13.7k | 92 | Vibe-Trading 是一个基于 Python 的个人交易代理，旨在通过一条命令赋予代理全面的交易能力。项目集成了 LLM 进行智能决策，支持影子账户机制、回测验证以及通过 Tushare 获取市场数据。它具备内容过滤韧性，能处理 ETF、指数和港股数据，并包含严格的 JSON 验证。 |
| 19 | [keycloak/keycloak](https://github.com/keycloak/keycloak) | Open Source Identity and Access Management For Mod... | Java | 35.3k | 20 | Keycloak 是一个开源的身份和访问管理解决方案，专为现代应用程序和服务设计。它提供用户联邦、强认证、用户管理和细粒度授权等功能，帮助开发者以最小成本为应用添加认证，无需自行管理用户数据。 |
| 20 | [every-app/open-seo](https://github.com/every-app/open-seo) | Open source alternative to Semrush and Ahrefs... | TypeScript | 3.4k | 239 | OpenSEO 是一款开源的 SEO 工具，旨在替代 Semrush 和 Ahrefs。它采用按使用付费模式，无订阅费，支持 Docker 自托管。核心功能包括关键词研究、排名追踪、竞争对手分析和网站审计。它集成了 MCP 协议，可与 Claude Code 等 AI 代理无缝连接，提供 AI 驱动的 SEO 工作流。 |

[查看完整数据](api/github/2026-06-27.json)
<!-- END GITHUB TRENDING -->




