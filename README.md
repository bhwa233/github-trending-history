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

**最后更新**: 2026-08-08 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | A self-improving RLM agent for coding workflows an... | TypeScript | 8.8k | 2.5k | Prime Agent 是一个开源的编码和研究代理，专注于长期自主任务。它基于递归语言模型（RLM）和持续 Harness，支持持久化 Python 环境和程序化工具调用。具备自我改进能力，可执行技能，支持后台运行和代理间通信，适合处理复杂的长期工作流。 |
| 2 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills for AI coding ... | JavaScript | 84.5k | 778 | 这是一个为 AI 编码代理提供生产级工程技能的项目。它将资深工程师的工作流程、质量门禁和最佳实践编码为技能，通过 8 个斜杠命令覆盖开发全生命周期。支持自动技能激活和批量构建，可安装到 Claude Code、Cursor 等 70+ 个代理中，提升 AI 编码的一致性和质量。 |
| 3 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 77.9k | 591 | 该项目是一个开源的中国中小学及大学数学教材PDF资源库，旨在促进教育普及。针对GitHub文件大小限制导致的大文件拆分问题，项目提供了合并工具以还原完整教材。 |
| 4 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 16.7k | 481 | 该项目为 Google 产品和技术提供 Agent Skills，包含 Google Cloud 等产品的插件（Skills + MCP 服务器）。项目处于活跃开发中，支持通过 npx 安装特定技能，遵循 Apache 2.0 许可证。 |
| 5 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 210.0k | 1.4k | 这是一个面向工程师的 AI 技能集合，旨在提供真实的工程能力而非“氛围编码”。项目包含一系列可组合的 Shell 脚本和工作流，支持 Claude Code 和 Codex 等智能体。通过简单的安装命令，用户可以将这些技能集成到开发环境中，用于自动化开发流程、提高代码质量和工程效率。 |
| 6 | [goauthentik/authentik](https://github.com/goauthentik/authentik) | The authentication glue you need.... | Python | 24.0k | 467 | authentik 是一个开源的现代 SSO 身份提供商，支持 SAML、OAuth2/OIDC、LDAP 和 RADIUS 等协议。它适用于从实验室到大规模生产环境的自托管部署，也可作为企业级 IdP 替代方案。支持 Docker Compose、Kubernetes 等多种部署方式。 |
| 7 | [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TradingAgents: Multi-Agents LLM Financial Trading ... | Python | 96.5k | 126 | TradingAgents 是一个基于多智能体 LLM 的金融交易框架。支持 GPT-5.x、Claude 4.x 等多种大模型及 Alpha Vantage、FRED 等数据源。集成了研究、交易和投资组合管理代理，提供回测、代理管理和 Docker 部署，旨在利用 AI 实现自动化金融决策。 |
| 8 | [google/guava](https://github.com/google/guava) | Google core libraries for Java... | Java | 51.8k | 93 | Guava 是 Google 提供的核心 Java 库，包含新集合类型（如 Multimap 和 Multiset）、不可变集合、图库以及并发、I/O、哈希、原语和字符串等实用工具。它支持 JRE 和 Android 两种版本，被广泛应用于 Google 内部及众多公司的 Java 项目中。 |
| 9 | [LadybirdBrowser/ladybird](https://github.com/LadybirdBrowser/ladybird) | Truly independent web browser... | C++ | 65.0k | 79 | Ladybird 是一个基于 Web 标准的真正独立浏览器，采用多进程架构。它继承自 SerenityOS 的核心库（如 LibWeb、LibJS、LibGfx 等），支持 Linux、macOS 和 Windows。目前处于预-alpha 阶段，仅供开发者使用。 |
| 10 | [denoland/celld](https://github.com/denoland/celld) | self-hosted, distributed Durable Objects... | Rust | 2.5k | 432 | celld 是一个用 Rust 编写的自托管、分布式 Durable Objects 解决方案。它允许在本地机器上运行 Cloudflare Workers 和 Durable Objects。每个对象都是一个独立的 SQLite 数据库，通过 S3 兼容存储桶进行复制和协调。它使用 V8 嵌入式引擎执行代码，旨在通过分片消除共享数据库的争用和故障范围。 |
| 11 | [litu54/DevOps-Interview-Guide](https://github.com/litu54/DevOps-Interview-Guide) | DevOps Interview Guide... | - | 696 | 59 | 这是一个收集了2025-2026年真实DevOps、SRE及云工程面试题的实战指南。包含151份面试记录，覆盖85家公司。内容涵盖Kubernetes、Docker、Terraform、云服务、CI/CD、Ansible、Linux及SRE基础等。项目按公司分类，记录真实面试体验，适合求职者针对性备考。 |
| 12 | [bannedbook/fanqiang](https://github.com/bannedbook/fanqiang) | 翻墙-科学上网... | Kotlin | 49.9k | 161 | 这是一个涵盖多平台（Windows、Mac、iOS、Android等）的科学上网教程与工具库。项目提供V2Ray、Shadowsocks、Clash等主流工具的配置指南，包含Chrome一键翻墙包及安卓APP，旨在帮助用户解决网络访问限制问题。 |

[查看完整数据](api/github/2026-08-08.json)
<!-- END GITHUB TRENDING -->




