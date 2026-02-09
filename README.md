# News Aggregator (Next.js)

A pure frontend news aggregation platform built with Next.js App Router. It pulls global news by category every 2 hours, stores them as Markdown files, and renders them directly in the UI.

## Categories
- Tech
- AI
- Finance
- Gaming

## How it works
- GitHub Actions runs on a 2‑hour schedule to fetch RSS feeds.
- New items are saved as Markdown files in `content/<category>/`.
- The website reads Markdown files at build/runtime and displays them.

## Scripts
```bash
npm run dev
npm run fetch:news
```

## Deploy
Deploy to Vercel. Any new commit from the scheduled workflow triggers a redeploy.
