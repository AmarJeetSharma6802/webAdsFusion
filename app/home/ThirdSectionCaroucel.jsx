"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function ThirdSectionCaroucel() {
  const swiperRef = useRef(null);

  const itemMember = [
    {
      id: 1,
      tag: "Google Ads + Meta Ads",
      title: "Scrap Uncle",
      metric: "65,186 conversions",
      para: "City-by-city campaign structure for a scrap pickup and recycling service — ₹1.11Cr managed spend at ₹100.98 cost per conversion.",
      img: "https://anand-sharma.vercel.app/img/google-ads-campaign-dashboard-for-scrap-uncle.webp",
      link: "https://anand-sharma.vercel.app/",
    },
    {
      id: 2,
      tag: "Google Ads + Meta Ads",
      title: "PartsBaba",
      metric: "107x Google ROAS",
      para: "Search, Shopping and Performance Max working together to drive ₹3.66Cr conversion value for an electronic parts supply-chain brand.",
      img: "https://anand-sharma.vercel.app/img/google-ads-overview-for-partsbaba.webp",
      link: "https://anand-sharma.vercel.app/",
    },
    {
      id: 3,
      tag: "Meta Ads",
      title: "TABBSZ",
      metric: "7,863 purchases",
      para: "Full-funnel prospecting, retargeting and conversion campaigns across 48 campaigns at a steady 3.03x average ROAS.",
      img: "https://anand-sharma.vercel.app/img/meta-ads-manager-campaigns-for-tabbsz.webp",
      link: "https://anand-sharma.vercel.app/",
    },
    {
      id: 4,
      tag: "Meta Ads",
      title: "EcoFreaky",
      metric: "3.57x average ROAS",
      para: "Conversion-focused targeting across 21 campaigns — 3,579 purchases and ₹21.7L purchase value at a ₹170 acquisition cost.",
      img: "https://anand-sharma.vercel.app/img/meta-ads-manager-ad-sets-for-ecofreaky.webp",
      link: "https://anand-sharma.vercel.app/",
    },
    {
      id: 5,
      tag: "Google Ads",
      title: "JK Stone",
      metric: "13.06% CTR",
      para: "B2B commercial stone and cladding enquiries across India — 189 lead form submissions at ₹892 cost per lead.",
      img: "https://anand-sharma.vercel.app/img/google-ads-campaigns-for-jk-stone.webp",
      link: "https://anand-sharma.vercel.app/",
    },
    {
      id: 6,
      tag: "Next.js + Node.js",
      title: "Interiomate",
      metric: "Voice AI enquiries",
      para: "Interior design website with a dynamic gallery, technical SEO, Vapi voice AI for enquiries and Sentry, GTM and Clarity monitoring.",
      img: "https://res.cloudinary.com/futurecoder/image/upload/v1786100343/baddmjwuu9mlabk0itzc.png",
      link: "https://www.interiomate.com/",
    },
    {
      id: 7,
      tag: "Next.js + Clerk",
      title: "Pal Engineering",
      metric: "GSAP animations",
      para: "Crane services website built on Next.js with Clerk auth, GSAP motion, backend APIs and per-page dynamic SEO.",
      img: "https://res.cloudinary.com/futurecoder/image/upload/v1758814634/uof85hs7pzp6egzflq00.png",
      link: "https://crane-website-woad.vercel.app/",
    },
    {
      id: 8,
      tag: "Next.js + NextAuth",
      title: "Real Estate Platform",
      metric: "Admin + automation",
      para: "Production-ready platform on the Next.js App Router with NextAuth, an admin panel and Nodemailer-driven lead automation.",
      img: "https://res.cloudinary.com/futurecoder/image/upload/v1767452654/yjslak8rmaw2msyx8csz.png",
      link: "https://real-estate-eta-snowy.vercel.app/",
    },
    {
      id: 9,
      tag: "Next.js + Prisma",
      title: "Rido Booking",
      metric: "Role-based flows",
      para: "Ride booking app with Leaflet maps, Prisma and PostgreSQL, and separate rider, driver and admin journeys.",
      img: "https://res.cloudinary.com/futurecoder/image/upload/v1775979146/mxiyl8k0nckb11dwe6wc.png",
      link: "https://rido-booking.vercel.app/",
    },
  ];

  return (
    <section className="fusion_section">
    <div className="fusion_caroucel">
      <p className="fusion_eyebrow">Selected work</p>
      <h1 className="fusion_caroucel_h1">
        Fusion of Ads &<br /> Innovation
      </h1>
      <p className="fusion_caroucel_sub">
        Real campaigns and real products we have shipped — performance marketing
        that pays for itself, and web builds that carry the traffic.
      </p>

      <div className="fusion_swiper_wrap">
      <Swiper
        className="fusion_swiper"
        modules={[Autoplay, Pagination, Keyboard, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: 20 },
          900: { slidesPerView: 2, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
      >
        {itemMember.map((item) => (
          <SwiperSlide key={item.id} className="fusion_slide">
            <a
              className="fusion_card"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fusion_card_media">
                <Image
                  src={item.img}
                  alt={`${item.title} — ${item.tag}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 30vw"
                  className="fusion_card_img"
                />
                <span className="fusion_card_tag">{item.tag}</span>
              </div>

              <div className="fusion_card_body">
                <div className="fusion_card_top">
                  <h3 className="fusion_card_title">{item.title}</h3>
                  <span className="fusion_card_metric">{item.metric}</span>
                </div>
                <p className="fusion_card_para">{item.para}</p>
                <span className="fusion_card_link">
                  View case study
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </a>
          </SwiperSlide>
        ))}

      </Swiper>

      <button
        className="fusion_nav_btn fusion_nav_prev"
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Image src="/left-arrow.png" alt="" width={20} height={20} />
      </button>
      <button
        className="fusion_nav_btn fusion_nav_next"
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Image src="/right-arrow.png" alt="" width={20} height={20} />
      </button>
      </div>
    </div>
    </section>
  );
}

export default ThirdSectionCaroucel;
