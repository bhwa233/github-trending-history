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

**最后更新**: 2026-03-18 | **成功**: 6 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | A Claude Code plugin that shows what's happening -... | JavaScript | 6.9k | 1.0k | Claude HUD是用于Claude Code的实时状态监控插件，展示上下文使用、工具活动、代理状态和待办进度。通过终端可视化面板提供项目路径、内存健康、操作日志等信息，提升代码交互透明度。 |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 96.0k | 4.1k | Superpowers是一个基于可组合技能的软件开发框架，通过代理驱动的工作流优化开发流程。它强调TDD、YAGNI和DRY原则，分阶段与用户协作，先明确需求，再制定实施计划，最后由子代理执行任务，提升开发效率和代码质量。 |
| 3 | [unslothai/unsloth](https://github.com/unslothai/unsloth) | Unified web UI for training and running open model... | Python | 55.8k | 975 | 提供统一本地界面训练和运行多类型AI模型，支持GGUF/LoRA/safetensors等格式转换，实现500+模型高效训练（2x加速/70%显存优化），集成代码执行、工具调用、多GPU训练及可视化监控功能。 |
| 4 | [newton-physics/newton](https://github.com/newton-physics/newton) | An open-source, GPU-accelerated physics simulation... | Python | 2.9k | 20 | 基于NVIDIA Warp的开源GPU物理模拟引擎，支持机器人学与仿真研究。提供GPU加速计算、OpenUSD集成、可微分特性及用户扩展能力，适用于高精度实时物理仿真场景。 |
| 5 | [shadps4-emu/shadPS4](https://github.com/shadps4-emu/shadPS4) | PlayStation 4 emulator for Windows, Linux and macO... | C++ | 29.8k | 292 | shadPS4是用C++编写的PlayStation 4模拟器，支持Windows、Linux和macOS。项目处于早期开发阶段，可运行部分游戏如《血源诅咒》和《黑暗之魂重制版》，需配合QtLauncher使用。提供跨平台游戏兼容性验证和开发讨论渠道。 |
| 6 | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | An Open-Source Asynchronous Coding Agent... | Python | 6.3k | 454 | Open SWE 是一个开源异步编码代理框架，提供云沙箱环境、子代理编排及自动PR创建功能，支持Slack/Linear集成，可定制化构建企业内部代码协作工具。 |

[查看完整数据](api/github/2026-03-18.json)
<!-- END GITHUB TRENDING -->








