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

**最后更新**: 2026-04-02 | **成功**: 4 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen) | Create stunning demos for free. Open-source, no su... | TypeScript | 15.7k | 2.5k | OpenScreen是一款开源屏幕录制工具，支持全屏/窗口录制、自动/手动缩放、音频捕获、视频裁剪、背景自定义、注释添加及多格式导出，提供类似Screen Studio的基础功能但完全免费且无订阅限制。 |
| 2 | [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | OmX - Oh My codeX: Your codex is not alone. Add ho... | TypeScript | 11.6k | 2.9k | Oh My Codex（OMX）是OpenAI Codex CLI的扩展工具，提供增强的工作流管理功能。通过预设更强的Codex会话、标准化流程和专属命令（如$deep-interview、$ralplan、$team），支持代码任务的规划、审批、并行执行与状态持久化，提升开发效率。 |
| 3 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Extracted system prompts from ChatGPT (GPT-5.4, GP... | - | 36.3k | 323 | 该项目收集并整理了多个AI模型（如ChatGPT、Claude、Gemini等）的系统提示、系统消息及开发指令，涵盖不同版本和变体，便于研究模型行为和安全分析。 |
| 4 | [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Hunt down social media accounts by username across... | Python | 77.2k | 807 | Sherlock 是一个基于 Python 的工具，可通过对用户名在 400+ 社交平台进行自动化搜索，支持多用户批量查询、结果输出格式定制（文本/CSV/XLSX）及代理配置，适用于快速定位跨平台账号关联。 |

[查看完整数据](api/github/2026-04-02.json)
<!-- END GITHUB TRENDING -->








