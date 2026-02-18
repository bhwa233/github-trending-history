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

**最后更新**: 2026-02-18 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [alibaba/zvec](https://github.com/alibaba/zvec) | A lightweight, lightning-fast, in-process vector d... | C++ | 4.9k | 501 | Zvec是阿里开源的轻量级嵌入式向量数据库，基于Proxima引擎实现低延迟、高并发的向量相似性搜索。支持密集/稀疏向量与混合搜索，无需服务器配置，可直接嵌入应用中。提供Python/Node.js接口，适用于需要高速向量检索的场景。 |
| 2 | [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal for language mo... | Python | 8.0k | 947 | Heretic 是一个自动化工具，通过方向性消融和Optuna优化，移除语言模型中的审查机制，同时最小化拒绝率和KL散度，保留模型性能。无需人工干预，支持一键去安全对齐。 |
| 3 | [OpenCTI-Platform/opencti](https://github.com/OpenCTI-Platform/opencti) | Open Cyber Threat Intelligence Platform... | TypeScript | 8.7k | 282 | OpenCTI是一个基于STIX2标准的开源网络威胁情报管理平台，提供GraphQL API和前端界面，支持与MISP、TheHive等工具集成。可结构化存储技术及非技术威胁信息，支持数据导入导出、关系推理和MITRE ATT&CK框架对接，适用于企业级威胁情报分析与知识管理。 |
| 4 | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | An open-source AI agent that lives in your termina... | TypeScript | 18.8k | 82 | Qwen Code是终端导向的开源AI代理，支持多协议API调用，提供代码理解、自动化任务及IDE集成，优化Qwen3-Coder模型实现高效开发。 |
| 5 | [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | This repository showcases various advanced techniq... | Jupyter Notebook | 25.2k | 280 | 该项目聚焦于检索增强生成（RAG）技术，提供多种高级方法教程，旨在提升生成模型的准确性与上下文相关性，适用于研究和开发场景。 |
| 6 | [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book) | Introduction to Machine Learning Systems... | JavaScript | 19.6k | 737 | 该项目是AI系统工程的开源学习资源库，包含教材、TinyTorch框架、硬件套件和实验案例，旨在教授如何构建高效、可靠的智能系统。通过理论学习、代码实践和硬件部署三个路径，帮助开发者将AI模型转化为实际应用。 |
| 7 | [obra/superpowers](https://github.com/obra/superpowers) | An agentic skills framework & software development... | Shell | 54.4k | 868 | Superpowers 是一个基于可组合技能的软件开发框架，通过代理自动化流程提升编码效率。它强调测试驱动开发（TDD）、YAGNI 和 DRY 原则，支持代理自主完成需求分析、设计确认、任务分解及代码实现，减少人工干预。 |
| 8 | [HailToDodongo/pyrite64](https://github.com/HailToDodongo/pyrite64) | N64 Game-Engine and Editor using libdragon & tiny3... | C++ | 1.2k | 407 | Pyrite64是基于C++的N64游戏引擎与编辑器，采用libdragon和tiny3d开发，支持3D模型导入、HDR+Bloom/大纹理渲染、节点图脚本等功能。专注于真实硬件开发，需配合Ares等模拟器测试，适用于独立游戏开发与复古游戏制作。 |
| 9 | [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | Composio powers 1000+ toolkits, tool search, conte... | TypeScript | 26.7k | 14 | Composio提供AI代理工具链，支持1000+工具集成、上下文管理、认证及沙箱环境，兼容Python/TypeScript。通过SDK简化工具调用与代理构建，适用于自动化任务处理与智能应用开发。 |
| 10 | [p2r3/convert](https://github.com/p2r3/convert) | Truly universal online file converter... | TypeScript | 1.4k | 397 | p2r3/convert 是一个基于浏览器的在线文件转换工具，支持跨类型文件格式转换（如视频转PDF）。通过本地处理避免隐私泄露，提供通用性解决方案，用户可直接拖拽文件进行转换。 |
| 11 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | Your own personal AI assistant. Any OS. Any Platfo... | TypeScript | 208.7k | 3.8k | OpenClaw是跨平台个人AI助手，支持多渠道通讯（如WhatsApp、Telegram）和本地化部署，提供实时交互与多模型集成，强调隐私和始终在线体验。 |

[查看完整数据](api/github/2026-02-18.json)
<!-- END GITHUB TRENDING -->








