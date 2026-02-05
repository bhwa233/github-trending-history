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

**最后更新**: 2026-02-05 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 26.7k | 560 | 字节跳动开源的多模态AI代理栈，包含Agent TARS和UI-TARS-desktop。Agent TARS通过CLI/Web UI整合GUI代理与视觉能力，支持跨平台任务自动化；UI-TARS-desktop为桌面应用，提供本地/远程计算机及浏览器的GUI代理功能。 |
| 2 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 4.2k | 621 | 该项目是Codex的技能目录，提供可重复使用的AI代理技能模块，包含指令、脚本和资源，支持技能安装、管理及分发，提升任务自动化效率。 |
| 3 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | A Claude Code plugin that automatically captures e... | TypeScript | 23.7k | 1.9k | 为Claude Code设计的持久化记忆压缩插件，自动捕获编码会话内容并AI压缩，实现跨会话上下文连续性，支持项目知识延续与智能检索。 |
| 4 | [j178/prek](https://github.com/j178/prek) | ⚡ Better `pre-commit`, re-engineered in Rust... | Rust | 5.5k | 267 | prek 是用 Rust 重写的新一代 pre-commit 工具，提供无依赖的单二进制文件、兼容原有配置、支持 monorepo 和多语言工具链管理，性能更优且占用更少磁盘空间。 |
| 5 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | Memory for AI Agents in 6 lines of code... | Python | 11.8k | 69 | Cognee是基于Python的AI代理记忆工具，通过向量搜索与图数据库结合，实现文档的语义搜索和关系连接，提供高效的数据处理和知识图谱生成能力。 |
| 6 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 45.3k | 893 | Superpowers是一个基于可组合技能的软件开发框架，通过代理协作实现自动化开发流程。它强调TDD、YAGNI和DRY原则，支持编码代理自动生成设计文档、实施计划并执行任务，减少人工干预。 |
| 7 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 31.4k | 45 | Trivy是用Go语言编写的全面安全扫描工具，支持容器镜像、文件系统、Git仓库、Kubernetes等目标，可检测漏洞、配置错误、敏感信息和SBOM。提供多平台集成和实时扫描功能，适用于云原生环境的安全检测。 |
| 8 | [fish-shell/fish-shell](https://github.com/fish-shell/fish-shell) | The user-friendly command line shell.... | Rust | 32.4k | 75 | fish-shell 是一个用户友好的命令行shell，提供语法高亮、实时自动补全和智能Tab补全功能，支持跨平台使用。其设计注重易用性，无需复杂配置即可提升命令行操作效率，适用于开发者和系统管理员增强终端交互体验。 |
| 9 | [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | Node Version Manager - POSIX-compliant bash script... | Shell | 91.4k | 135 | nvm-sh/nvm 是一个用Shell编写的POSIX兼容Node.js版本管理工具，支持多版本Node.js切换和管理，提供安装、更新、环境配置等功能，适用于开发环境和CI/CD场景。 |
| 10 | [linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer) | 一款提示词优化器，助力于编写高质量的提示词... | TypeScript | 19.3k | 45 | Prompt Optimizer是一款AI提示词优化工具，支持多模式优化、多模型集成及图像生成。提供Web、桌面、Chrome插件和Docker部署，具备对比测试、安全架构和高级调试功能，适用于角色扮演、知识图谱提取及创意写作场景。 |
| 11 | [ZeroTworu/anet](https://github.com/ZeroTworu/anet) | Simple Rust VPN Client / Server... | Rust | 350 | 79 | 基于Rust开发的隐私保护VPN工具，采用自研ASTP协议实现端到端加密与网络伪装，支持多平台客户端及图形化界面，适用于高延迟或不稳定网络环境下的安全通信。 |

[查看完整数据](api/github/2026-02-05.json)
<!-- END GITHUB TRENDING -->








