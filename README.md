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

**最后更新**: 2026-09-02 | **成功**: 16 | **失败**: 3

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [fmtlib/fmt](https://github.com/fmtlib/fmt) | A modern formatting library... | C++ | 24.3k | 14 | {fmt} 是一个现代、高性能的 C++ 格式化库，旨在替代 C stdio 和 iostreams。它支持 C++20 std::format 和 C++23 std::print，提供类似 Python 的语法。该库具有类型安全、零开销、无外部依赖、跨平台兼容性以及严格的测试覆盖等特点，是构建高性能 C++ 应用的理想选择。 |
| 2 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 29.8k | 343 | TimesFM 是 Google Research 开发的时间序列基础模型，支持单变量和多变量预测。TimesFM 3.0 引入了原生多变量支持、灵活的协变量处理和零样本泛化能力。它在多个基准测试中表现优异，并已集成到 BigQuery ML、Google Sheets 和 Vertex Model Garden 等产品中。 |
| 3 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 121.6k | 1.4k | Ponytail 是一个 JavaScript 项目，通过提示工程让 AI 代理表现得像一位“懒惰的资深开发者”。它鼓励使用原生 API 替代重型库，从而显著减少代码量、降低成本并提升速度。实测显示，相比无技能基线，代码行数减少 54%，同时保持 100% 的安全性。 |
| 4 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 14.7k | 832 | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，支持语音克隆、视频配音、听写和有声书创作，覆盖 646 种语言。它集成了 16 个 TTS 和 11 个 ASR 引擎，无需账号或订阅，支持 macOS、Windows 和 Linux，适合在本地硬件上运行。 |
| 5 | [sngyai/Sequoia-X](https://github.com/sngyai/Sequoia-X) | A股自动选股系统 — 多种技术形态自动扫描，收盘后自动运行并推送飞书... | Python | 6.1k | 63 | Sequoia-X 是一个基于 Python 的 A 股量化选股系统 V2。系统采用 OOP 架构和向量化计算，每日收盘后自动扫描多种技术形态（如海龟交易、RPS 突破等）并推送结果至飞书。数据源采用免费且无限流的 Baostock，存储于本地 SQLite，支持增量更新和全市场历史回填。 |
| 6 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 50.6k | 148 | 这是一个为 AI 编码代理提供的 Chrome DevTools MCP 服务器。它允许 Claude、Cursor 等代理控制实时浏览器，进行自动化操作、深度调试（截图、网络请求、控制台）及性能分析。项目基于 Puppeteer，支持 Chrome 浏览器，旨在提升 AI 辅助开发的可靠性与效率。 |
| 7 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 240.1k | 533 | 这是一个由 Nous Research 构建的自我改进 AI 代理。它具备内置的学习循环，能从经验中创建技能、自我优化并构建用户模型。支持多平台（Telegram, Discord 等）和全功能终端界面。它允许用户使用任何模型，支持并行子代理、定时自动化和多种后端部署，是一个高度灵活且能随用户成长的智能助手。 |
| 8 | [superlinked/sie](https://github.com/superlinked/sie) | Open-source inference server and production cluste... | Python | 3.1k | 60 | SIE 是一个专为 AI 代理设计的开源推理引擎，通过单一 API 集中服务搜索、文档转换等任务所需的 100+ 个模型。支持 OpenAI 兼容接口、按需加载及 Kubernetes 部署，深度集成 LangChain 等框架，简化代理模型管理。 |
| 9 | [pacifio/atlas](https://github.com/pacifio/atlas) | Source control for agents. Use multiple coding age... | Rust | 2.9k | 888 | 处理失败 |
| 10 | [zyronon/TypeWords](https://github.com/zyronon/TypeWords) | Practice English, one strike, one step forward; 练习... | Vue | 9.3k | 21 | TypeWords 是一个基于 Vue 的开源英语练习工具，旨在通过打字方式高效学习单词和文章。它提供跟读、听写、自测等多种模式，内置智能记忆曲线算法，支持CET、雅思、托福等多种词汇库。项目界面简洁现代，无广告，支持自定义音效和快捷键，适合通过键盘输入强化英语记忆的用户。 |
| 11 | [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic Research Skills for Claude Code: research... | Python | 45.6k | 799 | 处理失败 |
| 12 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 246.3k | 516 | ECC 是一个面向 AI 编程代理（如 Claude Code, Cursor）的性能优化系统。它为代理提供协调的工程工具箱，涵盖技能、直觉、记忆、安全及研究优先的开发流程。支持规划、测试、自审和记忆功能，旨在提升代理的工程效率与代码质量，开源免费。 |
| 13 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 71.9k | 18 | Protocol Buffers 是 Google 开发的语言中立、平台中立的结构化数据序列化机制。项目包含 C++ 实现，提供了安装指南、源码构建建议（推荐使用稳定版本）以及 Bazel 构建系统的集成配置。适用于需要在不同系统或语言间高效传输和存储结构化数据的场景。 |
| 14 | [vercel-labs/portless](https://github.com/vercel-labs/portless) | Replace port numbers with stable, named local URLs... | TypeScript | 11.8k | 73 | 这是一个本地开发工具，旨在用稳定的 `.localhost` 域名替换端口，提升开发体验。它支持 Next.js、Vite 等主流框架，自动注入端口参数，默认启用 HTTPS/HTTP/2，适合需要稳定 URL 的开发环境。 |
| 15 | [blader/humanizer](https://github.com/blader/humanizer) | Agent skill that removes signs of AI-generated wri... | Python | 40.4k | 374 | 这是一个 Python Agent 技能，旨在移除 AI 生成文本的痕迹。它利用 35 种模式重写文本，使其听起来像人类写作，同时保持原意不变。支持 Markdown，能保留代码、数据和引用，并提供风格匹配功能。 |
| 16 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick — Cl... | Go | 102.6k | 238 | 处理失败 |
| 17 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 245.2k | 1.2k | 这是一个面向真实工程师的 AI 代理技能集合，基于 Shell 脚本开发。旨在提供小巧、可组合且易于适应的开发工具，帮助开发者进行真正的工程实践而非“氛围编码”。支持 Claude Code 和 Codex 等多种模型，提供一键安装和配置功能。 |
| 18 | [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | runs anywhere. uses anything... | TypeScript | 32.0k | 775 | OpenClaude 是一个开源的编码代理 CLI，支持云端和本地模型提供商（如 OpenAI、Gemini、Ollama 等）。它提供统一的终端工作流，支持提示词、工具、代理、MCP 和斜杠命令。还包含 VS Code 扩展和像素艺术伙伴。旨在通过一个 CLI 管理所有 AI 编码工具。 |
| 19 | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Fast Rust library for PDF inspection, classificati... | Rust | 18.5k | 586 | 这是一个用 Rust 编写的快速 PDF 检查、分类和文本提取库。它能智能区分基于文本和扫描的 PDF，提取带位置信息的文本并转换为 Markdown。支持多列布局、表格检测和选择性 OCR，性能极快（<200ms），并提供 Python/Node.js/WebAssembly 绑定。 |

[查看完整数据](api/github/2026-09-02.json)
<!-- END GITHUB TRENDING -->




