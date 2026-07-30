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

**最后更新**: 2026-07-29 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [opengeos/GeoLibre](https://github.com/opengeos/GeoLibre) | A lightweight, cloud-native GIS platform for visua... | TypeScript | 4.0k | 671 | GeoLibre 是一个轻量级、开源的云原生 GIS 平台，支持在浏览器、桌面、移动端及 Jupyter 中运行。它利用 Tauri v2、React 和 MapLibre GL JS 等技术栈，提供 3D 地理空间数据可视化、探索与分析功能，支持行星地图（如月球、火星）及时间轴动画，强调数据本地化与隐私保护。 |
| 2 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 45.4k | 682 | AIRI 是一个自托管、用户拥有的 Grok 伴侣项目，灵感来源于 Neuro-sama。它旨在将 AI 娇妻/虚拟角色带入现实世界。项目支持实时语音聊天、游戏（如 Minecraft 和 Factorio）以及代码查看等功能。基于 TypeScript 开发，支持 Web、macOS 和 Windows 平台，集成了 RAG、记忆系统和 Live2D 等技术，致力于打造全能型虚拟伴侣。 |
| 3 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 235.5k | 857 | ECC 是一个 AI 代理性能优化系统，为 Claude Code、Cursor 等 AI 编码工具提供协调的工程系统。它包含 67 个代理和 281 个技能，支持计划、测试、实现、审查、验证、记忆和改进的全流程自动化。项目强调安全、上下文窗口优化和持久化记忆，帮助 AI 代理更高效、安全地编写代码。 |
| 4 | [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Build local voice agents with open-source models... | Python | 7.8k | 827 | 这是一个低延迟、全模块化的语音代理管道（VAD->STT->LLM->TTS），通过 OpenAI Realtime 兼容 WebSocket API 暴露。支持所有组件替换，可灵活对接本地或云端 LLM。该项目已在数千台 Reachy Mini 机器人上作为生产后端运行，支持完全开源的本地化部署。 |
| 5 | [1jehuang/jcode](https://github.com/1jehuang/jcode) | The most RAM efficient harness... | Rust | 13.4k | 640 | jcode 是一个用 Rust 编写的最高效的测试运行工具。它专注于极致的性能和资源效率，特别适合多会话工作流。数据显示，其内存占用远低于同类 AI 编码工具（如 Copilot CLI、Claude Code 等），单会话仅约 27.8 MB，是追求低资源消耗开发环境的理想选择。 |
| 6 | [grokability/snipe-it](https://github.com/grokability/snipe-it) | A free open source IT asset/license management sys... | PHP | 14.4k | 164 | 这是一个基于 Laravel 12 开发的免费开源 IT 资产与许可证管理系统。它帮助 IT 运营团队追踪设备（如笔记本电脑）的采购与折旧情况，并管理软件许可证。支持 Mac、Linux、Windows 及 Docker 部署，项目活跃开发中。 |
| 7 | [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | Deepfakes Software For All... | Python | 56.2k | 166 | FaceSwap 是一款基于 Python 的开源深度学习工具，旨在让用户能够轻松识别并交换图片或视频中的面部。项目提供了从提取、训练到转换的完整工作流，并包含图形用户界面（GUI）。尽管技术最初用于不当内容，但项目强调其伦理用途，致力于降低 AI 技术的使用门槛，使非专家也能通过实验学习。 |
| 8 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 51.3k | 336 | VibeVoice 是微软开源的前沿语音 AI 框架，包含 ASR（语音转文本）和 TTS（文本转语音）两大核心模型。ASR 支持长音频转录、多语言（50+）及结构化输出，TTS 提供实时流式合成与多风格语音。项目已集成 Azure AI Foundry 和 Hugging Face，支持 vLLM 加速及 BitNet 边缘推理，适用于会议记录、多语言交互等场景。 |
| 9 | [different-ai/openwork](https://github.com/different-ai/openwork) | The open-source alternative to Claude Cowork (powe... | TypeScript | 17.9k | 97 | OpenWork 是一款开源的桌面应用，旨在替代 Claude Cowork。它通过 MCP 协议，允许用户在 Codex、Claude Code、Cursor 等多个 AI 工具间共享工作流、技能和连接服务。支持跨平台，并提供管理界面供团队协作。 |
| 10 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 263.3k | 616 | Superpowers 是一个面向编码代理的技能框架和软件开发方法论。它通过可组合技能引导代理在编码前先询问用户需求，展示规格，并制定包含 TDD、YAGNI 和 DRY 的实施计划。随后，代理会自主执行子代理驱动开发，无需人工干预即可持续工作数小时。它支持多种主流 AI 编码工具。 |
| 11 | [MoonshotAI/FlashKDA](https://github.com/MoonshotAI/FlashKDA) | FlashKDA: high-performance Kimi Delta Attention ke... | Cuda | 980 | 91 | FlashKDA 是一个基于 CUTLASS 的高性能 Kimi Delta Attention 内核库。它专为 NVIDIA SM90 及以上架构优化，支持 CUDA 12.9 和 PyTorch 2.4。该项目作为 flash-linear-attention 的后端，能显著加速 Delta Attention 计算，适用于大规模 Transformer 模型的推理和训练场景。 |
| 12 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 59.1k | 154 | MediaCrawler 是一款功能强大的多平台自媒体数据采集工具，支持小红书、抖音、B站等主流平台。基于 Playwright 和 CDP 技术，无需 JS 逆向即可获取数据，支持登录态缓存、IP 代理池及评论词云图。项目包含开源版和 Pro 版，Pro 版具备断点续爬、多账号及 AI Agent 等企业级特性。 |
| 13 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Open-source & free — Battle-tested at Alibaba's sc... | Go | 16.0k | 359 | 这是一个源自阿里巴巴内部的开源 AI 代码审查 CLI 工具，基于 Go 开发。它采用确定性管道与 LLM Agent 混合架构，支持行级精准评论和内置微调规则集。相比通用 Agent，它在相同模型下具有更高的精度和 F1 分数，且 Token 消耗更少、速度更快，专为大规模代码审查设计。 |
| 14 | [paperswithbacktest/awesome-systematic-trading](https://github.com/paperswithbacktest/awesome-systematic-trading) | A curated list of awesome libraries, packages, str... | Python | 10.4k | 945 | 这是一个系统化交易（量化交易）领域的精选资源列表。项目收录了97个用于研究和实盘交易的库与包，涵盖回测、实盘交易、数据分析及机器学习等。同时整理了40多种策略、55本专业书籍及相关视频博客，旨在帮助开发者寻找、开发和运行量化交易策略。 |
| 15 | [maderix/ANE](https://github.com/maderix/ANE) | Training neural networks on Apple Neural Engine vi... | Objective-C | 7.1k | 22 | 这是一个使用逆向工程私有 API 在 Apple Neural Engine (ANE) 上训练神经网络的实验性研究项目。它绕过了 CoreML 的限制，证明了 ANE 硬件具备训练能力，但目前仅作为概念验证，存在利用率低和部分操作回退到 CPU 的局限性，不适用于生产环境。 |
| 16 | [pascalorg/editor](https://github.com/pascalorg/editor) | Create and share 3D architectural projects.... | TypeScript | 19.6k | 1.0k | 这是一个基于 React Three Fiber 和 WebGPU 构建的 3D 建筑编辑器。项目采用 Turborepo 单体仓库架构，分为核心、查看器、编辑器和节点定义等包。支持通过节点系统创建场景，提供交互式编辑工具、状态管理和撤销重做功能，旨在帮助用户创建和分享 3D 建筑项目。 |
| 17 | [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Turn any technical book PDF into a Claude Code ski... | Python | 12.7k | 1.4k | 该项目是一个 Python 工具，可将技术书籍 PDF 转换为 Claude Code 或 Copilot CLI 可用的 Agent Skill。它将书籍提炼为结构化知识（框架、决策规则），而非摘要，大幅减少 Token 消耗。用户可按需加载书籍内容，避免 AI 幻觉，提升工作流效率。 |

[查看完整数据](api/github/2026-07-29.json)
<!-- END GITHUB TRENDING -->




