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

**最后更新**: 2026-04-17 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | The GEP-Powered Self-Evolution Engine for AI Agent... | JavaScript | 4.2k | 750 | 这是一个基于 GEP（基因表达程序）的 AI Agent 自我进化引擎。它扫描运行日志，从资产库中选择最佳基因或胶囊，生成受协议约束的 GEP 提示以指导 Agent 进化。项目将临时的提示调整转化为可审计、可复用的进化资产，支持离线运行及网络协作。 |
| 2 | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Self-evolving agent: grows skill tree from 3.3K-li... | Python | 3.6k | 848 | GenericAgent 是一个极简的自我进化自主智能体框架，核心代码仅约3K行。它通过9个原子工具实现系统级控制，核心机制是将任务执行路径自动转化为可复用的技能，随使用积累形成个人技能树。该框架支持多主流大模型，且Token消耗极低，具备高兼容性和强执行能力。 |
| 3 | [SimoneAvogadro/android-reverse-engineering-skill](https://github.com/SimoneAvogadro/android-reverse-engineering-skill) | Claude Code skill to support Android app's reverse... | Shell | 2.7k | 558 | 这是一个专为 Claude Code 设计的 Android 逆向工程技能。它利用 jadx 和 Fernflower 等工具反编译 APK、XAPK、JAR 和 AAR 文件，提取 HTTP API（如 Retrofit 端点、OkHttp 调用、认证信息），追踪调用流程并分析应用结构，支持处理混淆代码，无需源码即可文档化和复现 API。 |
| 4 | [BasedHardware/omi](https://github.com/BasedHardware/omi) | AI that sees your screen, listens to your conversa... | Dart | 9.8k | 821 | Omi 是一款跨平台的 AI “第二大脑”，支持桌面、手机及可穿戴设备。它能实时捕捉屏幕与对话，自动转录、生成摘要及行动项，并提供具备记忆功能的 AI 聊天。项目完全开源，旨在帮助专业人士高效管理信息。 |
| 5 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 31.5k | 949 | 这是一个由上海交通大学开发的公益大模型编程实践教程，基于 Jupyter Notebook。内容涵盖微调、提示学习、知识编辑、数学推理、越狱攻击、隐写术、多模态、GUI Agent、智能体安全及RLHF对齐等前沿主题。此外，还联合华为昇腾推出了国产化全流程开发教程。适合初学者快速入门大模型，辅助课程设计或学术研究。 |
| 6 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 11.8k | 405 | 该项目将 Claude Code 会话转化为模拟真实游戏开发工作室的 AI 团队。包含 49 个专业代理、72 个技能和 12 个自动化钩子，覆盖设计、编程、艺术、QA 等全流程。通过层级管理（导演、主管、专家）和严格的规则/模板，确保项目结构化、代码规范，防止随意编码，实现从头脑风暴到发布的全流程协作。 |
| 7 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source voice synthesis studio... | TypeScript | 19.8k | 802 | Voicebox 是一个本地优先的开源语音合成工作室，支持从几秒钟的音频克隆声音。它集成了5种TTS引擎，支持23种语言，提供多轨时间轴编辑器和丰富的后期处理效果，完全在本地运行，保护用户隐私。 |
| 8 | [lukilabs/craft-agents-oss](https://github.com/lukilabs/craft-agents-oss) | ... | TypeScript | 4.3k | 107 | 这是一个由 craft.do 团队开发的 AI 代理协作工具，基于 TypeScript 构建。它旨在提供直观的多任务处理和以文档为中心的工作流。支持通过自然语言自动连接各种 API 和 MCP 服务（如 Linear、Slack），无需手动配置。内置 Claude 和 Pi SDK，遵循 Agent Native 原则，高度可定制，开源免费。 |
| 9 | [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Build your own AI SRE agents. The open source tool... | Python | 1.4k | 257 | 这是一个用于构建 AI SRE 代理的开源框架，旨在解决生产环境故障排查缺乏标准化训练数据的问题。项目提供强化学习环境，支持连接多种监控工具，通过合成事件和端到端测试（覆盖 Kubernetes、AWS 等）来训练和评估代理在真实云环境中的故障响应能力。 |
| 10 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 157.7k | 1.6k | Superpowers 是一个为编码代理设计的软件开发方法论框架。它通过引导用户定义需求、分解规格说明、制定实现计划（强调 TDD、YAGNI、DRY）以及启动自主子代理开发流程，显著提升 AI 编码效率。该框架通过插件形式集成到 Claude Code 中，使 AI 能够长时间自主工作。 |
| 11 | [z-lab/dflash](https://github.com/z-lab/dflash) | DFlash: Block Diffusion for Flash Speculative Deco... | Python | 1.8k | 285 | DFlash 是一个专为 Flash Speculative Decoding 设计的轻量级块扩散模型。它通过并行起草机制，实现了高效且高质量的推理加速。项目支持多种主流大模型（如 Qwen、Kimi、Llama 等），并提供了 Transformers、SGLang、vLLM 等多种后端支持，旨在通过开源训练配方帮助用户加速任意 LLM 的生成速度。 |
| 12 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | A lightweight, powerful framework for multi-agent ... | Python | 21.8k | 624 | 这是一个轻量级且强大的 Python 框架，专为构建多智能体工作流设计。它支持多种 LLM 提供商，具备智能体、沙箱、工具、护栏及人机协同等核心功能，支持实时语音交互，适合开发复杂的自动化 AI 应用。 |
| 13 | [google/magika](https://github.com/google/magika) | Fast and accurate AI powered file content types de... | Python | 15.4k | 949 | Magika 是 Google 开发的基于深度学习的文件类型检测工具。它使用轻量级模型实现毫秒级检测，准确率高达 99%。支持多语言接口，已在 Google 内部大规模部署用于安全扫描，也可用于 VirusTotal 等平台。 |
| 14 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 9.4k | 229 | T3 Code 是一个极简的 Web 图形界面，旨在为 Codex 和 Claude 等编码代理提供统一的管理工具。它支持桌面应用和命令行运行，帮助用户通过可视化的方式与 AI 编程助手交互，目前项目处于早期开发阶段。 |
| 15 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 35.8k | 279 | 这是一个为 AI 编码代理设计的 MCP 服务器，允许代理控制并检查实时 Chrome 浏览器。它利用 Puppeteer 实现可靠自动化，提供性能分析、高级调试（网络、截图、控制台）和用户体验数据集成等功能，帮助 AI 进行可靠的自动化和调试。 |

[查看完整数据](api/github/2026-04-17.json)
<!-- END GITHUB TRENDING -->




