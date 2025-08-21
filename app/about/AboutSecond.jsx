import React from 'react'
import style from "../style/about.module.css"
import Image from "next/image";

function AboutSecond() {
    const tags = [
    "Founding BDR's",
    "Founder's Office",
    "Growth and Revenue",
    "Demand & Growth Specialist",
    "Partnerships Specialist",
    "Founding Team",
  ];
  return (
    <div>
        <h1 className={style.about_values_heading}>Our Values</h1>
        <div className={style.aboutValue}>
            <div className={style.value_boxes}>
                <Image src="/star.png" alt='' width={60} height={60} />
                <p className={style.value_heading}>Transparency</p>
                <p className={style.value_para}>We maintain complete transparency, keeping clients informed with clear reports, honest communication, and real results.</p>
            </div>
            <div className={style.value_boxes}>
                <Image src="/rocket.png" alt='' width={60} height={60} />
                <p className={style.value_heading}>Performance driven</p>
                <p className={style.value_para}>We focus on performance-driven strategies that maximize ROI, boost conversions, and deliver measurable business growth.</p>
            </div>
            <div className={style.value_boxes}>
                <Image src="/light-bulb.svg" alt='' width={60} height={60} />
                <p className={style.value_heading}>Creative thinking</p>
                <p className={style.value_para}>We apply creative thinking to craft unique solutions that solve real problems and elevate your brand identity.</p>
            </div>
            <div className={style.value_boxes}>
                <Image src="/tools.png" alt='' width={60} height={60} />
                <p className={style.value_heading}>Transparency</p>
                <p className={style.value_para}>We maintain complete transparency, keeping clients informed with clear reports, honest communication, and real results.</p>
            </div>
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

           <div className={style.About_scrollerWrapperTag}>
      <div className={style.About_scrollerTag}>
        {[...tags, ...tags].map((tag, idx) => (
          <span key={idx} className={style.tag}>
            {tag}
          </span>
        ))}
      </div>
      </div>
    </div>
  )
}

export default AboutSecond