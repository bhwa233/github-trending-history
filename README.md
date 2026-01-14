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

**最后更新**: 2026-01-14 | **成功**: 7 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [obra/superpowers](https://github.com/obra/superpowers) | Claude Code superpowers: core skills library... | Shell | 22.1k | 1.9k | Superpowers 是基于 Claude Code 的代码代理增强框架，通过可组合技能实现自动化软件开发流程。支持需求分析、分块设计、TDD 实现和子代理协作开发，强调 YAGNI/DRY 原则，需通过插件系统集成使用。 |
| 2 | [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm... | Scala | 69.9k | 365 | 该项目是X平台的内容推荐算法系统，包含用户行为数据处理、多模型协同的推荐服务及高效框架。核心组件涵盖数据处理（如tweetypie）、用户信号收集（user-signal-service）、社区检测（SimClusters）、知识图谱嵌入（TwHIN）、安全模型（trust-and-safety-models）等，结合navi、product-mixer等框架，支持实时与批量处理，优化用户内容流推 |
| 3 | [dev-sec/ansible-collection-hardening](https://github.com/dev-sec/ansible-collection-hardening) | This Ansible collection provides battle tested har... | Jinja | 5.0k | 23 | Ansible集合提供Linux、SSH、Nginx、MySQL的加固配置，遵循DevSec基准测试，支持多系统发行版，简化安全合规部署。 |
| 4 | [mudler/LocalAI](https://github.com/mudler/LocalAI) | 🤖 The free, Open Source alternative to OpenAI, Cl... | Go | 41.5k | 64 | LocalAI是一个开源的本地AI推理平台，兼容OpenAI API，支持文本、音频、图像生成等多种模型。无需GPU，可在消费级硬件上运行，提供自托管解决方案，适用于隐私敏感或离线环境下的AI任务。 |
| 5 | [grab/cursor-talk-to-figma-mcp](https://github.com/grab/cursor-talk-to-figma-mcp) | TalkToFigma: MCP integration between Cursor and Fi... | JavaScript | 6.0k | 14 | 该项目实现Cursor AI与Figma的MCP协议集成，通过WebSocket通信实现设计数据读取与程序化修改，包含TypeScript MCP服务器、Figma插件及通信模块，支持设计自动化操作。 |
| 6 | [zoicware/RemoveWindowsAI](https://github.com/zoicware/RemoveWindowsAI) | Force Remove Copilot, Recall and More in Windows 1... | PowerShell | 8.4k | 337 | 该项目是一个PowerShell脚本，旨在彻底移除Windows 11中的AI功能组件，包括Copilot、Recall等，通过禁用注册表项、移除Appx包、清理系统文件等方式提升隐私与安全性。 |
| 7 | [rancher/rancher](https://github.com/rancher/rancher) | Complete container management platform... | Go | 25.1k | 6 | Rancher是开源容器管理平台，支持跨环境Kubernetes部署，提供企业级容器编排、多集群管理及DevOps工具链，简化生产环境容器运维。 |

[查看完整数据](api/github/2026-01-14.json)
<!-- END GITHUB TRENDING -->








