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

**最后更新**: 2026-01-30 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 118.9k | 14.2k | OpenClaw是跨平台个人AI助手，支持多消息通道（如WhatsApp、Telegram）及多操作系统，强调本地化、快速响应和始终在线。基于TypeScript开发，集成OAuth与API接口，适用于多渠道通信管理。 |
| 2 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Collection of extracted System Prompts from popula... | JavaScript | 28.5k | 1.1k | 收集并整理主流聊天机器人（如ChatGPT、Claude、Gemini）的系统提示文本，便于研究和开发参考。 |
| 3 | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | Kimi Code CLI is your next CLI agent.... | Python | 5.3k | 377 | Kimi Code CLI是集成于终端的AI代理工具，支持代码编辑、shell命令执行、网页搜索及自主任务规划。提供Shell模式、VS Code扩展、ACP协议集成和Zsh插件，提升开发效率与终端交互体验。 |
| 4 | [modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps) | Official repo for spec & SDK of MCP Apps protocol ... | TypeScript | 1.0k | 195 | MCP Apps协议官方仓库，提供标准SDK与规范，允许MCP服务器通过UI资源嵌入交互式元素（如图表、表单）至聊天客户端，支持双向通信与沙箱化渲染。 |
| 5 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like openclaw (mo... | Python | 6.4k | 463 | memU是面向24/7主动代理的内存框架，通过持续捕捉用户意图并缓存LLM推理结果，降低token成本，实现无需指令的主动服务。支持长期记忆存储与上下文理解，适用于需要持续在线的智能代理系统。 |
| 6 | [hashicorp/vault](https://github.com/hashicorp/vault) | A tool for secrets management, encryption as a ser... | Go | 34.8k | 228 | Vault 是 Hashicorp 开发的密钥管理工具，提供安全存储、动态凭证生成和数据加密功能。支持多类型秘密管理，如 API 密钥、数据库凭证等，具备细粒度访问控制和审计日志，适用于云原生环境中的敏感数据保护。 |
| 7 | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 3.7k | 285 | pi-mono是一个AI代理开发工具包，提供CLI、统一LLM API、TUI/Web UI库、Slack机器人及vLLM部署方案，支持多模态交互与模型管理。 |
| 8 | [anomalyco/opencode-anthropic-auth](https://github.com/anomalyco/opencode-anthropic-auth) | ... | JavaScript | 344 | 99 | 该项目是一个基于JavaScript的Anthropic API认证工具，提供简洁的认证流程和权限管理功能，遵循MIT协议开源。包含基础的API调用示例和安全验证机制，便于开发者快速集成认证功能。 |
| 9 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 70.6k | 66 | Protocol Buffers是Google开发的跨语言、跨平台的结构化数据序列化框架，提供高效的数据交换机制。包含编译器和多种语言的运行时库，支持数据定义、序列化与反序列化，广泛用于分布式系统通信和数据存储。 |
| 10 | [pedroslopez/whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) | A WhatsApp client library for NodeJS that connects... | JavaScript | 20.8k | 148 | 基于Node.js的WhatsApp客户端库，通过Puppeteer操控WhatsApp Web浏览器应用，支持消息收发、媒体传输、群组管理等功能，提供会话管理降低封禁风险。 |
| 11 | [TeamNewPipe/NewPipe](https://github.com/TeamNewPipe/NewPipe) | A libre lightweight streaming front-end for Androi... | Java | 36.9k | 144 | TeamNewPipe/NewPipe 是开源轻量级安卓流媒体前端，支持YouTube、PeerTube、SoundCloud等多平台，提供视频/音频流服务。项目正在重构以提升稳定性，当前仅接收Bug修复，鼓励开发者通过refactor分支贡献新功能。 |
| 12 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 91.2k | 391 | 该项目是一个LLM应用集合仓库，涵盖AI代理、RAG技术及多模型应用，支持OpenAI、Anthropic、Gemini等商业模型和开源模型如Llama/Qwen，提供代码生成、数据分析、医疗影像等多样化场景实践。 |
| 13 | [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) | CLI for common Playwright actions. Record and gene... | - | 1.9k | 251 | Playwright CLI提供高效的命令行工具，支持自动化浏览器操作、截图和代码生成，优化token使用适合高吞吐量场景，兼容GitHub Copilot等编码代理。 |
| 14 | [lobehub/lobehub](https://github.com/lobehub/lobehub) | The ultimate space for work and life — to find, bu... | TypeScript | 71.5k | 375 | LobeHub 是一个AI代理协作平台，支持多代理协作、智能交互与插件扩展。核心功能包括代理作为工作单元、跨平台协作网络、人类与代理共同进化、本地/远程数据库支持、多模型服务及自定义主题，适用于工作流自动化与智能协作场景。 |

[查看完整数据](api/github/2026-01-30.json)
<!-- END GITHUB TRENDING -->








