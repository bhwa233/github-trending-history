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

**最后更新**: 2026-07-15 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 71.6k | 1.7k | OpenCut 是一款跨平台（Web/桌面/移动）的开源视频编辑器。项目正在从零重写，采用 Rust 核心，旨在提供插件架构、MCP 服务器（AI 集成）、无头模式及脚本支持，打造强大的第三方插件生态。 |
| 2 | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Anti-AI-slop design skill for Claude Code, Cursor,... | CSS | 8.4k | 1.3k | 这是一个专为 Claude Code、Cursor 和 Codex 设计的 AI 设计技能，旨在生成独特、非模板化的 UI。它包含 20 种主题和 57 个反垃圾测试，确保设计避免 AI 生成的陈词滥调。提供四种命令（构建、审计、重构、研究），帮助开发者创建高质量、定制化的网页，拒绝默认的 AI 模式。 |
| 3 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .claud... | Shell | 172.2k | 2.1k | 这是一个面向 Claude AI 的工程技能集，旨在提供真实的工程实践而非“氛围编码”。它包含一系列可组合的小型脚本和插件，支持自定义安装，可配置问题跟踪器和文档存储，旨在帮助开发者建立标准化的开发工作流。 |
| 4 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 42.5k | 110 | AIRI 是一个受 Neuro-sama 启发的自托管 AI 虚拟伴侣项目。它旨在将 AI 虚拟角色带入现实，支持实时语音聊天、在 Minecraft 和 Factorio 等游戏中游玩，并兼容 Web、macOS 和 Windows 平台。项目集成了 RAG、记忆系统和 Live2D 工具，致力于打造全能的赛博生命伴侣。 |
| 5 | [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | The Destructive Command Guard (dcg) is for blockin... | Rust | 4.8k | 471 | 这是一个用 Rust 编写的高性能钩子工具，旨在阻止 AI 编码代理（如 Claude、Copilot）执行危险的 git 和 shell 命令，防止意外删除文件，保护开发者的代码安全。 |
| 6 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 23.7k | 915 | Vibe-Trading 是一个基于 Python 的个人交易代理框架，旨在通过一条命令赋予代理全面的交易能力。项目包含回测正确性验证、投资组合工作室以及多数据源支持（如长桥、NVIDIA NIM）。它集成了 MCP（模型上下文协议）传输，提供市场数据获取和交易策略执行功能，适合构建自动化交易系统。 |
| 7 | [openinterpreter/openinterpreter](https://github.com/openinterpreter/openinterpreter) | A coding agent for low-cost models... | Rust | 65.5k | 299 | 这是一个基于 Rust 的编码代理，专为低成本模型优化。它允许 AI 在本地或远程机器上运行命令、操作文件及测试应用。支持多种模型框架和沙盒环境，提供类似人类开发者的交互体验，旨在降低 AI 编程成本。 |
| 8 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 26.2k | 172 | DeepTutor 是一个终身个性化辅导系统，利用 LlamaIndex、LightRAG 和 FAISS 等技术构建强大的知识库检索与 RAG 功能。支持多模态图像提取、引导式学习和深度研究，旨在提供智能化的学习体验。 |
| 9 | [HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium) | Become a cracked AI/ML Research Engineer... | TypeScript | 5.9k | 725 | 这是一个涵盖数学、计算和人工智能的开放式教科书，旨在帮助从业者深入理解核心概念。项目包含详细的章节大纲，从向量、矩阵到机器学习和自然语言处理，强调直觉和现实世界背景。此外，它还提供了一个 MCP Server，允许 AI 助手作为知识库使用，非常适合准备 AI/ML 面试和深入研究的学习者。 |
| 10 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ AI Agent & RAG apps you can actually run — cl... | Python | 121.9k | 1.2k | 该项目汇集了100+个经过测试的开源AI Agent和RAG应用模板，支持Claude、GPT、Llama等多种大模型。用户可通过简单的命令快速克隆、定制并部署这些应用，涵盖博客转播客、数据分析、医疗影像诊断及个人助理等多种场景，旨在帮助开发者高效构建和发布AI产品。 |
| 11 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CR... | JavaScript | 39.7k | 340 | 这是一个为 Claude Code 和 AI 代理提供的营销技能集合，涵盖 CRO、文案写作、SEO、分析和增长工程。通过 Markdown 文件为 AI 提供专业知识和工作流，支持 Cursor、Windsurf 等多种工具。项目以产品营销为基础，构建了模块化技能体系，旨在帮助技术营销人员和创始人利用 AI 提升营销效率。 |
| 12 | [YimMenu/YimMenuV2](https://github.com/YimMenu/YimMenuV2) | Experimental menu for GTA 5: Enhanced... | C++ | 1.4k | 38 | 这是一个为 GTA 5: Enhanced 开发的实验性菜单，使用 C++ 编写。它允许用户通过注入 DLL 文件来修改游戏，支持使用 FSL 进行账号数据保存。使用前需禁用 BattlEye 并配合注入器（如 Xenos）运行。 |
| 13 | [hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset) | 1,324-exercise fitness dataset — animation GIFs, 1... | HTML | 14.3k | 949 | 这是一个包含1,324个健身动作的综合数据集，涵盖动画GIF、缩略图及详细的肌肉群、器材和目标数据。支持9种语言的分步说明，为LogPress应用提供数据层，适合用于构建健身应用、机器学习研究及健康项目。 |

[查看完整数据](api/github/2026-07-15.json)
<!-- END GITHUB TRENDING -->




