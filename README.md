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

**最后更新**: 2026-01-29 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [moltbot/moltbot](https://github.com/moltbot/moltbot) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 103.1k | 17.8k | Moltbot是跨平台个人AI助手，支持多消息渠道（如WhatsApp、Telegram、Discord等）及实时Canvas交互。可在多操作系统上运行，提供本地化、快速响应的单用户服务，适用于需要多平台消息整合与智能交互的场景。 |
| 2 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Collection of extracted System Prompts from popula... | JavaScript | 27.6k | 1.4k | 该项目收集了ChatGPT、Claude和Gemini等主流聊天机器人的系统提示文本，为AI模型研究和提示工程提供数据支持。 |
| 3 | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | Kimi Code CLI is your next CLI agent.... | Python | 4.9k | 494 | Kimi Code CLI 是一个运行在终端的AI代理工具，支持代码编辑、shell命令执行、网页搜索及自主任务规划。提供Shell模式、IDE集成（ACP协议）、Zsh插件扩展等功能，提升开发效率。 |
| 4 | [modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps) | Official repo for spec & SDK of MCP Apps protocol ... | TypeScript | 827 | 73 | MCP Apps协议官方SDK与规范库，支持在AI聊天机器人中嵌入交互式UI组件，如图表、表单等。提供开发者工具链与主机集成方案，基于TypeScript构建。 |
| 5 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like moltbot (cla... | Python | 6.0k | 608 | memU是面向24/7主动代理的记忆框架，通过长期记忆用户意图降低LLM token成本，支持持续在线的智能代理系统。核心功能包括用户意图捕捉、成本优化和主动任务执行，适用于需要持续交互的AI应用场景。 |
| 6 | [hashicorp/vault](https://github.com/hashicorp/vault) | A tool for secrets management, encryption as a ser... | Go | 34.6k | 254 | Vault 是 HashiCorp 的秘密管理工具，提供安全存储、动态凭证生成和加密服务。支持多类型秘密存储，自动审计日志与访问控制，适用于云环境和微服务架构中的敏感数据管理。 |
| 7 | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 3.5k | 396 | AI代理工具包，提供CLI、统一LLM API、TUI/Web UI库、Slack机器人及vLLM部署支持，便于构建和管理AI代理应用。 |
| 8 | [anomalyco/opencode-anthropic-auth](https://github.com/anomalyco/opencode-anthropic-auth) | ... | JavaScript | 243 | 11 | 该项目是一个基于JavaScript的Anthropic API认证中间件，提供MIT开源许可。包含基础身份验证功能和API接口封装，适用于需要集成Anthropic服务的Web应用。 |
| 9 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 70.5k | 89 | Protocol Buffers是Google的跨语言、跨平台数据序列化框架，支持高效结构化数据交换。提供语言中立的接口定义语言和多种语言的运行时库，适用于分布式系统和微服务通信。 |
| 10 | [pedroslopez/whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) | A WhatsApp client library for NodeJS that connects... | JavaScript | 20.7k | 16 | 基于Node.js的WhatsApp客户端库，通过Puppeteer控制网页版WhatsApp实现消息收发、媒体传输及群组管理等功能，支持多设备且提供会话管理策略，但存在被封禁风险。 |
| 11 | [TeamNewPipe/NewPipe](https://github.com/TeamNewPipe/NewPipe) | A libre lightweight streaming front-end for Androi... | Java | 36.7k | 65 | NewPipe是一款自由的轻量级Android流媒体前端，支持YouTube、SoundCloud等多个平台。项目正在重构以提升稳定性，当前主要接收bug修复。提供多语言支持，适用于需要跨平台流媒体访问的用户。 |
| 12 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 90.9k | 212 | 该项目是一个整合LLM应用的开源仓库，涵盖RAG、AI代理、多代理协作等技术，支持OpenAI、Anthropic、Gemini及开源模型如Llama。包含从医疗影像分析到音乐生成等多样化应用场景，提供可本地运行的AI工具示例。 |
| 13 | [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) | CLI for common Playwright actions. Record and gene... | - | 1.7k | 64 | Playwright CLI 是一个高效浏览器自动化工具，支持通过命令行执行Playwright操作。提供代码录制、选择器检测、截图等功能，优化token使用效率，适合与编码代理结合使用。 |
| 14 | [lobehub/lobehub](https://github.com/lobehub/lobehub) | The ultimate space for work and life — to find, bu... | TypeScript | 71.2k | 362 | LobeHub 是一个AI代理协作平台，支持多代理协作、团队设计及代理作为工作单元。提供插件系统、本地/远程数据库、多用户管理、智能搜索、文件上传、多模型支持等功能，适用于自定义AI工作流与团队协作场景。 |

[查看完整数据](api/github/2026-01-29.json)
<!-- END GITHUB TRENDING -->








