# Tenured Advantage

A blazingly fast static blog built with Astro, focused on AI insights for experienced professionals.

## Tech Stack

- **Astro 5.16.11** - Static site generator
- **TypeScript** - Type-safe development
- **Cloudflare Pages** - Lightning-fast hosting
- **Content Collections** - Type-safe content management

## Features

- 🚀 **Performance First** - Targets 100 PageSpeed score
- 🎨 **Responsive Design** - Mobile-first approach
- 📧 **Email Capture** - Built-in subscription component
- 🔍 **SEO Optimized** - Open Graph, Twitter cards, canonical URLs, sitemap
- 📝 **Type-Safe Content** - Zod schema validation for blog posts
- 🎯 **No JavaScript Bloat** - Only essential client-side JS

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   └── EmailCapture.astro
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts (markdown)
│   │   └── config.ts    # Content schema
│   ├── layouts/         # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/           # Routes
│   │   └── index.astro
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
│       └── date.ts
├── astro.config.mjs     # Astro configuration
├── wrangler.toml        # Cloudflare configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Development

### Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start dev server at `localhost:4321`              |
| `npm run build`        | Build production site to `./dist/`                |
| `npm run preview`      | Preview build locally before deploying            |
| `npm run astro ...`    | Run Astro CLI commands                            |

### Creating Blog Posts

Create a new markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
pubDate: 2026-01-16
author: "Andreas Duess"
heroImage: "/images/blog/hero.jpg"
tags: ["AI Strategy", "Career"]
draft: false
---

Your content here...
```

## Deployment

### Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect your Git repository

2. **Configure Build**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - Environment variables: None required

3. **Deploy**
   - Push to main branch triggers automatic deployment
   - Free tier includes:
     - 500 builds/month
     - Unlimited bandwidth
     - Unlimited requests
     - Custom domains

### Manual Deployment

```bash
# Install Wrangler CLI
npm install -g wrangler

# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=experience-advantage
```

## Configuration

### Site Settings

Edit `src/layouts/BaseLayout.astro`:
- Site name
- Default meta descriptions
- Open Graph images
- Social media handles

### Email Capture

The `EmailCapture` component currently logs to console. To connect to a real service:

1. Update the form action in `src/components/EmailCapture.astro`
2. Implement `/api/subscribe` endpoint
3. Options:
   - Cloudflare Workers API
   - ConvertKit
   - Mailchimp
   - Custom API

### Analytics

Add analytics by including the script in `src/layouts/BaseLayout.astro`:

**Recommended:** Plausible or Fathom (privacy-friendly, no cookie banners)

```astro
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## Performance

Target metrics:
- PageSpeed Score: 100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Cumulative Layout Shift: 0

### Optimization Checklist

- ✅ System fonts (no web font loading)
- ✅ Minimal JavaScript
- ✅ Optimized images (WebP recommended)
- ✅ Static site generation
- ✅ Cloudflare CDN
- ✅ No external dependencies

## Content Strategy

Based on "AI for Experienced Professionals":

**Target Audience:**
- Professionals 50+ facing ageism
- Experienced professionals in traditional industries
- Leaders needing to navigate AI transformation

**Core Positioning:**
- Experience is an unfair advantage (not a liability)
- AI amplifies expertise (doesn't replace it)
- Practical over hype
- Outcomes over theory

**Content Themes:**
1. AI Strategy for experienced professionals
2. Career longevity and competitive advantage
3. Intelligence economy insights
4. Tech-to-traditional transformation
5. Applied intelligence (not AI theatre)

## SEO

Built-in SEO features:
- ✅ Canonical URLs
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Structured data (article schema)
- ✅ Sitemap generation
- ✅ RSS feed
- ✅ Semantic HTML
- ✅ Descriptive alt text

## License

Copyright © 2026 Andreas Duess. All rights reserved.

## Support

For questions or issues, contact: andreas@tenuredadvantage.com
