"use client"
import React,{useRef,useEffect} from 'react'
import style from "../style/home.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function HomeSecondSection() {
const textRef = useRef(null)

useEffect(()=>{
  const textElement = gsap.from(textRef.current,{
    scale:1,
    opacity:0,
    duration:1,
     color: "#ff00aa",
    ease: "power3.out",
    scrollTrigger:{
      trigger:textRef.current,
      start:"top 80%",
      toggleActions: "play none none none",
     markers: true
    }
    
  })
  return ( )=>{
    textElement.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
},[])

  return (
    <div>
      <div className={style.HomeSecondSection_heading}>
          <h1 className={style.heading_h1} ref={textRef}>Build Bold. Market Smart. Grow Limitless.</h1>
      </div>
    </div>
  )
}

export default HomeSecondSection