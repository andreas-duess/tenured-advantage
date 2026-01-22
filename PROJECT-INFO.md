# 50+ - Project Information

**Location**: `/Users/andreasduess/Developer/experience-advantage/`

## Quick Start

```bash
# Navigate to project
cd ~/Developer/experience-advantage

# Install dependencies (if needed)
npm install

# Start dev server
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

## Project Structure

```
experience-advantage/
├── src/
│   ├── content/
│   │   └── blog/           # Blog articles (markdown)
│   ├── components/         # Reusable components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Routes (index, blog, about)
│   └── utils/              # Helper functions
├── public/                 # Static assets
├── dist/                   # Build output
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── wrangler.toml          # Cloudflare deployment config
```

## Published Articles

All articles are in `src/content/blog/`:

1. **career-change-at-50-complete-guide.md** (17K)
   - Primary keyword: career change at 50
   - 3,400+ word ultimate guide

2. **ageism-in-the-workplace-2026-reality.md** (17K)
   - Primary keyword: ageism in workplace
   - 2,600+ word analysis + strategy

3. **experience-multiplier-ai-makes-you-more-valuable.md** (16K)
   - Primary keyword: AI and experience
   - 2,100+ word thought leadership

4. **ai-productivity-tools-for-professionals-over-40.md** (15K)
   - Primary keyword: AI productivity tools
   - 2,500+ word practical guide

5. **why-experience-is-your-unfair-advantage-with-ai.md** (4K)
   - Original sample article

## Article Management

To add new articles:

1. Create markdown file in `src/content/blog/`
2. Include required frontmatter:
   ```yaml
   ---
   title: "Article Title"
   description: "Meta description"
   pubDate: 2026-01-20
   author: "Andreas Duess"
   heroImage: "/images/blog/image.jpg"
   tags: ["tag1", "tag2"]
   draft: false
   ---
   ```
3. Write content in markdown
4. Set `draft: false` to publish

## Content Strategy

Full 20-article content strategy:
`/Users/andreasduess/Claude/work-in-progress/16-01-26-ai-for-experienced-pros-content-strategy.md`

Individual article drafts:
`/Users/andreasduess/Claude/work-in-progress/experience-advantage-articles/`

## Deployment

**Cloudflare Pages** (configured in wrangler.toml):
```bash
npm run deploy
```

**Site URL**: https://fiftyplus.co

## Technical Details

- **Framework**: Astro 5.16.11
- **Language**: TypeScript (strict mode)
- **Styling**: Scoped CSS in Astro components
- **Content**: Type-safe content collections with Zod
- **SEO**: Built-in sitemap, RSS feed, meta tags
- **Performance**: Static generation, system fonts, minimal JS

## Current Status

- ✓ Project scaffolded and configured
- ✓ Homepage, blog listing, about page complete
- ✓ 4 foundation articles published (Week 1-2)
- ⏳ 16 more articles to create (Weeks 3-8)

## Related Resources

- Writing style guide: `~/Claude/context/Andreas-writing-styleguide.md`
- Personal master prompt: `~/Claude/context/andreas-duess-personal-master-prompt.md`
- Session logs: `~/Claude/session-logs/`

---

**Last Updated**: January 16, 2026
**Dev Server**: http://localhost:4321/
**Production**: https://fiftyplus.co
