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

**最后更新**: 2026-04-22 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Code search MCP for Claude Code. Make entire codeb... | TypeScript | 7.5k | 873 | Claude Context 是一个 MCP 插件，通过语义搜索将整个代码库转化为 AI 编码代理的上下文。它利用向量数据库高效检索相关代码，避免了加载整个目录的高昂成本，专为 Claude Code 等工具设计。 |
| 2 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | FinceptTerminal is a modern finance application of... | Python | 13.0k | 1.7k | FinceptTerminal 是一款基于 C++20 和 Qt6 的原生桌面金融终端，集成 Python 进行高级分析。它提供 CFA 级财务建模、37 个 AI 交易代理、100+ 数据源接入、实时交易（16 个经纪商）以及 QuantLib 量化套件。支持本地 LLM，具备节点编辑器和全球情报功能，适合专业量化交易与投资研究。 |
| 3 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 51.5k | 449 | 这是一个基于 TypeScript 的实时全球情报仪表板。利用 AI 聚合 500+ 新闻源，提供 3D/2D 地图可视化、地缘政治监控和金融雷达。支持多站点变体和本地 AI 运行，并可通过 Tauri 2 打包为原生桌面应用。 |
| 4 | [langfuse/langfuse](https://github.com/langfuse/langfuse) | 🪢 Open source LLM engineering platform: LLM Obser... | TypeScript | 25.6k | 160 | Langfuse 是一个开源的 LLM 工程平台，支持自托管。它提供 LLM 可观测性、提示词管理、评估、数据集和游乐场等功能，帮助团队协作开发、监控和调试 AI 应用。 |
| 5 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Shannon Lite is an autonomous, white-box AI pentes... | TypeScript | 39.6k | 346 | Shannon 是 Keygraph 开发的自主 AI 白盒渗透测试工具。它通过分析源代码识别攻击向量，并利用浏览器自动化和命令行工具执行真实漏洞利用（如注入、XSS、认证绕过）。它生成包含可重现 PoC 的报告，旨在填补代码发布前的安全测试空白，实现持续自动化安全检测。 |
| 6 | [open-metadata/OpenMetadata](https://github.com/open-metadata/OpenMetadata) | OpenMetadata is a unified metadata platform for da... | TypeScript | 12.1k | 609 | OpenMetadata 是一个统一的数据元数据平台，专注于数据发现、可观测性和治理。它通过中心化存储库、深度列级血缘和团队协作功能，帮助用户管理数据资产。项目支持 84+ 种数据源连接器，提供元数据架构、存储库、API 和摄取框架，旨在解锁数据价值。 |
| 7 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 49.4k | 551 | π RuView 是一个基于 Rust 的 WiFi 传感平台，利用 ESP32 采集信道状态信息（CSI），无需摄像头即可实现通过墙壁的人体姿态估计、生命体征监测及活动识别。它运行在边缘硬件上，支持本地脉冲神经网络学习，适用于智能家居安防、生命体征监测及环境感知。 |
| 8 | [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) | "RAG-Anything: All-in-One RAG Framework"... | Python | 17.5k | 770 | RAG-Anything 是一个基于 LightRAG 的全栈多模态 RAG 框架。它支持文本、图像、表格及公式的无缝处理，集成了 VLM 增强查询与上下文配置模块。该系统旨在解决传统 RAG 处理非文本元素的局限性，提供统一的文档检索与分析能力。 |
| 9 | [sansan0/TrendRadar](https://github.com/sansan0/TrendRadar) | ⭐AI-driven public opinion & trend monitor with mul... | Python | 54.4k | 932 | TrendRadar 是一款基于 Python 的 AI 舆情监控助手。它聚合多平台热点与 RSS，利用 AI 智能筛选、翻译并生成分析简报。支持 MCP 架构接入，可进行自然语言对话分析。支持 Docker 部署，数据自持，并集成多种消息推送渠道，有效解决信息过载问题。 |
| 10 | [AIDC-AI/Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) | 🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video En... | Python | 5.5k | 237 | Pixelle-Video 是一个基于 Python 的 AI 全自动短视频生成引擎。它集成了大语言模型（LLM）用于文案创作、TTS 引擎用于语音合成以及 ComfyUI 用于图像生成。用户通过 Web 界面配置 API 密钥，即可一键生成包含解说、背景音乐和配图的短视频，支持本地和云端部署。 |
| 11 | [Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool) | ALL IN ONE Hacking Tool For Hackers... | Python | 59.6k | 720 | 这是一个全功能的黑客工具箱，包含185+个工具，涵盖信息收集、Web攻击、后渗透等20个类别。支持Python 3.10+，具备交互式菜单、搜索过滤、批量安装及智能更新功能，旨在为黑客提供一站式操作体验。 |
| 12 | [vercel-labs/skills](https://github.com/vercel-labs/skills) | The open agent skills tool - npx skills... | TypeScript | 15.5k | 317 | 这是一个用于安装和管理 AI 代理技能的命令行工具。它支持多种 AI 代理（如 Claude Code、Cursor 等），允许用户通过 GitHub、GitLab 或本地路径安装技能。工具提供了灵活的安装选项，包括全局安装、指定代理、非交互模式等，旨在简化 AI 助手的配置流程，提升开发效率。 |

[查看完整数据](api/github/2026-04-22.json)
<!-- END GITHUB TRENDING -->




