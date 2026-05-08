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

**最后更新**: 2026-05-07 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/financial-services](https://github.com/anthropics/financial-services) | ... | Python | 11.6k | 1.4k | 该项目为金融行业提供 Claude AI 代理和技能库，涵盖投资银行、股权研究等领域。包含 Pitch Agent、Market Researcher 等端到端工作流代理及垂直插件，支持通过插件或 API 部署。旨在辅助生成分析报告和模型，需人工审核。 |
| 2 | [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) | Coding agent for DeepSeek models that runs in your... | Rust | 18.7k | 5.8k | DeepSeek-TUI 是一个基于 Rust 开发的终端编码代理，利用 DeepSeek V4 模型。它支持流式推理、自动模式选择模型与思考级别，具备文件编辑、Shell 执行、Git 管理及 Web 搜索等全功能工具集，支持 1M token 上下文窗口，旨在通过键盘驱动的 TUI 提升终端编码效率。 |
| 3 | [z-lab/dflash](https://github.com/z-lab/dflash) | DFlash: Block Diffusion for Flash Speculative Deco... | Python | 3.5k | 654 | DFlash 是一个专为快速推测解码设计的轻量级块扩散模型。它通过并行起草机制，显著提升了大语言模型（LLM）的生成效率，支持多种主流模型（如 Gemma、Qwen 等）的加速。 |
| 4 | [InsForge/InsForge](https://github.com/InsForge/InsForge) | InsForge is a Postgres-based backend with auth, st... | TypeScript | 8.8k | 459 | InsForge 是一个专为 AI 编码代理设计的后端开发平台。它充当语义层，连接 AI 代理与后端原语（如数据库、认证、存储、边缘函数等），使代理能够理解、配置和检查后端系统。支持 Postgres、S3、OpenAI 兼容 API 等核心服务，旨在简化 AI Agent 的后端开发流程。 |
| 5 | [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | ~95% on SimpleQA (e.g. Qwen3.6-27B on a 3090). Sup... | Python | 6.2k | 564 | 这是一个本地运行的AI研究助手，支持多种大模型和搜索引擎。它可以在本地处理数据，保护隐私，并自动搜索网络、学术论文和私有文档来生成带引用的研究报告。支持Docker和pip安装，具备SQLCipher加密功能。 |
| 6 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 32.9k | 3.1k | 该项目为 AI 编码代理提供生产级工程技能，包含 7 个斜杠命令映射开发全流程。它封装了资深工程师的工作流、质量门禁和最佳实践，确保 AI 代理在开发各阶段（定义、计划、构建、测试、审查、简化、发送）遵循标准。支持 Claude Code，并能根据上下文自动激活特定技能。 |
| 7 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 29.5k | 953 | PageIndex 是一个基于 Python 的向量无关 RAG 系统。它通过构建文档的层级树索引并利用 LLM 进行推理，解决了传统向量搜索在长文档中缺乏相关性问题。它无需向量数据库，支持大规模文档检索，提供更可解释和上下文感知的搜索体验。 |
| 8 | [vercel-labs/open-agents](https://github.com/vercel-labs/open-agents) | An open source template for building cloud agents.... | TypeScript | 5.0k | 160 | 这是一个用于在 Vercel 上构建和运行后台编码代理的开源参考应用。它采用三层架构（Web、代理工作流、沙盒），实现了聊天驱动的代码生成、持久化工作流、隔离沙盒执行和 Git 集成。核心设计将代理与沙盒分离，支持独立的生命周期管理。 |
| 9 | [docusealco/docuseal](https://github.com/docusealco/docuseal) | Open source DocuSign alternative. Create, fill, an... | Ruby | 15.6k | 899 | DocuSeal 是一个开源的 DocuSign 替代品，使用 Ruby 构建。它提供 PDF 表单构建、数字签名、验证及自动化邮件等功能。支持多语言、移动端优化，并具备完善的 API 和 Webhook 供集成。支持多种部署方式，适合需要在线签署文档的企业和个人。 |
| 10 | [decolua/9router](https://github.com/decolua/9router) | 🆓 Unlimited FREE AI coding. Connect Claude Code, ... | JavaScript | 4.5k | 249 | 9Router 是一个免费的 AI 编码路由器，旨在通过连接 40+ AI 提供商来节省令牌和成本。它支持 Claude Code、Cursor 等工具，提供 RTK 令牌压缩（节省 20-40%）、自动回退机制（订阅到免费）以及多账户轮询，确保持续编码并避免配额限制。 |
| 11 | [PriorLabs/TabPFN](https://github.com/PriorLabs/TabPFN) | ⚡ TabPFN: Foundation Model for Tabular Data ⚡... | Python | 6.8k | 233 | TabPFN 是一个专为表格数据设计的预训练基础模型，支持分类和回归任务。它通过下载预训练检查点实现快速训练，无需复杂的数据预处理。项目推荐使用 GPU 以获得最佳性能，CPU 仅适合小数据集，并支持批量预测以提高效率。 |
| 12 | [aaif-goose/goose](https://github.com/aaif-goose/goose) | an open source, extensible AI agent that goes beyo... | Rust | 44.5k | 431 | Goose 是一个开源的通用 AI 代理，运行在本地。它提供桌面应用、CLI 和 API，支持执行、编辑和测试代码。基于 Rust 构建，兼容 15+ 个 LLM 提供商及 70+ 个扩展，现隶属于 Agentic AI Foundation。适用于代码开发、自动化、研究及数据分析等多种场景。 |
| 13 | [Augani/openreel-video](https://github.com/Augani/openreel-video) | OpenReel Video - Professional browser-based video ... | TypeScript | 1.7k | 208 | OpenReel Video 是一个专业浏览器端视频编辑器，开源 CapCut 替代品。100% 客户端运行，无安装、无云上传、无水印。支持多轨时间轴、关键帧动画、调色、音频特效及 GPU 加速。提供丰富的图形文本工具，包括专业字幕、SVG 支持和多种动画效果。 |

[查看完整数据](api/github/2026-05-07.json)
<!-- END GITHUB TRENDING -->




