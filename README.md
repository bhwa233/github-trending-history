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

**最后更新**: 2026-04-08 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | ... | - | 8.9k | 686 | 该项目基于Andrej Karpathy对LLM编码问题的观察，提出四个原则优化Claude代码生成质量。包含Think Before Coding、Simplicity First、Surgical Changes和Goal-Driven Execution四条指南，解决模型错误假设、过度复杂化和冗余抽象等问题，通过明确推理、保持代码简洁、精准修改和目标驱动执行提升代码可靠性。 |
| 2 | [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | A specialized Claude Code workspace for creating l... | Python | 4.6k | 645 | SEO Machine是基于Claude Code的Python工具，提供SEO优化博客内容全流程解决方案，包含关键词分析、内容优化、数据集成等功能，支持自动化研究、写作及性能评估。 |
| 3 | [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) | A gallery that showcases on-device ML/GenAI use ca... | Kotlin | 19.5k | 853 | Google AI Edge Gallery 是一款展示本地设备生成式AI能力的应用，支持离线运行大语言模型（如Gemma 4），提供多模态交互功能。核心功能包括AI对话推理、图像识别、语音转录、提示调试及模块化技能扩展，强调隐私安全与高性能计算。 |
| 4 | [NVIDIA/personaplex](https://github.com/NVIDIA/personaplex) | PersonaPlex code.... | Python | 8.4k | 589 | PersonaPlex是基于Moshi架构的实时全双工语音对话模型，支持文本角色提示和音频语音条件控制，可生成自然低延迟的对话响应，适用于需要个性化语音交互的场景。 |
| 5 | [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) | ... | C++ | 3.0k | 500 | LiteRT-LM是Google开源的边缘设备大语言模型推理框架，支持跨平台部署与硬件加速，具备多模态输入和函数调用能力，适配Gemma、Llama等主流模型，已应用于Chrome、Pixel Watch等产品。 |
| 6 | [elebumm/RedditVideoMakerBot](https://github.com/elebumm/RedditVideoMakerBot) | Create Reddit Videos with just✨ one command ✨... | Python | 10.5k | 572 | Reddit视频生成工具，通过Python自动化抓取Reddit内容并生成视频，无需手动编辑。支持命令行一键操作，生成的视频需手动上传以规避合规风险。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 141.4k | 2.2k | Superpowers 是一个基于可组合技能的软件开发代理框架，通过自动化工作流提升编码效率。它通过需求分解、TDD驱动开发和子代理协作，实现从设计到落地的全流程自动化，降低人工干预需求。 |
| 8 | [newton-physics/newton](https://github.com/newton-physics/newton) | An open-source, GPU-accelerated physics simulation... | Python | 4.1k | 67 | Newton是基于NVIDIA Warp的GPU加速物理模拟引擎，支持机器人学与模拟研究。提供OpenUSD集成、可微分计算及用户扩展功能，兼容MuJoCo Warp后端，提升仿真效率与可扩展性。 |
| 9 | [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | GitNexus: The Zero-Server Code Intelligence Engine... | TypeScript | 25.3k | 981 | GitNexus 是一个浏览器端代码知识图谱工具，通过本地化处理GitHub仓库或ZIP文件，构建包含依赖关系、调用链等信息的交互式知识图谱，并集成Graph RAG代理实现代码分析。支持CLI和Web UI两种使用方式，强调隐私和本地化处理。 |
| 10 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 50.7k | 123 | 该项目是AI驱动的对冲基金原型，整合多策略投资代理（如价值投资、成长投资、风险分析等），通过估值、情绪、基本面及技术分析生成交易信号，但明确标注仅用于教育场景，不进行实际交易。 |
| 11 | [goharbor/harbor](https://github.com/goharbor/harbor) | An open source trusted cloud native registry proje... | Go | 28.1k | 23 | Harbor是云原生容器注册表，提供镜像存储、签名验证、漏洞扫描及基于策略的跨集群复制，支持RBAC和多项目管理，增强容器镜像安全性与管理效率。 |

[查看完整数据](api/github/2026-04-08.json)
<!-- END GITHUB TRENDING -->








