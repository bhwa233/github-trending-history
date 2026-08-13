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

**最后更新**: 2026-08-13 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 29 editorial diagram types for Claude Code. Self-c... | HTML | 14.4k | 4.5k | 这是一个为 Claude Code 提供的 27 种编辑类图表库，包含架构、流程图、状态机等多种类型。项目提供自包含的 HTML 和 SVG，设计注重编辑类质量，支持静态输出和可选动画，可重绘 draw.io/Mermaid 源文件。 |
| 2 | [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Graph-Native Infrastructure for Context and Accoun... | Python | 6.6k | 727 | Semantica 是一个开源的原生图基础设施，旨在为 AI 系统提供上下文和可问责性。它允许用户摄取企业数据，构建知识图谱，并执行因果推理和图分析。它强调决策可追溯性和可解释性，旨在解决 AI 代理缺乏审计跟踪的问题，特别适用于金融、医疗等高风险受监管领域。 |
| 3 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 169.0k | 383 | Anthropic 官方维护的 Claude Agent Skills 公开仓库。Skills 是包含指令、脚本和资源的文件夹，用于动态提升 Claude 在特定任务（如文档处理、数据分析、自动化）上的表现。包含 Apache 2.0 开源示例及文档处理技能源码参考。 |
| 4 | [cactus-compute/needle](https://github.com/cactus-compute/needle) | 14MB foundation model for tiny devices; phones, we... | Python | 4.9k | 768 | Needle 2 是一个专为小设备设计的轻量级大模型，仅 14MB，运行内存约 28MB。它基于 Simple Attention Network 和 CQ2-bit 压缩技术，支持工具调用、设备使用和结构化提取。项目提供 Python 包，包含推理、LoRA 微调及导出功能，具有自包含、置信度门控和内存限制等特性，适合手机、可穿戴设备和机器人。 |
| 5 | [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Fastest and only macOS Dictation app with on-devic... | Swift | 9.8k | 187 | FluidVoice 是一款专为 macOS 设计的极速语音转文字应用。它支持本地离线语音识别（STT），并集成了名为“Fluid Intelligence”的本地 AI 模型，提供智能格式化、上下文感知大写等增强功能。无需云端 API，保护隐私，完全开源。 |
| 6 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Local UI to run and train LLMs and diffusion model... | Python | 71.0k | 354 | Unsloth 是一款本地桌面应用，旨在高效运行和训练 LLM 及扩散模型。它提供 2 倍训练速度和 70% 显存优化，支持 Qwen、Gemma 等多种模型，具备 RAG、工具调用及远程访问功能，兼容多平台硬件。 |
| 7 | [macro-inc/macro](https://github.com/macro-inc/macro) | Macro is a unified workspace for teams: email, cha... | Rust | 2.6k | 1.2k | Macro 是一个为团队打造的统一工作空间，整合了邮件、聊天、文档、任务、CRM 和 AI 代理。它采用模块化“块”设计，支持实时协作和双向链接。使用 Rust 和 SolidJS 构建，旨在成为团队的工作操作系统。 |
| 8 | [megadose/holehe](https://github.com/megadose/holehe) | holehe allows you to check if the mail is used on ... | Python | 12.4k | 166 | 这是一个用于开源情报（OSINT）的 Python 工具，能够检查电子邮件是否在超过 120 个网站（如 Twitter、Instagram）上注册。它通过“忘记密码”功能检索账户信息，包括恢复邮箱和电话号码，且不会通知目标用户。支持命令行和 Python 库集成。 |
| 9 | [smicallef/spiderfoot](https://github.com/smicallef/spiderfoot) | SpiderFoot automates OSINT for threat intelligence... | Python | 20.7k | 278 | SpiderFoot 是一个开源 OSINT 自动化工具，通过集成数百个数据源（如 IP 查询、社交媒体、云存储、恶意域名等）来收集威胁情报并映射攻击面。它支持 Python 编写，能够自动关联和解析目标信息，帮助安全人员快速发现潜在风险。 |
| 10 | [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | Switchyard lets LLM applications route traffic acr... | Rust | 1.2k | 408 | Switchyard 是一个用 Rust 编写的 LLM 流量代理和库。它支持 OpenAI 和 Anthropic API 之间的协议转换，允许灵活地在多个模型提供商之间路由请求。它提供多种路由算法、运营指标记录，并支持 A/B 测试和成本优化，适合集成到编码代理中。 |
| 11 | [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | Open-source All in One AI agent workspace. Run any... | TypeScript | 6.6k | 380 | holaOS 是一个开源的本地优先 AI 代理工作空间，支持在一个环境中运行 Claude Code、Codex 等多个代理。它具备共享内存、100+ 工具集成及 MCP 协议支持，提供内置前沿模型或 BYOK 方案，实现无锁定、跨会话的持久化协作。 |
| 12 | [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Agent skills for Obsidian. Teach your agent to use... | - | 45.7k | 411 | 这是一个为 Obsidian 设计的 Agent Skills 集合，旨在帮助 AI 智能体（如 Claude Code、Codex）操作 Obsidian vault。它提供了创建和编辑 Markdown、Bases、JSON Canvas 文件的能力，支持通过 CLI 交互，并能从网页提取干净内容。这些技能遵循 Agent Skills 规范，易于集成。 |
| 13 | [3b1b/manim](https://github.com/3b1b/manim) | Animation engine for explanatory math videos... | Python | 90.8k | 204 | Manim 是一个用于制作解释性数学视频的精确程序化动画引擎。最初由 3Blue1Brown 作者开发，此仓库为 ManimGL 版本。它支持 Python 3.10+，并依赖 FFmpeg、OpenGL 和 LaTeX 等系统库来生成高质量的视频内容。 |
| 14 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 145.2k | 762 | 这是一个包含多种专业 AI 代理（如前端开发、Reddit 社区专家等）的集合。项目提供原生桌面应用和安装脚本，可一键将各类 AI 代理安装到 Claude Code、Cursor、Gemini 等开发工具中。每个代理具备独特个性和专业流程，旨在提升开发效率。 |
| 15 | [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Official Python inference and LoRA trainer package... | Python | 8.9k | 201 | 这是 LTX-2 音频-视频生成模型的官方 Python 推理和 LoRA 训练包。LTX-2 是首个基于 DiT 的音频-视频基础模型，支持同步音频视频、高保真输出及多种性能模式。项目提供了快速安装、模型下载及生成示例，适用于需要高质量视频生成的场景。 |
| 16 | [lightningpixel/modly](https://github.com/lightningpixel/modly) | Desktop app to generate 3D models from images usin... | TypeScript | 5.4k | 221 | Modly 是一款基于本地 AI 的桌面应用，支持 Windows、Linux 和 Apple Silicon macOS。它利用 GPU 运行开源模型，将普通照片快速转换为 3D 网格。应用内置扩展系统，支持多种 AI 模型，并提供网格平滑、简化等后期处理功能，适合本地 3D 内容创作。 |
| 17 | [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | RAGFlow is a leading open-source Retrieval-Augment... | Go | 88.0k | 473 | RAGFlow 是一个开源的检索增强生成引擎，融合了 RAG 与 Agent 能力。它提供企业级适配的 RAG 工作流，支持多模态文档解析、多渠道接入（如飞书、Discord）及多种大模型（如 GPT-5、DeepSeek）。通过编排式摄取管道和智能体模板，帮助开发者高效构建生产级 AI 系统。 |

[查看完整数据](api/github/2026-08-13.json)
<!-- END GITHUB TRENDING -->




