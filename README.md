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

**最后更新**: 2026-05-11 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 33.0k | 956 | 这是一个由字节跳动开源的多模态 AI Agent 栈，包含 Agent TARS 和 UI-TARS-desktop。它通过 CLI 和 Web UI 提供强大的 GUI Agent 和视觉能力，支持终端、浏览器及桌面环境操作。旨在通过多模态大模型和 MCP 工具集成，实现更接近人类直觉的任务完成流程，并支持流式工具调用和沙箱执行环境。 |
| 2 | [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Stealth Chromium that passes every bot detection t... | Python | 6.1k | 1.3k | 这是一个通过所有机器人检测测试的隐身浏览器项目。它不是简单的配置修补，而是对 Chromium 二进制文件进行 C++ 源级修改，模拟真实浏览器指纹。它支持 Python 和 JavaScript，作为 Playwright/Puppeteer 的零配置替代品，能通过 Cloudflare Turnstile 等检测，提供人类化行为模拟，适合需要绕过反爬虫系统的自动化任务。 |
| 3 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn!... | TypeScript | 10.7k | 427 | AiToEarn 是一个利用 AI 自动化帮助创作者和企业在全球主流平台（如抖音、TikTok、YouTube 等）进行内容创作、分发和变现的一站式平台。它提供四大核心 Agent 能力：Monetize（按 CPS/CPE/CPM 结算）、Publish（一键分发）、Engage（自动化互动）和 Create（AI 生成内容）。支持多种部署方式，旨在帮助 OPC 和品牌实现高效运营。 |
| 4 | [playcanvas/supersplat](https://github.com/playcanvas/supersplat) | 3D Gaussian Splat Editor... | TypeScript | 7.3k | 531 | SuperSplat Editor 是一个基于 Web 的开源工具，用于检查、编辑、优化和发布 3D Gaussian Splat。它运行在浏览器中，无需安装。项目支持本地开发环境搭建和多语言本地化功能。 |
| 5 | [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) | 💻 vibe coding 2026 | Your first modern Coding cou... | JavaScript | 9.9k | 812 | 这是一个面向初学者的现代编程课程，专注于“Vibe Coding”。它教授如何利用 AI 将想法转化为真实产品，涵盖从入门到高级的全栈开发路径。课程包含 SaaS 副业实战项目、支付系统集成（如 Stripe）及微信小程序开发，并附有需求验证与用户研究指南，旨在帮助学员掌握现代编程技能。 |
| 6 | [decolua/9router](https://github.com/decolua/9router) | Unlimited FREE AI coding. Connect Claude Code, Cod... | JavaScript | 8.3k | 941 | 9Router 是一个免费的 AI 编码工具路由器，旨在通过 40+ 提供商连接 Claude Code、Cursor 等工具。它提供 RTK Token 保存功能，可节省 20-40% 的 tokens，并支持自动故障转移（订阅 -> 便宜 -> 免费）和多账户轮询，帮助开发者避免 API 限制并降低成本。 |
| 7 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Your Personal AI super intelligence. Private, Simp... | Rust | 1.4k | 366 | OpenHuman 是一个基于 Rust 的个人 AI 代理助手，主打私有化与易用性。它拥有桌面吉祥物，支持一键接入 118+ 第三方应用（如 Gmail、Notion），并具备本地记忆树功能，利用 SQLite 和 Obsidian 格式管理知识，实现全天候智能辅助。 |
| 8 | [millionco/react-doctor](https://github.com/millionco/react-doctor) | Your agent writes bad React. This catches it... | TypeScript | 8.0k | 212 | 这是一个针对 AI 编写的 React 代码进行质量检测的工具。它能扫描代码库并输出 0-100 的健康评分，涵盖状态管理、性能、安全等维度。支持 Next.js、Vite 和 React Native。工具提供 GitHub Actions 集成以进行 CI/CD 检查，并支持为 Claude、Cursor 等 AI 编码助手配置最佳实践规则，帮助开发者及早发现并修复代码问题。 |
| 9 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 37.3k | 422 | 这是一个由上海交通大学开发的《动手学大模型》系列编程实践教程，涵盖微调、提示学习、知识编辑、数学推理、水印、越狱、隐写、多模态、GUI Agent、智能体安全及RLHF等前沿主题。项目近期还上线了基于华为昇腾的国产化大模型开发全流程公益教程，适合学生和开发者入门及研究。 |
| 10 | [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | Stable Diffusion web UI... | Python | 162.9k | 39 | 这是一个功能强大的 Stable Diffusion Web UI，基于 Python 和 Gradio 构建。支持 txt2img、img2img、Outpainting、Inpainting 及 Textual Inversion。集成了 GFPGAN、CodeFormer 等面部修复与超分辨率工具，支持注意力控制、参数保存及低显存运行。 |
| 11 | [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Implement a ChatGPT-like LLM in PyTorch from scrat... | Jupyter Notebook | 93.0k | 337 | 这是一个基于 PyTorch 和 Jupyter Notebook 从零开始构建类似 ChatGPT 的大型语言模型的教学项目。它提供了开发、预训练和微调 GPT 模型的完整代码，旨在帮助开发者通过实践深入理解 LLM 的工作原理。 |
| 12 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 144.7k | 2.1k | 这是一个自改进的 AI 代理，具备内置学习循环。它能从经验中创建和优化技能，管理长期记忆，并通过 TUI 和多平台（Telegram 等）与用户交互。支持多种大模型，具备自动化调度、子代理并行处理及随处部署的能力。 |
| 13 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | #1 Persistent memory for AI coding agents based on... | TypeScript | 4.7k | 430 | 这是一个为 AI 编码代理提供持久化记忆的 TypeScript 项目。基于 iii engine，它扩展了 Karpathy 的 LLM Wiki 模式，支持 Claude Code、Cursor 等多种主流工具。通过 MCP 或 REST API，它能在会话间共享记忆，解决代理重复解释和遗忘上下文的问题，提升开发效率。 |

[查看完整数据](api/github/2026-05-11.json)
<!-- END GITHUB TRENDING -->




