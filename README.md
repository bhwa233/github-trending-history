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

**最后更新**: 2026-11-14 | **成功**: 15 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | The workspace to stay in the loop and on top of ag... | TypeScript | 11.2k | 408 | Plannotator 是一个本地浏览器应用，为 AI 编码代理提供代码审查与反馈层。它支持 Claude、Copilot 等多种主流代理，允许用户注释计划、PR 和 HTML 文件，并将反馈直接发送回代理以进行迭代改进。 |
| 2 | [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | Keep your coding agent up to date with the latest ... | TypeScript | 6.1k | 1.2k | 这是一个由 Chrome、Edge、Firefox 和 MDN 团队维护的项目，旨在通过技能和 CLI 工具将现代 Web 最佳实践、浏览器兼容性数据直接嵌入到编码代理中。它帮助 AI 模型避免使用遗留模式，转而使用高性能的原生 Web 平台 API，从而生成更优的代码。 |
| 3 | [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Claude Code skills for equity investors and trader... | Python | 4.9k | 553 | 这是一个为时间有限的个人投资者设计的 Claude Skills 工作流工具包，旨在通过 AI 辅助市场分析、技术图表和选股，帮助用户构建更严谨的交易决策流程。它支持长期投资与波段交易结合，专注于风险管理、交易规划及持续改进，非信号服务。 |
| 4 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 56.3k | 664 | 这是一个为 AI 编码代理提供 Chrome DevTools 访问权限的 MCP 服务器。它允许代理控制和检查实时 Chrome 浏览器，支持性能分析、网络调试、截图和控制台检查。通过 Puppeteer 实现可靠的自动化，帮助 AI 进行深度调试和性能优化。 |
| 5 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Secure, fast, efficient, battle-tested at Alibaba'... | Go | 51.5k | 893 | 阿里巴巴开源的 AI 代码审查 CLI 工具，源自内部实战验证。采用混合架构，结合确定性管道与 LLM Agent，支持多语言规则（如 NPE、SQL 注入）及精确的逐行注释。相比通用 Agent，Token 消耗更低，F1 指标更高，适合大规模团队提升代码质量。 |
| 6 | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | An open-source AI coding agent that lives in your ... | TypeScript | 30.4k | 64 | Qwen Code 是一个开源的 AI 编码代理，运行在终端中。它具备自动记忆、技能和子代理等开箱即用的能力，支持 OpenAI、Anthropic、Gemini、Qwen 等多协议及本地模型。除了终端，还提供 IDE 插件、桌面应用和 Web UI 等多种界面，旨在提供无供应商锁定的灵活开发体验。 |
| 7 | [dream-num/univer](https://github.com/dream-num/univer) | Build your own AI office with Univer Office SDK. B... | TypeScript | 24.5k | 495 | Univer 是一个基于 TypeScript 的开源 Office SDK，旨在帮助开发者在自有产品中构建类似 Office 的应用。它提供电子表格、文档、演示文稿等编辑、计算、协作及文件处理能力。SDK 分为 Web、Server 和 AI 三部分，支持高度扩展，可连接应用与 AI 代理。 |
| 8 | [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | AG-UI: the Agent-User Interaction Protocol. Bring ... | TypeScript | 17.4k | 9 | AG-UI 是一个开源的轻量级基于事件的协议，旨在标准化 AI 代理与用户界面之间的交互。它支持实时流式聊天、双向状态同步和上下文丰富，提供灵活的中间件层以适应多种传输方式。该协议简化了代理在面向用户应用中的集成，促进人机协作。 |
| 9 | [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | LLM Inference Engine for Metal, CUDA and Vulkan.... | Zig | 2.2k | 37 | TensorFold 是一个用 Zig 编写的 LLM 推理引擎，支持 Apple Silicon 和 NVIDIA GPU。它直接运行 Metal 和 CUDA 内核，无需 Python 或 MLX 环境，旨在提供高效的模型服务。 |
| 10 | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 🪨 why use many token when few token do trick. Vir... | Go | 120.1k | 227 | Caveman 是一个 Go 语言编写的 AI 编码代理优化工具，通过使用简化的“穴居人”语言大幅减少 token 消耗（最高 65%），从而降低成本。它支持多种压缩命令，在保持代码准确性的同时，已被 Adobe Research 和 JetBrains 等机构验证。 |
| 11 | [louislam/uptime-kuma](https://github.com/louislam/uptime-kuma) | A fancy self-hosted monitoring tool... | JavaScript | 94.3k | 430 | Uptime Kuma 是一款功能丰富的自托管监控工具，支持 HTTP/TCP/Ping 等多种协议。它具备响应迅速的 UI，支持 90+ 种通知渠道（如 Telegram、Slack），并提供 Docker 和 Node.js 部署方案，适合用于监控服务器健康状态和服务可用性。 |
| 12 | [we-promise/sure](https://github.com/we-promise/sure) | The personal finance app for everyone (by everyone... | Ruby | 15.3k | 659 | 这是一个由社区维护的个人理财应用，原项目为 Maybe Finance。它支持自托管，功能涵盖财富管理和理财规划。支持多平台访问（Web、桌面、移动端、API 和 LLM 代理）。采用 AGPLv3 许可证，旨在让用户免费使用并持续维护代码库。 |
| 13 | [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Self-hosted workflows for coding-agent delivery. O... | Go | 939 | 33 | LoopForge 是一个自托管的编码代理工作空间，旨在通过编排 CodeBuddy、Codex 和 Claude Code 等代理来交付软件。它支持通过聊天或 SOP（标准作业程序）进行工作，利用 Docker 沙箱和人工审批流程。该工具允许用户在自有基础设施上管理代理，跟踪需求，并生成 PR 或直接合并代码，非常适合需要标准化和人工监督的团队。 |
| 14 | [Likely7/Veyra-NRVideo](https://github.com/Likely7/Veyra-NRVideo) | Bring PS5 GTA6 to 120FPS with DLSS 5. An advanced ... | C++ | 2.3k | 420 | 这是一个基于 C++ 的 Windows 实时 GPU 视频增强工具，利用 AI 超分辨率、DLSS 5 和帧生成技术，将本地视频、采集卡及游戏流媒体画面提升至 120FPS，提供极致视觉体验。 |
| 15 | [martin-olivier/airgorah](https://github.com/martin-olivier/airgorah) | A WiFi security auditing software... | Rust | 5.9k | 270 | Airgorah 是一款基于 Rust 开发的 Linux WiFi 安全审计工具。它支持捕获流量、发现客户端、执行去认证攻击、抓取握手包及 PMKID，并具备密码破解能力。软件通过 GTK4 提供图形界面，利用 polkit 安全处理权限，仅限用于授权测试。 |

[查看完整数据](api/github/2026-11-14.json)
<!-- END GITHUB TRENDING -->




