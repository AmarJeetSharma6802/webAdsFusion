"use client"
import React from 'react'
import style from "../../style/service.module.css"

function page() {
  return (
    <>
    <div className={style.service_page}>
      <div  className={style.service_bg}>
      <div  className={style.service_bg_orange}></div>
      <div className={style.service_content}>
        <h1>Modern Web Design: Trends, Tools & Timeless Principles</h1>
        <p>How to Design a Website From Scratch in 2025Web design is a comprehensive process encompassing the planning conceptualization and implementation of a website{"'"}s visual layout and user experience.</p>
        <img src="/serviceWebDesign.png" alt='' style={{width:"50%"}}/>
      </div>
      </div>
    </div>
   </> 
  )
}

export default page