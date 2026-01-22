# 50+ - Project Context

## Overview
Personal website and thought leadership platform for Andreas Duess, focused on helping experienced professionals (50+) leverage AI to amplify their competitive advantage.

## Tech Stack
- **Framework**: Astro v5.16.11 (static site generator)
- **Hosting**: Cloudflare Pages
- **Content**: Markdown files in `src/content/how-to-thrive/`
- **Newsletter**: ConvertKit (API integration)
- **Deployment**: Manual via `npx wrangler pages deploy dist --project-name=tenured-advantage`

## Important: Manual Deployment Required
**GitHub does NOT auto-deploy to Cloudflare Pages.** After pushing to GitHub, you must manually run:
```bash
npm run build
npx wrangler pages deploy dist --project-name=tenured-advantage
```

## Environment Variables

### Local Development
Credentials stored in `.env` (not committed to git):
- `CONVERTKIT_API_KEY` - ConvertKit API key for newsletter subscriptions
- `CONVERTKIT_API_SECRET` - ConvertKit API secret

### Production (Cloudflare Pages)
**IMPORTANT:** Add these environment variables in Cloudflare Pages dashboard:
1. Go to https://dash.cloudflare.com/
2. Navigate to Pages → tenured-advantage → Settings → Environment variables
3. Add the same variables from `.env` file

**Required for production:**
- `CONVERTKIT_API_KEY` - Without this, email subscriptions will fail in production

## Content Structure

### Blog Articles
- Location: `src/content/how-to-thrive/`
- Collection name: `'how-to-thrive'` (note: quotes required due to hyphens)
- URL structure: `/how-to-thrive/[slug]/`

### Writing Guidelines
See: `/Users/andreasduess/Claude/projects/tenured-advantage/planning/tenured-advantage-writing-guidelines.md`

**Critical rules:**
- NO fake CTAs with invented subscriber counts
- Use `[Newsletter CTA - to be provided]` as placeholder
- Follow Andreas's warm, I/we voice (not corporate we)
- No emojis unless explicitly requested

### Images
- Location: `public/images/`
- Each article must have unique hero image
- Unused images suffixed with `-to-be-used.webp`

## Project-Specific Notes

### URL Structure
Changed from `/blog/` to `/how-to-thrive/` on 2026-01-17 to better align with warm, inclusive tone.

### ConvertKit Integration
EmailCapture component connects to ConvertKit for newsletter subscriptions with:
- Form ID: 8984502
- API endpoint: `/api/subscribe` (src/pages/api/subscribe.ts)
- 5-day automated welcome sequence (configured in ConvertKit dashboard)
- Regular broadcasts after sequence completion
- Client-side component: src/components/EmailCapture.astro
- Server-side API: src/pages/api/subscribe.ts (keeps API key secure)

## Related Documentation
- Main content drafts: `~/Claude/projects/tenured-advantage/`
- Writing guidelines: `~/Claude/projects/tenured-advantage/planning/tenured-advantage-writing-guidelines.md`
- Andreas's master prompt: `~/Claude/context/andreas-duess-personal-master-prompt.md`
