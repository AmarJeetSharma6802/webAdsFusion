"use client"
import React, { useState } from "react";
import style from "../../style/service.module.css";
import Image from "next/image";

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
    {/* Section Heading */}
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
  </div>
)}
    </>
  );
}

export default Dynamic