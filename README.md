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

**最后更新**: 2026-10-05 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [tester-army/e2e](https://github.com/tester-army/e2e) | Next generation e2e testing framework for web and ... | TypeScript | 4.9k | 1.4k | 这是一个下一代端到端测试框架，支持 Web 和移动应用。它允许用户用自然语言描述测试目标，由 Agent 驱动应用执行。测试步骤可记录并回放，减少模型调用。支持 Playwright 和移动模拟器，集成 GitHub 报告器，适合需要自然语言交互的自动化测试场景。 |
| 2 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 96.7k | 534 | Claude-Mem 是一个为 Claude Code 构建的持久化记忆压缩系统。它自动捕获会话中的工具使用和观察，利用 AI 生成语义摘要，并在未来会话中注入上下文。这确保了 AI 代理在会话结束后或重新连接时，仍能保持对项目的知识连续性，支持多种 AI 工具。 |
| 3 | [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | Give your agent CAD superpowers.... | Python | 17.5k | 437 | 该项目为 AI 代理提供本地 CAD 生成能力，支持通过文本生成 STEP、GLB、STL 等格式 3D 模型。具备制造设计检查、工程图纸生成及对接 3D 打印/CNC 服务功能。兼容 Claude Code、Cursor 等主流代理，基于 Python 和 uv 运行。 |
| 4 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 25.6k | 485 | T3 Code 是一个开源的“代理工具控制表面”，旨在为 AI 编码代理提供统一的最佳开发体验。它支持 Claude、Codex、Cursor 等多个主流平台，提供 iOS、Android、Web 和 Electron 桌面端应用，允许用户集中管理和控制本地运行的 AI 编码助手。 |
| 5 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | Tool for automatic PS5 executables porting to Linu... | C++ | 5.0k | 997 | AnyPS5 是一个 C++ 工具，旨在自动将 PS5 可执行文件移植到 Linux 和 Windows。它包含一个重链接器，可将可执行文件转换为原生格式，并实现了系统 prx 库。该项目旨在实现互操作性、研究和兼容性，不包含受版权保护的材料。 |
| 6 | [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Give your AI agent eyes to see the entire internet... | Python | 92.0k | 1.2k | 这是一个为 AI Agent 提供全网互联网访问能力的 Python CLI 工具。它解决了 Twitter API 付费、网站登录墙等问题，支持 YouTube、B站、Reddit、小红书等平台。项目完全免费开源，具备自动切换失效接口的容错机制，兼容各类命令行 Agent，并提供一键安装更新功能。 |
| 7 | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | World's first open-source, agentic video productio... | Python | 64.1k | 742 | OpenMontage 是全球首个开源代理驱动视频制作系统，包含12个生产管道和700+技能。它不仅能生成AI动画，还能利用开源素材库制作真实视频，涵盖从脚本、素材检索到Remotion渲染的全流程。 |
| 8 | [caddyserver/caddy](https://github.com/caddyserver/caddy) | Fast and extensible multi-platform HTTP/1-2-3 web ... | Go | 77.2k | 515 | Caddy 是一个用 Go 语言编写的快速、可扩展的多平台 Web 服务器。它默认支持 HTTP/1.1、HTTP/2 和 HTTP/3，并内置自动 HTTPS 功能。项目采用模块化架构，支持 Caddyfile 和 JSON 配置，无需外部依赖即可运行，适合作为生产环境的 Web 服务器。 |
| 9 | [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | Self-hosted gym & body-weight tracker — plan routi... | JavaScript | 4.3k | 1.4k | openGym 是一个自托管的健身房与自重追踪应用。用户可规划常规、记录包含超级组与热身的锻炼，追踪肌肉状态，并支持从 FitNotes/Strong/Hevy 导入数据。项目采用 Passkey 登录，通过 Docker 部署，确保数据完全私有，无订阅与广告，提供现代化的训练体验。 |
| 10 | [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os) | Agent workspace built on Cloudflare Workers for cr... | TypeScript | 11.0k | 101 | Cloudflare OS 是一个基于 Cloudflare Workers 的企业级 AI 生产力环境。它提供 Agent 聊天界面、沙盒应用开发以及名为 Gatekeepers 的安全框架，允许用户利用公司上下文安全地执行任务、构建应用并管理数据。 |
| 11 | [Stremio/stremio-web](https://github.com/Stremio/stremio-web) | Stremio - Freedom to Stream... | JavaScript | 14.3k | 111 | Stremio 是一个开源的流媒体平台，专注于插件驱动的内容发现。它支持跨设备同步、投屏、字幕定制及键盘优先播放。前端采用 React 构建，后端核心逻辑由 Rust 编译为 WebAssembly 运行，确保高性能。项目支持多语言，并可作为 PWA 安装使用。 |
| 12 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 157.3k | 744 | 这是一个包含多个专业化 AI 代理的集合，旨在为 Claude Code、Cursor 等开发工具提供专业助手。每个代理都有独特的个性和专业技能，如前端开发、社区管理等。项目提供原生桌面应用和命令行脚本，方便用户一键安装和更新这些代理，提升开发效率。 |
| 13 | [M-Abozaid/esp32-c3-adblock](https://github.com/M-Abozaid/esp32-c3-adblock) | Pi-hole-class DNS ad-blocker on a $2 ESP32-C3 (no ... | C++ | 1.4k | 196 | 这是一个运行在廉价 ESP32-C3 开发板上的 Pi-hole 风格 DNS 广告拦截器，无需 PSRAM。通过将域名哈希存储在闪存中并使用二分查找，实现了极低的内存占用（约 50KB RAM）和快速查询（约 10ms）。支持 UDP DNS 拦截和 Web 仪表板，适合家庭网络低成本广告屏蔽。 |

[查看完整数据](api/github/2026-10-05.json)
<!-- END GITHUB TRENDING -->




