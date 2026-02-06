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

**最后更新**: 2026-02-06 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 4.8k | 583 | OpenAI Skills 是 Codex 的技能目录项目，提供可重复使用的AI代理技能模块，支持通过命令行安装和管理技能，涵盖任务执行、脚本资源管理及协作开发功能。 |
| 2 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | The Open-Source Multimodal AI Agent Stack: Connect... | TypeScript | 27.1k | 541 | UI-TARS-desktop是字节跳动开源的多模态AI代理桌面应用，基于TypeScript开发，支持本地与远程计算机及浏览器操作。通过整合GUI代理和视觉能力，实现接近人类的自动化任务处理流程，提供CLI和Web UI交互方式。 |
| 3 | [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | Node Version Manager - POSIX-compliant bash script... | Shell | 91.5k | 132 | nvm-sh/nvm 是一个基于Shell的Node.js版本管理工具，支持POSIX兼容的shell环境。可快速安装和切换不同Node.js版本，简化多版本开发与兼容性测试。 |
| 4 | [likec4/likec4](https://github.com/likec4/likec4) | Visualize, collaborate, and evolve the software ar... | TypeScript | 1.8k | 42 | LikeC4 是基于 TypeScript 的软件架构建模工具，支持从代码生成实时更新的架构图。提供灵活的建模语言，允许自定义符号、元素类型和层级结构，便于团队协作与架构演化。 |
| 5 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 31.5k | 165 | Trivy是Go语言编写的全面安全扫描工具，支持容器、文件系统、Git仓库、Kubernetes等目标，可检测漏洞、配置错误、敏感信息及SBOM。覆盖多平台与编程语言，提供实时安全防护。 |
| 6 | [ZeroTworu/anet](https://github.com/ZeroTworu/anet) | Simple Rust VPN Client / Server... | Rust | 523 | 189 | 基于Rust开发的私密VPN客户端/服务器，采用自研ASTP协议实现端到端加密与网络伪装，支持跨平台部署，适用于高隐私需求的稳定网络连接场景。 |
| 7 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 22.0k | 69 | 该项目基于WinDivert工具实现网络流量拦截与过滤，提供DNS安全配置功能，可能用于网络访问控制或隐私保护。包含批处理脚本及Windows系统级网络工具集成。 |
| 8 | [DataExpert-io/data-engineer-handbook](https://github.com/DataExpert-io/data-engineer-handbook) | This is a repo with links to everything you'd ever... | Jupyter Notebook | 39.9k | 72 | 数据工程学习资源合集，包含书籍、社区、工具链及实战项目，覆盖数据架构、ETL、数据湖/仓库等核心领域，适合系统学习和职业发展。 |

[查看完整数据](api/github/2026-02-06.json)
<!-- END GITHUB TRENDING -->








