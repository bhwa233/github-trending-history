# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 OpenRouter 免费模型生成中英文项目总结、技术栈和适用场景
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
- **AI 服务**: OpenRouter Chat Completions API（可配置免费模型）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export OPENROUTER_API_KEY=your_openrouter_api_key
# 可选：使用万能免费路由（自动分配当前可用免费模型）
export OPENROUTER_MODEL=openrouter/free

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

**最后更新**: 2026-04-15 | **成功**: 0 | **失败**: 13

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | A single CLAUDE.md file to improve Claude Code beh... | - | 42.7k | 9.6k | 处理失败 |
| 2 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 12.6k | 1.4k | 处理失败 |
| 3 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 57.8k | 2.3k | 处理失败 |
| 4 | [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | 《动手学大模型Dive into LLMs》系列编程实践教程... | Jupyter Notebook | 29.4k | 1.0k | 处理失败 |
| 5 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 55.0k | 1.1k | 处理失败 |
| 6 | [chrislgarry/Apollo-11](https://github.com/chrislgarry/Apollo-11) | Original Apollo 11 Guidance Computer (AGC) source ... | Assembly | 66.8k | 625 | 处理失败 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 154.2k | 2.1k | 处理失败 |
| 8 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source voice synthesis studio... | TypeScript | 18.2k | 1.1k | 处理失败 |
| 9 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 423.3k | 839 | 处理失败 |
| 10 | [vercel-labs/open-agents](https://github.com/vercel-labs/open-agents) | An open source template for building cloud agents.... | TypeScript | 2.6k | 1.0k | 处理失败 |
| 11 | [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Self-evolving agent: grows skill tree from 3.3K-li... | Python | 1.9k | 413 | 处理失败 |
| 12 | [google/magika](https://github.com/google/magika) | Fast and accurate AI powered file content types de... | Python | 13.7k | 833 | 处理失败 |
| 13 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 10.4k | 737 | 处理失败 |

[查看完整数据](api/github/2026-04-15.json)
<!-- END GITHUB TRENDING -->







