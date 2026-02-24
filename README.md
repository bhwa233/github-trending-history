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

**最后更新**: 2026-02-24 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [huggingface/skills](https://github.com/huggingface/skills) | ... | Python | 5.2k | 1.3k | Hugging Face Skills提供标准化的AI/ML任务定义，支持数据集创建、模型训练与评估，兼容Claude Code、Codex、Gemini CLI等工具。每个技能包含自包含的指令、脚本和资源，通过SKILL.md管理，确保跨平台互操作性。 |
| 2 | [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | A comprehensive collection of Agent Skills for con... | Python | 9.8k | 771 | 该项目提供AI代理系统的上下文工程技能集合，聚焦于优化模型上下文窗口管理，包含基础技能如上下文压缩、退化模式识别及动态演化方法，提升代理系统在复杂场景下的有效性。 |
| 3 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 61.8k | 517 | OpenBB-finance/OpenBB 是面向分析师、量化交易员和AI代理的金融数据平台，提供数据整合与多端消费能力。支持Python库调用、企业级可视化界面及AI代理集成，实现'连接一次，随处使用'的数据贯通架构。 |
| 4 | [LadybirdBrowser/ladybird](https://github.com/LadybirdBrowser/ladybird) | Truly independent web browser... | C++ | 59.1k | 231 | Ladybird是一个基于Web标准的独立浏览器项目，采用多进程架构提升安全性，核心组件继承自SerenityOS，包含渲染引擎、JavaScript引擎及网络协议栈，目前处于预Alpha阶段，面向开发者提供浏览器技术研究与测试。 |
| 5 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 123.0k | 3.6k | 该项目收集了30余种AI开发工具的系统提示、内部工具及模型配置，涵盖代码生成、AI助手等领域，提供结构化分析与功能洞察，助力开发者研究与优化AI工具链。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 60.4k | 1.1k | Superpowers 是一个基于可组合技能的软件开发框架和方法论，通过自动化工作流提升编码效率。它强调TDD、YAGNI和DRY原则，支持子代理协同开发，无需人工干预即可完成需求分析、设计确认和代码实现。 |
| 7 | [ruvnet/ruvector](https://github.com/ruvnet/ruvector) | RuVector is a high performance vector and graph da... | Rust | 702 | 118 | RuVector是用Rust开发的高性能向量与图数据库，结合HNSW搜索、动态最小割连通性、图智能和自学习记忆技术。支持实时分析、低延迟推理、分布式扩展，具备自学习能力随使用优化搜索结果，单文件部署且开源免费。 |
| 8 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ An adaptive Web Scraping framework that handle... | Python | 12.5k | 2.0k | Scrapling是自适应网络爬虫框架，支持单请求到大规模爬取。内置反反爬机制，自动处理网页结构变化，提供并发爬取、代理旋转和实时统计功能，简化数据采集流程。 |
| 9 | [GVCLab/PersonaLive](https://github.com/GVCLab/PersonaLive) | [CVPR 2026] PersonaLive! : Expressive Portrait Ima... | Python | 1.9k | 75 | PersonaLive是一个实时可流式传输的扩散框架，用于生成无限长度的肖像动画。支持直播场景下的动态图像生成，集成ComfyUI并优化显存占用，可生成长视频序列。项目包含预训练模型和推理代码，适用于个性化虚拟形象动画创作。 |
| 10 | [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | Useful tool to track location or mobile number... | Python | 7.4k | 142 | GhostTrack是一款用于追踪目标位置、手机号和社交媒体用户名的OSINT工具，支持IP地址追踪与手机号信息查询，集成Seeker工具获取目标IP，适用于信息收集与安全研究场景。 |
| 11 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 17.2k | 678 | PageIndex 是一种无需向量数据库或分块的推理型RAG系统，通过构建文档结构树索引并利用LLM进行上下文感知的推理检索，提升长文档的精准度与专业性。支持PDF图像直接处理，适用于需要多步骤推理的复杂文档分析场景。 |
| 12 | [openemr/openemr](https://github.com/openemr/openemr) | The most popular open source electronic health rec... | PHP | 4.8k | 96 | OpenEMR是开源的电子健康记录与医疗管理应用，支持电子病历、排程、计费、国际化等功能，适用于多平台的医疗信息化需求。 |

[查看完整数据](api/github/2026-02-24.json)
<!-- END GITHUB TRENDING -->








