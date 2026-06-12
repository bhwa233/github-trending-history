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

**最后更新**: 2026-06-11 | **成功**: 18 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [apple/container](https://github.com/apple/container) | A tool for creating and running Linux containers u... | Swift | 32.4k | 2.4k | 这是一个用 Swift 编写的工具，用于在 Mac 上通过轻量级虚拟机创建和运行 Linux 容器。它针对 Apple Silicon 优化，支持 OCI 兼容镜像，可从标准注册中心拉取和推送。需 macOS 26 环境。 |
| 2 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | Shell | 54.7k | 3.3k | 该项目为 AI 编码代理提供生产级工程技能，通过 7 个斜杠命令（如 /spec, /build, /ship）封装了资深工程师的开发工作流、质量门控和最佳实践。支持基于上下文的技能自动激活，并提供单次批准后的自主增量构建功能，确保 AI 代理在开发各阶段保持一致的高质量输出。 |
| 3 | [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | open-source healthcare ai... | Python | 2.7k | 426 | 这是一个专注于本地运行的医疗 AI 开源项目。基于 Python 和 Apple MLX，提供 1000+ 专用医疗模型，支持临床文本结构化、实体提取及 PII 去标识化。项目完全离线运行，确保患者数据不出设备，无云依赖，无供应商锁定，适合医疗数据隐私保护场景。 |
| 4 | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | PM Skills Marketplace: 100+ agentic skills, comman... | - | 16.2k | 2.0k | PM Skills Marketplace 是一个为 Claude Code 和 Cowork 设计的 AI 操作系统，集成了 68 个技能、42 个工作流和 9 个插件。它将成熟的产品管理框架编码为结构化工作流，通过命令（如 /discover）辅助用户完成从发现到发布的全流程，提升产品决策质量。 |
| 5 | [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Security scanner for AI agent skills. Detect vulne... | Python | 2.6k | 319 | SkillSpector 是 NVIDIA 推出的 AI 代理技能安全扫描工具，用于检测安装前的漏洞、恶意模式及安全风险。支持 Git、文件等多种输入，内置 64 种漏洞模式，提供静态分析、LLM 语义评估及实时 CVE 查询。它能输出风险评分和多格式报告，确保 AI 代理技能的安全使用。 |
| 6 | [soxoj/maigret](https://github.com/soxoj/maigret) | 🕵️‍♂️ Collect a dossier on a person by username f... | Python | 32.6k | 661 | 这是一个基于 Python 的开源 OSINT 工具，通过用户名在 3000+ 个网站上收集个人档案。支持无需 API 密钥的自动化搜索、递归查找、绕过封锁及 AI 分析，提供 Web UI，适用于网络取证和社交媒体分析。 |
| 7 | [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | FULL Augment Code, Claude Code, Cluely, CodeBuddy,... | - | 139.9k | 368 | 该项目是一个汇集了众多主流AI工具（如Cursor、Replit、Claude等）的系统提示词、内部工具及AI模型的仓库。它旨在为开发者提供参考，同时也包含针对AI初创企业的安全警告和漏洞检测服务ZeroLeaks。项目通过赞助和社区支持持续更新，帮助用户了解AI工具的底层逻辑与安全风险。 |
| 8 | [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Desktop app to manage markdown knowledge bases... | TypeScript | 15.4k | 604 | Tolaria 是一款基于 TypeScript 的跨平台桌面应用，专注于管理 Markdown 知识库。它采用文件优先和 Git 优先原则，确保数据完全本地化、可移植且具备版本控制能力。应用支持 AI 集成，适合构建个人第二大脑或管理 AI 上下文，强调离线使用和开源特性。 |
| 9 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 224.8k | 1.3k | Superpowers 是一个为 AI 编码代理（如 Claude 和 Codex）设计的框架与方法论。它通过可组合的技能引导代理在编码前先确认需求与设计，强调 TDD、YAGNI 和 DRY 原则，并支持子代理自主执行任务，显著提升自动化开发效率。 |
| 10 | [restic/restic](https://github.com/restic/restic) | Fast, secure, efficient backup program... | Go | 34.1k | 61 | restic 是一款用 Go 语言编写的快速、高效且安全的备份程序，支持 Linux、macOS、Windows 等主流操作系统。它提供简单的命令行操作，支持创建备份仓库、恢复文件及通过 FUSE 挂载浏览历史快照。restic 支持多种后端存储，包括本地目录、SFTP、S3 以及各大云存储服务，旨在让备份过程变得简单且无摩擦。 |
| 11 | [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A complete AI agency at your fingertips - From fro... | Shell | 111.5k | 1.6k | 这是一个集合了多种专业AI代理的项目，每个代理都具备独特的个性、工作流程和交付成果。它支持集成到Claude Code、GitHub Copilot等主流开发工具中，旨在为用户提供一个随时待命的“AI专家团队”，帮助解决特定领域的复杂问题。 |
| 12 | [masterking32/MasterDnsVPN](https://github.com/masterking32/MasterDnsVPN) | Advanced DNS tunneling VPN for censorship bypass, ... | Go | 5.7k | 507 | MasterDnsVPN 是一个基于 Go 语言的高级 DNS 隧道 VPN 项目，旨在通过 DNS 查询传输 TCP 流量以绕过网络审查。它采用轻量级自定义协议，相比 DNSTT 和 SlipStream 具有极低的头部开销和极高的传输速度。项目支持多解析器负载均衡、多路径传输及高丢包稳定性，优化了 SOCKS5 协议，适合在恶劣网络环境下进行科学上网和隐私保护。 |
| 13 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | Open-source live-chat, email support, omni-channel... | Ruby | 30.4k | 67 | Chatwoot 是一个现代开源、自托管的客户支持平台，旨在替代 Intercom 和 Zendesk。它提供全渠道支持（包括 WhatsApp、邮件、社交媒体等），内置 AI 代理 Captain 可自动处理常见问题。此外，还包含帮助中心门户、团队协作工具（如标签、快捷键、自动分配）等功能，帮助企业高效管理客户沟通。 |
| 14 | [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | Local-first session intelligence and analytics for... | Go | 1.6k | 114 | 这是一个用 Go 语言编写的本地优先的 AI 编码代理会话智能和分析工具。它支持 Claude Code、Codex 等 20 多个代理，提供成本跟踪、会话浏览和搜索功能。数据存储在本地 SQLite 数据库中，无需云端账户，提供单二进制文件或 Docker 部署方式，是 ccusage 的快速替代品。 |
| 15 | [alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill) | 张雪峰.skill — 张雪峰的认知操作系统。高考志愿/考研/职业规划的实战思维框架。由女娲.ski... | - | 7.9k | 89 | 处理失败 |
| 16 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 73.9k | 88 | 该项目旨在收集并开源中国中小学及大学数学教材PDF资源，旨在促进义务教育普及和消除教育贫困，方便海外华人获取。由于GitHub文件大小限制，超过50MB的PDF被拆分，项目提供了合并工具（Windows exe）供用户还原。 |
| 17 | [hexo-ai/sia](https://github.com/hexo-ai/sia) | SIA is a Self Improving AI framework to autonomous... | Python | 1.3k | 199 | SIA 是一个自改进 AI 框架，通过 Meta、Target 和 Feedback 三个智能体协同工作，实现自主迭代优化。该框架能自动更新 Harness 和模型权重，显著提升性能。在 LawBench、GPU 内核优化及 scRNA-seq 等任务中表现出色，大幅超越基线模型。 |
| 18 | [mattermost/mattermost](https://github.com/mattermost/mattermost) | Mattermost is an open source platform for secure c... | TypeScript | 37.3k | 53 | Mattermost 是一个开源、自托管的协作平台，提供聊天、语音/视频通话及 AI 集成。它支持 DevSecOps、事件解决和 IT 服务台等场景，采用 Go 和 React 构建，并依赖 PostgreSQL。支持插件和 API 扩展，适合企业级团队的安全沟通与开发流程管理。 |
| 19 | [bannedbook/fanqiang](https://github.com/bannedbook/fanqiang) | 翻墙-科学上网... | Kotlin | 46.8k | 161 | 这是一个综合性的科学上网与翻墙教程项目，涵盖了V2Ray、Shadowsocks、Clash等多种工具的配置指南。项目提供了ChromeGo扩展，集成了多种翻墙协议，并详细介绍了Windows、Mac、iOS、Android、路由器及游戏机等平台的翻墙教程。 |

[查看完整数据](api/github/2026-06-11.json)
<!-- END GITHUB TRENDING -->




