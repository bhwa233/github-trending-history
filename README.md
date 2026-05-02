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

**最后更新**: 2026-05-02 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 62.5k | 2.2k | TradingAgents 是一个基于 Python 的多代理 LLM 金融交易框架，旨在模拟现实交易公司运作。框架包含基本面、技术面及情绪分析等专家代理，通过协作评估市场并制定交易策略。支持 GPT-5.x、Claude 4.x 等多种大模型，近期更新增加了结构化输出、LangGraph 状态恢复及 Docker 支持。 |
| 2 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The leading agent orchestration platform for Cl... | TypeScript | 36.8k | 1.3k | Ruflo 是专为 Claude Code 设计的领先多代理编排平台。它允许用户协调跨机器和团队的 100+ 专业 AI 代理，构建协作式智能集群。项目具备自学习记忆、联邦通信和企业级安全架构，支持 RAG 集成。通过 Claude Code 插件，用户可以轻松部署自主工作流，让代理在后台自动协作与优化。 |
| 3 | [browserbase/skills](https://github.com/browserbase/skills) | Claude Agent SDK with a web browsing tool... | JavaScript | 1.5k | 347 | 这是一个为 Claude Code 提供的 Browserbase 技能集，旨在通过浏览器自动化和 CLI 工具增强 Claude 的网页浏览能力。它包含浏览器自动化、反机器人处理、无服务器函数部署、网站调试、Cookie 同步、静态抓取、AI UI 测试及使用监控等多种技能，支持复杂的网页交互与自动化测试。 |
| 4 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 22.7k | 1.1k | Maigret 是一款强大的开源 OSINT 工具，支持通过用户名在 3000+ 个网站上进行全网搜索。它无需 API 密钥，能自动抓取并提取个人资料信息，支持递归搜索、绕过封锁，并兼容 Tor 和 I2P。项目提供命令行、Web UI 和 Python 库接口，适合专业情报收集和社交媒体分析。 |
| 5 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 27.1k | 179 | 这是一个基于 Batchfile 的 Windows 网络代理工具，旨在绕过针对 Discord 和 YouTube 的网络封锁。项目利用 WinDivert 驱动程序拦截和过滤网络流量，模拟 Linux 的 iptables 功能。需注意，WinDivert 可能会被杀毒软件误报为病毒或风险工具，建议添加到排除项。此外，还建议启用 Secure DNS 以辅助访问。 |
| 6 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | Coding Agent Harness... | Rust | 2.8k | 482 | jcode 是一个基于 Rust 构建的下一代编码代理框架，旨在通过多会话工作流和无限可定制性提升编码能力。项目核心优势在于极致的资源效率，内存占用远低于同类竞品，非常适合需要高性能、低资源消耗的复杂编码场景。 |
| 7 | [ShareX/ShareX](https://github.com/ShareX/ShareX) | ShareX is a free and open-source application that ... | C# | 36.8k | 129 | ShareX 是一款免费开源的屏幕截图与录制工具。用户可通过单键快捷键捕获屏幕任意区域，支持录制视频。此外，它还具备强大的文件上传功能，支持将图片、文本等多种文件类型上传至多种云存储或自定义服务器。 |
| 8 | [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a... | - | 344.5k | 717 | 一份全面的计算机科学自学计划，旨在帮助求职者通过大型科技公司（如Google、Amazon）的技术面试。内容涵盖数据结构、算法、操作系统等核心知识，提供详细学习路径和多语言支持。 |

[查看完整数据](api/github/2026-05-02.json)
<!-- END GITHUB TRENDING -->




