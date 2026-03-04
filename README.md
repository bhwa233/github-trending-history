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

**最后更新**: 2026-03-04 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Fully autonomous AI hacker to find actual exploits... | TypeScript | 30.2k | 1.8k | Shannon是Keygraph开发的AI驱动白盒渗透测试工具，通过源代码分析和实时漏洞利用自动检测Web应用及API的安全缺陷，支持注入攻击、XSS等20+类漏洞识别，提供按需自动化安全测试解决方案。 |
| 2 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | - | 5.4k | 2.2k | 提供多种AI代理模板的集合项目，涵盖前端开发、后端架构、移动应用开发及AI工程等领域，每个代理具备专业化技能和个性化流程，可直接使用或参考优化工作流。 |
| 3 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 843 | 368 | Trivy是用Go编写的全面安全扫描工具，支持容器、Kubernetes、代码仓库等目标，可检测漏洞、配置错误、敏感信息及SBOM。具备多平台覆盖和多样化扫描器，适用于DevSecOps场景。 |
| 4 | [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | A set of ready to use Agent Skills for research, s... | Python | 12.7k | 926 | 提供170+科学技能集合，支持AI代理执行生物信息学、化学信息学、临床研究等多领域复杂科研工作流，提升AI在基因组学、药物发现、医学影像等场景的可靠性与效率。 |
| 5 | [CodebuffAI/codebuff](https://github.com/CodebuffAI/codebuff) | Generate code from the terminal!... | TypeScript | 3.6k | 337 | Codebuff是基于TypeScript的开源AI编码助手，通过多代理协作实现自然语言指令下的代码库编辑。利用File Picker、Planner、Editor等代理，提升代码修改准确性与效率，支持终端环境下的自动化代码生成与维护。 |
| 6 | [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | ReMe: Memory Management Kit for Agents - Remember ... | Python | 1.6k | 346 | ReMe是面向AI代理的记忆管理系统，提供文件和向量两种记忆存储方案。解决长对话上下文丢失和会话无状态问题，支持自动压缩历史记录、关键信息持久化及跨会话记忆继承，包含ReMeLight模块实现文件存储与嵌入缓存管理。 |
| 7 | [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | OpenSandbox is a general-purpose sandbox platform ... | Python | 6.0k | 745 | OpenSandbox是阿里巴巴开源的AI应用通用沙盒平台，支持多语言SDK和统一API，集成Docker/Kubernetes运行时，适用于代码执行、代理评估、强化学习等场景。 |
| 8 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 14.2k | 217 | MoneyPrinter V2 是自动化在线赚钱工具，包含Twitter/YouTube自动化、联盟营销及企业冷拓功能。采用模块化设计，支持定时任务，需Python 3.12运行。 |
| 9 | [ItzCrazyKns/Perplexica](https://github.com/ItzCrazyKns/Perplexica) | Perplexica is an AI-powered answering engine.... | TypeScript | 30.8k | 1.1k | Perplexica是隐私优先的AI问答引擎，支持本地硬件部署。整合Ollama本地模型与OpenAI等云端服务，提供多模式搜索（速速/平衡/质量），支持网页、学术论文等多源检索，具备文件上传、历史记录及智能建议功能。 |
| 10 | [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | Build and run agents you can see, understand and t... | Python | 17.4k | 419 | AgentScope是面向生产环境的AI代理框架，支持快速构建可信赖的智能代理。提供ReAct代理、实时语音、多代理协作、记忆模块、工具集成及模型微调等功能，强调易用性与可扩展性。 |
| 11 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 24.6k | 1.8k | Airi 是一个自托管的AI虚拟伴侣项目，旨在复现Neuro-sama的多模态交互能力，支持实时语音聊天、Minecraft/Factorio游戏互动，跨平台（Web/macOS/Windows）部署，强调用户数据主权与开源协作。 |
| 12 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | A high-performance algorithmic trading platform an... | Rust | 20.7k | 75 | NautilusTrader是高性能算法交易平台，支持策略回测与实时交易，采用Rust开发确保高并发安全性，兼容Python生态，覆盖多资产类别及高频交易场景。 |
| 13 | [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | Build AI Agents, Visually... | TypeScript | 50.0k | 130 | Flowise 是一个可视化AI代理构建工具，支持通过拖拽节点快速设计AI工作流，集成第三方服务并提供API文档。项目包含前端、后端及节点模块，便于开发者扩展和部署。 |

[查看完整数据](api/github/2026-03-04.json)
<!-- END GITHUB TRENDING -->








