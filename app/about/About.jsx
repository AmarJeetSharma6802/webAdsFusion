import React from "react";
import style from "../style/about.module.css";
import Image from "next/image";
import AboutSecond from "./AboutSecond";
function About() {
  return (
    <>
      <div className={style.about}>
        <div className={style.about_page}>
          <div className={style.center_about}>
            <p>ABOUT</p>{" "}
          </div>
          <div className={style.dreamAbout}>
            <p className={style.dreamAbout_content}>
              The dream team of <br></br>web & digital marketing
            </p>
            <p>We Grow Businesses online . period.</p>
          </div>
          <video
            src="/12421542_3840_2160_30fps.mp4"
            muted
            loop
            autoPlay
            playsInline
            className={style.about_video}
          />
        </div>

        <div className={style.about_img_content}>
          <div className={style.about_img_First_content}>
            <Image
              src="/aboutImageFirst.png"
              alt=""
              width={300}
              height={250}
              className={style.aboutImage}
            />
            <div className={style.about_img_First_content_paraHeading}>
              <p className={style.about_count}>01</p>
              <div className={style.warp_para}>
                <p className={style.about_img_First_content_para_heading}>
                  Custom Web Serive
                </p>
                <p className={style.about_img_First_content_para}>
                  We provide custom web development services tailored to your
                  brand—delivering fast, responsive, and user-friendly websites
                  that drive results and conversions.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${style.about_img_First_content} ${style.about_img_First_content_top} `}
          >
            <Image
              src="/about_imageSecond.png"
              alt=""
              width={350}
              height={300}
              className={style.aboutImage}
            />
            <div className={style.about_img_First_content_paraHeading}>
              <p className={style.about_count}>02</p>
              <div className={style.warp_para}>
                <p className={style.about_img_First_content_para_heading}>
                  Performance marketing
                </p>
                <p className={style.about_img_First_content_para}>
                  We deliver result-focused performance marketing that drives
                  real sales, leads, and ROI through Google, Meta, and Shopping
                  Ads.
                </p>
              </div>
            </div>
          </div>

          <div className={style.about_img_First_content}>
            <Image
              src="/about_imageThird.png"
              alt=""
              width={300}
              height={250}
              className={style.aboutImage}
            />
            <div className={style.about_img_First_content_paraHeading}>
              <p className={style.about_count}>01</p>
              <div className={style.warp_para}>
                <p className={style.about_img_First_content_para_heading}>
                  Custom Seo Service
                </p>
                <p className={style.about_img_First_content_para}>
                  We offer tailored SEO services designed to boost your search
                  rankings, increase website traffic, and drive high-intent
                  leads specific to your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSecond />
    </>
  );
}

export default About;
