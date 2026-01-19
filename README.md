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

**最后更新**: 2026-01-19 | **成功**: 8 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | VoxCPM: Tokenizer-Free TTS for Context-Aware Speec... | Python | 4.9k | 650 | VoxCPM是无需分词器的端到端文本转语音系统，采用连续空间建模技术实现上下文感知语音生成和零样本真实语音克隆。基于MiniCPM-4架构结合扩散自回归模型与分层语言建模，支持高效语音合成与个性化声线迁移，适用于高质量语音合成及多场景语音生成需求。 |
| 2 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 22.7k | 621 | LangExtract是一个Python库，利用大语言模型从非结构化文本中提取结构化信息，支持精确来源定位、交互式可视化及多模型兼容，适用于医疗文档等长文本的高效信息提取与验证。 |
| 3 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Free, local, open-source Cowork for Gemini CLI, Cl... | TypeScript | 6.8k | 1.2k | AionUi是一款支持多AI工具的本地图形化协作平台，提供统一界面管理Gemini CLI、Claude Code等命令行工具，具备智能文件管理、多会话本地存储、9种格式预览及AI图像生成功能，强化本地数据安全与操作便捷性。 |
| 4 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | A MCP for Claude Desktop / Claude Code / Windsurf ... | TypeScript | 12.2k | 132 | n8n-MCP是一个连接AI助手与n8n工作流平台的模型上下文协议服务器，提供1084个n8n节点的结构化文档、属性、操作及模板数据，支持AI高效调用自动化工具。 |
| 5 | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | A high-performance algorithmic trading platform an... | Rust | 18.0k | 525 | NautilusTrader是高性能算法交易平台，支持事件驱动回测与实时交易，覆盖多资产类型。采用Rust开发确保安全性与性能，结合Python实现策略编写，解决研发与生产环境一致性问题。 |
| 6 | [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp) | ... | Python | 15.9k | 174 | BlenderMCP通过Model Context Protocol（MCP）将Blender与Claude AI连接，实现AI对Blender的3D建模、场景操作和代码执行的直接控制。支持对象操作、材质管理、场景检查及远程服务器部署，提供双向通信和多种3D资产集成功能。 |
| 7 | [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | RAG on Everything with LEANN. Enjoy 97% storage sa... | Python | 9.3k | 372 | LEANN是一个基于Python的轻量级向量数据库，通过图-based有选择性重新计算和高保真度剪枝技术，实现97%存储节省的本地RAG应用。支持在个人设备上高效处理文档索引与搜索，保障数据隐私且无需云端计算。 |
| 8 | [DavidXanatos/TaskExplorer](https://github.com/DavidXanatos/TaskExplorer) | Power full Task Manager... | C | 2.4k | 238 | TaskExplorer是一款基于C语言的系统级任务管理工具，提供进程实时监控与深度分析功能。通过多面板可视化界面，支持线程堆栈追踪、内存编辑、句柄查看、网络连接监控及DLL管理，适用于系统性能调优与故障诊断。 |

[查看完整数据](api/github/2026-01-19.json)
<!-- END GITHUB TRENDING -->








