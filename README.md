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

**最后更新**: 2026-04-05 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) | A gallery that showcases on-device ML/GenAI use ca... | Kotlin | 16.9k | 495 | Google AI Edge Gallery是一款展示本地设备生成式AI应用的安卓应用，支持离线运行大型语言模型。核心功能包括Agent Skills工具扩展、AI思考模式对话、图像识别、语音转录及提示词调试，聚焦隐私保护与高性能计算。 |
| 2 | [Blaizzy/mlx-vlm](https://github.com/Blaizzy/mlx-vlm) | MLX-VLM is a package for inference and fine-tuning... | Python | 3.9k | 408 | MLX-VLM是基于MLX框架的视觉语言模型推理与微调工具包，支持Mac端多模态任务。提供CLI和Python接口，兼容图像、音频、视频等多模态输入，覆盖OCR、视觉推理等场景，内置模型优化与量化功能。 |
| 3 | [siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen) | Create stunning demos for free. Open-source, no su... | TypeScript | 22.5k | 2.7k | 开源免费屏幕录制工具，替代Screen Studio。支持窗口/全屏录制、自动/手动缩放、音频录制、背景自定义、注释添加、视频裁剪与变速，适用于商业及个人用途。 |
| 4 | [block/goose](https://github.com/block/goose) | an open source, extensible AI agent that goes beyo... | Rust | 37.0k | 866 | block/goose 是一个用 Rust 编写的开源 AI 代理，可自动化代码编写、调试、流程编排及 API 交互，支持多模型配置与跨平台部署。 |
| 5 | [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | Open Source AI Platform - AI Chat with advanced fe... | Python | 25.0k | 960 | Onyx是一个开源AI平台，提供支持多种LLM的聊天界面和高级功能，如RAG、网络搜索、代码执行、深度研究及图像生成。可自托管，适用于企业级AI应用开发与集成。 |
| 6 | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 31.9k | 340 | Pi-Mono 是一个AI代理开发工具包，提供统一LLM API、多终端UI库、Slack机器人及vLLM管理工具，支持CLI、TUI和Web界面，适用于AI代理应用开发与大语言模型部署管理。 |
| 7 | [dmtrKovalenko/fff.nvim](https://github.com/dmtrKovalenko/fff.nvim) | The fastest and the most accurate file search tool... | Rust | 3.7k | 111 | fff.nvim 是一个为 AI 代理和 Neovim 设计的高性能文件搜索工具，采用 Rust 开发，提供模糊匹配、全局搜索和多关键字搜索功能。通过内置内存优化搜索结果，提升人类用户和 AI 的文件检索效率，减少 token 消耗。 |
| 8 | [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) | ... | C++ | 1.5k | 193 | LiteRT-LM是Google开源的边缘设备大语言模型推理框架，支持跨平台部署与硬件加速，具备多模态输入、函数调用及广泛模型兼容性，应用于Chrome、Pixel Watch等设备的本地生成式AI场景。 |
| 9 | [telegramdesktop/tdesktop](https://github.com/telegramdesktop/tdesktop) | Telegram Desktop messaging app... | C++ | 31.1k | 265 | Telegram Desktop是基于MTProto协议的开源即时通讯客户端，支持跨平台消息传输与加密通信，提供多系统兼容性及丰富的消息功能。 |
| 10 | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | freeCodeCamp.org's open-source codebase and curric... | TypeScript | 441.5k | 292 | freeCodeCamp.org开源代码库与课程平台，提供免费全栈开发、机器学习课程及编程认证，包含互动挑战、项目实践和多语言学习模块。 |

[查看完整数据](api/github/2026-04-05.json)
<!-- END GITHUB TRENDING -->








