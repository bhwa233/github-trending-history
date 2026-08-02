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

**最后更新**: 2026-08-01 | **成功**: 14 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 Weeks, 24 Lessons, AI for All!... | Jupyter Notebook | 57.1k | 949 | 这是一个由微软提供的面向初学者的12周、24课AI课程。内容涵盖AI基础、TensorFlow和PyTorch等工具使用以及AI伦理。项目包含实践课程、测验和实验室，支持50多种语言，由GitHub Actions自动更新，适合零基础学习者入门。 |
| 2 | [paperswithbacktest/awesome-systematic-trading](https://github.com/paperswithbacktest/awesome-systematic-trading) | A curated list of awesome libraries, packages, str... | Python | 12.2k | 523 | 一个专注于系统化交易的资源精选列表，包含97个库、40+种策略及55本专业书籍。涵盖回测、实盘交易、数据分析及机器学习等领域，旨在帮助开发者和研究人员寻找、开发并运行量化交易策略。 |
| 3 | [usekaneo/kaneo](https://github.com/usekaneo/kaneo) | 🎯 All you need. Nothing you don't. Open source pr... | TypeScript | 5.7k | 760 | Kaneo 是一款极简主义的开源项目管理工具，旨在通过简洁的界面和自托管功能，减少对团队的干扰，专注于产品构建。它强调性能和隐私，支持 MIT 许可证，适合追求高效、轻量级工作流的团队使用。 |
| 4 | [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | Reverse Engineering / Authorized Penetration Testi... | PowerShell | 11.9k | 1.3k | 这是一个专为 AI Agent 设计的网络安全技能路由包，利用 PowerShell 实现智能任务分发。它能将 APK、二进制、JS 等逆向任务自动路由至 Frida、IDA Pro、BurpSuite 等工具，支持按需自举工具链、自动化工作流及证据报告生成，解决 AI 代理工具选择困难的问题。 |
| 5 | [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 21 Lessons, Get Started Building with Generative A... | Jupyter Notebook | 114.2k | 108 | 这是一个由微软提供的生成式 AI 入门课程，包含 21 课，涵盖从基础概念到应用构建的完整内容。项目采用 Jupyter Notebook 格式，支持 50 多种语言，内容持续更新。适合零基础开发者学习如何构建生成式 AI 应用。 |
| 6 | [github/copilot-sdk](https://github.com/github/copilot-sdk) | Multi-platform SDK for integrating GitHub Copilot ... | Java | 10.3k | 142 | 这是一个多平台 SDK，用于将 GitHub Copilot Agent 集成到各类应用中。支持 Node.js、Python、Go、.NET、Java 和 Rust。SDK 通过 JSON-RPC 与 Copilot CLI 通信，提供生产就绪的代理运行时，开发者只需定义行为，无需自行构建编排逻辑，需订阅 GitHub Copilot。 |
| 7 | [github/gh-stack](https://github.com/github/gh-stack) | GitHub Stacked PRs... | Go | 806 | 46 | 这是一个用于管理堆叠分支和 Pull Requests 的 GitHub CLI 扩展。它将大型变更拆解为一系列可审查的小型 PR，自动化了创建、变基和提交过程。通过维护基于主干（trunk）的层级结构，帮助开发者高效管理复杂的代码变更链。 |
| 8 | [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Build local voice agents with open-source models... | Python | 10.2k | 442 | 这是一个基于 Python 的低延迟、全模块化语音代理管道，包含 VAD、STT、LLM 和 TTS 四个组件。它通过 OpenAI Realtime 兼容的 WebSocket API 暴露，支持完全本地化部署和组件替换，适用于构建本地语音助手或作为机器人后端。 |
| 9 | [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro) | Gradio WebUI for creators and developers, featurin... | Python | 11.7k | 58 | 这是一个基于 Gradio 的 Web 应用，集成了语音识别、翻译和多语言配音功能。它支持 YouTube 下载、人声分离，并集成了 F5-TTS、CosyVoice 等先进的零样本语音克隆技术，以及 Edge-TTS 和 Kokoro 等文本转语音引擎，为创作者提供一站式多媒体处理解决方案。 |
| 10 | [iv-org/invidious](https://github.com/iv-org/invidious) | Invidious is an alternative front-end to YouTube... | Crystal | 21.6k | 435 | Invidious 是一个基于 Crystal 语言开发的 YouTube 替代前端。它专注于用户隐私，提供无广告、无追踪、无需 JavaScript 的浏览体验，支持深色/浅色主题、音频模式及订阅管理。项目支持数据导入导出，不依赖官方 API，旨在为用户提供一个干净、独立的视频观看环境。 |
| 11 | [ansible/ansible](https://github.com/ansible/ansible) | Ansible is a radically simple IT automation platfo... | Python | 70.1k | 30 | Ansible 是一个简单且强大的 IT 自动化平台，用于配置管理、应用部署、云 provisioning 和网络自动化。它采用无代理架构，通过 SSH 直接管理远程系统，使用 YAML 语言编写剧本，具有极低的学习曲线和强大的并行处理能力，支持零停机滚动更新。 |
| 12 | [microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | Native and Compact Structured Latents for 3D Gener... | Python | 9.9k | 107 | TRELLIS.2 是微软推出的 4B 参数大模型，专注于高保真图像到 3D 生成。它采用创新的 O-Voxel 稀疏体素结构，能够处理任意拓扑（如开放表面、非流形几何），并支持全 PBR 材质建模。模型利用稀疏 3D VAE 进行高效编码，在 H100 上生成 1024³ 分辨率资产仅需约 17 秒，适合快速创建复杂 3D 资产。 |
| 13 | [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TencentDB Agent Memory is a team-level memory hub ... | TypeScript | 10.3k | 227 | 处理失败 |
| 14 | [NomaDamas/k-skill](https://github.com/NomaDamas/k-skill) | 한국인을 위한 스킬 모음집 - 에이전트를 한국인으로... | JavaScript | 6.7k | 53 | 该项目是一个面向韩国用户的实用工具集合，包含交通出行、生活服务及法律行政等多种自动化脚本。涵盖SRT/KTX购票、地铁查询、法律检索等功能，旨在简化韩国用户的日常事务处理流程。 |
| 15 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source long-horizon SuperAgent harness tha... | Python | 78.7k | 209 | DeerFlow 是字节跳动开源的长周期 SuperAgent 框架，旨在研究、编码和创建。它通过编排子代理、记忆、沙箱和可扩展技能，处理从几分钟到几小时的复杂任务，支持 Claude Code 集成及智能搜索工具 InfoQuest。 |

[查看完整数据](api/github/2026-08-01.json)
<!-- END GITHUB TRENDING -->




