"use client";
import React from "react";
import style from "../../style/service.module.css";
import { useParams } from "next/navigation";
import Image from "next/image";

function Page() {
  const params = useParams();
  const name = params?.name; 

  const slugify = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const content = [
    {
      id: 1,
      name: "Website Design",
      heading: "Modern Web Design: Trends, Tools & Timeless Principles",
      para: "How to Design a Website From Scratch in 2025. Web design is a comprehensive process encompassing the planning, conceptualization and implementation of a website's visual layout and user experience.",
      img: "/serviceWebDesign.png",
    },
  ];

  const selectedContent = content.find(
    (item) => slugify(item.name) === name
  );

  if (!selectedContent) {
    return <p>No content found!</p>;
  }

  return (
    <>
      <div className={style.service_page}>
        <div className={style.service_bg}>
          <div className={style.service_bg_orange}></div>
          <div className={style.service_content}>
            <div className={style.service_content_img}>
              <Image src={selectedContent.img} alt={selectedContent.name} width={500} height={500 } className={style.selectedContent.img} />
            </div>
           <div className={style.service_details}>
            <h1>{selectedContent.name}</h1>
            <h2>{selectedContent.heading}</h2>
            <p>{selectedContent.para}</p>
            <button>Plan Your Website With Us</button>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
