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

**最后更新**: 2026-06-05 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 183.1k | 1.8k | 这是一个由 Nous Research 开发的自我改进 AI 代理，具备内置学习循环。它能从经验中创建技能，管理长期记忆，并跨会话构建用户模型。支持多种大模型和平台（Telegram, Discord 等），提供强大的终端界面和自动化调度功能。 |
| 2 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 14.5k | 2.5k | Headroom 是一个专为 AI Agent 设计的上下文压缩层。它能在 LLM 接收前压缩工具输出、日志、文件和 RAG 块，减少 60-95% 的 token，同时保持答案一致。支持库、代理和 MCP 服务器，数据本地化且可逆。 |
| 3 | [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | The Frontend Stack for Agents & Generative UI. Rea... | TypeScript | 32.7k | 366 | CopilotKit 是一个全栈 SDK，用于构建代理应用和生成式 UI。它支持 React、Angular、Vue 和 React Native 等多平台。核心功能包括聊天界面、动态 UI 生成、共享状态和工具调用。作为 AG-UI 协议的创建者，它允许同一个代理逻辑在 Web、移动应用和 Slack 等工作区中运行。 |
| 4 | [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | An Open Source implementation of Notebook LM with ... | TypeScript | 26.0k | 1.2k | 这是一个开源的 Notebook LM 替代品，支持本地部署和多模型（18+）。它强调数据隐私，支持 PDF、视频、音频等多模态内容管理，并能生成播客。相比 Google Notebook LM，它提供更灵活的 AI 提供商选择、API 访问和自定义选项，适合需要完全掌控数据和本地化 AI 体验的用户。 |
| 5 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 208.3k | 1.4k | ECC 是一个跨 AI 代理框架（如 Cursor、Claude Code）的性能优化系统。它提供技能管理、记忆持久化、安全扫描及持续学习功能，支持并行化与子代理编排，旨在提升多环境下的开发效率与工作流质量。 |
| 6 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 21.5k | 148 | Agent-Reach 是一个 Python 项目，旨在赋予 AI Agent 浏览整个互联网的能力。它支持 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等主流平台，提供阅读、搜索、字幕提取等功能。项目完全免费、开源，支持一键安装更新，兼容 Claude Code、Cursor 等命令行 Agent，解决了 Agent 无法直接访问受限网站和付费 API 的问题。 |
| 7 | [NVIDIA/cosmos](https://github.com/NVIDIA/cosmos) | NVIDIA Cosmos is an open platform of world models,... | Jupyter Notebook | 9.4k | 479 | NVIDIA Cosmos 是一个开放的世界模型平台，旨在构建物理 AI。其 Cosmos 3 采用混合专家架构，统一处理语言、图像、视频、音频和动作。平台提供 Reasoner（推理/规划）和 Generator（生成/模拟）两种运行时，支持自动驾驶、机器人等场景的物理世界模拟与决策。 |
| 8 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 64.7k | 320 | MiroFish 是一个基于 Python 的多智能体群体智能引擎，通过构建高保真平行数字世界，模拟社会演变以预测未来。用户上传种子材料后，系统利用数千个具备独立个性的智能体进行交互推演，生成详细预测报告。它既可作为宏观决策的风险演练实验室，也可作为微观用户的创意沙盒。 |
| 9 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 28.2k | 731 | 这是一个基于 AI Agent 的搜索技能，能够跨 Reddit、X、YouTube、HN、Polymarket 等平台并行搜索特定主题，并根据真实用户互动（点赞、金钱）进行评分，最终合成一份基于事实的摘要。 |
| 10 | [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | Turn any PDF or image document into structured dat... | Python | 80.5k | 747 | PaddleOCR 是一款强大的轻量级 OCR 工具包，支持 100+ 种语言。它包含 SOTA 文档 VLM (PaddleOCR-VL-1.6) 和高效场景 OCR (PP-OCRv5)，能将 PDF 和图像转换为结构化的 LLM 就绪数据（JSON/Markdown），广泛应用于智能 RAG 和 Agentic 应用开发。 |
| 11 | [openai/plugins](https://github.com/openai/plugins) | OpenAI Plugins... | JavaScript | 1.5k | 49 | 该仓库是 OpenAI Codex 插件的示例集合，展示了如何构建各类插件。每个插件包含 manifest 配置文件及技能、命令等辅助文件。示例涵盖了 Figma 设计、Notion 知识管理、iOS/macOS/Web 应用开发、Expo 以及 Netlify 等工具的集成，展示了丰富的插件功能实现。 |
| 12 | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | The best-benchmarked open-source AI memory system.... | Python | 53.9k | 227 | MemPalace 是一个开源的本地优先 AI 记忆系统，采用结构化索引（人/项目为翅膀，话题为房间，内容为抽屉）存储对话历史。它支持可插拔后端（默认 ChromaDB），在 LongMemEval 上达到 96.6% 的 R@5 准确率。数据完全本地化，不离开机器，适合需要精准、安全管理 AI 交互记忆的用户。 |
| 13 | [withastro/flue](https://github.com/withastro/flue) | The sandbox agent framework.... | TypeScript | 4.5k | 126 | Flue 是一个 TypeScript 框架，用于构建下一代自主智能体。它类似于 Claude Code，但 100% 无头且可编程。逻辑主要存储在 Markdown 中，无需编写大量代码即可运行。作为一个运行时无关的框架，它支持在 Node.js、Cloudflare 等环境部署，并提供内置沙箱和工具。 |
| 14 | [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | Windows companion suite for OpenClaw - System Tray... | C# | 1.6k | 326 | 这是一个为 OpenClaw AI 助手设计的原生 Windows 伴侣套件。项目包含系统托盘应用、共享网关客户端库和 CLI 工具，基于 WinUI 3 开发，支持 WebSocket 连接验证及本地 WSL 网关管理，旨在提升 Windows 上的 AI 交互体验。 |
| 15 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 35.9k | 207 | Trivy 是一个用 Go 语言编写的多功能安全扫描器，支持扫描容器、文件系统、Git 仓库、虚拟机及 Kubernetes。它能检测操作系统漏洞、CVE、IaC 配置错误、敏感信息及许可证，支持多种平台，易于安装且集成广泛。 |
| 16 | [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a... | - | 350.4k | 745 | 这是一个旨在帮助求职者通过大型科技公司（如亚马逊、谷歌）技术面试的计算机科学自学计划。它涵盖了数据结构、算法、操作系统等核心知识，提供了结构化的学习路线图和资源推荐，适合希望系统掌握计算机科学基础并进入软件工程领域的初学者。 |
| 17 | [github/copilot-sdk](https://github.com/github/copilot-sdk) | Multi-platform SDK for integrating GitHub Copilot ... | Java | 9.2k | 309 | 这是一个多平台 SDK，用于将 GitHub Copilot 的代理工作流集成到应用程序中。它暴露了 Copilot CLI 的生产级引擎，支持 Python、TypeScript、Go、.NET、Java 和 Rust 等多种语言。开发者无需手动构建编排逻辑，只需定义代理行为，Copilot 即可处理规划、工具调用和文件编辑。SDK 通过 JSON-RPC 与 CLI 服务器通信，自动管理进程生命周期。 |

[查看完整数据](api/github/2026-06-05.json)
<!-- END GITHUB TRENDING -->




