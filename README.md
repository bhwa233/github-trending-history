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

**最后更新**: 2026-01-28 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | AI agent toolkit: coding agent CLI, unified LLM AP... | TypeScript | 3.1k | 469 | AI代理工具包，提供代码代理CLI、统一LLM API、TUI/Web UI库、Slack机器人及vLLM部署模块，支持全栈开发与多端交互。 |
| 2 | [hashicorp/vault](https://github.com/hashicorp/vault) | A tool for secrets management, encryption as a ser... | Go | 34.4k | 356 | Vault是Hashicorp开发的秘钥管理工具，提供安全存储、动态秘钥生成和加密服务。支持API密钥、数据库凭证等敏感数据的统一管理，具备访问控制和审计日志功能，适用于云环境和微服务架构中的敏感信息保护。 |
| 3 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Collection of extracted System Prompts from popula... | JavaScript | 26.5k | 405 | 收集ChatGPT、Claude、Gemini等主流AI聊天机器人的系统提示文本，为开发者提供标准化的AI交互配置参考。 |
| 4 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | Memory for 24/7 proactive agents like moltbot (cla... | Python | 5.5k | 231 | memU是面向24/7持续运行AI代理的记忆框架，通过缓存减少LLM调用成本，支持用户意图自动捕捉与跨会话记忆，实现主动式智能服务。 |
| 5 | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | Kimi Code CLI is your next CLI agent.... | Python | 4.5k | 293 | Kimi Code CLI 是一款终端AI代理工具，支持代码编辑、shell命令执行、IDE集成及Zsh扩展，通过ACP协议实现开发环境无缝协作，提升软件开发与终端操作效率。 |
| 6 | [kubernetes/ingress-nginx](https://github.com/kubernetes/ingress-nginx) | Ingress NGINX Controller for Kubernetes... | Go | 19.3k | 28 | Kubernetes Ingress NGINX 是基于 NGINX 的 Ingress 控制器，用于管理 Kubernetes 集群的外部访问流量，提供负载均衡、SSL 终端和基于路径/主机的路由配置功能。 |
| 7 | [protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf) | Protocol Buffers - Google's data interchange forma... | C++ | 70.4k | 34 | Protocol Buffers是Google开发的跨语言、跨平台数据序列化框架，支持高效结构化数据交换。项目核心为C++实现，提供编译器生成数据访问类，适用于分布式系统和RPC通信。 |
| 8 | [lobehub/lobehub](https://github.com/lobehub/lobehub) | The ultimate space for work and life — to find, bu... | TypeScript | 70.9k | 132 | LobeHub 是一个面向AI代理的协作开发平台，支持多代理协作、模块化工作流设计及多种AI能力集成，涵盖智能搜索、语音交互、图像生成、插件系统等功能，旨在构建人机协同的开放生态。 |
| 9 | [ran-j/PS2Recomp](https://github.com/ran-j/PS2Recomp) | Playstation 2 Static Recompiler & Runtime Tool to ... | C++ | 1.4k | 467 | PS2Recomp是将PlayStation 2 ELF文件静态编译为C++代码的工具，支持MIPS指令转换、128位MMI指令及VU0处理，可通过配置文件定制输出，实现PS2游戏跨平台原生运行。 |
| 10 | [bambulab/BambuStudio](https://github.com/bambulab/BambuStudio) | PC Software for BambuLab and other 3D printers... | C++ | 3.8k | 27 | BambuStudio是基于PrusaSlicer的3D打印切片软件，支持多平台操作。提供自动排版、多材料打印、远程控制、高级冷却逻辑等核心功能，优化打印体验。 |
| 11 | [GetStream/Vision-Agents](https://github.com/GetStream/Vision-Agents) | Open Vision Agents by Stream. Build Vision Agents ... | Python | 4.2k | 89 | 提供实时视频AI代理构建工具，支持多模型融合与低延迟处理，通过Stream边缘网络实现500ms快速连接和30ms内音视频延迟，兼容YOLO、Gemini等模型及多平台SDK。 |

[查看完整数据](api/github/2026-01-28.json)
<!-- END GITHUB TRENDING -->








