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

**最后更新**: 2026-04-04 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Blaizzy/mlx-vlm](https://github.com/Blaizzy/mlx-vlm) | MLX-VLM is a package for inference and fine-tuning... | Python | 3.6k | 316 | MLX-VLM是基于MLX框架的视觉语言模型推理与微调工具，支持图像、音频、视频多模态输入。提供CLI和Gradio界面，兼容多种模型如Qwen2-VL、Phi-4等，具备量化优化、视觉缓存及多图像交互功能，适用于Mac端本地化部署与模型调优。 |
| 2 | [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | Open Source AI Platform - AI Chat with advanced fe... | Python | 24.2k | 1.2k | Onyx是一个开源AI平台，提供基于LLM的高级功能如RAG、网络搜索、代码执行和深度研究，支持自托管及多种LLM提供商，具备灵活部署模式和丰富的交互能力。 |
| 3 | [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | OmX - Oh My codeX: Your codex is not alone. Add ho... | TypeScript | 15.6k | 1.8k | Oh My Codex (OMX) 是 OpenAI Codex 的工作流增强工具，通过预设命令（如 $deep-interview、$ralplan）和项目状态管理（.omx/ 目录）优化代码开发流程，支持代理协作与持久化工作流，提升 Codex 的运行效率与结构化管理。 |
| 4 | [siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen) | Create stunning demos for free. Open-source, no su... | TypeScript | 19.6k | 1.6k | OpenScreen是一款免费开源的屏幕录制工具，提供全屏/窗口录制、智能缩放、音频捕获、背景自定义、注释添加、视频剪辑和多格式导出功能，旨在替代付费工具Screen Studio，适合需要制作产品演示和教程的用户。 |
| 5 | [telegramdesktop/tdesktop](https://github.com/telegramdesktop/tdesktop) | Telegram Desktop messaging app... | C++ | 30.8k | 282 | Telegram Desktop是基于MTProto协议的开源即时通讯客户端，支持多平台部署。采用C++开发，集成Qt框架实现跨平台界面，包含消息加密、文件传输等核心功能，提供多种构建方式满足不同系统需求。 |
| 6 | [block/goose](https://github.com/block/goose) | an open source, extensible AI agent that goes beyo... | Rust | 35.7k | 947 | block/goose 是一个用 Rust 编写的开源 AI 代理，可自动化开发流程。它支持代码生成、调试、工作流编排及外部 API 交互，兼容任意 LLM 并提供 CLI 和桌面应用，提升工程效率。 |
| 7 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | A framework for building, orchestrating and deploy... | Python | 8.7k | 66 | 微软开源的AI代理框架，支持Python和.NET，提供多代理工作流编排、图数据流处理、可观测性集成及跨语言API一致性，适用于复杂AI应用开发与部署。 |
| 8 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 79.3k | 993 | Sherlock-project/sherlock 是一个基于Python的社交账号搜索工具，可通过用户名在400+社交平台中定位对应账户。支持多用户批量查询、结果文件存储、参数配置及多种输出格式，适用于快速跨平台账号溯源。 |

[查看完整数据](api/github/2026-04-04.json)
<!-- END GITHUB TRENDING -->








