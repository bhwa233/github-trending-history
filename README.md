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

**最后更新**: 2026-05-12 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 2.7k | 1.0k | OpenHuman 是一个基于 Rust 开发的开源个人 AI 智能体助手。它采用 UI 优先设计，拥有桌面吉祥物，支持 118+ 第三方集成（如 Gmail、Notion）。项目具备自动数据获取和本地知识库（Memory Tree + SQLite）功能，注重隐私保护，旨在提供简单、强大且私人的 AI 体验。 |
| 2 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | #1 Persistent memory for AI coding agents based on... | TypeScript | 5.8k | 1.0k | 这是一个为 AI 编码代理提供持久化记忆的开源项目。基于 iii engine 构建，支持 Claude Code、Cursor 等多种主流工具。它通过扩展 Karpathy 的 LLM Wiki 模式，利用钩子、MCP 或 REST API 与代理集成，解决多会话中重复解释、重复发现 Bug 的问题，实现跨会话的知识共享与上下文注入。 |
| 3 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 7.8k | 1.6k | 这是一个通过所有机器人检测测试的隐身 Chromium 浏览器。它在 C++ 源码级别修改指纹，而非简单的配置或 JS 注入。它是 Playwright/Puppeteer 的零配置替代品，支持 Python 和 JavaScript，能通过 Cloudflare Turnstile、reCAPTCHA v3 等检测，并提供人类行为模拟。 |
| 4 | [apernet/hysteria](https://github.com/apernet/hysteria) | Hysteria is a powerful, lightning fast and censors... | Go | 20.2k | 51 | Hysteria 是一个用 Go 编写的强大、快速且抗审查的代理工具。它基于自定义 QUIC 协议，专为不可靠网络设计，提供 SOCKS5、HTTP、TProxy 等多种模式。该工具伪装成 HTTP/3 流量以规避审查，支持跨平台部署，并具备完善的认证、统计和访问控制功能，易于集成到基础设施中。 |
| 5 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 75.9k | 3.9k | 这是一个专为 AI 编程代理设计的技能集合，旨在解决代理与开发者间的沟通鸿沟。项目提供了一系列可组合、易于适应的命令（如 /grill-me），帮助开发者通过详细问答确保 AI 理解真实工程需求，避免盲目编码。支持通过 Shell 脚本快速安装和配置。 |
| 6 | [anonfaded/FadCam](https://github.com/anonfaded/FadCam) | Open-source, ad-free Android multimedia recorder w... | Java | 2.2k | 116 | FadCam 是一个开源的 Android 多媒体录制工具，专注于隐私保护。它支持后台视频录制、屏幕录制、直播和远程控制，具备行车记录仪和标注功能。该应用由 FadSec Lab 开发，完全去广告，旨在为个人安全、内容创作等提供专业工具。 |
| 7 | [millionco/react-doctor](https://github.com/millionco/react-doctor) | Your agent writes bad React. This catches it... | TypeScript | 8.8k | 788 | React Doctor 是一款 TypeScript 编写的代码健康检查工具。它通过扫描代码库生成 0-100 的健康评分，覆盖状态管理、性能、安全等维度。支持 Next.js、Vite 和 React Native。除人工检查外，还可配置给 AI 编码代理学习最佳实践，并集成 GitHub Actions 实现自动化 CI/CD 检查。 |
| 8 | [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Implement a ChatGPT-like LLM in PyTorch from scrat... | Jupyter Notebook | 93.8k | 772 | 这是一个基于 PyTorch 和 Jupyter Notebook 的项目，旨在从零开始逐步实现类似 ChatGPT 的大语言模型。它涵盖了模型的开发、预训练和微调过程，适合学习 LLM 的内部工作机制。项目代码也支持加载预训练权重进行微调。 |
| 9 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程... | Python | 48.2k | 599 | Datawhale 社区发起的系统性智能体实战教程，旨在帮助开发者从零掌握 AI 原生智能体的构建。内容涵盖基础理论、经典范式（如 ReAct）、低代码平台及 AutoGen/LangGraph 等主流框架，深入讲解记忆、上下文工程、协议及 Agentic RL 等高级技术，并通过实战项目（如智能旅行助手、赛博小镇）助你成为智能体系统的构建者。 |
| 10 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn!... | TypeScript | 11.8k | 1.3k | AiToEarn 是一个基于 TypeScript 的 AI 一站式平台，旨在帮助创作者、品牌和 OPC 通过自动化内容创作、分发和互动来赚钱。它支持全球 10 多个主流平台，提供 CPS、CPE 和 CPM 等变现模式，并集成了 Claude/Cursor 等工具。它通过 Agent 能力简化了内容生命周期。 |
| 11 | [HKUDS/AI-Trader](https://github.com/HKUDS/AI-Trader) | "AI-Trader: 100% Fully-Automated Agent-Native Trad... | Python | 16.6k | 229 | AI-Trader 是一个面向 AI 代理的原生交易平台，支持 OpenClaw、Claude Code 等主流代理。它提供即时集成、集体智能交易、跨平台信号同步及一键跟单功能。最近进行了代码库精简，采用 FastAPI 分离架构，提升了生产稳定性，并支持 Polymarket 模拟交易。 |

[查看完整数据](api/github/2026-05-12.json)
<!-- END GITHUB TRENDING -->




