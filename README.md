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

**最后更新**: 2026-01-18 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source Cowork for Gemini CLI, Cl... | TypeScript | 5.5k | 660 | AionUi是基于TypeScript开发的本地开源AI协作工具，提供统一图形界面支持多AI模型（如Gemini、Claude、Qwen等），具备智能文件管理、多会话本地存储、AI图像生成及多任务并行处理功能，强调数据安全与可视化操作。 |
| 2 | [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | A feature-rich command-line audio/video downloader... | Python | 142.4k | 170 | yt-dlp是功能丰富的命令行音视频下载工具，支持数千个网站，提供多种下载选项和格式控制，兼容youtube-dl但持续更新维护。 |
| 3 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | A high-performance algorithmic trading platform an... | Rust | 17.6k | 30 | NautilusTrader是高性能算法交易平台，支持事件驱动回测与实时交易，采用Rust和Python开发，提供跨平台、高可靠性的策略开发与部署环境。 |
| 4 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 22.0k | 393 | LangExtract是基于Python的LLM信息提取库，支持精确来源定位、交互式可视化，适配云模型与本地LLM，适用于医疗文档等长文本结构化处理。 |
| 5 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM: Tokenizer-Free TTS for Context-Aware Speec... | Python | 4.2k | 249 | VoxCPM是一款无需分词器的文本转语音系统，支持上下文感知的自然语音生成和零样本真实语音克隆。基于MiniCPM-4架构，通过连续空间建模和层次化语言建模，实现高表达力与稳定性的语音合成，适用于个性化语音生成场景。 |
| 6 | [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | RAG on Everything with LEANN. Enjoy 97% storage sa... | Python | 9.0k | 144 | LEANN是一个基于Python的轻量级向量数据库，通过图-based有选择性重新计算和高保真剪枝技术，实现97%存储节省。支持本地运行的RAG应用，可处理文档检索、语义搜索及多源数据整合，保障隐私且无需云服务。 |
| 7 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 21.2k | 56 | 该项目提供基于WinDivert的网络流量过滤工具，支持绕过网络审查的DNS配置与流量控制，包含批处理脚本实现网络策略自动化。需注意部分安全软件可能误报风险。 |
| 8 | [tobi/try](https://github.com/tobi/try) | fresh directories for every vibe... | Shell | 2.7k | 29 | try 是一个用于快速创建和管理实验性目录的工具，通过自动命名、模糊搜索和智能排序帮助用户整理分散的实验项目，避免目录混乱和丢失。 |
| 9 | [Mebus/cupp](https://github.com/Mebus/cupp) | Common User Passwords Profiler (CUPP)... | Python | 5.5k | 30 | CUPP是一个用于分析用户密码强度的工具，通过常见密码模式、字典文件和用户信息生成可能的密码组合，支持交互式问卷、字典分析和大型字典下载，适用于渗透测试和法医调查。 |

[查看完整数据](api/github/2026-01-18.json)
<!-- END GITHUB TRENDING -->








