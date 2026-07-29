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

**最后更新**: 2026-07-28 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 18.7k | 341 | 这是一个基于 React Three Fiber 和 WebGPU 构建的 3D 建筑编辑器。项目采用 Turborepo monorepo 架构，包含核心逻辑、3D 渲染、编辑工具和内置节点定义，支持用户创建和分享 3D 建筑项目。 |
| 2 | [jenkinsci/jenkins](https://github.com/jenkinsci/jenkins) | Jenkins automation server... | Java | 26.1k | 180 | Jenkins 是领先的开源自动化服务器，基于 Java 构建。它提供超过 2000 个插件，支持构建、测试、静态代码分析和部署等开发工作流，旨在通过自动化重复性任务来优化开发流程。 |
| 3 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 44.7k | 797 | AIRI 是一个自托管的 AI 虚拟伴侣项目，灵感来源于 Neuro-sama。它允许用户拥有自己的“赛博老婆”或数字生命，支持实时语音聊天、在 Minecraft 和 Factorio 等游戏中游玩，并能与用户进行多任务交互。项目基于 TypeScript 开发，集成了 RAG、记忆系统和 Live2D 等功能，旨在提供沉浸式的虚拟伴侣体验。 |
| 4 | [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Simple, unified interface to multiple Generative A... | Python | 15.7k | 62 | aisuite 是一个轻量级 Python 库，旨在为多个生成式 AI 提供商提供统一的接口。它包含两层架构：统一的 Chat Completions API（支持 OpenAI、Anthropic 等）和基于工具的 Agents API。支持 MCP 协议和工具包，可用于构建跨 LLM 的智能体，并作为桌面 AI 助手 OpenWorker 的后端。 |
| 5 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 234.8k | 636 | ECC 是一个代理工具性能优化系统，旨在为 Claude Code、Codex、Cursor 等 AI 编程助手提供协调的工程系统。它包含 67 个专业代理和 281 个技能，支持规划、测试、安全扫描和持续学习等功能，帮助 AI 代理优化上下文窗口并提升开发效率。 |
| 6 | [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Build local voice agents with open-source models... | Python | 7.2k | 227 | 这是一个低延迟、全模块化的语音代理管道，包含VAD、STT、LLM和TTS四个组件。它通过OpenAI Realtime兼容的WebSocket API暴露，支持完全本地化部署。用户可以灵活替换各个组件，连接本地或云端的大语言模型，非常适合构建生产级的本地语音助手或机器人对话后端。 |
| 7 | [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Turn any technical book PDF into a Claude Code ski... | Python | 11.3k | 423 | 该项目是一个 Python 工具，旨在将技术书籍（PDF、文件夹等）转换为 AI 代理技能。它通过将书籍结构化为框架和决策规则，显著减少 token 使用，防止 AI 幻觉。开发者可以在 Claude Code、Copilot CLI 等环境中按需加载这些技能，将书籍内容无缝集成到工作流中。 |
| 8 | [opengeos/GeoLibre](https://github.com/opengeos/GeoLibre) | A lightweight, cloud-native GIS platform for visua... | TypeScript | 3.4k | 607 | GeoLibre 是一个免费开源的轻量级云原生 GIS 平台，支持在浏览器、桌面、移动端及 Jupyter 中运行。它强调数据本地化与隐私保护，具备强大的 3D 可视化、时间轴动画及行星地图（如月球、火星）分析能力，适合多场景地理空间数据处理。 |
| 9 | [paperswithbacktest/awesome-systematic-trading](https://github.com/paperswithbacktest/awesome-systematic-trading) | A curated list of awesome libraries, packages, str... | Python | 9.6k | 309 | 这是一个关于系统性交易（量化交易）的精选资源列表。收录了97个用于研究和实盘交易的库、40多种策略、55本书籍及视频教程。内容涵盖回测框架、交易机器人、数据分析等多个领域，适合量化交易开发者和学习者使用。 |
| 10 | [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | AI Agent Governance Toolkit — Policy enforcement, ... | Python | 5.2k | 46 | 这是一个由微软开发的 AI Agent Governance Toolkit，旨在解决自主 AI 代理在生产环境中的治理和安全问题。它提供策略执行、零信任身份认证、执行沙箱隔离和可靠性工程。该工具覆盖了 OWASP Agentic Top 10 安全风险，确保代理在访问工具时受到严格控制，防止权限滥用，并提供可审计的记录，帮助开发者安全地部署多代理系统。 |
| 11 | [yorukot/superfile](https://github.com/yorukot/superfile) | Pretty fancy and modern terminal file manager... | Go | 21.5k | 662 | superfile 是一款基于 Go 语言开发的现代化终端文件管理器。它拥有精美的 UI 界面，支持跨平台（Linux、macOS、Windows），内置插件和主题系统，并具备自动更新功能。适合追求高效与美观的终端用户使用。 |
| 12 | [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Give Claude the ability to watch any video. /watch... | Python | 12.1k | 988 | 该项目为 Claude AI 增加了观看视频的能力。它通过下载视频、提取帧和转录音频，将视觉和听觉信息转化为 Claude 可处理的格式。支持 YouTube 链接和本地文件，利用 yt-dlp 和 ffmpeg 处理，并支持 Whisper API 进行字幕转录。用户可借此分析内容结构、诊断 bug 或回答视频相关问题。 |

[查看完整数据](api/github/2026-07-28.json)
<!-- END GITHUB TRENDING -->




