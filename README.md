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

**最后更新**: 2026-09-04 | **成功**: 16 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 250.4k | 2.8k | 这是一个面向真实工程师的 AI 技能集合，旨在解决传统开发流程中控制权丧失的问题。它包含一系列小型、可组合的 Shell 脚本，支持 Claude Code 和其他编码代理。用户可以选择托管订阅模式或本地可编辑模式，通过运行特定命令快速配置开发环境，提升工程效率。 |
| 2 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 126.0k | 1.7k | Ponytail 是一个提示词技能，旨在让 AI 代理像懒惰的资深开发者一样思考。它利用 YAGNI 原则和单行代码策略，显著减少代码量、token 消耗、成本和时间，同时保持 100% 安全性。实测相比无技能基线，代码量减少 54%，适用于追求高效、简洁代码生成的场景。 |
| 3 | [fmtlib/fmt](https://github.com/fmtlib/fmt) | A modern formatting library... | C++ | 25.5k | 688 | {fmt} 是一个现代、高性能的 C++ 格式化库，旨在替代 C stdio 和 C++ iostreams。它实现了 C++20 std::format 和 C++23 std::print，支持类似 Python 的格式化语法。该库具有类型安全、零依赖、小体积和极快的性能，是构建高性能 C++ 应用的理想选择。 |
| 4 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 248.5k | 1.1k | ECC 是一个面向 AI 代理（如 Claude Code）的性能优化系统。它为代理提供技能、本能、记忆、安全和研究优先的开发工具，旨在构建协调的工程环境。通过 npm 或插件安装，ECC 帮助代理实现规划、测试验证、自我审查及记忆管理，从而提升开发效率与代码质量。 |
| 5 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 174.1k | 511 | 这是一个 Anthropic 官方的 Claude Agent Skills 公共仓库。它包含了一系列用于提升 Claude 在特定任务（如文档创建、数据分析、自动化等）性能的技能。每个技能都是自包含的文件夹，包含指令和脚本，旨在演示 Claude 的能力并作为开发者的参考。 |
| 6 | [blader/humanizer](https://github.com/blader/humanizer) | Agent skill that removes signs of AI-generated wri... | Python | 42.7k | 1.1k | 这是一个 Python 项目，旨在移除文本中的 AI 生成痕迹。它利用维基百科的 35 种模式重写文本，使其听起来像人类写作，同时保留原意和事实。支持文件路径处理、风格匹配以及显示重写过程，适用于任何支持技能的 Agent。 |
| 7 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 241.5k | 720 | 这是一个由 Nous Research 开发的自我改进 AI 代理。它具备内置学习循环，能从经验中创建技能并自我优化。支持多平台（Telegram, Discord 等）和全功能终端界面。内置自动化调度器和子代理并行处理能力，可运行于多种环境，且不绑定特定模型。 |
| 8 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick — Cl... | Go | 103.6k | 501 | 处理失败 |
| 9 | [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | Open source inference server that runs the best lo... | TypeScript | 2.5k | 391 | Magnitude 是一个开源推理服务器，旨在本地运行最佳模型。它通过分析硬件配置推荐合适的模型，支持离线、私有的 AI 代理工作流。兼容 Claude Code、Cline 等工具，通过 CLI 即可快速配置，无需 API 密钥。 |
| 10 | [bikini/exploitarium](https://github.com/bikini/exploitarium) | A single archive of public exploit PoCs and vulner... | Python | 4.5k | 74 | 该项目是一个包含公开漏洞利用 PoC 和漏洞研究文章的存档仓库，主要使用 Python 编写。作者旨在通过分享研究成果吸引更多人进入安全领域。项目包含多个独立 PoC 及研究条目，部分内容涉及 AI 辅助模糊测试，作者承诺会持续更新并扩展 PoC 以适应更多环境。 |
| 11 | [bannedbook/fanqiang](https://github.com/bannedbook/fanqiang) | 翻墙-科学上网... | Kotlin | 52.8k | 730 | 这是一个集成了多种翻墙工具与教程的综合性项目库。包含安卓APP、Chrome一键翻墙包（ChromeGo）及多平台（Windows/Mac/Linux/路由器/游戏机）的配置指南。ChromeGo集成了v2ray、SSR等多种协议，内置免费服务器，旨在帮助用户突破网络限制。 |
| 12 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 18.0k | 1.3k | VoiceStudio 是一个完全本地化的 ElevenLabs 开源替代品，支持语音克隆、视频配音、听写和有声书创作。它集成了 16 个 TTS 和 11 个 ASR 引擎，覆盖 646 种语言。无需账号或订阅，支持 macOS、Windows 和 Linux，提供桌面应用及多种 API 接口，适合在本地硬件上处理语音任务。 |
| 13 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 31.1k | 342 | TimesFM 是 Google Research 开发的预训练时间序列基础模型，专注于时间序列预测。最新版本 TimesFM 3.0 引入原生多变量与单变量预测及灵活协变量支持，在多个基准测试中排名第一。它支持 BigQuery ML 等集成，代码与权重基于 Apache-2.0 许可证。 |
| 14 | [radixark/miles](https://github.com/radixark/miles) | Miles is an enterprise-facing reinforcement learni... | Python | 2.6k | 64 | Miles 是一个企业级的大规模模型后训练强化学习框架，专为 LLM 和 VLM 设计。它结合 SGLang 与 Megatron-LM，支持万亿参数规模训练，具备完全异步 RL、快速权重更新及 8/4-bit 精度支持，提供生产级性能。 |
| 15 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 204.1k | 345 | OpenCode 是一个开源的 AI 编码代理工具，支持命令行和桌面应用。它利用人工智能技术辅助开发者进行代码编写、修改和生成，旨在提升编程效率。 |
| 16 | [clshortfuse/renodx](https://github.com/clshortfuse/renodx) | Renovation Engine for DirectX Games... | HLSL | 3.5k | 261 | RenoDX 是一个用于 DirectX 游戏的改造引擎工具集。它利用 Reshade 的附加组件系统，无需修补 exe 文件即可替换着色器、注入缓冲区、添加覆盖层和升级资源。项目包含 FPS 限制器、开发工具和着色器反编译器，旨在提供广泛的兼容性和便捷的 modding 体验。 |
| 17 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 38 editorial diagram types for Claude Code, Codex,... | HTML | 30.9k | 437 | 该项目为 Claude Code 等工具提供 39 种高质量编辑类图表类型，生成符合品牌风格的架构图与流程图。采用自包含 HTML + SVG，无外部依赖，支持静态输出与可选动画，旨在替代通用的圆角矩形，提升视觉专业度。 |

[查看完整数据](api/github/2026-09-04.json)
<!-- END GITHUB TRENDING -->




