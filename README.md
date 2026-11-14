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

**最后更新**: 2026-11-13 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Secure, fast, efficient, battle-tested at Alibaba'... | Go | 50.7k | 215 | 阿里巴巴开源的 Go 语言 AI 代码审查工具，采用确定性管道与 LLM Agent 混合架构。具备高精度、低 Token 消耗的特点，内置多语言规则集，支持逐行精准审查，已在阿里大规模验证。 |
| 2 | [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | Keep your coding agent up to date with the latest ... | TypeScript | 4.9k | 1.9k | 这是一个由 Chrome、Edge、Firefox 和 MDN 团队维护的项目，旨在通过嵌入 Web 平台专业知识、最佳实践和浏览器兼容性数据来更新编码代理。它提供 CLI 工具，帮助引导代理远离遗留模式，转向现代、高性能的 Web 解决方案，确保生成的代码符合当前标准。 |
| 3 | [openai/codex-security](https://github.com/openai/codex-security) | OpenAI's Codex Security CLI and TypeScript SDK for... | TypeScript | 13.2k | 751 | OpenAI 推出的安全漏洞检测工具，提供 CLI、SDK 和 GitHub Action。支持深度扫描代码、验证发现、生成补丁及起草安全策略，并可与 Jira、Linear 等工具集成，实现 CI/CD 自动化安全检查。 |
| 4 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 71.7k | 256 | 这是一个基于 Python 和大语言模型的智能股票分析系统，支持 A股、港股、美股等多市场数据聚合。它能自动生成 AI 决策报告，并通过企业微信、飞书等渠道推送决策仪表盘，支持零成本定时运行，适合个人投资者进行自动化股票研究。 |
| 5 | [we-promise/sure](https://github.com/we-promise/sure) | The personal finance app for everyone (by everyone... | Ruby | 14.8k | 925 | 这是一个基于 Maybe Finance 开源代码的社区维护型个人理财应用。支持自托管，提供全面的财富管理功能。兼容多平台（Web、桌面、移动端、API 及 LLM 代理），旨在让用户免费管理个人财务。 |
| 6 | [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | The workspace to stay in the loop and on top of ag... | TypeScript | 10.5k | 108 | Plannotator 是一个本地浏览器应用，旨在帮助开发者与 AI 编码代理保持同步。它提供了一个审查层，允许用户注释计划、规范、HTML 和代码差异，并将反馈直接发送回代理。支持 Claude、Copilot 等多种工具及 Git 仓库。 |
| 7 | [louislam/uptime-kuma](https://github.com/louislam/uptime-kuma) | A fancy self-hosted monitoring tool... | JavaScript | 93.9k | 71 | Uptime Kuma 是一款易于使用的自托管监控工具，支持 HTTP/TCP/Ping 等多种监控类型。它拥有响应迅速的 UI，支持 Telegram、Discord 等多种通知方式，并提供 2FA 安全认证。项目支持 Docker 部署，适合个人或团队用于监控网站和服务的可用性。 |
| 8 | [block/buzz](https://github.com/block/buzz) | A hive mind communication platform... | Rust | 37.3k | 97 | Buzz 是一个基于 Rust 的自我托管工作区，采用 Nostr 协议，允许人类和 AI 代理在同一房间协作。它将所有交互（包括代码审查、Git 事件和工作流）记录为事件日志。代理拥有独立的密钥和权限，可以执行代码审查、发送补丁和运行工作流，提供类似人类队友的协作体验。 |
| 9 | [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Claude Code skills for equity investors and trader... | Python | 4.2k | 69 | 这是一个面向个人投资者的 Claude 技能工具包，旨在通过结构化的工作流提升交易决策质量。项目支持市场分析、技术图表、经济日历及筛选等功能，帮助投资者进行风险管理、交易规划和复盘。它适合长期持有者兼波段交易者，强调纪律性而非单纯依赖 AI 信号，旨在通过开源共享优化交易习惯。 |
| 10 | [tailscale/tailcat](https://github.com/tailscale/tailcat) | like netcat, but over Tailscale's data plane, with... | Go | 9.5k | 256 | Tailcat 是一个基于 Tailscale 数据平面（magicsock 和 WireGuard）构建的类 netcat 工具。它无需 Tailscale 账户或管理员权限，通过 DERP 中继和 NAT 穿透建立端到端加密的点对点连接。支持 CLI 和库模式，适用于在两台机器间安全传输文件或文本，无需配置控制平面。 |
| 11 | [Likely7/Veyra-NRVideo](https://github.com/Likely7/Veyra-NRVideo) | Bring PS5 GTA6 to 120FPS with DLSS 5. An advanced ... | C++ | 1.6k | 256 | 这是一个基于 C++ 的 Windows 实时 GPU 视频增强工具，支持 PS5、Xbox 和 PC 流媒体。它集成了 AI 超分辨率、DLSS 5、降噪、HDR 和帧生成技术，能将本地视频、捕获卡信号转化为高画质体验，支持录制和实时预览。 |
| 12 | [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for coding agents... | TypeScript | 55.5k | 67 | 该项目为 AI 编码代理提供 Chrome 浏览器控制能力，作为 MCP 服务器和 CLI 工具使用。它利用 Puppeteer 实现可靠的自动化操作，支持高级调试（如网络分析、截图、控制台检查）以及性能分析（如录制追踪、CrUX 数据），帮助 AI 助手进行深度调试和自动化测试。 |

[查看完整数据](api/github/2026-11-13.json)
<!-- END GITHUB TRENDING -->




