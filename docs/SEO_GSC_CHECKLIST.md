# SEO / GSC Launch Checklist

## 1. Indexing Baseline

- [ ] Open Google Search Console URL Inspection for `/`, `/languages`, `/topics`.
- [ ] Confirm **URL is on Google** or request indexing after release.
- [ ] Confirm selected canonical matches page canonical for each inspected URL.

## 2. Canonical & Noindex Rules

- [ ] Check `/history/<valid-date>` has self canonical and `index,follow`.
- [ ] Check `/history/<invalid-or-future-date>` returns 404.
- [ ] Check `/languages/<unknown-language>` and `/topics/<unknown-topic>` return 404.

## 3. Sitemap Coverage

- [ ] Submit `/sitemap.xml` in GSC Sitemaps.
- [ ] Verify sitemap includes:
  - [ ] `/`
  - [ ] `/languages`
  - [ ] `/topics`
  - [ ] `/history/*` valid range
  - [ ] `/languages/*` with current data
  - [ ] `/topics/*` with current data
- [ ] Check GSC sitemap report for parsing errors.

## 4. Structured Data Validation

- [ ] Test `/` in Rich Results Test and verify `CollectionPage` JSON-LD is parsed.
- [ ] Test `/languages` and one `/languages/<slug>` page for Breadcrumb + ItemList data.
- [ ] Test `/topics` and one `/topics/<slug>` page for Breadcrumb + ItemList data.
- [ ] Confirm no critical structured data errors in GSC Enhancements.

## 5. Crawl Quality

- [ ] Confirm pagination links do not lead to infinite date expansion.
- [ ] Confirm invalid history pages are not indexable (404 path).
- [ ] Confirm `robots.txt` and sitemap URL are accessible.

## 6. Performance & Stability

- [ ] Run Lighthouse for `/`, `/languages`, `/topics` (mobile + desktop).
- [ ] Ensure no blocking runtime errors in Vercel logs after release.
- [ ] Verify OG image URL and metadata fields resolve to absolute URLs.

## 7. Post-Launch Monitoring (7-14 days)

- [ ] GSC Coverage: track valid indexed page trend.
- [ ] GSC Pages: check "Crawled - currently not indexed" trend.
- [ ] GSC Performance: watch impressions/clicks for long-tail queries:
  - [ ] `github trending history`
  - [ ] `github trending <language>`
  - [ ] `github trending <topic>`
