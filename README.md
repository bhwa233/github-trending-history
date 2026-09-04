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

**最后更新**: 2026-09-03 | **成功**: 19 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [fmtlib/fmt](https://github.com/fmtlib/fmt) | A modern formatting library... | C++ | 25.1k | 963 | {fmt} 是一个现代、高性能且安全的 C++ 格式化库。它提供了类似 Python 的语法，支持 C++20 std::format 和 C++23 std::print。该库比标准库实现更快，具备类型安全、无缓冲区溢出风险、无外部依赖和轻量级等特点，适用于高性能字符串格式化场景。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 247.4k | 1.6k | 这是一套专为真实工程师设计的 AI 编程技能集合，旨在通过小巧、可组合的脚本帮助开发者构建稳健的应用程序。它支持 Claude Code 和 Codex 等多种模型，提供订阅或本地编辑两种安装方式，通过运行特定命令快速配置项目开发流程。 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 240.8k | 774 | 这是一个由 Nous Research 构建的自我改进 AI 代理。它具备内置的学习循环，能从经验中创建和改进技能，搜索过往对话，并建立跨会话的用户模型。支持多平台（Telegram, Discord 等）和多种后端（本地, Docker, Modal 等），提供强大的终端界面和自动化调度功能，旨在成为伴随用户成长的智能助手。 |
| 4 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 123.4k | 2.1k | Ponytail 是一个 JavaScript 项目，旨在让 AI 代理表现得像一位“懒惰的资深开发者”。它通过“只写一行代码”的提示策略，显著减少代码行数、令牌消耗、成本和时间，同时保持 100% 的安全性。实测表明，相比无技能的 AI，它能减少约 54% 的代码量，适用于需要高效、简洁代码生成的场景。 |
| 5 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 173.6k | 281 | Anthropic 官方维护的 Claude Agent Skills 公共仓库。包含用于提升 Claude 特定任务能力的技能文件夹，涵盖创意、技术及企业工作流。每个技能自包含指令与资源，通过 SKILL.md 定义。仓库还提供了文档处理等底层技能的参考实现，旨在帮助开发者创建自定义技能并理解相关模式。 |
| 6 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 247.2k | 751 | ECC 是一个专为 Claude Code、Cursor 等 AI 代理设计的性能优化系统。它为代理提供协调的工程工具箱，包含技能、记忆、安全性和研究优先的开发能力。支持规划、测试和自我审查，旨在提升 AI 编码代理的效率和可靠性。 |
| 7 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick — Cl... | Go | 103.1k | 543 | 该项目通过将 AI 编码助手的回复语言简化为'穴居人模式'，旨在减少 token 消耗。它包含两种组件：作为技能的规则文件（重写回复）和本地代理（压缩输入），声称能节省 65% 的 token，支持多种 AI 工具。 |
| 8 | [blader/humanizer](https://github.com/blader/humanizer) | Agent skill that removes signs of AI-generated wri... | Python | 41.5k | 1.2k | 这是一个 Python 项目，旨在通过移除 AI 生成文本的痕迹来重写文本，使其听起来像人类写的。它利用维基百科的 35 种模式检测并修复 AI 风格。项目支持 Markdown，保留事实细节，并提供风格匹配功能，适用于任何支持技能的 Agent。 |
| 9 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 30.7k | 1.6k | TimesFM 是 Google Research 开发的时间序列基础模型，最新版本 TimesFM 3.0 支持原生多变量和单变量预测，具备灵活的协变量支持。该模型在多个基准测试中表现优异，排名前列，并已集成到 Google 的企业级产品中。 |
| 10 | [averygan/reclip](https://github.com/averygan/reclip) | Download videos from almost any website. Lightweig... | HTML | 8.4k | 88 | 这是一个轻量级、自托管的媒体下载工具，后端仅由约 150 行 Python 代码构成。它利用 yt-dlp 引擎，支持从 YouTube、TikTok 等 1000+ 网站下载 MP4 或 MP3，具备批量处理、画质选择及去重功能。前端采用原生 HTML/CSS/JS，无需构建，适合个人快速抓取网络视频音频。 |
| 11 | [bannedbook/fanqiang](https://github.com/bannedbook/fanqiang) | 翻墙-科学上网... | Kotlin | 52.2k | 522 | 这是一个集成了多种翻墙协议的 Chrome 浏览器扩展（ChromeGo），支持 V2ray、SSR、Trojan 等。项目还提供了 Windows、Mac、Android、iOS、Linux 等多平台的翻墙软件教程和配置指南，旨在帮助用户突破网络限制，访问被屏蔽的网站和服务。 |
| 12 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 92.0k | 264 | 这是一个面向 AI 编码代理的生产级工程技能库。它通过 9 个斜杠命令将资深工程师的工作流程、质量门禁和最佳实践编码为技能，确保 AI 在开发全生命周期中保持一致的高标准。支持自动生成计划、测试驱动开发及特定场景的技能激活，旨在减少手动步骤并提升代码质量。 |
| 13 | [ByteByteGoHq/system-design-101](https://github.com/ByteByteGoHq/system-design-101) | Explain complex systems using visuals and simple t... | - | 88.3k | 171 | 该项目通过丰富的视觉图表和简洁的文字，系统性地讲解复杂系统的设计原理，是系统设计面试备考和架构知识学习的优质资源。 |
| 14 | [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | Open source inference server that runs the best lo... | TypeScript | 1.9k | 161 | Magnitude 是一个开源推理服务器，旨在在本地硬件上运行最佳大语言模型，并无缝集成到现有的 AI 代理中。它分析用户的硬件，推荐合适的模型，并处理下载和调优，确保完全离线、私密且零成本的使用体验。 |
| 15 | [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic Research Skills for Claude Code: research... | Python | 46.0k | 496 | 这是一个为 Claude Code 设计的学术研究技能套件，涵盖从研究到定稿的全流程。它利用 AI 处理引用、格式化和数据验证等繁琐工作，同时通过风格校准和质量检查确保人类逻辑和原创性。项目强调“人类在回路”模式，旨在辅助而非替代人类研究者，防止 AI 幻觉和逻辑错误，提升论文质量。 |
| 16 | [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | runs anywhere. uses anything... | TypeScript | 32.3k | 451 | OpenClaude 是一个开源的编码代理 CLI，支持云端和本地模型提供商。它通过统一的终端工作流，集成了多种后端（如 OpenAI、Gemini、Ollama 等），提供 MCP、斜杠命令和 VS Code 扩展支持，旨在简化多模型开发体验。 |
| 17 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 16.3k | 1.7k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，基于 Python 开发。它支持 16 种 TTS 和 11 种 ASR 引擎，覆盖 646 种语言，提供语音克隆、视频配音、听写、转录和有声书创作功能。无需账号或订阅，完全在本地硬件运行，支持 macOS、Windows 和 Linux，适合需要隐私保护和离线使用的语音处理场景。 |
| 18 | [f/prompts.chat](https://github.com/f/prompts.chat) | f.k.a. Awesome ChatGPT Prompts. Share, discover, a... | HTML | 169.0k | 168 | 这是一个世界最大的开源 AI 提示词库，支持 ChatGPT、Claude 等主流模型。提供交互式提示工程书籍和儿童游戏，支持自托管以保障隐私。适合 AI 初学者、开发者及企业团队收藏和使用。 |
| 19 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 281.3k | 462 | Superpowers 是一个为编码代理设计的软件开发方法论框架。它通过可组合的技能，引导代理先明确目标、制定详细计划（强调 TDD、YAGNI、DRY），再自主执行开发任务。该框架支持多种主流 AI 编码工具，旨在实现高效的自动化编程。 |

[查看完整数据](api/github/2026-09-03.json)
<!-- END GITHUB TRENDING -->




