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

**最后更新**: 2026-10-12 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app be... | TypeScript | 165.1k | 45.3k | REA 是一个连接 AI 代理与逆向工程工具的 TypeScript 框架。它允许用户在不获取源代码的情况下分析应用行为，解释功能，展示证据并构建类似功能。支持原生二进制、JS/Electron、.NET 和网站分析，本地运行。 |
| 2 | [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | A spy satellite simulator in your browser, except ... | JavaScript | 53.9k | 1.9k | 这是一个基于浏览器的间谍卫星模拟器，利用真实公开数据提供逼真的3D地球视图。支持实时追踪航班、船只、卫星及摄像头，具备语音控制功能。项目无需API密钥即可本地运行，允许用户像在驾驶舱一样探索全球实时空间情报。 |
| 3 | [mksglu/context-mode](https://github.com/mksglu/context-mode) | Context window optimization for AI coding agents. ... | TypeScript | 27.4k | 246 | 这是一个针对 AI 编码代理的上下文窗口优化 MCP 服务器。它通过沙箱化工具输出（减少 98% 数据）、SQLite + FTS5 索引持久化会话记忆，以及强制 LLM 采用“代码思维”（编写脚本处理数据而非读取文件）来解决问题。适用于需要长对话、复杂文件分析及保持上下文连续性的 AI 编码场景。 |
| 4 | [storytold/artcraft](https://github.com/storytold/artcraft) | ArtCraft is an intentional crafting engine for art... | Rust | 22.5k | 4.1k | ArtCraft 是一个专为艺术家设计的交互式 AI 图像和视频创作 IDE。它支持 2D/3D 合成、图像转 3D 网格、角色姿势调整及场景预览等功能。用户可以通过文本提示快速生成，再利用画布和场景工具进行精细打磨，实现从创意到精准成品的可视化创作流程。 |
| 5 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | User-friendly AI Interface (Supports Ollama, OpenA... | Python | 155.2k | 157 | Open WebUI 是一个自托管、功能丰富的 AI 平台，支持 Ollama 和 OpenAI 兼容 API。它提供用户友好的界面，具备细粒度 RBAC 权限管理、插件扩展、智能体构建及终端执行能力，支持本地与云端模型无缝切换，适合构建私有化 AI 办公环境。 |
| 6 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram design for Claude Code, Codex, G... | HTML | 52.8k | 2.1k | 这是一个专为 AI 编程助手设计的自包含图表生成 Agent Skill，支持 45 种图表类型。用户可通过自然语言指令生成 HTML 和 SVG 文件，并支持自定义品牌风格（字体、调色板），无需依赖 Mermaid。 |
| 7 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 2.8T LLM inference with single 4GB GPU... | Jupyter Notebook | 37.6k | 879 | AirLLM 是一个 Jupyter Notebook 项目，旨在大幅降低大语言模型推理内存占用。它支持在单张 4GB 显存 GPU 上运行 70B 甚至 2.8T 的超大模型，无需量化或剪枝。此外，项目还支持在低显存环境下进行大规模模型训练。 |
| 8 | [microsoft/BitNet](https://github.com/microsoft/BitNet) | Official inference framework for 1-bit LLMs... | C++ | 41.0k | 97 | bitnet.cpp 是微软推出的 1-bit LLM 官方推理框架。它支持 CPU 和 GPU 加速，提供优化内核以实现无损推理。相比全精度模型，它在 x86 和 ARM CPU 上分别实现了 2.37x 到 6.17x 的加速，并大幅降低能耗。项目包含 BitNet-b1.58-2B-4T 等模型，能在单 CPU 上运行 100B 模型，显著提升本地设备运行大模型的潜力。 |
| 9 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Use Claude Code, Codex, VSCode, Pi, and OpenCode (... | Python | 59.3k | 626 | 这是一个开源项目，允许用户通过终端、IDE或浏览器免费使用Claude Code、Codex等多种AI编程工具。它聚合了61个合规提供商，提供每月13亿+免费令牌。支持11种编码代理，具备令牌优化、浏览器原生会话、语音输入等功能，旨在降低开发成本并提高效率。 |

[查看完整数据](api/github/2026-10-12.json)
<!-- END GITHUB TRENDING -->




