"use client";
import React, { useEffect, useState } from "react";

function GoUp() {
  const [visible, setVisible] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div className="circle" onClick={scrollToTop}>
          <div className="arrow">
            <i className="fa-solid fa-arrow-up"></i>
            <span className="back-text">Back <br /> to <br /> top</span>
          </div>
        </div>
      )}
    </>
  );
}

export default GoUp;
