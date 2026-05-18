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

**最后更新**: 2026-05-17 | **成功**: 18 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 13.1k | 1.7k | OpenHuman 是一个基于 Rust 的个人 AI 超级智能助手。它采用 UI 优先设计，拥有桌面吉祥物，支持 118+ 第三方应用（如 Gmail、Notion）的自动集成与数据抓取。项目内置本地 Memory Tree 知识库，旨在提供私密、简单且强大的桌面级智能体验。 |
| 2 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 35.6k | 238 | CLI-Anything 旨在让所有软件具备代理原生能力。通过 CLI-Hub 平台，它提供社区构建的命令行工具，允许 AI 代理（如 Claude Code、Cursor）通过命令行与各类软件（CAD、3D 场景等）交互。项目支持一键安装、管理及贡献自定义 CLI，致力于连接 AI 代理与全球软件生态。 |
| 3 | [calcom/cal.diy](https://github.com/calcom/cal.diy) | Scheduling infrastructure for absolutely everyone.... | TypeScript | 43.3k | 433 | Cal.diy 是 Cal.com 的开源社区版本，移除了所有企业功能，采用 100% MIT 许可证。它专为个人用户和自托管需求设计，无需许可证密钥即可运行。项目由社区维护，旨在提供完全可控的调度基础设施，但不建议用于生产环境。 |
| 4 | [oven-sh/bun](https://github.com/oven-sh/bun) | Incredibly fast JavaScript runtime, bundler, test ... | Rust | 91.7k | 910 | Bun 是一个用 Rust 编写的极速 JavaScript 运行时、打包器、测试运行器和包管理器。它旨在替代 Node.js 和 npm，提供更快的性能和更简洁的 API。该项目集成了多种开发工具，简化了前端开发流程。 |
| 5 | [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | Open-source alternative to AI video platforms — Fr... | JavaScript | 15.1k | 703 | 这是一个开源的 AI 视频生成平台替代品，支持 200+ 模型（如 Flux, Midjourney, Sora）。它提供无内容过滤、无订阅费的图像和视频生成功能，支持自托管和 MIT 许可证。项目还集成了自动化媒体生成技能库，支持桌面应用和在线使用。 |
| 6 | [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Open-source intelligence for the global theater. T... | Python | 7.1k | 333 | ShadowBroker 是一个实时地理空间情报平台，聚合了来自60多个情报源的OSINT数据，包括飞机、船只、卫星、冲突区等。它提供暗战风格的地图界面，支持多种视觉模式，并允许用户通过右键点击查看国家档案和卫星照片。项目完全开源，无数据收集，旨在为分析师和研究人员提供统一的全球态势感知工具。 |
| 7 | [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | The secure, validated skill registry for professio... | TypeScript | 3.5k | 225 | 这是一个为专业 AI 编码代理提供的安全、验证技能注册表。项目提供经过严格测试和人工策划的技能，旨在安全地扩展 Claude Code、Cursor、Copilot 等主流代理的能力。通过静态分析、Snyk 扫描及人类审核，确保技能库的完整性与安全性，防止漏洞。 |
| 8 | [NirDiamant/agents-towards-production](https://github.com/NirDiamant/agents-towards-production) | End-to-end, code-first tutorials for building prod... | Jupyter Notebook | 19.9k | 172 | 这是一个面向生产环境的 GenAI 智能体构建指南，使用 Jupyter Notebook 编写。它提供了从原型到企业级部署的端到端教程，涵盖状态工作流、向量记忆、Docker 部署、FastAPI 端点、安全护栏、多智能体协调及可观测性等核心生产要素，帮助开发者将 AI 智能体转化为现实产品。 |
| 9 | [dograh-hq/dograh](https://github.com/dograh-hq/dograh) | Open Source Voice Agent Platform... | Python | 1.6k | 223 | Dograh 是一个开源、自托管的语音代理平台，旨在替代 Vapi 和 Retell。它提供拖放式工作流构建器，允许用户快速构建生产级语音机器人。项目支持自定义 LLM、STT 和 TTS，完全开源且无供应商锁定，适合需要数据隐私和灵活性的团队。 |
| 10 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | A set of ready to use Agent Skills for research, s... | Python | 23.8k | 762 | 这是一个包含135+个科学技能的库，旨在增强AI Agent的研究能力。它支持生物信息学、化学信息学、临床等多个领域，兼容任何支持Agent Skills标准的AI。新增的K-Dense BYOK功能允许在本地桌面运行AI科学家，保护数据隐私，并提供强大的科研工作空间。 |
| 11 | [Light-Heart-Labs/DreamServer](https://github.com/Light-Heart-Labs/DreamServer) | Local AI anywhere, for everyone — LLM inference, c... | Python | 1.1k | 112 | DreamServer 是一个本地优先的 AI 堆栈，支持在自有硬件上运行 LLM 推理、聊天、语音、代理、工作流、RAG 及图像生成。项目强调零云依赖、无订阅和隐私保护，旨在让用户完全掌控数据，支持 Linux、Windows 和 macOS 多平台部署。 |
| 12 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Shannon Lite is an autonomous, white-box AI pentes... | TypeScript | 42.7k | 200 | Shannon 是 Keygraph 开发的自主白盒 AI 渗透测试工具，基于 TypeScript 开发。它能分析 Web 应用源代码，自动识别并执行真实漏洞利用（如注入、XSS、SSRF），生成包含可复现 PoC 的报告。旨在填补开发与年度渗透测试之间的安全空白，提供持续的安全保障。 |
| 13 | [TryGhost/Ghost](https://github.com/TryGhost/Ghost) | Independent technology for modern publishing, memb... | JavaScript | 53.3k | 231 | Ghost 是一个基于 JavaScript 的现代博客平台，专注于出版、会员制和简报。它提供官方 CLI 工具和托管服务，支持一键部署、全球 CDN 和自动 SSL，适合个人创作者和企业快速搭建专业网站。 |
| 14 | [medusajs/medusa](https://github.com/medusajs/medusa) | The world's most flexible commerce platform.... | TypeScript | 33.5k | 211 | Medusa 是一个高度灵活的电子商务平台，提供构建自定义电商应用的框架。它允许开发者无需重复造轮子，专注于业务逻辑。支持 B2B、DTC、市场、POS 等多种场景，所有模块开源，基于 TypeScript 开发。 |
| 15 | [knadh/listmonk](https://github.com/knadh/listmonk) | High performance, self-hosted, newsletter and mail... | Go | 20.6k | 242 | listmonk 是一个高性能、自托管的邮件列表和简报管理器。它采用 Go 语言编写，打包成单个二进制文件，无需复杂依赖。支持 PostgreSQL 数据库，提供现代化的仪表盘界面。用户可以通过 Docker 或直接运行二进制文件快速部署，适合需要自建邮件服务的个人或团队。 |
| 16 | [plausible/analytics](https://github.com/plausible/analytics) | Open source, privacy-first web analytics. Lightwei... | Elixir | 25.4k | 186 | Plausible 是一个开源、隐私优先的网页分析工具，作为轻量级且无 Cookie 的 Google Analytics 替代品。它完全符合 GDPR 等法规，提供简洁的仪表板和强大的 API，支持自托管或云端托管，适合注重数据隐私的网站。 |
| 17 | [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph for Claude Code —... | TypeScript | 3.3k | 857 | 这是一个为 Claude Code 提供预索引代码知识图谱的工具。它通过构建符号关系和调用图，让 AI 代理直接查询图谱而非扫描文件，从而大幅减少 Token 消耗和工具调用次数。项目完全本地运行，基准测试显示能减少 90% 以上的工具调用并提升 70% 以上的探索速度。 |
| 18 | [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 12 Lessons to Get Started Building AI Agents... | Jupyter Notebook | 62.5k | 485 | 微软推出的AI智能体入门课程，包含12个Jupyter Notebook教学单元。课程覆盖智能体开发基础知识，支持50+种语言，旨在帮助初学者快速上手生成式AI模型和智能体开发。 |

[查看完整数据](api/github/2026-05-17.json)
<!-- END GITHUB TRENDING -->




