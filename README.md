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

**最后更新**: 2026-08-04 | **成功**: 18 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TencentDB Agent Memory is a team-level memory hub ... | TypeScript | 13.5k | 1.1k | 这是一个团队级的 AI Agent 记忆中心，旨在减少重复工作。它将对话、文档和代码转化为四种可重用的记忆资产（聊天记忆、技能、LLM-Wiki、代码图），支持跨代理和框架共享。通过自动化信息积累与流转，帮助 Agent 避免重复造轮子，提升团队协作效率和结果稳定性。 |
| 2 | [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | Reverse Engineering / Authorized Penetration Testi... | PowerShell | 17.8k | 2.3k | 这是一个专为 AI Agent 设计的逆向工程与安全研究技能路由包。它通过 AI 自动路由、按需自举工具链和自进化知识库，帮助 Claude Code、Cursor 等客户端处理 APK、二进制文件、CTF 等任务，提供标准化的安全测试工作流。 |
| 3 | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Fast Rust library for PDF inspection, classificati... | Rust | 10.0k | 2.5k | 这是一个用 Rust 编写的快速 PDF 检查库。它能智能分类 PDF（文本/扫描/混合），提取位置感知的文本并转换为 Markdown。支持多列布局、表格检测和 CID 字体。无需 OCR 即可处理大部分 PDF，性能极快，支持 WebAssembly。 |
| 4 | [uber/ADR](https://github.com/uber/ADR) | ADR secures enterprise AI agents through observabi... | Python | 673 | 148 | ADR 是 Uber 开源的企业级 AI 代理安全系统，提供可观测性、基准测试（ADR-Bench）和威胁检测功能。它包含双层检测架构和 300+ 任务基准，已部署于生产环境，用于防御 Claude Code、Cursor 等工具的攻击。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 266.5k | 653 | Superpowers 是一个面向编码代理的技能框架和软件开发方法论。它通过可组合的技能和初始指令，引导代理在编码前先与用户确认需求、展示设计细节，并制定包含 TDD、YAGNI 和 DRY 原则的实施计划。随后，代理会启动子代理驱动的开发过程，自主执行任务，无需人工持续干预。它支持多种主流 AI 编码工具。 |
| 6 | [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 21 Lessons, Get Started Building with Generative A... | Jupyter Notebook | 116.2k | 783 | Microsoft 推出的生成式 AI 入门课程，包含 21 个 Jupyter Notebook 教程。课程涵盖从基础概念到实际构建的完整流程，支持 50 多种语言。适合零基础开发者快速上手构建生成式 AI 应用。 |
| 7 | [cypress-io/cypress](https://github.com/cypress-io/cypress) | Fast, easy and reliable testing for anything that ... | TypeScript | 50.8k | 11 | Cypress 是一个专为浏览器应用设计的快速、简单且可靠的端到端测试框架。它支持 Mac、Linux 和 Windows，提供直观的测试体验。项目采用 TypeScript 开发，遵循 MIT 许可证，并欢迎社区贡献。 |
| 8 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 28.4k | 1.7k | AirLLM 是一个旨在大幅降低大语言模型推理内存使用的工具。它允许在单张 4GB GPU 上运行 70B 模型，无需量化或剪枝。通过流式传输专家，它支持 Kimi K3 (2.8T) 等超大规模稀疏 MoE 模型，也能在 12GB 显存中运行 DeepSeek-V3。项目支持 CPU 推理及 MacOS，极大降低了高性能 AI 模型的部署门槛。 |
| 9 | [webpack/webpack](https://github.com/webpack/webpack) | A bundler for javascript and friends. Packs many m... | JavaScript | 65.9k | 10 | Webpack 是一个强大的 JavaScript 模块打包器，支持 ES Modules、CommonJS 和 AMD。它通过代码分割和异步加载优化性能，利用 Loaders 处理多种资源类型（如 CSS、TypeScript），并拥有丰富的插件系统以扩展功能，适用于现代 Web 应用的构建。 |
| 10 | [gabime/spdlog](https://github.com/gabime/spdlog) | Fast C++ logging library.... | C++ | 29.4k | 10 | spdlog 是一个高性能的 C++ 日志库，支持头文件或编译版本。它具备异步日志、多线程支持及丰富的格式化功能。支持多种日志输出目标（如轮转文件、控制台、syslog等），并提供运行时日志级别过滤和回溯支持，编译和运行速度极快。 |
| 11 | [denoland/deno](https://github.com/denoland/deno) | A modern runtime for JavaScript and TypeScript.... | Rust | 108.1k | 31 | Deno 是一个现代的 JavaScript、TypeScript 和 WebAssembly 运行时，内置安全默认设置和优秀的开发者体验。它基于 V8、Rust 和 Tokio 构建，支持直接运行 TypeScript 代码，非常适合构建 Web 服务器和后端应用。 |
| 12 | [usekaneo/kaneo](https://github.com/usekaneo/kaneo) | 🎯 All you need. Nothing you don't. Open source pr... | TypeScript | 7.3k | 559 | Kaneo 是一个极简主义的开源项目管理工具，旨在通过简洁的界面和强大的性能，帮助团队专注于核心工作。它支持自托管，数据安全，并提供一键部署方案，解决了传统项目管理工具臃肿、干扰工作流的问题。 |
| 13 | [livekit/agents](https://github.com/livekit/agents) | A framework for building realtime voice AI agents ... | Python | 12.4k | 432 | LiveKit Agents 是一个用于构建实时语音 AI 代理的 Python 框架。它支持多模态交互，具备灵活的模型集成（STT/LLM/TTS）、内置任务调度、WebRTC 客户端支持及电话集成功能。框架还提供语义轮次检测、MCP 支持和内置测试工具，完全开源。 |
| 14 | [angular/angular](https://github.com/angular/angular) | Deliver web apps with confidence 🚀... | TypeScript | 100.8k | 13 | Angular 是一个基于 TypeScript 的现代 Web 开发平台，用于构建移动和桌面 Web 应用程序。它提供了强大的命令行工具（CLI）、丰富的生态系统（如 Angular Material）以及跨平台、高性能的特性。项目包含完整的文档、升级指南和社区支持，适合需要构建复杂企业级应用的开发者。 |
| 15 | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | A utility-first CSS framework for rapid UI develop... | TypeScript | 96.5k | 52 | Tailwind CSS 是一个实用优先的 CSS 框架，旨在加速 UI 开发。它允许开发者通过组合原子类快速构建自定义设计，无需编写繁琐的 CSS 文件。 |
| 16 | [browser-use/video-use](https://github.com/browser-use/video-use) | Edit videos with coding agents... | Python | 19.3k | 320 | 这是一个基于 Python 的开源项目，允许用户通过 Claude Code 等编程代理自动编辑视频。它具备自动剪除填充词、自动调色、音频淡入淡出、字幕生成及动画叠加等功能。项目支持多种内容类型，通过 ElevenLabs API 进行语音处理，并能自我评估输出质量，实现无需预设的智能化视频剪辑。 |
| 17 | [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | DeepSeek-native AI coding agent for your terminal.... | Go | 30.8k | 922 | 专为终端打造的 DeepSeek 原生 AI 编码代理，基于 Go 语言构建的单静态二进制。项目通过优化前缀缓存降低长会话成本，支持配置驱动、多模型及 MCP 插件扩展，提供零依赖的跨平台部署体验。 |
| 18 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Compound Engineering plugin for Claude Co... | TypeScript | 23.9k | 40 | 这是一个为 Claude Code、Cursor 和 Codex 等编程助手设计的官方插件。它提供 AI 技能，旨在让工程工作更高效。插件包含专家评审员和研究行为，作为本地提示资源，无需单独安装自定义代理即可使用。 |

[查看完整数据](api/github/2026-08-04.json)
<!-- END GITHUB TRENDING -->




