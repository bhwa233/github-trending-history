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

**最后更新**: 2026-01-02 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [HQarroum/docker-android](https://github.com/HQarroum/docker-android) | 🤖 A minimal and customizable Docker image running... | Shell | 1.7k | 474 | 提供最小化可定制的Android模拟器Docker镜像，支持KVM加速、端口转发和CI环境部署，内置Java运行时与ADB服务，可灵活配置安卓版本及设备类型。 |
| 2 | [nocodb/nocodb](https://github.com/nocodb/nocodb) | 🔥 🔥 🔥 Open Source Airtable Alternative... | TypeScript | 59.9k | 110 | NocoDB是开源的Airtable替代工具，提供在线数据库快速构建功能。支持Docker部署、多数据库兼容（SQLite/PostgreSQL），具备自动化安装、SSL配置及版本升级能力，适用于数据管理与低代码应用开发。 |
| 3 | [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | Examples and guides for using the OpenAI API... | Jupyter Notebook | 70.4k | 28 | OpenAI官方提供的API使用示例与指南合集，包含多种AI任务实现代码和操作教程，帮助开发者快速上手OpenAI API。 |
| 4 | [ourongxing/newsnow](https://github.com/ourongxing/newsnow) | Elegant reading of real-time and hottest news... | TypeScript | 16.0k | 213 | newsnow是一个实时新闻聚合应用，提供简洁UI和实时更新，支持GitHub登录、数据同步及自适应抓取间隔，优化资源使用并防止IP封禁，采用TypeScript开发，支持Cloudflare D1数据库。 |
| 5 | [rossant/awesome-math](https://github.com/rossant/awesome-math) | A curated list of awesome mathematics resources... | Python | 13.0k | 112 | 该项目是一个全面的数学资源列表，涵盖多个数学领域，包括学习平台、视频教程、工具、书籍和会议等，适合数学学习者和研究者查找优质资源。 |
| 6 | [usememos/memos](https://github.com/usememos/memos) | An open-source, self-hosted note-taking service. Y... | Go | 48.8k | 655 | Memos是一款开源自托管笔记服务，强调隐私保护与数据自主权。基于Go和React构建，支持Markdown格式、快速性能及多数据库部署，提供REST/gRPC API，适用于个人笔记管理及团队知识库建设。 |
| 7 | [GitHubDaily/GitHubDaily](https://github.com/GitHubDaily/GitHubDaily) | 坚持分享 GitHub 上高质量、有趣实用的开源技术教程、开发者工具、编程网站、技术资讯。A lis... | - | 43.8k | 48 | GitHubDaily/GitHubDaily项目整理并分享高质量的开源技术教程、工具和资讯，涵盖AI漫画生成、春联创作、终端助手、OCR处理、语音转文本等实用工具，助力开发者高效利用开源技术。 |
| 8 | [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | Faster Whisper transcription with CTranslate2... | Python | 20.0k | 102 | faster-whisper是基于CTranslate2的高效语音转录工具，通过优化Transformer模型推理速度，实现比原版Whisper快4倍的处理效率，支持CPU/GPU加速及8-bit量化技术，减少内存占用。 |
| 9 | [Koenkk/zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt) | Zigbee 🐝 to MQTT bridge 🌉, get rid of your propr... | TypeScript | 14.5k | 11 | Zigbee2MQTT是Zigbee到MQTT协议的桥接工具，允许用户无需厂商网关即可控制Zigbee设备，并通过MQTT集成到智能家居系统中。支持多种家居平台如Home Assistant、Domoticz等。 |

[查看完整数据](api/github/2026-01-02.json)
<!-- END GITHUB TRENDING -->








