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

**最后更新**: 2026-06-26 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat) | SimpleX - the first messaging network operating wi... | Haskell | 12.5k | 432 | SimpleX Chat 是一个基于 Haskell 开发的首个无需任何用户标识符的即时通讯网络，主打 100% 隐私保护。采用双重 ratchet 端到端加密，支持 iOS、Android、Linux、macOS 和 Windows 多平台，提供移动端 App 和终端 CLI 工具。 |
| 2 | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | A format specification for describing a visual ide... | TypeScript | 21.2k | 2.4k | 这是一个面向编码代理的视觉身份描述格式规范。它结合了机器可读的 YAML 设计令牌与人类可读的 Markdown 设计理由，为 AI 代理提供设计系统的持久化结构化理解。项目包含验证工具，可检查令牌引用及 WCAG 对比度，确保设计规范准确无误。 |
| 3 | [commaai/openpilot](https://github.com/commaai/openpilot) | openpilot is an operating system for robotics. Cur... | Python | 61.8k | 80 | openpilot 是一个开源的驾驶员辅助系统，旨在升级 300 多种支持汽车的自动驾驶功能。它遵循 ISO26262 安全标准，拥有活跃的社区和完善的测试流程，支持在 comma four 硬件上运行。 |
| 4 | [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) | git push no-mistakes... | Go | 3.4k | 398 | 这是一个 Go 语言编写的本地 Git 代理工具，旨在通过 AI 驱动的验证管道防止代码错误。它拦截推送操作，在隔离的工作树中运行测试、代码审查和 Lint，仅在所有检查通过后才将代码推送到远程仓库并自动创建 PR。支持多种 AI 代理，提供安全自动修复和人工审核机制，确保提交质量。 |
| 5 | [grafana/grafana](https://github.com/grafana/grafana) | The open and composable observability and data vis... | TypeScript | 74.9k | 32 | Grafana 是一个开源的可观测性和数据可视化平台。它支持从 Prometheus、Loki、Elasticsearch 等多种数据源查询、可视化、告警和分析指标、日志及追踪。用户可创建动态仪表板，混合使用数据源，并设置告警通知，帮助团队建立数据驱动的监控文化。 |
| 6 | [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | A list of SaaS, PaaS and IaaS offerings that have ... | HTML | 123.7k | 90 | 这是一个收集各种 SaaS、PaaS 和 IaaS 免费层级服务的清单，专门面向 DevOps 和基础设施开发者。项目由社区维护，列出了包括云服务、监控、代码质量工具等在内的众多服务。入选标准严格，要求必须是即服务且提供长期免费层级，而非试用。开发者可以借此快速了解并选择适合的免费开发工具。 |
| 7 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | Transforms complex documents like PDFs and Office ... | Python | 70.4k | 960 | MinerU 是一个高精度文档解析引擎，支持 PDF、Office 文档及图片转换为 LLM 就绪的 Markdown/JSON。采用 VLM+OCR 双引擎，支持 109 种语言及复杂布局处理。提供 MCP Server、LangChain 等集成，支持国内 AI 芯片及私有化部署，专为 RAG、Agent 工作流设计。 |
| 8 | [alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill) | 张雪峰.skill — 张雪峰的认知操作系统。高考志愿/考研/职业规划的实战思维框架。由女娲.ski... | - | 9.2k | 160 | 这是一个基于张雪峰实战思维框架的AI技能包，专注于高考志愿、考研及职业规划。通过就业倒推法、家庭背景分流等核心模型，提供基于现实考量的决策建议。 |
| 9 | [mauriceboe/TREK](https://github.com/mauriceboe/TREK) | A self-hosted travel/trip planner with real-time c... | TypeScript | 7.6k | 1.1k | TREK 是一个自托管的旅行规划工具，支持拖放行程安排、交互式地图（Leaflet/Mapbox）、天气查询和路线优化。它具备实时协作功能，支持多人共同编辑行程、管理预算、预订和打包清单。项目支持 PWA 和离线使用，并集成了 SSO、2FA 和 Passkeys 等安全功能，适合团队或个人规划长途旅行。 |
| 10 | [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | AI 时代的伯克希尔：基于 Claude Code 的价值投资研究框架。巴菲特·芒格·段永平·李录四... | Python | 3.1k | 1.3k | 基于 Claude Code 的价值投资研究框架，整合巴菲特、芒格、段永平、李录四位大师方法论。通过多 Agent 并行对抗分析，强制输出明确结论，内置反偏见机制与金融数据精确校验，旨在解决 AI 分析质量与决策纪律问题，实盘验证超额收益显著。 |
| 11 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 23.6k | 1.8k | OpenMontage是全球首个开源代理驱动视频制作系统，拥有12条流水线和500+技能。它将AI编程助手升级为视频工作室，支持从脚本、素材生成到剪辑渲染的全流程自动化，不仅能制作动画，还能利用真实素材库制作高质量视频。 |
| 12 | [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) | Official, AWS-supported MCP servers, skills, and p... | Python | 1.3k | 243 | AWS 官方支持的 MCP 服务器和插件集合，旨在帮助 AI 编码代理在 AWS 上构建、部署和管理应用。提供核心服务、AI 代理构建、数据分析及 DevSecOps 等插件，兼容 Claude Code、Codex 和 Cursor，为 AI 代理提供必要的工具、知识和安全护栏。 |
| 13 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 53.3k | 673 | MediaCrawler 是一个功能强大的多平台自媒体数据采集工具，支持小红书、抖音、B站等主流平台。基于 Playwright 浏览器自动化技术，无需 JS 逆向即可获取签名参数，支持登录态缓存、IP代理池及评论词云生成，适合学习爬虫架构与数据采集。 |
| 14 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 116.6k | 950 | gstack 是一个基于 Claude Code 的 AI 工具集，包含 23 个预设角色，模拟 CEO、设计师、工程经理等团队职能，旨在帮助个人开发者像团队一样高效交付产品，减少 AI 生成内容的错误。 |
| 15 | [IceWhaleTech/CasaOS](https://github.com/IceWhaleTech/CasaOS) | CasaOS - A simple, easy-to-use, elegant open-sourc... | Go | 35.4k | 619 | CasaOS 是一个简单易用的开源个人云系统。它支持多种硬件（如树莓派、NUC），提供友好的用户界面和文件管理。用户可以通过应用商店一键安装 Docker 应用，构建个人数据中心，实现数据协作与智能设备控制。 |
| 16 | [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Clone any website with one command using AI coding... | TypeScript | 21.4k | 1.1k | 这是一个基于 Next.js 的可重用模板，利用 AI 编码代理（如 Claude Code）通过单一命令克隆任何网站。它能自动提取设计令牌、资产和组件规范，并行重建页面，实现快速网站逆向工程与原型设计。 |
| 17 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 42.3k | 1.2k | Agent-Reach 是一个 Python 项目，旨在赋予 AI Agent 访问互联网的能力。它通过 CLI 工具支持 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等主流平台，无需付费 API。项目提供一键安装和更新，具备隐私安全、多后端路由和兼容性等特点，帮助 Agent 轻松获取全网信息。 |

[查看完整数据](api/github/2026-06-26.json)
<!-- END GITHUB TRENDING -->




