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

**最后更新**: 2026-08-30 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | Open Multi-Agent Interactive Classroom — Get an im... | TypeScript | 24.1k | 1.4k | OpenMAIC 是一个开源的多智能体交互式课堂平台。用户可通过一个提示词生成整门课程，并利用 Agent Workbench 与智能体协作规划、构建和修改课程内容。项目支持上传文档、音视频等材料，内置20种课程工具（如幻灯片、测验、PBL），并提供服务器端持久化会话。设计上保持中立，允许用户自定义模型、媒体和存储后端。 |
| 2 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 39.3k | 1.1k | 这是一个将 AI 代理转化为 AI 科学家的一站式技能库。提供 163 个经过验证的科学技能和 100+ 数据库，覆盖生物、化学、医学等领域。支持 Cursor、Claude Code 等多种工具，并提供本地运行的 K-Dense BYOK 模式，助力科研工作流自动化。 |
| 3 | [Lakr233/vphone-cli](https://github.com/Lakr233/vphone-cli) | ... | Swift | 9.6k | 361 | 这是一个基于 Swift 开发的命令行工具，利用 Apple Virtualization.framework 在 Apple Silicon Mac 上启动虚拟 iPhone。它集成了 PCC 研究基础设施，支持自动化下载、修补、DFU 恢复及自定义固件安装流程。用户可通过简单命令创建、管理、克隆和导入虚拟机，适合开发者进行 iOS 虚拟化研究和测试。 |
| 4 | [tt-a1i/archify](https://github.com/tt-a1i/archify) | Agent skill for beautiful, verifiable architecture... | JavaScript | 34.7k | 3.7k | Archify 是一个专为 AI 代理设计的架构可视化技能，能将代码库或系统描述转化为交互式 HTML/SVG 图表。支持架构、工作流、时序等多种图表类型，具备版本对比、节点溯源及多格式导出功能，帮助开发者直观验证和展示系统设计。 |
| 5 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 29.2k | 369 | Heretic 是一个用于移除语言模型审查（安全对齐）的 Python 工具。它结合了方向消融技术与 Optuna 优化器，通过自动寻找参数来最小化拒绝率和模型 KL 散度。该方法无需人工干预即可生成解密模型，在保持原始模型能力的同时有效移除审查，支持多种主流模型架构。 |
| 6 | [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawle... | Python | 80.2k | 221 | Crawl4AI 是一个开源的 LLM 友好网络爬虫，专为 RAG、AI 代理和数据管道设计。它将网页转换为干净的 Markdown，速度快且可控。项目支持 Docker 部署，具备安全认证、崩溃恢复和深度爬取等高级功能，适合大规模数据提取。 |
| 7 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 60.5k | 230 | 这是一个基于 Python 的 AI Agent 技能，通过并行搜索 Reddit、X、YouTube、HN、Polymarket 等多平台数据，依据真实用户互动（点赞、金钱）进行评分，最终由 AI 综合生成基于事实的摘要。它旨在提供超越传统搜索引擎的真实舆论和市场洞察。 |
| 8 | [majd/ipatool](https://github.com/majd/ipatool) | Command-line tool that allows searching and downlo... | Go | 10.2k | 58 | ipatool 是一个用 Go 编写的命令行工具，允许用户在 App Store 上搜索 iOS、iPadOS、tvOS 和 visionOS 应用，并下载其 IPA 包。它支持通过 Apple ID 进行认证，并提供搜索、购买授权等功能，适用于跨平台开发者和测试人员。 |
| 9 | [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | A collection of MCP servers.... | - | 93.3k | 96 | 这是一个精选的 MCP (Model Context Protocol) 服务器列表。它汇集了众多连接 AI 模型与外部工具、数据源的服务器，旨在帮助开发者快速发现和集成各种 MCP 服务器，提升 AI 应用的功能扩展性。 |
| 10 | [checkstyle/checkstyle](https://github.com/checkstyle/checkstyle) | Checkstyle is a development tool to help programme... | Java | 9.2k | 115 | Checkstyle 是一个用 Java 编写的开发工具，旨在帮助程序员编写符合编码标准的 Java 代码。它默认支持 Google 和 Sun 风格指南，且高度可配置。用户可以通过命令行或 ANT 任务调用，用于自动检查代码规范，如检测 switch 语句中的 fall-through 错误。 |
| 11 | [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | Ghidra is a software reverse engineering (SRE) fra... | Java | 73.9k | 198 | Ghidra 是美国国家安全局创建的软件逆向工程框架。它提供全功能的分析工具，支持反汇编、反编译和脚本编写，适用于 Windows、macOS 和 Linux。该框架旨在解决大规模 SRE 问题，支持自定义扩展，广泛用于恶意代码分析和网络安全研究。 |
| 12 | [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) | RL training environments for Microduck (mjlab)... | Python | 797 | 168 | 这是一个基于 MuJoCo Warp 和 PPO 算法的强化学习训练环境，专为 Microduck 双足机器人设计。项目支持在 50Hz 下训练策略并导出为 ONNX 模型，包含完整的 sim2real 流程（如域随机化、执行器物理模拟），用于实现机器人的平地/崎岖地形行走及跌倒恢复。 |
| 13 | [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | 中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审... | Python | 5.7k | 62 | 该项目是一个基于 Python 的中国专利辅助技能，旨在帮助研发人员挖掘专利点并编写交底书（发明、实用新型、外观设计）。支持从代码/文档自动生成 Word 文档、查新、生成线稿以及使用 Obsidian 进行通俗解读，解决专利撰写痛点。 |
| 14 | [corsairdev/corsair](https://github.com/corsairdev/corsair) | Connect your users to their apps... | TypeScript | 11.0k | 126 | Corsair 是一个全功能的产品集成平台，旨在提供无缝的开发体验。它基于 REST API 构建，支持代理、后端服务和用户仪表板。通过统一的语法和适配器模式，开发者可以轻松连接各种第三方 API，无需重复编写胶水代码。项目开源，支持自托管，确保用户数据安全。 |
| 15 | [every-app/open-seo](https://github.com/every-app/open-seo) | Open source alternative to Semrush and Ahrefs... | TypeScript | 15.2k | 469 | OpenSEO 是一款开源的 Semrush 和 Ahrefs 替代品，主打无订阅、按使用付费模式。它提供关键词研究、排名跟踪、竞争对手分析等核心 SEO 功能，并支持与 Claude Code 等 AI 代理集成，通过 MCP 协议实现自动化 SEO 任务。支持 Docker 和 Cloudflare 自托管，适合个人及团队使用。 |
| 16 | [colinhacks/zod](https://github.com/colinhacks/zod) | TypeScript-first schema validation with static typ... | TypeScript | 43.7k | 31 | Zod 是一个 TypeScript 优先的架构验证库，支持静态类型推断。它允许开发者定义模式并解析数据，获得强类型且经过验证的结果。该库零外部依赖、体积小（2kb），支持 Node.js 和浏览器，内置 JSON Schema 转换，并提供 AOT 编译以提升性能。 |
| 17 | [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | 7.4 billion tokens per month. 34 free LLM provider... | TypeScript | 22.8k | 504 | 该项目聚合了34个免费LLM提供商的635个模型端点，通过一个OpenAI兼容的/v1接口统一管理。具备智能路由、自动故障转移、加密密钥及自动更新模型目录功能，旨在简化个人AI实验，无需管理多个SDK和密钥。 |
| 18 | [livekit/agents](https://github.com/livekit/agents) | A framework for building realtime voice AI agents ... | Python | 13.8k | 132 | LiveKit Agents 是一个 Python 框架，用于构建实时、多模态的语音 AI 代理。它支持灵活的 STT/LLM/TTS 集成，具备任务调度、WebRTC 客户端及电话集成能力。内置语义回合检测和 MCP 支持，提供完善的测试框架，助力开发者快速构建智能对话系统。 |
| 19 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 46.6k | 182 | GitNexus 是一个零服务器代码智能引擎，运行在浏览器中。它将代码库索引为知识图谱，追踪依赖和调用链，并通过 MCP 工具暴露给 AI 代理。支持 Web UI 和 CLI，帮助 AI 代理（如 Cursor 和 Claude Code）理解代码架构，避免盲点。 |

[查看完整数据](api/github/2026-08-30.json)
<!-- END GITHUB TRENDING -->




