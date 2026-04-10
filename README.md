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

**最后更新**: 2026-04-10 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 99.6k | 2.4k | MarkItDown是一款Python工具，支持将PDF、PPT、Word、Excel、图片、音频、HTML等格式转换为Markdown，适用于LLM和文本分析流程。提供MCP服务器集成，优化了文件流处理和依赖管理。 |
| 2 | [coleam00/Archon](https://github.com/coleam00/Archon) | The first open-source harness builder for AI codin... | TypeScript | 15.6k | 756 | Archon是首个开源AI编码工作流引擎，通过YAML定义开发流程（计划、实现、验证等），确保AI编码过程的确定性、可重复性和可组合性，支持多环境部署和自动化流程管理。 |
| 3 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 51.8k | 7.7k | Hermes-Agent 是一个自我改进的AI代理系统，支持跨平台交互与持续学习。具备技能自动生成、历史对话记忆、多模型兼容及无服务器部署能力，适用于自动化任务和智能助手场景。 |
| 4 | [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | Open-source AI coworker, with memory... | TypeScript | 11.7k | 498 | Rowboat是一款本地优先的开源AI协作工具，通过整合邮件和会议记录构建长期知识图谱，支持自动化文档生成、会议准备、知识可视化编辑及语音交互，提升工作效率。 |
| 5 | [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn codi... | TypeScript | 6.0k | 1.5k | Multica是开源AI代理管理平台，将编码代理转化为团队成员，支持任务分配、自主执行、技能复用及多工作区管理，提升开发协作效率。 |
| 6 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 11.7k | 1.5k | 该项目通过四个核心原则优化Claude代码生成，解决LLM常见问题。包含Think Before Coding（明确假设）、Simplicity First（代码简洁）、Surgical Changes（精准修改）、Goal-Driven Execution（目标导向）四条指南，提升代码质量与可维护性。 |
| 7 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 12.7k | 602 | Kronos是首个针对金融K线数据的开源基础模型，通过两阶段框架处理金融时间序列。先将OHLCV数据转化为离散token，再基于Transformer进行预训练，支持多维度量化任务，适用于高频交易预测与市场分析。 |
| 8 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | "DeepTutor: Agent-Native Personalized Learning Ass... | Python | 15.9k | 1.4k | DeepTutor 是一个基于AI的个性化学习助手，采用代理原生架构支持多模式交互，提供TutorBot、Guided Learning等功能，具备跨平台兼容性、可视化能力及多语言支持，适用于教育领域的智能辅导场景。 |
| 9 | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | PDF Parser for AI-ready data. Automate PDF accessi... | Java | 14.8k | 1.3k | 基于Java的PDF解析项目，支持AI数据提取与可访问性自动化。可提取Markdown/JSON/HTML，兼容OCR识别与复杂排版处理，提供本地与AI混合解析模式，符合PDF/UA标准。 |
| 10 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 145.7k | 2.1k | Superpowers是一个基于可组合技能的软件开发框架，通过自动化流程和测试驱动开发（TDD）提升编码代理效率，强调YAGNI和DRY原则，适用于需要自动化开发流程的场景。 |
| 11 | [jqlang/jq](https://github.com/jqlang/jq) | Command-line JSON processor... | C | 34.3k | 141 | jq 是一个用 C 语言编写的轻量级命令行 JSON 处理器，支持数据切片、过滤、映射和转换，无运行时依赖，适用于结构化数据的高效处理。 |
| 12 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | practice made claude perfect... | HTML | 35.7k | 1.2k | 该项目专注于通过实践优化Claude代码工程，提供代理系统、命令模板、技能配置和工作流管理，支持AI驱动的自动化开发流程。 |

[查看完整数据](api/github/2026-04-10.json)
<!-- END GITHUB TRENDING -->








