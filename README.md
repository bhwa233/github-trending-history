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

**最后更新**: 2026-07-06 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Extracted system prompts from Anthropic - Claude F... | JavaScript | 51.5k | 1.4k | 该项目致力于收集并公开 Anthropic、OpenAI、Google、xAI 等主流 AI 模型的系统提示词。它详细记录了 Claude、ChatGPT、Gemini、Grok 等产品的底层指令，并提供版本更新与差异对比，帮助开发者了解 AI 的行为规则。 |
| 2 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 70.8k | 1.1k | 该项目为 AI 编码代理提供生产级工程技能，将资深工程师的工作流、质量门控和最佳实践封装成技能。包含 8 个斜杠命令覆盖全生命周期开发，支持自动生成计划和测试驱动开发，适用于 Claude Code、Cursor 等多种 AI 编码工具。 |
| 3 | [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | Privacy first, AI meeting assistant with 4x faster... | Rust | 19.3k | 2.5k | Meetily 是一款基于 Rust 的隐私优先 AI 会议助手，支持实时转录、说话人分离和 Ollama 总结。它完全在本地运行，无需云端，确保数据主权，适合需要数据安全和合规的企业及个人用户。 |
| 4 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 77.5k | 470 | RuView 是一个基于 Rust 开发的 WiFi 传感平台，利用信道状态信息（CSI）将普通 WiFi 信号转化为空间智能。它能在无摄像头、无穿戴设备的情况下，穿透墙壁检测人体存在、呼吸心率、活动状态及睡眠质量，并支持与 Home Assistant、Apple Home 等主流智能家居生态无缝集成。 |
| 5 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the ... | JavaScript | 58.9k | 1.5k | Taste-Skill 是一个为 AI 代理设计的“反垃圾”前端框架，旨在提升 AI 生成的界面质量。它提供可移植的技能包，包含增强的布局、排版和动画设计，帮助 AI 避免生成枯燥的通用 UI。项目还包含图像生成技能，可与 ChatGPT Images 等工具配合使用，生成设计参考板，最终由 Codex 或 Claude Code 等代码生成器实现。 |
| 6 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 345 Claude Code skills & agent skills & plugins (3... | Python | 21.1k | 610 | 这是一个为13个AI编程工具提供355+生产就绪技能、插件和代理技能的开源库。包含602个Python CLI脚本和711个参考模板，涵盖工程、营销、合规、研究等多个领域，支持Claude Code、Cursor等主流工具。 |
| 7 | [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | Use Codex from Claude Code to review code or deleg... | JavaScript | 26.3k | 906 | 这是一个为 Claude Code 用户设计的插件，允许在 Claude 工作流中直接调用 Codex 进行代码审查和任务委托。支持常规审查、对抗性审查及后台任务管理，需 Node.js 18.18+ 环境。 |
| 8 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 49.7k | 458 | 这是一个基于 Python 的 AI agent skill，能够跨 Reddit、X、YouTube、HN、Polymarket 和全网搜索任意主题。它通过点赞、观看量及真实资金投入等真实互动数据进行评分，并由 AI 代理综合生成总结。旨在替代传统编辑筛选，提供基于大众关注度和市场资金的搜索结果。 |
| 9 | [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | agent multiplexer that lives in your terminal.... | Rust | 12.9k | 779 | Herdr 是一个运行在终端内的多路复用器，用于统一管理所有编码代理。它提供真实的终端视图，支持状态可视化（阻塞/工作/完成），并具备类似 tmux 的分屏、标签页和持久化会话功能。支持 SSH 远程连接，无 GUI 依赖，轻量级且可脚本化。 |
| 10 | [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Give Claude the ability to watch any video. /watch... | Python | 4.2k | 427 | 该项目通过下载、提取帧和转录音频，赋予 Claude AI 观看视频的能力。支持零配置安装，自动处理字幕或调用 Whisper API。用户可利用它分析视频内容、诊断 Bug 或研究竞争对手策略。 |
| 11 | [karakeep-app/karakeep](https://github.com/karakeep-app/karakeep) | A self-hostable bookmark-everything app (links, no... | TypeScript | 26.9k | 199 | Karakeep 是一款自托管的书签与笔记应用，支持链接、图片及 PDF。核心特色是利用 AI（LLM）自动生成标签、摘要及全文搜索，并支持本地模型。功能涵盖 OCR、浏览器插件、移动端、RSS 摘要、视频归档及防链接失效的完整页面归档，适合数据囤积者进行知识管理与协作。 |
| 12 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | The API to search, scrape, and interact with the w... | TypeScript | 146.2k | 867 | Firecrawl 是一个用于大规模搜索、抓取和与网络交互的 API。它将网页内容转换为干净的 Markdown 或结构化数据，专为 AI 应用设计。项目覆盖 96% 的网络，支持 JS 页面抓取，具备代理集成、媒体解析及交互功能，提供开源和托管服务，旨在简化 AI 应用的数据获取流程。 |
| 13 | [steipete/CodexBar](https://github.com/steipete/CodexBar) | Show usage stats for OpenAI Codex and Claude Code,... | Swift | 16.7k | 598 | CodexBar 是一款 macOS 菜单栏应用，专为追踪多种 AI 编码工具（如 OpenAI、Claude、Copilot 等）的使用配额、重置时间和成本而设计。它支持多种接入方式，无需存储密码，帮助开发者规划任务并监控余额。 |
| 14 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 13.5k | 382 | Zvec 是阿里巴巴开源的轻量级、极速的进程内向量数据库。支持稠密与稀疏向量、原生全文搜索及混合检索。具备 DiskANN 索引、WAL 持久化及多读单写并发机制，专为嵌入式应用设计，无需外部服务器即可实现毫秒级大规模相似性搜索。 |
| 15 | [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | 😎 Awesome lists about all kinds of interesting to... | - | 482.3k | 345 | 这是一个汇集了各类主题精选资源列表的集合，涵盖了平台、编程语言、前后端开发、大数据、安全、硬件等广泛领域。它旨在作为发现优质项目和学习资源的综合目录，帮助开发者高效获取相关领域的知识。 |
| 16 | [gastownhall/gastown](https://github.com/gastownhall/gastown) | Gas Town - multi-agent workspace manager... | Go | 16.7k | 291 | Gas Town 是一个用 Go 编写的多智能体工作区管理器，旨在协调 Claude Code、Copilot 等 AI 编码智能体。它通过 git-backed hooks 持久化工作状态，解决智能体重启丢失上下文的问题，内置邮箱和交接机制，支持管理 20-30 个智能体，实现可靠的协作。 |

[查看完整数据](api/github/2026-07-06.json)
<!-- END GITHUB TRENDING -->




