import React from 'react'
import Dynamic from "../[name]/Dynamic.jsx"

export async function generateMetadata({ params }) {
  const name = params?.name;

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
      img: "/Leonardo_Phoenix_09_A_modern_web_development_concept_illustrat_1-removebg-preview.png",
      btn:"Start Your Website Project"
    },
    {

    },
  ];
function page({params}) {

 
  const name = params?.name; 

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