import React from "react";
import style from "../../style/service.module.css";
import Image from "next/image";

function Dynamic({selectedContent}) {

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
  <div className={style.webDesign_section}>
    {/* Section Heading */}
    <h1 className={style.secHeading}>Services We Offer <br /> Designed Just for You</h1>

    {/* Web Design Services List */}
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
)}
    </>
  );
}

export default Dynamic