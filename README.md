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

**最后更新**: 2026-03-09 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [GoogleCloudPlatform/generative-ai](https://github.com/GoogleCloudPlatform/generative-ai) | Sample code and notebooks for Generative AI on Goo... | Jupyter Notebook | 15.3k | 1.3k | 该项目提供Google Cloud Vertex AI生成式AI的示例代码和Notebook，涵盖Gemini模型、Vertex AI Search、RAG技术、视觉生成（Imagen）和音频处理（Chirp）等多功能场景，包含环境配置和开发指南。 |
| 2 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 289.7k | 9.1k | OpenClaw是基于TypeScript开发的本地AI助手，支持多平台和多渠道交互（如Telegram、Slack、Discord等），提供语音识别、实时Canvas控制及跨设备同步功能。通过CLI工具快速部署，强调隐私安全与本地化运行。 |
| 3 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 10.7k | 2.2k | MiroFish是基于多智能体的群体智能预测引擎，通过构建数字世界模拟现实事件演化，支持政策、舆情、金融等场景的预测推演，提供可交互的高保真数字沙盘和深度分析报告。 |
| 4 | [karpathy/nanochat](https://github.com/karpathy/nanochat) | The best ChatGPT that $100 can buy.... | Python | 45.5k | 332 | nanochat是一个低成本训练和部署大语言模型的实验框架，可在单GPU上运行。它覆盖了从预训练到推理的完整流程，支持通过调整深度参数快速构建不同规模的模型，并提供类似ChatGPT的交互界面。项目重点优化训练效率，使GPT-2级别模型训练成本降至百美元以内。 |
| 5 | [666ghj/BettaFish](https://github.com/666ghj/BettaFish) | 微舆：人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策！从0实... | Python | 37.3k | 509 | 微舆是多智能体舆情分析系统，支持跨平台数据采集、多模态分析与AI预测，通过Agent协作机制实现舆情监测、深度分析及决策支持，覆盖社交媒体与结构化数据源。 |
| 6 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 2.9k | 358 | Hermes-Agent是由Nous Research开发的自我改进型AI代理，具备内置学习循环，能通过经验创建并优化技能，支持跨平台对话和任务自动化。用户可通过Telegram、Discord等多渠道交互，灵活部署于VPS、云服务器或无服务器架构，兼容多种大模型接口，实现持续学习与高效任务处理。 |
| 7 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 2.9k | 1.3k | impeccable 是一个前端设计语言工具，通过17个指令和反模式库提升AI生成设计质量，涵盖字体、色彩、动效等七大设计领域，提供从审计到优化的全流程设计指导。 |
| 8 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 18.9k | 4.3k | 该项目提供一组AI代理工具，涵盖前端开发、社区运营、内容生成等角色，每个代理具备专属技能和个性化的任务处理流程，支持多平台集成实现自动化工作流。 |
| 9 | [alibaba/page-agent](https://github.com/alibaba/page-agent) | JavaScript in-page GUI agent. Control web interfac... | TypeScript | 2.5k | 532 | Page-Agent 是一个基于JavaScript的网页GUI代理工具，通过自然语言控制网页界面。无需浏览器扩展或后端支持，直接在页面内执行DOM操作，支持自定义大语言模型集成，适用于SaaS AI助手、表单自动化及无障碍访问等场景。 |
| 10 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 169 production-ready skills & plugins for Claude C... | Python | 3.3k | 228 | 提供169个生产级AI代码代理技能插件，涵盖工程、产品、营销等多领域，通过模块化指令包和Python工具提升AI编程专业能力。 |
| 11 | [Raphire/Win11Debloat](https://github.com/Raphire/Win11Debloat) | A simple, lightweight PowerShell script that allow... | PowerShell | 41.2k | 104 | Win11Debloat是一款轻量级PowerShell脚本，用于移除Windows预装应用、禁用遥测功能并优化系统设置。支持批量操作与命令行参数，可简化系统个性化配置，适用于Windows 10/11环境。 |
| 12 | [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) | Unofficial Python API and agentic skill for Google... | Python | 4.2k | 457 | 提供Google NotebookLM的非官方Python API和智能工具，支持通过Python、CLI及AI代理（如Claude Code）程序化调用NotebookLM功能，涵盖笔记管理、研究自动化、内容生成与多格式导出。 |

[查看完整数据](api/github/2026-03-09.json)
<!-- END GITHUB TRENDING -->








