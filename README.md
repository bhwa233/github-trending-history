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

**最后更新**: 2026-05-05 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) | Coding agent for DeepSeek models that runs in your... | Rust | 7.2k | 2.4k | 这是一个基于 Rust 构建的终端原生 DeepSeek 编码代理。支持 1M token 上下文和思考模式流，具备文件读写、运行命令、Git 管理及子代理编排能力。项目包含 MCP 客户端、沙箱和持久化任务队列，提供快速、键盘驱动的交互体验。 |
| 2 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 43.6k | 2.4k | Ruflo 是一个为 Claude Code 打造的多代理编排平台，支持部署智能群组、协调自主工作流及构建对话式 AI 系统。它具备自学习记忆、联邦通信和企业级安全，通过 CLI 或插件集成，让 AI 代理在后台自动协作完成任务。 |
| 3 | [virattt/dexter](https://github.com/virattt/dexter) | An autonomous agent for deep financial research... | TypeScript | 23.7k | 660 | Dexter 是一个专为深度金融研究设计的自主代理。它利用任务规划、自我反思和实时市场数据，将复杂金融问题分解为结构化步骤，自动执行并验证结果，最终提供数据支持的清晰答案。 |
| 4 | [docusealco/docuseal](https://github.com/docusealco/docuseal) | Open source DocuSign alternative. Create, fill, an... | Ruby | 14.0k | 929 | DocuSeal 是一个开源的 DocuSign 替代品，使用 Ruby 构建。它提供所见即所得的 PDF 表单构建器，支持多种字段类型（签名、日期等）及自动签名功能。具备用户管理、移动端优化、多语言支持及 API 集成能力，支持多种存储后端，易于部署。 |
| 5 | [bwya77/vscode-dark-islands](https://github.com/bwya77/vscode-dark-islands) | VSCode theme based off the easemate IDE and Jetbra... | PowerShell | 7.8k | 665 | 这是一个灵感源自 easemate IDE 和 JetBrains Islands 的 VS Code 深色主题。它采用深色画布、玻璃拟态面板、圆角设计和流畅动画，提供舒适的视觉体验。支持多种编程语言的语法高亮，并推荐使用特定字体。项目提供自动化安装脚本，可一键配置主题、UI 样式及字体。 |
| 6 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 13.0k | 344 | 这是一个针对 AI 编码代理的上下文窗口优化 MCP 服务器。它通过沙箱化工具输出（减少 98%）、使用 SQLite 和 FTS5 索引保持会话连续性，以及强制“代码思维”模式（让 LLM 编写脚本而非读取数据）来大幅节省 token。它还压缩输出废话。 |
| 7 | [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) | Incremental engine for long horizon agents 🌟 Star... | Python | 8.4k | 434 | CocoIndex 是一个专为 AI 代理和 LLM 应用设计的增量上下文引擎。它支持将代码库、文档、视频等多种数据源实时转换为向量索引，通过增量处理技术仅更新变化部分，确保数据始终新鲜。项目提供声明式 API，支持并行处理，旨在帮助开发者快速构建生产级 AI 应用，解决数据过时和上下文缺口问题。 |
| 8 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 93.6k | 1.2k | 这是一个提供多种专业AI代理配置的开源项目，旨在构建一个“AI代理机构”。每个代理拥有独特的个性、工作流程和交付成果，涵盖前端开发、社区运营等多个领域。项目支持与Claude Code、Copilot等主流AI工具集成，通过Shell脚本一键安装，帮助用户快速激活特定领域的专家模式。 |
| 9 | [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a... | - | 345.8k | 424 | 这是一个旨在帮助求职者通过大型科技公司技术面试的完整计算机科学自学计划。内容涵盖数据结构、算法、操作系统及网络等核心知识，提供详细的学习路线图和资源，支持多语言翻译。 |
| 10 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | A collection of projects showcasing RAG, agents, w... | Python | 11.3k | 170 | 该项目是一个全面的LLM应用开发指南，包含80+个实用示例和教程。涵盖了RAG、Agents、工作流等核心AI技术，支持OpenAI、LangChain、LlamaIndex等多种框架，适合开发者快速上手并构建强大的AI应用。 |
| 11 | [AIDC-AI/Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) | 🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video En... | Python | 11.6k | 724 | Pixelle-Video 是一个基于 Python 的 AI 全自动短视频引擎。它利用大语言模型生成文案，结合 ComfyUI 或云端 API 生成配图，并使用 TTS 技术合成语音，通过 Streamlit 提供可视化界面，支持一键启动，实现视频内容的自动化生产。 |
| 12 | [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | ~95% on SimpleQA (e.g. Qwen3.6-27B on a 3090). Sup... | Python | 5.1k | 200 | 这是一个本地运行的 AI 深度研究助手，支持所有本地和云端 LLM。它能自动搜索网络、学术论文及私有文档，综合生成带引用的报告。项目支持 Docker 和 pip 安装，内置 SQLCipher 加密，确保数据隐私，适合需要自主可控研究工具的用户。 |
| 13 | [browserbase/skills](https://github.com/browserbase/skills) | Claude Agent SDK with a web browsing tool... | JavaScript | 2.4k | 313 | 这是一个为 Claude Code 提供的 Browserbase 浏览器自动化工具集 SDK。包含远程浏览器自动化、无服务器函数部署、网站调试、安全浏览器构建及 AI 驱动的 UI 测试等技能。支持反机器人、验证码解决和代理，旨在帮助开发者高效构建和调试基于浏览器的 AI 应用。 |
| 14 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 113.8k | 2.4k | 这是一个基于 Andrej Karpathy 关于 LLM 编码陷阱观察的 CLAUDE.md 配置文件，旨在提升 Claude Code 的行为质量。项目针对大模型常见的过度复杂化、错误假设、隐藏困惑等问题，提出了“思考前编码”、“简单优先”、“外科手术式修改”和“目标驱动执行”四大原则。它通过强制模型明确假设、最小化代码、精准修改和测试驱动，帮助开发者避免臃肿代码，确保代码质量和逻辑清晰。 |
| 15 | [PriorLabs/TabPFN](https://github.com/PriorLabs/TabPFN) | ⚡ TabPFN: Foundation Model for Tabular Data ⚡... | Python | 6.4k | 41 | TabPFN 是一个专为表格数据设计的 Foundation Model，支持分类与回归任务。它无需复杂的特征工程（如缩放或独热编码），特别适合小数据集。模型支持 GPU 加速，提供简单的 API，首次使用自动下载检查点，适合快速原型开发。 |

[查看完整数据](api/github/2026-05-05.json)
<!-- END GITHUB TRENDING -->




