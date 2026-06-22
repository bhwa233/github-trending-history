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

**最后更新**: 2026-06-21 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | macOS video editor built for AI... | Swift | 5.1k | 1.8k | Palmier Pro 是一款基于 Swift 开发的 macOS 视频编辑器，对标 Premiere Pro。它集成了生成式 AI，允许在时间轴上生成视频和图像。项目支持 MCP 协议，可与 Claude、Cursor 等工具无缝连接，实现人机协作。编辑器核心功能免费开源，生成式 AI 特性需订阅。 |
| 2 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 8.7k | 987 | OpenMontage 是全球首个开源的代理视频制作系统，将 AI 编码助手转化为完整工作室。它通过自然语言描述，利用 12 条流水线和 500+ 代理技能，自动完成从研究、脚本到素材生成、剪辑及合成的全流程。系统不仅能制作基于图像的视频，还能利用开源素材制作包含真实运动片段的成品视频，成本极低。 |
| 3 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 44.3k | 2.6k | Headroom 是一个 AI 代理上下文压缩层，用于在 LLM 处理前压缩工具输出、日志和 RAG 块。它通过 6 种算法将 token 减少 60-95%，同时保持答案一致。支持库、代理和 MCP 服务器，具备输出压缩和可逆功能。 |
| 4 | [tursodatabase/turso](https://github.com/tursodatabase/turso) | Turso is an in-process SQL database, compatible wi... | Rust | 20.8k | 548 | Turso 是一个用 Rust 编写的进程内 SQL 数据库，完全兼容 SQLite。它支持 MVCC 并发控制、变更数据捕获 (CDC)、向量搜索以及多语言和 WebAssembly 支持。目前处于 Beta 阶段，提供高性能的异步 I/O 和跨平台能力。 |
| 5 | [penpot/penpot](https://github.com/penpot/penpot) | Penpot: The open-source design tool for design and... | Clojure | 52.2k | 1.1k | Penpot 是一个开源的跨平台设计平台，专为大规模团队构建数字产品设计。它支持自托管，确保对设计基础设施的完全控制。核心优势在于设计与代码的无缝协作，支持 SVG、CSS、HTML 等标准，提供实时协作、设计令牌及 MCP 服务器，实现自动化和 AI 工作流，是构建可扩展设计系统的全栈解决方案。 |
| 6 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 44.4k | 568 | 这是一个基于 Python 的 LLM 驱动股票分析系统，支持 A股、港股、美股等多市场数据聚合。它能自动生成包含买卖点位、风险警报的 AI 决策报告，并通过企业微信、飞书等渠道推送。支持 GitHub Actions 零成本部署，集成了多种大模型和数据源。 |
| 7 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 58.1k | 163 | 这是一个实时全球情报仪表盘，利用 AI 聚合 500+ 新闻源，提供地缘政治监控和基础设施追踪。支持 3D 地球与 WebGL 地图可视化，包含国家不稳定指数 (CII) 和金融雷达。支持本地 AI (Ollama) 运行，具备多语言及桌面应用支持。 |
| 8 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source long-horizon SuperAgent harness tha... | Python | 72.6k | 442 | DeerFlow 是字节跳动开源的长周期 SuperAgent 框架，支持研究、编码和任务自动化。它通过子代理、沙箱、记忆和工具集来处理耗时从几分钟到几小时的任务。v2.0 是全新重写，集成了 InfoQuest 搜索工具，推荐使用 DeepSeek 等模型，旨在成为强大的智能体编排平台。 |
| 9 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 10.2k | 1.0k | 这是一个用 C 语言编写的高性能代码智能 MCP 服务器。它利用 Tree-sitter 和 LSP 技术将代码库索引为持久化知识图谱，支持 158 种语言。平均仓库毫秒级索引，Linux 内核 3 分钟完成。支持 14 个 MCP 工具，零依赖，单静态二进制，本地处理，安全且高效。 |
| 10 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 754 structured cybersecurity skills for AI agents ... | Python | 17.7k | 361 | 该项目为AI代理提供754个结构化的网络安全技能，涵盖26个安全领域。所有技能遵循agentskills.io标准，并映射至MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND、NIST AI RMF及MITRE F3六大框架。旨在让AI代理具备资深分析师的能力，支持Claude Code、GitHub Copilot等多种平台。 |
| 11 | [tw93/Pake](https://github.com/tw93/Pake) | 🤱🏻 Turn any webpage into a desktop app with one ... | Rust | 56.2k | 1.8k | Pake 是一个基于 Rust 和 Tauri 的开源工具，支持将任意网页一键打包为跨平台桌面应用。相比 Electron，它体积更小（约5M）、性能更高且内存占用更低。项目提供 CLI 工具和在线构建服务，支持快捷键、沉浸式窗口、样式自定义及广告移除等功能，适合开发者及初学者快速构建桌面软件。 |
| 12 | [mikumifa/biliTickerBuy](https://github.com/mikumifa/biliTickerBuy) | b站会员购购票辅助工具... | Python | 3.7k | 67 | B站会员购自动抢票辅助工具，旨在提高热门演出或商品发售时的购票成功率。支持命令行与Web界面，具备多任务并发处理能力，可配置请求参数以应对高并发抢购场景。 |
| 13 | [smicallef/spiderfoot](https://github.com/smicallef/spiderfoot) | SpiderFoot automates OSINT for threat intelligence... | Python | 18.7k | 294 | SpiderFoot 是一个开源的 OSINT 自动化工具，使用 Python 编写。它通过集成数百个数据源（如 IP 黑名单、社交媒体、云存储等），自动收集目标信息，用于威胁情报分析和攻击面映射。 |
| 14 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Cognee is the open-source AI memory platform for a... | Python | 18.6k | 347 | Cognee 是一个开源的 AI 记忆平台，专为智能体设计。它通过自托管的知识图谱引擎，结合向量嵌入和认知科学本体生成，为智能体提供跨会话的持久长期记忆。支持多模态数据摄入、本地运行及用户隔离，旨在构建可靠、可信赖的企业级知识库。 |
| 15 | [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips) | An advanced guide to learn English which might ben... | - | 54.0k | 125 | 这是一个基于作者个人高考及托福备考经验总结的英语学习指南。项目结合了个人心得与科学依据，提供了详尽的英语进阶路径。特别更新了2026版AI章节，重点推荐使用Gemini作为学习引擎，并整合了国产大模型API网关等资源，旨在帮助用户高效、自然地掌握英语。 |
| 16 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Extracted system prompts from Anthropic - Claude F... | JavaScript | 44.4k | 282 | 该项目致力于收集并公开 Anthropic、OpenAI、Google 等主流 AI 模型的系统提示词。它详细记录了 Claude Fable 5、GPT-5.5、Gemini 等最新模型的底层指令，旨在透明化 AI 的行为规则，帮助开发者理解并利用这些隐藏规则。 |
| 17 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 139.7k | 1.4k | 这是一个专为 Claude 等编码 AI 代理设计的技能集合，旨在解决 AI 理解偏差问题。通过 Shell 脚本安装，提供 /grill-me 等命令帮助用户明确需求，并支持自定义工作流（如问题跟踪器配置）。它强调技能的模块化和可组合性，帮助工程师进行高效、精准的‘真实工程’开发。 |

[查看完整数据](api/github/2026-06-21.json)
<!-- END GITHUB TRENDING -->




