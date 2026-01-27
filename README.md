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

**最后更新**: 2026-01-27 | **成功**: 6 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 2.7k | 194 | pi-mono 是一个AI代理开发工具包，提供CLI工具、统一LLM API、TUI/Web UI库、Slack机器人及vLLM部署模块，支持多场景AI代理构建与模型管理。 |
| 2 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 15.5k | 433 | Supermemory是一款高速可扩展的记忆引擎与应用，支持通过自然语言交互检索存储内容。提供多格式记忆添加、AI工具集成、浏览器及Raycast扩展，适用于AI场景下的高效数据管理。 |
| 3 | [Blaizzy/mlx-audio](https://github.com/Blaizzy/mlx-audio) | A text-to-speech (TTS), speech-to-text (STT) and s... | Python | 5.4k | 457 | Blaizzy/mlx-audio 是基于Apple MLX框架的多模态语音处理库，支持文本转语音(TTS)、语音转文本(STT)和语音转语音(STS)。针对Apple Silicon优化，提供多语言支持、语音克隆、量化压缩和3D音频可视化，兼容Python和Swift生态。 |
| 4 | [Free-TV/IPTV](https://github.com/Free-TV/IPTV) | M3U Playlist for free TV channels... | Python | 12.5k | 295 | 提供全球免费电视频道的M3U播放列表，强调高质量、免费及主流内容，支持IPTV播放器直接调用。项目通过Python脚本生成播放列表，严格筛选无广告、无区域限制的高清频道。 |
| 5 | [hashicorp/vault](https://github.com/hashicorp/vault) | A tool for secrets management, encryption as a ser... | Go | 34.1k | 13 | Vault是Hashicorp开发的密钥管理工具，提供安全存储、动态秘钥生成和数据加密功能，支持多平台秘密访问控制与审计日志。 |
| 6 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 90.1k | 386 | 该项目是一个包含多种LLM应用的集合，涵盖AI代理、RAG、多代理团队等技术，整合OpenAI、Anthropic、Gemini及开源模型，提供从基础到高级的AI应用案例。 |

[查看完整数据](api/github/2026-01-27.json)
<!-- END GITHUB TRENDING -->








