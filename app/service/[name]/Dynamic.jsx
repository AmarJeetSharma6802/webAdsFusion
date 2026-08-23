"use client"
import React, { useState } from "react";
import style from "../../style/service.module.css";
import Image from "next/image";
import Link from "next/link";

function Dynamic({selectedContent}) {
  const [active ,setActive] = useState( null)
  
  const  handleClick =(ques)=>{
setActive(ques === active ? null : ques )
  }

  return (
    <>
      <div className={style.service_page}>
        <div className={style.service_bg}>
          <div className={style.service_bg_orange}></div>
          <div className={style.service_content}>
            <div className={style.service_content_img}>
              <Image src={selectedContent.img} alt={selectedContent.name} width={400} height={500 } className={style.selectedContent_img} />
            </div>
           <div className={style.service_details}>
            <h1 className={style.selectedContent_name}>{selectedContent.name}</h1>
            <h2  className={style.selectedContent_heading}>{selectedContent.heading}</h2>
            <p  className={style.selectedContent_para}>{selectedContent.para}</p>
            <button  className={style.selectedContent_btn}> {selectedContent.btn}</button>
           </div>
          </div>
        </div>
     
      </div>

    {selectedContent.name === "Website Design" && (
      <div className={style.allWebsite_details}>
  <div className={style.webDesign_section}>
    <h1 className={style.secHeading}>Services We Offer <br /> Designed Just for You</h1>

    <div className={style.webDesign_services}>
      {selectedContent.web.map((item) => (
        <div key={item.id} className={style.webCard}>
         <div className={style.image_wrap}>
           <Image 
            src={item.img} 
            alt={`Web Design Service ${item.id}`} 
            width={100} 
            height={100} 
            className={style.webCard_img}
          />
         </div>
          <h3 className={style.webCard_title}>
            {item.title || "Custom Web Design"}
          </h3>
          <p className={style.webCard_desc}>
            {item.desc || "We create responsive, modern, and user-friendly designs tailored for your business."}
          </p>
        </div>
      ))}
    </div>

  </div>
  <div className={style.webDesign_section_two}>
      <h1  className={style.webDesign_section_two_heading}>Empowering Businesses <br />Across All Sectors</h1>
      <div className={style.serve}>
      {
        selectedContent.serve.map((item)=>{
          return(
            <div key={item.id} className={style.serve_key}>
              <Image src={item.img} alt={item.heading} width={90} height={90} className={style.serve_img}/>
              <p className={style.serve_key_heading}>{item.heading}</p>
            </div> 
          )
        })
      }
      </div>
    </div>
  {/* <div className={style.webDesign_section_three}>
  <h1 className={style.webDesign_section_two_heading}>FAQ</h1>
  <div className={style.qeustion}>
    {selectedContent.qeustion.map((item) => (
      <div key={item.id} className={style.qeustion_key}>
        <div className={style.qeustion_flex} onClick={()=> handleClick(item.ques)}>
          <p className={style.qeustion_title}>{item.ques}</p>
          <span className={style.icon} >
            {
              active === item.ques ?<i className="fa-solid fa-angle-up"></i>: <i className="fa-solid fa-angle-down"></i>
            }
          </span>
        </div>
        <p className={`${style.qeustion_ans} ${active === item.ques ?style.active :""}`}>{item.ans}</p>
      </div>
    ))}
  </div>
</div> */}
  </div>
)}

{selectedContent.name === "Website Maintenance" && (
  <div className={style.maint}>
    {/* stats strip */}
    <div className={style.maint_stats}>
      {selectedContent.stats.map((item) => (
        <div key={item.id} className={style.maint_stat}>
          <p className={style.maint_stat_value}>{item.value}</p>
          <p className={style.maint_stat_label}>{item.label}</p>
        </div>
      ))}
    </div>

    {/* what's covered */}
    <section className={style.maint_section}>
      <p className={style.maint_eyebrow}>What&rsquo;s covered</p>
      <h2 className={style.maint_heading}>
        Everything that keeps a live<br />site healthy
      </h2>
      <p className={style.maint_sub}>
        One retainer covers the whole surface area &mdash; security, updates,
        backups, speed and the technical SEO that quietly decides your rankings.
      </p>

      <div className={style.maint_grid}>
        {selectedContent.care.map((item) => (
          <div key={item.id} className={style.maint_card}>
            <span className={style.maint_card_icon}>
              <i className={item.icon}></i>
            </span>
            <h3 className={style.maint_card_title}>{item.title}</h3>
            <p className={style.maint_card_desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* process */}
    <section className={style.maint_section}>
      <p className={style.maint_eyebrow}>How it works</p>
      <h2 className={style.maint_heading}>
        From audit to a site you<br />stop worrying about
      </h2>

      <ol className={style.maint_steps}>
        {selectedContent.steps.map((item, index) => (
          <li key={item.id} className={style.maint_step}>
            <span className={style.maint_step_num}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={style.maint_step_title}>{item.title}</h3>
            <p className={style.maint_step_desc}>{item.desc}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* care plans */}
    <section className={style.maint_section}>
      <p className={style.maint_eyebrow}>Care plans</p>
      <h2 className={style.maint_heading}>Pick the level of cover<br />your site needs</h2>
      <p className={style.maint_sub}>
        Every plan is quoted against your actual stack and traffic &mdash; no
        packaged pricing that ignores what your site really is.
      </p>

      <div className={style.maint_plans}>
        {selectedContent.plans.map((plan) => (
          <div
            key={plan.id}
            className={`${style.maint_plan} ${plan.best ? style.maint_plan_best : ""}`}
          >
            {plan.best && <span className={style.maint_plan_badge}>Most chosen</span>}
            <h3 className={style.maint_plan_name}>{plan.name}</h3>
            <p className={style.maint_plan_tagline}>{plan.tagline}</p>
            <ul className={style.maint_plan_list}>
              {plan.features.map((feature) => (
                <li key={feature} className={style.maint_plan_item}>
                  <i className="fa-solid fa-check"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className={style.maint_plan_btn}>
              Get a quote
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* closing cta */}
    <section className={style.maint_cta}>
      <h2 className={style.maint_cta_heading}>
        Not sure what your site needs?
      </h2>
      <p className={style.maint_cta_sub}>
        Send us the URL. We&rsquo;ll run a free health check on security, speed
        and SEO, and tell you exactly what is worth fixing first.
      </p>
      <Link href="/contact" className={style.maint_cta_btn}>
        Request a free site audit
      </Link>
    </section>
  </div>
)}

{
  selectedContent.name === "Performance Marketing" &&(
    <>
 <div className={style.lead}>
  <h1 className={style.lead_heading}>
    Sources We Use to Generate Leads
  </h1>

  <div className={style.lead_services}>
    {selectedContent.serve.map((item) => (
      <div key={item.id} className={style.lead_card}>
        <Image 
          src={item.img} 
          alt={item.title || "Lead Source"} 
          width={100} 
          height={100} 
          className={style.lead_img}
        />
        <div className={style.lead_content}>
          <h3 className={style.lead_title}>
            {item.title || "Lead Source"}
          </h3>
          <p className={style.lead_desc}>
            {item.desc || "We use advanced strategies to generate quality leads that drive growth."}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  )
}

{selectedContent.qeustion?.length > 0 && (
<div className={style.webDesign_section_three}>
  <h1 className={style.webDesign_section_two_heading}>FAQ</h1>
  <div className={style.qeustion}>
    {selectedContent.qeustion.map((item) => (
      <div key={item.id} className={style.qeustion_key}>
        <div className={style.qeustion_flex} onClick={()=> handleClick(item.ques)}>
          <p className={style.qeustion_title}>{item.ques}</p>
          <span className={style.icon} >
            {
              active === item.ques ?<i className="fa-solid fa-angle-up"></i>: <i className="fa-solid fa-angle-down"></i>
            }
          </span>
        </div>
        <p className={`${style.qeustion_ans} ${active === item.ques ?style.active :""}`}>{item.ans}</p>
      </div>
    ))}
  </div>
</div>
)}

    </>
  );
}

export default Dynamic