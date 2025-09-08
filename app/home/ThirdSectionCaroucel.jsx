"use client"
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

function ThirdSectionCaroucel() {
  const itemMember = [
    { id: 1, img: "/caroucel_img.png" },
    { id: 2, img: "/caroucel_img2.jpeg" },
    { id: 3, img: "/thirdCaroucel3.png" },
    { id: 4, img: "/blogForuth_img.avif" },
  ];

  const carouselRef = useRef(null);
  const timerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(carousel.scrollLeft > 0);
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft);

    const index = Math.round(carousel.scrollLeft / 300);
    setActiveIndex(index);
  };

  // 🔹 Auto scroll function with resettable timeout
  const startAutoScroll = () => {
    clearTimeout(timerRef.current); // pehle ka timer clear
    timerRef.current = setTimeout(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
        setActiveIndex(0);
      } else {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
        setActiveIndex((prev) => (prev + 1) % itemMember.length);
      }

      startAutoScroll(); 
    }, 6000); 
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearTimeout(timerRef.current);
  }, []);

  // Jab bhi user manually scroll kare, timer reset ho jaye
  const handleUserScroll = () => {
    handleScroll();
    startAutoScroll();
  };

  return (
    <div className="caroucel_home">
      <h1 className="caroucel_home_h1">
        Fusion of Ads &<br /> Innovation
      </h1>

      <div className="carousel-container-2">
        <button
          className="scroll-button-2 left-2"
          onClick={() => { scrollCarousel("left"); startAutoScroll(); }}
          disabled={!canScrollLeft}
        >
          <Image src="/left-arrow.png" alt="" width={25} height={25} />
        </button>

        <div className="carousel-2" ref={carouselRef} onScroll={handleUserScroll}>
          {itemMember.map((item) => (
            <div key={item.id} className="carousel-item-3">
              <a href="#">
                <Image
                  src={item.img}
                  alt={`carousel-item-${item.id}`}
                  className="carousel-image-2"
                  width={350}
                  height={100}
                />
              </a>
            </div>
          ))}
        </div>

        <button
          className="scroll-button-2 right-2"
          onClick={() => { scrollCarousel("right"); startAutoScroll(); }}
          disabled={!canScrollRight}
        >
          <Image src="/right-arrow.png" alt="" width={25} height={25} />
        </button>
      </div>

      <div className="carousel-dots">
        {itemMember.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              const carousel = carouselRef.current;
              carousel.scrollTo({ left: index * 300, behavior: "smooth" });
              setActiveIndex(index);
              startAutoScroll();
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ThirdSectionCaroucel;
