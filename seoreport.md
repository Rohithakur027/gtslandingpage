# SEO AUDIT REPORT — Ground to Sky Academy (groundtosky.in)

**Date:** 2026-02-23
**Framework:** Next.js 16.1.6 (App Router)
**Domain:** https://groundtosky.in

---

## Executive Summary

**Overall SEO Health Score: NEEDS WORK**

### Top 5 Critical Issues
1. Homepage is fully client-side rendered (`"use client"`) — Google cannot crawl any homepage content
2. Most pages missing unique meta titles & descriptions
3. Sitemap has wrong URL (`/blogs` instead of `/blog`) and missing dynamic routes
4. No Organization/LocalBusiness structured data — critical for local training institute
5. Nested `<body>` tags — `clientlayout.tsx` renders `<body>` inside layout.tsx's `<body>`

### Quick Wins
1. Add `export const metadata` to `/courses`, `/contact`, `/gallery`, `/blog` pages
2. Fix sitemap URL from `/blogs` to `/blog`
3. Add `generateMetadata` to `/courses/[slug]/page.tsx`
4. Fix nested `<body>` tag in `clientlayout.tsx`
5. Add FAQ structured data (JSON-LD) to FAQ section

---

## PART 1: TECHNICAL SEO

### 1.1 Crawlability & Indexability

| Issue | File | Severity | Recommendation |
|-------|------|----------|----------------|
| Homepage entirely client-rendered — all content invisible to crawlers | `app/page.tsx:1` | CRITICAL | Remove `"use client"`, isolate interactive parts into small client wrappers |
| Blog listing client-rendered | `app/blog/page.tsx:1` | HIGH | Convert to server component |
| Contact page client-rendered | `app/contact/page.tsx:1` | MEDIUM | Extract static content to server component |
| Gallery page client-rendered | `app/gallery/page.tsx:1` | MEDIUM | Convert to server component |
| Sitemap references `/blogs` but actual route is `/blog` | `public/sitemap-0.xml:8` | CRITICAL | Fix to `https://groundtosky.in/blog` |
| Sitemap missing dynamic routes (blog posts, course pages) | `public/sitemap-0.xml` | HIGH | Configure next-sitemap to include dynamic routes |
| Sitemap includes `/thankyou` page | `public/sitemap-0.xml:4` | LOW | Exclude and add noindex |
| No canonical tags on any pages | All pages | HIGH | Add canonical URLs via Next.js metadata API |
| No noindex on thank-you page | `app/thankyou/page.tsx` | MEDIUM | Add `robots: { index: false }` to metadata |
| robots.txt has stray `# *` on line 1 | `public/robots.txt:1` | LOW | Remove stray comment |

### 1.2 URL Structure

| Route | Status | Issues |
|-------|--------|--------|
| `/` | OK | Clean |
| `/blog` | OK | Clean |
| `/blog/[slug]` | OK | Descriptive slugs |
| `/courses` | OK | Clean |
| `/courses/[slug]` | OK | Descriptive slugs |
| `/contact` | OK | Clean |
| `/gallery` | OK | Clean |
| `/thankyou` | MINOR | Should be `/thank-you` (hyphenated) |

### 1.3 Meta Tags Per Page

| Page | Title | Description | Keywords | OG Tags | Twitter |
|------|-------|-------------|----------|---------|---------|
| `/` (layout) | 87 chars — TOO LONG | 161 chars — OK | 12 keywords | MISSING | MISSING |
| `/blog` | MISSING (inherits root) | MISSING | MISSING | MISSING | MISSING |
| `/blog/[slug]` | Dynamic — OK | Dynamic — OK | Dynamic — OK | Present | Present |
| `/courses` | MISSING | MISSING | MISSING | MISSING | MISSING |
| `/courses/[slug]` | MISSING — no generateMetadata | MISSING | MISSING | MISSING | MISSING |
| `/contact` | MISSING | MISSING | MISSING | MISSING | MISSING |
| `/gallery` | MISSING | MISSING | MISSING | MISSING | MISSING |
| `/thankyou` | MISSING | MISSING | MISSING | MISSING | MISSING |

**6 out of 8 page types lack unique title/description.**

### 1.4 Heading Structure

| Page | H1 | Issues |
|------|-----|--------|
| `/` | "Soar High with GTS Academy Become An Accomplished Cabin Crew" | Not keyword-optimized for "Air Hostess Training Delhi" |
| `/blog` | MISSING | CRITICAL — needs H1 |
| `/blog/[slug]` | Dynamic blog title | OK |
| `/courses` | "Professional Aviation & Hospitality Courses" | OK |
| `/courses/[slug]` | Dynamic course title | OK |
| `/contact` | "Contact us" | Generic, should include keywords |
| `/gallery` | "Life at Ground to sky Academy" | "sky" should be "Sky" |
| `/thankyou` | MISSING | Not critical (noindex page) |

### 1.5 Image SEO

| Issue | File | Severity |
|-------|------|----------|
| Navigation logo alt text is just "Logo" | `components/navigation.tsx:19` | MEDIUM |
| Gallery images reference non-existent paths (`/images/gallery/`) | `app/gallery/page.tsx:22-74` | HIGH |
| Course images use external Unsplash URLs | `data/coursesdata.ts:39,98,157,216` | MEDIUM |
| Next.js image optimization DISABLED (`unoptimized: true`) | `next.config.mjs:9-11` | HIGH |
| Training images use WebP (good) | `data/trainingdata.ts` | OK |

### 1.6 Performance

| Issue | File | Severity |
|-------|------|----------|
| Image optimization disabled | `next.config.mjs:10` | HIGH |
| Meta Pixel uses `dangerouslySetInnerHTML` — render-blocking | `app/layout.tsx:40-55` | MEDIUM |
| Two large video files served without CDN | `public/videos/` | MEDIUM |
| ESLint and TypeScript errors ignored in builds | `next.config.mjs:3-8` | MEDIUM |
| Nested `<body>` tag — invalid HTML | `app/clientlayout.tsx:37` | HIGH |

### 1.7 Structured Data / Schema Markup

| Schema Type | Present? | Location | Issues |
|-------------|----------|----------|--------|
| BlogPosting | Yes | `blog/seo/blog-structured-data.tsx` | Publisher name is "Modern Blog" — should be "Ground to Sky Academy" |
| Blog (list) | Yes | `blog/seo/blog-list-structured-data.tsx` | Publisher "Modern Blog", description references "web development" (template text) |
| Organization | MISSING | — | CRITICAL — No business schema |
| LocalBusiness | MISSING | — | CRITICAL — Essential for local SEO |
| Course | MISSING | — | HIGH — Course pages need Course schema |
| FAQPage | MISSING | — | HIGH — FAQ section exists but no schema |
| BreadcrumbList | MISSING | — | MEDIUM |
| WebSite | MISSING | — | MEDIUM |

### 1.8 Internal Linking Issues

| Issue | File | Severity |
|-------|------|----------|
| Broken link to `/apply` — route doesn't exist | `app/courses/[slug]/page.tsx:168` | HIGH |
| All footer links point to `#` (9 placeholder links) | `components/footer.tsx:58-130` | HIGH |
| Phone `tel:` href has WRONG number — `tel:+911234567890` but displays `+91 95600 02923` | `components/navigation.tsx:77,85` | HIGH |
| No internal links to `/gallery` from main pages | — | MEDIUM |
| Blog post internal links point to `/` instead of specific pages | `data/blogdata/blogs.ts:50,215-216` | MEDIUM |
| Blog post URL uses placeholder `https://your-blog-domain.com` | `app/blog/[slug]/page.tsx:72` | HIGH |

### 1.9 External Links

| Issue | File | Severity |
|-------|------|----------|
| Footer social links missing `rel="noopener noreferrer"` | `components/footer.tsx:33-50` | MEDIUM |

---

## PART 2: CONTENT SEO

### 2.1 Content Inventory

| Page | Title | H1 | Est. Words | Images | Schema | OG Tags | Issues |
|------|-------|----|-----------|--------|--------|---------|--------|
| `/` | Too long (87 chars) | Present | ~800 (CLIENT-RENDERED) | ~25 | None | MISSING | Content invisible to crawlers |
| `/blog` | MISSING | MISSING | ~50 (thin) | 0 | Blog (broken) | MISSING | No H1, thin content |
| `/blog/[slug]` | OK | OK | ~1500+ | 4 | BlogPosting | Present | Publisher name wrong |
| `/courses` | MISSING | OK | ~200 | 4 (external) | None | MISSING | Needs metadata |
| `/courses/air-hostess-training` | MISSING | OK | ~300 | 1 (external) | None | MISSING | Needs metadata + schema |
| `/courses/hotel-operations-management` | MISSING | OK | ~250 | 1 (external) | None | MISSING | Needs metadata + schema |
| `/courses/airport-ground-staff` | MISSING | OK | ~250 | 1 (external) | None | MISSING | Needs metadata + schema |
| `/courses/travel-tourism-management` | MISSING | OK | ~250 | 1 (external) | None | MISSING | Needs metadata + schema |
| `/contact` | MISSING | Generic | ~50 (thin) | 0 | None | MISSING | Thin content |
| `/gallery` | MISSING | OK | ~50 (thin) | 8 (broken paths) | None | MISSING | Broken images, thin |
| `/thankyou` | MISSING | MISSING | ~30 | 0 | None | MISSING | Should be noindex |

### 2.2 Content Quality Issues

| Issue | Location | Severity |
|-------|----------|----------|
| Homepage ~800 words invisible to crawlers | `app/page.tsx` | CRITICAL |
| Contact page very thin (~50 words) | `app/contact/page.tsx` | MEDIUM |
| Gallery page thin content (~50 words) | `app/gallery/page.tsx` | MEDIUM |
| Only 1 blog post exists | `data/blogdata/blogs.ts` | MEDIUM |
| Typo: "Assitance" instead of "Assistance" | `components/features-section.tsx:31` | LOW |
| Typo: "partener" in filenames | `components/partener.tsx` | LOW |

---

## PART 3: FRAMEWORK-SPECIFIC (Next.js 16)

| Check | Status | Issue |
|-------|--------|-------|
| SSR/SSG for SEO pages | FAIL | Homepage, blog listing, contact, gallery all `"use client"` |
| Dynamic routes meta tags | PARTIAL | Blog `[slug]` has generateMetadata, courses `[slug]` does not |
| 404 page handling | MISSING | No custom `not-found.tsx` |
| Next.js Image optimization | DISABLED | `unoptimized: true` in config |
| Nested `<body>` tag | BUG | `clientlayout.tsx` renders `<body>` inside layout's `<body>` |

---

## Issue Count Summary

| Category | Critical | High | Medium | Low | Total |
|----------|----------|------|--------|-----|-------|
| Crawlability & Indexability | 2 | 3 | 2 | 1 | 8 |
| Meta Tags & Titles | 0 | 2 | 1 | 0 | 3 |
| Heading Structure | 0 | 1 | 1 | 0 | 2 |
| Image SEO | 0 | 2 | 2 | 1 | 5 |
| Performance | 0 | 2 | 2 | 1 | 5 |
| Structured Data | 2 | 2 | 2 | 0 | 6 |
| Internal Linking | 0 | 3 | 2 | 0 | 5 |
| External Links | 0 | 0 | 1 | 0 | 1 |
| Content Quality | 1 | 0 | 3 | 2 | 6 |
| Open Graph / Social | 0 | 1 | 0 | 0 | 1 |
| Framework-specific | 1 | 2 | 0 | 0 | 3 |
| **TOTAL** | **6** | **18** | **16** | **5** | **45** |

---

## Priority Action Plan

### 1. CRITICAL FIXES (Do Immediately)

1. **Convert homepage to server-rendered** — Remove `"use client"` from `app/page.tsx`, isolate interactive parts into small client wrappers
2. **Fix sitemap** — Change `/blogs` to `/blog`, add dynamic routes for blog posts and course pages, exclude `/thankyou`
3. **Add Organization/LocalBusiness schema** to root layout with name, address (Delhi/Janakpuri), phone, business type
4. **Fix nested `<body>` tag** — Change `clientlayout.tsx` `<body>` to `<div>`
5. **Fix broken `/apply` link** — Change to `/contact` in `courses/[slug]/page.tsx:168`
6. **Fix phone `tel:` href** — Change `tel:+911234567890` to `tel:+919560002923` in navigation

### 2. HIGH-PRIORITY FIXES (This Week)

7. Add unique metadata to `/blog`, `/courses`, `/contact`, `/gallery` — each needs unique title (50-60 chars), description (150-160 chars), OG tags
8. Add `generateMetadata` to `/courses/[slug]/page.tsx` using course data
9. Shorten root title to ~60 chars: `"Air Hostess Training in Delhi | Ground to Sky Academy"`
10. Add FAQPage schema to FAQ section
11. Add Course schema to individual course pages
12. Fix all footer placeholder links (`#`) — point to actual pages
13. Fix blog structured data — Change "Modern Blog" to "Ground to Sky Academy", fix template descriptions
14. Enable Next.js image optimization — Remove `unoptimized: true`
15. Fix blog post URL placeholder — Change `your-blog-domain.com` to `groundtosky.in`
16. Fix gallery image paths — reference actual existing images
17. Add H1 to blog listing page
18. Add noindex to thank-you page

### 3. MEDIUM-PRIORITY (This Month)

19. Convert blog listing and gallery to server components
20. Add canonical URLs to all pages
21. Add OG tags to all remaining pages
22. Add BreadcrumbList schema to blog and course detail pages
23. Add WebSite schema with SearchAction to homepage
24. Use `next/script` for Meta Pixel instead of `dangerouslySetInnerHTML`
25. Fix navigation logo alt text — "Logo" to "Ground to Sky Academy Logo"
26. Add `rel="noopener noreferrer"` to external links in footer
27. Add more content to contact page (address, map, office hours)
28. Add custom 404 page (`app/not-found.tsx`)
29. Optimize H1 on homepage for target keyword "Air Hostess Training in Delhi"
30. Replace external Unsplash images with local optimized images
31. Add more blog posts

### 4. LOW-PRIORITY (Backlog)

32. Fix typo "Assitance" to "Assistance" in features section
33. Fix filename typo "partener" to "partner"
34. Add skip-navigation link for accessibility
35. Add ARIA labels to interactive elements
36. Configure security headers (CSP, HSTS)
37. Rename `/thankyou` to `/thank-you`
38. Remove unused shadcn/ui components

---

**Total Issues: 45** (6 Critical, 18 High, 16 Medium, 5 Low)

The single most impactful fix is converting the homepage from client-side to server-side rendering, which would immediately make ~800 words of content visible to Google crawlers.
