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

**最后更新**: 2026-03-03 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [ruvnet/RuView](https://github.com/ruvnet/RuView) | π RuView: WiFi DensePose turns commodity WiFi sign... | Rust | 25.2k | 4.6k | RuView通过分析WiFi信道状态信息(CSI)实现无接触人体姿态估计、呼吸心跳监测及穿墙存在检测，采用Rust开发高性能边缘计算模块，支持ESP32硬件实时处理，无需互联网与视频数据。 |
| 2 | [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | A set of ready to use Agent Skills for research, s... | Python | 11.9k | 790 | 提供170+跨学科科学技能库，支持生物信息学、化学信息学、临床研究等领域的AI代理执行复杂科研工作流，提升多步骤科学任务处理能力。 |
| 3 | [moeru-ai/airi](https://github.com/moeru-ai/airi) | 💖🧸 Self hosted, you-owned Grok Companion, a cont... | TypeScript | 22.1k | 842 | 项目是一个自托管的AI伴侣，支持实时语音聊天、Minecraft和Factorio游戏，跨平台（Web/macOS/Windows），旨在提供类似Neuro-sama的数字人类体验，具备记忆系统和嵌入式数据库。 |
| 4 | [CodebuffAI/codebuff](https://github.com/CodebuffAI/codebuff) | Generate code from the terminal!... | TypeScript | 3.3k | 118 | Codebuff是基于自然语言指令的AI代码助手，采用多代理协作架构实现代码库精准修改。通过文件扫描、规划、编辑、审查等专用代理协同工作，支持终端命令式代码生成与重构，优于单模型工具的代码理解与修改准确率。 |
| 5 | [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | Build and run agents you can see, understand and t... | Python | 17.0k | 83 | AgentScope是一个面向生产环境的Python代理框架，提供ReAct代理、记忆管理、实时语音支持及模型微调功能，强调易用性与可扩展性，适用于复杂智能代理系统开发。 |
| 6 | [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | ReMe: Memory Management Kit for Agents - Remember ... | Python | 1.3k | 27 | ReMe是AI代理内存管理工具，提供文件和向量两种内存系统。解决上下文窗口限制和无状态会话问题，支持自动压缩历史、持久化重要信息、语义搜索等功能，实现跨会话的记忆继承与管理。 |
| 7 | [LMCache/LMCache](https://github.com/LMCache/LMCache) | Supercharge Your LLM with the Fastest KV Cache Lay... | Python | 7.4k | 140 | LMCache通过分布式KV缓存技术优化LLM服务，支持GPU/CPU/磁盘等多介质存储，结合vLLM实现3-10倍延迟降低，适用于多轮对话和长文本场景。 |
| 8 | [superset-sh/superset](https://github.com/superset-sh/superset) | IDE for the AI Agents Era - Run an army of Claude ... | TypeScript | 4.1k | 637 | Superset 是面向AI代理时代的集成开发环境，支持同时运行多个CLI代码代理（如Claude Code、Codex等），通过工作树隔离、实时监控、内置差异查看器等功能提升开发效率，减少上下文切换开销。 |
| 9 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 518 | 145 | Trivy是用Go编写的开源安全扫描工具，支持容器、文件系统、Kubernetes等多目标扫描，可检测漏洞、配置错误、敏感信息及生成SBOM，适用于DevOps和云原生环境的安全检测。 |
| 10 | [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | OpenSandbox is a general-purpose sandbox platform ... | Python | 5.3k | 1.1k | OpenSandbox是阿里开源的AI通用沙盒平台，支持多语言SDK和统一API，集成Docker/Kubernetes运行时，提供代码执行、代理开发、强化学习等场景的隔离环境与资源管理。 |

[查看完整数据](api/github/2026-03-03.json)
<!-- END GITHUB TRENDING -->








