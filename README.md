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

**最后更新**: 2026-09-28 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | VoiceStudio is the open-source, fully-local Eleven... | Python | 44.4k | 3.2k | VoiceStudio 是一个开源的本地化 ElevenLabs 替代品，支持语音克隆、语音设计、视频配音、听写、转录及有声书创作，覆盖 646 种语言。它提供本地 API 和 MCP 支持，允许用户在本地硬件上运行工作流，适合需要隐私保护和本地部署的语音处理场景。 |
| 2 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | The open-source app everyone uses to manage agents... | TypeScript | 93.0k | 3.2k | Paperclip 是一个开源的 AI 代理编排平台，基于 Node.js 和 React 构建。它将 AI 代理视为公司员工，提供任务管理、预算控制和审计功能，帮助用户协调多个 AI 代理以实现业务目标。它旨在管理自主 AI 组织，提供类似任务管理器的界面来监控工作流和成本。 |
| 3 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Hindsight: Agent Memory That Learns... | Python | 41.1k | 4.6k | Hindsight 是一个专注于让智能体‘学习’而非仅仅‘记住’的记忆系统。它通过消除 RAG 和知识图谱的局限性，在长时记忆任务中实现了最先进的性能，被 Fortune 500 企业和 AI 初创公司广泛采用。 |
| 4 | [NawfalMotii79/PLFM_RADAR](https://github.com/NawfalMotii79/PLFM_RADAR) | Open-source, low-cost 10.5 GHz PLFM phased array R... | PLSQL | 25.8k | 158 | AERIS-10 是一款开源、低成本的 10.5 GHz 相控阵雷达系统，采用脉冲线性调频（LFM）调制。它提供 3km 和 20km 两种版本，具备电子波束控制、FPGA 信号处理（脉冲压缩、多普勒处理）及 Python GUI 界面，旨在为研究人员和爱好者提供模块化、可定制的雷达实验平台。 |
| 5 | [cs341-illinois/coursebook](https://github.com/cs341-illinois/coursebook) | Open Source Introductory Systems Programming Textb... | TeX | 2.6k | 195 | 这是一个由伊利诺伊大学开发的系统编程开源教材，旨在改进原始维基教科书的质量。教材使用 C 语言编写，包含引用、脚注和词汇表，支持自动构建并导出为 PDF、Markdown 和 HTML 格式，适合 CS 341 课程使用。 |
| 6 | [byoungd/up](https://github.com/byoungd/up) | An advanced guide which might benefit you a lot 🎉... | JavaScript | 64.8k | 327 | 这是一个面向普通人的《人生进阶指南》项目，旨在AI时代通过英语学习、AI协作与真实项目实践实现终身成长。作者韩先凯分享了从基础能力到创业复盘的完整方法论，强调保留个人判断、完成真实任务并保存证据，适合希望利用AI工具加速自我提升与职业发展的学习者。 |
| 7 | [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | Multi-agent harness that runs Claude Code and Code... | TypeScript | 1.8k | 734 | OpenRig 是一个多代理框架，将 Claude Code 和 Codex 整合为一个统一的系统。它允许用户通过 YAML 定义代理团队，通过一个命令启动，将杂乱的终端会话转变为持久、有序的 AI 编码团队。用户可以与主管代理协作以获得结果，协调专家并保持上下文。 |
| 8 | [dream-num/univer](https://github.com/dream-num/univer) | The Office Harness for AI Agents — Spreadsheets, D... | TypeScript | 21.3k | 1.1k | Univer 是一个开源 SDK，用于在产品内部构建办公应用。它支持电子表格、文档、演示文稿等多种格式，提供高性能、可定制的办公体验。具备插件架构、公式引擎和跨平台（浏览器/Node.js）能力，适用于 SaaS、BI 和 AI 应用，旨在打造协作式生产力平台。 |

[查看完整数据](api/github/2026-09-28.json)
<!-- END GITHUB TRENDING -->




