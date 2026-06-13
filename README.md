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

**最后更新**: 2026-06-12 | **成功**: 13 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 56.8k | 2.7k | 该项目为 AI 编码代理提供生产级工程技能，将资深工程师的工作流程、质量门控和最佳实践编码为技能。包含 7 个斜杠命令覆盖全生命周期，支持自动生成计划和实现任务，确保 AI 代理遵循严格的工程规范。 |
| 2 | [music-assistant/server](https://github.com/music-assistant/server) | Music Assistant is a free, opensource Media librar... | Python | 1.8k | 20 | Music Assistant 是一个免费开源的媒体库管理器，核心为 Python 编写的服务器。它连接流媒体服务和扬声器，支持与 Home Assistant 深度集成，推荐在树莓派、NAS 等常开设备上运行，通过 Docker 容器或 HA 插件安装。 |
| 3 | [mattermost/mattermost](https://github.com/mattermost/mattermost) | Mattermost is an open source platform for secure c... | TypeScript | 37.6k | 388 | Mattermost 是一个开源、自托管的协作平台，提供即时通讯、工作流自动化、语音通话及 AI 集成功能。它采用开源核心模式，支持 DevSecOps、事件解决和 IT 服务台等场景，旨在保障软件开发生命周期的安全协作。 |
| 4 | [apple/container](https://github.com/apple/container) | A tool for creating and running Linux containers u... | Swift | 35.1k | 3.5k | 这是一个用 Swift 编写的工具，用于在 Mac 上通过轻量级虚拟机创建和运行 Linux 容器。它针对 Apple Silicon 进行了优化，支持 OCI 兼容的容器镜像，允许用户从标准注册表拉取、构建和推送镜像。它依赖于 Containerization Swift 包进行底层管理，并需要 macOS 26。 |
| 5 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 118.0k | 179 | 该项目是一个全球公开 IPTV 频道列表的集合，提供 M3U 格式的播放列表。用户可将链接粘贴至播放器观看直播，并支持 EPG 电子节目指南及 API 接口调用。项目旨在聚合全球公开资源，方便用户获取电视直播内容。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 226.0k | 1.3k | Superpowers 是一个面向编码代理的软件开发框架。它通过一套可组合的技能，指导 AI 代理从理解需求、制定规范、规划实现到自主执行的全过程。强调 TDD、YAGNI 和 DRY 原则，支持 Claude Code、Codex 等多种主流 AI 编码工具。 |
| 7 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 15.8k | 369 | Tolaria 是一款跨平台的桌面应用，旨在管理 Markdown 知识库。它强调文件优先和 Git 优先，支持离线使用、版本控制及 AI 集成，适合个人构建第二大脑或管理公司文档。 |
| 8 | [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | open-source healthcare ai... | Python | 3.2k | 515 | 这是一个本地优先的开源医疗 AI 项目，提供 1000+ 专用医疗模型。它允许在设备端进行临床文本实体提取和 PII 去标识化，确保患者数据不离开网络。项目支持 Python 和 Apple MLX 加速，并提供原生 iOS/macOS 应用，完全离线运行，无云依赖。 |
| 9 | [LMCache/LMCache](https://github.com/LMCache/LMCache) | LMCache: Supercharge Your LLM with the Fastest KV ... | Python | 8.6k | 28 | LMCache 是一个用于 LLM 推理的 KV 缓存管理层，将 KV 缓存转化为可持久化、跨引擎复用的 AI 原生知识。通过独立守护进程部署，它显著降低了首字延迟（TTFT）并提升吞吐量，特别适用于长上下文、多轮对话及知识增强（RAG）工作负载，支持多硬件和多框架。 |
| 10 | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | PM Skills Marketplace: 100+ agentic skills, comman... | - | 17.0k | 827 | 这是一个面向产品经理的 AI 操作系统，包含 100+ 个技能、命令和插件。它专为 Claude Code 设计，提供从发现到发布的全流程工作流，将成熟的 PM 框架编码到 AI 助手中，帮助用户做出更好的产品决策。 |
| 11 | [masterking32/MasterDnsVPN](https://github.com/masterking32/MasterDnsVPN) | Advanced DNS tunneling VPN for censorship bypass, ... | Go | 6.0k | 400 | MasterDnsVPN 是一个基于 Go 的高级 DNS 隧道 VPN，旨在通过 DNS 查询传输 TCP 流量以绕过审查。项目采用自定义轻量级协议和 ARQ 技术，实现了极低的开销（5-7B）和极高的速度（比 DNSTT 快 9 倍）。它支持多解析器负载均衡、多路径传输及 SOCKS5/Shadowsocks，在恶劣网络环境下表现出极高的稳定性和抗审查能力。 |
| 12 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 112.4k | 1.0k | 这是一个包含多个具有特定个性、流程和可交付成果的 AI 代理的项目。它提供了从前端开发到社区运营等不同领域的专家代理，旨在提升用户的工作流效率。项目支持多种主流 AI 编程工具的集成，通过脚本一键安装，让用户能像组建团队一样使用 AI 专家。 |
| 13 | [microsoft/PowerToys](https://github.com/microsoft/PowerToys) | Microsoft PowerToys is a collection of utilities t... | C | 134.3k | 103 | Microsoft PowerToys 是微软官方推出的 Windows 生产力增强工具集，包含超过 30 个实用程序。它旨在帮助用户自定义 Windows 系统、优化工作流程并简化日常任务，如窗口管理、文件重命名和快捷键操作等。 |

[查看完整数据](api/github/2026-06-12.json)
<!-- END GITHUB TRENDING -->




