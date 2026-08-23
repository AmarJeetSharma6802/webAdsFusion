import React from 'react'
import Dynamic from "../[name]/Dynamic.jsx"

export async function generateMetadata({ params }) {
  // const name = await params?.name;

  const {name} = await params

  const contentName = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
    
  return {
    title: `${contentName} | Creative Digital Marketing & Web Development Agency in India`,
    description: contentName.para,
    keywords: `${contentName.name}, Web Ads Fusion, Digital Services, Web Development, Web Design`,
 
  };
}

const content = [
  {
    id: 1,
    name: "Website Design",
    heading: "Modern Web Design: Trends, Tools & Timeless Principles",
    para: "We craft beautiful, user-friendly web designs that reflect your brand’s identity. Our creative approach ensures your website stands out, engages visitors, and delivers a seamless experience across all devices.",
    img: "/serviceWebDesign.png",
    btn: "Plan Your Website With Us",
    stats: [
      { id: 1, value: "2-4 wks", label: "Typical design cycle" },
      { id: 2, value: "100%", label: "Responsive layouts" },
      { id: 3, value: "3+", label: "Concepts per project" },
      { id: 4, value: "Unlimited", label: "Revisions on wireframes" },
    ],
    careHeading: "Design work that earns\nits place on your site",
    careSub:
      "Every screen is drawn around one job: get the visitor from landing to enquiry without friction.",
    care: [
      {
        id: 1,
        icon: "fa-solid fa-pen-ruler",
        title: "Brand-Led UI Design",
        img: "/web-design.png",
        desc: "Colour, type and spacing derived from your brand, not a template. Your site stops looking like everyone else in your category.",
      },
      {
        id: 2,
        icon: "fa-solid fa-mobile-screen",
        title: "Responsive Across Devices",
        img: "/webdesignService.svg",
        desc: "Designed mobile-first and tested on real phones, tablets and desktops, so nothing breaks at the sizes your customers actually use.",
      },
      {
        id: 3,
        icon: "fa-solid fa-bullseye",
        title: "Conversion-First Layouts",
        img: "/planning.png",
        desc: "Clear hierarchy, obvious calls to action and forms placed where intent peaks. The layout does the selling for you.",
      },
      {
        id: 4,
        icon: "fa-solid fa-cart-shopping",
        title: "E-commerce & Shopify",
        img: "/shopify.png",
        desc: "Product pages, category browsing and checkout flows designed to reduce drop-off at every step of the purchase.",
      },
      {
        id: 5,
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "Design Systems",
        img: "/dynamic-coustom-website.png",
        desc: "Reusable components, tokens and states handed over so your site stays consistent as you add pages later.",
      },
      {
        id: 6,
        icon: "fa-solid fa-universal-access",
        title: "Accessibility & Contrast",
        img: "/light-bulb.svg",
        desc: "Readable type sizes, proper contrast ratios and keyboard-navigable interfaces, so nobody is locked out of your site.",
      },
    ],
    stepsHeading: "From blank page to a\ndesign you sign off on",
    steps: [
      {
        id: 1,
        title: "Discover",
        desc: "We map your goals, audience and competitors, then agree on what each page has to accomplish before a single pixel is drawn.",
      },
      {
        id: 2,
        title: "Wireframe",
        desc: "Low-fidelity layouts settle structure and flow first. Cheap to change here, expensive to change later.",
      },
      {
        id: 3,
        title: "Design",
        desc: "Full visual design for every key screen with real content, real images and every state a developer will need.",
      },
      {
        id: 4,
        title: "Handover",
        desc: "Components, spacing rules and assets packaged for development, plus one round of refinement after you review it live.",
      },
    ],
    industriesHeading: "Businesses we design for",
    industries: [
      { id: 1, heading: "Portfolio websites", img: "/businessman.png" },
      { id: 2, heading: "Schools & education", img: "/textbook.png" },
      { id: 3, heading: "Tour & travel", img: "/world-tour.png" },
      { id: 4, heading: "Business websites", img: "/planning.png" },
      { id: 5, heading: "E-commerce", img: "/online-shop.png" },
      { id: 6, heading: "Real estate", img: "/estate-agent.png" },
    ],
    ctaHeading: "Have a design in mind?",
    ctaSub:
      "Send us your current site or a few references. We’ll tell you what is working, what is costing you enquiries, and what we’d change first.",
    ctaBtn: "Start your design project",
    qeustion: [
      {
        id: 1,
        ques: "How long does it take to design and develop a website?",
        ans: "A standard website usually takes 2–4 weeks, depending on complexity, design preferences, features, and content availability. Larger custom projects may require additional planning and development time.",
      },
      {
        id: 2,
        ques: "Do you create mobile-friendly and responsive websites?",
        ans: "Yes, every website we build is fully responsive, ensuring it looks great and functions smoothly on mobiles, tablets, laptops, and desktops. A responsive website improves user experience and search engine ranking.",
      },
      {
        id: 3,
        ques: "Can I update and manage my website after launch?",
        ans: "Absolutely! We build websites with user-friendly content management systems (CMS) like WordPress or custom panels. You can easily add, edit, or update text, images, and blog posts anytime.",
      },
      {
        id: 4,
        ques: "What information do you need from me to start?",
        ans: "We’ll need your business details, goals, preferred design style, branding materials, content, and any references. This helps us build a website that perfectly reflects your identity and vision.",
      },
      {
        id: 5,
        ques: "Will my website be SEO optimized?",
        ans: "Yes, we implement SEO-friendly structure, fast loading speed, mobile responsiveness, and optimized content. Basic SEO is included so your website ranks better and attracts more visitors from search engines.",
      },
    ],
  },
  {
    id: 2,
    name: "Web Developement",
    heading: "Craft High-Performance Websites That Drive Results",
    para: "We build modern, fast, and secure websites tailored to your business. From unique designs to smooth functionality, our websites help attract customers, boost engagement, and strengthen your brand online.",
    img: "/webDevelopmentservice.png",
    btn: "Start Your Website Project",
    stats: [
      { id: 1, value: "Next.js", label: "App Router builds" },
      { id: 2, value: "90+", label: "Lighthouse target" },
      { id: 3, value: "REST", label: "APIs & integrations" },
      { id: 4, value: "SSL", label: "Domain & deploy handled" },
    ],
    careHeading: "Production-ready builds,\nnot demo sites",
    careSub:
      "Frontend, backend, database and deployment handled by the same team, so nothing gets lost between hand-offs.",
    care: [
      {
        id: 1,
        icon: "fa-brands fa-react",
        title: "Next.js & React Frontends",
        img: "/Nextjs.png",
        desc: "Server-rendered pages, App Router routing and dynamic metadata, so your site is fast for users and readable by search engines.",
      },
      {
        id: 2,
        icon: "fa-solid fa-server",
        title: "Node.js & REST APIs",
        img: "/nodejs.png",
        desc: "Express and Next route handlers with proper validation, error handling and rate limiting behind every form and dashboard.",
      },
      {
        id: 3,
        icon: "fa-solid fa-database",
        title: "Database & Data Modelling",
        img: "/mongodb.svg",
        desc: "MongoDB, PostgreSQL or Prisma schemas designed around your actual workflows rather than bolted on afterwards.",
      },
      {
        id: 4,
        icon: "fa-solid fa-lock",
        title: "Auth & Role-Based Access",
        img: "/development.svg",
        desc: "NextAuth, Clerk or JWT with roles and permissions, so admins, staff and customers each see exactly what they should.",
      },
      {
        id: 5,
        icon: "fa-solid fa-plug",
        title: "Third-Party Integrations",
        img: "/postman.png",
        desc: "Payments, WhatsApp and email automation, Cloudinary media, analytics and CRM hooks wired in and tested end to end.",
      },
      {
        id: 6,
        icon: "fa-solid fa-cloud-arrow-up",
        title: "Deployment & Monitoring",
        img: "/rocket.png",
        desc: "Vercel, Render or self-hosted, with DNS, SSL, error tracking and analytics configured before you go live.",
      },
    ],
    stepsHeading: "How a build actually\nruns with us",
    steps: [
      {
        id: 1,
        title: "Scope",
        desc: "We turn your requirements into a written feature list with clear boundaries, so you know exactly what launch day includes.",
      },
      {
        id: 2,
        title: "Build",
        desc: "Development happens in short cycles on a live preview URL. You see progress every few days instead of waiting weeks in the dark.",
      },
      {
        id: 3,
        title: "Test",
        desc: "Cross-browser checks, form and payment testing, performance profiling and an SEO pass before anything reaches production.",
      },
      {
        id: 4,
        title: "Launch",
        desc: "Domain, SSL, analytics and monitoring configured, plus a walkthrough of the admin panel so your team can run it without us.",
      },
    ],
    industriesHeading: "What we build most often",
    industries: [
      { id: 1, heading: "Business websites", img: "/planning.png" },
      { id: 2, heading: "E-commerce stores", img: "/online-shop.png" },
      { id: 3, heading: "Real estate portals", img: "/estate-agent.png" },
      { id: 4, heading: "Booking platforms", img: "/world-tour.png" },
      { id: 5, heading: "Admin dashboards", img: "/businessman.png" },
      { id: 6, heading: "Education portals", img: "/textbook.png" },
    ],
    ctaHeading: "Got a project spec?",
    ctaSub:
      "Share what you need built. We’ll come back with a feature breakdown, a realistic timeline and what it will take to run it after launch.",
    ctaBtn: "Discuss your build",
    qeustion: [
      {
        id: 1,
        ques: "What technologies do you build with?",
        ans: "Primarily Next.js and React on the frontend, Node.js and Express on the backend, with MongoDB, PostgreSQL or Prisma for data. We pick the stack around your requirements rather than forcing every project into the same tools.",
      },
      {
        id: 2,
        ques: "Can you work on an existing website instead of rebuilding it?",
        ans: "Yes. We regularly take over codebases we did not write. We start with an audit of the code, dependencies and performance, tell you honestly whether fixing or rebuilding is cheaper, and then proceed with whichever you choose.",
      },
      {
        id: 3,
        ques: "Will I be able to update content myself?",
        ans: "Yes. We build an admin panel or connect a CMS so your team can add pages, blog posts, products and images without touching code or waiting on a developer.",
      },
      {
        id: 4,
        ques: "Do you handle hosting, domains and SSL?",
        ans: "We do. Deployment to Vercel, Render or a self-hosted server, DNS configuration, SSL certificates and environment variables are all part of launch. You keep ownership of every account.",
      },
      {
        id: 5,
        ques: "What happens after the site goes live?",
        ans: "You get a handover walkthrough and the full codebase. From there you can run it yourself, or move onto a maintenance retainer where we handle updates, backups, monitoring and fixes for you.",
      },
    ],
  },
  {
    id: 3,
    name: "Website Maintenance",
    heading: "Keep Your Website Running Smoothly with Expert Maintenance",
    para: "Focus on growing your business while we keep your website secure, updated, and error-free. From routine checks to emergency fixes, our maintenance services ensure your site performs reliably every day.",
    img: "/serviceWebMaintance.png",
    btn: "Secure Your Website Today",
    stats: [
      { id: 1, value: "24/7", label: "Uptime monitoring" },
      { id: 2, value: "24-48h", label: "Critical fix window" },
      { id: 3, value: "Weekly", label: "Offsite backups" },
      { id: 4, value: "Monthly", label: "Health report" },
    ],
    careHeading: "Everything that keeps a\nlive site healthy",
    careSub:
      "One retainer covers the whole surface area — security, updates, backups, speed and the technical SEO that quietly decides your rankings.",
    care: [
      {
        id: 1,
        icon: "fa-solid fa-shield-halved",
        title: "Security & Malware Scans",
        img: "/Websitemaintance.png",
        desc: "Continuous scanning, firewall rules and SSL checks. If something suspicious shows up, we clean it and close the hole before it reaches your visitors.",
      },
      {
        id: 2,
        icon: "fa-solid fa-arrows-rotate",
        title: "Core, Plugin & Package Updates",
        img: "/dynamicweb-maintenance.png",
        desc: "Framework, CMS, plugin and dependency updates applied on staging first, so a routine patch never takes your live site down.",
      },
      {
        id: 3,
        icon: "fa-solid fa-database",
        title: "Automated Offsite Backups",
        img: "/mongoose.png",
        desc: "Scheduled database and file backups stored away from your server, with a tested one-click restore whenever you need to roll back.",
      },
      {
        id: 4,
        icon: "fa-solid fa-gauge-high",
        title: "Speed & Core Web Vitals",
        img: "/performance.png",
        desc: "Image compression, caching, script cleanup and LCP/CLS tuning so your pages stay fast on real devices and real networks.",
      },
      {
        id: 5,
        icon: "fa-solid fa-bug",
        title: "Bug Fixes & Broken Links",
        img: "/tools.png",
        desc: "Forms that stopped sending, 404s, layout breaks after a browser update — reported, fixed and verified without you chasing anyone.",
      },
      {
        id: 6,
        icon: "fa-solid fa-chart-line",
        title: "SEO & Analytics Health",
        img: "/GoogleAnalytics.jpg",
        desc: "Sitemaps, metadata, redirects, schema and tracking checked every month so a silent technical issue never costs you rankings.",
      },
    ],
    stepsHeading: "From audit to a site you\nstop worrying about",
    steps: [
      {
        id: 1,
        title: "Audit",
        desc: "We start with a full health check — security, speed, SEO, broken pages and outdated dependencies — and hand you a written report of what needs attention.",
      },
      {
        id: 2,
        title: "Stabilise",
        desc: "Everything urgent gets fixed first: vulnerabilities patched, backups configured, errors cleared and a staging environment set up for safe changes.",
      },
      {
        id: 3,
        title: "Monitor",
        desc: "Uptime, forms and performance are watched around the clock. If something breaks at 2am, we know before your customers do.",
      },
      {
        id: 4,
        title: "Report",
        desc: "Every month you get a plain-English summary: what was updated, what was fixed, how the site performed and what we recommend next.",
      },
    ],
    plansHeading: "Pick the level of cover\nyour site needs",
    plansSub:
      "Every plan is quoted against your actual stack and traffic — no packaged pricing that ignores what your site really is.",
    plans: [
      {
        id: 1,
        name: "Essential",
        best: false,
        tagline: "For brochure sites that just need to stay safe and current.",
        features: [
          "Monthly core & plugin updates",
          "Weekly offsite backups",
          "Uptime monitoring",
          "Security scan & SSL checks",
          "Email support",
        ],
      },
      {
        id: 2,
        name: "Growth",
        best: true,
        tagline: "For business sites that actively bring in leads.",
        features: [
          "Everything in Essential",
          "Weekly updates on staging first",
          "Daily backups with tested restores",
          "Speed & Core Web Vitals tuning",
          "Content and small design edits",
          "Monthly health report",
        ],
      },
      {
        id: 3,
        name: "Priority",
        best: false,
        tagline: "For stores and high-traffic sites where downtime costs money.",
        features: [
          "Everything in Growth",
          "24-48h critical fix window",
          "24/7 uptime & transaction monitoring",
          "Staging + rollback on every release",
          "SEO and analytics monitoring",
          "Dedicated point of contact",
        ],
      },
    ],
    ctaHeading: "Not sure what your site needs?",
    ctaSub:
      "Send us the URL. We’ll run a free health check on security, speed and SEO, and tell you exactly what is worth fixing first.",
    ctaBtn: "Request a free site audit",
    qeustion: [
      {
        id: 1,
        ques: "What exactly is included in website maintenance?",
        ans: "Maintenance covers everything that keeps a live site healthy: security scans and patches, core, plugin and dependency updates, offsite backups, speed and Core Web Vitals tuning, broken link and bug fixes, plus SEO and analytics checks. You also get a monthly report of what changed.",
      },
      {
        id: 2,
        ques: "My website is already built. Can you still maintain it?",
        ans: "Yes. We take over sites we did not build all the time. We begin with a full audit of security, performance, SEO and outdated dependencies, fix anything urgent, then move the site onto our regular maintenance schedule.",
      },
      {
        id: 3,
        ques: "How quickly do you respond if my site goes down?",
        ans: "Uptime monitoring alerts us the moment your site stops responding, usually before you notice. Critical issues such as downtime, checkout failures or broken forms are addressed within a 24 to 48 hour window on our Priority plan.",
      },
      {
        id: 4,
        ques: "Will updates break my website?",
        ans: "That is exactly why we apply updates on a staging copy first. Changes are tested there before they reach your live site, and every release has a tested rollback, so a routine update never becomes an outage.",
      },
      {
        id: 5,
        ques: "Do I need maintenance if my website rarely changes?",
        ans: "Yes. Even a site you never edit sits on software that keeps changing. Unpatched plugins, expired SSL certificates, broken third-party scripts and search engine algorithm shifts all affect a site that has not been touched in months.",
      },
    ],
  },
  {
    id: 4,
    name: "SearchBoost SEO",
    heading: "Boost Your Online Visibility with Smart SEO Strategies",
    para: "Rank higher and reach the right audience with our SEO services. We optimize your website, create valuable content, and drive targeted traffic to help your business grow online.",
    img: "/serviceSeo.png",
    btn: "Book Your SEO Audit",
    stats: [
      { id: 1, value: "90+", label: "Core Web Vitals target" },
      { id: 2, value: "Monthly", label: "Rank & traffic reporting" },
      { id: 3, value: "100%", label: "White-hat techniques" },
      { id: 4, value: "3-6 mo", label: "Typical ranking horizon" },
    ],
    careHeading: "SEO that survives the\nnext algorithm update",
    careSub:
      "No shortcuts and no bought links — technical fixes, genuine content and clean structure that keep compounding long after the work is done.",
    care: [
      {
        id: 1,
        icon: "fa-solid fa-magnifying-glass-chart",
        title: "Technical SEO Audit",
        img: "/seo.png",
        desc: "Crawl errors, indexing issues, duplicate content, redirect chains and broken canonicals found and fixed before anything else is attempted.",
      },
      {
        id: 2,
        icon: "fa-solid fa-key",
        title: "Keyword & Intent Research",
        img: "/Homeseo.png",
        desc: "We map what your buyers actually search, separate research intent from buying intent, and target the terms that convert rather than the ones with vanity volume.",
      },
      {
        id: 3,
        icon: "fa-solid fa-file-lines",
        title: "On-Page Optimisation",
        img: "/metaTags.webp",
        desc: "Titles, meta descriptions, headings, internal linking, image alt text and schema markup tuned page by page.",
      },
      {
        id: 4,
        icon: "fa-solid fa-gauge-high",
        title: "Speed & Core Web Vitals",
        img: "/performance.png",
        desc: "LCP, CLS and INP measured on real devices, then image, caching and script fixes applied until the numbers hold.",
      },
      {
        id: 5,
        icon: "fa-solid fa-location-dot",
        title: "Local & Google Business",
        img: "/world-tour.png",
        desc: "Google Business Profile optimisation, local citations, review strategy and location pages so you show up in map results near you.",
      },
      {
        id: 6,
        icon: "fa-solid fa-chart-simple",
        title: "Reporting You Can Read",
        img: "/MarketingCampaignCaseStudies.png",
        desc: "Rankings, organic traffic, impressions and conversions in one monthly summary, with what changed and what we are doing next.",
      },
    ],
    stepsHeading: "How rankings actually\nget built",
    steps: [
      {
        id: 1,
        title: "Audit",
        desc: "A full technical and content audit of your site and your top competitors, delivered as a prioritised list of what is holding you back.",
      },
      {
        id: 2,
        title: "Fix",
        desc: "Technical blockers first — indexing, speed, structure and mobile issues — because content cannot rank on a site Google struggles to crawl.",
      },
      {
        id: 3,
        title: "Build",
        desc: "Optimised pages and content published against the keyword map, with internal linking that spreads authority where it matters.",
      },
      {
        id: 4,
        title: "Track",
        desc: "Search Console and Analytics monitored monthly. What moves gets doubled down on, what stalls gets rewritten.",
      },
    ],
    ctaHeading: "Want to know why you’re not ranking?",
    ctaSub:
      "Send us your domain and your top three competitors. We’ll run a free audit and show you exactly where the gap is.",
    ctaBtn: "Get your free SEO audit",
    qeustion: [
      {
        id: 1,
        ques: "How long does SEO take to show results?",
        ans: "Technical fixes can improve indexing and speed within weeks, but meaningful ranking movement typically takes three to six months. SEO compounds — the traffic you build keeps working long after the spend stops, unlike paid ads.",
      },
      {
        id: 2,
        ques: "Can you guarantee a number one ranking on Google?",
        ans: "No, and you should be cautious of anyone who does. Google's ranking factors are not public and change constantly. What we can commit to is fixing what is measurably broken, targeting the right keywords, and reporting honestly on what moves.",
      },
      {
        id: 3,
        ques: "Do you use paid links or other shortcuts?",
        ans: "Never. Bought links and private blog networks work briefly and then get penalised, which is far more expensive to recover from than doing it properly. Everything we do is white-hat and within Google's guidelines.",
      },
      {
        id: 4,
        ques: "What is the difference between SEO and Google Ads?",
        ans: "Google Ads buys you visibility immediately and stops the moment you pause the budget. SEO earns visibility slowly but keeps delivering traffic without ongoing ad spend. Most businesses do best running both together.",
      },
      {
        id: 5,
        ques: "Will I need to write content myself?",
        ans: "Not unless you want to. We handle keyword research, briefs and writing. If you have subject matter expertise, we will interview you for it, because content backed by real expertise consistently outranks generic filler.",
      },
    ],
  },
  {
    id: 5,
    name: "Social Media Marketing",
    heading: "Turn Followers into Customers with Smart Social Marketing",
    para: "Grow your brand’s reach and engagement on social media. We create compelling content, run targeted ads, and help you connect with the right audience to drive real business results.",
    img: "/serivceSocialMarketing.png",
    btn: "Boost Your Social Presence",
    stats: [
      { id: 1, value: "3.57x", label: "Average ROAS delivered" },
      { id: 2, value: "₹170", label: "Best acquisition cost" },
      { id: 3, value: "48", label: "Campaigns managed" },
      { id: 4, value: "₹21.7L", label: "Purchase value driven" },
    ],
    careHeading: "Meta campaigns built\naround the buyer",
    careSub:
      "Real numbers from live accounts: 3,579 purchases for EcoFreaky at 3.57x ROAS, 7,863 for TABBSZ across 48 campaigns.",
    care: [
      {
        id: 1,
        icon: "fa-brands fa-meta",
        title: "Meta Ads Strategy",
        img: "/metapixel.png",
        desc: "Campaign structure built around your funnel — prospecting, retargeting and conversion — instead of one boosted post hoping for the best.",
      },
      {
        id: 2,
        icon: "fa-solid fa-users-viewfinder",
        title: "Audience Segmentation",
        img: "/businessman.png",
        desc: "Lookalikes, interest stacks, custom audiences and exclusion lists tested against each other so budget goes where it converts.",
      },
      {
        id: 3,
        icon: "fa-solid fa-photo-film",
        title: "Creative & Copy Testing",
        img: "/ServicesocialMedia.png",
        desc: "Multiple hooks, formats and angles run per ad set. The winners scale, the rest get cut before they burn budget.",
      },
      {
        id: 4,
        icon: "fa-solid fa-comments",
        title: "WhatsApp & Lead Forms",
        img: "/social-media.png",
        desc: "Instant-form and click-to-WhatsApp campaigns that shorten the path from ad to conversation — 1,225+ conversations driven for one healthcare client.",
      },
      {
        id: 5,
        icon: "fa-solid fa-rotate-right",
        title: "Retargeting Funnels",
        img: "/marketing.png",
        desc: "Cart abandoners, page viewers and past buyers segmented separately, each with messaging matched to where they dropped off.",
      },
      {
        id: 6,
        icon: "fa-solid fa-chart-pie",
        title: "Reporting on Real KPIs",
        img: "/Homeperformance.png",
        desc: "Spend, CPL, CPA, ROAS and purchase value — not likes and reach. You always know what a rupee of ad spend returned.",
      },
    ],
    stepsHeading: "How we run and scale\na social account",
    steps: [
      {
        id: 1,
        title: "Audit",
        desc: "We review your pixel, past campaigns and account structure to find what leaked budget before, so we do not repeat it.",
      },
      {
        id: 2,
        title: "Set up",
        desc: "Pixel and conversion events fixed, audiences built, campaign structure laid out and creatives produced against a clear offer.",
      },
      {
        id: 3,
        title: "Test",
        desc: "Small, controlled budgets across multiple ad sets and creatives until the winning combination is clear in the data, not in opinion.",
      },
      {
        id: 4,
        title: "Scale",
        desc: "Budget shifted daily into what performs, losers switched off, and new creative fed in continuously to fight fatigue.",
      },
    ],
    ctaHeading: "Spending on ads without seeing returns?",
    ctaSub:
      "Give us access to your ad account. We’ll audit it for free and show you exactly where the budget is leaking.",
    ctaBtn: "Get a free ad account audit",
    qeustion: [
      {
        id: 1,
        ques: "What budget do I need to start with Meta Ads?",
        ans: "Enough to gather data before you judge results. For most local and D2C businesses that means a testing phase where the goal is learning which audience and creative works, not immediate profit. We will tell you honestly if your budget is too small for the goal you have in mind.",
      },
      {
        id: 2,
        ques: "How soon will I see results?",
        ans: "Campaigns usually need a couple of weeks to exit the learning phase and produce reliable data. Early results tell you which direction is working; stable, scalable performance typically settles in the second month.",
      },
      {
        id: 3,
        ques: "Do you create the ad creatives too?",
        ans: "Yes. We produce the copy, hooks and creative variations, and test several angles per ad set. If you already have brand assets or product photography, we work with those and build on top of them.",
      },
      {
        id: 4,
        ques: "What is ROAS and what should I expect?",
        ans: "ROAS is return on ad spend — revenue divided by what you spent. Across our live accounts it ranges from roughly 3x to 10x depending on category, margin and offer. Anyone promising a fixed number before seeing your product is guessing.",
      },
      {
        id: 5,
        ques: "Who owns the ad account and data?",
        ans: "You do, always. We work inside your Business Manager and ad account. If we ever stop working together, your pixel, audiences and campaign history stay entirely with you.",
      },
    ],
  },
  {
    id: 6,
    name: "Google Ads And PPC",
    heading: "Drive Instant Traffic & Sales with Google Ads & PPC",
    para: "Reach your target audience instantly with high-converting Google Ads campaigns. Our PPC experts create and manage ads that maximize ROI, bring real traffic, and help your business grow faster online.",
    img: "/goolgeAndPPC.png",
    btn: "Launch Your Ad Campaign",
    stats: [
      { id: 1, value: "65,186", label: "Conversions driven" },
      { id: 2, value: "₹1.11Cr", label: "Spend managed on one account" },
      { id: 3, value: "13.06%", label: "Best campaign CTR" },
      { id: 4, value: "90.7%", label: "Peak impression share" },
    ],
    careHeading: "Paid search structured\naround buying intent",
    careSub:
      "Search, Shopping and Performance Max working together — the setup that pushed PartsBaba to ₹3.66Cr in tracked conversion value.",
    care: [
      {
        id: 1,
        icon: "fa-brands fa-google",
        title: "Search Campaigns",
        img: "/GoogleAds.png",
        desc: "Tight ad groups built around real search intent, with negative keyword lists that stop your budget going to searches that will never convert.",
      },
      {
        id: 2,
        icon: "fa-solid fa-bag-shopping",
        title: "Shopping & Performance Max",
        img: "/online-shop.png",
        desc: "Merchant Center feeds cleaned and optimised, then Shopping and PMax campaigns structured so they complement Search instead of cannibalising it.",
      },
      {
        id: 3,
        icon: "fa-solid fa-phone-volume",
        title: "Call & Lead Campaigns",
        img: "/contact.png",
        desc: "Call-only ads, call extensions and lead forms for businesses where a phone conversation closes better than a landing page ever will.",
      },
      {
        id: 4,
        icon: "fa-solid fa-crosshairs",
        title: "Conversion Tracking Setup",
        img: "/GoogleAnalytics.jpg",
        desc: "GA4, Google Tag Manager and conversion actions configured properly first — because optimising against broken tracking wastes every rupee after it.",
      },
      {
        id: 5,
        icon: "fa-solid fa-location-crosshairs",
        title: "Geo & Bid Strategy",
        img: "/world-tour.png",
        desc: "City-by-city campaign structure with bids and budgets set per location, the same approach that held 78% impression share in Delhi NCR.",
      },
      {
        id: 6,
        icon: "fa-solid fa-file-invoice",
        title: "Transparent Reporting",
        img: "/MarketingCampaignCaseStudies.png",
        desc: "Cost per conversion, impression share, click volume and auction insights against competitors — reported monthly in plain language.",
      },
    ],
    stepsHeading: "From account setup to\nprofitable scale",
    steps: [
      {
        id: 1,
        title: "Research",
        desc: "Keyword and competitor research, plus auction insights, to find where demand exists and what it will realistically cost to compete there.",
      },
      {
        id: 2,
        title: "Build",
        desc: "Account structure, ad copy, extensions, negatives and conversion tracking configured from scratch or rebuilt on your existing account.",
      },
      {
        id: 3,
        title: "Optimise",
        desc: "Search terms reviewed, bids adjusted, weak keywords paused and landing pages tested — daily, not once a month.",
      },
      {
        id: 4,
        title: "Scale",
        desc: "Once cost per conversion is stable and profitable, budgets increase and new campaign types and locations get added carefully.",
      },
    ],
    ctaHeading: "Paying for clicks that don’t convert?",
    ctaSub:
      "Share your Google Ads account. We’ll review search terms, structure and tracking, and show you what is quietly draining the budget.",
    ctaBtn: "Request a free PPC review",
    qeustion: [
      {
        id: 1,
        ques: "How much should I spend on Google Ads?",
        ans: "It depends on your industry's cost per click and how many conversions you need to judge performance. We start by estimating what a meaningful test costs in your category, then scale only once cost per conversion is stable and profitable.",
      },
      {
        id: 2,
        ques: "How fast do Google Ads bring results?",
        ans: "Traffic starts the same day a campaign goes live, which is the main advantage over SEO. Reliable conversion data usually takes two to four weeks, and profitable scaling follows once the account has enough signal to optimise against.",
      },
      {
        id: 3,
        ques: "What is the difference between Search, Shopping and Performance Max?",
        ans: "Search targets keyword intent with text ads. Shopping shows your products with images and prices directly in results. Performance Max spans Google's whole inventory using automation. Most e-commerce accounts need all three, structured so they do not compete with each other.",
      },
      {
        id: 4,
        ques: "Why is my current campaign spending without converting?",
        ans: "Usually one of four things: broken or missing conversion tracking, broad match without negative keywords, ad copy that does not match the landing page, or bidding on research intent instead of buying intent. An audit identifies which of these is costing you.",
      },
      {
        id: 5,
        ques: "Do I keep control of my Google Ads account?",
        ans: "Yes. The account stays in your name with your billing. We work inside it with access you grant and can revoke at any time, so your campaign history and data never leave your control.",
      },
    ],
  },
  {
    id: 7,
    name: "Performance Marketing",
    heading: "Maximize ROI with Smart Performance Marketing",
    para: "Get measurable results and higher returns on every marketing rupee spent. Our performance marketing strategies focus on data, targeting, and optimization to drive real growth and valuable customer actions.",
    img: "/servicePerformanceMarketing.png",
    btn: "Start Growing Smarter",
    stats: [
      { id: 1, value: "₹1.42Cr", label: "Ad spend managed" },
      { id: 2, value: "₹4.44Cr", label: "Revenue generated" },
      { id: 3, value: "4-10x", label: "ROAS range" },
      { id: 4, value: "3,000+", label: "Leads generated" },
    ],
    careHeading: "Every channel judged\nby the same yardstick",
    careSub:
      "Across 13 client accounts in e-commerce, healthcare, auto and B2B — measured on cost per result, never on impressions.",
    care: [
      {
        id: 1,
        icon: "fa-brands fa-meta",
        title: "Meta Ads",
        img: "/metapixel.png",
        desc: "Prospecting, retargeting and conversion campaigns with audience segmentation and creative testing, optimised on purchase and lead value.",
      },
      {
        id: 2,
        icon: "fa-brands fa-google",
        title: "Google Search & Shopping",
        img: "/GoogleAds.png",
        desc: "Intent-driven Search, Shopping and Performance Max campaigns structured city by city where local demand differs.",
      },
      {
        id: 3,
        icon: "fa-solid fa-filter",
        title: "Lead Generation Funnels",
        img: "/ServicesocialMedia.png",
        desc: "Forms, WhatsApp and call campaigns tuned for qualified leads rather than raw volume — 3,000+ delivered across live accounts.",
      },
      {
        id: 4,
        icon: "fa-solid fa-arrow-trend-up",
        title: "ROAS Optimisation",
        img: "/performance.png",
        desc: "Bid strategy, offer testing and daily budget shifts toward the ad sets actually returning money, with the rest switched off fast.",
      },
      {
        id: 5,
        icon: "fa-solid fa-wallet",
        title: "Budget Pacing & Scaling",
        img: "/rocket.png",
        desc: "Experience pacing spends from ₹1L to ₹65L+ per account without letting cost per result run away as budgets grow.",
      },
      {
        id: 6,
        icon: "fa-solid fa-chart-column",
        title: "KPI Reporting",
        img: "/GoogleAnalytics.jpg",
        desc: "Spend, CPL, CPA, ROAS and conversion value tracked in one place, so every marketing decision is made against real numbers.",
      },
    ],
    stepsHeading: "How performance budgets\nget put to work",
    steps: [
      {
        id: 1,
        title: "Measure",
        desc: "Tracking, pixels and conversion events audited first. Without clean measurement, every optimisation after it is guesswork.",
      },
      {
        id: 2,
        title: "Test",
        desc: "Offers, audiences and creatives tested in controlled splits across channels until the winning combinations are obvious in the data.",
      },
      {
        id: 3,
        title: "Optimise",
        desc: "Daily budget reallocation toward what converts, with underperforming ad sets and keywords cut before they eat the month.",
      },
      {
        id: 4,
        title: "Scale",
        desc: "Once cost per result holds steady, spend increases channel by channel while margins stay protected.",
      },
    ],
    ctaHeading: "Want your marketing measured properly?",
    ctaSub:
      "Tell us what you sell and what a customer is worth. We’ll map which channels are realistic for your margins and where to start.",
    ctaBtn: "Talk about your growth plan",
    qeustion: [
      {
        id: 1,
        ques: "What is performance marketing?",
        ans: "Performance marketing is paid acquisition measured against a business outcome — a purchase, lead or call — rather than reach or impressions. Every rupee is tied to a result you can count, which makes it possible to decide honestly what to scale and what to stop.",
      },
      {
        id: 2,
        ques: "Which channels do you work with?",
        ans: "Primarily Meta Ads and Google Ads, including Search, Shopping and Performance Max. Which mix suits you depends on your margins, your buying cycle and whether your customers search for you or need to be shown you.",
      },
      {
        id: 3,
        ques: "How do you decide where to put the budget?",
        ans: "By cost per result. We test channels and audiences in controlled splits, then move budget daily toward what returns money and away from what does not. Nothing gets kept alive because it looked good in a plan.",
      },
      {
        id: 4,
        ques: "What ROAS can I realistically expect?",
        ans: "Across our accounts ROAS ranges from roughly 4x to 10x, and one Google account reached far higher on a narrow product set. What is achievable depends on your margin, offer and competition, and we would rather set that expectation honestly upfront than promise a number.",
      },
      {
        id: 5,
        ques: "Do I need tracking set up before we start?",
        ans: "You need it, but you do not need to set it up yourself. Fixing conversion tracking, pixels and GA4 events is the first thing we do, because optimising against broken data wastes every rupee spent afterwards.",
      },
    ],
  },
];


async function page({params}) {

 
  // const name =  params?.name; 
   const { name } = await params;


  const slugify = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

 

  const selectedContent = content.find(
    (item) => item?.name && slugify(item.name) === name
  );

  if (!selectedContent) {
    return <p>No content found!</p>;
  }

  return (
    <div>
<Dynamic  selectedContent = {selectedContent}/>
    </div>
  )
}

export default page
