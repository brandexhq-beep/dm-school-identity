# DM School Identity

Build Brief — DM Public School Website

Build a complete, production-ready website for DM Public School.

The website must feel like a real, established school website — trustworthy, warm, academic, modern and human.

Do NOT make it look like an AI-generated website, startup landing page, SaaS dashboard, EdTech platform, or generic school template.
1. DESIGN DIRECTION

Use a visual direction inspired by:

Editorial school website × Swiss design × modern Indian institutional design

The design should communicate:

    Trust

    Academic quality

    Discipline

    Student development

    Community

    Accessibility

    Professionalism

    A welcoming environment for parents

Absolutely DO NOT use:

    Neon gradients

    Purple/blue AI gradients

    Glassmorphism

    Excessive rounded cards

    Floating SaaS cards everywhere

    Excessive shadows

    Fake 3D objects

    AI-generated-looking illustrations

    Circuit-board graphics

    Random abstract blobs

    Excessive animations

    Gradient text

    Huge meaningless typography

    “AI startup” visual language

    Generic stock-photo hero with text pasted over it

    Premium fashion/editorial fonts that hurt readability

The website should look designed, not generated.
2. CORE VISUAL SYSTEM

Use a light-first interface.

Base palette:

    Warm white / off-white

    White

    Deep navy / charcoal

    One restrained school accent colour

    Light neutral backgrounds

Do not introduce a rainbow colour system.

Use strong typography hierarchy.

Suggested typography:

    Inter / Manrope / DM Sans for primary UI and body text

    One secondary display style only if genuinely necessary

Prioritize readability over decoration.

Use:

    Strong grid

    Clean borders

    Editorial spacing

    Large photography

    Subtle shadows only when necessary

    Slightly squared or restrained corner radius

    Clear section divisions

    Consistent spacing scale

The website should feel premium because of layout, photography, typography and information hierarchy, not because of effects.
3. TECH STACK

Use:

    Astro

    TypeScript

    Tailwind CSS

    Astro Content Collections / MDX

    Astro Image

    Accessible semantic HTML

    Minimal JavaScript

    Astro islands only where interaction requires it

Do NOT use React for everything.

If a component does not require client-side interaction, keep it as an Astro component.

Use modern Astro architecture and keep the site highly static and cacheable.

Recommended structure:

src/
├── components/
├── layouts/
├── pages/
├── content/
│   ├── announcements/
│   ├── events/
│   ├── news/
│   └── academics/
├── data/
├── styles/
└── assets/

4. PERFORMANCE REQUIREMENT

Performance is a major requirement.

Target:

    Lighthouse Performance: 90+

    Lighthouse Accessibility: 95+

    Lighthouse SEO: 95+

    Lighthouse Best Practices: 95+

Avoid unnecessary JavaScript.

Optimize all images.

Use:

    WebP/AVIF where appropriate

    Responsive image sizes

    Lazy loading below the fold

    Eager loading for the primary hero image

    Proper image dimensions to prevent layout shift

    Font optimization

    Preload only genuinely critical resources

Do not load huge images and resize them with CSS.
5. MOBILE-FIRST DESIGN

The website MUST be designed mobile-first.

Do not design desktop first and simply shrink it.

Test:

    320px

    375px

    390px

    430px

    768px

    1024px

    1280px

    1440px+

On mobile:

    Navigation becomes a clean hamburger menu

    CTA buttons remain easy to tap

    No horizontal scrolling

    Typography scales naturally

    Images maintain correct aspect ratios

    Cards stack intelligently

    Tables become responsive

    Sections do not become unnecessarily tall

    No text gets clipped

    No animation causes usability problems

Minimum touch target: approximately 44px.
6. WEBSITE INFORMATION ARCHITECTURE

Create the following primary pages.
Home

The homepage should answer within seconds:

What is DM Public School?

Why should a parent consider it?

What should I do next?

Suggested structure:
Hero

Large authentic school photograph.

Headline:

A place to learn, grow and become.

Use the actual school positioning/copy once provided by the client.

Supporting copy should be short.

Primary CTA:

Admissions

Secondary CTA:

Explore the School

Do not overcrowd the hero.
Introduction

Short school introduction.

Include:

    School philosophy

    Educational approach

    What differentiates DM Public School

Link:

About DM Public School →
Why DM Public School

Use 3–5 strong differentiators.

Examples:

    Academic foundation

    Experienced educators

    Holistic development

    Safe learning environment

    Co-curricular opportunities

Do not make these look like generic SaaS feature cards.

Use an editorial layout.
Academics

Introduce the school's academic approach.

Possible categories:

    Primary

    Middle School

    Secondary

    Senior Secondary

Only include actual grades/programmes confirmed by the client.

CTA:

Explore Academics →
Student Life

Large image-led section.

Show:

    Activities

    Sports

    Events

    Clubs

    Competitions

    Celebrations

Use real school photographs wherever possible.
Admissions

This should be one of the strongest sections.

Explain:

    Enquiry

    Admission process

    Interaction / assessment if applicable

    Confirmation

    Joining

CTA:

Enquire About Admissions
News & Events

Show the latest:

    Announcements

    School events

    Achievements

    Activities

Use CMS/content-driven data rather than hardcoding everything into the homepage.
Parent CTA

End the homepage with a strong but simple CTA.

Example:

Thinking about the next step for your child?

Talk to DM Public School.

Buttons:

Admission Enquiry

Contact School
7. ABOUT PAGE

Create a detailed About page.

Sections:

    About the school

    Vision

    Mission

    Educational philosophy

    Leadership

    Faculty

    Infrastructure

    School values

    Campus environment

Avoid writing fake content.

If information has not been supplied, create clearly marked placeholder content that can easily be replaced.

Never invent:

    Awards

    Accreditations

    Student numbers

    Faculty qualifications

    Facilities

    Results

    Rankings

    Claims of excellence

8. ACADEMICS

Create an Academics landing page.

Include the actual academic structure once provided.

Possible structure:

Academics
│
├── Primary School
├── Middle School
├── Secondary School
└── Senior Secondary

Each page should have:

    Overview

    Learning approach

    Subjects

    Activities

    Skills developed

    Relevant images

Use semantic headings.

Do not create meaningless feature cards.
9. ADMISSIONS

Create a dedicated Admissions page.

Sections:

    Admissions overview

    Who can apply

    Admission process

    Required documents

    Important dates

    Fee information if the school provides it

    FAQs

    Admission enquiry CTA

Include a clean enquiry form.

Form fields:

    Parent/Guardian Name

    Student Name

    Grade/Class

    Phone

    Email

    Message

Do not request unnecessary personal information.

Add:

    Validation

    Accessible labels

    Error states

    Success state

    Spam protection

The form should be backend-ready.

Do not fake successful submissions.
10. FACILITIES / CAMPUS

Create a visual Facilities page.

Possible categories:

    Classrooms

    Library

    Laboratories

    Sports

    Computer facilities

    Activity spaces

    Transport

    Safety/security

Only show facilities confirmed by the school.

Use photography heavily.

Do not use generic AI illustrations to represent facilities.
11. STUDENT LIFE

Create a page for:

    Sports

    Cultural activities

    Clubs

    Competitions

    Celebrations

    Student achievements

    Trips/events

This page should be image-led.
12. NEWS & EVENTS

Create a content-driven system.

Each article/event should have:

    Title

    Date

    Category

    Featured image

    Summary

    Full content

    SEO metadata

Routes:

/news
/news/[slug]

/events
/events/[slug]

Use Astro Content Collections.
13. CONTACT

Create a clean Contact page.

Include:

    School name

    Address

    Phone

    Email

    School timings

    Google Maps integration

    Contact form

    Admissions enquiry CTA

Do not embed a massive map that destroys mobile performance.

Use a lightweight map link/embed strategy.
14. HEADER

Desktop navigation:

Home
About
Academics
Admissions
Campus
Student Life
News & Events
Contact

Add a visually prominent but restrained:

Admissions Enquiry

button.

On mobile:

Logo + menu button.

Menu should be:

    Keyboard accessible

    Screen-reader accessible

    Easy to close

    Prevent accidental background interaction

15. FOOTER

Footer should contain:

    School logo

    Short school description

    Navigation

    Academics

    Admissions

    Contact

    Address

    Phone

    Email

    Social media

    Copyright

    Privacy Policy

    Terms if applicable

Do not make the footer unnecessarily enormous.
16. SEO — VERY IMPORTANT

SEO should be treated as part of the architecture, not added at the end.

Implement:
Technical SEO

    Semantic HTML

    Correct heading hierarchy

    Canonical URLs

    XML sitemap

    robots.txt

    Clean URLs

    Open Graph metadata

    Twitter/X metadata

    Proper favicon

    Web manifest

    404 page

    Redirect handling

    No duplicate metadata

    No orphan pages

17. STRUCTURED DATA

Implement JSON-LD where appropriate.

Use:

    EducationalOrganization / School

    BreadcrumbList

    Event

    Article

    WebSite

Example school schema should contain only verified information.

Do NOT invent:

    Ratings

    Reviews

    Awards

    Accreditation

    Founding dates

    Student counts

18. LOCAL SEO

Because this is a physical school, local SEO matters heavily.

Structure pages and metadata around:

DM Public School + actual city/locality

only after the school's exact location is confirmed.

Include:

    School name

    Address

    Phone

    Locality

    City

    State

    Country

Maintain NAP consistency across the site.

Create a strong Contact page.

Do not keyword-stuff.
19. PAGE METADATA

Every important page must have unique:

    <title>

    Meta description

    Canonical URL

    Open Graph title

    Open Graph description

    Open Graph image

Examples:

DM Public School | [Location]
DM Public School Admissions | [Location]
About DM Public School | [Location]
Academics | DM Public School
Contact DM Public School | [Location]

Do not use generic titles like:

Home | Website
About Us | School

20. ACCESSIBILITY

Follow WCAG principles.

Implement:

    Semantic HTML

    Proper labels

    Keyboard navigation

    Visible focus states

    Alt text

    Accessible contrast

    Skip-to-content link

    ARIA only when necessary

    Reduced-motion support

    Proper heading hierarchy

Do not use colour alone to communicate information.
21. ANIMATIONS

Animations should be subtle.

Allowed:

    Small fade/slide reveals

    Image reveal

    Navigation transitions

    Hover states

    Slight editorial motion

Avoid:

    Constant floating

    Parallax everywhere

    Excessive scroll animations

    Bouncing elements

    Text flying around

    Loading animations that delay content

Respect:

prefers-reduced-motion

The website should still feel excellent with animations disabled.
22. IMAGE STRATEGY

Photography is one of the most important visual elements.

Prioritize:

    Real school photographs

    Real campus photographs

    Real students/events

    Real faculty

    Authentic environmental photography

Never fabricate school achievements or people.

Create reusable image components with:

    Responsive sizing

    Aspect ratio

    Alt text

    Lazy loading

    Optimized formats

23. COMPONENT SYSTEM

Build reusable components.

Examples:

Header
MobileMenu
Footer
Hero
SectionHeader
ImageFeature
EditorialGrid
CTA
NewsCard
EventCard
AdmissionCTA
Breadcrumbs
Gallery
FAQ
ContactForm
Button
Container

Avoid creating dozens of unnecessary components.

Components should be data-driven where possible.
24. CONTENT ARCHITECTURE

Keep content separate from presentation.

School information should be easy to modify without rebuilding the entire UI.

Create centralized data/content for:

    School information

    Contact details

    Navigation

    Admissions

    Academic sections

    Facilities

    Events

    News

    Social links

Do not scatter school phone numbers, addresses and names throughout components.
25. CMS / FUTURE BACKEND READINESS

The first version can use Astro Content Collections / MDX.

However, architect the content layer so it can later be connected to:

    Sanity

    Decap CMS

    Supabase

    Headless CMS

without rebuilding the frontend.

Do not overengineer the backend now.
26. ERROR & EMPTY STATES

Create polished states for:

    404

    Failed enquiry

    Empty news

    Empty events

    Image loading failure

    Form validation errors

Example 404:

This page isn't on the school map.

Then provide:

Back to Home

and useful navigation.
27. SECURITY

For forms:

    Validate server-side

    Sanitize input

    Add rate limiting

    Add spam protection

    Never expose secrets in frontend code

    Store environment variables securely

Do not hardcode API keys.
28. ANALYTICS

Make the site analytics-ready.

Track important events such as:

    Admission CTA click

    Admission enquiry submission

    Phone click

    Email click

    WhatsApp click if applicable

    Contact form submission

    Important page visits

Do not add invasive tracking unnecessarily.
29. SOCIAL / SHARING

Every major page should have appropriate Open Graph metadata.

Create a proper social sharing image system.

When sharing:

DM Public School

should appear clearly rather than generic website information.
30. PWA

Do not turn the website into an unnecessary app.

If PWA functionality is added, it should provide actual value.

At minimum ensure:

    Web manifest

    Proper icons

    Mobile-friendly experience

Do not force users to install the website.
31. DEVELOPMENT QUALITY

Use:

    Strict TypeScript

    Reusable components

    Clean folder structure

    No duplicated CSS

    No duplicated content

    No hardcoded repeated values

    No console errors

    No broken links

    No missing images

    No accessibility warnings

Use semantic HTML instead of div-heavy markup.
32. RESPONSIVE QA

Before considering the project complete, inspect the website at:

320px
375px
390px
430px
768px
1024px
1280px
1440px

Check:

    Header

    Hero

    Typography

    Buttons

    Images

    Forms

    Navigation

    Footer

    Tables

    Cards

    Overflow

    Spacing

Fix actual layout problems instead of hiding them with overflow rules.
33. SEO QA

Before completion verify:

    Every page has a unique title

    Every page has a meta description

    Canonicals are correct

    Sitemap works

    robots.txt works

    Structured data is valid

    Images have useful alt text

    URLs are clean

    Internal links work

    No broken links

    No duplicate headings

    No accidental noindex

    Open Graph metadata works

34. FINAL DESIGN TEST

Ask:

    Could someone mistake this for an AI-generated school template?

If yes, redesign it.

Ask:

    Does this look like a real school that parents would trust?

If no, improve the typography, photography, hierarchy and content.

Ask:

    Does the homepage clearly guide a parent toward admission information?

If no, fix the information architecture.

Ask:

    Does it work beautifully on a ₹10,000 Android phone with a slow connection?

If no, optimize it.
35. IMPORTANT CONTENT RULE

Do not invent information about DM Public School.

If something is unknown, use a clearly identifiable placeholder:

[School Address]
[Phone Number]
[Principal Name]
[Admission Details]

Do not silently fabricate details.

The website should be ready for the client to replace placeholders with verified information.
36. FINAL OBJECTIVE

The finished website should feel like:

A modern, credible Indian school with a strong academic identity — not an EdTech startup.

It should be:

Fast.
Mobile-first.
Accessible.
SEO-ready.
Editorial.
Human.
Trustworthy.
Easy to maintain.
Conversion-focused.

The primary business goal is:

Turn website visitors — especially parents searching for the school — into admission enquiries.


use the right color based on the color psychology and i have attached the logo

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/25dbe83e-ecc8-4587-ba46-50e8eb12078a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
