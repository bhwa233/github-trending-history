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

**最后更新**: 2026-07-22 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 68.9k | 4.1k | 这是一个实时全球情报仪表盘，集成了AI驱动的新闻聚合、地缘政治监控和基础设施跟踪。它支持双地图引擎（3D地球与平面地图），提供国家不稳定指数（CII）和金融雷达，支持本地AI运行，并支持多语言和桌面应用，适合需要全球态势感知的用户。 |
| 2 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 83.8k | 741 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 采集信道状态信息（CSI），通过物理信号分析实现无视频、无穿戴设备的实时空间感知。它能穿透墙壁检测人体存在、呼吸心率、活动状态及睡眠质量，并原生支持 Home Assistant、Apple Home、Google Home 和 Amazon Alexa 等主流智能家居生态。 |
| 3 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | A skill for your coding agent to stop it from bury... | Python | 8.2k | 1.7k | 这是一个专为 ADHD 用户设计的编码助手技能，旨在解决 AI 回答冗长、隐藏步骤的问题。它强制 AI 首先采取行动，对多步骤任务进行编号，提供具体时间估算，并抑制离题内容，确保输出简洁、直接且易于理解。 |
| 4 | [schollz/croc](https://github.com/schollz/croc) | Easily and securely send things from one computer ... | Go | 37.6k | 739 | croc 是一款基于 Go 的跨平台命令行文件传输工具，允许任意两台计算机通过中继安全传输文件。它支持端到端加密、断点续传、无需本地服务器或端口转发，兼容 IPv6 和代理，使用简单便捷。 |
| 5 | [likec4/likec4](https://github.com/likec4/likec4) | Visualize, collaborate, and evolve the software ar... | TypeScript | 4.3k | 80 | LikeC4 是一个基于 TypeScript 的软件架构建模语言，灵感源自 C4 模型。它允许用户定义架构模型并自动生成实时、更新的图表。项目提供灵活的自定义选项，支持 CLI 工具，旨在帮助团队可视化、协作并演进软件架构。 |
| 6 | [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) | Original Apollo 11 Guidance Computer (AGC) source ... | Assembly | 70.6k | 768 | 该项目包含阿波罗11号原始的指令计算机（AGC）源代码，涵盖指令模块和登月模块。代码使用汇编语言编写，处于公共领域，旨在保存历史并允许社区贡献修正。 |
| 7 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 45.7k | 557 | Voicebox 是一个本地优先的开源 AI 声音工作室。它支持零样本语音克隆、23种语言的语音生成（基于7种TTS引擎），并提供全局听写和表情控制功能。它完全在本地运行，保护隐私，是 ElevenLabs 和 WisprFlow 的免费替代方案。 |
| 8 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free MIT AI gateway: one endpoi... | TypeScript | 25.2k | 1.7k | OmniRoute 是一个免费的 MIT AI 网关，聚合 268+ 提供商及 500+ 模型。支持自动回退、零配置及令牌压缩，显著降低成本。兼容 Claude Code、Cursor 等主流工具，提供多语言界面及桌面应用，由 500+ 贡献者维护。 |
| 9 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 32.6k | 137 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，利用专用分词器将OHLCV数据量化为离散标记，并通过自回归Transformer进行预训练。项目支持多种模型规模，可用于金融预测等量化任务。 |
| 10 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | A curated list of awesome Claude Skills, resources... | Python | 68.8k | 163 | 这是一个精选的 Claude Skills 列表，包含 1000+ 个生产就绪的技能和插件。它支持 Claude.ai、Claude Code 以及 Cursor、Codex 等编码代理。项目通过 Composio 插件实现了与 500+ 个应用的连接，允许 Claude 执行发送邮件、创建问题等真实操作，涵盖文档处理、数据分析、自动化等多种场景。 |
| 11 | [oblien/openship](https://github.com/oblien/openship) | Self-hosted deployment platform... | TypeScript | 7.3k | 1.3k | OpenShip 是一个开源的自托管部署平台，支持内置 CI/CD。它提供桌面应用和 CLI 两种使用方式，允许用户通过 SSH 或服务模式管理服务器、部署容器和基础设施。适合个人开发者使用桌面工具，也适合团队通过 CLI 在服务器上运行。 |
| 12 | [agegr/pi-web](https://github.com/agegr/pi-web) | Web UI for the pi coding agent... | TypeScript | 2.1k | 314 | 这是一个为 pi coding agent 提供的本地 Web UI。它读取本地会话文件，提供浏览器工作区，支持会话浏览、实时聊天、模型配置、技能管理及项目文件预览。支持 Git 分支切换，可查看上下文使用情况和成本。相比 CLI，它提供了更直观的界面来管理 AI 会话和代码上下文。 |
| 13 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 42.2k | 652 | 这是一个旨在弥合学生使用AI工具与专业使用之间差距的全面自学课程。包含503个课程、20个阶段，涵盖Python、TypeScript、Rust和Julia。课程从线性代数到自主蜂群，每个阶段都从零构建算法（如反向传播、注意力机制），并产出可重用工件。这是一个免费开源的MIT项目，强调通过亲自动手构建来深入理解AI底层原理。 |
| 14 | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Local-first code intelligence graph for MCP and CL... | Python | 25.3k | 882 | 这是一个本地优先的代码智能图项目，旨在解决 AI 编码工具在审查大代码库时浪费 Token 的问题。它利用 Tree-sitter 构建代码结构映射，通过 MCP 协议为 AI 提供精确的上下文，实现增量跟踪和上下文减少。支持多种 AI 工具的自动配置和集成。 |
| 15 | [dreamhunter2333/cloudflare_temp_email](https://github.com/dreamhunter2333/cloudflare_temp_email) | CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件... | TypeScript | 10.8k | 68 | 这是一个基于 Cloudflare 免费服务构建的完整临时邮箱系统。支持收发邮件、附件、DKIM 验证及 AI 验证码提取。后端使用 TypeScript + Cloudflare Workers，前端为 Vue 3，数据库采用 D1。具备用户管理、Admin 控制台、多语言、Telegram Bot 推送及 Agent 友好等特性，支持移动端 CloudMail 客户端管理。 |
| 16 | [DioxusLabs/dioxus](https://github.com/DioxusLabs/dioxus) | Fullstack app framework for web, desktop, and mobi... | Rust | 38.0k | 420 | Dioxus 是一个基于 Rust 的全栈应用框架，支持 Web、桌面和移动端。它提供零配置、热重载和基于信号的状态管理。集成了 Server Functions 和 Axum 以实现强大的后端功能，并支持多种渲染器。 |
| 17 | [hyprwm/Hyprland](https://github.com/hyprwm/Hyprland) | Hyprland is an independent, highly customizable, d... | C++ | 37.3k | 356 | Hyprland 是一个基于 C++ 编写的独立、高度可定制的动态平铺 Wayland 合成器。它拥有丰富的视觉效果、强大的插件系统、 tearing 支持以及即时配置重载功能，旨在提供比其他合成器更好的用户体验和性能。 |
| 18 | [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) | Empowering everyone to host fast and efficient Min... | Rust | 8.4k | 108 | Pumpkin 是一个用 Rust 编写的 Minecraft 服务器，旨在提供高性能和可定制的游戏体验。它支持 Java 和 Bedrock 版本，具备多线程优化、安全防护、插件系统以及完整的游戏机制（如红石、实体、玩家交互等）。项目目前处于开发中，致力于成为高效且灵活的服务器解决方案。 |
| 19 | [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | Structured Outputs... | Python | 15.1k | 364 | Outlines 是一个 Python 库，旨在为 LLM 提供结构化输出。它通过在生成过程中直接约束模型输出，确保数据符合 JSON、XML 或 Pydantic 模型等特定模式。支持多种模型提供商，无需事后解析，简化了复杂 AI 应用的开发。 |

[查看完整数据](api/github/2026-07-22.json)
<!-- END GITHUB TRENDING -->




