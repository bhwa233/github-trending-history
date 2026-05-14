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

**最后更新**: 2026-05-13 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 5.4k | 1.7k | OpenHuman 是一个基于 Rust 的个人 AI 智能体，主打简单易用。它拥有桌面吉祥物，支持 118+ 第三方应用集成（如 Gmail、GitHub），通过 OAuth 自动获取数据。核心是本地 SQLite 存储的 Memory Tree 知识库，能记忆用户并参与会议，提供隐私保护的智能助手体验。 |
| 2 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | #1 Persistent memory for AI coding agents based on... | TypeScript | 7.6k | 1.4k | agentmemory 是一个为 AI 编码代理提供持久化记忆的开源库。它基于 iii 引擎，支持 Claude Code、Cursor 等多种工具，通过 MCP 或 REST API 集成。项目利用知识图谱和混合搜索技术，让 AI 跨会话记住上下文、配置和偏好，避免重复解释，显著提升开发效率。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 189.5k | 1.4k | Superpowers 是一个为编码代理设计的软件开发方法论框架。它通过一套可组合技能，引导代理在编写代码前明确需求、拆解设计并制定实施计划。支持 TDD、YAGNI 和 DRY 原则，并能自动触发子代理进行自主开发、审查和迭代，适用于多种主流 AI 编码工具。 |
| 4 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn!... | TypeScript | 12.9k | 981 | AiToEarn 是一个基于 TypeScript 的 AI Agent 平台，旨在帮助 OPC、创作者和企业在全球主流平台（如抖音、TikTok、YouTube 等）自动化构建、分发并变现内容。平台提供 Monetize（变现）、Publish（全网分发）、Engage（互动）和 Create（创作）四大核心能力，支持多种部署方式。 |
| 5 | [influxdata/telegraf](https://github.com/influxdata/telegraf) | Agent for collecting, processing, aggregating, and... | Go | 17.0k | 13 | Telegraf 是一个用 Go 编写的开源数据收集代理，用于收集、处理和写入指标、日志等数据。它拥有超过 300 个插件，支持系统监控、云服务和消息传递等多种场景，编译为独立二进制文件，配置简单，部署高效。 |
| 6 | [millionco/react-doctor](https://github.com/millionco/react-doctor) | Your agent writes bad React. This catches it... | TypeScript | 9.3k | 604 | 这是一个用于检查 React 代码质量的工具，通过扫描代码库给出 0-100 的健康评分。它支持 Next.js、Vite 和 React Native，检查状态、性能、安全等方面。它还提供 CLI 工具和 GitHub Actions 集成，并专门用于指导 AI 编码代理遵循最佳实践，防止生成低质量代码。 |
| 7 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | A set of ready to use Agent Skills for research, s... | Python | 21.1k | 99 | 该项目提供135+个跨学科的科学技能，涵盖生物信息学、化学信息学等领域。它支持Agent Skills标准，兼容Cursor、Claude等AI代理。新增的K-Dense BYOK允许用户在本地桌面运行AI科学家，支持40+模型，数据安全，适合复杂多步骤科学工作流。 |
| 8 | [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) | Agentic AI Infrastructure for magnifying HUMAN cap... | TypeScript | 13.3k | 435 | PAI 是一个旨在放大人类能力的“生活操作系统”。它集成了 Pulse 仪表盘、DA 数字助手及 Algorithm 算法，帮助用户管理目标、记忆和工作流。项目强调以人为本，将 AI 作为提升个人生活和效率的工具，而非单纯的技术堆砌。支持 45 个技能和隐私保护，适合个人及团队构建统一的 AI 基础设施。 |
| 9 | [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | Lightning-Fast, On-Device, Multilingual TTS — runn... | Swift | 4.3k | 859 | Supertonic 是一个基于 ONNX Runtime 的极速、本地化多语言文本转语音系统。它完全在设备端运行，无需云端 API，保护隐私。支持 31 种语言，提供多种语音风格，并包含 Python 和 Flutter SDK，适合离线场景下的语音合成。 |
| 10 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 9.5k | 1.8k | CloakBrowser 是一款通过所有机器人检测的隐身浏览器，通过修改 C++ 源码实现指纹伪装，非 JS 注入。它作为 Playwright/Puppeteer 的即插即用替代品，支持 Python 和 JS，具备人类行为模拟、自动更新及通过 Cloudflare Turnstile 等高级反爬检测的能力。 |
| 11 | [Greedeks/GTweak](https://github.com/Greedeks/GTweak) | Portable Tool for an Ideal Windows Setup... | C# | 917 | 75 | 这是一个用 C# 编写的便携式 Windows 优化工具。它集成了系统激活、禁用 Defender 与更新、卸载预装应用、清理垃圾文件、自定义界面及监控硬件等多种功能，旨在帮助用户打造理想的 Windows 环境。 |
| 12 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 78.9k | 3.4k | 这是一个面向真实工程师的 Claude AI 技能集，旨在解决 AI 代理常见的“意图不匹配”问题。它通过 /grill-me 等命令在编码前进行详细提问，确保 AI 理解需求。技能小巧、可组合，支持 GitHub、Linear 等工具集成，帮助开发者摆脱“氛围编码”，建立标准化的工程流程。 |
| 13 | [ArthurBrussee/brush](https://github.com/ArthurBrussee/brush) | 3D Reconstruction for all... | Rust | 4.4k | 81 | Brush 是一个基于 Rust 和 WebGPU 的 3D 重建引擎，采用高斯泼溅技术。它支持跨平台运行（Windows/macOS/Linux/Android/浏览器），无需 CUDA 依赖，提供轻量级二进制文件。支持 COLMAP 和 Nerfstudio 数据集训练，具备实时交互、图像遮罩、PLY 文件查看及 CLI 工具等功能。 |
| 14 | [imthenachoman/How-To-Secure-A-Linux-Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server) | An evolving how-to guide for securing a Linux serv... | - | 27.1k | 234 | 这是一个关于如何保护 Linux 服务器的不断演变的指南。它提供了全面的安全配置步骤和最佳实践，帮助用户加固服务器环境，防止常见的安全威胁。 |
| 15 | [apernet/hysteria](https://github.com/apernet/hysteria) | Hysteria is a powerful, lightning fast and censors... | Go | 20.6k | 485 | Hysteria 是一款基于 Go 语言开发的强大代理工具，利用自定义 QUIC 协议提供极速且抗审查的网络连接。支持 SOCKS5、HTTP、TCP/UDP 转发等多种模式，具备跨平台特性，适合在不可靠网络环境下使用。 |
| 16 | [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Implement a ChatGPT-like LLM in PyTorch from scrat... | Jupyter Notebook | 94.4k | 821 | 本项目基于 PyTorch 从零开始逐步实现类似 ChatGPT 的大型语言模型。它涵盖了模型的开发、预训练及微调全流程，旨在通过 Jupyter Notebook 教程深入解析 LLM 的工作原理，并支持加载预训练权重进行进一步微调。 |
| 17 | [ton-blockchain/acton](https://github.com/ton-blockchain/acton) | Toolchain for TON smart contract development and b... | Rust | 202 | 18 | Acton 是一个用 Rust 编写的全栈 TON 智能合约开发工具包。它集成了项目脚手架、构建、测试、调试、部署和验证等功能，提供原生速度和 Tolk 优先的工作流。内置强大的测试工具（如覆盖率、模糊测试）和浏览器 UI，支持 dApp 开发，是 TON 区块链开发的高效解决方案。 |
| 18 | [trycua/cua](https://github.com/trycua/cua) | Open-source infrastructure for Computer-Use Agents... | HTML | 16.5k | 245 | 这是一个为计算机使用代理提供的开源基础设施，包含 macOS 后台驱动、多平台沙箱（Linux/macOS/Windows/Android）以及协作沙箱工具 CuaBot。它支持云端和本地运行，提供统一的 API 来训练和评估能控制完整桌面的 AI 代理。 |
| 19 | [github/spec-kit](https://github.com/github/spec-kit) | 💫 Toolkit to help you get started with Spec-Drive... | Python | 98.3k | 1.1k | Spec-Kit 是一个开源工具包，旨在帮助开发者采用规范驱动开发（SDD）。它将规范转化为可执行代码，直接生成工作实现而非仅作为指导。通过专注于产品场景和可预测结果，该工具帮助开发者摆脱“凭感觉编码”，利用 AI 编码代理集成，加速高质量软件的构建。 |

[查看完整数据](api/github/2026-05-13.json)
<!-- END GITHUB TRENDING -->




