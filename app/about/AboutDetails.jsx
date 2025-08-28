import React from "react";
import style from "../style/about.module.css";
import Image from "next/image";

function AboutDetails() {

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
    <>
      <div className={style.webads_fusion}>
        <div className={style.webads_fusionDetails}>
          <div className={style.image_name}></div>
          <div className={style.flex_name_img}>
            <Image
              src="/anandSharma.jpg"
              alt=""
              width={140}
              height={140}
              className={style.anand_img}
            />
            <div className={style.name}>
              <p className={style.name_name}>Anand Sharma</p>
              <p className={style.name_Profomance}>Profomance Marketer</p>
            </div>
          </div>
          <div className={style.owner_deatils}>
            <h4>Professional Summary :- </h4>
            <p className={style.owner_deatils_pOne}>
              Performance Marketer & Sales Strategist with 2+ years of
              experience scaling businesses through high-converting Meta
              (Facebook & Instagram) and Google Ads campaigns.
            </p>
            <p className={style.owner_deatils_pTwo}>
              I build predictable ad systems that turn cold traffic into loyal
              customers — using smart targeting, engaging creatives, optimized
              funnels, and continuous performance tracking.
            </p>
            <p className={style.owner_deatils_pThree}>
              My focus: Clarity, Results & Sustainable Growth for every brand I
              work with.
            </p>
          </div>
          <div className={style.social_media}>
            <h4>Connect with me :- </h4>
            <div className={style.All_fonts}>
            <div className="">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="">
            <i className="fa-brands fa-x-twitter"></i>
            </div>
             </div>
          </div>

        <button  className={style.cta_btn}>Let’s Talk with Anand</button>

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
        <div className={style.webads_fusionDetails_right}>
             <div className={style.image_name_fullstack}></div>
          <div className={style.flex_name_img}>
            <Image
              src="/AmarjeetSharma.png"
              alt=""
              width={140}
              height={140}
              className={style.anand_img}
            />
            <div className={style.name}>
              <p className={style.name_name}>Anand Sharma</p>
              <p className={style.name_Profomance}>Profomance Marketer</p>
            </div>
          </div>
          <div className={style.owner_deatils}>
            <h4>Professional Summary :- </h4>
            <p className={style.owner_deatils_pOne}>
              Performance Marketer & Sales Strategist with 2+ years of
              experience scaling businesses through high-converting Meta
              (Facebook & Instagram) and Google Ads campaigns.
            </p>
            <p className={style.owner_deatils_pTwo}>
              I build predictable ad systems that turn cold traffic into loyal
              customers — using smart targeting, engaging creatives, optimized
              funnels, and continuous performance tracking.
            </p>
            <p className={style.owner_deatils_pThree}>
              My focus: Clarity, Results & Sustainable Growth for every brand I
              work with.
            </p>
          </div>
          <div className={style.social_media}>
            <h4>Connect with me :- </h4>
            <div className={style.All_fonts}>
            <div className="">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="">
            <i className="fa-brands fa-x-twitter"></i>
            </div>
             </div>
          </div>

        <button  className={style.cta_btn}>Let’s Talk with Anand</button>

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
    </>
  );
}

export default AboutDetails;
