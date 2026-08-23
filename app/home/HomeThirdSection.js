import React from "react";
import style from "../style/home.module.css";
import Image from "next/image";
import Link from "next/link";
import HomeFivethSection from "./HomeFivthSection.js"
import ThirdSectionCaroucel from "./ThirdSectionCaroucel"

function HomeThirdSection() {
  const boxes = [
    {
      id: 1,
      name: "Website Design",
      img: "/serviceWebDesign.png",
      slug: "website-design",
      tag: "Design",
      para: "Conversion-first layouts, clean typography and responsive UI built for real devices — interfaces that look sharp and guide visitors straight to the enquiry.",
    },
    {
      id: 2,
      name: "Web Development",
      img: "/webDevelopmentservice.png",
      slug: "web-developement",
      tag: "Development",
      para: "Production-ready builds on Next.js and Node.js — server rendering, REST APIs, secure auth and admin tooling that stay fast as your traffic grows.",
    },
    {
      id: 3,
      name: "SearchBoost SEO",
      img: "/serviceSeo.png",
      slug: "searchboost-seo",
      tag: "Organic",
      para: "Technical SEO, keyword intent mapping and content that earns rankings — dynamic metadata, clean structure and steady organic traffic month after month.",
    },
    {
      id: 4,
      name: "Social Media Marketing",
      img: "/serivceSocialMarketing.png",
      slug: "social-media-marketing",
      tag: "Meta Ads",
      para: "Full-funnel Meta campaigns with audience segmentation, creative testing and retargeting — the same playbook that delivered 3.57x ROAS for D2C brands.",
    },
    {
      id: 5,
      name: "Google Ads & PPC",
      img: "/goolgeAndPPC.png",
      slug: "google-ads-and-ppc",
      tag: "Paid Search",
      para: "Search, Shopping and Performance Max campaigns structured around buying intent — 65,000+ conversions driven across live client accounts.",
    },
    {
      id: 6,
      name: "Performance Marketing",
      img: "/servicePerformanceMarketing.png",
      slug: "performance-marketing",
      tag: "Growth",
      para: "Budget pacing, ROAS optimisation and KPI reporting on spend, CPL, CPA — ₹1.42Cr in ad spend managed into ₹4.44Cr of tracked revenue.",
    },
  ];

  const team = [
    {
      id: 1,
      name: "Anand Sharma",
      img: "/anandSharma.jpg",
      role: "Performance Marketing Specialist | Meta & Google Ads 🚀",
      description:
        "₹1.42Cr ad spend managed into ₹4.44Cr revenue, with 3,000+ quality leads and a 4–10x ROAS range across 13 client accounts. Your business growth partner.",
      ctaLabel: "View Case Studies",
      ctaLink: "https://anand-sharma.vercel.app/",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/anandsharma28" },
        { label: "Email", href: "mailto:anandsharma28898@gmail.com" },
      ],
    },
    {
      id: 2,
      name: "Amarjeet Sharma",
      img: "/Amarjeet_Sharma.png",
      role: "Full Stack Developer | MERN, Next.js & Automation",
      description:
        "Builds fast, scalable, production-ready web apps with the MERN stack, Next.js, AI integrations and n8n automation — from the first commit to live traffic.",
      ctaLabel: "View Portfolio",
      ctaLink: "https://portfolio-beta-dusky-34.vercel.app/",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/amarjeet-sharma-full-stack/",
        },
        { label: "GitHub", href: "https://github.com/AmarJeetSharma6802" },
      ],
    },
  ];

  return (
    <>
      <div className={style.HomeThidSection_boxe_wrap}>
        <h1 className={style.HomeThidSection_boxe_wrap_h1}>
          We’re Offering Creative,<br></br>
          Web Services
        </h1>
        <p className={style.HomeThidSection_boxe_wrap_sub}>
          One team for the whole funnel — the site that converts, and the ads
          that fill it.
        </p>
        <div className={style.HomeThidSection_boxes}>
          {boxes.map((item) => (
            <Link
              key={item.id}
              href={`/service/${item.slug}`}
              className={style.boxes_key}
            >
              <div className={style.boxes_head}>
                <div className={style.boxes_img}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={120}
                    height={120}
                    className={style.inner_boxes_img}
                  />
                </div>
                <span className={style.boxes_tag}>{item.tag}</span>
              </div>
              <div className={style.boxes_key_details}>
                <div className={style.boxes_key_name}>
                  <p>{item.name}</p>
                </div>
                <div className={style.boxes_key_para}>
                  <p>{item.para}</p>
                </div>
                <div className={style.btn_arrow}>
                  <span className={style.boxes_key_btn}>Read more</span>
                  <p><i className="fa-solid fa-arrow-right"></i></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    <ThirdSectionCaroucel/>


      <div className={style.homeFourthSection_wrap}>
        <div className={style.homeFourthSection}>
          <h1 className={style.homeFourthSection_h1}>Meet the Mind Behind<br />WebAdsFusion</h1>
          <div className={style.homeFourthSection_flex}>
            {team.map((member) => (
              <div key={member.id} className={style.homeFourthSection_flex_child}>
                <div className={style.homeFourthSection_flex_child_img}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={80}
                    height={80}
                    className={style.fourthSection_img}
                  />
                </div>
                <div className={style.homeFourthSection_flex_child_details}>
                  <div className={style.homeFourthSection_flex_child_details_wrap}>
                    <p className={style.name}>{member.name}</p>
                    <p className={style.role}>{member.role}</p>
                    <p className={style.description}>{member.description}</p>

                    <a
                      className={style.cta}
                      href={member.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.ctaLabel}
                    </a>

                    <div className={style.member_links}>
                      {member.links.map((link) => (
                        <a
                          key={link.label}
                          className={style.member_link}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HomeFivethSection/>
    </>
  );
}

export default HomeThirdSection;
