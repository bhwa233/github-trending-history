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

**最后更新**: 2026-01-13 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [obra/superpowers](https://github.com/obra/superpowers) | Claude Code superpowers: core skills library... | Shell | 20.3k | 1.6k | Superpowers 是基于 Shell 语言的代码开发工作流工具，通过可组合的技能库和自动化流程提升编码效率。核心功能包括需求分析、分块设计展示、遵循 TDD/YAGNI 原则的实现计划生成，以及子代理驱动的自动化开发流程，适用于需要高效代码生成的场景。 |
| 2 | [icloud-photos-downloader/icloud_photos_downloader](https://github.com/icloud-photos-downloader/icloud_photos_downloader) | A command-line tool to download photos from iCloud... | Python | 11.0k | 364 | Python开发的跨平台iCloud照片下载工具，支持命令行操作。提供三种工作模式：复制、同步、移动，支持Live Photos、RAW格式、自动去重及元数据更新。可定时监控iCloud变化，适用于照片备份与增量同步场景。 |
| 3 | [blakeblackshear/frigate](https://github.com/blakeblackshear/frigate) | NVR with realtime local object detection for IP ca... | TypeScript | 28.9k | 38 | Frigate NVR是一款基于IP摄像头的实时本地对象检测NVR系统，集成Home Assistant支持。采用OpenCV与TensorFlow实现低资源消耗的AI检测，通过运动检测触发对象识别，支持MQTT通信、RTSP重流媒体及多摄像头管理，适用于家庭安防场景。 |
| 4 | [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm... | Scala | 69.5k | 43 | X平台内容推荐算法核心代码，包含数据处理、模型服务和软件框架，支持动态消息、搜索、探索等场景的个性化内容推送。 |
| 5 | [home-assistant/home-assistant.io](https://github.com/home-assistant/home-assistant.io) | 📘 Home Assistant User documentation... | HTML | 8.3k | 184 | Home Assistant用户文档网站，提供不同分支的在线访问链接及本地开发预览环境配置，包含文档贡献流程和站点生成优化工具。 |
| 6 | [chidiwilliams/buzz](https://github.com/chidiwilliams/buzz) | Buzz transcribes and translates audio offline on y... | Python | 16.7k | 263 | Buzz是一款基于OpenAI Whisper的离线音频转录与翻译工具，支持音频/视频文件及YouTube链接处理，提供实时麦克风转录、语音分离、说话人识别功能，并兼容多平台GPU加速。可导出多种字幕格式，适用于会议记录、视频字幕生成等场景。 |
| 7 | [adam-maj/tiny-gpu](https://github.com/adam-maj/tiny-gpu) | A minimal GPU design in Verilog to learn how GPUs ... | SystemVerilog | 9.8k | 140 | 该项目用SystemVerilog实现了一个极简GPU架构，通过矩阵运算内核和完整文档展示GPU硬件设计原理，专注于教学用途以理解并行计算和硬件加速器核心机制。 |
| 8 | [Free-TV/IPTV](https://github.com/Free-TV/IPTV) | M3U Playlist for free TV channels... | Python | 10.6k | 319 | 提供全球免费电视频道的M3U播放列表，涵盖本地免费和网络免费渠道，强调高质量、高清画质和无广告特性，支持Plex、Pluto TV等主流平台。 |
| 9 | [onlook-dev/onlook](https://github.com/onlook-dev/onlook) | The Cursor for Designers • An Open-Source AI-First... | TypeScript | 24.1k | 42 | 基于Next.js和TailwindCSS的开源AI可视化设计工具，支持实时视觉编辑React应用，提供AI辅助开发、组件管理、跨平台协作及一键部署功能，面向设计师与开发者的协同工作流优化。 |

[查看完整数据](api/github/2026-01-13.json)
<!-- END GITHUB TRENDING -->








