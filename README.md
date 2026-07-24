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

**最后更新**: 2026-07-23 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [block/buzz](https://github.com/block/buzz) | A hive mind communication platform... | Rust | 6.8k | 2.2k | Buzz 是一个基于 Rust 的自托管工作空间，允许人类与 AI 代理在同一房间协作。它采用 Nostr 协议作为底层事件日志，支持代理执行代码审查、工作流和 Git 操作等任务。项目强调基于身份的权限管理和统一的审计跟踪，旨在打造一个人类与智能体共同构建的“蜂巢思维”平台。 |
| 2 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 71.5k | 3.2k | 这是一个基于 TypeScript 的实时全球情报仪表板，集成了 AI 驱动的新闻聚合、地缘政治监控和国家不稳定指数评估。支持 3D 地球与 WebGL 平面地图可视化，内置金融雷达与本地 AI（Ollama）引擎，无需 API 密钥。提供跨平台桌面应用（Tauri 2）及多站点变体，适合需要全球态势感知的专业用户。 |
| 3 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 33.0k | 401 | Kronos 是首个开源的金融蜡烛图基础模型，在45个全球交易所数据上训练。它采用两阶段框架，先用专用分词器量化OHLCV数据，再用自回归Transformer处理，专为处理金融数据的高噪声特性设计，支持多种量化任务。 |
| 4 | [Pumpkin-MC/Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) | Empowering everyone to host fast and efficient Min... | Rust | 8.9k | 565 | Pumpkin 是一个用 Rust 编写的 Minecraft 服务器，旨在提供高性能和可定制的体验。它支持 Java 与 Bedrock 版本，包含完整的世界生成、实体 AI、红石物理和插件系统。项目通过多线程优化性能，并致力于实现与原版 Vanilla 机制的兼容性。 |
| 5 | [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | The best browser for both you and your AI agents w... | JavaScript | 1.6k | 247 | 专为用户与 AI 代理并行工作设计的浏览器。通过独立的‘空间’运行任务，继承用户真实登录状态，无需额外浏览器实例，解决自动化工具登录不互通痛点。 |
| 6 | [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) | Original Apollo 11 Guidance Computer (AGC) source ... | Assembly | 71.1k | 592 | 该项目收录了阿波罗11号任务中指令舱和登月舱的原始阿波罗制导计算机(AGC)源代码。代码使用汇编语言编写，包含Comanche055和Luminary099两个核心程序。项目旨在保存历史技术资料，并欢迎社区贡献纠错，适合航天历史研究者和汇编语言开发者参考。 |
| 7 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Never stop coding. Free MIT AI gateway: one endpoi... | TypeScript | 27.1k | 1.9k | 这是一个 MIT 许可的开源 AI 网关，聚合了 290+ 提供商和 500+ 模型。它支持 43 种语言，提供无需密钥的开箱即用体验，内置智能路由和压缩算法，帮助用户最大化利用免费额度。 |
| 8 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | A curated list of awesome Claude Skills, resources... | Python | 69.4k | 636 | 这是一个精选的 Claude Skills 资源库，包含 1000+ 生产就绪的技能和插件。它支持 Claude.ai、Claude Code 及多种编码代理，帮助用户实现跨 500+ 应用（如邮件、Slack）的自动化操作，提升 AI 工作流效率。 |
| 9 | [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | A collection of agent skills for CAD, robotics and... | JavaScript | 10.0k | 230 | 这是一个面向CAD、机器人和硬件设计的代理技能库。它提供从文本或图像生成CAD模型、查看本地文件、查找标准部件、生成机器人描述文件（URDF/SDF）、切片G-code以及与Bambu Labs打印机交互等技能，旨在简化从设计到制造的自动化工作流。 |
| 10 | [agegr/pi-web](https://github.com/agegr/pi-web) | Web UI for the pi coding agent... | TypeScript | 2.3k | 315 | 本项目为 pi coding agent 提供本地 Web UI 界面。它读取本地会话文件，提供浏览器工作区，支持会话浏览、实时聊天、模型配置及文件预览。核心功能包括跨分支工作、恢复历史对话、侧边栏文件浏览及会话状态监控。支持通过 npx 快速启动，并兼容 HTTP 代理设置。 |
| 11 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Open-source & free — Battle-tested at Alibaba's sc... | Go | 11.5k | 180 | 阿里巴巴开源的AI代码审查CLI工具，基于Go开发。采用确定性管道+LLM Agent混合架构，具备精确的逐行评论能力和内置微调规则集。相比通用Agent，精度更高且Token消耗更少。已通过大规模基准测试验证，能有效提升代码质量。 |
| 12 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 85.2k | 1.7k | RuView 是一个基于 Rust 的 WiFi 传感平台，利用 WiFi 信号（CSI）实现无摄像头、无穿戴设备的实时空间感知。它能穿透墙壁检测人体存在、呼吸心率、活动及睡眠质量，并支持 Home Assistant、Apple Home 等主流智能家居生态集成。 |
| 13 | [likec4/likec4](https://github.com/likec4/likec4) | Visualize, collaborate, and evolve the software ar... | TypeScript | 4.7k | 472 | LikeC4 是一个基于 C4 模型的软件架构建模语言，允许用户从代码生成实时、最新的架构图。它支持自定义和协作，通过 CLI 工具提供灵活的可视化方案，非常适合需要动态文档的团队。 |
| 14 | [Automattic/harper](https://github.com/Automattic/harper) | Offline, privacy-first grammar checker. Fast, open... | Rust | 12.3k | 624 | Harper 是一个由 Rust 编写的离线、隐私优先的英语语法检查器。它旨在解决 Grammarly 和 LanguageTool 的痛点，提供毫秒级的检查速度和极低的内存占用。项目完全开源，支持 WebAssembly，目前仅支持英语，但核心架构可扩展至其他语言。 |
| 15 | [jellyfin/jellyfin](https://github.com/jellyfin/jellyfin) | The Free Software Media System - Server Backend & ... | C# | 54.7k | 66 | Jellyfin 是一个免费开源的媒体系统，提供服务器后端和 API。它是 Emby 和 Plex 的替代品，允许用户管理并流式传输媒体。它移植自 Emby 3.5.2 并使用 .NET 平台，支持跨平台。该项目无付费功能，致力于构建更好的媒体解决方案。 |

[查看完整数据](api/github/2026-07-23.json)
<!-- END GITHUB TRENDING -->




