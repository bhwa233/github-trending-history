# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
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
  - `summary_en`: 英文项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景
  - `useCase_en`: 英文适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

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

**最后更新**: 2026-05-29 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用AI大模型，一键生成高清短视频 Generate short videos with one c... | Python | 69.6k | 3.6k | 基于 Python 的 AI 视频生成工具，支持一键生成文案、素材、字幕及配乐。采用 MVC 架构，支持多种 AI 模型接入，可批量生成高清视频，适配竖屏与横屏，适合自媒体创作者快速制作内容。 |
| 2 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 129.9k | 1.9k | Microsoft/MarkItDown 是一个轻量级 Python 工具，用于将 PDF、Office 文档、图像、音频等多种格式转换为 Markdown。它专为 LLM 和文本分析设计，能保留文档结构（如标题、表格），并注重 token 效率，适合构建数据处理管道。 |
| 3 | [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Official Compound Engineering plugin for Claude Co... | TypeScript | 18.1k | 353 | 这是一个为 Claude Code、Codex 等提供的官方 Compound Engineering 插件。它通过 AI 代理和工作流（如策略制定、头脑风暴、代码审查和知识复合）实现“复合工程”理念。旨在通过 80% 的规划与审查减少技术债务，使未来的开发工作更轻松高效。 |
| 4 | [twentyhq/twenty](https://github.com/twentyhq/twenty) | The open alternative to Salesforce, designed for A... | TypeScript | 48.4k | 578 | twenty 是 Salesforce 的开源替代品，专为 AI 设计。它提供对象、视图、工作流和代理等构建模块，允许技术团队通过代码（TypeScript）定义和定制 CRM，像管理其他技术栈一样管理版本。支持云端、CLI 和自托管部署。 |
| 5 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Python | 127.9k | 395 | Claude Code 是一个运行在终端的智能编码助手，通过自然语言命令理解代码库，帮助开发者执行常规任务、解释复杂代码及处理 Git 工作流，从而显著提升编码效率。 |
| 6 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Taste-Skill - gives your AI good taste. stops the ... | Shell | 28.1k | 2.1k | 这是一个为 AI 代理设计的“反平庸”前端框架。它提供可移植的技能，帮助 AI 构建具有更好布局、排版和动画的界面，避免生成通用的 UI。项目还包含图像生成技能，用于创建参考板，可与 Codex、Cursor 等工具配合使用，提升 AI 生成界面的设计质量。 |
| 7 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 1.3k | 134 | 该仓库包含 Cursor 官方插件集合，涵盖持续学习、团队协作、代码审查画布、交互式文档及 SDK 等工具。插件旨在增强开发体验，支持 CI/CD、安全审计、自动化构建及交互式代码/文档浏览。 |
| 8 | [run-llama/liteparse](https://github.com/run-llama/liteparse) | A fast, helpful, and open-source document parser... | Rust | 7.3k | 701 | LiteParse 是一个用 Rust 编写的快速、轻量级开源文档解析工具。它专注于本地运行，提供高质量的空间文本解析和边界框信息，无需云端依赖。支持灵活的 OCR 系统（内置 Tesseract 或 HTTP 服务器），并支持多语言和多平台，适用于需要结构化数据的场景。 |
| 9 | [galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel) | A platform for reproducible world model research a... | Python | 1.2k | 362 | 这是一个专注于可复现世界模型研究的 Python 平台，提供从数据收集、模型训练到基于模型预测控制（MPC）评估的统一接口。项目内置了标准化的环境和常见基线求解器，支持 Lance 数据格式和 LeRobot 数据集，旨在帮助研究者专注于模型创新。 |
| 10 | [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips) | An advanced guide to learn English which might ben... | - | 49.6k | 1.6k | 这是一个基于个人经验总结的英语进阶指南，作者结合自身高考和托福备考经历，分享了高效学习英语的方法。项目包含英语水平分级、资源推荐以及2026版AI辅助学习章节，重点介绍了如何利用Gemini、ChatGPT等工具构建完整的听说读写训练回路，旨在帮助用户通过热爱和科学方法提升英语能力。 |
| 11 | [Biohub/esm](https://github.com/Biohub/esm) | ... | Jupyter Notebook | 2.6k | 52 | 这是一个基于进化尺度建模（ESM）的蛋白质生物学世界模型，旨在实现蛋白质的预测、设计和发现。项目包含三个核心组件：ESMC（高性能蛋白质语言模型）、ESMFold2（快速结构预测模型，支持蛋白质-蛋白质相互作用设计）以及ESM Atlas（包含68亿种蛋白质的预测结构图谱）。该系统利用进化知识，从原子交互到亿万年进化关系进行建模，在药物发现和生物设计领域具有广泛应用。 |
| 12 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | Project N.O.M.A.D, is a self-contained, offline su... | TypeScript | 27.0k | 318 | Project N.O.M.A.D. 是一个自包含的离线优先知识服务器，旨在通过浏览器提供关键工具、知识和 AI。它使用 Docker 容器化工具，作为管理 UI（“Command Center”）和 API 运行。支持 Debian/Ubuntu 系统，允许用户在无网络环境下保持信息更新和赋能。 |
| 13 | [DigitalPlatDev/FreeDomain](https://github.com/DigitalPlatDev/FreeDomain) | DigitalPlat FreeDomain: Free Domain For Everyone... | HTML | 171.8k | 1.3k | DigitalPlat FreeDomain 是一个致力于提供免费域名注册服务的项目，旨在降低建站门槛。用户可注册独特域名并使用 Cloudflare 等服务商托管，目前支持多种后缀，已服务超50万用户，致力于打造开放的互联网空间。 |
| 14 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 198.6k | 1.4k | ECC 是一个跨 AI 编程助手（如 Cursor、Claude Code）的性能优化系统。它提供技能管理、记忆持久化、安全扫描及持续学习功能，旨在提升开发效率。v2.0.0 引入了桌面仪表盘，支持 Token 优化与并行化工作流。 |
| 15 | [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | A skill file for removing AI tells from prose... | - | 7.0k | 617 | 该项目提供了一套技能文件，旨在帮助 Claude 等大语言模型识别并移除文本中的 AI 痕迹。通过检测填充短语、结构陈词滥调及句子级错误，它指导模型重写文本，使其更具直接性、节奏感和人类真实性。 |
| 16 | [DataTalksClub/data-engineering-zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | Data Engineering Zoomcamp is a free 9-week course ... | Jupyter Notebook | 41.6k | 160 | 这是一个免费的9周数据工程课程，旨在帮助学员从零开始构建生产级数据管道。课程涵盖容器化、工作流编排、数据仓库、分析工程、批处理和流处理等核心模块，使用GCP、Docker、Terraform、Kestra、BigQuery、dbt、Spark和Kafka等工具，并提供实战作业与最终项目。 |
| 17 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 507.3k | 866 | Build Your Own X 是一个通过从头开始重建各种技术来掌握编程的指南合集。它涵盖了操作系统、数据库、Web 服务器、AI 模型、3D 渲染器等众多领域。通过实践这些教程，开发者可以深入理解底层原理，非常适合想要提升底层技术能力的程序员。 |

[查看完整数据](api/github/2026-05-29.json)
<!-- END GITHUB TRENDING -->




