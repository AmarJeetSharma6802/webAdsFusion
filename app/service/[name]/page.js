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
      btn:"Plan Your Website With Us",

      web:[
        {
          id:1,
          img:"/web-design.png",
          title:"Website Design",
          desc:"Your website is the first impression of your business. We design modern, professional, and user-friendly websites that reflect your brand’s identity, build trust, and leave a lasting impact on your visitors.",
        },
        {
          id:2,
          img:"/Webdevelopment.png",
          title:"Web development",
          desc:"We develop modern, secure, and high-performing websites with clean code, responsive design, and smooth functionality to help your business grow, engage customers, and build trust online. ",
        },
        {
          id:3,
          img:"/shopify.png",
          title:"Shopify",
          desc:"Your website is the first impression of your business. We design modern, professional, and user-friendly websites that reflect your brand’s identity, build trust, and leave a lasting impact on your visitors.",
        },
        {
          id:4,
          img:"/dynamicweb-maintenance.png",
          title:"Web maintenance",
          desc:"Your website is the first impression of your business. We design modern, professional, and user-friendly websites that reflect your brand’s identity, build trust, and leave a lasting impact on your visitors.",
        },
        {
          id:5,
          img:"/dynamic.png",
          title:"Dynamic & Static websites",
          desc:"Your website is the first impression of your business. We design modern, professional, and user-friendly websites that reflect your brand’s identity, build trust, and leave a lasting impact on your visitors.",
        },
        {
          id:6,
          img:"/dynamic-coustom-website.png",
          title:"Custom Website",
          desc:"Your website is the first impression of your business. We design modern, professional, and user-friendly websites that reflect your brand’s identity, build trust, and leave a lasting impact on your visitors.",
        },
      ],
      serve:[
        {
          id:1,
          heading:"Portfolio website",
          img:"/businessman.png"
        },
        {
          id:2,
          heading:"Schools & education wesbites",
          img:"/textbook.png"
        },
        {
          id:3,
          heading:"tour & travels",
          img:"/world-tour.png"
        },
        {
          id:4,
          heading:"Business website",
          img:"/planning.png"
        },
        {
          id:5,
          heading:"e - commerce ",
          img:"/online-shop.png"
        },
        {
          id:6,
          heading:"Real state ",
          img:"/estate-agent.png"
        },
      ],
      qeustion:[
        {
          id:1,
          ques:"How long does it take to design and develop a website?",
          ans:"A standard website usually takes 2–4 weeks, depending on complexity, design preferences, features, and content availability. Larger custom projects may require additional planning and development time."
        },
        {
          id:2,
          ques:"Do you create mobile-friendly and responsive websites?",
          ans:"Yes, every website we build is fully responsive, ensuring it looks great and functions smoothly on mobiles, tablets, laptops, and desktops. A responsive website improves user experience and search engine ranking."
        },
        {
          id:3,
          ques:"Can I update and manage my website after launch?",
          ans:"Absolutely! We build websites with user-friendly content management systems (CMS) like WordPress or custom panels. You can easily add, edit, or update text, images, and blog posts anytime."
        },
        {
          id:4,
          ques:"What information do you need from me to start?",
          ans:"We’ll need your business details, goals, preferred design style, branding materials, content, and any references. This helps us build a website that perfectly reflects your identity and vision."
        },
        {
          id:5,
          ques:"Will my website be SEO optimized?",
          ans:"Yes, we implement SEO-friendly structure, fast loading speed, mobile responsiveness, and optimized content. Basic SEO is included so your website ranks better and attracts more visitors from search engines."
        },
      ]
    },
    {
      id: 2,
      name: "Web Developement",
      heading: "Craft High-Performance Websites That Drive Results",
      para: "We build modern, fast, and secure websites tailored to your business. From unique designs to smooth functionality, our websites help attract customers, boost engagement, and strengthen your brand online.",
      img: "/webDevelopmentservice.png",
      btn:"Start Your Website Project",
    qeustion:[
        {
          id:1,
          ques:"What is lead generation in digital marketing?",
          ans:"Lead generation in digital marketing is the process of attracting potential customers and connecting them with sales teams. It helps identify qualified prospects who show interest in products or services and may eventually convert into paying clients."
        },
        {
          id:2,
          ques:"Why is lead generation important for businesses?",
          ans:"Lead generation is crucial because it ensures a steady flow of qualified prospects for the sales team. Without leads, businesses struggle to generate revenue, convert clients, or sustain long-term growth in competitive digital markets."
        },
        {
          id:3,
          ques:"What are common methods used for lead generation?",
          ans:"Businesses use multiple methods for lead generation including video advertising, organic search, referrals, telephone marketing, email campaigns, and events. These approaches attract potential clients, build relationships, and increase opportunities to convert prospects into sales effectively."
        },
        {
          id:4,
          ques:"How are leads converted into opportunities?",
          ans:"Once a salesperson receives a lead, they review and qualify it to determine its potential. If it fits the business requirements, the lead is converted into an opportunity, then moved through different sales stages before a deal is finalized."
        },
        {
          id:5,
          ques:"Why do some leads fail to convert into sales?",
          ans:"Many leads fail to convert because they are unqualified, lack real interest, or don’t match the business’s target audience. Without proper nurturing and follow-ups, these leads remain inactive, preventing businesses from achieving consistent sales growth."
        },
      ]
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
      care: [
        {
          id: 1,
          icon: "fa-solid fa-shield-halved",
          title: "Security & Malware Scans",
          desc: "Continuous scanning, firewall rules and SSL checks. If something suspicious shows up, we clean it and close the hole before it reaches your visitors.",
        },
        {
          id: 2,
          icon: "fa-solid fa-arrows-rotate",
          title: "Core, Plugin & Package Updates",
          desc: "Framework, CMS, plugin and dependency updates applied on staging first, so a routine patch never takes your live site down.",
        },
        {
          id: 3,
          icon: "fa-solid fa-database",
          title: "Automated Offsite Backups",
          desc: "Scheduled database and file backups stored away from your server, with a tested one-click restore whenever you need to roll back.",
        },
        {
          id: 4,
          icon: "fa-solid fa-gauge-high",
          title: "Speed & Core Web Vitals",
          desc: "Image compression, caching, script cleanup and LCP/CLS tuning so your pages stay fast on real devices and real networks.",
        },
        {
          id: 5,
          icon: "fa-solid fa-bug",
          title: "Bug Fixes & Broken Links",
          desc: "Forms that stopped sending, 404s, layout breaks after a browser update - reported, fixed and verified without you chasing anyone.",
        },
        {
          id: 6,
          icon: "fa-solid fa-chart-line",
          title: "SEO & Analytics Health",
          desc: "Sitemaps, metadata, redirects, schema and tracking checked every month so a silent technical issue never costs you rankings.",
        },
      ],
      steps: [
        {
          id: 1,
          title: "Audit",
          desc: "We start with a full health check - security, speed, SEO, broken pages and outdated dependencies - and hand you a written report of what needs attention.",
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
      btn:"Book Your SEO Audit",
      qeustion: []
    },
    {
      id: 5,
      name: "Social Media Marketing",
      heading: "turn Followers into Customers with Smart Social Marketing",
      para: "Grow your brand’s reach and engagement on social media. We create compelling content, run targeted ads, and help you connect with the right audience to drive real business results.",
      img: "/serivceSocialMarketing.png",
      btn:"Boost Your Social Presence",
      qeustion: []
    },
    {
      id: 6,
      name: "Google Ads And PPC",
      heading: "Drive Instant Traffic & Sales with Google Ads & PPC",
      para: "Reach your target audience instantly with high-converting Google Ads campaigns. Our PPC experts create and manage ads that maximize ROI, bring real traffic, and help your business grow faster online.",
      img: "/goolgeAndPPC.png",
      btn:"Launch Your Ad Campaign",
      qeustion: []
    },
    {
      id: 7,
      name: "Performance Marketing",
      heading: "Maximize ROI with Smart Performance Marketing",
      para: "Get measurable results and higher returns on every marketing rupee spent. Our performance marketing strategies focus on data, targeting, and optimization to drive real growth and valuable customer actions.",
      img: "/servicePerformanceMarketing.png",
      btn:"Start Growing Smarter",
      serve:[
       {
    id:1,
    img:"/ServicesocialMedia.png",
    title:"Social Media Ads",
    desc:"Lead generation identifies potential customers showing interest in products or services. By connecting them with sales teams"
  },
  {
    id:2,
    img:"/Homeseo.png",
    title:"SEO & SEM",
    desc:"Optimize your website to rank higher on search engines, attract targeted traffic, and increase visibility, engagement, and conversions efficiently."
  },
  {
    id:3,
    img:"/Homeseo.png",
    title:"SEO & SEM",
    desc:"Drive organic traffic and maximize visibility on search engines."
  },
  {
    id:4,
    img:"/Homeseo.png",
    title:"SEO & SEM",
    desc:"Drive organic traffic and maximize visibility on search engines."
  },
  {
    id:5,
    img:"/Homeseo.png",
    title:"SEO & SEM",
    desc:"Drive organic traffic and maximize visibility on search engines."
  },
  {
    id:6,
    img:"/Homeseo.png",
    title:"SEO & SEM",
    desc:"Drive organic traffic and maximize visibility on search engines."
  },
      ],
     qeustion:[
        {
          id:1,
          ques:"What is lead generation in digital marketing?",
          ans:"Lead generation in digital marketing is the process of attracting potential customers and connecting them with sales teams. It helps identify qualified prospects who show interest in products or services and may eventually convert into paying clients."
        },
        {
          id:2,
          ques:"Why is lead generation important for businesses?",
          ans:"Lead generation is crucial because it ensures a steady flow of qualified prospects for the sales team. Without leads, businesses struggle to generate revenue, convert clients, or sustain long-term growth in competitive digital markets."
        },
        {
          id:3,
          ques:"What are common methods used for lead generation?",
          ans:"Businesses use multiple methods for lead generation including video advertising, organic search, referrals, telephone marketing, email campaigns, and events. These approaches attract potential clients, build relationships, and increase opportunities to convert prospects into sales effectively."
        },
        {
          id:4,
          ques:"How are leads converted into opportunities?",
          ans:"Once a salesperson receives a lead, they review and qualify it to determine its potential. If it fits the business requirements, the lead is converted into an opportunity, then moved through different sales stages before a deal is finalized."
        },
        {
          id:5,
          ques:"Why do some leads fail to convert into sales?",
          ans:"Many leads fail to convert because they are unqualified, lack real interest, or don’t match the business’s target audience. Without proper nurturing and follow-ups, these leads remain inactive, preventing businesses from achieving consistent sales growth."
        },
      ]
    },
    {

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
    (item) => slugify(item.name) === name
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