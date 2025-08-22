"use client";
import React, { useRef, useEffect, useState } from "react";
import style from "../style/home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeThirdSection from "../home/HomeThirdSection.js"


gsap.registerPlugin(ScrollTrigger);
function HomeSecondSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
  const textElement = gsap.fromTo(
    textRef.current,
    {
      scale: 0.8,
      y: 80,
      opacity: 0,
    },
    {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true, 
      },
    }
  );

  return () => {
    textElement.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  useEffect(() => {

    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % message.length)
        setFade(true)
      }, 2000)
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = message[currentIndex].video;
      videoRef.current.play();
    }
  }, [currentIndex]);

  const message = [
    {
      id: 1,
      title: "Personalized Marketing Plans",
      para: "At WebAdxx, we create customized digital marketing strategies to help businesses of all sizes grow. We analyze your goals and tailor our approach to boost your online visibility, engage your audience, and maximize your ROI.",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design.mp4",
    },
    {
      id: 2,
      title: "Improve Your Online Visibility",
      para: "With WebAdxx, your business will be seen by the right people. Through targeted SEO, social media marketing, and content strategies, we ensure your brand stands out in a crowded digital space, reaching the audience that matters most.",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/build-on-brand-sites.mp4",
    },
    {
      id: 3,
      title: "Data-Driven Results",
      para: "WebAdxx focuses on delivering measurable results. Using analytics, we optimize your campaigns to drive quality leads, increase conversions, and boost sales, ensuring that every marketing dollar spent counts toward your business’s success.",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/complex-rich-animations.mp4",
    },
    {
      id: 4,
      title: "Full-Spectrum Services",
      para: "From SEO and PPC to social media and email marketing, WebAdxx offers a wide range of services to cover all your digital marketing needs. Our integrated strategies ensure your business benefits from every channel, accelerating growth and success.",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/webflow-ai-assistant.mp4",
    },
  ];

  return (
    <div>
      <div className={style.HomeSecondSection_heading}>
        <h1 className={style.heading_h1} ref={textRef}>
          Build Bold. Market Smart. Grow Limitless.
        </h1>
      </div>

      <div className={style.HomeSecondSection_video_para}>
        <div className={style.left_HomeSecondSection}>
          <div className={style.two_para}>
            <div className={style.left_HomeSecondSection_First_para}>
              <p className={style.left_HomeSecondSection_First_para_p}>
                Unlock the power of digital marketing with WebAdxx! Our expert
                strategies drive targeted traffic, boost engagement, and
                increase conversions. From SEO to social media campaigns, we
                help grow your business, enhance your online presence, and
                maximize ROI.
              </p>
            </div>
            <div className={style.left_HomeSecondSection_second_para}>
              <span
                className={`changing-text ${fade ? "fade-in" : "fade-out"}`}
              >
                <h2 className={style.changing_text_h2}>
                  {message[currentIndex].title}
                </h2>
                <p className={style.changing_text_p}>{message[currentIndex].para}</p>
              </span>
            </div>
          </div>
        </div>
        <div className={style.right_HomeSecondSection}>
          <div className={style.right_HomeSecondSection_video}>
             <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className={`${style.rightvideo} ${fade ? "fade-in" : "fade-out"}`}
              style={{
                width: "100%",
                transition: "opacity 0.5s ease-in-out",
              }}
            ></video>
          </div>
        </div>
      </div>

<HomeThirdSection/>
    </div>
  );
}

export default HomeSecondSection;
