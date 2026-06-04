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

**最后更新**: 2026-06-03 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [chopratejas/headroom](https://github.com/chopratejas/headroom) | Compress tool outputs, logs, files, and RAG chunks... | Python | 9.9k | 3.5k | Headroom 是一个本地优先的 AI 上下文压缩层，旨在减少 LLM token 消耗。它支持压缩工具输出、日志、文件及 RAG 块，减少 60-95% token 且保持答案一致。提供 Python 库、代理和 MCP 服务器，具备可逆压缩、跨代理记忆及智能学习功能。 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 205.8k | 2.1k | ECC 是一个跨多 AI 代理工具（如 Claude Code、Cursor）的性能优化系统。它提供技能、直觉、记忆持久化、安全扫描和持续学习功能。支持并行化和子代理编排，旨在提升代理工作流效率。 |
| 3 | [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | Find vulnerabilities, misconfigurations, secrets, ... | Go | 35.4k | 24 | Trivy 是一个用 Go 编写的多功能安全扫描器，支持扫描容器、文件系统、Git 仓库、虚拟机和 Kubernetes。它能检测 CVE 漏洞、配置错误、敏感信息、SBOM 及许可证问题。支持多种语言和平台，并与 GitHub Actions 等工具集成，提供全面的软件供应链安全检查。 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 179.2k | 1.7k | 这是一个由 Nous Research 构建的自我改进 AI 代理。它具备内置的学习循环，能从经验中创建和优化技能，建立用户模型。支持多平台（Telegram, Discord 等）集成，内置自动化调度，并能并行处理任务。它运行灵活，可适配多种大模型，旨在成为伴随用户成长的智能助手。 |
| 5 | [microsoft/markitdown](https://github.com/microsoft/markitdown) | Python tool for converting files and office docume... | Python | 142.9k | 2.0k | MarkItDown 是微软推出的轻量级 Python 工具，旨在将 PDF、Office 文档、图片、音频等多种格式转换为 Markdown。它专注于保留文档结构（如标题、列表、表格），专为 LLM 和文本分析管道设计，是 textract 的轻量级替代方案。 |
| 6 | [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | Hermes WebUI: The best way to use Hermes Agent fro... | Python | 13.1k | 719 | Hermes WebUI 是 Hermes Agent 的轻量级深色主题 Web 界面，提供与 CLI 完全一致的功能。支持会话管理、工作区浏览及模型配置，无需构建步骤。通过 SSH 隧道可安全访问，方便在手机或浏览器中使用，无需重新解释上下文。 |
| 7 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 🕷️ An adaptive Web Scraping framework that handle... | Python | 60.3k | 1.1k | Scrapling 是一个自适应的 Python 网络爬虫框架，支持从单次请求到大规模爬取。它具备智能解析器，能自动适应网站结构变化；内置的 Fetchers 可绕过 Cloudflare 等反爬系统；Spider 框架支持并发、多会话及代理轮换，提供快速且隐蔽的数据抓取方案。 |
| 8 | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | PDF Parser for AI-ready data. Automate PDF accessi... | Java | 23.3k | 570 | 这是一个专为 AI 数据提取设计的 PDF 解析器，支持 Markdown、JSON（含边界框）和 HTML 输出。它在基准测试中准确率高达 0.907，支持 OCR、表格、公式及图表识别。此外，它还能自动化 PDF 无障碍性，自动生成 Tagged PDF 以符合屏幕阅读器标准，支持 LangChain 集成。 |
| 9 | [odoo/odoo](https://github.com/odoo/odoo) | Odoo. Open Source Apps To Grow Your Business.... | Python | 52.0k | 29 | Odoo 是基于 Python 的开源企业级 ERP 系统，提供 CRM、电子商务、仓库管理、会计等全功能业务应用。其模块化设计允许独立部署或无缝集成，帮助企业实现业务流程的数字化管理。 |
| 10 | [Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | Talk to any LLM with hands-free voice interaction,... | Python | 9.0k | 693 | Open-LLM-VTuber 是一款本地运行的 AI 虚拟主播软件，支持语音交互、打断和 Live2D 面部捕捉。它可在 Windows、macOS 和 Linux 上运行，提供 Web 和桌面版（含透明背景模式）。用户可将其作为虚拟伴侣，支持实时语音对话及视觉感知，所有功能均可离线运行。目前项目正开发 v2.0 版本。 |
| 11 | [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) | A complete computer science study plan to become a... | - | 349.0k | 330 | 这是一个完整的计算机科学学习计划，旨在帮助开发者通过大厂技术面试。它涵盖了约75%的大学计算机科学核心内容，包括数据结构与算法。作者通过此计划成功入职亚马逊，并提供了多语言支持和丰富的学习资源，适合有一定基础的开发者系统提升编程能力。 |
| 12 | [lyogavin/airllm](https://github.com/lyogavin/airllm) | AirLLM 70B inference with single 4GB GPU... | Jupyter Notebook | 18.9k | 208 | AirLLM 是一个专注于大语言模型推理内存优化的库。它允许在单张 4GB 显存 GPU 上运行 70B 大模型，无需量化或剪枝，并支持在 8GB 显存上运行 405B Llama3.1。项目支持 MacOS，兼容 Llama、Qwen、ChatGLM 等多种主流模型，适合资源受限环境下的高性能推理。 |
| 13 | [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | Memory engine and app that is extremely fast, scal... | TypeScript | 25.2k | 600 | Supermemory 是一个为 AI 时代设计的记忆引擎，旨在解决 AI 上下文窗口限制问题。它通过自动提取事实、构建用户画像、处理知识更新与矛盾，实现持久记忆。支持全栈 RAG、多模态提取及与 Google Drive、Notion 等的连接器集成，可作为个人大脑或开发者 API 使用。 |
| 14 | [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | "Vibe-Trading: Your Personal Trading Agent"... | Python | 10.0k | 197 | Vibe-Trading 是一个个人交易代理，旨在通过一条命令赋予 AI 代理全面的交易能力。它支持连接多个主流券商（如老虎、币安、盈透等），提供只读数据和纸面交易功能。项目基于 Python 和 LangChain 构建，具备严格的安全模型和审计日志，支持港股、美股及加密货币交易策略的测试与回测。 |

[查看完整数据](api/github/2026-06-03.json)
<!-- END GITHUB TRENDING -->




