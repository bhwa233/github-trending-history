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

**最后更新**: 2026-09-12 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 29.9k | 2.3k | 这是一个基于浏览器的间谍卫星模拟器，利用真实数据在照片级真实感的3D地球上进行实时空间情报展示。它集成了飞机、船只、卫星、地震、交通和公共摄像头等实时数据，支持语音控制和点击跟踪功能。项目无需API密钥即可本地运行，代码开源可扩展。 |
| 2 | [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | Open-source AI sales OS — self-hosted CRM with nat... | TypeScript | 1.8k | 504 | 这是一个开源的AI销售操作系统，提供自托管CRM功能。内置原生AI代理，可自动处理WhatsApp上的客户接待、筛选和销售。作为Kommo等商业软件的开源替代品，它支持多租户、MCP协议及数据隐私合规，无月费限制，数据完全由用户掌控。 |
| 3 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Extracted system prompts from Anthropic - Claude F... | JavaScript | 65.4k | 217 | 该项目收集并整理了Anthropic、OpenAI、Google、xAI等主流大模型的泄露系统提示词。内容涵盖Claude、ChatGPT、Gemini、Grok等模型的详细指令、工具和技能。项目定期更新，被媒体用于分析AI行为背后的规则，适合研究AI模型底层逻辑和隐藏指令。 |
| 4 | [nab138/iloader](https://github.com/nab138/iloader) | User friendly sideloader... | TypeScript | 3.1k | 209 | 这是一个用户友好的 iOS 应用侧载工具，支持 Windows、macOS 和 Linux。它允许用户轻松安装 SideStore、导入任意 IPA，并自动处理配对文件和证书管理。具备智能错误提示功能，旨在简化 iOS 开发和测试流程。 |
| 5 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 33.2k | 65 | 该项目旨在绕过网络审查，特别是针对 Discord 和 YouTube 等服务。它利用 WinDivert 技术进行流量拦截和过滤，通过批处理脚本实现。用户需启用安全 DNS 并注意杀毒软件的误报。 |
| 6 | [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | 🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接... | Python | 5.1k | 262 | 这是一个专为数学建模竞赛设计的自动化 Agent 系统。通过多 Agent 协作（建模、代码、论文手）和 LiteLLM 接入多种大模型，自动完成问题分析、建模、代码编写及 Typst 论文排版。支持本地/云端代码解释器、RAG 知识库检索和 HIL 人机协作，内置多种竞赛模板，旨在将比赛时间从3天缩短至1小时。 |
| 7 | [Sonarr/Sonarr](https://github.com/Sonarr/Sonarr) | Smart PVR for newsgroup and bittorrent users.... | C# | 15.9k | 227 | Sonarr 是一款面向 Usenet 和 BitTorrent 用户的智能 PVR。它能监控 RSS 源获取新剧集，自动抓取、排序和重命名文件。支持自动升级画质、处理下载失败，并深度集成 SABnzbd、NZBGet、Kodi 和 Plex 等工具。支持多平台，界面美观，功能全面。 |
| 8 | [alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot) | Open Source AI trading agent that operates autonom... | TypeScript | 2.5k | 376 | Clodds 是一个基于 Claude 的开源 AI 交易代理，支持预测市场、加密货币现货、期货及 Solana DEX。它集成了 1000+ 市场，具备鲸鱼追踪、套利检测和 DCA 机器人等 118+ 策略，可跨 21 个平台通过自然语言指令自动交易和挖矿。项目自托管，专为 Solana Colosseum Hackathon 打造，适合需要自动化交易和风险管理的用户。 |
| 9 | [yuliskov/SmartTube](https://github.com/yuliskov/SmartTube) | Browse media content with your own rules on Androi... | Java | 33.2k | 136 | SmartTube 是一款专为 Android TV 优化的开源媒体客户端，支持在无 Google 服务环境下浏览和播放 YouTube 内容。具备 SponsorBlock、8K/60fps/HDR 播放、直播聊天及自定义界面等特性。项目近期修复了安全漏洞，目前支持多种电视设备。 |
| 10 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ AI Agents, Agent Skills and RAG Apps - Free a... | Python | 137.6k | 230 | 该项目汇集了100+个开源AI代理、技能和RAG应用，支持Claude、GPT等多种大模型。包含“Project Graveyard”等实用工具，提供即用型模板和教程，帮助开发者快速构建、测试和部署AI应用。 |
| 11 | [p1neappleXpress/OpenFlux](https://github.com/p1neappleXpress/OpenFlux) | Network stack research tool. TCP tunnel with plugg... | Go | 1.4k | 355 | 这是一个基于 Go 语言的网络堆栈研究工具，提供可插拔传输的 TCP 隧道功能。支持 Android 和 iOS 客户端及 Linux VPS 出口节点，目前支持 Yandex 和 Max 两种传输协议。项目声明非商业用途，仅供研究网络架构使用。 |
| 12 | [armory3d/armorpaint](https://github.com/armory3d/armorpaint) | Graphics Creation Tools... | C | 4.9k | 237 | ArmorPaint 是一款基于 C 语言开发的 3D PBR 纹理绘画工具。支持跨平台（Windows/Linux/macOS/Android/iOS/WASM），面向开发者开放源码。项目通过开源开发和付费二进制分发支持，旨在提供高性能的 3D 纹理创作体验。 |
| 13 | [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | claude-red is a curated library of offensive secur... | Python | 3.6k | 113 | 这是一个针对 Claude AI 的攻击性安全技能库，提供结构化的 SKILL.md 文件，旨在为 Claude 注入 SQL 注入、EDR 绕过等特定攻击面的专家级方法论。支持按需加载，适用于红队演练、漏洞赏金及安全研究。 |
| 14 | [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | YuE2: frontier music generation with symbolic plan... | Python | 7.3k | 210 | YuE2 是一个前沿的音乐生成模型，统一了符号和音频生成。它通过符号规划实现白盒生成，允许在渲染前编辑旋律和和弦。支持零样本翻唱和基于代理的对话式音乐编辑，在 WildSongBench 上达到与 Suno v5/v6 竞争的质量水平。 |
| 15 | [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Worktrunk is a CLI for Git worktree management, de... | Rust | 7.2k | 54 | Worktrunk 是一个用 Rust 编写的 Git worktree 管理命令行工具，专为并行 AI agent 工作流设计。它通过简化创建、切换和清理 worktree 的操作，让多任务开发变得像管理分支一样轻松。工具支持通过分支名自动计算路径，并集成了启动 AI agent 的便捷命令，显著提升了开发效率。 |
| 16 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Fully autonomous AI Agents system capable of perfo... | Go | 23.5k | 189 | 这是一个基于 Go 语言开发的完全自主 AI 代理系统，旨在执行复杂的渗透测试任务。 |

[查看完整数据](api/github/2026-09-12.json)
<!-- END GITHUB TRENDING -->




