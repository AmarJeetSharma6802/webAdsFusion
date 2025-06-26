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