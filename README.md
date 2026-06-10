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

**最后更新**: 2026-06-09 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 37.3k | 3.2k | 这是一个基于 Python 的 AI Agent 技能，能够并行搜索 Reddit、X、YouTube、HN、Polymarket 和网络上的任何话题。它通过点赞、观看量和真实资金（Polymarket）来评分内容，而非编辑，从而合成一个基于事实的摘要。它旨在聚合分散的平台数据，提供超越传统搜索引擎的洞察。 |
| 2 | [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | A vector index built on TurboQuant, written in Rus... | Python | 10.2k | 1.8k | turbovec 是一个基于 Rust 和 TurboQuant 算法的向量索引库，提供 Python 绑定。它具有极高的内存效率（比标准 float32 节省 87%），且速度比 FAISS 快。支持在线摄取、搜索时过滤以及完全本地化运行，适合构建隐私敏感或低延迟的 RAG 应用。 |
| 3 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 43.0k | 733 | Roboflow Supervision 是一个 Python 库，旨在提供可复用的计算机视觉工具。它支持模型无关的检测、分类和分割任务，内置了多种流行模型库的连接器。此外，它还提供强大的可视化注解器和数据集处理工具，帮助开发者专注于构建应用而非底层实现。 |
| 4 | [opencv/opencv](https://github.com/opencv/opencv) | Open Source Computer Vision Library... | C++ | 88.6k | 102 | OpenCV 是一个广泛使用的开源计算机视觉库，主要使用 C++ 编写。它提供了丰富的函数和算法，支持图像处理、计算机视觉及机器学习任务，被广泛应用于学术界和工业界。 |
| 5 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 14.3k | 829 | Tolaria 是一款跨平台桌面应用，专为管理 Markdown 知识库设计。它采用文件优先和 Git 优先原则，确保数据完全离线、开源且无锁定。支持 AI 集成，适合构建第二大脑、管理公司文档及存储 AI 记忆，强调键盘操作和标准格式。 |
| 6 | [aaif-goose/goose](https://github.com/aaif-goose/goose) | an open source, extensible AI agent that goes beyo... | Rust | 48.5k | 489 | goose 是一个由 Linux Foundation 支持的开源 AI 代理，使用 Rust 构建。它提供桌面应用、CLI 和 API，支持 15+ LLM 提供商及 70+ 扩展。它不仅能辅助编程，还能用于研究、写作、自动化等任务，旨在成为通用的本地化 AI 助手。 |
| 7 | [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | Find the local LLM that actually runs and performs... | Python | 4.1k | 633 | 这是一个基于真实基准测试而非参数量，为本地硬件自动推荐最佳运行 LLM 的命令行工具。它能检测 GPU/CPU/RAM，从 HuggingFace 排名模型，并提供模拟 GPU、升级比较、运行模型等多种实用功能。 |
| 8 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 73.5k | 519 | 该项目汇集了中国小学至大学的数学教材PDF资源，旨在促进义务教育普及和消除教育贫困。针对GitHub文件大小限制，项目提供了合并工具以处理被拆分的文件，并鼓励开源与捐赠。 |
| 9 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 139.1k | 79 | 该项目汇集了包括 Cursor、Claude Code、Replit 等多种 AI 工具的系统提示词、内部工具及模型。旨在为开发者提供这些工具的内部机制参考，同时也包含安全警告和赞助信息。 |
| 10 | [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | Let's use AI to Earn!... | TypeScript | 19.9k | 402 | AiToEarn 是一个基于 TypeScript 的一站式 AI 内容变现平台。它通过 AI Agent 自动化帮助创作者在抖音、TikTok、YouTube 等全球主流平台构建、分发和变现内容。支持多平台一键发布、自动化互动运营及 CPS/CPE/CPM 结算模式，还提供线下商户推广解决方案，适合 OPC、创作者及企业使用。 |
| 11 | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | PM Skills Marketplace: 100+ agentic skills, comman... | - | 13.4k | 806 | 这是一个面向产品经理的 AI 技能市场，提供 100+ 个技能、命令和插件。它专为 Claude Code 设计，通过结构化的工作流（如发现、策略、执行）帮助用户应用成熟的产品管理框架，提升产品决策质量。 |
| 12 | [santifer/career-ops](https://github.com/santifer/career-ops) | AI-powered job search system built on Claude Code.... | JavaScript | 51.6k | 1.1k | 这是一个基于 Claude Code 的 AI 驱动求职系统。它利用 AI 对职位进行 A-F 评分评估，自动扫描招聘门户，批量处理申请，并生成 ATS 优化的 PDF 简历。旨在帮助求职者从海量职位中筛选出高匹配度的机会。 |
| 13 | [openai/plugins](https://github.com/openai/plugins) | OpenAI Plugins... | JavaScript | 2.6k | 284 | 该仓库汇集了 OpenAI Codex 插件的精选示例，展示了如何构建包含技能、命令和 MCP 支持的插件。示例涵盖 Figma 设计、Notion 知识管理、iOS/macOS/Web 应用开发以及 Expo 等技术栈，旨在为开发者提供插件开发的参考和最佳实践。 |
| 14 | [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | open-source healthcare ai... | Python | 1.9k | 191 | 这是一个专注于本地运行的医疗 AI 开源项目。它包含 1000+ 专用医疗模型，支持实体提取和 PII 去标识化。项目支持 Python 和 Apple MLX 加速，可在 iPhone 等设备上离线运行，无需云端或 API 密钥，确保患者数据不离开本地网络，完全免费开源。 |
| 15 | [francescopace/espectre](https://github.com/francescopace/espectre) | 🛜 ESPectre 👻 - Motion detection system based on ... | Python | 8.2k | 134 | 这是一个基于 Wi-Fi CSI（信道状态信息）的运动检测系统，无需摄像头或麦克风。它支持 ESP32 设备，并原生集成 Home Assistant。项目包含基于神经网络的 ML 检测器，无需校准即可在设备端运行。设置简单，仅需 YAML 配置。 |
| 16 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 49.8k | 443 | 该项目为 AI 编码代理提供生产级工程技能，包含 7 个开发生命周期斜杠命令。它封装了资深工程师的工作流、质量门控和最佳实践，确保 AI 在开发各阶段保持一致性，支持 Claude Code、Cursor、Gemini CLI 和 Windsurf 等工具。 |

[查看完整数据](api/github/2026-06-09.json)
<!-- END GITHUB TRENDING -->




