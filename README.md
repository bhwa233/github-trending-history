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

**最后更新**: 2026-08-03 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 27.1k | 1.1k | AirLLM 是一个旨在大幅降低大语言模型推理显存占用的库。它允许在无需量化、蒸馏或剪枝的情况下，在单张 4GB 显存 GPU 上运行 70B 模型。通过针对稀疏 MoE 模型的专家流式加载技术，支持 Llama 3.1 405B、DeepSeek-V3 等超大规模模型。 |
| 2 | [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | Reverse Engineering / Authorized Penetration Testi... | PowerShell | 15.7k | 2.4k | 这是一个专为 AI 编码助手（如 Claude Code）设计的逆向工程技能路由包。它通过 AI 驱动的路由和按需工具链自举，解决了 AI 面对安全任务时不知道使用何种工具（如 IDA、Frida、BurpSuite）的问题。项目支持 APK、二进制文件、JS 加密及 CTF 挑战，提供可重复的工作流和自动化的经验库，旨在提升安全研究的效率与准确性。 |
| 3 | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Fast Rust library for PDF inspection, classificati... | Rust | 8.1k | 1.7k | 这是一个基于 Rust 的高性能 PDF 检查与提取库。它能智能区分扫描版与文本版 PDF，无需 OCR 即可快速提取文本并转换为 Markdown，支持表格检测、多列布局及 CID 字体解析。项目轻量级，支持 WebAssembly，适合需要本地化、低延迟处理 PDF 的场景。 |
| 4 | [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | DeepSeek-native AI coding agent for your terminal.... | Go | 29.9k | 883 | 这是一个专为终端设计的 DeepSeek 原生 AI 编码代理。项目采用 Go 语言开发，支持配置驱动和插件化架构，能够与 OpenAI 兼容的模型配合使用。核心优化了前缀缓存稳定性，旨在降低长会话的 Token 成本。提供单静态二进制分发，支持跨平台编译，适合需要高效、低成本 AI 编程辅助的开发者。 |
| 5 | [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TencentDB Agent Memory is a team-level memory hub ... | TypeScript | 12.1k | 1.1k | 这是一个面向 AI Agent 团队的记忆中心，旨在减少重复工作。它将对话、文档和代码转化为四种可重用资产（聊天记忆、技能、LLM-Wiki、代码图），支持跨框架共享。通过积累和传递团队经验，帮助新 Agent 快速上手，提升协作效率和结果稳定性。 |
| 6 | [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 Weeks, 24 Lessons, AI for All!... | Jupyter Notebook | 60.7k | 1.9k | 这是一个由微软提供的面向初学者的AI全栈课程，包含12周24课的Jupyter Notebook内容。课程涵盖AI基础、TensorFlow和PyTorch等工具，包含实践课程、测验和伦理讨论，支持50多种语言，适合零基础学习者系统掌握人工智能知识。 |
| 7 | [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 21 Lessons, Get Started Building with Generative A... | Jupyter Notebook | 115.5k | 775 | 这是一个由 Microsoft Cloud Advocates 推出的生成式 AI 入门课程，包含 21 个 Jupyter Notebook 教程。课程涵盖从基础概念到实际应用构建的全方位内容，支持 50 多种语言，旨在帮助初学者快速掌握生成式 AI 的开发技能。 |
| 8 | [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) | Learn how to design large-scale systems. Prep for ... | Python | 360.5k | 237 | 这是一个开源的系统设计学习指南，旨在帮助工程师掌握大型可扩展系统的设计方法。项目包含面试准备资料、常见系统设计问题及解决方案、以及 Anki 闪卡用于间隔重复记忆。内容持续更新，欢迎社区贡献。 |
| 9 | [antirez/ds4](https://github.com/antirez/ds4) | DeepSeek 4 Flash and PRO local inference engine fo... | C | 20.3k | 384 | DwarfStar 是一个专为 DeepSeek V4 Flash 优化的本地推理引擎，支持 Metal、CUDA 和 ROCm。它包含模型加载、HTTP 服务器及编码代理等完整功能，支持多 GPU 和 SSD 流式传输，旨在让用户在消费级硬件上高效运行 DeepSeek V4 Flash、GLM 5.2 等强大模型。 |
| 10 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 35.8k | 200 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理高噪声的金融数据设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散标记，再通过自回归 Transformer 进行预训练。项目提供多种模型规模，支持 BTC/USDT 等交易对的 24 小时预测，并已接受 AAAI 2026 会议。 |
| 11 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 65.7k | 1.1k | 这是一个为 AI Agent 提供全网浏览能力的 Python 工具。它通过 CLI 一键安装，支持 Twitter、Reddit、YouTube、B站、小红书等平台，无需 API 密钥，完全免费且隐私安全。项目具备自动切换失效渠道的机制，兼容所有命令行 Agent，解决了 Agent 无法直接访问互联网的痛点。 |
| 12 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use Claude Code, Codex and Pi for free from your t... | Python | 44.0k | 278 | 这是一个开源项目，允许用户通过本地代理免费使用 Claude Code、Codex 和 Pi 等编程助手。它提供了一个本地管理界面，支持切换31种云和本地模型，支持流式传输、工具调用和图像输入。项目支持在终端、IDE、桌面应用中使用，并与 VS Code、JetBrains 等集成，甚至支持 Discord 和 Telegram 的语音转录功能。 |
| 13 | [iv-org/invidious](https://github.com/iv-org/invidious) | Invidious is an alternative front-end to YouTube... | Crystal | 22.3k | 402 | Invidious 是一个基于 Crystal 语言开发的 YouTube 替代前端。它完全去除了广告和追踪，支持无需 JavaScript 访问，提供深色/浅色主题、音频模式及多语言支持。项目允许用户导入导出订阅数据，并支持通过浏览器扩展重定向 YouTube 链接，旨在提供无隐私泄露的 YouTube 观看体验。 |
| 14 | [livekit/agents](https://github.com/livekit/agents) | A framework for building realtime voice AI agents ... | Python | 12.0k | 148 | LiveKit Agents 是一个用于构建实时语音 AI 代理的 Python 框架。它支持多模态交互，提供灵活的 STT/LLM/TTS 集成，内置任务调度和语义回合检测。支持 WebRTC、电话集成及 MCP 协议，并包含完整的开源生态和测试框架，适合构建复杂的对话式 AI 应用。 |
| 15 | [usekaneo/kaneo](https://github.com/usekaneo/kaneo) | 🎯 All you need. Nothing you don't. Open source pr... | TypeScript | 6.9k | 665 | Kaneo 是一款极简主义的开源项目管理工具，主张“少即是多”。它专注于速度、隐私和干净的界面，支持自托管，旨在消除臃肿功能，让团队专注于核心工作。 |
| 16 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 48.7k | 412 | Voicebox 是一个本地运行的 AI 声音工作室，开源免费。它支持零样本声音克隆、23种语言及7种TTS引擎，提供丰富的语音合成与表情控制功能。用户可以在本地生成语音、听写文本，并保护隐私，是 ElevenLabs 和 WisprFlow 的强大替代品。 |

[查看完整数据](api/github/2026-08-03.json)
<!-- END GITHUB TRENDING -->




