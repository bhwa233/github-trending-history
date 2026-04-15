
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import dayjs from 'dayjs';
import { callAI } from './ai-service';
import { GitHubRepo, GitHubTrendingData } from './github-types';
import { ensureDir, writeFile } from './utils';

const VERSION = '1.0.0';

/**
 * 解析 todayStars 数量（如 "779 stars today" -> 779）
 */
function parseTodayStars(text: string): number {
  if (!text) return 0;
  const match = text.match(/([\d,]+)/);
  if (!match) return 0;
  return parseInt(match[1].replace(/,/g, ''), 10) || 0;
}

/**
 * 解析 star/fork 数量
 */
function parseStarCount(text: string): number {
  if (!text) return 0;
  const cleaned = text.replace(/,/g, '').toLowerCase();
  if (cleaned.includes('k')) {
    return Math.floor(parseFloat(cleaned) * 1000);
  } else if (cleaned.includes('m')) {
    return Math.floor(parseFloat(cleaned) * 1000000);
  }
  return parseInt(cleaned, 10) || 0;
}

/**
 * 获取 GitHub Trending 列表
 */
async function fetchGitHubTrending(since: 'daily' | 'weekly' | 'monthly' = 'daily'): Promise<GitHubRepo[]> {
  const url = `https://github.com/trending?since=${since}`;
  console.log(`正在请求: ${url}`);

  const { data } = await axios.get(url, {
    timeout: 30000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    }
  });

  console.log('✓ 请求成功，开始解析 HTML...\n');

  const $ = cheerio.load(data);
  const result: GitHubRepo[] = [];

  $('article.Box-row').each((index, element) => {
    const $article = $(element);
    const repoLink = $article.find('h2 a').attr('href') || '';
    const repoFullName = repoLink.replace(/^\//, '').trim();
    const description = $article.find('p.col-9').text().trim();
    const language = $article.find('[itemprop="programmingLanguage"]').text().trim();
    const starLink = $article.find('a[href*="/stargazers"]').text().trim();
    const forkLink = $article.find('a[href*="/forks"]').text().trim();
    const todayStarsText = $article.find('span.d-inline-block.float-sm-right').text().trim();

    result.push({
      index,
      fullName: repoFullName,
      description,
      language,
      stars: parseStarCount(starLink),
      forks: parseStarCount(forkLink),
      todayStars: parseTodayStars(todayStarsText),
      url: `https://github.com${repoLink}`
    });
  });

  console.log(`✓ 成功解析 ${result.length} 个仓库\n`);
  return result;
}

/**
 * 获取仓库 README 内容（带重试）
 */
async function fetchRepoReadme(repoUrl: string): Promise<string> {
  const fetchOnce = async (): Promise<string> => {
    const { data } = await axios.get(repoUrl, {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      }
    });

    const dom = new JSDOM(data, { url: repoUrl });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    return article?.textContent || '';
  };

  try {
    return await fetchOnce();
  } catch (error) {
    console.log(`  重试中...`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    return await fetchOnce();
  }
}

/**
 * 处理单个仓库
 */
async function processRepo(repo: GitHubRepo): Promise<void> {
  console.log(`[${repo.index + 1}] 处理 ${repo.fullName}`);

  try {
    // 1. 获取 README
    console.log(`  正在获取 README...`);
    const readmeContent = await fetchRepoReadme(repo.url);
    console.log(`  ✓ README 提取成功 (${readmeContent.length} 字符)`);

    // 2. AI 总结
    console.log(`  正在生成 AI 总结...`);
    const aiSummary = await callAI({
      fullName: repo.fullName,
      description: repo.description,
      language: repo.language,
      readmeContent
    });
    console.log(`  ✓ AI 总结完成`);

    repo.aiSummary = aiSummary;

  } catch (error) {
    repo.errorMessage = error instanceof Error ? error.message : String(error);
    console.log(`  ✗ 处理失败: ${repo.errorMessage}`);
  }

  console.log('');
}

/**
 * 更新 README.md
 */
async function updateReadme(data: GitHubTrendingData): Promise<void> {
  const readmePath = './README.md';
  const readmeContent = await import('fs/promises').then(fs => fs.readFile(readmePath, 'utf-8'));

  // 生成表格
  const tableRows = data.repos.map((repo, i) => {
    const summary = repo.aiSummary?.summary || '处理失败';
    const displayStars = repo.stars >= 1000 
      ? `${(repo.stars / 1000).toFixed(1)}k` 
      : repo.stars.toString();
    const displayTodayStars = repo.todayStars >= 1000
      ? `${(repo.todayStars / 1000).toFixed(1)}k`
      : repo.todayStars.toString();
    
    return `| ${i + 1} | [${repo.fullName}](${repo.url}) | ${repo.description.slice(0, 50)}... | ${repo.language || '-'} | ${displayStars} | ${displayTodayStars} | ${summary} |`;
  }).join('\n');

  const newSection = `<!-- BEGIN GITHUB TRENDING -->
## 📊 GitHub Trending

**最后更新**: ${data.date} | **成功**: ${data.successCount} | **失败**: ${data.failedCount}

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
${tableRows}

[查看完整数据](api/github/${data.date}.json)
<!-- END GITHUB TRENDING -->`;

  const updatedReadme = readmeContent.includes('<!-- BEGIN GITHUB TRENDING -->')
    ? readmeContent.replace(
        /<!-- BEGIN GITHUB TRENDING -->[\s\S]*?<!-- END GITHUB TRENDING -->/,
        newSection
      )
    : readmeContent + '\n\n' + newSection;

  await import('fs/promises').then(fs => fs.writeFile(readmePath, updatedReadme, 'utf-8'));
  console.log('✓ README.md 已更新\n');
}

/**
 * 主函数
 */
async function main() {
  const startTime = Date.now();
  const date = dayjs().format('YYYY-MM-DD');

  console.log('========================================');
  console.log('GitHub Trending Scraper');
  console.log(`日期: ${date}`);
  console.log('========================================\n');

  // 1. 获取 Trending 列表
  const repos = await fetchGitHubTrending('daily');

  if (repos.length === 0) {
    throw new Error('未能获取任何仓库数据');
  }

  // 2. 串行处理每个仓库
  console.log(`开始处理 ${repos.length} 个仓库...\n`);
  for (const repo of repos) {
    await processRepo(repo);
    await new Promise(resolve => setTimeout(resolve, 2000)); // 延迟 2 秒
  }

  // 3. 统计结果
  const successCount = repos.filter(r => !r.errorMessage).length;
  const failedCount = repos.filter(r => r.errorMessage).length;

  console.log('========================================');
  console.log(`处理完成！成功: ${successCount}, 失败: ${failedCount}`);
  console.log('========================================\n');

  // 4. 保存数据
  const duration = ((Date.now() - startTime) / 1000).toFixed(0) + 's';
  const trendingData: GitHubTrendingData = {
    date,
    since: 'daily',
    totalRepos: repos.length,
    successCount,
    failedCount,
    repos,
    metadata: {
      createdAt: new Date().toISOString(),
      duration,
      version: VERSION
    }
  };

  const dirPath = './api/github';
  const filePath = `${dirPath}/${date}.json`;
  
  await ensureDir(dirPath);
  await writeFile(filePath, JSON.stringify(trendingData, null, 2));
  console.log(`✓ 数据已保存到: ${filePath}\n`);

  // 5. 更新 README
  await updateReadme(trendingData);

  console.log(`✅ 全部完成！耗时: ${duration}`);
}

// 运行
main().catch(error => {
  console.error('❌ 执行失败:', error);
  process.exit(1);
});
