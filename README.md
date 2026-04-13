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

**最后更新**: 2026-04-13 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 24.8k | 5.8k | 该项目通过四个核心原则优化Claude代码行为，解决LLM常见编码问题。针对错误假设、过度复杂化、无关代码修改等缺陷，提供标准化的代码生成指南，包含思考前置、简洁优先、精准修改和目标驱动等策略。 |
| 2 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 76.8k | 11.3k | Hermes-Agent 是一个自我进化的AI代理系统，支持跨平台对话、多模型集成与闭环学习。具备终端界面、任务自动化、技能自优化及分布式部署能力，适用于需要持续学习和跨设备协同的智能应用。 |
| 3 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 17.0k | 1.6k | Kronos是首个开源金融K线基础模型，采用两阶段框架处理金融时间序列数据，通过分词器将OHLCV转化为离散标记，再利用Transformer进行预训练，适用于量化交易和预测任务。项目提供多种规模模型，支持快速微调。 |
| 4 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 53.2k | 3.2k | Claude-Mem是为Claude Code设计的持久化记忆压缩插件，通过自动捕获编码会话中的工具使用数据，生成语义摘要并注入后续会话，实现跨会话的知识连续性维护。 |
| 5 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 106.9k | 2.8k | MarkItDown是微软开发的Python工具，支持将PDF、PPT、Word、Excel等文件转换为Markdown，适用于LLM和文本分析流程。强调文档结构保留，输出主要用于机器处理。 |
| 6 | [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn codi... | TypeScript | 11.1k | 1.7k | Multica是开源AI代理管理平台，支持任务分配、自主执行与技能复用，实现人机协作开发。提供实时进度追踪、多工作区管理及统一运行时环境，提升团队开发效率。 |
| 7 | [coleam00/Archon](https://github.com/coleam00/Archon) | The first open-source harness builder for AI codin... | TypeScript | 17.6k | 679 | Archon是AI编码工作流引擎，通过YAML定义开发流程，确保编码过程的确定性和可重复性。支持计划、实现、验证、代码审查等阶段，提供隔离环境和可组合的AI与脚本节点，适用于自动化CI/CD和AI辅助开发。 |
| 8 | [snarktank/ralph](https://github.com/snarktank/ralph) | Ralph is an autonomous AI agent loop that runs rep... | TypeScript | 16.5k | 683 | Ralph是基于AI的自主任务循环系统，通过迭代调用Amp/Claude Code等工具完成PRD需求。利用git历史和文本文件持久化记忆，支持自动化PRD生成与格式转换，提升开发流程效率。 |
| 9 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 52.9k | 782 | AI对冲基金项目，通过多个AI代理模拟不同投资策略（如价值投资、成长投资、风险管理等），整合估值分析、市场情绪、基本面和技术面数据生成交易信号，用于教育和研究目的。 |
| 10 | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | A collection of notebooks/recipes showcasing some ... | Jupyter Notebook | 39.5k | 1.1k | 该项目为Anthropic Claude模型提供配套的Jupyter Notebook示例，涵盖文本分类、检索增强生成、摘要、工具集成及多模态应用等场景，包含可直接复用的代码片段和开发指南。 |
| 11 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | practice made claude perfect... | HTML | 41.6k | 2.5k | 该项目是Claude AI的智能体工程实践指南，聚焦于构建自主代理、工作流编排和上下文管理。包含子代理、指令模板、技能模块、工作流引擎及MCP协议集成，提供配置系统和记忆持久化功能，适用于AI开发最佳实践与框架搭建。 |
| 12 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source voice synthesis studio... | TypeScript | 16.3k | 652 | Voicebox是一个本地运行的开源语音合成工作室，支持多语言语音生成、声音克隆、后期效果处理及多轨道编辑，采用Tauri框架实现高性能跨平台应用。 |
| 13 | [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp) | ... | Python | 19.5k | 335 | BlenderMCP通过Model Context Protocol（MCP）实现Blender与Claude AI的双向交互，支持3D对象操作、材质控制、场景检查及代码执行，提供远程运行和数据分析功能。 |
| 14 | [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | real time face swap and one-click video deepfake w... | Python | 90.2k | 235 | Deep-Live-Cam 是一个实时人脸交换与视频深度伪造工具，仅需单张图片即可生成深度伪造内容。项目强调伦理规范，内置内容过滤机制，适用于艺术创作与媒体生产场景。 |
| 15 | [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) | A light-weight and powerful meta-prompting, contex... | JavaScript | 52.1k | 630 | GSD 是一个轻量级的规范驱动开发系统，通过元提示和上下文工程优化 AI 代码生成，解决上下文过时问题。支持多平台和多种 AI 编程工具，聚焦快速构建与简洁流程，适用于独立开发者高效实现代码需求。 |
| 16 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 68.9k | 701 | 该项目收集并开源中国小初高及大学数学PDF教材，解决大文件上传问题，提供合并工具促进教育资源共享，助力义务教育普及与海外华人教育。 |

[查看完整数据](api/github/2026-04-13.json)
<!-- END GITHUB TRENDING -->








