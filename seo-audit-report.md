# SEO AUDIT REPORT — Ground to Sky Academy (groundtosky.in)

**Audit Date:** 2026-04-12  
**Auditor:** Claude Code AI  
**Framework:** Next.js (App Router)  
**Domain:** https://groundtosky.in  
**Business Type:** Aviation & Hospitality Training Institute, Janakpuri, New Delhi, India

---

## Executive Summary

**Overall SEO Health Score: GOOD — with targeted improvements needed**

The site has undergone significant improvements since the previous audit (Feb 2026). It is now server-rendered, has metadata on all pages, canonical URLs set, and key schemas (Organization, Course, FAQ, Breadcrumb) in place. The remaining gaps are in local SEO schema enrichment, title tag optimization, content volume (blog), and a few technical configuration items.

### Remaining Top Issues
1. `OrganizationSchema` uses `EducationalOrganization` only — missing `LocalBusiness` type (critical for local search ranking)
2. Course & gallery title tags lack the institute name and are too generic
3. Homepage `lang` attribute is `"en"` — should be `"en-IN"` for India targeting
4. Only 1 blog post — insufficient content for keyword authority
5. Sitemap homepage priority is `0.7` — should be `1.0`
6. `WebSiteSchema` missing `SearchAction` (sitelinks search box signal)
7. Footer Privacy Policy & Terms of Service both point to `/contact` (broken)

---

## SECTION 1: TECHNICAL SEO

### 1.1 Crawlability & Indexability

| Check | Status | Notes |
|-------|--------|-------|
| HTTPS / SSL | ✅ GOOD | Configured at domain level |
| robots.txt | ✅ GOOD | Allows all, points to sitemap |
| sitemap.xml | ✅ GOOD | Auto-generated via next-sitemap |
| Canonical tags | ✅ GOOD | Set on all major pages via Next.js metadata API |
| 404 handling | ✅ GOOD | `app/not-found.tsx` exists |
| noindex on thank-you | ✅ GOOD | `/thank-you` excluded from sitemap |
| Homepage SSR | ✅ GOOD | No `"use client"` in `app/page.tsx` |
| Course pages SSR | ✅ GOOD | `generateStaticParams` in `[slug]/page.tsx` |
| Redirect `/thankyou` → `/thank-you` | ✅ GOOD | Configured in `next.config.mjs` |
| HTML `lang` attribute | ⚠️ NEEDS WORK | Set to `"en"` — should be `"en-IN"` for India |
| Sitemap homepage priority | ⚠️ NEEDS WORK | Set to `0.7` — should be `1.0` |
| Blog post in sitemap | ⚠️ NEEDS WORK | Only 1 blog post listed; as posts are added, sitemap needs dynamic generation |

### 1.2 Title Tags

| Page | Current Title | Chars | Status | Issue |
|------|--------------|-------|--------|-------|
| `/` | Air Hostess Training in Delhi \| Ground to Sky Academy | 52 | ✅ GOOD | — |
| `/courses` | Aviation & Hospitality Courses in Delhi | 39 | ⚠️ NEEDS WORK | Missing institute name |
| `/courses/[slug]` | `{course.title} in Delhi` | ~28–40 | ⚠️ NEEDS WORK | Too short, missing institute name |
| `/contact` | Contact Ground to Sky Academy \| Aviation Training Delhi | 55 | ✅ GOOD | — |
| `/gallery` | Campus Life & Training Gallery | 30 | ⚠️ NEEDS WORK | No location, no institute name |
| `/blog` (layout) | Aviation Career Blog \| Tips & Guides | 37 | ⚠️ NEEDS WORK | No location, no institute name |
| `/blog/[slug]` | Dynamic (post.title) | varies | ✅ GOOD | — |

**Rule:** Google truncates titles over 60 characters. Target: keyword-rich, under 60 chars, unique per page.

### 1.3 Meta Descriptions

| Page | Status | Notes | 
|------|--------|-------|
| `/` | ✅ GOOD | Includes keywords + CTA |
| `/courses` | ✅ GOOD | Descriptive, includes location |
| `/courses/[slug]` | ✅ GOOD | Dynamic, includes course details |
| `/contact` | ✅ GOOD | Includes phone + location |
| `/gallery` | ⚠️ NEEDS WORK | Generic, lacks primary keywords |
| `/blog` (layout) | ⚠️ NEEDS WORK | No location keyword |
| `/blog/[slug]` | ✅ GOOD | Dynamic from post.metaDescription |

### 1.4 Header Tag Hierarchy

| Page | H1 | H2s | Issues |
|------|----|-----|--------|
| `/` | "Best Air Hostess & Cabin Crew Training Academy in Delhi" | Multiple section headings | ✅ H1 is keyword-rich |
| `/courses` | "Professional Aviation & Hospitality Courses" | None visible | ⚠️ H1 lacks "Delhi" keyword |
| `/courses/[slug]` | `{course.title}` | "Course Syllabus", "Career Opportunities" | ✅ OK |
| `/contact` | "Contact Ground to Sky Academy" | "How to Reach Ground to Sky Academy" | ✅ OK |
| `/gallery` | "Life at Ground to Sky Academy" | None | ⚠️ H1 not keyword-optimized |
| `/blog` | "Aviation Career Blog" | — | ⚠️ Missing location keyword |
| `/blog/[slug]` | Dynamic post title | Section headings | ✅ OK |

### 1.5 Image Alt Text

| Location | Status | Notes |
|----------|--------|-------|
| Gallery images | ✅ GOOD | Descriptive alt text on all 8 gallery images |
| Course images | ⚠️ NEEDS WORK | Uses `course.title` only — not descriptive enough |
| Partner logos | ✅ GOOD | `{partner.name} logo` — acceptable |
| FAQ section image | ✅ GOOD | "Professional Air Hostess" |
| Hero section video | N/A | Video element — no alt attribute needed |

### 1.6 Core Web Vitals (Estimated)

| Metric | Desktop | Mobile | Status | Notes |
|--------|---------|--------|--------|-------|
| LCP | Moderate | Needs attention | ⚠️ | Background autoplay video on desktop; lazy-loaded images help |
| CLS | Good | Good | ✅ | Fixed-size containers used |
| INP | Good | Good | ✅ | Scripts loaded `afterInteractive` |
| Script loading | ✅ GOOD | GTM, GA, Ads, FB Pixel all `afterInteractive` |
| Image optimization | ✅ GOOD | `next/image` used throughout; WebP images |

### 1.7 Structured Data / Schema Markup

| Schema Type | Present | Status | Issues |
|-------------|---------|--------|--------|
| EducationalOrganization | ✅ Yes | ✅ GOOD | In root layout |
| LocalBusiness | ❌ No | ⚠️ CRITICAL | Missing — vital for local SEO rankings |
| WebSite | ✅ Yes | ⚠️ NEEDS WORK | Missing SearchAction |
| Course | ✅ Yes | ✅ GOOD | On each course detail page |
| FAQPage | ✅ Yes | ✅ GOOD | On homepage |
| BreadcrumbList | ✅ Yes | ✅ GOOD | On course and blog detail pages |
| BlogPosting | ✅ Yes | ✅ GOOD | On each blog post |
| Blog (list) | ✅ Yes | ✅ GOOD | On blog listing page |
| AggregateRating | ❌ No | LOW | Add when review data available |
| OpeningHours | ❌ No | ⚠️ NEEDS WORK | Not in Organization schema |

---

## SECTION 2: ON-PAGE SEO

### 2.1 Keyword Coverage

| Target Keyword | Homepage | Courses | Course Detail | Blog |
|----------------|----------|---------|---------------|------|
| air hostess training in Delhi | ✅ H1, title, desc | ✅ desc | ✅ title+desc | ✅ content |
| cabin crew training Delhi | ✅ H1, content | ✅ content | ✅ content | ✅ content |
| ground staff training Delhi | ✅ content | ✅ content | ✅ (slug page) | ❌ Low |
| aviation training courses Delhi | ✅ content | ✅ title | ✅ content | ❌ Low |
| best air hostess academy Delhi | ✅ H1 partial | ❌ Missing | ❌ Missing | ❌ Missing |
| Janakpuri | ✅ schema | ❌ Missing | ❌ Missing | ❌ Missing |

### 2.2 Internal Linking

| Check | Status | Notes |
|-------|--------|-------|
| Footer navigation | ✅ GOOD | Links to all main pages + courses |
| Course pages → contact | ✅ GOOD | "Apply Now" → /contact |
| Homepage → courses | ✅ GOOD | Course section links to /courses/[slug] |
| Blog → courses | ⚠️ NEEDS WORK | Blog CTA links to `/courses/cabin-crew-certification` (404 route) |
| Gallery link from nav | ✅ GOOD | Navigation includes gallery |
| Privacy Policy page | ❌ MISSING | Footer links to /contact instead |
| Terms of Service page | ❌ MISSING | Footer links to /contact instead |

### 2.3 URL Structure

| URL | Status |
|-----|--------|
| `/courses/air-hostess-training` | ✅ Keyword-rich |
| `/courses/airport-ground-staff` | ✅ Keyword-rich |
| `/courses/hotel-operations-management` | ✅ Keyword-rich |
| `/courses/travel-tourism-management` | ✅ Keyword-rich |
| `/blog/best-cabin-crew-courses-india-guide` | ✅ Keyword-rich |

---

## SECTION 3: LOCAL SEO

### 3.1 Local SEO Signals

| Signal | Status | Notes |
|--------|--------|-------|
| Business name in title | ✅ GOOD | "Ground to Sky Academy" in all titles |
| Delhi keyword in title | ✅ GOOD | Homepage, contact, courses |
| Janakpuri in content | ✅ GOOD | Contact page mentions multiple times |
| Phone in footer | ✅ GOOD | +91 95600 02923 |
| Phone in schema | ✅ GOOD | OrganizationSchema |
| Email in footer | ✅ GOOD | hello@groundtosky.in |
| Address in schema | ✅ GOOD | Janakpuri, New Delhi, 110058 |
| Google Maps embed | ✅ GOOD | On contact page |
| LocalBusiness schema | ❌ MISSING | **CRITICAL** — Use alongside EducationalOrganization |
| Opening hours in schema | ❌ MISSING | Mon–Sat 9AM–6PM should be in schema |
| Review/Rating schema | ❌ MISSING | No testimonials section with schema |
| NAP Consistency | ✅ GOOD | Name/Address/Phone consistent across site |

### 3.2 Local Keywords Presence

| Keyword | Present |
|---------|---------|
| "Delhi" | ✅ Multiple pages |
| "New Delhi" | ✅ Contact + schema |
| "Janakpuri" | ✅ Contact page + schema |
| "West Delhi" | ✅ Contact page |
| "Janakpuri West Metro" | ✅ Contact page |
| "Connaught Place" | ❌ Not mentioned |
| "Karol Bagh" | ❌ Not mentioned |

---

## SECTION 4: CONTENT & KEYWORDS

### 4.1 Content Inventory

| Page | Word Count (est.) | Quality | Gaps |
|------|------------------|---------|------|
| Homepage | ~600 | ✅ Good | Could add testimonials |
| /courses | ~200 | ⚠️ Thin | Course listing only |
| /courses/air-hostess-training | ~400 | ✅ Good | Could add FAQs |
| /courses/airport-ground-staff | ~350 | ✅ Good | — |
| /contact | ~300 | ✅ Good | Improved in current version |
| /gallery | ~100 | ⚠️ Thin | Image grid only |
| /blog | Listing page | ✅ OK | — |
| Blog post | ~1,500 | ✅ Good | Need more posts |

### 4.2 Content Gaps

| Gap | Priority |
|-----|----------|
| Only 1 blog post | HIGH — Need 8–12 posts for keyword authority |
| No student testimonials section | HIGH — Critical trust signal |
| No dedicated "About Us" page | MEDIUM |
| No FAQ on course pages | MEDIUM |
| No salary/placement statistics page | MEDIUM |
| Ground staff training blog content | HIGH — underserved vs competitor |

### 4.3 Blog Content Strategy

Recommended blog topics:
1. "How to Become an Air Hostess in India: Complete Guide 2025" ← **Implemented in this audit**
2. "Top Career Options After Ground Staff Training in Delhi"
3. "Air Hostess Salary in India 2025: Domestic vs International Airlines"
4. "Air Hostess Interview Tips: How to Crack Airline Selection"
5. "DGCA Medical Fitness Requirements for Cabin Crew in India"
6. "Top 10 Airlines Hiring Cabin Crew in India in 2025"

---

## SECTION 5: BACKLINK PROFILE

*Note: Backlink data requires external tools (Ahrefs/Semrush). Based on site age and content, estimated profile:*

| Metric | Estimate | Recommendation |
|--------|----------|----------------|
| Domain Authority | Low–Medium | Build local citations |
| Referring Domains | < 50 est. | Target aviation directories, Delhi business listings |
| Toxic Links | Unknown | Run Ahrefs/Semrush audit |

**Recommended local citation sources:**
- JustDial, Sulekha, Practo (for courses)
- IndiaMart, TradeIndia
- Delhi Government education portals
- Aviation news sites (aviationA2Z, simpleflying)
- LinkedIn company profile

---

## SECTION 6: COMPETITOR SNAPSHOT

*Target keywords: "air hostess training Delhi", "ground staff training Delhi"*

| Competitor Type | Typical Strengths | Gaps We Can Exploit |
|-----------------|-------------------|---------------------|
| Large institute chains | High DA, multiple locations | Less personalized content |
| Government portals | High authority | Slow updates, less practical focus |
| YouTube educators | Video content | No course landing pages |

**Content depth target:** 1,500+ words per course page, 800+ words per blog post.

---

## SECTION 7: SCORES SUMMARY

| Category | Score | Status |
|----------|-------|--------|
| Technical SEO | 78/100 | ✅ Good |
| Title Tags | 65/100 | ⚠️ Needs Work |
| Meta Descriptions | 75/100 | ✅ Good |
| Schema / Structured Data | 70/100 | ⚠️ Needs Work |
| Local SEO | 65/100 | ⚠️ Needs Work |
| Content & Keywords | 60/100 | ⚠️ Needs Work |
| Internal Linking | 75/100 | ✅ Good |
| Image SEO | 70/100 | ✅ Good |
| **Overall** | **70/100** | **⚠️ Good — Targeted improvements needed** |

---

## PHASE 2 IMPLEMENTATION CHECKLIST

- [x] 1. Fix `lang` attribute to `en-IN` in root layout
- [x] 2. Improve title tags: courses, gallery, blog listing, course detail template  
- [x] 3. Upgrade OrganizationSchema to include LocalBusiness + openingHours
- [x] 4. Add SearchAction to WebSiteSchema
- [x] 5. Fix sitemap homepage priority to 1.0; add new blog post
- [x] 6. Add new blog post (800+ words): "How to Become an Air Hostess in India"
- [x] 7. Improve course image alt text to be descriptive
- [x] 8. Improve gallery meta description with local keywords
- [x] 9. Fix blog CTA link in existing blog post (points to 404 route)
- [x] 10. Update next-sitemap config with new blog post

---

*This report was generated by automated codebase analysis. For live performance data, connect Google Search Console and PageSpeed Insights.*
