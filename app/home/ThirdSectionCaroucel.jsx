"use client"
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

function ThirdSectionCaroucel() {
  const itemMember = [
    { id: 1, img: "/caroucel_img.png" },
    { id: 2, img: "/caroucel_img2.jpeg" },
    { id: 3, img: "/thirdCaroucel3.png" },
    { id: 4, img: "/caroucel_img2.jpeg" },
    { id: 5, img: "/caroucel_img.png" },
  ];

  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
  };

  // 🔹 Auto scroll useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
  // last tak pahunch gaya → direct reset
  carousel.scrollTo({ left: 0, behavior: "smooth" });
} else {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
}
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="caroucel_home">
      <h1 className="caroucel_home_h1">
        Fusion of Ads &<br /> Innovation
      </h1>

      <div className="carousel-container-2">
        <button
          className="scroll-button-2 left-2"
          onClick={() => scrollCarousel("left")}
          disabled={!canScrollLeft}
        >
          <Image src="/left-arrow.png" alt="" width={25} height={25} />
        </button>

        <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
          {itemMember.map((item) => (
            <div key={item.id} className="carousel-item-3">
              <a href="#">
                <img
                  src={item.img}
                  alt={`carousel-item-${item.id}`}
                  className="carousel-image-2"
                />
              </a>
            </div>
          ))}
        </div>

        <button
          className="scroll-button-2 right-2"
          onClick={() => scrollCarousel("right")}
          disabled={!canScrollRight}
        >
          <Image src="/right-arrow.png" alt="" width={25} height={25} />
        </button>
      </div>
    </div>
  );
}

export default ThirdSectionCaroucel;
