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

**最后更新**: 2026-04-11 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 58.7k | 6.4k | Hermes-Agent 是一个自我优化的AI代理，具备学习循环机制，可跨平台运行并支持多模型接口。提供终端界面、会话记忆、技能自提升及自动化任务功能，适用于需要持续学习和跨设备协作的场景。 |
| 2 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 102.1k | 3.1k | MarkItDown是微软开发的Python工具，可将PDF、PPT、Word、Excel等20+格式文档转换为结构化Markdown，支持LLM集成和文本分析 pipelines，强调文档结构保留而非高保真呈现。 |
| 3 | [coleam00/Archon](https://github.com/coleam00/Archon) | The first open-source harness builder for AI codin... | TypeScript | 16.4k | 1.3k | Archon是首个开源AI编码工作流引擎，通过YAML定义开发流程（规划、实现、验证、代码审查等），确保AI编码过程的确定性与可重复性。支持隔离运行、组合传统脚本与AI节点，并提供CLI、WebUI等多平台集成。 |
| 4 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 13.5k | 1.1k | 该项目通过四个核心原则优化Claude代码行为，解决LLM常见编码问题。包含Think Before Coding（显式推理）、Simplicity First（代码精简）、Surgical Changes（精准修改）、Goal-Driven Execution（目标驱动）四条准则，提升代码质量与可维护性。 |
| 5 | [multica-ai/multica](https://github.com/multica-ai/multica) | The open-source managed agents platform. Turn codi... | TypeScript | 7.8k | 1.9k | Multica是一个开源的AI代理管理平台，支持将编码代理转化为团队成员，实现任务分配、进度跟踪和技能复用。提供代理生命周期管理、自主执行、多工作区隔离及统一运行时监控，适用于人机协作的开发场景。 |
| 6 | [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | practice made claude perfect... | HTML | 37.0k | 1.5k | 该项目是关于Claude代码实践的最佳实践指南，聚焦于智能代理系统、上下文工程和工作流编排，提供子代理、命令模板、技能配置等模块化解决方案，支持AI工程化开发与自动化流程设计。 |
| 7 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 67.8k | 472 | 该项目是一个开源的中国中小学及大学数学教材资源库，旨在通过集中整理PDF教材解决教育资源获取不公问题，支持海外华人教育，并提供分卷PDF合并工具以应对GitHub文件上传限制。 |
| 8 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 9.9k | 1.1k | OpenBMB/VoxCPM是一款无需分词器的文本转语音系统，支持30种语言的高自然度语音合成。具备语音设计、可控语音克隆、48kHz高清音频输出及多语言无缝合成能力，采用扩散自回归架构实现情感与风格控制。 |
| 9 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 14.2k | 607 | Kronos是首个开源金融K线基础模型，基于Transformer架构处理金融时间序列数据，支持多粒度K线量化分析与预测，提供不同规模预训练模型适配多种计算需求。 |
| 10 | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | PDF Parser for AI-ready data. Automate PDF accessi... | Java | 15.6k | 777 | OpenDataLoader-PDF 是一个开源的PDF解析工具，支持提取Markdown、JSON及HTML格式数据，提供本地模式与AI混合模式，适用于复杂页面处理。内置OCR功能支持80+语言，可处理扫描件及科学论文等复杂文档，同时具备PDF可访问性自动化生成Tagged PDF能力。 |
| 11 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | "DeepTutor: Agent-Native Personalized Learning Ass... | Python | 16.7k | 836 | DeepTutor是基于代理的个性化学习助手，支持智能辅导、自适应学习路径和多模式交互。内置TutorBot、Guided Learning和Co-Writer功能，整合RAG技术与可视化工具，提供动态知识检索、 quiz防重复生成及多语言支持。 |
| 12 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 147.1k | 1.6k | Superpowers 是一个基于可组合技能的软件开发框架，通过分阶段交互式流程提升编码效率。它强调TDD、YAGNI和DRY原则，支持代理自动执行开发任务，适用于需要自动化开发流程的场景。 |
| 13 | [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems) | 💅🏻 ⚒ A collection of awesome design systems... | - | 22.3k | 2.0k | 该项目是一个汇集优秀设计系统的资源库，涵盖组件、语音与语气指南、设计师工具包及源代码，帮助团队构建统一的数字产品规范。包含多个知名设计系统的分类整理与简介。 |

[查看完整数据](api/github/2026-04-11.json)
<!-- END GITHUB TRENDING -->








