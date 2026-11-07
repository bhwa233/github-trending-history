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

**最后更新**: 2026-11-06 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [zed-industries/zed](https://github.com/zed-industries/zed) | Code at the speed of thought – Zed is a high-perfo... | Rust | 93.7k | 306 | Zed 是一款由 Atom 和 Tree-sitter 创造者开发的高性能、多人协作代码编辑器。它使用 Rust 编写，旨在提供“思维速度”的编码体验。项目支持 macOS、Linux 和 Windows，采用 GPL-3.0 许可证，并由 Zed Industries, Inc. 维护。 |
| 2 | [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Auto Ontology is a Python framework for building s... | Python | 9.1k | 2.0k | NVIDIA/auto-ontology 是一个 Python 框架，旨在为 LLM 和代理工作流构建语义图推理层。它从企业元数据生成本体，提供上下文检索和可解释 AI。支持自然语言转 SQL，通过 MCP、CLI 和 API 暴露，包含 RBAC 和 Web UI，适用于需要可靠数据访问的企业代理工作流。 |
| 3 | [rails/rails](https://github.com/rails/rails) | Ruby on Rails... | Ruby | 59.0k | 142 | Rails 是一个基于 Ruby 的全栈 Web 应用程序框架，遵循 MVC 设计模式。它集成了 Active Record（处理数据库交互与业务逻辑）、Action View（渲染模板）和 Action Controller（处理 HTTP 请求）。该框架旨在简化数据库驱动的 Web 应用程序开发，提供高效的开发体验。 |
| 4 | [mpv-player/mpv](https://github.com/mpv-player/mpv) | 🎥 Command line media player... | C | 37.9k | 37 | mpv 是一个免费且自由的命令行媒体播放器，支持广泛的媒体格式、编解码器和字幕。它采用着色器进行视频渲染，对硬件有一定要求但性能强大，适用于 Linux、Windows 和 macOS 系统。 |
| 5 | [rust-lang/rust](https://github.com/rust-lang/rust) | Empowering everyone to build reliable and efficien... | Rust | 121.5k | 192 | Rust 是一种系统编程语言，旨在提供内存安全和并发性。项目包含编译器、标准库及全套开发工具链（如 Cargo、rustfmt、Clippy）。其高性能、高效的内存使用以及强大的类型系统和所有权模型，旨在帮助开发者构建可靠且高效的软件。 |
| 6 | [react/react](https://github.com/react/react) | The library for web and native user interfaces.... | JavaScript | 252.3k | 248 | React 是一个用于构建 Web 和原生用户界面的 JavaScript 库。它采用声明式编程和组件化架构，使创建交互式 UI 变得简单高效。React 支持渐进式采用，可轻松集成到现有项目中，并能通过 React Native 渲染移动应用，实现一次学习，随处编写。 |
| 7 | [angular/angular](https://github.com/angular/angular) | Deliver web apps with confidence 🚀... | TypeScript | 101.4k | 135 | Angular 是一个基于 TypeScript 的现代 Web 开发平台，用于构建跨平台的移动和桌面 Web 应用程序。它提供强大的工具链、组件化架构和丰富的生态系统（如 Angular CLI 和 Material），支持服务器端渲染、懒加载等高级功能，旨在帮助开发者以信心交付高质量的应用。 |
| 8 | [symfony/symfony](https://github.com/symfony/symfony) | The Symfony PHP framework... | PHP | 31.4k | 128 | Symfony 是一个功能强大的 PHP 框架，用于构建 Web 和控制台应用程序，并提供了一组可重用的 PHP 组件。它拥有严格的语义化版本控制和 LTS 版本支持，被广泛应用于数千个 Web 应用中，是 PHP 生态系统的核心。 |
| 9 | [prometheus/prometheus](https://github.com/prometheus/prometheus) | The Prometheus monitoring system and time series d... | Go | 67.2k | 148 | Prometheus 是一个基于 Go 语言开发的云原生监控系统和时序数据库。它通过 HTTP 拉取模型收集指标，支持多维数据模型和强大的 PromQL 查询语言，具备服务发现、联邦和告警功能，无分布式存储依赖，广泛应用于微服务和云原生环境监控。 |
| 10 | [google/skills](https://github.com/google/skills) | Agent Skills for Google products and technologies... | Python | 22.9k | 534 | 该项目为 Google Cloud 及其他 Google 产品提供了一套 Agent Skills，旨在帮助用户配置和管理 AI 代理。它涵盖了从入门教程到高级 AI/ML 工作流、安全设置和平台管理的各种技能，通过 CLI 工具进行安装和更新。 |
| 11 | [microsoft/vscode](https://github.com/microsoft/vscode) | Visual Studio Code... | TypeScript | 195.0k | 301 | Visual Studio Code 是微软推出的开源代码编辑器，基于 TypeScript 开发。它集成了代码编辑、导航、调试和构建支持，拥有丰富的扩展模型，支持 Windows、macOS 和 Linux。项目采用 MIT 许可证，每月更新，适合开发者进行核心编辑和调试工作。 |
| 12 | [nushell/nushell](https://github.com/nushell/nushell) | A new type of shell... | Rust | 41.0k | 131 | Nushell 是一种用 Rust 编写的新型 Shell，受 PowerShell 和函数式编程启发。它将数据视为结构化对象（如表），而非纯文本流，支持强大的管道操作，提供跨平台支持。 |
| 13 | [etcd-io/etcd](https://github.com/etcd-io/etcd) | Distributed reliable key-value store for the most ... | Go | 52.6k | 128 | etcd 是一个基于 Go 语言开发的分布式可靠键值存储系统，利用 Raft 共识算法确保数据的高可用性与强一致性。它提供简单、安全、快速的 API（gRPC/TLS），被广泛应用于 Kubernetes 等生产环境的配置管理和服务发现。 |
| 14 | [openssl/openssl](https://github.com/openssl/openssl) | General purpose TLS and crypto library... | C | 31.3k | 26 | OpenSSL 是一个用 C 语言编写的通用 TLS 和加密库。它提供了强大的商业级工具包，支持 TLS、DTLS 和 QUIC 协议。包含 libssl（协议实现）、libcrypto（加密库）和 openssl（命令行工具），用于密钥生成、证书管理、加密解密及安全测试，符合 FIPS 标准。 |
| 15 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 316.8k | 2.1k | 这是一个专为真实工程师设计的 AI 技能集合，旨在提供小型、可组合且易于适应的工具，帮助开发者进行高质量工程实践而非“氛围编码”。它支持多种主流 AI 代理（如 Claude、Copilot 等），通过插件形式安装，允许用户自定义和手动编辑技能文件，以保持对开发流程的控制。 |
| 16 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 64.2k | 2.5k | 这是一个源自 Cloudflare 的自动化安全审计技能，将编码代理转化为安全审计员。它通过六个阶段（侦察、狩猎、验证等）自动化漏洞发现流程，支持独立验证和机器可读输出，适用于代码安全审计和漏洞挖掘。 |
| 17 | [astral-sh/ruff](https://github.com/astral-sh/ruff) | An extremely fast Python linter and code formatter... | Rust | 50.7k | 169 | Ruff 是一个用 Rust 编写的极快 Python linter 和代码格式化工具。它比 Flake8 和 Black 快 10-100 倍，支持 Python 3.15，并内置了缓存和自动修复功能。它可以替代多个 Python 工具，提供统一的接口，非常适合追求高性能的 Python 项目。 |

[查看完整数据](api/github/2026-11-06.json)
<!-- END GITHUB TRENDING -->




