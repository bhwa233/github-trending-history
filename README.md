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

**最后更新**: 2026-07-31 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | Reverse Engineering / Authorized Penetration Testi... | PowerShell | 10.7k | 335 | 这是一个面向 AI 代理的网络安全技能路由包，主要使用 PowerShell 编写。它能够根据任务类型（如 APK 分析、二进制逆向、CTF 挑战）自动路由到正确的工具链和方法论。支持 Claude Code 等客户端，集成 IDA、Frida、BurpSuite 等工具，实现自动化渗透测试和安全研究工作流。 |
| 2 | [different-ai/openwork](https://github.com/different-ai/openwork) | The open-source alternative to Claude Cowork (powe... | TypeScript | 19.5k | 806 | OpenWork 是一个开源的跨平台桌面应用，旨在作为 Claude Cowork 的替代品。它通过 MCP 协议，允许用户在 Codex、Claude Code、Cursor 等多个 AI 代理之间共享工作流、技能和连接服务。它提供桌面应用用于专用工作区，同时也支持通过 MCP 服务器集成到任何兼容的客户端中，方便团队协作和统一管理 AI 能力。 |
| 3 | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | AI agent skill that researches any topic across Re... | Python | 56.2k | 658 | 这是一个基于 AI agent 的搜索技能，能跨 Reddit、X、YouTube、HN、Polymarket 等平台研究任意主题。它通过真实互动数据（点赞、金钱）对搜索结果进行评分，而非依赖编辑。该工具旨在连接被主流搜索引擎和 AI 遗漏的“围墙花园”平台，提供独特的全网综合摘要。 |
| 4 | [paperswithbacktest/awesome-systematic-trading](https://github.com/paperswithbacktest/awesome-systematic-trading) | A curated list of awesome libraries, packages, str... | Python | 11.7k | 763 | 这是一个系统化交易资源的精选列表，收录了97个用于回测、实盘交易及数据分析的Python库，涵盖债券、加密货币、股票等40+种策略。此外，还整理了55本专业书籍、23个视频及博客课程，旨在为量化交易者提供全方位的学习与开发资源。 |
| 5 | [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 Weeks, 24 Lessons, AI for All!... | Jupyter Notebook | 55.3k | 1.6k | 这是一个由微软提供的初学者人工智能课程，包含12周24课的内容。使用Jupyter Notebook编写，涵盖TensorFlow和PyTorch等工具，包含实践课程、测验和实验室。课程注重AI伦理，支持50多种语言，适合零基础学习者系统掌握AI知识。 |
| 6 | [github/copilot-sdk](https://github.com/github/copilot-sdk) | Multi-platform SDK for integrating GitHub Copilot ... | Java | 10.1k | 7 | 这是一个用于将 GitHub Copilot Agent 集成到应用程序中的多平台 SDK。它暴露了 Copilot CLI 的生产级代理运行时，允许开发者定义代理行为，而无需自行构建编排逻辑。Java SDK 提供了通过 JSON-RPC 与 Copilot CLI 服务器通信的能力，支持 Maven 和 Gradle 构建。 |
| 7 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | Open-source live-chat, email support, omni-channel... | Ruby | 35.1k | 35 | Chatwoot 是一个开源的全渠道客户支持平台，支持网站聊天、邮件、WhatsApp、社交媒体等多种渠道。它提供 AI 代理 Captain 自动化回复，内置帮助中心，以及团队协作工具，旨在替代 Intercom 等商业软件，帮助企业高效管理客户沟通。 |
| 8 | [agavra/tuicr](https://github.com/agavra/tuicr) | a code review TUI with vim keybindings... | Rust | 2.1k | 335 | tuicr 是一个基于 Rust 的终端代码审查工具，支持 Vim 键绑定。它提供 GitHub 风格的连续差异流，支持多层级评论（行、范围、文件、审查），并支持将审查跟踪持久化。兼容 git、jj 和 mercurial，可导出到 GitHub、GitLab 或剪贴板，适用于审查未提交更改、提交范围或 PR/MR。 |
| 9 | [usekaneo/kaneo](https://github.com/usekaneo/kaneo) | 🎯 All you need. Nothing you don't. Open source pr... | TypeScript | 5.1k | 194 | Kaneo 是一款开源的项目管理系统，主打极简主义，旨在提供专注、高效的工作体验。它拥有干净的界面，支持自托管以确保数据安全，且基于 MIT 许可证开源。通过 Docker Compose 或 CLI 工具 drim 即可快速部署，适合追求轻量级和性能的团队。 |
| 10 | [geo-tp/ESP32-Bit-Pirate](https://github.com/geo-tp/ESP32-Bit-Pirate) | A Hardware Hacking Tool with Web-Based CLI That Sp... | C++ | 5.0k | 83 | 这是一个开源固件，灵感源自 Bus Pirate，将 ESP32 转化为多协议开发与分析工具。支持 I2C、UART、SPI、蓝牙、Wi-Fi、CAN、JTAG 等多种协议的嗅探、发送、脚本编写及硬件交互。提供 Web 和串口 CLI 界面，功能强大。 |
| 11 | [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | Deepfakes Software For All... | Python | 57.0k | 93 | 这是一个基于 Python 的开源深度学习工具，利用深度学习技术实现图片和视频中的人脸识别与交换。项目提供完整的提取、训练、转换流程及图形用户界面（GUI），支持多种生成模型。开发者强调其伦理用途，致力于降低 AI 技术的使用门槛。 |
| 12 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | The most RAM efficient harness... | Rust | 14.6k | 527 | jcode 是一个用 Rust 编写的代码生成工具，主打极致的内存效率。通过优化各项指标，它在单会话和多会话场景下均显著降低了内存占用，远低于 Codex CLI、Cursor Agent 等竞品。项目提供了跨平台的安装脚本，旨在为开发者提供高性能且低资源消耗的 AI 编码辅助体验。 |

[查看完整数据](api/github/2026-07-31.json)
<!-- END GITHUB TRENDING -->




