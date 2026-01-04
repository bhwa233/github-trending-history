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

**最后更新**: 2026-01-04 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 56.8k | 440 | OpenBB-finance/OpenBB 是一个金融数据整合平台，支持分析师、量化研究人员和AI代理通过Python、Excel、AI代理和REST API统一访问多源数据。提供数据连接、处理及可视化功能，实现‘连接一次，随处消费’的架构。 |
| 2 | [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | Examples and guides for using the OpenAI API... | Jupyter Notebook | 70.6k | 43 | 该项目提供OpenAI API的示例代码和使用指南，涵盖常见任务的实现方法。包含多种编程场景的实践案例，帮助开发者快速上手API调用与集成。 |
| 3 | [nocodb/nocodb](https://github.com/nocodb/nocodb) | 🔥 🔥 🔥 Open Source Airtable Alternative... | TypeScript | 60.6k | 375 | NocoDB是开源的Airtable替代品，提供在线数据库构建工具。支持Docker部署、多数据库类型配置，包含自动化安装与升级功能，适用于快速搭建团队数据库应用。 |
| 4 | [HQarroum/docker-android](https://github.com/HQarroum/docker-android) | 🤖 A minimal and customizable Docker image running... | Shell | 2.4k | 410 | 提供最小化可定制的Android模拟器Docker镜像，支持KVM加速和无头模式，内置ADB服务与端口转发功能，适用于CI/CD环境及远程Android测试场景。 |
| 5 | [usememos/memos](https://github.com/usememos/memos) | An open-source, self-hosted note-taking service. Y... | Go | 51.2k | 1.8k | Memos是一款开源自托管笔记服务，强调隐私安全与数据控制。支持Markdown格式，提供快速性能和开发者友好API，适用于个人知识管理及团队协作。 |
| 6 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 44.5k | 88 | 该项目是一个AI对冲基金原型，通过多个AI代理模拟不同投资策略（如价值投资、成长投资、量化分析等），整合估值分析、市场情绪判断、风险控制等功能，生成交易信号和决策建议，但明确说明不进行实际交易。 |
| 7 | [ourongxing/newsnow](https://github.com/ourongxing/newsnow) | Elegant reading of real-time and hottest news... | TypeScript | 16.5k | 332 | Newsnow 是一个实时新闻聚合应用，提供简洁的阅读体验。支持GitHub OAuth登录、数据同步与自适应抓取机制，可自定义缓存策略和新闻源。基于TypeScript开发，适配Cloudflare D1数据库，支持部署于Vercel/Cloudflare Pages。 |
| 8 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 47.6k | 990 | OpenCode 是一个开源的AI编码代理工具，提供两种代理模式：build代理用于开发工作，plan代理用于代码分析与规划。支持多平台安装，包含桌面应用和命令行工具，适用于代码编辑、分析及多步骤任务处理。 |
| 9 | [5rahim/seanime](https://github.com/5rahim/seanime) | Open-source media server with a web interface and ... | Go | 2.1k | 406 | Seanime是基于Go的开源媒体服务器，提供Web界面和桌面应用，支持动漫/漫画本地库管理、AniList集成、Torrent搜索与直接播放、多平台播放器兼容及离线模式，涵盖从内容管理到流媒体的全方位功能。 |
| 10 | [python/cpython](https://github.com/python/cpython) | The Python programming language... | Python | 70.7k | 27 | CPython是Python编程语言的官方实现，提供解释器、编译器和标准库。支持跨平台构建与安装，包含开发文档、贡献指南及多版本兼容性支持，是Python生态的核心项目。 |

[查看完整数据](api/github/2026-01-04.json)
<!-- END GITHUB TRENDING -->








