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

**最后更新**: 2026-03-19 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | PDF Parser for AI-ready data. Automate PDF accessi... | Java | 5.5k | 1.4k | OpenDataLoader-PDF 是一个开源PDF解析工具，支持AI数据提取与可访问性自动化。可提取Markdown、JSON（带边界框）和HTML，提供确定性本地模式与AI混合模式，兼容OCR识别、复杂表格/公式处理，输出结构化数据用于RAG应用，并支持生成Tagged PDF以满足可访问性规范。 |
| 2 | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | An Open-Source Asynchronous Coding Agent... | Python | 7.0k | 955 | 开源异步编码代理框架，基于LangGraph和Deep Agents构建，提供云沙盒、工具调用及自动PR创建功能，支持Slack/Linear集成与子代理编排，适用于企业内部开发流程自动化。 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 99.1k | 3.5k | Superpowers 是一个基于可组合技能的软件开发框架，通过代理自动化管理开发流程。它通过分解需求、制定TDD驱动的实现计划，并自动执行任务，提升编码效率与规范性。 |
| 4 | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | A Claude Code plugin that shows what's happening -... | JavaScript | 8.5k | 1.9k | Claude HUD是用于Claude Code的实时状态监控插件，展示上下文使用率、工具活动、代理状态和待办进度。通过终端状态栏提供可视化反馈，帮助开发者实时掌握代码编辑过程中的关键指标，提升开发效率。 |
| 5 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Unified web UI for training and running open model... | Python | 56.7k | 1.3k | Unsloth 提供统一本地界面，支持 Qwen 等多模型训练与推理，具备加速训练、显存优化、多格式模型支持、数据处理及可视化监控功能，覆盖文本、音频、视觉等场景。 |
| 6 | [mobile-dev-inc/Maestro](https://github.com/mobile-dev-inc/Maestro) | Painless E2E Automation for Mobile and Web... | Kotlin | 12.4k | 468 | Maestro是跨平台端到端测试框架，支持Android、iOS和Web应用测试。通过YAML流程定义测试用例，无需编译即可快速迭代，具备智能等待和抗抖动能力，简化多平台UI自动化测试流程。 |
| 7 | [newton-physics/newton](https://github.com/newton-physics/newton) | An open-source, GPU-accelerated physics simulation... | Python | 3.2k | 345 | 基于NVIDIA Warp的GPU加速物理模拟引擎，支持机器人学与仿真研究。提供OpenUSD兼容、可微分计算及用户扩展能力，整合MuJoCo Warp作为后端，适用于高效率的机器人仿真场景。 |
| 8 | [louis-e/arnis](https://github.com/louis-e/arnis) | Generate any location from the real world in Minec... | Rust | 10.7k | 918 | Arnis是一款基于Rust开发的开源工具，可将真实世界地理数据（如OpenStreetMap和高程数据）转换为高精度的Minecraft Java版和基岩版世界。支持城市、自然景观等场景生成，提供自定义参数如比例尺和建筑细节，适用于游戏内真实地理还原。 |
| 9 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 16.0k | 257 | MoneyPrinterV2 是一个自动化在线赚钱工具，支持Twitter机器人、YouTube Shorts自动播放、联盟营销等功能，采用模块化架构并需Python 3.12运行。提供配置文件和脚本简化操作，适用于数字营销和被动收入场景。 |
| 10 | [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) | A light-weight and powerful meta-prompting, contex... | JavaScript | 36.0k | 1.4k | GSD 是一个面向 Claude Code 等 AI 编程工具的轻量级规范驱动开发系统，通过上下文工程和元提示技术解决代码质量退化问题，简化开发流程并提升代码生成一致性。 |
| 11 | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need - A nano claude code–like 「ag... | TypeScript | 33.6k | 1.5k | 该项目是一个基于TypeScript的AI代理框架，旨在通过模型自身能力实现自主决策和行动。项目强调『模型即代理』的核心理念，通过训练神经网络学习环境感知、目标推理和行动执行，适用于强化学习与自主系统开发。 |

[查看完整数据](api/github/2026-03-19.json)
<!-- END GITHUB TRENDING -->








