import React from "react";
import style from "../style/home.module.css";
import Image from "next/image";

function HomeThirdSecotion() {
  const boxes = [
    {
      id: 1,
      name: "Web development",
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
      name: "Seo",
      img: "/SeoHomeThirdSection.jpg",
      para: "SEO improves website rankings on search engines like Google through keyword optimization, content creation, and link building. It increases organic traffic, enhances brand visibility, and drives long-term business growth.",
    },
    {
      id: 4,
      name: "Web development",
      img: "/thirdSecontionWebDevelopmetn.jpg",
      para: "Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications.",
    },
    {
      id: 5,
      name: "Web development",
      img: "/thirdSecontionWebDevelopmetn.jpg",
      para: "Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications.",
    },
    {
      id: 6,
      name: "Web development",
      img: "/thirdSecontionWebDevelopmetn.jpg",
      para: "Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications.",
    },
  ];
  return (
    <>
      <div className={style.HomeThidSection_boxe_wrap}>
        <h1 className={style.HomeThidSection_boxe_wrap_h1}>
          We’re Offering Creative ,<br></br>
          Web Services
        </h1>
        <div className={style.HomeThidSection_boxes}>
          {boxes.map((item) => {
            return (
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
                    {" "}
                    <p>{item.name}</p>
                  </div>
                  <div className={style.boxes_key_para}>
                    {" "}
                    <p>{item.para}</p>
                  </div>
                  <button className={style.boxes_key_btn}>Read more</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.HomefouthSection}>
        <div className={style.HomefouthSection_flex}>
          <div className={style.HomefouthSection_left}>
            <div className={style.HomefouthSection_left_details}>
              <h1 className={style.HomefouthSection_left_details_h1}>
                Anand Sharma
              </h1>
              <p className={style.HomefouthSection_left_details_para}>
                Performance Marketer | E-commerce Growth & Lead Gen Specialist
                🚀 | ₹40L+ Revenue | 1000+ Good Quality Leads | ROAS 4–13 🌐 |
                Scaling brands with result-driven campaigns. I’m your Business
                Growth Partner.
              </p>
              <p className={style.HomefouthSection_left_details_about}>
                I’m a Performance Marketer & Sales Strategist with 2+ years of
                hands-on experience in scaling businesses using high-converting
                Meta (Facebook & Instagram) and Google Ads campaigns.
              </p>

              <ul className={style.HomefouthSection_left_details_about_ul}>
                <li>✅ Smart targeting to reach the right audience at the right time</li>
                <li>✅ Smart targeting to reach the right audience at the right time</li>
                <li>✅ Smart targeting to reach the right audience at the right time</li>
                <li>✅ Smart targeting to reach the right audience at the right time</li>
              </ul>
            </div>
          </div>
          <div className={style.HomefouthSection_right}>
            <div className={style.HomefouthSection_right_img}>
              <Image
                src="/anandSharma.png"
                alt=""
                width={600}
                height={500}
                className={style.HomefouthSection_img}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.HomefouthSection} ${style.HomefouthSection_am}`}>
        <div className={style.HomefouthSection_flex}>
          <div className={style.HomefouthSection_left}>
            <div className={`{${style.HomefouthSection_left_details} ${style.HomefouthSection_left_details_am}`}>
              <h1 className={style.HomefouthSection_left_details_h1}>
                Amarjeet Sharma
              </h1>
              <p className={style.HomefouthSection_left_details_para}>
                Full-Stack Developer | JavaScript, React, Next.js, Node.js Enthusiast | Crafting Seamless Web Experiences | Open to Work
              </p>
              <p className={style.HomefouthSection_left_details_about} >
               I am a certified full-stack developer with a passion for creating dynamic and efficient web applications that deliver exceptional user experiences. My journey in web development started with a deep curiosity about how the web works, and over time, I’ve mastered a range of technologies to bring ideas to life through code.

              </p>
              <p className={style.HomefouthSection_left_details_about} style={{paddingTop:"2rem"}}>
              With expertise in both frontend and backend technologies, I enjoy working on everything from crafting intuitive user interfaces to developing robust server-side logic. I specialize in the MERN stack (MongoDB, Express, React, Node.js), allowing me to build full-fledged applications from the ground up.
              </p>

             
            </div>
          </div>
          <div className={style.HomefouthSection_right}>
            <div className={style.HomefouthSection_right_img}>
              <Image
                src="/amarjeetSharma.png"
                alt=""
                width={600}
                height={500}
                className={style.HomefouthSection_img}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeThirdSecotion;
