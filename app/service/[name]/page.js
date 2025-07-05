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
      btn:"Plan Your Website With Us"
    },
    {
      id: 2,
      name: "Web Developement",
      heading: "Craft High-Performance Websites That Drive Results",
      para: "We build modern, fast, and secure websites tailored to your business. From unique designs to smooth functionality, our websites help attract customers, boost engagement, and strengthen your brand online.",
      img: "/webDevelopmentservice.png",
      btn:"Start Your Website Project",

      boxes:{
        normal:{
          price:"5k - 6k",
          section:"5 section only ",
          Reponsive:"no",

        },
        business:{
          price:"10k - 15k",
          section:"5 pages ",
          Reponsive:"Yes",
          Backend:"Yes"
        }
      }
    },
    {
      id: 3,
      name: "Website Maintenance",
      heading: "Keep Your Website Running Smoothly with Expert Maintenance",
      para: "Focus on growing your business while we keep your website secure, updated, and error-free. From routine checks to emergency fixes, our maintenance services ensure your site performs reliably every day.",
      img: "/serviceWebMaintance.png",
      btn:"Secure Your Website Today"
    },
    {
      id: 4,
      name: "SearchBoost SEO",
      heading: "Boost Your Online Visibility with Smart SEO Strategies",
      para: "Rank higher and reach the right audience with our SEO services. We optimize your website, create valuable content, and drive targeted traffic to help your business grow online.",
      img: "/serviceSeo.png",
      btn:"Book Your SEO Audit"
    },
    {
      id: 5,
      name: "Social Media Marketing",
      heading: "turn Followers into Customers with Smart Social Marketing",
      para: "Grow your brand’s reach and engagement on social media. We create compelling content, run targeted ads, and help you connect with the right audience to drive real business results.",
      img: "/serivceSocialMarketing.png",
      btn:"Boost Your Social Presence"
    },
    {
      id: 6,
      name: "Google Ads And PPC",
      heading: "Drive Instant Traffic & Sales with Google Ads & PPC",
      para: "Reach your target audience instantly with high-converting Google Ads campaigns. Our PPC experts create and manage ads that maximize ROI, bring real traffic, and help your business grow faster online.",
      img: "/goolgeAndPPC.png",
      btn:"Launch Your Ad Campaign"
    },
    {
      id: 7,
      name: "Performance Marketing",
      heading: "Maximize ROI with Smart Performance Marketing",
      para: "Get measurable results and higher returns on every marketing rupee spent. Our performance marketing strategies focus on data, targeting, and optimization to drive real growth and valuable customer actions.",
      img: "/servicePerformanceMarketing.png",
      btn:"Start Growing Smarter"
    },
    {

    },
  ];
function page({params}) {

 
  const name =  params?.name; 

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