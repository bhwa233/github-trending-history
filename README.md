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

**最后更新**: 2026-08-29 | **成功**: 20 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tt-a1i/archify](https://github.com/tt-a1i/archify) | Agent skill for beautiful, verifiable architecture... | JavaScript | 28.0k | 4.6k | Archify 是一个专为 AI 编程助手设计的架构可视化系统，支持将代码库或系统描述转换为交互式 HTML/SVG 图表。它提供蓝图、信号流等多种图表类型，支持深色模式、动画导出及架构变更对比，适用于代码库架构自动映射与团队协作评审。 |
| 2 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Turn any AI agent into an AI Scientist. The #1 Age... | Python | 36.8k | 720 | 这是一个将任何 AI 代理转化为 AI 科学家的开源技能库。包含 163 个经过验证的科学技能和 100+ 个科学数据库，覆盖生物、化学、医学等领域。支持本地运行（BYOK）和云端扩展，兼容多种 AI 框架，旨在帮助科学家进行高效的研究工作。 |
| 3 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Official, Anthropic-managed directory of high qual... | Python | 35.1k | 457 | Anthropic 官方维护的 Claude Code 插件精选目录。包含 Anthropic 内部开发及第三方合作伙伴提交的高质量插件。用户可通过 Claude Code 插件系统直接安装。插件遵循标准结构（含元数据、MCP 配置、命令等），名称不可变。注意：Anthropic 不对插件内容的安全性负责，用户需自行判断。 |
| 4 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 11.3k | 3.8k | 这是一个基于浏览器的间谍卫星模拟器，利用真实公开数据（如飞机、船只、卫星位置）在照片级真实感的3D地球上进行实时可视化。项目集成了语音控制功能，允许用户通过AI代理与地球互动。它将零散的开源情报信号整合成一个统一的交互式界面，无需特殊权限即可查看全球实时动态。 |
| 5 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 46.2k | 202 | GitNexus 是一个零服务器代码智能引擎，完全在浏览器中运行。它将代码库索引为知识图谱，追踪依赖、调用链和执行流。通过 CLI 和 MCP 工具，它为 AI 代理（如 Cursor、Claude Code）提供深度架构视图，防止遗漏依赖或破坏调用链，是 AI 代理上下文的“神经系统”。 |
| 6 | [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | Help AI coding agents write modern Go... | Go | 2.6k | 574 | 该项目为 AI 编码代理提供编写现代 Go 代码的指南，覆盖 Go 1.0 至 1.27 的特性。它旨在解决 AI 训练数据滞后和频率偏差问题，通过强制使用现代惯用语（如 slices.Contains、cmp.Or 等），确保生成的代码符合 Go 团队的现代化标准。 |
| 7 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 53.4k | 1.1k | OpenMontage 是全球首个开源的代理驱动视频制作系统，旨在将 AI 编码助手转化为全能视频工作室。它拥有 12 条生产管线和 700+ 技能文件，能自动处理从研究、脚本、资产生成到剪辑合成的全流程。其核心优势在于能利用免费素材库生成包含真实运动片段的“真实视频”，而不仅仅是动画化静态图像。 |
| 8 | [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) | Drop in a screenshot and convert it to clean code ... | Python | 75.6k | 326 | 这是一个基于 AI 的开源项目，能够将截图、Figma 设计或屏幕录制转换为高质量的 HTML、React、Vue 或 Tailwind 代码。它支持多种前端框架，并提供本地部署和托管服务两种使用方式，利用 Gemini、GPT 和 Claude 等模型进行智能代码生成。 |
| 9 | [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins... | TypeScript | 6.0k | 246 | 该项目是 Cursor AI 编辑器的官方插件集合与规范仓库。包含教学、持续学习、代码审查、团队协作及生产力工具等多种插件，支持通过 TypeScript SDK 构建自动化脚本，旨在提升 AI 编程体验与开发效率。 |
| 10 | [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，530+ 个案例逆... | JavaScript | 24.4k | 1.7k | 这是一个 GPT-Image2 的工业级提示词引擎与模板库，包含 530+ 个逆向工程案例和 20+ 套工业级模板。用户可通过在线网站浏览、复制提示词并测试生成效果，项目还提供社区交流群和 API 赞助商支持，持续更新中。 |
| 11 | [tailscale/tailcat](https://github.com/tailscale/tailcat) | like netcat, but over Tailscale's data plane, with... | Go | 2.8k | 965 | Tailcat 是一个基于 Go 的工具，类似于 netcat，但利用 Tailscale 的数据平面（WireGuard 和 DERP）建立加密连接。它绕过了控制平面，无需 root 权限或修改路由表，即可在两台机器间进行点对点通信。支持 CLI 和库，包含 WebAssembly 演示。 |
| 12 | [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | Ghidra is a software reverse engineering (SRE) fra... | Java | 73.4k | 191 | Ghidra 是由美国国家安全局（NSA）开发的强大软件逆向工程（SRE）框架。它提供全功能分析工具，支持反汇编、反编译及脚本编写，兼容多平台。该框架旨在解决复杂 SRE 任务的扩展与协作问题，广泛用于恶意代码分析、漏洞挖掘及网络安全防御研究。 |
| 13 | [swoole/typephp](https://github.com/swoole/typephp) | Compile PHP to Native Binaries... | PHP | 829 | 188 | TypePHP 是一个 PHP 的 AOT（提前编译）编译器。它将 PHP 源代码转换为 C++，再编译为原生机器代码，生成高性能的可执行文件、PHP 扩展或共享库。项目保持熟悉的 PHP 语法，通过编译时类型信息优化性能。完全由 PHP 编写且具备自举能力，支持 PHP 的定义子集。 |
| 14 | [marin-community/marin](https://github.com/marin-community/marin) | Open-source framework for the research and develop... | Python | 2.9k | 236 | Marin 是一个专注于大型语言模型研发的开源框架，提供从数据清洗到模型评估的全流程支持。项目强调开源透明，记录所有实验过程与决策。当前重点包括 Frontier mixture-of-experts 模型训练及基于 Delphi 的缩放定律研究，旨在帮助研究人员高效构建基础模型。 |
| 15 | [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | 7.4 billion tokens per month. 34 free LLM provider... | TypeScript | 21.7k | 433 | 该项目聚合了34个免费LLM提供商的635个模型，通过单一OpenAI兼容的/v1端点提供服务。具备智能路由、自动故障转移、密钥加密及用量追踪功能，将分散的免费额度整合为7.4B tokens/月的推理能力，适合个人实验和成本控制。 |
| 16 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 50.0k | 67 | 这是一个为 AI 编码助手设计的 MCP 服务器，允许助手控制并检查 Chrome 浏览器。它提供性能分析、高级调试（网络、截图、控制台）及基于 Puppeteer 的可靠自动化功能，支持 Claude、Cursor 等工具。 |
| 17 | [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Learn it. Build it. Ship it for others.... | Python | 50.7k | 703 | 这是一个全面的 AI 工程自学课程，包含 511 个课程和 20 个阶段，涵盖 Python、TypeScript、Rust 和 Julia。课程强调“动手构建”，每个单元都产出可复用的工件（如提示词、代理、MCP 服务器）。适合希望从零开始系统学习 AI 开发并掌握专业实战技能的学习者。 |
| 18 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 115.5k | 1.4k | Ponytail 是一个 JavaScript 项目，旨在让 AI 代理像最懒的高级开发者一样思考。它通过特定的提示策略，显著减少代码量（平均减少 54%）、降低成本并提高速度，同时保持 100% 的安全性。它避免了不必要的过度构建，直接使用原生解决方案。 |
| 19 | [google/googletest](https://github.com/google/googletest) | GoogleTest - Google Testing and Mocking Framework... | C++ | 39.2k | 156 | GoogleTest 是 Google 开发的 C++ 测试和模拟框架，基于 xUnit 架构。它支持自动测试发现、丰富的断言、死亡测试及参数化测试等功能。项目合并了 GoogleTest 和 GoogleMock，为 C++ 开发者提供强大的自动化测试和模拟支持。 |
| 20 | [livekit/agents](https://github.com/livekit/agents) | A framework for building realtime voice AI agents ... | Python | 13.4k | 22 | 这是一个用于构建实时语音 AI 代理的 Python 框架。它支持多模态交互（听、说、看），提供灵活的模型集成（STT/LLM/TTS）和内置任务调度。支持 WebRTC 和电话集成，具备语义回合检测及 MCP 工具支持，适合开发智能对话助手。 |

[查看完整数据](api/github/2026-08-29.json)
<!-- END GITHUB TRENDING -->




