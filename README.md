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

**最后更新**: 2026-03-13 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/BitNet](https://github.com/microsoft/BitNet) | Official inference framework for 1-bit LLMs... | Python | 33.9k | 2.2k | Microsoft的BitNet是1-bit大语言模型（LLM）的官方推理框架，支持CPU和GPU加速。通过优化内核实现1.37x-6.17x性能提升及55.4%-82.2%能耗降低，可在本地设备高效运行100B参数模型，适用于边缘计算和低功耗场景。 |
| 2 | [langflow-ai/openrag](https://github.com/langflow-ai/openrag) | OpenRAG is a comprehensive, single package Retriev... | Python | 2.2k | 905 | OpenRAG是一个基于Langflow、Docling和OpenSearch的检索增强生成平台，提供文档智能搜索与AI对话功能。支持文档上传处理、语义检索、多Agent协作工作流，具备可视化流程设计器和企业级扩展能力。 |
| 3 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 15.3k | 1.2k | Lightpanda是用Zig语言开发的无头浏览器，支持JavaScript执行和部分Web API，兼容Puppeteer/Playwright等工具。具备超低内存占用（仅为Chrome的1/9）和11倍速度优势，适用于AI代理、网页爬虫及自动化测试场景。 |
| 4 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 81.9k | 2.1k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理驱动的方式优化开发流程。它强调测试驱动开发（TDD）、YAGNI 和 DRY 原则，支持编码代理自主规划与执行任务，提升开发效率。 |
| 5 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 409.4k | 895 | 一个由社区维护的免费API集合项目，涵盖多个领域如天气、金融、交通等，提供简洁的API接口文档和使用示例，方便开发者快速集成外部服务。 |
| 6 | [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | Test your prompts, agents, and RAGs. Red teaming/p... | TypeScript | 15.2k | 1.9k | Promptfoo 是一个用于评估和红队测试大型语言模型（LLM）应用的命令行工具和库，支持提示词测试、漏洞扫描、多模型（如GPT、Claude、Llama）性能对比及CI/CD集成，强调本地化运行与安全性。 |
| 7 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 39.9k | 5.8k | 提供多领域AI代理工具集，每个代理具备专属技能、个性化交互和可交付成果，支持快速集成到不同开发环境，适用于自动化任务处理与AI协作开发场景。 |
| 8 | [dolthub/dolt](https://github.com/dolthub/dolt) | Dolt – Git for Data... | Go | 21.1k | 58 | Dolt是一个基于Go语言的SQL数据库，集成了Git式的版本控制功能，支持数据库的分支、合并、提交等操作，并兼容MySQL协议，便于数据协作与管理。 |
| 9 | [google/A2UI](https://github.com/google/A2UI) | ... | TypeScript | 13.0k | 629 | A2UI是Google开源的代理生成UI框架，通过声明式JSON格式安全渲染跨平台UI。支持增量更新与多框架兼容，解决AI代理生成交互界面的兼容性问题。 |
| 10 | [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | SOTA Open Source TTS... | Python | 26.8k | 556 | Fish Audio S2是高性能开源文本到语音系统，采用强化学习与双自回归架构，支持50+语言、多说话人及情感控制，通过自然语言标签实现精细语音生成，具备SOTA语音质量与稳定性。 |
| 11 | [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfac... | TypeScript | 7.4k | 1.5k | 阿里巴巴开源的JavaScript页面代理工具，通过自然语言控制网页界面。支持无需扩展的轻量级集成，提供文本化DOM操作和自定义LLM接入，适用于SaaS智能助手、表单自动化及无障碍访问等场景。 |
| 12 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 10.8k | 651 | Anthropic官方管理的Claude代码插件目录，提供内部及第三方高质量插件。支持通过Claude Code系统直接安装，包含标准化插件结构与安全规范，强调插件信任与质量验证。 |
| 13 | [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | Agentic IM Chatbot infrastructure that integrates ... | Python | 23.8k | 952 | AstrBot是一款开源的智能聊天机器人平台，支持多即时通讯平台集成与AI功能，提供LLM对话、多模态处理、插件扩展及安全沙盒环境，适用于个人助手、客服系统及企业知识库构建。 |
| 14 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 3.6k | 597 | Hindsight是一个专注于提升AI代理长期学习能力的记忆系统，通过优化记忆存储与检索机制，在长时记忆任务中实现SOTA性能。相比传统方法，其更注重模型持续学习而非单纯历史回忆，支持通过简单API或LLM包装器快速集成。 |
| 15 | [InsForge/InsForge](https://github.com/InsForge/InsForge) | Give agents everything they need to ship fullstack... | TypeScript | 3.6k | 763 | InsForge是面向AI编码代理的后端开发平台，通过语义层抽象数据库、认证、存储等后端原语，支持代理获取上下文、配置服务及检查状态，降低全栈开发复杂度。 |
| 16 | [google-ai-edge/LiteRT](https://github.com/google-ai-edge/LiteRT) | LiteRT, successor to TensorFlow Lite. is Google's ... | C++ | 1.9k | 208 | LiteRT是谷歌推出的边缘设备AI推理框架，支持跨平台部署。提供GPU/NPU加速、自动化硬件选择、异步执行及高效I/O处理，优化生成式AI和传统ML模型的本地化部署性能。 |

[查看完整数据](api/github/2026-03-13.json)
<!-- END GITHUB TRENDING -->








