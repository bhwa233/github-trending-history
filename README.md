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

**最后更新**: 2026-09-11 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | A skill to stop your coding agent from burying the... | Python | 41.8k | 3.5k | 这是一个专为编程助手设计的 ADHD 友型技能，旨在解决 AI 回答啰嗦、隐藏答案的问题。它强制 AI 优先采取行动，对多步骤任务进行编号，去除废话，并提供具体的时间估算和下一步骤，使输出更加直接和高效。 |
| 2 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 27.1k | 3.7k | 这是一个基于浏览器的间谍卫星模拟器，利用真实数据在照片级真实感的 3D 地球上展示全球实时动态。支持语音控制，可追踪航班、船只、卫星及公共摄像头，旨在将公开信号整合为可交互的地理空间情报。 |
| 3 | [nab138/iloader](https://github.com/nab138/iloader) | User friendly sideloader... | TypeScript | 2.9k | 50 | 这是一个用户友好的 iOS 应用侧载工具，支持安装 SideStore、导入任意 IPA 及管理开发证书。它能自动处理配对文件，并提供智能错误建议，帮助用户在电脑上轻松管理 iOS 设备上的应用。 |
| 4 | [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | Open-source AI sales OS — self-hosted CRM with nat... | TypeScript | 1.3k | 152 | 开源 AI 销售操作系统，基于 TypeScript 构建。这是一个自托管 CRM，内置原生 AI 代理处理 WhatsApp 客服与销售。作为 Kommo、Intercom 的开源替代品，它支持多租户、MCP 协议及数据本地化，适合需要通过聊天渠道销售的企业。 |
| 5 | [vastsa/PI-Desktop](https://github.com/vastsa/PI-Desktop) | Local-first AI coding agent desktop: Electron + Ru... | TypeScript | 2.8k | 552 | PI-Desktop 是一个基于 Electron + Rust 的本地优先 AI 编码代理桌面工作区。它允许用户自带模型，管理本地项目，并提供可审计的权限层。支持插件扩展，旨在为 AI 代理提供独立于编辑器的桌面环境，目前处于早期预览阶段。 |
| 6 | [armory3d/armorpaint](https://github.com/armory3d/armorpaint) | Graphics Creation Tools... | C | 4.7k | 350 | ArmorPaint 是一款基于 C 语言开发的 3D PBR 纹理绘制软件。该项目面向开发者，旨在通过开源代码实现跨平台（Windows、Linux、macOS、Android、iOS、WASM）支持，提供详细的编译指南。 |
| 7 | [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | Open Source AI trading agent that operates autonom... | TypeScript | 2.2k | 626 | Clodds 是一个基于 Claude 的开源 AI 交易代理，支持预测市场、加密货币和期货交易。它可在 1000+ 市场中自主扫描套利机会并执行交易，支持 Solana 和 EVM 链，具备风险管理、鲸鱼追踪和 DCA 机器人功能。用户可通过自然语言与终端交互，适合需要自动化交易和智能投顾的用户。 |
| 8 | [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | LLM Wiki is a cross-platform desktop application t... | TypeScript | 18.7k | 647 | LLM Wiki 是一款跨平台桌面应用，利用 LLM 自动将文档转化为结构化的相互链接知识库。它支持多格式解析、多模态图像处理及灵活的模型配置，具备知识图谱构建、社区检测、向量搜索和深度研究功能。通过增量摄取和持久化队列，实现个人知识库的自动更新与高效管理。 |
| 9 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 285.4k | 729 | 这是一个基于 Shell 的代理技能框架与软件开发方法论。它通过交互式流程帮助编码代理获取需求、展示设计、制定实现计划（强调 TDD、YAGNI、DRY），并利用子代理进行自主开发。旨在让编码代理具备“超能力”，实现自动化软件构建。 |
| 10 | [Sonarr/Sonarr](https://github.com/Sonarr/Sonarr) | Smart PVR for newsgroup and bittorrent users.... | C# | 15.7k | 191 | Sonarr 是一款面向 Usenet 和 BitTorrent 用户的智能 PVR。它能监控 RSS 源，自动抓取、排序并重命名剧集。支持自动升级画质、处理下载失败，并深度集成 SABnzbd、NZBGet、Kodi 和 Plex。支持多平台，拥有美观的 UI。 |
| 11 | [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | 🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接... | Python | 4.9k | 129 | 专为数学建模设计的自动化 Agent，通过多 Agent 协作（建模、代码、论文）和 RAG 知识库，实现从问题分析、建模、编码到论文生成的全流程自动化。支持多种大模型，内置 17 套 Typst 模板，具备人机协作与容错机制，旨在将建模时间从 3 天缩短至 1 小时。 |
| 12 | [p1neappleXpress/OpenFlux](https://github.com/p1neappleXpress/OpenFlux) | Network stack research tool. TCP tunnel with plugg... | Go | 1.1k | 198 | OpenFlux 是一个基于 Go 的网络栈研究工具，提供带有可插拔传输的 TCP 隧道。支持 Android 和 iOS 客户端，通过 SOCKS5 协议连接，利用 Yandex Docs 或 WebRTC 等方式传输数据。项目包含出口节点，旨在进行网络技术研究。 |
| 13 | [jordan-gibbs/hyperresearch](https://github.com/jordan-gibbs/hyperresearch) | Agent-driven research knowledge base. Agents colle... | Python | 2.6k | 153 | Hyperresearch 是一个基于 Python 的 Agent 驱动研究知识库，将 Claude Code 转化为深度研究代理。它通过 16 步自适应管道收集、搜索并综合网络研究，生成带有完整来源证明的报告。项目具备引用验证、独立性审计和对抗性审查机制，确保研究质量，并支持从多个学术数据库获取数据。 |
| 14 | [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Run parallel research agents with any model... | Rust | 1.3k | 120 | OpenResearch 是一个基于 Rust 的本地优先研究代理工作空间。它将 Claude Code、Codex 或 OpenCode 转换为研究代理，支持并行探索、可重现的实验及自动研究循环。项目强调本地所有权，利用 Git 管理实验变体，并提供灵活的计算后端支持。 |
| 15 | [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Drive... | Python | 135.8k | 1.0k | Spec Kit 是一个开源工具包，旨在帮助开发者使用任何 AI 编码代理进行规范驱动开发（SDD）。它提供了一套现成的流程，允许在编写代码前先定义规范，强调适应性和社区驱动，支持无限扩展，适用于需要高质量软件构建的团队。 |
| 16 | [pascalorg/editor](https://github.com/pascalorg/editor) | Open-source 3D architectural editor with a local C... | TypeScript | 23.6k | 106 | 这是一个基于 React Three Fiber 和 WebGPU 的开源本地优先 3D 建筑编辑器。支持通过 CLI 运行，集成了 MCP 工具，允许 AI 代理（如 Claude）直接操作场景。项目包含家具适配等实用工作流，数据存储在本地 SQLite 数据库中，适合人类和 AI 协同进行建筑设计。 |

[查看完整数据](api/github/2026-09-11.json)
<!-- END GITHUB TRENDING -->




