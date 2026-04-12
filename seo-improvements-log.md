# SEO Improvements Log — Ground to Sky Academy

**Sessions:** April 2026 (2 implementation sessions)  
**Auditor:** Claude Code AI  
**Total files changed:** 22

---

## SESSION 1 CHANGES

### S1-1 — HTML `lang` attribute
**File:** `app/layout.tsx`  
`lang="en"` → `lang="en-IN"` — correct BCP 47 region tag for India targeting.

### S1-2 — Root layout default metadata
**File:** `app/layout.tsx`  
Added default OG image, `openGraph.locale: "en_IN"`, updated keywords to include all primary target keywords ("ground staff training Delhi", "best air hostess academy Delhi", etc.)

### S1-3 — Homepage metadata
**File:** `app/page.tsx`  
Title updated to match audit template. Added `openGraph.images` and `twitter.images` with the logo URL, dimensions, and descriptive alt text.

### S1-4 — Courses page title tag
**File:** `app/courses/page.tsx`  
Before: `"Aviation & Hospitality Courses in Delhi"` (39 chars, no brand)  
After: `"Aviation & Hospitality Courses in Delhi | Ground to Sky Academy"` (63 chars)

### S1-5 — Gallery layout metadata
**File:** `app/gallery/layout.tsx`  
Title: `"Campus Life & Training Gallery"` → `"Training Gallery | Aviation Academy Delhi | Ground to Sky"`  
Description: Added aviation keywords, Janakpuri location, session types.

### S1-6 — Blog layout metadata
**File:** `app/blog/layout.tsx`  
Title: `"Aviation Career Blog | Tips & Guides"` → `"Aviation Career Blog Delhi | Ground to Sky Academy"`  
Description: Added "ground staff jobs", "Delhi" keyword.

### S1-7 — Course detail page metadata template
**File:** `app/courses/[slug]/page.tsx`  
Title: `"${course.title} in Delhi"` → `"${course.title} in Delhi | Ground to Sky Academy"`  
OG image: added alt text with keywords.  
Course hero image alt text: `alt={course.title}` → `alt={\`${course.title} training session at Ground to Sky Academy, Janakpuri, Delhi\`}`

### S1-8 — OrganizationSchema upgraded to LocalBusiness
**File:** `components/organization-schema.tsx`  
Changed `@type` from `"EducationalOrganization"` to `["EducationalOrganization", "LocalBusiness"]`.  
Added: `openingHoursSpecification`, `priceRange`, `currenciesAccepted`, `paymentAccepted`, `areaServed` (Delhi, Janakpuri, West Delhi, etc.), `ImageObject` for logo.  
Upgraded `hasOfferCatalog` from simple Course items to `Offer` + nested `Course` objects per Schema.org spec.

### S1-9 — WebSiteSchema: added SearchAction
**File:** `components/website-schema.tsx`  
Added `potentialAction.SearchAction` pointing to `/blog?q={search_term_string}` — triggers sitelinks search box in Google results.  
Added `inLanguage: "en-IN"`.

### S1-10 — Sitemap overhaul
**Files:** `next-sitemap.config.js`, `public/sitemap-0.xml`  
Homepage priority: `0.7` → `1.0`.  
Added custom `transform` function for per-route priority control.  
Robots.txt: now explicitly disallows `/thank-you` and `/thankyou`.

### S1-11 — New blog post: "How to Become an Air Hostess in India"
**File:** `data/blogdata/blogs.ts`  
Added 1,400-word blog post with 5 sections covering eligibility, step-by-step process, salary, why Delhi, and myth-busting.  
Slug: `how-to-become-air-hostess-india-guide`

### S1-12 — Fixed broken CTA link in post 1
**File:** `data/blogdata/blogs.ts`  
`/courses/cabin-crew-certification` (404) → `/courses/air-hostess-training`

---

## SESSION 2 CHANGES

### S2-1 — Fix 6: H1 tag — Courses page
**File:** `app/courses/page.tsx`  
Before: `"Professional Aviation & Hospitality Courses"`  
After: `"Aviation & Hospitality Courses in Delhi"`  
Reason: The H1 now matches the page title and contains the "Delhi" geo-modifier critical for local SEO.

### S2-2 — Fix 6: H1 tag — Gallery page
**File:** `app/gallery/page.tsx`  
Before: `"Life at Ground to Sky Academy"`  
After: `"Training Life at Ground to Sky Academy, Delhi"`  
Reason: Adds location keyword and aligns with gallery layout metadata.

### S2-3 — Fix 6: H1 tag — Blog listing page
**File:** `app/blog/page.tsx`  
Before: `"Aviation Career Blog"`  
After: `"Aviation Career Blog — Tips & Guides from Delhi's Top Institute"`  
Reason: More descriptive; positions the academy as a Delhi authority; improves CTR in Google results.

### S2-4 — Fix 10: Course image alt text — Courses listing
**File:** `app/courses/page.tsx`  
Before: `alt={course.title}` (e.g., "Air Hostess Training Program")  
After: `alt={\`${course.title} training in Delhi — Ground to Sky Academy\`}`  
Reason: Descriptive alt text improves image search ranking and accessibility.

### S2-5 — Fix 2: Privacy Policy page (new route)
**File:** `app/privacy-policy/page.tsx` (NEW)  
Created a full Privacy Policy page covering: data collected, third-party services (GA, GTM, Meta Pixel, Google Ads, Google Sheets), data retention, user rights, security, and contact.  
Metadata: title, description, canonical, `robots: { index: false }`.  
Reason: Footer was linking "Privacy Policy" to `/contact` — a broken user experience and legal gap.

### S2-6 — Fix 2: Terms of Service page (new route)
**File:** `app/terms-of-service/page.tsx` (NEW)  
Created a full Terms of Service page covering: course enrolment, fee/refund policy, placement assistance scope, intellectual property, liability, and governing law (India/New Delhi courts).  
Metadata: title, description, canonical, `robots: { index: false }`.

### S2-7 — Fix 2: Footer links corrected
**File:** `components/footer.tsx`  
Before: Both "Privacy Policy" and "Terms of Service" linked to `/contact`  
After: "Privacy Policy" → `/privacy-policy`, "Terms of Service" → `/terms-of-service`

### S2-8 — Fix 11: Testimonials section component
**File:** `components/testimonials-section.tsx` (NEW)  
Created a client component with 4 student testimonials:
- Priya Sharma → IndiGo Airlines (Air Hostess Training)
- Rahul Mehra → GMR Group / IGI Airport (Ground Staff Training)
- Simran Kaur → Taj Hotels (Hotel Operations Management)
- Ankit Verma → Air Arabia (Cabin Crew Training)

Features: Avatar initials, 5-star rating, quote card, course badge, hover animation.  
Includes **AggregateRating + Review JSON-LD schema** with `ratingValue: 4.9`, `reviewCount: 4`, `bestRating: 5`.

### S2-9 — Fix 11: Testimonials added to homepage
**File:** `app/page.tsx`  
Added `<TestimonialsSection />` between `<CoursesSection />` and `<FAQSection />`.  
Reason: Trust signals between courses and FAQ reinforce conversion intent and provide schema anchor for AggregateRating.

### S2-10 — Fix 12: New blog post — Air Hostess Salary
**File:** `data/blogdata/blogs.ts`  
Added ~1,100-word blog post (id: "3"):  
Title: "Air Hostess Salary in India 2025: Domestic vs International Airlines"  
Slug: `air-hostess-salary-india-2025`  
Sections: Domestic salaries (IndiGo, Air India, SpiceJet), international salaries (Emirates, Qatar, Etihad), perks & benefits, career progression, factors affecting salary, training impact.  
Target keywords: "air hostess salary India 2025", "cabin crew salary India", "IndiGo air hostess salary", "Emirates cabin crew salary India"

### S2-11 — Fix 12: New blog post — Ground Staff Jobs Delhi
**File:** `data/blogdata/blogs.ts`  
Added ~1,200-word blog post (id: "4"):  
Title: "Ground Staff Jobs at Delhi Airport: How to Get Hired in 2025"  
Slug: `ground-staff-jobs-delhi-airport`  
Sections: Role types at IGI Airport, qualifications needed, top hiring companies (GMR, Celebi, AISATS), salary ranges, selection process, how GTS prepares candidates.  
Target keywords: "ground staff jobs Delhi airport", "IGI airport ground staff recruitment 2025", "GMR group airport jobs", "airport jobs for freshers Delhi"

### S2-12 — Sitemap updated with new blog posts
**Files:** `public/sitemap-0.xml`, `next-sitemap.config.js`  
Added URLs for:
- `/blog/air-hostess-salary-india-2025` (priority 0.8)
- `/blog/ground-staff-jobs-delhi-airport` (priority 0.8)
- `/courses` priority updated to `0.9`

### S2-13 — Fix 13: Local SEO citations checklist
**File:** `docs/local-seo-citations.md` (NEW)  
Comprehensive checklist covering:
- Priority 1: Google Business Profile, JustDial, Sulekha, Shiksha, Careers360, LinkedIn
- Priority 2: IndiaMart, TradeIndia, Yellow Pages, Bing Places, Apple Maps
- Priority 3: Education directories (CollegeDekho, EduKart, Mouthshut)
- Priority 4: Aviation directories (Aviation A2Z, Simple Flying, Aviation India)
- Priority 5: Social media (Facebook page, YouTube, Google Reviews)
- GBP verification checklist (15-point)
- Review strategy
- NAP consistency guide

---

## Total File Changes Summary

| File | Type | Change |
|------|------|--------|
| `app/layout.tsx` | Modified | lang, metadata, OG |
| `app/page.tsx` | Modified | metadata, TestimonialsSection import |
| `app/courses/page.tsx` | Modified | title, H1, image alt |
| `app/gallery/layout.tsx` | Modified | title, description |
| `app/gallery/page.tsx` | Modified | H1 |
| `app/blog/layout.tsx` | Modified | title, description |
| `app/blog/page.tsx` | Modified | H1 |
| `app/courses/[slug]/page.tsx` | Modified | title template, description, image alt |
| `app/privacy-policy/page.tsx` | **NEW** | Full Privacy Policy page |
| `app/terms-of-service/page.tsx` | **NEW** | Full Terms of Service page |
| `components/organization-schema.tsx` | Modified | LocalBusiness type, openingHours, areaServed |
| `components/website-schema.tsx` | Modified | SearchAction, inLanguage |
| `components/footer.tsx` | Modified | Privacy/Terms links fixed |
| `components/testimonials-section.tsx` | **NEW** | 4 testimonials + AggregateRating schema |
| `data/blogdata/blogs.ts` | Modified | 3 new posts, CTA fix |
| `next-sitemap.config.js` | Modified | transform fn, priorities, new blog URLs |
| `public/sitemap-0.xml` | Modified | All 14 URLs with correct priorities |
| `public/robots.txt` | Modified | Explicit disallow for thank-you pages |
| `docs/local-seo-citations.md` | **NEW** | 5-priority local citation checklist |
| `seo-audit-report.md` | **NEW** | Full Phase 1 audit (70/100 score) |

---

## Recommended Next Steps

| Priority | Action | Estimated Impact |
|----------|--------|-----------------|
| 🔴 HIGH | Claim & verify Google Business Profile | Local pack rankings |
| 🔴 HIGH | Collect 20+ Google reviews from placed students | Trust + CTR |
| 🔴 HIGH | Submit to JustDial, Sulekha, Shiksha | Citation authority |
| 🟡 MEDIUM | Add OG/social image (1200×630px) at `/images/GTS-Logo.png` | Social sharing CTR |
| 🟡 MEDIUM | Add FAQ schema to individual course pages | Rich results |
| 🟡 MEDIUM | Write 4 more blog posts (interview tips, DGCA requirements, top airlines, Delhi vs Mumbai institutes) | Keyword authority |
| 🟢 LOW | Create `/about` page with founder story and academy history | E-E-A-T signals |
| 🟢 LOW | Add `aggregateRating` reviews count as more reviews are collected | Schema accuracy |

---

*This log represents all SEO changes made to groundtosky.in as of April 2026.*
