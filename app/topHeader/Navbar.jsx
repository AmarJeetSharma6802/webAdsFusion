"use client";
import React, { useState } from "react";
import style from "../style/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router  = useRouter()
  const [serv, setServ] = useState(false);
  const [nav,setNav] = useState(false)

  const handleServ = () => {
    setServ(!serv);
  };
  const handleNav = () => {
    setNav(!nav);
    // console.log("click")
  };
  const handleDynamic =(name)=>{
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/service/${slug}`)
    setNav(false);

  }
  const handleNavClose =()=>{
    setNav(false);

  }
  const handleHome =()=>{
    router.push("/")

  }
  return (
    <div>
      <header className={style.header}>
        <label htmlFor="" onClick={handleHome}>
          <img src="/newLogo.png" alt="" className={style.Logo_img} />
        </label>
        <nav className={style.nav}>
          <ul className={`${style.nav_ul} ${nav ? style.active:""}`}>
            <li className={style.nav_li}onClick={handleNavClose} >Home</li>
            <li className={style.nav_li}><Link href="/about" onClick={handleNavClose}>About</Link></li>
            <li className={style.nav_li}>Blogs</li>
            <li className={style.nav_li} onClick={handleServ}>
              <div className={style.service_flex_arrow}>
                Service
                <span>
                  {serv ? (
                    <i className="fa-solid fa-angle-up"></i>
                  ) : (
                    <i className="fa-solid fa-angle-down"></i>
                  )}
                </span>
              </div>
              
                <div
                  className={`${style.inner_service_content}  ${
                    serv ? style.active : ""
                  }`}
                >
                  <div className={style.inner_service_content_child}>
                    <p className={style.inner_service_content_child_heading}>
                      Web Development Services
                    </p>
                    <ul className={style.inner_service_content_child_ul}>
                      <li className={style.inner_service_content_child_li} onClick={()=>handleDynamic("Website Design")}>
                        <Image
                          src="/webdesignService.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>Website Design</span>
                      </li>
                      <li className={style.inner_service_content_child_li} onClick={()=>handleDynamic("E-commerce")}>
                        <Image
                          src="/online-shop.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>E - commerce</span>
                      </li>
                      <li className={style.inner_service_content_child_li} onClick={()=>handleDynamic("Web Developement")}>
                        <Image
                          src="/development.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>Web Developement</span>
                      </li>
                      <li className={style.inner_service_content_child_li} onClick={()=> handleDynamic("Website Maintenance")}>
                        <Image
                          src="/Websitemaintance.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>Website Maintenance</span>
                      </li>
                    </ul>
                  </div>

                  <div className={style.inner_service_content_child}>
                    <p className={style.inner_service_content_child_heading}>
                      Digital Marketing Services
                    </p>
                    <ul className={style.inner_service_content_child_ul}>
                      <li className={style.inner_service_content_child_li} onClick={()=> handleDynamic("SearchBoost SEO")}>
                        <Image
                          src="/seo.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>SEO (Search Engine Optimization)</span>
                      </li>
                      <li className={style.inner_service_content_child_li} onClick={()=> handleDynamic("Social Media Marketing")}>
                        <Image
                          src="/social-media.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>Social Media Marketing</span>
                      </li>
                      <li className={style.inner_service_content_child_li} onClick={()=> handleDynamic("Google Ads and PPC")}>
                        <Image
                          src="/GoogleAds.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>Google Ads / PPC</span>
                      </li>
                      <li className={style.inner_service_content_child_li} onClick={()=> handleDynamic("Performance Marketing")}>
                        <Image
                          src="/performance.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span>Performance Marketing</span>
                      </li>
                    </ul>
                  </div>

                </div>
            </li>
            <li className={style.nav_li} onClick={handleNavClose}>Contact</li>
          </ul>
        </nav>
        <button className={style.bars_btn} onClick={handleNav}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>

      
    </div>
  );
}

export default Navbar;
