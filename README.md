# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2026-04-01 | **成功**: 7 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 100.5k | 10.1k | Claude Code是一款终端级代码辅助工具，通过自然语言指令执行代码任务、解释代码逻辑及管理Git流程，支持多平台安装并提供插件扩展功能。 |
| 2 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 34.4k | 1.7k | VibeVoice是微软开源的前沿语音AI框架，包含ASR和TTS模块。支持60分钟长音频单次处理，生成带说话人、时间戳的结构化转录，覆盖50+语言。提供实时语音合成、多语言语音库及vLLM加速推理，适用于智能助手、会议记录等场景。 |
| 3 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 12.0k | 358 | TimesFM是Google Research开发的预训练时间序列基础模型，用于高精度时间序列预测。支持长序列建模和量化预测，采用解码器架构，可处理16k上下文长度，适用于金融、气象等领域的预测场景。 |
| 4 | [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | A visual, example-driven guide to Claude Code — fr... | Python | 15.5k | 3.3k | 提供视觉化教程和可复用模板，帮助开发者从基础到高级掌握Claude Code功能，解决官方文档缺乏实际应用的问题，涵盖代理编排、钩子、技能和MCP服务器等核心概念。 |
| 5 | [axios/axios](https://github.com/axios/axios) | Promise based HTTP client for the browser and node... | JavaScript | 108.9k | 148 | axios 是基于 Promise 的 HTTP 客户端，支持浏览器和 Node.js 环境。提供请求拦截、响应处理、超时控制、取消请求等功能，简化异步 HTTP 通信。支持 JSON 数据解析、表单提交及多种数据格式自动序列化，广泛应用于前后端数据交互。 |
| 6 | [openai/codex](https://github.com/openai/codex) | Lightweight coding agent that runs in your termina... | Rust | 71.7k | 2.3k | OpenAI开发的轻量级代码代理工具，支持本地终端运行，提供代码生成与编程辅助功能。可通过CLI、IDE插件或桌面应用使用，需ChatGPT账户激活功能。 |
| 7 | [f/prompts.chat](https://github.com/f/prompts.chat) | f.k.a. Awesome ChatGPT Prompts. Share, discover, a... | HTML | 156.0k | 442 | prompts.chat 是一个开源的AI提示词库项目，支持ChatGPT、Claude等多模型，提供提示词分享、发现与收集功能。具备自托管能力，可私有化部署并保障数据隐私，同时包含互动教程和游戏化学习模块，适合企业及个人高效管理AI提示场景。 |

[查看完整数据](api/github/2026-04-01.json)
<!-- END GITHUB TRENDING -->








