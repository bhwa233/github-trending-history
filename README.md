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

**最后更新**: 2026-06-02 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 6.6k | 1.3k | Headroom 是一个专为 AI 代理设计的上下文压缩层，旨在显著减少 LLM 的 token 消耗。它支持 Python 和 TypeScript，提供库、代理和 MCP 服务器等多种形式。通过压缩工具输出、日志和 RAG 块，它能减少 60-95% 的 token，同时保持答案一致，支持本地运行和可逆压缩。 |
| 2 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 141.2k | 3.6k | 这是一个轻量级 Python 工具，用于将 PDF、Office 文档、图片、音频等多种格式转换为 Markdown。它专注于保留文档结构（如标题、列表、表格），专为 LLM 文本分析管道设计，旨在提供比 textract 更适合机器消费的输出格式。 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 204.0k | 1.5k | ECC 是一个跨 AI 代理工具（如 Cursor、Claude Code）的性能优化系统。它提供了一套完整的操作员系统，包含技能、直觉、记忆优化、安全扫描和持续学习功能。项目支持多工具工作流，旨在提升代理效率，并包含 Token 优化、并行化和子代理编排等高级特性。 |
| 4 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ An adaptive Web Scraping framework that handle... | Python | 59.2k | 1.2k | Scrapling 是一个 Python 编写的自适应 Web Scraping 框架，支持从单次请求到大规模爬虫。它具备智能解析器，能自动适应网站结构变化；内置 Fetchers 可绕过 Cloudflare 等反爬系统；Spider 框架支持并发、多会话及代理轮换。适合需要高效、隐蔽且灵活的网页数据采集场景。 |
| 5 | [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | Hermes WebUI: The best way to use Hermes Agent fro... | Python | 12.6k | 1.7k | Hermes WebUI 是一个轻量级暗色主题 Web 界面，为 Hermes Agent 提供与 CLI 体验完全一致的功能。支持会话管理、工作区浏览及配置，通过 SSH 隧道安全访问，无需构建步骤，支持多容器部署。 |
| 6 | [reconurge/flowsint](https://github.com/reconurge/flowsint) | A modern platform for visual, flexible, and extens... | TypeScript | 4.5k | 124 | Flowsint 是一个开源的 OSINT 图探索工具，专注于网络侦察。它提供可视化图界面探索实体关系，并内置多种自动化丰富器（如 DNS、IP、ASN、社交媒体等）。项目强调隐私，数据本地存储，适合网络安全分析师进行调查和验证。 |
| 7 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 25.1k | 783 | VoxCPM2 是一个基于扩散自回归架构的 tokenizer-free 多语言 TTS 系统。它支持 30 种语言、声音设计、可控克隆及终极克隆，能输出 48kHz 高质量音频。具备上下文感知合成和实时流式传输能力，完全开源且商业就绪。 |
| 8 | [stefan-jansen/machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading) | Code for Machine Learning for Algorithmic Trading,... | Jupyter Notebook | 18.5k | 574 | 该项目是《机器学习用于算法交易》第2版的代码库，包含150多个Jupyter Notebook。它涵盖了从线性回归到深度强化学习的多种ML技术，展示了如何利用市场、基本面及文本数据构建、回测和评估交易策略，旨在通过实践案例展示ML如何为交易策略增加价值。 |
| 9 | [jamwithai/production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) | ... | Python | 6.4k | 30 | 这是一个面向学习者的生产级 RAG 系统实战课程。通过7周的学习，从零构建一个基于 arXiv 论文的研究助手。课程强调专业路径，先掌握 BM25 关键词搜索基础，再结合向量检索构建混合搜索系统。最终集成了 Docker、FastAPI、LangGraph 和 Telegram Bot，涵盖数据管道、智能分块、本地 LLM 调用及生产监控，帮助开发者掌握现代 AI 工程技能。 |
| 10 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 24.7k | 680 | Supermemory 是一个为 AI 时代设计的极速记忆引擎，旨在解决 AI 记忆缺失问题。它具备事实提取、用户画像构建、自动遗忘及混合搜索功能，支持多模态处理和多种数据源连接。开发者可将其作为上下文栈，为 AI 应用赋予持久化记忆能力。 |
| 11 | [Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | Talk to any LLM with hands-free voice interaction,... | Python | 8.4k | 66 | 这是一个本地运行的跨平台 AI 伴侣项目，支持语音交互和 Live2D 虚拟形象。它可在 Windows、macOS 和 Linux 上运行，提供 Web 版和桌面版（含透明背景模式）。项目目前处于 v2.0 重写阶段，专注于离线体验和个性化角色定制。 |

[查看完整数据](api/github/2026-06-02.json)
<!-- END GITHUB TRENDING -->




