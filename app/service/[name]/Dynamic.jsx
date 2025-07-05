"use client";
import React from "react";
import style from "../../style/service.module.css";
import { useParams } from "next/navigation";
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
        {/* <div>{selectedContent.boxes.normal.price}</div> */}
      </div>
    </>
  );
}

export default Dynamic