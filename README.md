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

**最后更新**: 2026-08-02 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 Weeks, 24 Lessons, AI for All!... | Jupyter Notebook | 59.0k | 2.6k | 这是一个由微软提供的面向初学者的 AI 课程，包含 12 周 24 课的内容。使用 Jupyter Notebook 编写，涵盖 TensorFlow、PyTorch 等工具及 AI 伦理。项目支持 50 多种语言，通过 GitHub Actions 自动更新，适合零基础学习者系统学习人工智能。 |
| 2 | [usekaneo/kaneo](https://github.com/usekaneo/kaneo) | 🎯 All you need. Nothing you don't. Open source pr... | TypeScript | 6.1k | 496 | Kaneo 是一个极简主义的开源项目管理工具，旨在通过简洁的界面和隐形的设计，减少干扰，专注于实际工作。它支持自托管，数据安全，且基于 TypeScript 开发，提供快速且无冗余功能的体验。 |
| 3 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 25.6k | 819 | AirLLM 是一个旨在大幅降低大语言模型推理显存占用的库。它通过稀疏 MoE 专家流式传输和 FP8 支持等技术，无需量化或剪枝即可在单张 4GB 显存 GPU 上运行 70B 等大模型，并支持在 8GB 显存上运行 405B 模型。 |
| 4 | [iv-org/invidious](https://github.com/iv-org/invidious) | Invidious is an alternative front-end to YouTube... | Crystal | 22.0k | 305 | Invidious 是一个基于 Crystal 语言开发的 YouTube 替代前端。它提供无广告、无追踪、无需 JavaScript 的纯净浏览体验，支持订阅、通知、音频模式及多语言。项目不依赖官方 YouTube API，支持数据导入导出，用户可选择公共实例观看或自行托管，旨在保护用户隐私。 |
| 5 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 534.8k | 674 | 该项目汇集了从零开始重建各类经典技术的分步指南，涵盖操作系统、Web浏览器、AI模型、区块链等广泛领域。通过亲手复刻技术实现，帮助开发者深入理解底层原理，是提升编程能力和系统思维的优质学习资源。 |
| 6 | [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | Reverse Engineering / Authorized Penetration Testi... | PowerShell | 13.3k | 1.1k | 这是一个面向AI代理的网络安全逆向与渗透测试技能路由包。它通过AI自动路由和按需自举工具链，解决AI在处理APK、二进制文件、CTF等任务时工具选择困难的问题。支持Claude Code等客户端，集成了IDA、Frida等工具，提供标准化的工作流和报告生成。 |
| 7 | [different-ai/openwork](https://github.com/different-ai/openwork) | The open-source alternative to Claude Cowork (powe... | TypeScript | 20.3k | 280 | OpenWork 是一款开源的跨平台桌面应用，旨在替代 Claude Cowork，用于统一管理和共享 AI 工作流。它通过 MCP 协议连接 Codex、Claude Code、Cursor 等多种 AI 工具，允许用户跨设备、跨团队复用技能和配置，提供桌面应用与浏览器集成两种使用方式。 |
| 8 | [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 21 Lessons, Get Started Building with Generative A... | Jupyter Notebook | 114.8k | 588 | 这是一个由微软推出的生成式 AI 入门课程，包含 21 个 Jupyter Notebook 课节。课程涵盖从基础概念到实际构建的全方位内容，支持 50 多种语言，适合零基础开发者快速上手生成式 AI 应用开发。 |
| 9 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 64.7k | 659 | 这是一个为 AI Agent 提供全网浏览能力的 Python 工具。它通过 CLI 实现零 API 费用，支持 Twitter、YouTube、GitHub、Bilibili、Reddit、小红书等主流平台。项目主打一键安装、自动更新、隐私安全及多后端路由，解决了 Agent 无法获取外部信息的问题，兼容所有命令行 Agent。 |
| 10 | [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TencentDB Agent Memory is a team-level memory hub ... | TypeScript | 11.0k | 602 | TencentDB Agent Memory 是一个团队级 AI 记忆中心，旨在减少 Agent 重复工作。它将对话、文档和代码转化为四种可复用资产（聊天记忆、技能、LLM-Wiki、代码图），支持跨框架共享与管理，帮助 Agent 避免重复造轮子，提升团队协作效率与稳定性。 |
| 11 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 56.9k | 206 | 这是一个 Python 编写的 AI Agent 技能，能够跨 Reddit、X、YouTube、HN、Polymarket 等平台并行搜索并综合生成基于事实的摘要。它利用点赞、金钱等真实用户数据进行评分，弥补了传统搜索引擎无法访问社交媒体数据的不足，适用于全网舆情调研与趋势分析。 |
| 12 | [NomaDamas/k-skill](https://github.com/NomaDamas/k-skill) | 한국인을 위한 스킬 모음집 - 에이전트를 한국인으로... | JavaScript | 6.9k | 177 | 这是一个面向韩国用户的实用工具合集，包含SRT/KTX火车票预订、巴士查询、天气、法律检索等多种韩国本地生活服务脚本或指南。项目旨在帮助用户或代理程序自动化处理韩国本地事务，涵盖交通、生活、行政等多个领域。 |
| 13 | [HarbourMasters/Lighthouse](https://github.com/HarbourMasters/Lighthouse) | ... | C | 218 | 65 | 这是一个基于 C 语言开发的《Banjo-Kazooie》游戏移植项目，允许用户在 PC 上运行 N64 版本的游戏。项目支持 Windows、Linux 和 macOS 系统，提供控制器映射功能，并要求用户提供合法的 ROM 文件。由 Harbour Masters 团队维护，旨在为经典游戏提供现代化的运行环境。 |
| 14 | [antirez/ds4](https://github.com/antirez/ds4) | DeepSeek 4 Flash and PRO local inference engine fo... | C | 20.0k | 139 | DwarfStar 是一个专为 DeepSeek V4 Flash 优化的本地推理引擎，支持 Metal、CUDA 和 ROCm。它支持 GLM 5.2 和 DeepSeek V4 PRO，具备 SSD 流式传输和多 GPU 支持，可在消费级硬件上运行大型模型。 |
| 15 | [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | DeepSeek-native AI coding agent for your terminal.... | Go | 29.0k | 333 | DeepSeek-Reasonix 是一个基于 Go 语言开发的终端 AI 编码代理，专为 DeepSeek 模型优化。它采用配置驱动和插件架构，支持多模型组合与 MCP 协议。核心优势在于前缀缓存稳定性，支持长时间运行且降低 Token 成本，提供单二进制分发。 |

[查看完整数据](api/github/2026-08-02.json)
<!-- END GITHUB TRENDING -->




