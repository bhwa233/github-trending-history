# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2026-04-06 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 23.4k | 837 | GitNexus是基于浏览器的代码知识图谱工具，支持本地代码库分析与AI代理交互。通过CLI和Web UI双模式，实现代码依赖追踪、调用链分析及架构可视化，提升代码理解与AI开发效率。 |
| 2 | [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) | A gallery that showcases on-device ML/GenAI use ca... | Kotlin | 17.8k | 1.1k | Google AI Edge Gallery展示本地设备上的生成式AI用例，支持离线运行Gemma 4模型。核心功能包括多模态交互、思维模式对话、图像识别、语音转录及提示测试，提升隐私与响应速度。 |
| 3 | [block/goose](https://github.com/block/goose) | an open source, extensible AI agent that goes beyo... | Rust | 38.1k | 1.5k | block/goose 是一个用 Rust 编写的开源 AI 代理工具，可自动化代码构建、执行、调试及工程流程。支持多模型配置、LLM 交互和 MCP 服务器集成，提供 CLI 与桌面应用，提升开发效率。 |
| 4 | [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) | ... | C++ | 2.0k | 487 | LiteRT-LM是Google开源的边缘设备大语言模型推理框架，支持跨平台部署与硬件加速，提供多模态输入、函数调用及高性能推理能力，适用于移动设备、物联网及嵌入式场景。 |
| 5 | [immich-app/immich](https://github.com/immich-app/immich) | High performance self-hosted photo and video manag... | TypeScript | 96.8k | 220 | ImmiCh 是一款高性能自托管相册管理工具，支持多平台照片/视频管理，具备自动备份、去重、多用户权限、人脸识别、元数据搜索、离线访问及多语言界面等功能，适用于个人或企业级媒体资产管理系统。 |
| 6 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Shannon Lite is an autonomous, white-box AI pentes... | TypeScript | 36.5k | 703 | Shannon是Keygraph开发的AI驱动白盒渗透测试工具，通过源代码分析与实时漏洞利用结合，自动检测Web应用及API的注入、XSS、SSRF等漏洞，并生成可复现的POC报告。 |
| 7 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 28.0k | 1.7k | Hermes-Agent 是一个自我优化的AI代理系统，支持跨平台对话、多模型切换和自动化任务。具备学习循环机制，可持续改进技能并跨会话记忆用户信息，提供全功能终端界面及分布式运行能力。 |
| 8 | [tobi/qmd](https://github.com/tobi/qmd) | mini cli search engine for your docs, knowledge ba... | TypeScript | 18.7k | 526 | QMD是一款本地运行的命令行搜索引擎，支持Markdown文档的关键词、语义搜索及LLM重排序，结合BM25、向量检索与本地模型实现高效知识管理。 |
| 9 | [TelegramMessenger/Telegram-iOS](https://github.com/TelegramMessenger/Telegram-iOS) | Telegram-iOS... | Swift | 8.3k | 54 | Telegram的iOS客户端源代码，支持即时通讯、加密消息传输及跨平台功能，提供开发指南和构建配置。 |
| 10 | [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Agent skills for Obsidian. Teach your agent to use... | - | 20.5k | 534 | 提供Obsidian代理技能，支持Markdown/Bases/JSON Canvas编辑及CLI操作，包含网页内容清理工具。适配Claude Code、Codex CLI等代理框架，通过技能模块扩展Obsidian功能。 |
| 11 | [ollama/ollama](https://github.com/ollama/ollama) | Get up and running with Kimi-K2.5, GLM-5, MiniMax,... | Go | 167.7k | 263 | Ollama是一个支持多模型部署与管理的开源工具，提供CLI和REST API接口，可快速集成Kimi-K2.5、GLM-5、Qwen等大模型。支持跨平台安装、Docker容器化及多种编程语言SDK，适用于AI应用开发与模型实验。 |
| 12 | [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | LLM inference in C/C++... | C++ | 102.0k | 318 | llama.cpp是C/C++实现的LLM推理框架，支持多平台硬件加速（Apple Silicon/ARM/AVX/AMX），兼容Hugging Face模型，提供本地部署、Docker及预编译方案，注重低资源消耗与高性能。 |
| 13 | [siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen) | Create stunning demos for free. Open-source, no su... | TypeScript | 23.9k | 1.8k | OpenScreen 是免费开源的屏幕录制与视频编辑工具，提供窗口/全屏录制、自动/手动缩放、音频录制、视频裁剪、背景自定义、运动模糊、注释添加及多格式导出等功能，旨在替代Screen Studio的基础功能，无订阅费用且支持商业用途。 |
| 14 | [NVIDIA/personaplex](https://github.com/NVIDIA/personaplex) | PersonaPlex code.... | Python | 7.3k | 295 | PersonaPlex是基于Moshi架构的实时全双工语音对话模型，支持文本角色提示和音频语音条件控制，可生成自然低延迟的对话交互，适用于虚拟角色扮演和智能语音助手场景。 |

[查看完整数据](api/github/2026-04-06.json)
<!-- END GITHUB TRENDING -->








