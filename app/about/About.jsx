"use client"
import React, { useEffect, useState } from "react";
import style from "../style/about.module.css";
import Image from "next/image";
import AboutSecond from "./AboutSecond";
function About() {

 const phoneNumber = "8882532282"; 

  const handleClick = (e) => {
    e.preventDefault();

    // Simple device check
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile → Direct Dialer
      window.location.href = `tel:+${phoneNumber}`;
    } else {
      // Desktop → WhatsApp Web
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`, "_blank");
    }
  };


  return (
   <>
      <div className={style.about}>
        <div className={style.about_page}>
          <div className={style.about_img_content_top}>
            <div className={style.about_content}>
              <p className={style.about_content_heading}>Web-Ads-Fusion: Creative <span className={style.span_orange}>web development meets strategic performance marketing </span> in one seamless platform</p>
              <p className={style.about_content_para}>Web-Ads-Fusion delivers powerful websites and impactful social media strategies, combining creativity with technology to boost online visibility, strengthen brands, and achieve measurable business growth.</p>
              <div className={style.about_top_btns}>
                <button className={style.btn_call}>Contact us</button>
                <button className={style.btn_call} onClick={handleClick}>Get a Free Call</button>
              </div>
            </div>
            <div className={style.about_content_img}>
            <Image src="/ab.png" alt="" width={300} height={300} className={style.about_IMAGE} />
            </div>
          </div>
        </div>

    <div className={style.how_we_are}>
      <h1 className={style.how_we_are_heading}>How <span className={style.span_orange}>we</span> are</h1>
      <p className={style.how_we_are_para}>At WebAdsFusion, we combine best-in-class web development with results-driven digital marketing. Using tools like React, Next.js, Meta Ads, Google Ads, and performance strategies, our mission is to amplify your online presence, generate quality leads, and scale your brand.</p>
    </div>
      </div>

      <div className={style.Our_mission_Our_Vision}>
        <div className={style.Our_mission}>
          <p className={style.Our_mission_Our_Vision_heading}>Our Mission</p>
          <p className={style.Our_mission_Our_Vision_para}>Our mission is to provide exceptional digital services that help businesses thrive in a competitive world. We focus on creativity, technology, and performance to deliver effective solutions. By understanding client needs, we create customized strategies that maximize online presence, improve brand value, and ensure lasting impact with continuous innovation.</p>
        </div>
        <div className={style.Our_Vision}>
           <p className={style.Our_mission_Our_Vision_heading}>Our Vision</p>
           <p className={style.Our_mission_Our_Vision_para}>Our vision is to empower businesses and individuals with modern digital solutions, making growth accessible and sustainable. We aim to become a trusted partner by delivering innovative strategies, impactful designs, and measurable results that transform ideas into success stories while maintaining excellence, creativity, and long-term relationships with our clients.</p>
        </div>
      </div>
      <AboutSecond />
    </>
    )
   }

export default About;
