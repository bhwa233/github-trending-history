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

**最后更新**: 2026-11-08 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 103.9k | 2.4k | Sherlock 是一个用 Python 编写的开源工具，用于在 400 多个社交网络上搜索用户名。支持通过 pipx、Docker 等多种方式安装，可检查单个或多个用户名，并将结果导出为文本、CSV 或 Excel 文件。支持代理、超时设置及调试模式。 |
| 2 | [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) | NVIDIA Kubernetes Engine (NVKE). A management plan... | Go | 880 | 345 | NVKE 是一个用于裸机 NVIDIA GPU 基础设施的管理平面，旨在帮助平台团队创建和操作 Kubernetes 集群。它为每个工作负载集群提供独立的控制平面、etcd 和节点池。目前处于预览阶段，支持本地快速开始和基于 NVIDIA Infra Controller (NICo) 的实际部署。 |
| 3 | [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | Open-source Grok Bot alternative with a virtual ma... | TypeScript | 18.4k | 1.4k | OpenMausBot 是一个开源的 Grok Bot 替代品，主打本地优先的 AI 代理管理。它允许用户在聊天界面中管理多个独立的 AI 代理（如 Claude、Codex），每个代理拥有独立的个性、模型和运行环境。项目支持“自带代理”模式，无需中间代理，支持 macOS、Windows 和 Ubuntu。 |
| 4 | [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | A collection of projects designed to help develope... | Python | 19.5k | 32 | 该项目是一系列基于 Claude API 的快速入门示例，包含客户支持、金融分析、计算机控制和浏览器自动化等应用。它为开发者提供了可部署的代码基础，展示了如何利用 Claude 的自然语言处理、数据分析及工具使用能力来构建 AI 应用。 |
| 5 | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Browser automation CLI for AI agents... | Rust | 47.7k | 815 | 这是一个用 Rust 编写的 CLI 工具，旨在为 AI 代理提供浏览器自动化能力。它允许代理通过命令行与网页交互，读取无障碍树，并使用引用或选择器执行操作。它通过 Chrome DevTools Protocol 控制 Chrome，非常适合需要浏览能力的 AI 智能体。 |
| 6 | [meta/astryx](https://github.com/meta/astryx) | An open source design system that's fully customiz... | TypeScript | 17.0k | 875 | Astryx 是 Meta 内部使用 8 年的开源设计系统，提供 150+ 可访问组件。它基于 StyleX 构建，支持暗黑模式与品牌级主题。核心优势在于开放内部结构、无样式锁定（兼容 Tailwind）以及专为人类和 AI 助手设计的统一 API。 |
| 7 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 189.7k | 792 | Anthropic 为 Claude AI 开发的 Agent Skills 公共仓库，包含用于动态加载的技能文件夹。这些技能旨在提高 Claude 在文档创建、数据分析及自动化等特定任务上的性能，涵盖创意、技术和企业工作流等多种场景，所有技能均为 Apache 2.0 开源。 |
| 8 | [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | Multi-Joint dynamics with Contact. A general purpo... | C++ | 16.5k | 41 | MuJoCo 是 Google DeepMind 维护的通用物理引擎，专注于多关节动力学与接触模拟。它提供高性能的仿真环境，支持 C++ 和 Python，广泛应用于机器人学、生物力学、图形学及机器学习等领域。项目包含 C API、WebAssembly 版本及 Unity 插件，旨在加速复杂结构的物理模拟研究。 |
| 9 | [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | A context-compression plugin for month-long single... | TypeScript | 5.2k | 460 | 这是一个 TypeScript 编写的上下文压缩插件，专为月级长会话设计。它能在小窗口（100k）下处理数十亿 token，实现 5 倍 token 节省。通过模型驱动的增量分层压缩技术，在 ContextBench 等基准测试中表现优异，显著降低了长期 AI 代理的运行成本。 |

[查看完整数据](api/github/2026-11-08.json)
<!-- END GITHUB TRENDING -->




