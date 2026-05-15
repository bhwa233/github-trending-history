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

**最后更新**: 2026-05-15 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 9.0k | 1.3k | OpenHuman 是一个基于 Rust 的开源个人 AI 代理助手。它提供简洁的桌面 UI 和桌面吉祥物，支持 118+ 第三方应用集成（如 Gmail、Notion）。核心采用本地 SQLite 存储的 Memory Tree 技术，将数据转化为 Markdown 知识库，实现跨会话记忆与自动上下文获取，旨在打造私密、强大的个人智能体。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 192.8k | 1.6k | Superpowers 是一个为 AI 编码代理构建的软件开发方法论框架。它通过引导用户明确需求、展示设计规范、制定包含 TDD 和 YAGNI 原则的实施计划，并利用子代理进行自主开发，显著提升了 AI 编码的规范性和自主性。 |
| 3 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | A set of ready to use Agent Skills for research, s... | Python | 22.4k | 643 | 这是一个包含135+个科学领域现成Agent Skills的项目，支持生物信息学、化学信息学、蛋白质组学等多个领域。它兼容开放Agent Skills标准，可与Cursor、Claude Code等工具集成。项目还提供了K-Dense BYOK本地运行方案，支持Web搜索和100+科学数据库，旨在将AI Agent转化为强大的科研助手。 |
| 4 | [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | Lightning-Fast, On-Device, Multilingual TTS — runn... | Swift | 6.0k | 712 | Supertonic 是一个极快、本地运行的文本转语音（TTS）系统。它利用 ONNX Runtime 在设备端进行推理，无需云端，保护隐私。支持多语言和多种语音风格，提供 Python 和 Flutter SDK，适合需要离线语音合成的应用场景。 |
| 5 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 57.5k | 1.9k | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 ESP32 传感器捕获信道状态信息（CSI），将 WiFi 信号转化为空间智能。它能通过墙壁检测人员存在、监测呼吸心率、识别活动（如跌倒）及环境映射，无需摄像头或可穿戴设备。 |
| 6 | [influxdata/telegraf](https://github.com/influxdata/telegraf) | Agent for collecting, processing, aggregating, and... | Go | 17.4k | 213 | Telegraf 是一个用 Go 语言编写的数据收集代理，拥有超过 300 种插件，支持从系统、日志、消息传递等多种来源采集、处理和聚合指标与日志，并写入目标端。它提供独立的静态二进制文件，配置简单，适用于系统监控、日志采集及云服务集成等场景。 |
| 7 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 135.1k | 625 | Anthropic 官方维护的 Claude Agent Skills 公共仓库，包含一系列用于提升 Claude 在特定任务中性能的技能。这些技能涵盖创意、技术及企业工作流，以独立文件夹形式存在，包含指令和脚本。该仓库旨在展示技能系统的可能性，为开发者提供创建自定义技能的参考和灵感。 |
| 8 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | A MCP for Claude Desktop / Claude Code / Windsurf ... | TypeScript | 20.9k | 68 | 这是一个 TypeScript 编写的 MCP 服务器，连接 AI 助手与 n8n 平台。它提供对 1,650 个节点、属性、操作及模板的全面访问，帮助 Claude 等助手高效构建自动化工作流，支持快速部署与社区节点搜索。 |
| 9 | [NVIDIA-AI-Blueprints/video-search-and-summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) | Suite of reference architectures for building GPU-... | Python | 1.1k | 305 | NVIDIA 提供的参考架构套件，旨在构建 GPU 加速的视觉代理和 AI 视频分析应用。它结合了视觉语言模型 (VLM)、大语言模型 (LLM) 和加速微服务，支持实时视频智能、下游分析和离线处理。主要功能包括视频搜索、问答、总结和剪辑检索，适用于智能空间监控、仓库自动化等场景，帮助提升决策效率和运营能力。 |
| 10 | [oven-sh/bun](https://github.com/oven-sh/bun) | Incredibly fast JavaScript runtime, bundler, test ... | Rust | 90.6k | 395 | Bun 是一个用 Rust 编写的极速 JavaScript 运行时、打包器、测试运行器和包管理器。它旨在替代 Node.js，提供更快的性能和更简单的开发体验，同时完全兼容 Node.js API。 |
| 11 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 84.9k | 3.2k | 这是一个专为 Claude 等编码代理设计的实用技能集合，旨在解决 AI 代理常见的误解问题。项目提供 Shell 脚本，支持快速安装和配置（如选择问题跟踪器、标签等）。包含 /grill-me 和 /triage 等命令，帮助工程师通过详细问答和分类管理，更高效地与 AI 协作，专注于实际工程而非“氛围编程”。 |
| 12 | [joeseesun/qiaomu-anything-to-notebooklm](https://github.com/joeseesun/qiaomu-anything-to-notebooklm) | Claude Skill: Multi-source content processor for N... | Python | 2.7k | 465 | 这是一个基于 Claude Code 的 Python 项目，旨在将多源内容（微信、网页、PDF等）智能处理并上传至 Google NotebookLM。它支持15+种格式，核心亮点是具备强大的付费墙绕过能力，可自动生成播客、PPT、思维导图和Quiz，极大提升了信息获取与整理效率。 |

[查看完整数据](api/github/2026-05-15.json)
<!-- END GITHUB TRENDING -->




