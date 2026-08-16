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

**最后更新**: 2026-08-16 | **成功**: 7 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cordiverse/cordis](https://github.com/cordiverse/cordis) | Meta-Framework of Spatiotemporal Composability... | TypeScript | 4.7k | 719 | 这是一个专注于时空组合性的元框架，旨在提供灵活的组件组合能力。项目采用 TypeScript 开发，具备完善的 CI/CD 流程和测试覆盖，支持模块化架构，适合需要高度可组合性和时间/空间维度管理的复杂应用开发。 |
| 2 | [basecamp/omarchy](https://github.com/basecamp/omarchy) | Beautiful, Modern & Opinionated Linux... | Shell | 25.4k | 225 | 这是一个基于 Shell 的现代化 Linux 配置管理脚本。它提供了一套“有观点”的系统设置方案，旨在打造美观且高效的 Linux 体验。项目包含应用安装、主题配置、自动化脚本及迁移工具，帮助用户快速标准化 Linux 工作站。 |
| 3 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Local UI to run and train LLMs and diffusion model... | Python | 72.5k | 580 | Unsloth 是一款本地桌面应用，用于运行和训练各类 AI 模型（如 LLM 和扩散模型）。它支持多种硬件平台，训练速度更快且显存占用更低。功能包括模型微调、RAG 搜索、图像视频处理及远程访问，并提供 OpenAI 兼容 API。 |
| 4 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) | The open-source CapCut alternative... | TypeScript | 83.9k | 134 | OpenCut 是一个开源的视频编辑器，旨在成为 CapCut 的免费替代品。目前项目正在进行从零开始的全面重写，采用 Rust 核心和 TypeScript 前端。新版本支持跨平台（桌面、移动、浏览器），具备插件架构、MCP 服务器（AI 代理集成）、Headless 模式及内置脚本功能，致力于提供强大的自动化和第三方扩展能力。 |
| 5 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 461.7k | 1.6k | 这是一个极受欢迎的开源项目，旨在收集整理互联网上所有免费可用的 API 接口。它涵盖了多种分类，方便开发者快速查找和测试资源，拥有极高的社区关注度。 |
| 6 | [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | ToolJet is the open-source foundation of ToolJet A... | JavaScript | 40.0k | 446 | ToolJet 是一个开源的低代码平台，用于构建内部工具、工作流和 AI 代理。它提供可视化拖拽构建器、内置数据库和 80+ 数据源集成。社区版支持 JavaScript/Python 代码执行，企业版 ToolJet AI 则提供 AI 应用生成和智能调试功能，支持自托管和多种部署方式。 |
| 7 | [cactus-compute/needle](https://github.com/cactus-compute/needle) | 14MB foundation model for tiny devices; phones, we... | Python | 6.5k | 447 | Needle 2 是一个专为边缘设备设计的超轻量级大模型，仅 14MB，运行内存约 28MB。它支持工具调用、设备使用及结构化提取，具备置信度门控、工具检索和有界内存等特性。相比同类模型体积更小（5x-70x），性能相当，适合手机、可穿戴设备及机器人等场景。 |

[查看完整数据](api/github/2026-08-16.json)
<!-- END GITHUB TRENDING -->




