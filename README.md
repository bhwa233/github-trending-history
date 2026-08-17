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

**最后更新**: 2026-08-17 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD sho... | Python | 105.9k | 1.3k | 这是一个基于 Python 的一站式 AI 短视频生成工具。利用大模型自动生成脚本、匹配素材、生成字幕和背景音乐，并合成高清视频。支持批量生成、多尺寸（9:16/16:9）及一键发布至 TikTok 等平台，提供 WebUI、API 和 CLI 多种使用方式。 |
| 2 | [usestrix/strix](https://github.com/usestrix/strix) | Open-source AI penetration testing tool to find an... | Python | 54.1k | 656 | Strix 是一个基于 Python 的开源 AI 渗透测试工具，利用自主 AI 代理动态运行代码以发现和验证漏洞。它支持多代理编排、真实 PoC 验证及 CI/CD 集成，能自动生成补丁和合规报告，旨在为开发者提供快速、准确的自动化安全测试解决方案。 |
| 3 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | Production-grade Rust-native trading engine with d... | Rust | 25.9k | 115 | NautilusTrader 是一个生产级的 Rust 原生交易引擎，采用确定性事件驱动架构。它支持研究、模拟和实时交易，通过 Python 控制平面实现策略编排，确保研究到生产环境的一致性。支持多资产和多交易场所，具备高性能、高可靠性和模块化适配器。 |
| 4 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 2.0k | 207 | 这是一个用 Rust 编写的项目，为 AI 编码代理提供长期记忆解决方案。它支持 Claude Code、Codex 和 Command Code 等多种工具，通过 MCP 配置和生命周期钩子实现跨代理的上下文无缝交接，让用户无需重复解释项目背景即可在不同工具间切换。 |
| 5 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 817 structured cybersecurity skills for AI agents ... | Python | 28.4k | 156 | 该项目包含817个结构化网络安全技能，旨在赋予AI代理资深分析师的能力。它遵循agentskills.io标准，并映射到MITRE ATT&CK、NIST CSF 2.0等六大框架，覆盖29个安全领域。兼容多种AI开发工具，适用于授权的安全测试、研究和防御场景。 |
| 6 | [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | Hundreds of models & providers. One command to fin... | Rust | 32.2k | 239 | 这是一个用 Rust 编写的终端工具，旨在根据用户的硬件（RAM、CPU、GPU）为本地 LLM 模型“right-size”。它支持多 GPU、MoE 架构及多种本地运行时（如 Ollama、llama.cpp）。新功能允许用户直接从 TUI 进行基准测试并共享结果，帮助社区获得更准确的性能估计。 |
| 7 | [santifer/career-ops](https://github.com/santifer/career-ops) | Open-source AI job search: scan job portals, evalu... | JavaScript | 64.6k | 147 | 这是一个开源的 AI 求职助手，旨在帮助候选人更高效地找工作。它可以将任何 AI 编码 CLI 转变为求职中心，自动扫描职位门户，利用 A-F 评分标准对职位进行 1.0-5.0 的评估，并生成 ATS 优化的简历。它支持批量处理和跟踪申请，通过 AI 推理而非关键词匹配来评估匹配度，帮助用户筛选出高质量职位，避免盲目投递。 |
| 8 | [jundot/omlx](https://github.com/jundot/omlx) | LLM inference server with continuous batching & SS... | Python | 19.0k | 96 | oMLX 是专为 Apple Silicon 优化的 LLM 推理服务器。它支持持续批处理和分层 KV 缓存（内存+SSD），提供菜单栏管理界面。支持 MCP 协议，确保上下文持久化，适合本地开发与编码任务。 |
| 9 | [immich-app/immich](https://github.com/immich-app/immich) | High performance self-hosted photo and video manag... | TypeScript | 111.1k | 337 | Immich 是一个高性能的自托管照片和视频管理解决方案，支持移动端和 Web 端。它提供自动备份、人脸识别、元数据搜索、相册分享、LivePhoto 支持等功能，旨在替代 Google Photos 等云服务，保护用户隐私。 |
| 10 | [cordiverse/cordis](https://github.com/cordiverse/cordis) | Meta-Framework of Spatiotemporal Composability... | TypeScript | 5.6k | 959 | 这是一个专注于时空组合性的元框架，旨在提供灵活的底层抽象能力。项目采用 TypeScript 开发，具备模块化结构，支持在时间和空间维度上进行逻辑与数据的组合与编排。 |
| 11 | [agalwood/Motrix](https://github.com/agalwood/Motrix) | A full-featured download manager.... | TypeScript | 53.0k | 295 | Motrix 是一个全功能的下载管理器，支持 HTTP、FTP、BitTorrent 和磁力链接。Motrix Turbo v2 是基于 Electron、React 和 TypeScript 重构的新版本，核心与 UI 分离，支持桌面应用和 Headless 服务器模式。它拥有简洁的界面、深色模式、BT 下载、速度限制、SQLite 会话恢复以及插件系统等功能，目前处于 Beta 测试阶段。 |

[查看完整数据](api/github/2026-08-17.json)
<!-- END GITHUB TRENDING -->




