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

**最后更新**: 2026-03-05 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | - | 7.3k | 1.5k | 提供多种AI代理角色，涵盖前端开发、后端架构、移动应用和AI工程等领域，每个代理具备专业技能和个性化流程，可直接调用或参考实现高效开发。 |
| 2 | [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | A specialized Claude Code workspace for creating l... | Python | 1.6k | 371 | SEO Machine 是基于 Claude Code 的专业 SEO 内容生成工具，提供从关键词研究、内容创作到数据分析的全流程自动化。内置 26 项营销技能和 advanced SEO 分析功能，支持 Google Analytics、DataForSEO 等数据集成，可生成符合品牌调性的优化内容。 |
| 3 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Shannon Lite is a fully autonomous AI pentester fo... | TypeScript | 31.8k | 2.9k | Shannon是Keygraph开发的AI驱动型白盒渗透测试工具，通过源代码分析和实时漏洞利用自动检测Web应用及API的安全缺陷，支持注入攻击、XSS等漏洞的自动化验证，提供按需安全测试以填补传统渗透测试周期长的空白。 |
| 4 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 32.9k | 297 | Trivy是多功能安全扫描工具，支持容器、文件系统、Kubernetes等多目标，可检测漏洞、配置错误、敏感信息及SBOM。基于Go语言开发，提供CLI和集成方案，适用于云原生环境安全检测。 |
| 5 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 27.3k | 3.0k | Airi 是一个自托管的AI虚拟角色项目，旨在复刻Neuro-sama功能，支持实时语音聊天、游戏互动（如Minecraft和Factorio），并提供跨平台客户端。项目强调用户数据所有权和可定制性。 |
| 6 | [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) | Lightning-Fast RL for LLM Reasoning and Agents. Ma... | Python | 4.1k | 161 | AReaL是一个高性能的异步强化学习系统，专为大型语言模型推理和智能体训练设计。支持灵活定制代理RL和在线RL，具备行业领先的训练速度与稳定性，适用于数学、编码、搜索等复杂任务，提供完整开源工具链加速AI代理开发。 |
| 7 | [microsoft/mcp-for-beginners](https://github.com/microsoft/mcp-for-beginners) | This open-source curriculum introduces the fundame... | Jupyter Notebook | 14.9k | 122 | 微软开源的MCP入门课程，通过Jupyter Notebook提供跨语言AI工作流示例，涵盖C#、Java、JavaScript、Rust、Python等语言，强调模块化、可扩展的AI系统开发。 |
| 8 | [CodebuffAI/codebuff](https://github.com/CodebuffAI/codebuff) | Generate code from the terminal!... | TypeScript | 3.9k | 275 | Codebuff 是一个基于自然语言指令的AI代码编辑工具，采用多代理协作架构实现精准代码修改。通过文件选择器、规划器、编辑器等专用代理协同工作，支持终端直接生成代码、修复漏洞、重构等功能，提升开发效率并减少错误。 |
| 9 | [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | Automate the process of making money online.... | Python | 14.7k | 511 | MoneyPrinterV2 是一个自动化在线赚钱工具，支持Twitter机器人、YouTube Shorts自动化、联盟营销（Amazon+Twitter）及本地企业冷触达功能。采用模块化设计，集成CRON任务调度，提供多语言支持和可扩展的社区版本生态。 |
| 10 | [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | ReMe: Memory Management Kit for Agents - Remember ... | Python | 1.8k | 195 | ReMe是面向AI代理的内存管理工具包，解决上下文窗口限制和无状态会话问题。提供文件型与向量型内存系统，支持记忆持久化、自动压缩历史、跨会话记忆继承，适用于需要长期上下文管理的智能代理场景。 |
| 11 | [microsoft/hve-core](https://github.com/microsoft/hve-core) | A refined collection of Hypervelocity Engineering ... | PowerShell | 290 | 6 | HVE Core是微软推出的GitHub Copilot专用提示工程框架，通过约束式AI工作流、结构化RPI方法论和JSON验证机制，实现从研究到实施的全流程自动化。提供可复用的指令集、代理模板和验证工具，提升团队协作与代码可靠性。 |

[查看完整数据](api/github/2026-03-05.json)
<!-- END GITHUB TRENDING -->








