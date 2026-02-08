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

**最后更新**: 2026-02-08 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Fully autonomous AI hacker to find actual exploits... | TypeScript | 13.0k | 3.5k | Shannon是全自主AI渗透测试工具，通过模拟攻击自动发现并验证Web应用漏洞，提供实际 exploit 证明。解决持续集成中安全测试滞后问题，支持实时漏洞检测与合规验证。 |
| 2 | [pydantic/monty](https://github.com/pydantic/monty) | A minimal, secure Python interpreter written in Ru... | Rust | 2.7k | 442 | Monty是用Rust开发的轻量级安全Python解释器，专为AI代理设计。支持子集Python代码执行、环境隔离、类型检查、快速启动（<1μs）和资源监控，适用于需要安全运行AI生成代码的场景。 |
| 3 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 6.9k | 1.4k | OpenAI的Skills项目是Codex的技能目录，提供可重复使用的任务处理模块。通过标准化技能包，支持AI代理发现和调用特定功能，包含安装指南和许可证管理。 |
| 4 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 12.6k | 1.0k | Dexter是一个基于TypeScript的自主金融研究代理，具备任务规划、实时市场数据分析和自我验证能力。可自动分解复杂金融问题为研究步骤，调用API获取财务数据，并通过迭代优化确保结果准确性。 |
| 5 | [microsoft/litebox](https://github.com/microsoft/litebox) | A security-focused library OS supporting kernel- a... | Rust | 1.4k | 358 | LiteBox是微软开发的专注安全的库操作系统，通过精简主机接口降低攻击面，支持内核与用户模式执行。提供Rust接口抽象层，实现跨平台沙箱环境，兼容多种运行场景如Linux程序跨系统运行、SEV SNP安全扩展等。 |
| 6 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 24.7k | 430 | LangExtract是基于Python的LLM信息提取库，支持精确来源定位与交互式可视化。通过文本分块和多轮处理优化长文档提取，适用于临床报告、法律文档等结构化数据抽取场景。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 47.7k | 811 | Superpowers 是一个基于代理的软件开发框架，通过可组合技能和自动化工作流提升编码效率。支持TDD、YAGNI和DRY原则，通过分步设计确认、子代理协作开发实现自动化编程，减少人工干预。 |
| 8 | [OpenBMB/MiniCPM-o](https://github.com/OpenBMB/MiniCPM-o) | A Gemini 2.5 Flash Level MLLM for Vision, Speech, ... | Python | 23.4k | 212 | OpenBMB/MiniCPM-o 是一款端侧多模态大语言模型，支持视觉、语音与全双工实时流媒体交互。具备9B参数的MiniCPM-o 4.5实现同步感知、输出与交互，支持OCR、多语言及语音克隆，优化部署效率。 |
| 9 | [likec4/likec4](https://github.com/likec4/likec4) | Visualize, collaborate, and evolve the software ar... | TypeScript | 2.3k | 271 | LikeC4 是一个基于代码生成实时更新架构图的工具，支持自定义建模语言和灵活的架构可视化。通过 CLI 工具和模板仓库，团队可协作维护动态软件架构图，适用于需要精准表达复杂系统结构的场景。 |
| 10 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source 24/7 Cowork and OpenClaw ... | TypeScript | 13.1k | 336 | AionUi是支持多AI命令行工具的本地协作平台，提供统一图形界面与本地数据安全。自动检测已安装CLI工具，支持多会话管理、本地存储及跨设备WebUI访问，兼容Gemini CLI、Qwen Code等主流模型，满足开发者便捷调用AI工具的需求。 |
| 11 | [home-assistant/addons](https://github.com/home-assistant/addons) | ➕ Docker add-ons for Home Assistant... | Shell | 2.0k | 7 | Home Assistant官方Docker插件仓库，提供多种扩展功能模块，支持MQTT、数据库、文件共享、SSL代理等场景，通过Shell脚本管理容器化应用，增强家居自动化系统功能。 |
| 12 | [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) | The GitButler version control client, backed by Gi... | Rust | 18.3k | 415 | GitButler是一款基于Git的现代版本控制客户端，提供GUI和CLI工具。核心功能包括堆叠分支、并行分支管理、可视化提交操作、撤销时间线、冲突处理及AI辅助工作流，旨在提升开发效率与协作体验。 |

[查看完整数据](api/github/2026-02-08.json)
<!-- END GITHUB TRENDING -->








