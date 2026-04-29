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

**最后更新**: 2026-04-28 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 37.2k | 7.4k | 这是一个为 Claude Code 等编码代理设计的技能集，旨在帮助工程师避免“氛围编码”，通过 `/grill-me` 等命令解决需求理解偏差，提升开发效率和代码质量。支持快速安装和自定义配置。 |
| 2 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 32.6k | 1.6k | GitNexus 是一个零服务器代码智能引擎，完全在浏览器中运行。它将代码库索引为知识图谱，追踪依赖关系和调用链，并提供 Graph RAG Agent。它支持本地隐私，并通过 CLI/MCP 与 Cursor、Claude 等 AI 代理集成，帮助它们理解复杂的代码架构。 |
| 3 | [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | A curated list of practical Codex skills for autom... | Python | 4.0k | 961 | 这是一个精选的 Codex 技能列表，旨在通过模块化的指令包自动化工作流。这些技能支持跨 1000+ 应用执行操作（如发送邮件、发布 Slack），涵盖开发、生产力、沟通等领域。项目提供了安装脚本，允许用户将技能集成到 Codex CLI 中，通过元数据触发特定任务，提升 AI 的执行能力。 |
| 4 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 44.8k | 1.5k | VibeVoice 是微软开源的前沿语音 AI 模型家族，包含 TTS 和 ASR。TTS 支持长篇多说话人合成及实时流式生成，ASR 支持超长音频（60分钟）及多语言结构化转录。现已集成至 Hugging Face Transformers，支持 vLLM 推理加速。 |
| 5 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 26.1k | 347 | 该项目是一个为 Anthropic Claude Code 提供即用型配置的 CLI 工具。它包含 100 多个 AI 代理、自定义命令、MCP 集成、设置和钩子，旨在通过 Web 仪表板增强开发工作流。支持通过 npx 快速安装特定组件。 |
| 6 | [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | Useful tool to track location or mobile number... | Python | 10.6k | 976 | GhostTrack 是一个基于 Python 的开源情报（OSINT）工具，主要用于信息收集。它提供 IP 追踪、手机号码查询以及社交媒体用户名搜索功能，帮助用户获取目标对象的网络足迹和基本信息。 |
| 7 | [fspecii/ace-step-ui](https://github.com/fspecii/ace-step-ui) | 🎵 The Ultimate Open Source Suno Alternative - Pro... | JavaScript | 1.7k | 263 | 这是一个为 ACE-Step 1.5 AI 音乐模型提供专业界面的开源项目。它允许用户在本地免费生成完整的歌曲（含人声或纯音乐），支持自定义参数、批量生成和风格参考。作为 Suno 的替代品，它强调隐私、无限制和完全本地化运行，适合追求高质量且无需付费的音乐创作者。 |
| 8 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 428.1k | 600 | 这是一个由社区成员手动策划的免费公共 API 集合。项目涵盖了动物、动漫、商业、天气、金融等众多领域的 API，旨在为开发者提供寻找和集成免费 API 的资源库。它不仅包含 API 列表，还提供了详细的分类索引和文档链接，是开发者寻找 API 资源的重要参考。 |
| 9 | [CJackHwang/ds2api](https://github.com/CJackHwang/ds2api) | Deepseek to API: A lightweight, high-performance f... | Go | 2.3k | 418 | 这是一个将 DeepSeek Web 对话能力转换为 OpenAI、Claude 和 Gemini 兼容 API 的轻量级全栈中间件。后端使用 Go 实现，支持多账号轮询、流式响应和 PoW 验证，前端为 React 管理台。支持 Docker、Vercel Serverless 部署，兼容多种客户端协议。 |
| 10 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use claude-code for free in the terminal, VSCode e... | Python | 17.5k | 1.7k | 这是一个免费使用 Claude Code 的代理工具，支持 CLI、VS Code 扩展及 Discord 机器人。它通过路由 Anthropic API 流量至 NVIDIA NIM、OpenRouter 等免费或本地模型，实现了流式传输、工具调用及推理块处理等功能，让用户无需付费即可享受 Claude Code 的强大能力。 |
| 11 | [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) | Learn how to design large-scale systems. Prep for ... | Python | 345.8k | 734 | 这是一个开源的系统设计学习指南，旨在帮助工程师掌握大规模系统设计原理，并为系统设计面试做准备。项目包含丰富的学习资源、面试题库及解决方案，并提供了基于间隔重复算法的 Anki 闪卡，支持多语言，鼓励社区贡献。 |
| 12 | [EbookFoundation/free-programming-books](https://github.com/EbookFoundation/free-programming-books) | 📚 Freely available programming books... | Python | 386.6k | 133 | 该项目由 Free Ebook Foundation 维护，是一个汇集了多种编程语言和主题的免费电子书资源列表。支持多语言分类与搜索，旨在促进免费教育资源的创建、分发与存档，是 GitHub 上极具影响力的开源学习库。 |
| 13 | [iamgio/quarkdown](https://github.com/iamgio/quarkdown) | 🪐 Markdown with superpowers: from ideas to papers... | Kotlin | 12.0k | 797 | Quarkdown 是一个基于 Kotlin 的现代 Markdown 排版系统，通过 Turing-complete 扩展将单一 Markdown 文件编译为书籍、学术论文、知识库或交互式演示文稿。它支持函数调用、变量定义及复杂逻辑，结合快速编译和 VS Code 扩展，实现从想法到成品的自动化转换。 |

[查看完整数据](api/github/2026-04-28.json)
<!-- END GITHUB TRENDING -->




