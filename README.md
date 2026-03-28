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

**最后更新**: 2026-03-28 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | real time face swap and one-click video deepfake w... | Python | 84.3k | 1.8k | 基于Python的实时人脸交换与视频深度伪造工具，仅需单张图像即可生成深度伪造内容。内置内容审核机制，防止生成不当素材，适用于艺术创作与AI内容生成场景。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 120.7k | 2.3k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理自动化流程提升开发效率。核心流程包括需求澄清、分块设计、TDD实施及子代理协作，强调YAGNI、DRY原则，支持编码代理自主执行任务。 |
| 3 | [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) | The AI Scientist-v2: Workshop-Level Automated Scie... | Python | 3.4k | 507 | AI-Scientist-v2 是一个基于代理树搜索的自动化科学发现系统，可自主生成假设、运行实验、分析数据并撰写论文。相比v1，其无需人类模板，跨ML领域通用，采用渐进式搜索策略，适用于开放性科学探索场景。 |
| 4 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 20.2k | 583 | Dexter是一个用于深度金融研究的自主代理系统，具备任务规划、实时数据分析和自我验证能力，可分解复杂金融问题并生成数据驱动的分析结果。 |
| 5 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | Building a modern alternative to Salesforce, power... | TypeScript | 42.4k | 562 | Twenty 是一个开源客户关系管理（CRM）平台，旨在替代 Salesforce。它提供自定义布局、对象字段、权限管理、工作流自动化、邮件日历集成等功能，支持社区驱动开发，强调低成本和开放生态。 |
| 6 | [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | Open Source AI Platform - AI Chat with advanced fe... | Python | 19.7k | 870 | Onyx是一个自托管的AI聊天平台，支持所有LLM和自托管LLM，提供代理、RAG、网络搜索、代码解释器、图像生成等高级功能，适用于需要定制化AI对话系统的场景。 |
| 7 | [datalab-to/chandra](https://github.com/datalab-to/chandra) | OCR model that handles complex tables, forms, hand... | Python | 7.6k | 679 | Chandra OCR 2 是先进的OCR模型，支持90+语言，可将图片/PDF转为结构化HTML/Markdown/JSON，精准处理表格、手写体、表单及复杂布局，提供本地和云端部署模式。 |
| 8 | [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | Build and run agents you can see, understand and t... | Python | 21.6k | 379 | AgentScope是一个面向生产环境的智能代理框架，提供可视化、可解释的代理构建工具，支持实时语音、多代理协作、模型微调及复杂工作流编排，强调灵活性与可扩展性。 |
| 9 | [apache/superset](https://github.com/apache/superset) | Apache Superset is a Data Visualization and Data E... | TypeScript | 71.4k | 67 | Apache Superset是企业级数据可视化与探索平台，提供无代码图表构建、SQL编辑器、多数据库支持及丰富可视化选项，支持大规模数据实时分析与定制化扩展。 |

[查看完整数据](api/github/2026-03-28.json)
<!-- END GITHUB TRENDING -->








