import React from "react";
import style from "../style/about.module.css";
import Image from "next/image";

function AboutDetails() {
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
            <div className="">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className={style.webads_fusionDetails_right}></div>
      </div>
    </>
  );
}

export default AboutDetails;
