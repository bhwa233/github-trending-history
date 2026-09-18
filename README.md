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

**最后更新**: 2026-09-17 | **成功**: 20 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Fast, efficient, battle-tested at Alibaba's scale.... | Go | 34.8k | 3.3k | 这是一个由阿里巴巴开源的 AI 代码审查 CLI 工具。它采用确定性管道与 LLM Agent 混合架构，能精准识别 NPE、线程安全等缺陷。相比通用 Agent，它在相同模型下精度更高、Token 消耗更低。支持 Git Diff、OCR 扫描及跨文件上下文分析，已在阿里巴巴大规模实战验证。 |
| 2 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 10.7k | 3.6k | 这是一个由 Cloudflare 开发的编码代理技能，旨在将 AI 代理转化为安全审计员。它通过六个阶段（侦察、狩猎、验证、输出、独立验证、报告）自动化安全审计流程，生成机器可读的发现结果，并强调独立验证以确保准确性。它支持增量审计，利用历史记录定位漏洞。 |
| 3 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 95.9k | 680 | 该项目为 AI 编码代理提供生产级工程技能，包含 9 个覆盖开发全生命周期的斜杠命令。它封装了资深工程师的最佳实践，确保 AI 在代码质量、测试驱动和性能优化上保持一致性。支持自动技能激活和一键式开发流程，旨在减少人工干预，提升开发效率。 |
| 4 | [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | Let AI agents use your real, logged-in browser wit... | TypeScript | 4.2k | 1.3k | BrowserSkill 是腾讯开源的浏览器自动化工具，允许 AI 代理在不中断用户工作的情况下，借用已登录的浏览器标签页执行任务。它通过 CLI 和浏览器扩展连接各类 AI Agent，支持复用真实登录状态、内置人工介入（如验证码）及全页截图等功能，旨在提升 AI 辅助开发的效率与体验。 |
| 5 | [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Turn your coding agents into research agents... | Rust | 5.0k | 939 | OpenResearch 是一个基于 Rust 的本地优先工作空间，旨在将 Claude Code、Codex 等编码代理转化为研究代理。它支持并行探索、可重现的实验和自主闭环研究。用户可以在本地、SSH 或云端运行实验，保持数据所有权，并利用 Git 管理实验变体和证据。 |
| 6 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | TypeScript | 145.9k | 538 | Claude Code 是一个运行在终端中的代理编码工具，基于 TypeScript 开发。它能够理解代码库，通过自然语言命令帮助开发者执行常规任务、解释复杂代码以及处理 Git 工作流。项目支持多种安装方式，并包含插件系统以扩展功能。 |
| 7 | [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | Ghidra is a software reverse engineering (SRE) fra... | Java | 78.5k | 912 | Ghidra 是美国国家安全局（NSA）开发的软件逆向工程（SRE）框架。它提供了一套功能强大的分析工具，支持反汇编、汇编、反编译和脚本编写等功能，适用于 Windows、macOS 和 Linux 平台。该框架旨在解决复杂 SRE 任务中的扩展和团队协作问题，广泛用于恶意代码分析和网络安全漏洞研究，并允许用户通过 Java 或 Python 进行二次开发。 |
| 8 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 24.6k | 287 | 这是一个开源的插件仓库，旨在将 Claude 转变为特定角色的专家。它包含生产力、销售、客服等11个插件，支持与 Slack、Jira 等工具集成。用户可以自定义工作流程和数据源，帮助团队提高协作效率和一致性。 |
| 9 | [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Open-source LLM knowledge platform: turn raw docum... | Go | 26.2k | 1.1k | WeKnora 是一个基于 Go 语言的开源 LLM 知识框架，旨在将原始文档转化为可查询的 RAG、自主推理代理和自维护 Wiki。它具备企业级文档理解能力，支持多源数据摄取、ReAct 智能体编排、知识图谱构建及长期记忆功能，提供完善的权限管理和多工作空间支持，适合构建智能知识库和自动化文档处理系统。 |
| 10 | [abue-ammar/tinycast](https://github.com/abue-ammar/tinycast) | Tinycast — a tiny, fully native macOS launcher, ho... | Swift | 6.2k | 739 | Tinycast 是一款轻量级、完全原生的 macOS 启动器。基于 SwiftUI 和 AppKit 开发，零第三方依赖，无 Electron 和遥测。支持运行原生 Raycast 扩展，具备应用启动、全局热键、文件搜索、剪贴板历史、计算器、快捷方式、代码片段、窗口管理及系统操作等功能。完全免费开源，适合追求高效与隐私的 macOS 用户。 |
| 11 | [cilium/cilium](https://github.com/cilium/cilium) | eBPF-based Networking, Security, and Observability... | Go | 25.3k | 111 | Cilium 是一个基于 eBPF 的网络、安全与可观测性解决方案。它提供扁平的 Layer 3 网络，支持多集群和 L7 协议感知。通过基于身份的安全模型，它实现了高效的分布式负载均衡，可完全替代 kube-proxy，并提供带宽管理、服务网格及深度网络监控能力。 |
| 12 | [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | The open-source AI voice studio. Clone, dictate, c... | TypeScript | 54.9k | 667 | Voicebox 是一个本地运行的 AI 声音工作室，开源免费。它支持 23 种语言和 7 种 TTS 引擎，具备零样本声音克隆、表情语音标签及丰富的后处理效果。集成了语音输入输出，支持全局听写和故事编辑，完全保护用户隐私，是 ElevenLabs 和 WisprFlow 的强大本地替代方案。 |
| 13 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 261.2k | 1.2k | ECC 是一个代理性能优化系统，为 Claude Code、Codex 等提供协调的工程工具箱。它通过计划、测试、实现、审查、验证、记住和改进的闭环工作流，优化上下文窗口，提供记忆、安全性和技能库，支持多平台开发。 |
| 14 | [roboflow/supervision](https://github.com/roboflow/supervision) | We write your reusable computer vision tools. 💜... | Python | 50.8k | 329 | Roboflow Supervision 是一个 Python 计算机视觉工具库，旨在提供可复用的开发组件。它支持多种主流 AI 模型（如 Ultralytics、Transformers），提供高度可定制的注释器用于可视化检测结果，并涵盖从数据加载到实时区域计数的全流程辅助，帮助开发者专注于应用逻辑构建。 |
| 15 | [JustVugg/colibri](https://github.com/JustVugg/colibri) | Run frontier MoE models on hardware you already ow... | C | 35.7k | 873 | Colibri 是一个纯 C 编写的零依赖推理引擎，旨在消费级硬件上运行前沿 MoE 模型。它通过 AI 内存多层级技术，将存储、RAM 和 VRAM 统一管理，支持 744B 到 2.8T 参数的大模型，旨在降低运行成本并减少对稀缺硬件的依赖。 |
| 16 | [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | A smarter, self-hosted AI assistant — multi-user, ... | Python | 3.4k | 367 | Octop 是一个基于 Python 的开源自托管 AI 助手，采用多智能体架构。它支持多用户、多场景专家库和 MBTI 人格，确保数据隐私。提供 Web、IM 及 IDE 集成，具备强大的知识库、连接器和插件生态，适合团队与个人构建本地化智能环境。 |
| 17 | [ever-co/ever-gauzy](https://github.com/ever-co/ever-gauzy) | Ever® Gauzy™ - Open Business Management Platform (... | TypeScript | 7.5k | 470 | Ever Gauzy 是一个开源的一体化商业管理平台，集成了 ERP、CRM、HRM、ATS 和项目管理等核心模块。它提供时间追踪、财务管理和库存控制等功能，旨在为协作经济提供全面的业务解决方案。 |
| 18 | [cline/cline](https://github.com/cline/cline) | Autonomous coding agent as an SDK, IDE extension, ... | TypeScript | 68.6k | 380 | Cline 是一个开源的自主编码代理，支持 CLI、桌面应用、VS Code 和 JetBrains 插件等多种形式。基于 TypeScript 构建，提供交互式和无头模式。它具备跨项目编辑、理解代码结构及自动修复错误的能力。此外，还提供 SDK 用于构建自定义 AI 代理和集成。 |
| 19 | [coder/coder](https://github.com/coder/coder) | Secure environments for developers and their agent... | Go | 14.8k | 145 | Coder 是一个自托管的云开发环境平台，支持通过 Terraform 定义工作区。它利用 Wireguard® 提供安全连接，并自动关闭闲置资源以节省成本。项目集成了 AI 编码代理，允许在基础设施上运行模型，无需在工作区中存储 API 密钥，实现快速入职和集中治理。 |
| 20 | [n8n-io/n8n](https://github.com/n8n-io/n8n) | Fair-code workflow automation platform with native... | TypeScript | 205.0k | 281 | n8n 是一个基于 Fair-code 的 AI 原生工作流自动化平台。它结合了可视化画布与自定义代码，支持自托管或云端部署。拥有 1500+ 集成和 9000+ 模板，适合构建从原型到生产环境的 AI 代理和多步骤工作流。 |

[查看完整数据](api/github/2026-09-17.json)
<!-- END GITHUB TRENDING -->




