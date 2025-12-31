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

**最后更新**: 2025-12-31 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [afkarxyz/SpotiFLAC](https://github.com/afkarxyz/SpotiFLAC) | Get Spotify tracks in true FLAC from Tidal, Qobuz ... | TypeScript | 1.5k | 391 | SpotiFLAC是一款无需账户即可从Tidal、Qobuz和Amazon Music获取Spotify歌曲的工具，支持将音频转换为高质量FLAC格式。项目为第三方工具，强调仅限教育及私人使用，避免版权侵权风险。 |
| 2 | [google-gemini/computer-use-preview](https://github.com/google-gemini/computer-use-preview) | ... | Python | 2.3k | 53 | 该工具基于Gemini API或Vertex AI构建，提供计算机使用预览功能，支持自动化任务执行与浏览器操作。包含环境配置、API密钥管理及主程序运行模块，适用于AI驱动的自动化场景。 |
| 3 | [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book) | Introduction to Machine Learning Systems... | JavaScript | 13.9k | 1.1k | 该项目是机器学习系统工程的开源学习资源，包含教材源码、TinyTorch工具、硬件套件和实验代码，旨在通过理论与实践结合的方式教授AI系统设计、构建和部署，强调工程化能力培养。 |
| 4 | [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | Get 10X more out of Claude Code, Codex or any codi... | Rust | 10.1k | 1.6k | Vibe Kanban是一款用于高效管理AI编码代理的工具，支持多代理任务编排、状态追踪、配置集中管理及远程项目访问，提升代码生成与协作效率。 |
| 5 | [timescale/pg-aiguide](https://github.com/timescale/pg-aiguide) | MCP server and Claude plugin for Postgres skills a... | Python | 1.0k | 321 | pg-aiguide是为AI编码工具优化的PostgreSQL技能增强工具，提供版本化文档语义搜索、最佳实践技能库和扩展生态文档，提升AI生成代码的质量与一致性。 |
| 6 | [sansan0/TrendRadar](https://github.com/sansan0/TrendRadar) | 🎯 告别信息过载，AI 助你看懂新闻资讯热点，支持 RSS 订阅，简单的舆情监控分析 - 多平台热... | Python | 41.8k | 149 | TrendRadar是一款基于AI的多平台舆情监控工具，支持35个资讯平台热点聚合，提供趋势追踪、情感分析、相似检索等20种分析功能，可通过企业微信/钉钉/邮件等多渠道推送，采用Docker部署实现30秒快速上线。 |
| 7 | [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | Examples and guides for using the OpenAI API... | Jupyter Notebook | 70.2k | 57 | OpenAI官方提供的API使用示例与指南仓库，包含Jupyter Notebook格式的代码示例、API调用教程及环境配置说明，帮助开发者快速实现文本生成、对话交互等常见AI功能。 |
| 8 | [organicmaps/organicmaps](https://github.com/organicmaps/organicmaps) | 🍃 Organic Maps is a free Android & iOS offline ma... | C++ | 12.6k | 40 | Organic Maps是一款注重隐私的开源离线地图应用，提供徒步、骑行等多场景导航服务。基于OpenStreetMap数据，支持离线搜索、路线规划及地形分析，无广告和数据追踪，适用于需要隐私保护的户外活动用户。 |
| 9 | [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | SoTA open-source TTS... | Python | 19.9k | 443 | Chatterbox是Resemble AI开发的开源文本转语音模型家族，包含Turbo（高效低延迟）、多语言模型（支持23+语言）和通用模型（支持零样本克隆与创意控制）。Turbo优化了计算资源，支持paralinguistic标签，适用于语音代理、多语言应用及创意场景。 |
| 10 | [nocodb/nocodb](https://github.com/nocodb/nocodb) | 🔥 🔥 🔥 Open Source Airtable Alternative... | TypeScript | 59.6k | 62 | NocoDB是一款开源的Airtable替代工具，提供在线数据库构建功能。支持Docker部署，兼容SQLite/PostgreSQL等数据库，配备自动化安装脚本和多平台二进制包，适用于快速搭建数据管理应用。 |

[查看完整数据](api/github/2025-12-31.json)
<!-- END GITHUB TRENDING -->








