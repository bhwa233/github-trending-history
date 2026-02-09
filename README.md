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

**最后更新**: 2026-02-09 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Fully autonomous AI hacker to find actual exploits... | TypeScript | 17.1k | 4.1k | Shannon是基于AI的全自动渗透测试工具，可自主发现Web应用漏洞并执行真实攻击验证，如注入和身份验证绕过。解决快速迭代开发中的安全漏洞问题，提供实际漏洞证明以确保代码安全。 |
| 2 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 13.5k | 1.1k | Dexter是面向金融研究的自主代理，支持任务规划、实时数据处理与自我验证，可分解复杂问题并生成数据驱动的分析结果。 |
| 3 | [pydantic/monty](https://github.com/pydantic/monty) | A minimal, secure Python interpreter written in Ru... | Rust | 3.9k | 1.3k | Monty是用Rust开发的轻量级安全Python解释器，专为AI设计。支持部分Python功能，隔离主机环境，可控制外部函数调用，具备快速启动（<1μs）和资源监控能力，适用于安全执行AI生成代码的场景。 |
| 4 | [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版... | Python | 16.2k | 160 | 基于多智能体LLM的中文金融分析框架，支持A股/港股/美股研究，提供Docker部署、多模型配置及可视化分析功能，适用于策略实验与AI金融学习。 |
| 5 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source 24/7 Cowork and OpenClaw ... | TypeScript | 13.8k | 680 | AionUi是支持多AI模型的本地图形化协作工具，提供统一界面管理Gemini CLI、Claude Code等命令行工具，具备本地数据存储、多会话管理及跨平台远程访问功能，强调安全性和便捷性。 |
| 6 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 397.2k | 450 | 该仓库是一个由社区维护的免费API集合项目，涵盖多个领域如天气、金融、交通等，提供简洁的API列表和分类目录，方便开发者快速查找和集成所需接口。 |
| 7 | [github/gh-aw](https://github.com/github/gh-aw) | GitHub Agentic Workflows... | Go | 882 | 304 | GitHub Agentic Workflows项目允许用户通过自然语言Markdown编写代理工作流，并在GitHub Actions中运行。提供多重安全防护，如沙盒执行、输入消毒和只读权限，默认限制写操作，确保AI代理在安全边界内运行。 |
| 8 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 93.1k | 230 | 收集了基于LLM的AI代理应用和RAG技术的实践案例，涵盖代码、邮件、医疗、金融等多个领域，支持OpenAI、Anthropic、Gemini等主流模型及开源模型如Qwen、Llama，提供可本地运行的AI解决方案。 |
| 9 | [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) | The GitButler version control client, backed by Gi... | Rust | 18.6k | 388 | GitButler是基于Git的现代版本控制客户端，提供GUI和CLI工具。核心功能包括堆叠分支、并行分支管理、可视化提交操作、AI辅助工作流、冲突处理及Forge集成，简化Git操作并提升开发效率。 |
| 10 | [microsoft/litebox](https://github.com/microsoft/litebox) | A security-focused library OS supporting kernel- a... | Rust | 1.7k | 356 | LiteBox是微软开发的安全聚焦库操作系统，通过精简主机接口降低攻击面，支持内核与用户模式执行。采用North-South接口设计实现跨平台互操作，适配多种运行环境与沙箱场景。 |
| 11 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 7.5k | 771 | 该项目是Codex的技能目录，提供可复用的AI代理技能模块，支持通过命令行安装和管理技能，包含实验性和精选技能，便于任务执行和分发。 |
| 12 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Claude Code compound engineering plugin... | TypeScript | 7.8k | 161 | 该项目是Claude Code的工程插件工具集，支持将插件转换为OpenCode/Codex格式，提供本地开发、配置同步及工程工作流管理功能，包含计划、执行、评审等自动化流程。 |
| 13 | [DrewThomasson/ebook2audiobook](https://github.com/DrewThomasson/ebook2audiobook) | Generate audiobooks from e-books, voice cloning & ... | Python | 17.8k | 140 | 该工具可将电子书转换为带章节和元数据的有声书，支持1158种语言及语音克隆，集成XTTSv2、Piper-TTS等多款TTS模型，兼容多种电子书格式并提供OCR功能。 |

[查看完整数据](api/github/2026-02-09.json)
<!-- END GITHUB TRENDING -->








