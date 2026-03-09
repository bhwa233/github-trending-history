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

**最后更新**: 2026-03-08 | **成功**: 12 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [GoogleCloudPlatform/generative-ai](https://github.com/GoogleCloudPlatform/generative-ai) | Sample code and notebooks for Generative AI on Goo... | Jupyter Notebook | 14.3k | 563 | 该仓库提供Google Cloud Vertex AI生成式AI的示例代码和Notebook，涵盖Gemini模型使用、RAG技术、视觉/音频生成、搜索功能及环境搭建，帮助开发者快速实践生成式AI应用。 |
| 2 | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | A Simple and Universal Swarm Intelligence Engine, ... | Python | 6.9k | 1.2k | MiroFish 是基于多智能体技术的AI预测引擎，通过构建数字世界模拟群体行为，支持舆情、金融、文学等场景的未来推演。用户上传材料后，系统生成预测报告并与数字世界交互，适用于决策模拟与创意推演。 |
| 3 | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | A set of beautifully-designed, accessible componen... | TypeScript | 108.6k | 498 | shadcn-ui/ui 是一个开源的UI组件库，提供美观且可访问的组件，支持主流前端框架。通过模块化设计和可定制化配置，帮助开发者快速构建高质量用户界面，采用TypeScript增强类型安全。 |
| 4 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 280.3k | 4.8k | OpenClaw是一个可跨平台运行的个人AI助手，支持多消息渠道集成与设备交互，提供本地化、实时的智能服务。通过CLI工具快速部署，适配多种操作系统和应用场景。 |
| 5 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | There can be more than Notion and Miro. AFFiNE(pro... | TypeScript | 65.2k | 529 | AFFiNE是一个隐私优先的开源知识库平台，整合文档、白板和数据库功能，支持多模态AI协作、本地化部署及实时团队协作，提供可定制的全能型工作空间。 |
| 6 | [Ed1s0nZ/CyberStrikeAI](https://github.com/Ed1s0nZ/CyberStrikeAI) | CyberStrikeAI is an AI-native security testing pla... | Go | 2.2k | 242 | CyberStrikeAI是用Go语言开发的AI原生安全测试平台，集成100+安全工具与智能编排引擎，支持角色化渗透测试、技能系统驱动的专项测试，提供攻击链分析、漏洞全生命周期管理及可视化报告，通过AI agents实现端到端自动化安全测试。 |
| 7 | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Bash is all you need - A nano Claude Code–like age... | TypeScript | 23.8k | 635 | 该项目通过12个渐进式课程，教学构建类似Claude Code的AI编码代理，涵盖基础循环、工具调用、任务分解、上下文压缩、多代理协作等机制，强调模块化设计与自主执行能力。 |
| 8 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 13.2k | 613 | 该项目是Codex的技能目录，提供可重复使用的AI代理技能模块，包含指令、脚本和资源。支持通过命令行安装和管理技能，实现任务自动化与能力扩展。 |
| 9 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 46.8k | 275 | 该项目是一个AI驱动的对冲基金模拟系统，整合15+投资策略代理（如巴菲特、彼得·林奇等），通过多智能体协作实现市场分析、风险控制和交易决策，所有操作均为教育用途的模拟验证。 |
| 10 | [is-a-dev/register](https://github.com/is-a-dev/register) | Grab your own sweet-looking '.is-a.dev' subdomain.... | JavaScript | 9.8k | 8 | 提供开发者个性化子域名注册服务，通过GitHub仓库提交申请并审核后，自动配置DNS记录实现快速部署。 |
| 11 | [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) | Unofficial Python API for Google NotebookLM... | Python | 3.7k | 217 | 非官方Python API，提供对Google NotebookLM的全面程序化访问，支持笔记管理、多源文件导入、内容生成及自动化研究流程，适用于AI代理集成与科研工具开发。 |
| 12 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | The design language that makes your AI harness bet... | JavaScript | 1.7k | 640 | Impeccable是面向AI的前端设计系统，包含17个指令命令和7个领域参考文件，通过反模式库优化设计质量，覆盖排版、色彩、交互等全流程，提升AI生成设计的一致性与专业性。 |

[查看完整数据](api/github/2026-03-08.json)
<!-- END GITHUB TRENDING -->








