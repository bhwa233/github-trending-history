# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2026-02-22 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [huggingface/skills](https://github.com/huggingface/skills) | ... | Python | 2.5k | 323 | Hugging Face Skills 提供标准化的AI/ML任务技能定义，支持多平台编码代理工具。通过自包含文件夹封装指令、脚本和资源，兼容Claude Code、Codex、Gemini等工具，提升跨平台任务协作效率。 |
| 2 | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | ✨ Fully autonomous AI Agents system capable of per... | Go | 6.9k | 1.6k | PentAGI是基于AI的自动化渗透测试系统，通过Docker沙盒环境实现安全隔离，集成20+专业工具如nmap、metasploit，并结合知识图谱与智能记忆系统，支持自主执行复杂测试任务，提供实时监控与详细报告。 |
| 3 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 68.9k | 500 | Claude Code是集成在终端的代理编程工具，支持自然语言指令执行代码任务、解释代码逻辑及管理Git流程，提升开发效率。 |
| 4 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 117.7k | 914 | 该项目是一个整合了多种AI工具系统提示、内部工具及模型配置的开源仓库，包含超过3万行代码，旨在为开发者提供AI系统结构与功能的深度洞察和参考。 |
| 5 | [Stremio/stremio-web](https://github.com/Stremio/stremio-web) | Stremio - Freedom to Stream... | JavaScript | 9.7k | 251 | Stremio-web 是一个基于JavaScript的现代媒体中心应用，提供视频内容的发现、播放和管理功能。通过插件系统支持多种视频源，用户可便捷整合和组织媒体资源，实现一站式视频娱乐体验。 |
| 6 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 61.0k | 148 | OpenBB-finance/OpenBB 是一个金融数据平台，提供数据集成与分析工具。支持Python环境，可整合多种数据源并暴露为REST API，适用于AI代理、研究仪表板及企业级数据分析。 |
| 7 | [cloudflare/agents](https://github.com/cloudflare/agents) | Build and deploy AI Agents on Cloudflare... | TypeScript | 3.7k | 263 | Cloudflare Agents 是基于 Durable Objects 的持久化 AI 代理框架，支持状态管理、实时通信和 AI 模型调用，按需唤醒降低运行成本，适用于高并发状态管理场景。 |
| 8 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 1.5k | 419 | GitNexus 是一个浏览器端代码知识图谱工具，通过本地索引GitHub仓库或ZIP文件生成交互式知识图谱，并集成Graph RAG代理实现代码分析。支持CLI和Web UI两种模式，提供依赖关系追踪、调用链分析等能力，增强AI代码编辑器的上下文感知能力。 |
| 9 | [stan-smith/FossFLOW](https://github.com/stan-smith/FossFLOW) | Make beautiful isometric infrastructure diagrams... | TypeScript | 18.1k | 342 | FossFLOW 是一个基于 React 和 Isoflow 库的开源等轴测图绘制工具，支持浏览器离线使用。提供可视化网络基础设施设计功能，采用 TypeScript 开发，具备 Docker 部署方案，适用于系统架构可视化场景。 |

[查看完整数据](api/github/2026-02-22.json)
<!-- END GITHUB TRENDING -->








