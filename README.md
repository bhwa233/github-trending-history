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

**最后更新**: 2026-05-14 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 55.9k | 1.7k | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 采集信道状态信息（CSI），将 WiFi 信号转化为实时空间智能。它能在无摄像头、无穿戴设备的情况下，穿透墙壁检测人体存在、生命体征（呼吸/心率）、活动识别及环境映射。项目依赖 RuVector 和 Cognitum Seed，运行于边缘硬件。 |
| 2 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 7.7k | 3.3k | OpenHuman 是一个基于 Rust 开发的个人 AI 智能体桌面应用。它提供极简 UI 和桌面吉祥物，支持接入 118+ 第三方服务。核心特点是本地优先，利用 SQLite 存储记忆树，自动抓取数据，无需复杂配置，旨在成为用户日常生活中的智能助手。 |
| 3 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | #1 Persistent memory for AI coding agents based on... | TypeScript | 9.0k | 1.9k | 这是一个为 AI 编码代理提供持久化内存的 TypeScript 项目。它基于 iii 引擎，通过 MCP、钩子或 REST API 与 Claude Code、Cursor 等多种代理集成。项目解决了内置记忆上限和过时问题，能自动捕获代理行为、压缩记忆并在新会话中注入上下文，实现跨会话的知识共享。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 191.2k | 1.8k | Superpowers 是一个为编码代理设计的软件开发方法论框架。它通过一系列可组合技能，引导代理在编码前确认需求、展示设计细节，并制定包含 TDD、YAGNI 和 DRY 原则的实现计划。随后，代理会自动执行子代理驱动的开发流程，实现自主编码。 |
| 5 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | A set of ready to use Agent Skills for research, s... | Python | 21.8k | 654 | 这是一个提供135+个科学技能的开源库，旨在将AI代理转化为专业的科研助手。项目支持开放Agent Skills标准，兼容多种AI工具，涵盖生物信息学、化学信息学、蛋白质组学等领域，集成了丰富的科学数据库和工具，支持本地BYOK运行。 |
| 6 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 24.8k | 363 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散 Token，再通过自回归 Transformer 进行预训练。项目提供多个版本模型，支持预测和量化任务，已获 AAAI 2026 录用。 |
| 7 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 38.9k | 83 | Roboflow Supervision 是一个 Python 计算机视觉工具包，提供从数据加载到实时区域计数的构建模块。它支持模型无关设计，可与主流深度学习库（如 Ultralytics、Transformers）无缝集成。此外，它还提供高度可定制的标注器和数据集处理工具，帮助开发者专注于模型应用开发，无需重复造轮子。 |
| 8 | [influxdata/telegraf](https://github.com/influxdata/telegraf) | Agent for collecting, processing, aggregating, and... | Go | 17.2k | 215 | Telegraf 是一个用 Go 语言编写的开源数据收集代理，支持从系统、日志、消息传递等多种来源收集、处理和写入指标、日志及任意数据。它拥有超过 300 个插件，支持用户自定义代码，并编译为无依赖的静态二进制文件，广泛用于系统监控和可观测性场景。 |
| 9 | [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | Lightning-Fast, On-Device, Multilingual TTS — runn... | Swift | 5.3k | 1.1k | Supertonic 是一个基于 Swift 和 ONNX Runtime 的超快、本地化多语言文本转语音系统。它完全在设备上运行，无需云端，保护隐私。支持 31 种语言和多种声音风格，提供 Python 和 Flutter SDK，适合离线语音合成场景。 |
| 10 | [Genymobile/scrcpy](https://github.com/Genymobile/scrcpy) | Display and control your Android device... | C | 141.3k | 851 | scrcpy 是一款开源工具，通过 USB 或 TCP/IP 镜像 Android 设备屏幕，并使用电脑键盘和鼠标进行控制。它轻量、高性能，支持 30-120fps，延迟低至 35-70ms，无需 root 或安装应用，支持 Linux、Windows 和 macOS。 |
| 11 | [NVIDIA-AI-Blueprints/video-search-and-summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) | Suite of reference architectures for building GPU-... | Python | 823 | 62 | NVIDIA 提供的用于构建 GPU 加速视觉代理和视频分析应用的参考架构套件。它结合了加速视觉微服务、VLM 和 LLM，支持实时视频智能、下游分析和代理工作流，实现自然语言视频搜索、问答和总结等功能。 |
| 12 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 10.8k | 1.4k | CloakBrowser 是一个通过所有机器人检测测试的隐身 Chromium 浏览器。它通过在 C++ 源代码级别修改 49 个指纹（如 Canvas、WebGL 等），实现了对 Playwright 和 Puppeteer 的零配置替代。支持 Python 和 JavaScript，能轻松绕过 Cloudflare Turnstile 和 reCAPTCHA v3，非常适合需要通过反爬虫检测的自动化任务。 |
| 13 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 82.2k | 3.0k | 这是一个为 Claude Code 等编码代理设计的技能集，旨在解决 AI 编程中常见的“需求理解偏差”问题。它包含一系列可组合的小型技能，如 /grill-me（深度提问）和 /triage（问题分类），帮助工程师在开发过程中保持控制权，确保 AI 输出符合预期。项目基于作者多年的工程经验，支持快速安装和自定义。 |
| 14 | [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Drive... | Python | 99.5k | 1.2k | 这是一个 Python 工具包，旨在支持 Spec-Driven Development（规范驱动开发）。它通过 CLI 工具与 AI 编码代理集成，将产品规范转化为可执行的代码实现，帮助开发者专注于场景和可预测结果，从而提升软件质量和开发效率。 |
| 15 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 96.7k | 915 | gstack 是一套 TypeScript 工具集，旨在将 Claude Code 转化为虚拟工程团队。它包含 23 个有偏见的工具，分别扮演 CEO、设计经理、工程经理、发布经理、文档工程师和 QA 角色，帮助开发者利用 AI 大幅提升个人生产力与交付速度。 |

[查看完整数据](api/github/2026-05-14.json)
<!-- END GITHUB TRENDING -->




