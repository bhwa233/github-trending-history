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

**最后更新**: 2025-12-28 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [Flowseal/zapret-discord-youtube](https://github.com/Flowseal/zapret-discord-youtube) | ... | Batchfile | 20.1k | 259 | 该项目使用Batchfile脚本结合WinDivert驱动实现网络流量过滤，旨在绕过特定网络限制。提供DNS配置指南和二进制文件部署方案，需注意杀毒软件误报风险。包含手动执行策略的启动脚本和安全配置说明。 |
| 2 | [tw93/Mole](https://github.com/tw93/Mole) | 🐹 Deep clean and optimize your Mac.... | Shell | 21.3k | 1.6k | Mole 是一款用于 macOS 的系统清理与优化工具，整合了多款知名工具功能。支持深度清理缓存、日志及浏览器残留，智能卸载应用并清除残留文件，提供磁盘分析、实时系统监控及性能优化功能。可通过脚本或 Homebrew 安装，支持命令行交互与自动化操作。 |
| 3 | [TheAlgorithms/Python](https://github.com/TheAlgorithms/Python) | All Algorithms implemented in Python... | Python | 215.8k | 358 | TheAlgorithms/Python 项目汇集了各种算法的 Python 实现，旨在用于教育和学习目的。这些实现可能效率低于标准库，但适合理解算法原理和逻辑。项目包含详细的贡献指南和社区支持，便于开发者参与和学习。 |
| 4 | [Sergeydigl3/zapret-discord-youtube-linux](https://github.com/Sergeydigl3/zapret-discord-youtube-linux) | (NOW ONLY FOR NFTABLES) Port zapret-discord-youtub... | Shell | 836 | 10 | 该项目是基于nftables的Linux系统YouTube加速配置适配器，提供多策略选择和自动化配置，支持Ubuntu和Arch Linux，简化了Zapret Discord Youtube的部署流程。 |
| 5 | [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | Get 10X more out of Claude Code, Codex or any codi... | Rust | 7.3k | 144 | Vibe Kanban是一款AI代码代理协作工具，支持多代理任务编排、状态跟踪、配置管理和远程开发，提升代码生成效率。提供跨代理切换、并行/串行执行及开发服务器集成功能。 |
| 6 | [RustPython/RustPython](https://github.com/RustPython/RustPython) | A Python Interpreter written in Rust... | Rust | 21.1k | 58 | RustPython是用Rust编写的Python 3解释器，兼容CPython 3.13.0及以上版本。支持WebAssembly运行环境，提供交互式shell和脚本执行功能，注重性能与安全性，可替代CPython用于高性能场景。 |
| 7 | [QuantConnect/Lean](https://github.com/QuantConnect/Lean) | Lean Algorithmic Trading Engine by QuantConnect (P... | C# | 14.4k | 72 | QuantConnect/Lean 是一个模块化的算法交易引擎，支持C#和Python，提供回测、优化、实时交易功能。内置CLI工具简化策略开发与部署，适用于多市场量化交易场景。 |
| 8 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 84.8k | 397 | 收集了基于RAG、AI代理、多代理团队和语音代理的LLM应用示例，整合OpenAI、Anthropic、Gemini等模型及开源模型，提供技术实现与应用场景参考。 |
| 9 | [sinelaw/fresh](https://github.com/sinelaw/fresh) | Text editor for your terminal: easy, powerful and ... | Rust | 3.8k | 281 | Rust编写的终端文本编辑器，提供类GUI交互体验，支持大文件高效处理、低延迟响应及插件扩展，兼顾性能与易用性。 |

[查看完整数据](api/github/2025-12-28.json)
<!-- END GITHUB TRENDING -->








