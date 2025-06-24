import React, { useState } from "react";
import style from "../style/home.module.css";
import Image from "next/image";

function HomeFivthSection() {
  const logo = [
    {
      id: 1,
      img: "/HTML.svg",
      name: "Html",
    },
    {
      id: 2,
      img: "/CSS3.svg",
      name: "CSS",
    },
    {
      id: 14,
      img: "/Nextjs.png",
      name: "Next js",
    },
    {
      id: 3,
      img: "/bootstrap.svg",
      name: "Html",
    },
    {
      id: 4,
      img: "/HTML.svg",
      name: "Html",
    },
    {
      id: 5,
      img: "/javascript.svg",
      name: "Javascript",
    },
    {
      id: 6,
      img: "/React.svg",
      name: "React js",
    },
    {
      id: 7,
      img: "/typescript.svg",
      name: "TypeScript",
    },
    {
      id: 8,
      img: "/nodejs.png",
      name: "Node js",
    },
    {
      id: 9,
      img: "/express.svg",
      name: "Express js",
    },
    {
      id: 10,
      img: "/mongodb.svg",
      name: "MongoDB",
    },
    {
      id: 11,
      img: "/postman.png",
      name: "Postman",
    },
    {
      id: 12,
      img: "/git.svg",
      name: "Git",
    },
    {
      id: 13,
      img: "/mongoose.png",
      name: "Mongoose",
    },
    
    {
      id: 15,
      img: "/gsap.png",
      name: "Gsap",
    },
    
  ];
  const marketingLogo = [
    {
      id: 1,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
    {
      id: 2,
      img: "/googleAdsLogo .png",
      name: "Goolge Ads ",
    },
    {
      id: 3,
      img: "/GoogleAnalytics.jpg",
      name: "Googel Ananlytics",
    },
    {
      id: 4,
      img: "/metapixel.png",
      name: "Meta Pixel ",
    },
    {
      id: 5,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
    {
      id: 6,
      img: "/googleAdsLogo .png",
      name: "Goolge Ads ",
    },
    {
      id: 7,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
    {
      id: 8,
      img: "/GoogleAnalytics.jpg",
      name: "Googel Ananlytics",
    },
    {
      id: 9,
      img: "/metapixel.png",
      name: "Meta Pixel ",
    },
    {
      id: 10,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
    
  ];
  return (
    <div>
      <div className={style.HomeFivthSection}>
        <h1 className={style.HomeFivthSection_heading}>
          The Tools That Power <br></br> WebAdsFusion
        </h1>

        {/* <div className={style.HomeFivthSection_center}>
        <div className={style.HomeFivthSection_btn}>
          <button onClick={() => setActive("dev")} className={`${style.HomeFivthSection_btns} ${active === "dev" ? style.active :""}`}>Development Tools</button>
          <button onClick={() => setActive("marketing")} className={`${style.HomeFivthSection_btns} ${active === "dev" ? style.active :""}`}>
            Marketing Tools
          </button>
        </div>

<div className={style.digitalLogo}>
        {active === "dev" &&
          logo.map((item) => {
            return (
              <div key={item.id} className={style.HomeFivthSection_key_div}>
                <img src={item.img} alt={item.name} style={{ width: "100%" }} />
                <p>{item.name}</p>
              </div>
            );
          })}
          </div>

<div className={style.digitalLogo}>

        {active === "marketing" &&
          marketingLogo.map((item) => {
            return (
              <div key={item.id}  className={style.HomeFivthSection_key_div}>
                <img src={item.img} alt={item.name} style={{ width: "100%" }} />
                <p>{item.name}</p>
              </div>
            );
          })}
          </div>
      </div> */}

       <div className={style.scrollerSection}>
          <div className={style.scrollerWrapper}>
           <div className={style.scoller}>
              {[...logo, ...logo].map((item, index) => (
                <div key={`${item.id}-${index}`} className={style.scroller_container}>
                 <div className={style.scroller_container_Details}>
                   <Image
                    src={item.img}
                    alt="Logo"
                    width={40}
                    height={40}
                    className={style.scoller_logo_img}
                  />
                  <p>{item.name}</p>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       <div className={style.scrollerSection}>
          <div className={style.scrollerWrapper}>
           <div className={style.scoller_marketing}>
              {[...marketingLogo, ...marketingLogo].map((item, index) => (
                <div key={`${item.id}-${index}`} className={style.scroller_container}>
                 <div className={style.scroller_container_Details}>
                   <Image
                    src={item.img}
                    alt="Logo"
                    width={40}
                    height={40}
                    className={style.scoller_logo_img}
                  />
                  <p>{item.name}</p>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeFivthSection;
