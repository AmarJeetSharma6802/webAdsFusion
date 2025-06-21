"use client";
import React, { useState, useEffect } from "react";
import style from "../style/navbar.module.css";
import Navbar from "../topHeader/Navbar.jsx"

function TopHeader() {
  const [fade, setFade] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    "Performance marketing",
    "Web development",
    "Google Ads",
    "Facebook Ads",
    "Business website",
    "Portfolio website",
    "Static website",
    "Dynamic website",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFade(true); 
      }, 1000); 
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={style.TopHeaderContainer}>
    <div className={style.TopHeadFade}>

      <span
        className={`${style.topHead_span} ${
          fade ? style["fade-in"] : style["fade-out"]
        }`}
      >
        {messages[currentIndex]}
      </span>
    </div>
    <Navbar/>
    </div>
  );
}

export default TopHeader;