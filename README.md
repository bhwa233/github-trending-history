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

**最后更新**: 2026-01-20 | **成功**: 7 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | The absolute trainer to light up AI agents.... | Python | 10.7k | 43 | Agent Lightning 是一个用于高效训练AI代理的工具，支持零代码优化、多框架集成（如LangChain、OpenAI、AutoGen等），并结合强化学习等算法提升代理性能，适用于多代理系统的精准优化场景。 |
| 2 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source Cowork for Gemini CLI, Cl... | TypeScript | 7.7k | 961 | AionUi是支持多AI命令行工具的本地协作平台，提供图形化界面、本地数据存储、多会话管理及智能文件处理功能，兼容Gemini CLI、Qwen Code等主流模型，实现代码生成、文件预览与AI图像编辑一体化操作。 |
| 3 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 23.2k | 566 | LangExtract是一个基于Python的LLM库，可从非结构化文本中提取结构化信息，支持精确来源定位、长文档优化处理及交互式可视化，适用于医疗文档等场景的实体提取与上下文关联分析。 |
| 4 | [AlexxIT/go2rtc](https://github.com/AlexxIT/go2rtc) | Ultimate camera streaming application with support... | Go | 11.5k | 160 | Go语言开发的跨平台流媒体应用，支持RTSP/RTMP/WebRTC/HLS等协议，提供零配置低延迟传输，兼容多种摄像头和流媒体服务，通过FFmpeg实现格式转码与协议适配。 |
| 5 | [lukasz-madon/awesome-remote-job](https://github.com/lukasz-madon/awesome-remote-job) | A curated list of awesome remote jobs and resource... | - | 42.5k | 244 | 该项目是一个集中整理的远程工作资源清单，涵盖求职指南、工具推荐、社区交流及远程办公最佳实践，旨在为开发者和远程工作者提供一站式资源导航。 |
| 6 | [tobi/try](https://github.com/tobi/try) | fresh directories for every vibe... | Shell | 2.9k | 78 | try 是一个用于快速创建和管理实验性项目目录的工具，通过自动命名、模糊搜索和智能排序帮助用户高效组织临时项目，避免目录散乱问题。 |
| 7 | [DavidXanatos/TaskExplorer](https://github.com/DavidXanatos/TaskExplorer) | Power full Task Manager... | C | 2.7k | 326 | TaskExplorer是一款基于C语言的系统级任务管理工具，提供进程实时监控与深度分析功能。通过多面板可视化界面，支持线程追踪、内存编辑、句柄分析、网络连接监控及DLL管理，适用于系统性能调优与故障排查。 |

[查看完整数据](api/github/2026-01-20.json)
<!-- END GITHUB TRENDING -->








