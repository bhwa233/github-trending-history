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

**最后更新**: 2026-02-23 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 120.5k | 2.4k | 该项目收集了30余种AI开发工具的系统提示、内部工具及模型配置，包含超3万行代码分析，涵盖AI代码辅助、开发工具链及模型结构等技术内容，提供安全建议与开源资源支持。 |
| 2 | [huggingface/skills](https://github.com/huggingface/skills) | ... | Python | 3.8k | 1.5k | Hugging Face Skills 提供标准化的AI/ML任务定义模板，支持多平台编码代理工具。通过自包含文件夹封装任务指令、脚本和资源，兼容Claude Code、Codex、Gemini等工具，提升跨平台开发效率。 |
| 3 | [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Financial data platform for analysts, quants and A... | Python | 61.4k | 471 | OpenBB-finance/OpenBB 是面向金融分析师、量化研究员和AI代理的开源数据平台，提供多源数据整合与统一访问接口。支持Python库、Workspace可视化界面及REST API，实现数据「连接一次，随处消费」的架构设计。 |
| 4 | [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | A comprehensive collection of Agent Skills for con... | Python | 8.9k | 147 | 该项目提供一套系统化的智能体上下文工程技能，聚焦于多智能体架构和生产级AI系统中的上下文管理。包含基础技能、退化模式识别、上下文压缩等模块，旨在通过优化上下文信息提升智能体决策效果，适用于需要处理复杂上下文交互的AI系统开发。 |
| 5 | [f/prompts.chat](https://github.com/f/prompts.chat) | a.k.a. Awesome ChatGPT Prompts. Share, discover, a... | HTML | 147.0k | 293 | f/prompts.chat 是一个支持多AI模型的开源提示库，提供提示共享、发现与收集功能。包含交互式学习书籍、儿童游戏化教程及自托管部署方案，适用于企业私有化部署与AI教学场景。 |
| 6 | [CompVis/stable-diffusion](https://github.com/CompVis/stable-diffusion) | A latent text-to-image diffusion model... | Jupyter Notebook | 72.5k | 55 | Stable Diffusion是基于扩散模型的文本到图像生成系统，采用潜在空间优化技术。使用CLIP文本编码器和UNet架构，在512x512分辨率下生成高质量图像，支持GPU加速推理。项目包含完整训练流程和模型权重，适用于AI艺术创作与图像生成场景。 |
| 7 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 1.9k | 465 | GitNexus 是一个浏览器端代码知识图谱工具，通过本地分析生成代码依赖、调用链等关系图谱，并提供AI代理分析能力，支持隐私保护的代码探索与智能分析。 |
| 8 | [Stremio/stremio-web](https://github.com/Stremio/stremio-web) | Stremio - Freedom to Stream... | JavaScript | 9.9k | 273 | Stremio-web 是一个现代媒体中心应用，提供视频内容发现、播放与管理功能，支持通过插件扩展功能，整合多源视频资源。 |
| 9 | [stan-smith/FossFLOW](https://github.com/stan-smith/FossFLOW) | Make beautiful isometric infrastructure diagrams... | TypeScript | 18.5k | 431 | FossFLOW 是一个开源的等轴测图绘工具，基于 React 和 Isoflow 库构建的 PWA 应用，支持浏览器运行与离线使用。提供可视化界面用于创建基础设施架构图，采用 Monorepo 结构管理代码，适用于网络拓扑与系统设计的可视化表达。 |
| 10 | [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 📑 PageIndex: Document Index for Vectorless, Reaso... | Python | 16.7k | 552 | PageIndex是一款无需向量数据库和分块处理的推理型RAG系统，通过构建文档结构树索引并利用LLM进行推理检索，模拟人类专家的文档分析流程，提升长文档检索的准确性与上下文关联性。 |
| 11 | [cloudflare/agents](https://github.com/cloudflare/agents) | Build and deploy AI Agents on Cloudflare... | TypeScript | 4.0k | 313 | Cloudflare Agents 是基于 Durable Objects 的 AI 代理框架，支持持久化状态、实时通信和按需扩展。开发者可通过 TypeScript 构建可部署的智能代理，适用于需要状态管理的实时应用场景。 |
| 12 | [siteboon/claudecodeui](https://github.com/siteboon/claudecodeui) | Use Claude Code, Cursor CLI or Codex on mobile and... | JavaScript | 6.6k | 46 | 提供Claude Code、Cursor CLI和Codex的跨平台图形界面，支持远程会话管理、文件编辑、Git操作及AI任务集成，具备响应式设计和终端访问功能。 |
| 13 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like openclaw (mo... | Python | 10.1k | 121 | memU是面向24/7主动代理的内存框架，通过文件系统结构化管理记忆数据，降低LLM token成本。支持长期运行、用户意图预测与主动行为，具备知识图谱构建和跨记忆关联功能，适用于需要持续在线的智能代理系统。 |
| 14 | [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) | A modern GUI client based on Tauri, designed to ru... | TypeScript | 98.2k | 156 | 跨平台Clash代理GUI客户端，基于Tauri和Rust构建，支持Windows/macOS/Linux。提供可视化配置管理、主题自定义、系统代理设置、TUN模式及多语言支持，集成Clash.Meta内核与脚本扩展功能。 |

[查看完整数据](api/github/2026-02-23.json)
<!-- END GITHUB TRENDING -->








