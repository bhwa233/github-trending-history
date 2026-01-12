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

**最后更新**: 2026-01-12 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [DioxusLabs/dioxus](https://github.com/DioxusLabs/dioxus) | Fullstack app framework for web, desktop, and mobi... | Rust | 33.6k | 190 | Dioxus是基于Rust的全栈应用框架，支持Web、桌面、移动等多平台开发。提供跨平台代码复用、热重载、信号状态管理及全栈Web功能，集成axum实现服务器端渲染与API开发，具备类型安全和高效热修补特性。 |
| 2 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 42.1k | 139 | MediaCrawler是一个多平台自媒体数据采集工具，支持小红书、抖音、快手、B站、微博、贴吧、知乎等平台的公开信息抓取。基于Playwright实现浏览器自动化登录与数据采集，具备关键词搜索、指定ID爬取、评论获取、登录态缓存、IP代理池等功能，提供WebUI可视化界面和Pro版扩展能力。 |
| 3 | [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | Autonomous AI development loop for Claude Code wit... | Shell | 2.2k | 667 | Ralph for Claude Code 提供自主AI开发循环，支持智能退出检测、速率限制和错误防护，实现项目持续迭代优化。内置tmux集成、PRD导入和CI/CD管道，适用于需要自动化代码开发的场景。 |
| 4 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 109.3k | 170 | iptv-org/iptv 是一个全球IPTV频道资源集合项目，提供可直接使用的M3U播放列表链接，涵盖电子节目指南、数据库支持及API接口，便于开发者和用户快速访问国际直播频道。 |
| 5 | [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | real time face swap and one-click video deepfake w... | Python | 77.5k | 110 | Deep-Live-Cam 是一款基于Python的实时人脸交换与视频深度伪造工具，仅需单张图像即可生成深度伪造内容。项目强调伦理规范，内置内容过滤机制以防止滥用，适用于艺术创作和AI媒体生产场景。 |
| 6 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 23.2k | 492 | 由字节跳动开源的多模态AI代理栈，包含Agent TARS和UI-TARS-desktop。通过CLI、Web UI及桌面GUI实现跨平台AI任务自动化，整合视觉、GUI代理与真实工具，提升任务完成效率。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | Claude Code superpowers: core skills library... | Shell | 18.6k | 1.5k | Superpowers为Claude Code编码代理提供完整的软件开发工作流，通过可组合的技能库和自动化流程，实现需求分析、设计确认、TDD驱动的代码生成及子代理协作开发，提升开发效率与代码质量。 |
| 8 | [ruvnet/claude-flow](https://github.com/ruvnet/claude-flow) | 🌊 The leading agent orchestration platform for Cl... | JavaScript | 11.7k | 80 | Claude-Flow是面向Claude的代理协调平台，支持多代理集群部署与自动化工作流，集成AgentDB提升语义搜索性能，提供100+ MCP工具及蜂群智能架构，适用于企业级AI系统开发。 |
| 9 | [home-assistant/home-assistant.io](https://github.com/home-assistant/home-assistant.io) | 📘 Home Assistant User documentation... | HTML | 8.1k | 268 | Home Assistant用户文档网站，提供多环境部署（生产/测试/开发）和本地预览功能，支持通过Bundler工具加速文档生成与调试。 |
| 10 | [mpv-player/mpv](https://github.com/mpv-player/mpv) | 🎥 Command line media player... | C | 33.5k | 11 | mpv 是一款自由的命令行媒体播放器，支持多种媒体格式、音视频编解码器及字幕类型。提供高效硬件解码支持，可定制播放配置，适用于需要高性能媒体处理的场景。 |
| 11 | [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | ChatDev 2.0: Dev All through LLM-powered Multi-Age... | Python | 28.3k | 57 | ChatDev 2.0 是基于大语言模型的零代码多智能体协作平台，用户可通过配置快速构建复杂多智能体系统，支持数据可视化、3D生成、深度研究等场景。其核心为LLM驱动的智能体编排技术，结合强化学习优化协作流程。 |
| 12 | [opf/openproject](https://github.com/opf/openproject) | OpenProject is the leading open source project man... | Ruby | 13.9k | 110 | OpenProject是开源项目管理软件，提供项目计划、任务管理、敏捷开发、时间跟踪、缺陷跟踪、维基和论坛等功能，支持团队协作与项目规划。 |

[查看完整数据](api/github/2026-01-12.json)
<!-- END GITHUB TRENDING -->








