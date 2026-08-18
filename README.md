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

**最后更新**: 2026-08-18 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD sho... | Python | 108.5k | 2.3k | 这是一个基于 Python 的一站式 AI 短视频生成工具。用户只需输入主题或关键词，系统即可自动生成视频脚本、匹配素材、添加字幕和背景音乐，并最终合成高清短视频。项目集成了多种 AI 大模型，旨在降低视频创作门槛，实现自动化内容生产。 |
| 2 | [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | local multi-agent harness... | TypeScript | 2.0k | 256 | Munder Difflin 是一个本地多代理协作框架，将 Claude、Grok 等终端编码 CLI 包装成具有记忆和邮箱的独立代理。它通过桌面应用可视化这些代理在 2D 办公室中协作，由你的克隆 Michael 协调工作。支持多种 LLM 提供商，利用现有订阅，实现本地高效的多代理协作。 |
| 3 | [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Solution for long term memory for agent coding CLI... | Rust | 2.7k | 730 | 这是一个基于 Rust 的 AI 编码 Agent 长期记忆解决方案。它支持 Claude Code、Codex 等多种 Agent 供应商，通过 MCP 协议实现无缝上下文交接。用户可在不同 Agent 间无缝切换任务，无需重复解释架构或失败尝试，显著提升开发连续性。 |
| 4 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Self-evolving Context Database for AI Agents. Unif... | Python | 29.3k | 298 | OpenViking 是一个面向 AI Agent 的自进化上下文数据库。它采用虚拟文件系统（viking://）统一管理记忆、知识和技能，支持分层加载（L0/L1/L2）以优化 Token 消耗，并提供可观察的检索轨迹，帮助 Agent 像开发者一样直观地浏览和调试上下文。 |
| 5 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 817 structured cybersecurity skills for AI agents ... | Python | 29.2k | 726 | 该项目为 AI 代理提供了 817 个结构化的网络安全技能，涵盖 29 个安全领域。它遵循 agentskills.io 标准，并将技能映射到 MITRE ATT&CK、NIST CSF 2.0、MITRE ATLAS、D3FEND、NIST AI RMF 和 MITRE F3 六大框架。旨在提升 AI 在安全调查和防御中的能力，支持 Claude Code、GitHub Copilot 等多种平台。 |
| 6 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 464.5k | 1.1k | 这是一个极其热门的开源项目，旨在收集和整理互联网上所有免费的 API 资源。它为开发者提供了一个便捷的查找接口，涵盖了娱乐、教育、天气等多个领域。该项目拥有极高的社区关注度，是开发者寻找 API 的首选资源库。 |
| 7 | [basecamp/omarchy](https://github.com/basecamp/omarchy) | Beautiful, Modern & Opinionated Linux... | Shell | 26.4k | 411 | 这是一个基于 Shell 的现代、有主见的 Linux 管理工具或操作系统发行版。它集成了代理、技能、配置和主题等模块，旨在提供美观且自动化的 Linux 体验。 |
| 8 | [agalwood/Motrix](https://github.com/agalwood/Motrix) | A full-featured download manager.... | TypeScript | 53.6k | 607 | Motrix 是一款功能全面的桌面下载管理器，支持 HTTP、FTP、BitTorrent 及磁力链接。Motrix Turbo v2 采用 Electron、React 和 TypeScript 重构，核心与 UI 解耦，支持插件系统和命令行工具。它支持 macOS、Windows 和 Linux，并提供无头服务器模式。功能包括磁力下载、Tracker 管理、速度限制、会话恢复、自定义仪表盘和通知等。 |
| 9 | [NawfalMotii79/PLFM_RADAR](https://github.com/NawfalMotii79/PLFM_RADAR) | Open-source, low-cost 10.5 GHz PLFM phased array R... | PLSQL | 24.3k | 204 | AERIS-10 是一款开源、低成本的 10.5 GHz 相控阵雷达系统，采用脉冲线性调频（PLFM）调制。项目提供 3km 和 20km 两种版本，具备全电子波束扫描、FPGA 高级信号处理及 Python 可视化界面。其模块化设计支持 GPS/IMU 集成，旨在为研究人员和爱好者提供探索相控阵雷达技术的平台。 |
| 10 | [jundot/omlx](https://github.com/jundot/omlx) | LLM inference server with continuous batching & SS... | Python | 19.4k | 366 | oMLX 是专为 Apple Silicon 优化的 LLM 推理服务器，支持持续批处理与分层 KV 缓存（内存+SSD）。通过 macOS 菜单栏管理，支持 MCP 协议，旨在解决本地大模型上下文缓存难题，使其在编码等实际工作中变得实用。 |
| 11 | [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | 《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF... | Python | 39.1k | 556 | 这是一个关于 AI Agent 的开源书籍项目，使用 Python 编写。全书围绕核心公式 Agent = LLM + 上下文 + 工具 展开，包含 10 章正文和 103 个配套实验。项目提供了多语言版本（14种）的 PDF/EPUB 下载及在线阅读，旨在帮助读者从原理到实战深入理解 AI Agent 的设计与工程实践。 |
| 12 | [genlayerlabs/genlayer-project-boilerplate](https://github.com/genlayerlabs/genlayer-project-boilerplate) | ... | TypeScript | 15.9k | 543 | 这是一个 GenLayer 智能合约样板项目，实现了一个足球博彩游戏。它集成了 Python 智能合约、Next.js 15 前端及部署脚本，支持 LLM 集成。项目包含快速直接模式测试、全链路集成测试、静态分析及 CI/CD 流程，旨在提供生产就绪的开发环境。 |
| 13 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 84.7k | 288 | OpenCut 是一个开源的视频编辑器，支持 Web、桌面和移动端。项目正在从零重写，采用 Rust 核心，支持插件架构、MCP 服务器、无头模式及脚本标签。它旨在成为 CapCut 的免费开源替代品，提供跨平台的一体化开发体验。 |

[查看完整数据](api/github/2026-08-18.json)
<!-- END GITHUB TRENDING -->




