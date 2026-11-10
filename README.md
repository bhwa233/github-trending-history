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

**最后更新**: 2026-11-09 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 191.3k | 1.0k | Anthropic 官方的 Agent Skills 公共仓库，旨在展示 Claude 如何通过加载特定文件夹中的指令、脚本和资源来提升在专业任务上的表现。项目包含从创意设计到企业工作流的多种示例技能，涵盖文档处理（docx、pdf等）。所有技能均为开源（Apache 2.0），开发者可参考其模式创建自定义技能，用于文档生成、数据分析或自动化任务。 |
| 2 | [meta/astryx](https://github.com/meta/astryx) | An open source design system that's fully customiz... | TypeScript | 20.6k | 3.3k | Astryx 是 Meta 开源的设计系统，拥有 150+ 可访问组件，支持暗黑模式、品牌级主题和 CLI。它基于 StyleX 构建，提供无样式锁定、可深度定制的特性，且专为人类和 AI 助手设计，适合构建大规模、可访问且易于维护的 React 应用。 |
| 3 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 107.5k | 4.3k | Sherlock 是一个开源的 Python 工具，旨在跨 400 多个社交网络查找用户名。它支持通过命令行搜索单个或多个用户，并提供 CSV、XLSX、TXT 等多种输出格式。工具支持代理设置、超时控制及忽略排除项，帮助用户快速定位社交媒体账号。 |
| 4 | [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | Multi-Joint dynamics with Contact. A general purpo... | C++ | 17.0k | 574 | MuJoCo 是由 Google DeepMind 维护的通用物理引擎，专注于多关节动力学与接触模拟。它旨在加速机器人技术、生物力学、图形学、动画和机器学习等领域的研究。引擎提供 C API，支持高性能运行时模拟，包含桌面和浏览器交互式可视化，并提供 Python 绑定和 Unity 插件。 |
| 5 | [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | A collection of projects designed to help develope... | Python | 20.1k | 551 | 这是一个帮助开发者快速上手 Claude API 的项目集合，包含客户支持代理、金融数据分析师、计算机使用演示及浏览器自动化等多个示例。每个快速启动项目都提供了可定制的基础代码，展示了如何利用 Claude 的自然语言处理、数据分析及桌面/浏览器控制能力来构建可部署的应用。 |
| 6 | [garrytan/gbrain](https://github.com/garrytan/gbrain) | Garry's Opinionated OpenClaw/Hermes Agent Brain... | TypeScript | 32.3k | 216 | GBrain 是一个 TypeScript 项目，为 AI 代理提供可控的记忆系统。它支持显式事实存储、更正和跨代理共享。用户可自托管或使用托管服务，通过 MCP 协议集成，支持语义搜索和技能管理，旨在让代理拥有持久且可管理的知识库。 |
| 7 | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Browser automation CLI for AI agents... | Rust | 48.6k | 916 | 这是一个基于 Rust 的 CLI 工具，专为 AI 代理提供浏览器自动化能力。它通过 Chrome DevTools Protocol 控制 Chrome，允许代理通过命令行打开页面、读取无障碍树、点击元素并检查结果。支持引用、CSS 选择器和语义定位器，适合自动化 Web 任务。 |
| 8 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView turns commodity WiFi signals into real-ti... | Rust | 103.6k | 172 | RuView 是一个基于 Rust 的 WiFi 感知平台，利用 WiFi 信号和 ESP32 传感器，无需摄像头即可实现墙体穿透检测、生命体征监测（呼吸心率）、活动识别及环境映射。它支持与主流智能家居生态（Home Assistant、Apple Home 等）无缝集成，提供丰富的实体状态和蓝图。 |
| 9 | [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 ... | Python | 69.1k | 506 | 这是一个基于大语言模型（LLM）的多市场股票智能分析系统，支持A股、港股、美股等。它能聚合多源行情与实时新闻，生成包含买卖点位的AI决策报告，并通过企业微信、飞书等渠道自动推送。支持零成本GitHub Actions部署，适合个人投资者进行每日自动化选股与决策参考。 |
| 10 | [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) | Configure and automate Home Assistant with Claude,... | Python | 6.1k | 31 | 这是一个用于 Home Assistant 的 MCP 服务器集成，允许用户通过 Claude、ChatGPT 等 AI 助手来配置和自动化智能家居系统。它支持所有 Home Assistant 安装类型，通过 HACS 或内置市场安装，提供完整的功能对等性，并需要管理员访问令牌来安全地控制设备和服务。 |
| 11 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | Open-source Grok Bot alternative with a virtual ma... | TypeScript | 19.9k | 1.6k | OpenMausBot 是一个开源的 Grok Bot 替代品，旨在将 AI 代理作为聊天应用中的联系人进行管理。它采用本地优先架构，允许用户使用本地安装的 Claude、Codex 等命令行工具运行多个独立的 AI 代理。每个代理拥有独立的性格、模型和记忆，支持在本地环境中与它们交互，无需中间代理或新账户。 |

[查看完整数据](api/github/2026-11-09.json)
<!-- END GITHUB TRENDING -->




