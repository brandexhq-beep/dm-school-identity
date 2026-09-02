# DM Public School Website

## Goal
Build a complete, mobile-first school website that feels credible, editorial, academic, warm, and distinctly institutional. The supplied DM Public School logo will anchor the visual identity. Unverified school facts will remain clearly marked placeholders.

## Pages and journeys
- Home: focused admissions-led hero, school introduction, editorial differentiators, academics overview, student life, admissions process, latest news/events, and parent CTA.
- About: school overview, vision, mission, philosophy, leadership, faculty, values, infrastructure, and campus environment with explicit placeholders for unknown facts.
- Academics: overview plus Primary, Middle, Secondary, and Senior Secondary sections clearly marked for confirmation.
- Admissions: process, eligibility, documents, dates, fees placeholder, FAQs, and a validated enquiry form with honest failure/success handling.
- Campus: photography-led facility categories, shown as items awaiting school confirmation rather than asserted facts.
- Student Life: image-led sports, cultural activities, clubs, competitions, celebrations, achievements, and trips/events.
- News and Events: content-driven listing and detail routes, with initial clearly labeled sample/draft content and polished empty states.
- Contact: centralized NAP placeholders, timings, lightweight map link, contact form, and admissions CTA.
- Privacy, Terms, and a school-specific 404 page.

## Visual direction
- Light-first palette derived from the logo: warm white, paper white, deep navy, restrained heritage blue, and a small saffron-gold accent.
- Modern institutional typography with Manrope for headings and DM Sans for body/UI.
- Strong Swiss-inspired grid, squared 4–6px corners, crisp borders, restrained shadows, generous editorial spacing, and large authentic-photo placeholders.
- No gradients, glass effects, decorative blobs, oversized type, SaaS card grids, or invented imagery.
- Subtle hover/menu transitions only, with full reduced-motion support.

## Shared system
- Reusable header, accessible mobile navigation, footer, buttons, containers, section headings, breadcrumbs, editorial feature rows, gallery, CTA, news/event cards, FAQ, and forms.
- Centralized school, navigation, academics, admissions, facilities, contact, and social-link data so client facts can be replaced once verified.
- The uploaded logo will be stored through the project asset flow and used in the header/footer; a properly resized favicon will be derived from it.

## Content architecture
- Use typed TypeScript data/content modules that keep content separate from presentation and can later be replaced by a headless CMS without rebuilding the UI.
- Use route-based news and event detail pages with typed content records and SEO fields, matching the intent of Astro Content Collections within the project’s required TanStack Start architecture.
- Clearly label every unknown address, phone, leadership, grade, facility, fee, date, and policy detail as a replaceable placeholder.

## Forms and interaction
- Client-side Zod validation, accessible labels, inline errors, live submission status, honeypot spam field, and minimum 44px touch targets.
- Backend-ready server functions with server-side Zod validation, sanitization, basic abuse controls, and an explicit “not configured” response rather than fake success.
- Analytics-ready data attributes/events for admissions, phone, email, map, and form actions without installing invasive tracking.

## SEO, accessibility, and performance
- Unique route titles/descriptions, canonical paths, Open Graph and Twitter metadata, School/WebSite/Breadcrumb/Article/Event JSON-LD using verified facts only.
- Sitemap, robots.txt, manifest, favicon, clean routes, internal links, and no accidental noindex.
- One main landmark, skip link, semantic headings, useful alt text, keyboard navigation, visible focus states, and accessible menu/dialog behavior.
- Responsive images with fixed aspect ratios, eager loading only for the main visual, lazy loading below the fold, minimal client JavaScript, and stable layouts.

## Technical note
This repository is fixed to TanStack Start + React + Tailwind v4, so the requested Astro implementation will be translated to equivalent file-based routes, typed content modules, server functions, and static-first rendering without changing frameworks.

## Validation
- Check build diagnostics and targeted type/tests.
- Browser-test primary journeys and the mobile menu/forms.
- Inspect layouts at 320, 375, 390, 430, 768, 1024, 1280, and 1440px for clipping, overflow, touch targets, and hierarchy.
- Verify metadata, structured data, manifest, robots, links, headings, and route coverage.
