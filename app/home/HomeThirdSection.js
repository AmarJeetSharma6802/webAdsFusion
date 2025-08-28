import React from "react";
import style from "../style/home.module.css";
import Image from "next/image";
import HomeFivethSection from "./HomeFivthSection.js"

function HomeThirdSection() {
  const boxes = [
    {
      id: 1,
      name: "Web Development",
      img: "/thirdSecontionWebDevelopmetn.jpg",
      para: "Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications.",
    },
    {
      id: 2,
      name: "Web Design",
      img: "/HomeThirdSectionWebDesign.jpg",
      para: "Web Design focuses on how a website looks and feels—layout, colors, and user experience. It ensures responsive, attractive interfaces that work well with React and Next.js frameworks.",
    },
    {
      id: 3,
      name: "SEO",
      img: "/SeoHomeThirdSection.jpg",
      para: "SEO improves website rankings on search engines like Google through keyword optimization, content creation, and link building. It increases organic traffic, enhances brand visibility, and drives long-term business growth.",
    },
    {
      id: 4,
      name: "Web Development",
      img: "/thirdSecontionWebDevelopmetn.jpg",
      para: "Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications.",
    },
    {
      id: 5,
      name: "Web Development",
      img: "/thirdSecontionWebDevelopmetn.jpg",
      para: "Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications.",
    },
    {
      id: 6,
      name: "Web Development",
      img: "/thirdSecontionWebDevelopmetn.jpg",
      para: "Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications.",
    },
  ];
  return (
    <>
      <div className={style.HomeThidSection_boxe_wrap}>
        <h1 className={style.HomeThidSection_boxe_wrap_h1}>
          We’re Offering Creative,<br></br>
          Web Services
        </h1>
        <div className={style.HomeThidSection_boxes}>
          {boxes.map((item) => (
            <div key={item.id} className={style.boxes_key}>
              <div className={style.boxes_img}>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={180}
                  className={style.inner_boxes_img}
                />
              </div>
              <div className={style.boxes_key_details}>
                <div className={style.boxes_key_name}>
                  <p>{item.name}</p>
                </div>
                <div className={style.boxes_key_para}>
                  <p>{item.para}</p>
                </div>
                <button className={style.boxes_key_btn}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.homeFourthSection_wrap}>
        <div className={style.homeFourthSection}>
          <h1 className={style.homeFourthSection_h1}>Meet the Mind Behind<br />WebAdsFusion</h1>
          <div className={style.homeFourthSection_flex}>
            <div className={style.homeFourthSection_flex_child}>
              <div className={style.homeFourthSection_flex_child_img}>
                <Image
                  src="/anandSharma.jpg"
                  alt="Anand Sharma"
                  width={80}
                  height={80}
                  className={style.fourthSection_img}
                />
              </div>
              <div className={style.homeFourthSection_flex_child_details}>
                <div className={style.homeFourthSection_flex_child_details_wrap}>
                  <p className={style.name}>Anand Sharma</p>
                  <p className={style.role}>
                    Performance Marketer | E-commerce Growth & Lead Gen Specialist 🚀
                  </p>
                  <p className={style.description}>
                    ₹40L+ Revenue | 1000+ Good Quality Leads | ROAS 4–13 🌐 | Scaling brands with result-driven campaigns. I’m your Business Growth Partner.
                  </p>
                  <button className={style.cta}>Connect</button>
                </div>
              </div>
            </div>

            <div className={style.homeFourthSection_flex_child}>
              <div className={style.homeFourthSection_flex_child_img}>
                <Image
                  alt="Amarjeet Sharma"
                  src="/Amarjeet_Sharma.png"
                  width={80}
                  height={80}
                  className={style.fourthSection_img}
                />
              </div>
              <div className={style.homeFourthSection_flex_child_details}>
                <div className={style.homeFourthSection_flex_child_details_wrap}>
                  <p className={style.name}>Amarjeet Sharma</p>
                  <p className={style.role}>Certified Full-Stack Developer</p>
                  <p className={style.description}>
                    Passionate about creating dynamic web apps with exceptional user experiences. Mastered technologies to bring ideas to life through code.
                  </p>
                  <button className={style.cta}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeFivethSection/>
    </>
  );
}

export default HomeThirdSection;