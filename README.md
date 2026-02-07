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

**最后更新**: 2026-02-07 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | Fully autonomous AI hacker to find actual exploits... | TypeScript | 9.8k | 3.1k | Shannon是基于AI的全自主渗透测试工具，可自动检测Web应用漏洞并执行真实攻击（如注入、权限绕过），提供漏洞可利用性证明。解决持续集成中的安全检测滞后问题，提升代码安全性。 |
| 2 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 5.9k | 576 | OpenAI Skills 项目为 Codex 提供可复用的 AI 代理技能目录，通过结构化指令、脚本和资源包，实现任务自动化与能力分发。支持通过命令行工具安装和管理技能，包含官方及实验性技能模块。 |
| 3 | [microsoft/litebox](https://github.com/microsoft/litebox) | A security-focused library OS supporting kernel- a... | Rust | 1.1k | 659 | LiteBox是一个安全聚焦的库操作系统，通过精简主机接口降低攻击面，支持内核与用户模式执行。提供Rust接口实现跨平台沙箱化，兼容Linux、Windows及安全扩展环境，强调南北向接口的灵活互操作性。 |
| 4 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 4.7k | 61 | Heretic是一款全自动语言模型审查移除工具，通过方向性消融与Optuna优化算法，在无需人工干预的情况下降低模型拒绝率并最小化对原始模型性能的损害，实现高效去审查化。 |
| 5 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 46.9k | 689 | Superpowers 是一个基于代理的软件开发框架，通过可组合技能和自动化工作流提升编码效率。支持TDD、YAGNI和DRY原则，实现从需求分析到代码生成的全流程自动化，适合需要高效开发的团队。 |
| 6 | [OpenBMB/MiniCPM-o](https://github.com/OpenBMB/MiniCPM-o) | A Gemini 2.5 Flash Level MLLM for Vision, Speech, ... | Python | 23.1k | 42 | MiniCPM-o 是面向手机的多模态大语言模型系列，支持视觉、语音与全双工实时流媒体交互。具备9B参数的MiniCPM-o 4.5实现端到端多模态处理，支持同步输入输出、双语语音对话、语音克隆及强OCR能力，适配本地化部署。 |
| 7 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 31.7k | 170 | Trivy是用于容器、Kubernetes、代码仓库等环境的安全扫描工具，可检测漏洞、配置错误、敏感信息及SBOM，支持多平台和编程语言。 |
| 8 | [wavetermdev/waveterm](https://github.com/wavetermdev/waveterm) | An open-source, cross-platform terminal for seamle... | Go | 17.1k | 25 | Wave Terminal是一款跨平台终端工具，整合传统终端功能与图形化能力，支持文件预览、网页浏览、AI辅助等功能。提供拖放界面管理终端块、远程文件编辑、AI聊天模块、命令监控及安全密钥存储，提升开发工作效率。 |
| 9 | [viarotel-org/escrcpy](https://github.com/viarotel-org/escrcpy) | 📱 Display and control your Android device graphic... | JavaScript | 7.8k | 27 | 基于scrcpy的安卓设备图形化控制工具，支持远程显示和操作Android设备。提供跨平台桌面应用，集成JavaScript技术实现设备投屏与交互控制。 |
| 10 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | A curated list of awesome Claude Skills, resources... | Python | 31.9k | 514 | 该项目为Claude AI提供扩展技能清单，支持自动化工作流与1000+应用集成，涵盖文档处理、开发工具、数据处理等场景，通过Composio平台实现邮件、Slack等跨平台操作。 |
| 11 | [likec4/likec4](https://github.com/likec4/likec4) | Visualize, collaborate, and evolve the software ar... | TypeScript | 2.1k | 306 | LikeC4 是基于 TypeScript 的软件架构建模工具，支持从代码生成实时更新的架构图。提供自定义符号、元素类型和多级嵌套模型功能，适用于团队协作与架构演化。通过 CLI 工具实现可视化预览，兼容 C4 模型理念并增强灵活性。 |
| 12 | [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) | The GitButler version control client, backed by Gi... | Rust | 18.0k | 148 | GitButler是一款基于Git的版本控制客户端，通过虚拟分支技术实现多分支并行开发。用户可将未提交更改分组到虚拟分支，独立推送或创建PR，无需切换工作目录，提升多任务开发效率。 |

[查看完整数据](api/github/2026-02-07.json)
<!-- END GITHUB TRENDING -->








