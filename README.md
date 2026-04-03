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

**最后更新**: 2026-04-03 | **成功**: 7 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | OmX - Oh My codeX: Your codex is not alone. Add ho... | TypeScript | 14.1k | 3.0k | Oh My Codex（OMX）是OpenAI Codex CLI的工作流增强工具，通过预设命令（如$deep-interview、$ralplan）提供结构化开发流程。支持代理协作、技能集成与项目状态持久化，优化从需求澄清到代码执行的全链路体验。 |
| 2 | [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | Open Source AI Platform - AI Chat with advanced fe... | Python | 23.2k | 1.9k | Onyx是一个开源AI平台，提供支持多LLM的高级聊天功能，包含RAG、网络搜索、代码执行、深度研究等特性，可自托管且兼容多种LLM服务商。 |
| 3 | [google-research/timesfm](https://github.com/google-research/timesfm) | TimesFM (Time Series Foundation Model) is a pretra... | Python | 14.1k | 912 | TimesFM是Google Research开发的预训练时间序列基础模型，专注于时间序列预测。支持长上下文建模、连续分位数预测和多种框架（PyTorch/Flax），提供多版本模型及扩展功能，适用于复杂预测场景。 |
| 4 | [siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen) | Create stunning demos for free. Open-source, no su... | TypeScript | 18.1k | 2.9k | OpenScreen是一款开源屏幕录制工具，提供基础但实用的演示制作功能。支持全屏/窗口录制、自动/手动缩放、音频录制、自定义背景、注释添加、视频剪辑和多格式导出，适用于需要免费替代商业软件的场景。 |
| 5 | [dmtrKovalenko/fff.nvim](https://github.com/dmtrKovalenko/fff.nvim) | The fastest and the most accurate file search tool... | Rust | 3.2k | 767 | fff.nvim是基于Rust开发的超快速模糊文件查找工具，专为Neovim和AI代理设计。提供高效文件搜索、模糊匹配、多grep功能，支持内存缓存和智能结果排序，显著提升代码检索效率。 |
| 6 | [f/prompts.chat](https://github.com/f/prompts.chat) | f.k.a. Awesome ChatGPT Prompts. Share, discover, a... | HTML | 157.2k | 369 | f/prompts.chat 是一个开源的AI提示库，支持多种AI模型如ChatGPT、Claude等，提供提示浏览、自托管部署及交互式学习资源，适用于企业私有化部署与AI提示工程教育。 |
| 7 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 78.5k | 1.2k | Sherlock 是一个基于Python的工具，可通过用户名在400+社交平台中查找关联账户，支持多用户批量搜索、结果输出格式定制及代理配置，适用于跨平台账号追踪场景。 |

[查看完整数据](api/github/2026-04-03.json)
<!-- END GITHUB TRENDING -->








