# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
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
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

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

**最后更新**: 2026-10-31 | **成功**: 1 | **失败**: 13

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Persistent Context Across Sessions for Every Agent... | TypeScript | 107.9k | 1.7k | 这是一个为 Claude Code 设计的持久化记忆压缩系统。它通过自动捕获工具使用并生成语义摘要，确保 AI 代理在会话间保持上下文连续性。支持 Claude、Gemini 等多种平台，帮助 Agent 记住项目历史与决策，实现跨会话的知识延续。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 308.4k | 883 | 处理失败 |
| 3 | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Turn Claude Code into a full game dev studio — 49 ... | Shell | 31.2k | 742 | 处理失败 |
| 4 | [pingdotgg/t3code](https://github.com/pingdotgg/t3code) | ... | TypeScript | 35.7k | 1.1k | 处理失败 |
| 5 | [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu) | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据... | TypeScript | 12.3k | 1.1k | 处理失败 |
| 6 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | Open-source Grok Bot alternative with a virtual ma... | TypeScript | 9.7k | 1.3k | 处理失败 |
| 7 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design vocabulary for your coding agent. Steer... | Rust | 98.3k | 1.3k | 处理失败 |
| 8 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 310.1k | 665 | 处理失败 |
| 9 | [lightpanda-io/browser](https://github.com/lightpanda-io/browser) | Lightpanda: the headless browser designed for AI a... | Zig | 39.3k | 929 | 处理失败 |
| 10 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | DeepTutor: Lifelong Personalized Tutoring. https:/... | Python | 52.9k | 1.0k | 处理失败 |
| 11 | [Orkas-AI/Orkas](https://github.com/Orkas-AI/Orkas) | Orkas is an open-source (MIT), local-first AI team... | JavaScript | 6.3k | 1.0k | 处理失败 |
| 12 | [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | Open Multi-Agent Interactive Classroom — Get an im... | TypeScript | 42.2k | 116 | 处理失败 |
| 13 | [bregman-arie/devops-exercises](https://github.com/bregman-arie/devops-exercises) | Linux, Jenkins, AWS, SRE, Prometheus, Docker, Pyth... | Python | 86.0k | 342 | 处理失败 |
| 14 | [vorssaint/vorssaint-utils](https://github.com/vorssaint/vorssaint-utils) | Free and open-source macOS menu bar toolkit.... | Swift | 31.9k | 501 | 处理失败 |

[查看完整数据](api/github/2026-10-31.json)
<!-- END GITHUB TRENDING -->




