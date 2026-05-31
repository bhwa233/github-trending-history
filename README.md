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

**最后更新**: 2026-05-30 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 132.3k | 2.5k | Microsoft 开发的轻量级 Python 工具，用于将各种文件和 Office 文档转换为 Markdown。它专注于保留文档结构（如标题、列表、表格），专为 LLM 和文本分析管道设计。支持 PDF、Word、Excel、图像、音频、HTML 等多种格式，输出格式对 LLM 友好且 token 效率高。 |
| 2 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 71.9k | 2.8k | 这是一个基于 Python 的 AI 视频生成工具，采用 MVC 架构。用户只需输入主题，即可自动生成文案、素材、字幕和 BGM，合成高清视频。支持竖屏/横屏、批量生成、自定义样式及多种大模型接入。支持 Web 和 API 界面，部署方式灵活，适合内容创作者快速制作短视频。 |
| 3 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Python | 128.4k | 592 | Claude Code 是 Anthropic 推出的终端智能编码助手，基于 Python 开发。它通过自然语言命令理解代码库，执行常规任务、解释复杂代码及处理 Git 工作流，旨在提升开发效率。支持插件扩展功能，并提供跨平台安装方式。 |
| 4 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 1.5k | 205 | 该项目是 Cursor AI 编辑器的官方插件集合，包含持续学习、团队工作流、代码审查、文档渲染及 SDK 等多种工具。它提供了插件开发规范、脚手架工具以及用于自动化 CI/CD、代码审查和文档管理的实用插件，旨在提升 AI 编程助手的工作效率和团队协作体验。 |
| 5 | [revfactory/harness](https://github.com/revfactory/harness) | A meta-skill that designs domain-specific agent te... | HTML | 4.3k | 55 | Harness 是一个为 Claude Code 设计的团队架构工厂。它利用 Claude Code 的代理团队系统，通过 6 种预定义模式（如流水线、专家池等）自动生成特定领域的代理团队和技能。它位于 L3 元工厂层，旨在将复杂任务分解为协调的团队，适用于需要自动化代理协作和架构设计的场景。 |
| 6 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Compound Engineering plugin for Claude Co... | TypeScript | 18.4k | 349 | 这是一个为 Claude Code、Codex、Cursor 等编辑器设计的官方插件，旨在实现“复合工程”。它通过规划、审查和知识积累等代理技能，优化开发流程，强调80%的时间用于计划与审查，以减少技术债务，让后续工作更轻松。 |
| 7 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 199.3k | 908 | ECC 是一个跨 AI 代理框架（如 Cursor、Claude Code 等）的性能优化系统。它提供了一套完整的工具，包括技能管理、记忆优化、安全扫描和持续学习，旨在通过工作流编排、并行化和上下文管理来提升 AI 开发效率。 |
| 8 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 22.7k | 779 | VoxCPM2 是一个基于扩散自回归架构的 tokenizer-free 文本转语音系统。它支持 30 种语言，具备语音设计、可控克隆和 48kHz 高保真音频输出能力。模型参数量达 2B，支持实时流式传输，能从文本或参考音频中生成自然流畅的语音，适用于多语言语音合成和创意语音设计场景。 |
| 9 | [galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel) | A platform for reproducible world model research a... | Python | 1.5k | 318 | 这是一个用于可复现世界模型研究和评估的 Python 平台。它提供统一的接口，涵盖数据收集、训练和基于模型预测控制的评估三个阶段。内置标准环境和常见基线求解器，支持 LeRobot 数据集，旨在让研究代码专注于模型和目标本身。 |
| 10 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 27.3k | 469 | Project N.O.M.A.D. 是一个离线优先的知识服务器，集成了关键工具、知识和 AI。它通过 Docker 容器化管理资源，提供命令中心 UI，支持在 Debian/Ubuntu 系统上快速部署，适合需要在断网环境下保持信息获取能力的场景。 |
| 11 | [run-llama/liteparse](https://github.com/run-llama/liteparse) | A fast, helpful, and open-source document parser... | Rust | 7.9k | 925 | LiteParse 是一个用 Rust 编写的开源文档解析工具，专注于快速且轻量的本地解析。它提供高质量的空间文本解析（含边界框），支持多种输出格式和多语言（Rust/JS/Python/WASM）。内置 Tesseract OCR，也可接入 HTTP 服务器，适合需要离线处理和结构化数据提取的场景。 |
| 12 | [chen08209/FlClash](https://github.com/chen08209/FlClash) | A multi-platform proxy client based on ClashMeta,s... | Dart | 40.4k | 187 | FlClash 是一个基于 ClashMeta 的开源多平台代理客户端，支持 Android、Windows、macOS 和 Linux。它采用 Material You 设计风格，界面简洁，支持暗黑模式和 WebDAV 数据同步，旨在提供无广告的代理体验。 |
| 13 | [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | A straightforward method for training your LLM, fr... | Jupyter Notebook | 2.2k | 327 | 本项目使用 PyTorch 从头实现 Transformer 模型，涵盖数据准备、模型构建及训练生成全流程。支持在单 GPU 上训练数十亿或数百万参数的 LLM，适合学习大语言模型底层原理。 |
| 14 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 68.9k | 655 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 传感器捕获 WiFi 信道状态信息（CSI），实现穿墙检测、生命体征监测、活动识别和睡眠质量分析。它无需摄像头或可穿戴设备，支持 Home Assistant、Apple Home、Google Home 和 Amazon Alexa 等主流智能家居生态。 |
| 15 | [DataTalksClub/data-engineering-zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | Data Engineering Zoomcamp is a free 9-week course ... | Jupyter Notebook | 41.8k | 274 | 这是一个免费的9周数据工程课程，旨在帮助学员掌握生产就绪数据管道的构建。课程涵盖容器化、工作流编排、数据仓库、分析工程、批处理和流处理等核心模块，通过实战项目强化技能。适合有一定基础编码和SQL经验的学员自学。 |
| 16 | [OpenMOSS/MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS) | MOSS‑TTS Family is an open‑source speech and sound... | Python | 2.6k | 62 | MOSS-TTS 是一个开源的高保真语音与声音生成模型家族，支持长文本朗读、多说话人对话、声音克隆及环境音效生成。项目包含实时流式 TTS、轻量级 Nano 模型及 SoundEffect v2.0，支持多语言与 48kHz 音频，集成了 llama.cpp 和 SGLang 后端，适用于复杂现实场景。 |
| 17 | [dreammis/social-auto-upload](https://github.com/dreammis/social-auto-upload) | 自动化上传视频到社交媒体：抖音、小红书、视频号、tiktok、youtube、bilibili... | Python | 11.8k | 73 | 这是一个 Python 项目，旨在帮助内容创作者和运营者自动化将视频及图文内容发布到抖音、Bilibili、小红书等多个主流社交媒体平台。项目支持定时发布、CLI 命令行操作及 AI Agent Skill 接口，目前正在重构以提升稳定性和隐蔽性。 |
| 18 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 144.1k | 454 | 这是 Anthropic 官方的 Python 项目，旨在提供 Claude AI 的 Agent Skills 实现。它包含一系列动态加载的指令、脚本和资源，用于提升 Claude 在特定任务（如文档创建、数据分析、自动化）上的性能。仓库展示了从创意应用到企业工作流的多种技能模式，开发者可参考这些开源技能来构建自定义能力。 |
| 19 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 508.2k | 817 | 该项目汇集了从零开始构建各种流行技术（如操作系统、Web浏览器、AI模型等）的编程指南。通过跟随详细的步骤教程，开发者可以深入理解底层原理，提升编程技能。 |

[查看完整数据](api/github/2026-05-30.json)
<!-- END GITHUB TRENDING -->




