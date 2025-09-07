"use client"
import Image from 'next/image';
import React,{useRef,useState} from 'react'

function ThirdSectionCaroucel() {
    const itemMember =[
        {
            id:1,
            img:"/caroucel_img.png",
            
        },
        {
            id:2,
            img:"/caroucel_img2.jpeg",
           
        },
        {
            id:3,
            img:"/caroucel_img.png",
            
        },
        {
            id:4,
            img:"/caroucel_img2.jpeg",
           
        },
        {
            id:5,
            img:"/caroucel_img.png",
            
        },
        {
            id:6,
            img:"/caroucel_img2.jpeg",
           
        },
        
        

    ]
     const carouselRef = useRef(null);
    
      // State to manage button disabled state
      const [canScrollLeft, setCanScrollLeft] = useState(false);
      const [canScrollRight, setCanScrollRight] = useState(true);
    
      // Scroll carousel function
      const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;
        const scrollAmount = 300; 
    
        if (direction === "left") {
          carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        } else {
          carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      };
    
      // Update button states when scrolling
      const handleScroll = () => {
        const carousel = carouselRef.current;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    
        // Disable left button when at the start
        setCanScrollLeft(carousel.scrollLeft > 0);
    
        // Disable right button when at the end
        setCanScrollRight(carousel.scrollLeft < maxScrollLeft);
      };
    
  return (
    <div className='caroucel_home'>
        <h1 className='caroucel_home_h1'>Fusion of Ads &<br /> Innovation</h1>
         <div className="carousel-container-2">
                  <button
                    className="scroll-button-2 left-2"
                    onClick={() => scrollCarousel("left")}
                    disabled={!canScrollLeft}
                  >
                    {/* <img src={leftArrow} alt="" /> */}
                  </button>
                  <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
                    {itemMember.map((item) => (
                      <div key={item.id} className="carousel-item-3">
                        <a href="#">
                          <img
                            src={item.img}
                            alt={`${item.p} item`}
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
  )
}

export default ThirdSectionCaroucel