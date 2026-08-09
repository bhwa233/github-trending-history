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

**最后更新**: 2026-08-09 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | A self-improving RLM agent for coding workflows an... | TypeScript | 11.0k | 2.3k | Prime Agent 是一个基于递归语言模型（RLM）的开源编码与研究代理。它采用持久化 REPL 和持续 Harness 架构，将上下文视为变量，工具视为函数调用。支持后台运行、子代理并行及自我改进技能，适合处理长期复杂的自主任务。 |
| 2 | [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | The ultimate RAG for your monorepo. Query, underst... | Python | 3.0k | 59 | 该项目利用 Tree-sitter 和 Memgraph 为多语言单体仓库构建知识图谱，结合 RAG 技术实现自然语言查询、编辑和代码优化。支持 Ruby、C#、Java 等语言，具备结构化搜索和数据流追踪能力，是代码理解和重构的强大工具。 |
| 3 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 140.6k | 932 | Agency Agents 是一个包含多种专业 AI 代理的集合，旨在集成到 Claude Code、Cursor 等开发工具中。每个代理（如前端专家、Reddit 社区专家）都具备独特个性和专业流程。用户可通过原生应用或脚本一键安装，提升开发效率与代码质量。 |
| 4 | [pranshuparmar/witr](https://github.com/pranshuparmar/witr) | Why is this running? Trace any process, port, cont... | Go | 20.6k | 342 | witr 是一款用 Go 语言开发的系统诊断工具，旨在回答“为什么这个在运行？”。它能够追踪进程、端口、容器或文件的启动链路，通过 CLI、JSON 或交互式 TUI 展示因果关系，帮助用户快速定位系统服务的来源。 |
| 5 | [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | ... | Python | 7.1k | 105 | 这是一个由 Google DeepMind 开发的全球中程大气和气旋预报模型项目。它包含 WeatherNext 2 (WN2)，这是目前最先进的模型，支持 100m 风速预测和气旋追踪。项目还提供了 GraphCast（确定性）和 GenCast（扩散式集合预报）的代码及预训练权重，旨在利用 AI 提高天气预报的准确性和效率。 |
| 6 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 85.1k | 670 | 这是一个为 AI 编码代理提供生产级工程技能的项目。它将资深工程师的工作流程、质量门控和最佳实践编码为技能，通过 8 个斜杠命令（如 /spec, /plan, /build）标准化开发流程。支持 Claude、Cursor 等多种代理，旨在提高代码质量和开发效率，确保 AI 在每个阶段都遵循最佳实践。 |
| 7 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 61.2k | 287 | 这是一个基于大语言模型（LLM）的多市场股票智能分析系统，支持A股、港股、美股等。它聚合多源行情与新闻，生成AI决策报告，并通过Web或自动化推送（企业微信/飞书等）发送分析结果，支持零成本定时运行。 |
| 8 | [goauthentik/authentik](https://github.com/goauthentik/authentik) | The authentication glue you need.... | Python | 24.3k | 312 | authentik 是一个开源的身份提供商，支持 SAML、OAuth2/OIDC、LDAP 和 RADIUS 等协议。它旨在替代 Okta 等企业级 IdP，支持从小型实验室到大规模生产集群的自托管部署。项目提供 Docker Compose、Kubernetes 和云原生等多种安装方式，适合需要统一身份认证管理的组织。 |
| 9 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 17.2k | 532 | 该项目为 Google 产品和技术提供 Agent Skills，包含 Google Cloud 等。支持通过 npx 安装特定技能，并捆绑了用于 agent harnesses 的产品插件（Skills + MCP 服务器）。代码遵循 Apache 2.0 许可证，处于积极开发中，欢迎社区贡献。 |
| 10 | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | The most powerful and modular diffusion model GUI,... | Python | 125.5k | 333 | ComfyUI 是一个强大的扩散模型 GUI 和后端，采用可视化节点图界面。它支持图像、视频、3D 等生成，具备高效本地执行、模型卸载及对最新开源和闭源模型的原生支持。用户无需编写代码即可构建复杂工作流，并可通过 API 集成到生产环境。 |
| 11 | [harveyai/harvey-labs](https://github.com/harveyai/harvey-labs) | A benchmark built to evaluate and improve agent ca... | Python | 812 | 87 | Harvey LAB 是一个开源的法律智能体基准测试项目。它包含用于评估 LLM 智能体在真实法律环境（如并购数据室）中表现的数据集和执行框架。该项目旨在持续改进任务集和评估方法，为法律 AI 研究提供支持。 |
| 12 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 17.6k | 208 | T3 Code 是一个开源的 AI 代理控制台，旨在通过移动端、Web 和桌面端应用统一管理 Claude、Codex、Cursor 等多个 AI 编程工具。它支持远程访问，提供高性能的开发体验，目前处于早期阶段。 |

[查看完整数据](api/github/2026-08-09.json)
<!-- END GITHUB TRENDING -->




