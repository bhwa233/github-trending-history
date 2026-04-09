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

**最后更新**: 2026-04-09 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 44.1k | 6.8k | Hermes-Agent 是一个自我进化的AI代理，具备内置学习循环，可跨会话持续优化技能、记忆用户模型，并支持多平台交互。提供终端界面、定时任务、并行子代理等功能，可部署于多种基础设施。 |
| 2 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 10.4k | 1.4k | 该项目通过四个原则优化Claude代码生成行为，针对LLM常见的错误假设、过度复杂化、无关代码修改等问题，提供简洁、精准的代码生成指导。 |
| 3 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | "DeepTutor: Agent-Native Personalized Learning Ass... | Python | 14.8k | 1.3k | DeepTutor是一个基于代理的个性化学习助手，采用Agent-Native架构，支持多模式切换和智能辅导。核心功能包括TutorBot、引导式学习、知识库检索增强生成(RAG)及多语言支持，适用于教育科技领域的自适应学习场景。 |
| 4 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 7.6k | 460 | OpenBMB/VoxCPM是一款无需分词器的文本转语音系统，支持30种语言的高自然度语音生成。具备语音设计、可控语音克隆、48kHz高质量音频输出及多语言自适应合成能力，采用扩散自回归架构与MiniCPM-4模型实现端到端语音表示生成。 |
| 5 | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | PDF Parser for AI-ready data. Automate PDF accessi... | Java | 13.7k | 1.1k | Java驱动的PDF解析器，支持AI数据提取与OCR，可生成结构化数据及可访问性Tagged PDF，适用于复杂表格、公式和多语言文档处理。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 143.7k | 2.3k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理自动化流程提升开发效率。强调TDD、YAGNI和DRY原则，支持编码代理自主规划与执行任务，减少人工干预。 |
| 7 | [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | A specialized Claude Code workspace for creating l... | Python | 5.2k | 725 | SEO Machine 是基于 Claude Code 的专业 SEO 内容生成工具，提供从关键词研究到内容优化的全流程解决方案，包含 26 项营销技能和数据分析功能，支持自动化博客创作与 SEO 优化。 |
| 8 | [coleam00/Archon](https://github.com/coleam00/Archon) | The first open-source harness builder for AI codin... | TypeScript | 14.4k | 138 | Archon是一个AI编码工作流引擎，通过YAML定义开发流程（计划、实现、验证等），确保AI编码过程的确定性和可重复性。支持隔离运行、组合式节点及跨平台执行。 |
| 9 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 12.2k | 223 | Kronos是首个开源金融K线基础模型，通过两阶段框架处理高噪声金融数据，支持多粒度时间序列预测与量化任务，提供不同参数量级的预训练模型。 |
| 10 | [YishenTu/claudian](https://github.com/YishenTu/claudian) | An Obsidian plugin that embeds Claude Code as an A... | TypeScript | 6.8k | 174 | Claudian是Obsidian插件，将Claude Code等AI编码代理嵌入知识库，支持文件读写、搜索、多步骤工作流及内联代码编辑，提供指令模式、MCP服务器连接和多标签聊天功能。 |

[查看完整数据](api/github/2026-04-09.json)
<!-- END GITHUB TRENDING -->








