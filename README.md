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

**最后更新**: 2026-01-05 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 49.6k | 1.9k | 开源AI编码代理，提供全功能开发代理和只读分析代理，支持多平台安装及桌面应用，适用于代码分析、规划及多环境开发。 |
| 2 | [usememos/memos](https://github.com/usememos/memos) | An open-source, self-hosted note-taking service. Y... | Go | 51.9k | 653 | Memos是开源自托管笔记服务，强调隐私安全与数据控制。支持Markdown格式，提供快速性能和简单部署方式，具备REST/gRPC API及可扩展的架构，适用于个人知识管理与团队协作。 |
| 3 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 57.1k | 380 | OpenBB-finance/OpenBB 是一个面向分析师、量化研究员和AI代理的开源金融数据平台，提供数据整合、API接口及可视化工具。支持Python调用、Excel集成和AI代理对接，实现'连接一次，随处消费'的数据管理架构。 |
| 4 | [ourongxing/newsnow](https://github.com/ourongxing/newsnow) | Elegant reading of real-time and hottest news... | TypeScript | 16.8k | 207 | 实时新闻聚合应用，提供简洁界面、GitHub登录、动态缓存及自适应抓取功能，支持中文新闻实时更新与个性化配置。 |
| 5 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 44.7k | 210 | 该项目是一个AI驱动的对冲基金模拟系统，整合了多位投资大师的策略，通过估值、情绪、基本面和技术分析生成交易信号，结合风险管理和组合管理模块进行决策，仅用于教育研究目的。 |
| 6 | [python/cpython](https://github.com/python/cpython) | The Python programming language... | Python | 70.9k | 169 | CPython是Python语言的官方参考实现，使用C语言编写，提供Python解释器、编译器及标准库。支持多平台构建与安装，包含开发文档、贡献指南和测试框架，是Python生态的核心项目。 |
| 7 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 19.8k | 184 | VibeVoice是微软开源的前沿语音AI框架，支持生成长达90分钟的多说话人对话音频，解决传统TTS的可扩展性和自然轮替问题。包含长格式多说话人模型与实时流式TTS模型，提供多语言及风格化语音合成，注重深度伪造风险防控。 |
| 8 | [3b1b/manim](https://github.com/3b1b/manim) | Animation engine for explanatory math videos... | Python | 83.2k | 82 | Manim是用于创建解释性数学视频的程序化动画引擎，支持Python脚本生成高质量动画。项目包含核心渲染功能与数学公式支持，适用于教育视频制作。 |
| 9 | [maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) | MapLibre GL JS - Interactive vector tile maps in t... | TypeScript | 9.4k | 68 | MapLibre GL JS 是一个开源地图库，提供浏览器端的交互式矢量瓦片地图渲染，基于 GPU 加速实现高性能地图显示。起源于 Mapbox GL JS 的开源分支，支持自定义样式和地图交互，适用于需要轻量级地图解决方案的项目。 |
| 10 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 51.6k | 455 | Claude Code 是一款终端级代理编程工具，支持自然语言指令执行代码任务、解释复杂代码及管理Git工作流，通过插件扩展功能，提升开发效率。 |

[查看完整数据](api/github/2026-01-05.json)
<!-- END GITHUB TRENDING -->








