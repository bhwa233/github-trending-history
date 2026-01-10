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

**最后更新**: 2026-01-10 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 54.7k | 650 | Claude Code是一款终端级AI编程工具，通过自然语言指令实现代码自动化处理、复杂代码解释及Git流程管理，支持多平台安装并提供插件扩展功能。 |
| 2 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 20.0k | 290 | ChromeDevTools/mcp 是基于TypeScript的MCP服务器，允许AI编码助手通过Chrome DevTools实现浏览器控制、性能分析和自动化调试，集成Puppeteer实现可靠操作。 |
| 3 | [github/awesome-copilot](https://github.com/github/awesome-copilot) | Community-contributed instructions, prompts, and c... | JavaScript | 16.9k | 146 | 社区驱动的GitHub Copilot增强工具库，提供定制化指令、提示词和配置方案，涵盖代码生成、文档编写、问题解决等场景，支持通过MCP服务器便捷集成。 |
| 4 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory infrastructure for LLMs and AI agents... | Python | 4.3k | 80 | MemU是面向LLM和AI代理的内存框架，支持多模态数据输入处理，通过分层文件系统结构化存储记忆，并提供RAG和LLM两种检索方式，具备自适应进化能力。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | Claude Code superpowers: core skills library... | Shell | 16.1k | 921 | Superpowers是基于Claude Code的自动化软件开发工作流工具，通过可组合的技能库和TDD/YAGNI/DRY原则，帮助编码代理自动规划和执行开发任务，提升开发效率。 |
| 6 | [google/googletest](https://github.com/google/googletest) | GoogleTest - Google Testing and Mocking Framework... | C++ | 38.0k | 88 | GoogleTest是Google的C++测试框架，支持xUnit架构，提供自动测试发现、丰富断言、用户自定义断言、死亡测试、参数化测试等功能，适用于C++项目的单元测试和模拟测试。 |
| 7 | [xpipe-io/xpipe](https://github.com/xpipe-io/xpipe) | Access your entire server infrastructure from your... | Java | 13.2k | 79 | xpipe-io/xpipe 是一个基于命令行工具的远程连接管理平台，支持SSH、Docker、虚拟机、云服务器等多种连接方式，提供集中化管理、自定义环境配置及文件浏览器功能，适用于多平台服务器基础设施的统一访问与操作。 |
| 8 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 22.3k | 801 | UI-TARS-desktop是字节跳动开源的多模态AI代理桌面应用，基于TypeScript开发，提供GUI代理功能，支持本地/远程计算机及浏览器操作，整合前沿AI模型与工具链，实现类人任务处理流程。 |
| 9 | [C4illin/ConvertX](https://github.com/C4illin/ConvertX) | 💾 Self-hosted online file converter. Supports 100... | TypeScript | 14.2k | 404 | ConvertX是一个自托管的在线文件转换工具，支持1000+种格式转换，提供多文件处理、密码保护和多账户管理功能，适用于本地化文件格式转换需求。 |
| 10 | [opf/openproject](https://github.com/opf/openproject) | OpenProject is the leading open source project man... | Ruby | 13.6k | 15 | OpenProject是基于Web的开源项目管理软件，提供项目计划、任务管理、敏捷开发、时间跟踪、成本报告、缺陷跟踪及协作功能，支持与GitHub集成，适用于团队协作和项目管理。 |
| 11 | [MiroMindAI/MiroThinker](https://github.com/MiroMindAI/MiroThinker) | MiroThinker is an open-source search agent model, ... | Python | 4.2k | 310 | MiroThinker是开源搜索代理模型，支持工具增强推理与现实世界信息检索，覆盖多基准测试（如HLE、BrowseComp等），提供研究框架、数据集及训练工具，适用于复杂研究工作流。 |
| 12 | [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | real time face swap and one-click video deepfake w... | Python | 77.1k | 109 | Deep-Live-Cam 是实时人脸交换与视频深度伪造工具，仅需单张图片即可生成深度伪造内容。项目强调伦理合规，内置敏感内容过滤机制，适用于AI媒体创作与动画设计。 |
| 13 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | Building a modern alternative to Salesforce, power... | TypeScript | 38.4k | 215 | twentyhq/twenty 是一个由社区驱动的开源CRM项目，旨在提供低成本、可自定义的客户关系管理解决方案。支持多视图布局、权限管理、工作流自动化及多类型数据管理，采用现代前端框架与后端技术栈构建。 |

[查看完整数据](api/github/2026-01-10.json)
<!-- END GITHUB TRENDING -->








