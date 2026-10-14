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

**最后更新**: 2026-10-13 | **成功**: 8 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 209.0k | 54.7k | 处理失败 |
| 2 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 55.5k | 2.0k | 这是一个基于浏览器的间谍卫星模拟器，利用真实数据在照片级真实感的3D地球上展示全球实时动态。支持语音控制，无需API密钥即可本地运行，提供驾驶舱视角追踪飞机、船只及卫星，具有高度的可扩展性。 |
| 3 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 63.4k | 1.7k | VoiceStudio 是一个开源的完全本地化 ElevenLabs 替代品，支持语音克隆、视频配音、听写、转录及有声书创作，覆盖 646 种语言。支持 NVIDIA GPU 和 Apple Silicon 加速，数据完全本地处理。 |
| 4 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 28.3k | 969 | 这是一个针对 AI 编码代理的上下文窗口优化工具。它通过 MCP 服务器实现三大核心功能：利用沙箱工具将原始数据排除在上下文外（减少 98%），使用 SQLite 和 FTS5/BM25 搜索技术管理会话记忆，并强制 LLM 编写代码脚本（如 ctx_execute）进行分析而非读取文件，从而大幅节省 token 并保持会话连续性。 |
| 5 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 54.2k | 1.8k | 这是一个专为 AI 编码助手（如 Cursor、Claude Code）设计的图表生成技能。它支持 45 种图表类型，生成自包含的 HTML/SVG 文件，允许用户自定义品牌（字体、颜色），无需依赖 Mermaid，适合快速创建架构图、流程图等。 |
| 6 | [vercel-labs/skills](https://github.com/vercel-labs/skills) | The open agent skills tool - npx skills... | TypeScript | 34.5k | 190 | 这是一个用于开放代理技能生态系统的 CLI 工具。它支持 OpenCode、Claude Code、Codex、Cursor 等 75 多种编码代理。用户可以通过 npx 安装技能或生成提示词并启动交互式代理。该工具支持 GitHub、GitLab、Azure 等多种 Git 源，包括私有仓库。 |
| 7 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 2.8T LLM inference with single 4GB GPU... | Jupyter Notebook | 38.4k | 1.0k | AirLLM 是一个 Jupyter Notebook 项目，旨在大幅降低大语言模型推理内存占用。它允许在单张 4GB 显存的 GPU 上运行 70B 等大型模型，无需量化或剪枝。最新版本还支持在低显存下训练大模型，如 Qwen3.8-Flash-Next (125B)。 |
| 8 | [storytold/artcraft](https://github.com/storytold/artcraft) | ArtCraft is an intentional crafting engine for art... | Rust | 25.8k | 4.1k | ArtCraft 是一款专为艺术家、设计师和电影制作人打造的交互式 AI 图像与视频创作 IDE。它结合了 2D 和 3D 合成技术，支持从文本提示到精确的场景构建、角色姿势调整及 3D 网格生成。通过可视化工具，用户可以在生成前精确控制构图、角色身份和相机位置，实现从“提示词”到“精心制作”的创作流程。 |
| 9 | [xtool-org/xtool](https://github.com/xtool-org/xtool) | Cross-platform Xcode replacement. Build and deploy... | Swift | 9.4k | 1.2k | xtool 是一个用 Swift 编写的跨平台 Xcode 替代品，支持在 Linux、Windows 和 macOS 上使用 SwiftPM 构建、签名和部署 iOS 应用。它提供了命令行工具和 XKit 库，用于与 Apple 开发者服务和设备进行交互。 |

[查看完整数据](api/github/2026-10-13.json)
<!-- END GITHUB TRENDING -->




