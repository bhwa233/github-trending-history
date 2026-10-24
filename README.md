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

**最后更新**: 2026-10-23 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | A coding-agent skill for multi-phase security audi... | JavaScript | 42.2k | 2.7k | 这是一个将编码代理转化为安全审计员的技能，通过六个阶段（侦察、狩猎、验证、输出、独立验证、报告）执行结构化安全审计。支持独立验证和机器可读发现，具备覆盖驱动型狩猎能力，是 Cloudflare 漏洞发现工具的起点。 |
| 2 | [php/php-src](https://github.com/php/php-src) | The PHP Interpreter... | C | 41.6k | 716 | PHP 是一种流行的通用脚本语言，特别适合 Web 开发。该项目是 PHP 解释器的官方源代码，使用 C 语言编写。它支持从博客到大型网站的各种应用，提供详细的安装、构建和测试指南，支持跨平台编译与调试。 |
| 3 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Open source repository of plugins primarily intend... | Python | 32.2k | 635 | 这是一个开源的插件仓库，旨在将 Claude 转化为特定角色（如销售、产品管理等）的专家。它包含11个预构建的插件，集成了Slack、Notion、Jira等企业常用工具，通过斜杠命令和子代理自动化工作流程。用户可自定义插件以适应公司流程，提升团队协作效率。 |
| 4 | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | OpenShell is the safe, private runtime for autonom... | Rust | 18.8k | 1.1k | OpenShell 是 NVIDIA 开发的 Rust 项目，旨在为自主 AI 代理提供安全、私有的运行时环境。它通过内核级强制执行和形式化验证，确保代理只能访问被明确授权的资源，防止未经授权的数据泄露或网络访问。它允许代理执行文件操作、API 调用等任务，同时保护用户的数据和凭证安全。 |
| 5 | [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu) | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据... | TypeScript | 6.9k | 546 | 基于倪海厦《天纪》体系的紫微斗数开源排盘引擎，提供完整算法、四化系统及古籍数据。项目包含67.5万张命盘的13维解读数据集，支持在线排盘与AI解读，技术栈为TypeScript。 |
| 6 | [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | claude-red is a curated library of offensive secur... | Python | 8.5k | 226 | 这是一个针对 Claude AI 的精选攻击性安全技能库，包含结构化的 SKILL.md 文件。它为 Claude 提供了从 SQL 注入到 EDR 欺骗等特定攻击面的专家级方法论，使其能像红队操作员一样工作。支持按需加载，适用于授权渗透测试和安全研究。 |
| 7 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM2: Tokenizer-Free TTS for Multilingual Speec... | Python | 40.3k | 150 | VoxCPM2 是一个基于扩散自回归架构的 tokenizer-free 文本转语音系统，支持 30 种语言。它具备强大的语音设计能力，无需参考音频即可通过文本描述生成新声音，同时支持高质量语音克隆和 48kHz 音频输出，具备实时流式传输能力，开源且商业可用。 |
| 8 | [nodejs/node](https://github.com/nodejs/node) | Node.js JavaScript runtime ✨🐢🚀✨... | JavaScript | 122.9k | 66 | Node.js 是一个开源的、跨平台的 JavaScript 运行时环境，由 OpenJS Foundation 支持。它采用开放治理模式，遵循语义化版本控制，提供 Alpha、Current 和 LTS 三种发布类型，旨在为库作者和 CI 管道提供稳定的开发环境，LTS 版本则专注于生产环境的稳定性和安全性。 |

[查看完整数据](api/github/2026-10-23.json)
<!-- END GITHUB TRENDING -->




