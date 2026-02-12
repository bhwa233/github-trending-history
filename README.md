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

**最后更新**: 2026-02-12 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tambo-ai/tambo](https://github.com/tambo-ai/tambo) | Generative UI SDK for React... | TypeScript | 9.0k | 279 | Tambo是用于React的生成式UI开发工具包，通过Zod Schema注册组件并实现自然语言交互。支持LLM代理自动渲染UI组件，提供流式传输、状态管理和跨平台部署能力，简化生成式用户界面开发流程。 |
| 2 | [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) | Agentic AI Infrastructure for magnifying HUMAN cap... | TypeScript | 7.5k | 394 | Personal AI Infrastructure (PAI) 旨在通过AI增强人类创造力与自我认知，提供个性化能力激活方案。核心功能包括双通道能力选择、思维工具优化及默认并行执行机制，帮助用户发现人生目标并提升自主性。 |
| 3 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 31.3k | 1.2k | LangExtract是一个Python库，利用大语言模型从非结构化文本中提取结构化信息，支持精确来源定位、交互式可视化和多种LLM模型，适用于长文档高效处理与验证。 |
| 4 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 24.4k | 436 | ChromeDevTools MCP项目为AI编码助手提供Chrome浏览器的控制与调试能力，支持性能分析、网络请求监控、截图及自动化操作。基于TypeScript开发，集成Puppeteer实现可靠自动化，提供实时性能洞察与调试功能。 |
| 5 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C# | 129.6k | 315 | Microsoft PowerToys 是一组 Windows 系统实用工具集合，提供超过 25 个功能模块，涵盖窗口管理、快捷键定制、文件处理、系统优化等场景，旨在提升用户操作效率与系统定制化能力。 |
| 6 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source 24/7 Cowork and OpenClaw ... | TypeScript | 15.3k | 257 | AionUi是一款开源的AI工具协作平台，支持Gemini CLI、Claude Code等多款AI命令行工具，提供统一图形界面与本地数据安全。具备自动检测集成、多会话管理、24/7远程访问及跨平台聊天工具联动功能，简化AI开发协作流程。 |
| 7 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 94.3k | 274 | 收集了基于RAG、AI代理和多模型的LLM应用，涵盖代码、邮件、医疗、金融等多个领域，支持OpenAI、Anthropic、Gemini及开源模型如Llama。 |
| 8 | [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | Open-source AI coworker, with memory... | TypeScript | 5.1k | 199 | Rowboat是一款本地优先的开源AI协作工具，通过构建知识图谱整合邮件、会议记录等工作数据，提供上下文感知的自动化任务处理，如生成文档、会议准备和知识可视化。支持语音备忘录与Markdown编辑，强调隐私和长期记忆积累。 |
| 9 | [github/gh-aw](https://github.com/github/gh-aw) | GitHub Agentic Workflows... | Go | 2.0k | 419 | GitHub Agentic Workflows 项目允许用户通过自然语言 Markdown 编写代理工作流，并在 GitHub Actions 中安全执行。项目强调安全机制，包括默认只读权限、沙箱执行、输入验证和网络隔离，支持自动化仓库任务同时降低风险。 |
| 10 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Fine-tuning & Reinforcement Learning for LLMs. 🦥 ... | Python | 52.0k | 100 | Unsloth 是一个用于大语言模型微调与强化学习的工具库，支持多种主流模型加速训练，提升2倍速度并减少70%显存占用。提供Notebook教程、分布式训练及FP8优化方案，适用于研究与工业级LLM定制场景。 |
| 11 | [cinnyapp/cinny](https://github.com/cinnyapp/cinny) | Yet another matrix client... | TypeScript | 2.9k | 28 | Cinny是基于Matrix协议的即时通讯客户端，强调简洁优雅的界面设计和安全性，提供现代触感的通讯体验。支持Web和桌面端，可自托管并配置路由。 |
| 12 | [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills) | 66 Specialized Skills for Full-Stack Developers. T... | Python | 1.6k | 248 | 提供66个全栈开发专业技能，覆盖12个技术领域，通过上下文感知激活和多技能工作流，实现代码生成、问题诊断与系统设计的自动化辅助。支持Jira/Confluence集成，优化开发流程。 |
| 13 | [HandsOnLLM/Hands-On-Large-Language-Models](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models) | Official code repo for the O'Reilly Book - "Hands-... | Jupyter Notebook | 20.9k | 337 | 该项目是O'Reilly书籍《Hands-On Large Language Models》的配套代码库，包含12章实战案例，涵盖语言模型基础、Transformer结构、文本生成、多模态模型等主题，通过Jupyter Notebook提供可运行代码与可视化示例。 |

[查看完整数据](api/github/2026-02-12.json)
<!-- END GITHUB TRENDING -->








