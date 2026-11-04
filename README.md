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

**最后更新**: 2026-11-03 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 112.0k | 1.1k | 这是一个专为 Claude Code 构建的持久记忆压缩系统。它通过自动捕获工具使用记录并生成语义摘要，实现跨会话的上下文保持。支持多种 AI 代理，确保 Claude 在会话结束后仍能维持对项目的连续性知识。 |
| 2 | [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Computer use CLI for AI agents... | Rust | 13.0k | 3.8k | 这是一个用 Rust 编写的 CLI 工具，旨在为 AI 代理提供计算机使用能力。它通过读取操作系统的无障碍树来操作 macOS、Windows 和 Linux 上的桌面应用，而非依赖截图。它将 UI 结构转换为 JSON，包含可操作元素的引用，允许代理进行点击和输入，并验证结果。项目提供 CLI 和 C 库接口，不包含模型本身。 |
| 3 | [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Worktrunk is a CLI for Git worktree management, de... | Rust | 10.6k | 438 | Worktrunk 是一个用 Rust 编写的 Git worktree 管理命令行工具，专为并行 AI Agent 工作流设计。它通过简化 switch、create 和 remove 等核心命令，让 worktree 操作像分支一样便捷，并支持钩子和 COW 缓存等提升开发效率的特性。 |
| 4 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | A hierarchical inference engine for frontier MoE m... | C | 47.3k | 802 | colibri 是一个用 C 语言编写的分层推理引擎，专为 frontier MoE 模型设计。它通过将热门专家放在 GPU，温热专家放在 RAM，冷门专家从 NVMe 流式传输，从而在普通硬件上运行庞大的模型。支持多种主流模型，无需 GPU 也能运行。 |
| 5 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 311.6k | 1.2k | 这是一个基于 Shell 开发的 AI 代理技能集合，专为工程师设计。它提供日常工程中使用的实用技能，旨在替代“氛围编码”，提供更可控、可组合的开发流程。支持 Claude Code、Copilot、Codex 等主流 AI 工具，通过插件形式安装，帮助开发者提升编码效率和质量。 |
| 6 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Training-free language model modification: Remove ... | Python | 38.9k | 701 | 这是一个无需训练的 Python 工具，用于修改本地语言模型。它通过数学技术引导模型行为，默认移除审查，也可减少废话、谄媚等。支持多种模型架构，无需深度理解模型内部原理即可使用，适合个人在本地硬件上优化大模型。 |
| 7 | [spotify/portal-ai-plugins](https://github.com/spotify/portal-ai-plugins) | ... | TypeScript | 3.1k | 91 | 该项目是将 Spotify Portal CLI 集成到 Claude Code、Codex、Cursor 和 pi 等编码助手中的 TypeScript 插件。它提供认证设置、软件目录搜索、服务简报生成及安全调用 Portal 操作的工作流。此外还包含 shunt 插件，用于将繁重的 I/O 任务委托给更便宜的模型以节省 token。 |
| 8 | [floci-io/floci](https://github.com/floci-io/floci) | Light, fluffy, and always free - The AWS Local Emu... | Java | 28.9k | 482 | Floci 是一个免费开源的本地 AWS 模拟器，专为开发、测试和 CI 环境设计。它无需云账户或认证令牌，通过 Docker 快速启动，提供与 AWS 兼容的服务接口。作为 LocalStack 的替代品，它支持 AWS SDK、CLI、Terraform 等工具，允许开发者本地模拟 AWS 环境，无需付费或配置复杂的认证。 |
| 9 | [Usagi-org/ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor) | 基于 Playwright 和AI实现的闲鱼多任务实时/定时监控与智能分析系统，配备了功能完善的后台... | Python | 16.6k | 228 | 基于 Python 和 Playwright 的闲鱼智能监控系统，利用 AI 对商品进行多模态分析，支持多任务并发、高级筛选及定时监控。提供 Web 管理界面，支持 Docker 部署，可自动通过多渠道通知用户心仪商品。 |
| 10 | [anomalyco/hex](https://github.com/anomalyco/hex) | Local voice dictation for mac, windows and linux... | Rust | 4.7k | 410 | Hex 是一个跨平台的本地语音听写工具，支持 Mac、Windows 和 Linux。用户按住快捷键说话后，听写内容会自动粘贴到当前应用中。所有处理均在本地完成，保护用户隐私，首次运行需下载语音模型。 |
| 11 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ The BEST Web Scraping framework that handles e... | Python | 95.0k | 1.7k | Scrapling 是一个功能强大的 Python 网络抓取框架，集成了快速 HTTP 请求、隐身浏览器、JS 渲染和并发爬取功能。它支持静态页面抓取、动态交互、API 提取及代理轮换，提供 CLI 和 MCP 服务器接口，适用于从简单数据提取到大规模网站爬取的多种场景。 |
| 12 | [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Kronos: A Foundation Model for the Language of Fin... | Python | 46.6k | 503 | Kronos 是首个开源的金融蜡烛图基础模型，专为处理金融数据的高噪声特性设计。它采用两阶段框架，首先将 OHLCV 数据量化为离散标记，再通过自回归 Transformer 进行预训练。项目支持多种模型尺寸，可用于金融预测等量化任务，已获 AAAI 2026 录用。 |
| 13 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 34.8k | 1.2k | 该项目将单个 Claude Code 会话转化为完整的游戏开发工作室。通过 49 个 AI 代理、74 个技能和 62 个模板，模拟真实工作室层级。它提供自动化 QA、设计审查和编码标准，防止代码混乱，确保项目从构思到发布保持高质量和结构化。 |

[查看完整数据](api/github/2026-11-03.json)
<!-- END GITHUB TRENDING -->




