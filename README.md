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

**最后更新**: 2026-06-23 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 15.6k | 3.6k | OpenMontage 是全球首个开源的代理视频制作系统，包含12条流水线和52个工具。用户只需用自然语言描述需求，系统即可自动完成从研究、脚本编写、素材生成到剪辑合成的全流程。它不仅能制作基于图像的视频，还能通过调用免费素材库和实际运动剪辑，生成具有真实动态效果的视频作品。 |
| 2 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 47.0k | 1.1k | 这是一个基于 Python 的 LLM 驱动多市场股票智能分析系统，支持 A股、港股、美股等。它能聚合多源行情与新闻，生成 AI 决策报告，并自动推送至企业微信、飞书等平台。支持零成本 GitHub Actions 部署，适合个人投资者进行自动化选股与决策。 |
| 3 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 817 structured cybersecurity skills for AI agents ... | Python | 19.7k | 1.0k | 该项目包含817个结构化的网络安全技能，遵循agentskills.io标准，并将技能映射到MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND、NIST AI RMF和MITRE F3六大框架。旨在为AI代理提供资深分析师级别的安全调查指导，支持Claude Code、GitHub Copilot等多种平台。 |
| 4 | [garrytan/gstack](https://github.com/garrytan/gstack) | Use Garry Tan's exact Claude Code setup: 23 opinio... | TypeScript | 114.0k | 1.0k | 这是一个将 Claude Code 转化为虚拟工程团队的工具集，包含 23 个有偏见的工具，分别扮演 CEO、设计师、工程经理、发布经理、文档工程师和 QA 等角色。旨在通过 AI 辅助，让个人开发者以团队规模的速度交付产品，显著提升开发效率。 |
| 5 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | An open-source long-horizon SuperAgent harness tha... | Python | 73.9k | 739 | DeerFlow 是字节跳动开源的 2.0 版本超级代理框架，通过编排子代理、沙箱、记忆和技能，实现复杂的长周期任务自动化。它支持研究、编码和内容创作，集成了搜索工具，能够高效处理从几分钟到几小时的工作流。 |
| 6 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time global intelligence dashboard. AI-powere... | TypeScript | 59.1k | 294 | 这是一个基于 TypeScript 的实时全球情报仪表盘。项目集成了 AI 新闻聚合、地缘政治监控和国家不稳定指数 (CII)。支持 3D/2D 双地图引擎、金融雷达及本地 AI (Ollama)。提供多站点变体和跨流信号相关性分析，支持桌面应用和多语言，旨在提供统一态势感知界面。 |
| 7 | [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | macOS video editor built for AI... | Swift | 8.4k | 1.6k | Palmier Pro 是一款基于 Swift 开发的 macOS 视频编辑器，旨在将 AI 深度集成到创作工作流中。它允许用户与 AI 代理在时间轴上协作生成和编辑视频。内置了 Seedance、Kling 等先进生成式 AI 模型，支持通过 MCP 协议连接 Claude、Cursor 等工具。编辑器核心功能开源，但生成式 AI 处理需订阅。 |
| 8 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 30.8k | 77 | Anthropic 官方维护的高质量 Claude Code 插件目录。包含内部及第三方插件，提供标准化的安装方式（如 /plugin install）和插件结构规范。用户可在此发现并安装插件，但需注意安全风险。 |
| 9 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | from vibe coding to agentic engineering - practice... | HTML | 59.4k | 344 | 这是一个关于 Claude Code 最佳实践的项目，旨在帮助开发者从“氛围编码”转向“代理工程”。项目详细展示了如何配置子代理、命令、技能、工作流、钩子、MCP 服务器和插件等高级功能，并提供了代码审查、自动模式等热门功能的实践指南。 |
| 10 | [revfactory/harness](https://github.com/revfactory/harness) | A meta-skill that designs domain-specific agent te... | HTML | 7.4k | 128 | Harness 是一个为 Claude Code 设计特定领域代理团队的元技能。它通过自然语言指令自动生成代理定义和技能，支持流水线、专家池等六种团队架构模式，帮助用户快速构建复杂的 AI 代理协作系统。 |
| 11 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 33.1k | 1.0k | Voicebox 是一个本地优先的 AI 声音工作室，开源替代 ElevenLabs 和 WisprFlow。它支持零样本声音克隆、23种语言的7种TTS引擎语音合成、全局热键听写以及与 AI 代理集成。所有模型和数据均在本地运行，保护隐私，支持多轨故事编辑和丰富的语音效果。 |
| 12 | [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Clone any website with one command using AI coding... | TypeScript | 18.5k | 826 | 这是一个基于 Next.js 的可重用模板，利用 AI 编码代理（推荐 Claude Code）通过一条命令自动反向工程并克隆任何网站。它能提取设计令牌、资产和组件规范，生成现代化的代码库，极大地加速了前端开发流程。 |
| 13 | [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips) | An advanced guide to learn English which might ben... | - | 54.5k | 125 | 这是一个结合个人经验与科学依据的高级英语学习指南。项目重点更新了2026版AI章节，推荐使用Gemini作为学习主引擎，并详细介绍了AI辅助学习的方法。此外，还整合了token.love和ku0.com等AI资源。旨在帮助用户通过AI技术高效、自然地掌握英语，开启语言学习的奇妙冒险。 |
| 14 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | High-performance code intelligence MCP server. Ind... | C | 12.9k | 1.3k | 这是一个高性能的代码智能 MCP 服务器，使用 C 语言编写。它通过树-sitter AST 分析和混合 LSP 语义解析，将代码库索引为持久知识图谱。支持 158 种语言，平均仓库毫秒级索引，Linux 内核 3 分钟。提供 14 个 MCP 工具，单静态二进制零依赖，内置 3D 可视化，确保代码 100% 本地处理，安全高效。 |
| 15 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 200.9k | 936 | 这是一个由 Nous Research 构建的自我改进 AI 智能体。它具备内置的学习循环，能从经验中创建技能并优化记忆。支持跨平台（Telegram、CLI 等）交互，兼容多种大模型，并具备自动化任务、并行子代理及灵活的部署能力，旨在成为伴随用户成长的智能助手。 |
| 16 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 220.5k | 593 | ECC 是一个跨 AI 代理工具（如 Claude Code, Cursor）的性能优化系统。它提供技能、记忆、安全扫描和持续学习功能，旨在提升代理工具的效率和可用性。支持多平台工作流，包含钩子、规则和配置，适合需要管理复杂 AI 代理工作流的开发者。 |

[查看完整数据](api/github/2026-06-23.json)
<!-- END GITHUB TRENDING -->




