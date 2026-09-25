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

**最后更新**: 2026-09-24 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 56.6k | 347 | 这是一个全面的 AI 工程自学课程，包含 523 个课程和 20 个阶段，总计约 342 小时。项目涵盖数学基础、ML、LLM 及代理工程，强调“学、做、交付”。通过构建可复用的提示词、代理和 MCP 服务器等工件，帮助学习者从零开始掌握 AI 工程技能，支持多语言翻译。 |
| 2 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 27.8k | 1.7k | Hindsight 是一个专注于让智能体'学习'而非单纯'回忆'的记忆系统。它在 LongMemEval 基准测试中表现卓越，超越了 RAG 和知识图谱等传统技术。该系统提供 LLM 包装器和多种集成方式，旨在为智能体提供长期、准确的学习能力。 |
| 3 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 17.7k | 1.1k | Univer 是一个高性能、开源的 Office SDK，专为 AI 代理打造。它支持电子表格、文档、演示文稿等多种格式，提供基于 Canvas 的渲染、公式引擎和插件架构。开发者可将其嵌入到 SaaS 产品或内部工具中，构建完全可定制的生产力体验，支持浏览器和 Node.js 环境。 |
| 4 | [google/ax](https://github.com/google/ax) | Google's open agentic orchestration runtime... | Go | 10.5k | 1.4k | Google 开源的高吞吐量声明式编排运行时，用于在集群中运行数十亿个自主代理工作负载。它基于 Agent Substrate 提供沙箱隔离，类似 Kubernetes。提供 Task、Workspace、Model 三大原语，支持声明式配置、状态管理和远程调试，旨在解决代理工作负载的隔离、状态累积和成本控制问题。 |
| 5 | [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | A unified library of SOTA model optimization techn... | Python | 4.1k | 44 | NVIDIA Model Optimizer 是一个 Python 库，集成了量化、剪枝、NAS、蒸馏等前沿模型优化技术。它支持从 Hugging Face、PyTorch 或 ONNX 导入模型，通过 Python API 进行优化并导出，无缝对接 TensorRT-LLM、vLLM 等推理框架，旨在加速模型推理并减少模型体积。 |
| 6 | [FxEmbed/FxEmbed](https://github.com/FxEmbed/FxEmbed) | Fix X/Twitter and Bluesky embeds! Use multiple ima... | TypeScript | 5.4k | 182 | 这是一个用于修复和增强 X/Twitter 和 Bluesky 嵌入内容的开源项目。它支持在 Discord、Telegram 等平台展示多图、视频、投票和翻译等丰富内容。项目基于 TypeScript 和 Cloudflare Worker 构建，提供 Docker 部署方案，允许用户自定义域名和品牌，通过简单的 URL 前缀修改即可使用。 |
| 7 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 37.4k | 509 | 该项目为金融服务行业提供了一套参考代理、技能和数据连接器，支持投资银行、股权研究、私募股权和财富管理等工作流。包含Pitch Agent、Market Researcher等端到端代理，可通过Claude插件或API部署。项目强调输出需人工审核，主要用于辅助分析师生成模型、备忘录和报告。 |
| 8 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | "CLI-Anything: Making ALL Software Agent-Native" -... | Python | 50.3k | 413 | CLI-Anything 是一个连接 AI 代理与各类软件的桥梁。它通过 CLI-Hub 平台提供社区构建的命令行工具，使 AI 代理（如 Claude Code、Cursor）能够通过简单的命令行指令与 CAD、3D 场景、笔记软件等进行交互，实现软件自动化操作。 |
| 9 | [mvt-project/mvt](https://github.com/mvt-project/mvt) | MVT (Mobile Verification Toolkit) helps with condu... | Python | 14.7k | 272 | MVT 是 Amnesty International 开发的移动取证工具，旨在自动化收集 Android 和 iOS 设备的取证痕迹，以识别潜在的妥协迹象。它支持使用公共入侵指标（IOCs）扫描设备，但警告仅依赖公共 IOCs 可能导致误报或漏报，建议寻求专业专家协助。 |
| 10 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 291.2k | 611 | Superpowers 是一个面向编码代理的技能框架与软件开发方法论。它通过一套可组合的技能和指令，引导代理在编码前与用户确认需求，制定包含 TDD、YAGNI 和 DRY 原则的实施计划，并支持代理自主执行任务，适用于多种主流 AI 编码工具。 |
| 11 | [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | Build an agent harness and control it end-to-end. ... | Python | 8.3k | 455 | Strands 是一个开源的生产级 AI 代理 SDK，支持 Python 和 TypeScript。它提供端到端的代理控制，无需托管控制平面，内置生命周期管理、工具调用、多代理协作、记忆会话、护栏及追踪评估等功能，支持任意模型和云服务。 |
| 12 | [julyx10/lap](https://github.com/julyx10/lap) | An offline-first photo manager for large local lib... | Vue | 2.9k | 122 | Lap 是一款开源的跨平台桌面照片管理器，专为本地大容量媒体库设计。它采用离线优先架构，无需上传云端，保护用户隐私。内置本地 AI 搜索功能，支持人脸识别和智能标签，同时提供文件夹优先的工作流，让用户直接管理现有文件，是云相册服务的隐私替代方案。 |
| 13 | [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for agent tools. Join community here: h... | Python | 3.2k | 468 | treg 是一个为 AI 代理设计的统一工具 API 网关。它聚合了 3000+ 个第三方服务（如 SEO、数据丰富、图像生成），允许代理通过单一 API 调用访问，无需为每个提供商单独注册。支持团队内部工具，按使用量付费，并确保凭证安全。 |
| 14 | [leejet/stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) | Diffusion model(SD,Flux,Wan,Qwen Image,Z-Image,...... | C++ | 7.2k | 36 | 这是一个基于 C++ 和 ggml 的轻量级扩散模型推理库，类似于 llama.cpp。它支持多种主流模型，包括 Stable Diffusion 系列、FLUX、Wan、Qwen Image 等，涵盖图像生成、编辑及视频生成。项目无外部依赖，性能高效，且拥有嵌入式 Web UI，适合在资源受限的环境下运行。 |

[查看完整数据](api/github/2026-09-24.json)
<!-- END GITHUB TRENDING -->




