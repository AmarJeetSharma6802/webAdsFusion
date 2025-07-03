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
        <img src="/service.png" alt=''/>
      </div>
      </div>
    </div>
   </> 
  )
}

export default page