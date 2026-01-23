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

**最后更新**: 2026-01-23 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | 🎥 Make videos programmatically with React... | TypeScript | 28.4k | 1.6k | Remotion是基于React的程序化视频生成工具，允许开发者通过组件化方式构建动态视频内容。支持TypeScript，提供动画渲染、视频合成等功能，适用于自动化视频生成场景。 |
| 2 | [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Open-Source Frontier Voice AI... | Python | 21.2k | 257 | VibeVoice是微软开源的语音AI项目，包含TTS和ASR模型。核心创新为7.5Hz超低帧率语音分词器与扩散框架，支持60分钟长音频结构化转录及实时多语言语音合成，采用LLM增强上下文理解。 |
| 3 | [block/goose](https://github.com/block/goose) | an open source, extensible AI agent that goes beyo... | Rust | 27.6k | 492 | block/goose是一个用Rust开发的开源AI代理，能够自动化代码开发、测试和工程流程。它支持多种LLM，可执行项目构建、代码编写、调试及API交互，适用于快速原型设计和复杂工程管理。 |
| 4 | [ai-dynamo/dynamo](https://github.com/ai-dynamo/dynamo) | A Datacenter Scale Distributed Inference Serving F... | Rust | 5.9k | 29 | NVIDIA Dynamo是一款面向生成式AI和推理模型的分布式推理框架，支持多节点大规模部署。通过拆分预填充与解码、动态GPU调度、KV缓存优化等技术，提升GPU利用率并降低延迟，兼容TRT-LLM、vLLM等主流框架。 |
| 5 | [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 Make websites accessible for AI agents. Automat... | Python | 76.4k | 210 | 提供AI代理浏览器自动化框架，支持网页任务自动化与数据提取，集成云服务和LLM快速启动，简化浏览器控制与代理部署。 |
| 6 | [github/copilot-cli](https://github.com/github/copilot-cli) | GitHub Copilot CLI brings the power of Copilot cod... | Shell | 7.2k | 114 | GitHub Copilot CLI 是一款在终端中集成 AI 编码辅助的工具，支持本地开发、GitHub 无缝集成和代理功能，提供代码构建、调试、重构等智能协助，用户可自定义扩展并完全控制操作流程。 |
| 7 | [Asabeneh/30-Days-Of-Python](https://github.com/Asabeneh/30-Days-Of-Python) | The 30 Days of Python programming challenge is a s... | Python | 56.3k | 87 | 30 Days Of Python 是一个为期30天的Python编程学习项目，提供每日教程、代码示例和练习题，涵盖基础语法、数据类型及编程概念。项目包含中文和葡萄牙语资源，支持自主学习节奏，并附有赞助信息和学习社群链接。 |
| 8 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 59.9k | 498 | Claude Code是一个终端内的代理编码工具，通过自然语言命令执行代码任务、解释代码逻辑、管理Git工作流，支持多平台安装。项目包含插件系统扩展功能，注重用户数据隐私保护。 |
| 9 | [deepseek-ai/FlashMLA](https://github.com/deepseek-ai/FlashMLA) | FlashMLA: Efficient Multi-head Latent Attention Ke... | C++ | 12.3k | 184 | FlashMLA是DeepSeek优化的多头潜在注意力内核库，支持稀疏与密集注意力机制，提升模型预填充和解码阶段性能。采用FP8 KV缓存和bfloat16矩阵乘法，实现高达660 TFLOPS的计算效率，适配NVIDIA H800 GPU。 |
| 10 | [microsoft/Data-Science-For-Beginners](https://github.com/microsoft/Data-Science-For-Beginners) | 10 Weeks, 20 Lessons, Data Science for All!... | Jupyter Notebook | 33.3k | 556 | 微软推出的10周20课数据科学入门课程，采用项目驱动教学法，每课包含测验、操作指南、解决方案和作业，帮助初学者通过实践掌握数据科学技能。支持多语言翻译，适合零基础学习者系统学习数据科学。 |
| 11 | [OpenBMB/UltraRAG](https://github.com/OpenBMB/UltraRAG) | UltraRAG v3: A Low-Code MCP Framework for Building... | Python | 2.9k | 116 | UltraRAG v3是基于MCP架构的低代码RAG开发框架，通过标准化Retriever、Generation等组件为MCP服务器，结合YAML配置实现复杂流水线的快速构建，降低研发门槛并提升部署效率。 |
| 12 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 8.6k | 453 | AirLLM优化大语言模型推理内存占用，支持70B参数模型在单4GB GPU运行，无需量化/剪枝。可运行405B Llama3.1于8GB显存，并兼容CPU推理与多种模型架构。 |
| 13 | [KellerJordan/modded-nanogpt](https://github.com/KellerJordan/modded-nanogpt) | NanoGPT (124M) in 2 minutes... | Python | 4.4k | 52 | 该项目通过优化算法和架构，在8张NVIDIA H100 GPU上实现NanoGPT模型的快速训练，将训练时间从45分钟缩短至100秒以内，达到3.28验证损失目标。采用旋转位置编码、Muon优化器、FP8精度计算等技术提升效率。 |

[查看完整数据](api/github/2026-01-23.json)
<!-- END GITHUB TRENDING -->








