"use client";
import React, { useEffect, useState } from "react";
import style from "../style/about.module.css";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from 'react-hot-toast';


function AboutDetails() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    name: "",
    aboutName: "",
    email: "",
    phone: "",
    message: "",
  });

  const logo = [
    {
      id: 1,
      img: "/HTML.svg",
      name: "Html",
    },
    {
      id: 2,
      img: "/CSS3.svg",
      name: "CSS",
    },
    {
      id: 14,
      img: "/Nextjs.png",
      name: "Next js",
    },
    {
      id: 3,
      img: "/bootstrap.svg",
      name: "Html",
    },
    {
      id: 4,
      img: "/HTML.svg",
      name: "Html",
    },
    {
      id: 5,
      img: "/javascript.svg",
      name: "Javascript",
    },
    {
      id: 6,
      img: "/React.svg",
      name: "React js",
    },
    {
      id: 7,
      img: "/typescript.svg",
      name: "TypeScript",
    },
    {
      id: 8,
      img: "/nodejs.png",
      name: "Node js",
    },
    {
      id: 9,
      img: "/express.svg",
      name: "Express js",
    },
    {
      id: 10,
      img: "/mongodb.svg",
      name: "MongoDB",
    },
    {
      id: 11,
      img: "/postman.png",
      name: "Postman",
    },
    {
      id: 12,
      img: "/git.svg",
      name: "Git",
    },
    {
      id: 13,
      img: "/mongoose.png",
      name: "Mongoose",
    },

    {
      id: 15,
      img: "/gsap.png",
      name: "Gsap",
    },
  ];

  const marketingLogo = [
    {
      id: 1,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
    {
      id: 2,
      img: "/googleAdsLogo .png",
      name: "Goolge Ads ",
    },
    {
      id: 3,
      img: "/GoogleAnalytics.jpg",
      name: "Googel Ananlytics",
    },
    {
      id: 4,
      img: "/metapixel.png",
      name: "Meta Pixel ",
    },
    {
      id: 5,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
    {
      id: 6,
      img: "/googleAdsLogo .png",
      name: "Goolge Ads ",
    },
    {
      id: 7,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
    {
      id: 8,
      img: "/GoogleAnalytics.jpg",
      name: "Googel Ananlytics",
    },
    {
      id: 9,
      img: "/metapixel.png",
      name: "Meta Pixel ",
    },
    {
      id: 10,
      img: "/metaTags.webp",
      name: "Meta Ads ",
    },
  ];

  const handleForm = (Form) => {
    setSelected(Form);
  };

  const handleAboutForm = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/aboutForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        aboutName: selected,
      }),
    });

    const data = await res.json();

    if (res.status === 201) {
      toast.success("Form submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        aboutName: "",
      });

      setSelected(null);
    } else {
       toast.error(res.data.message || "Failed to submit query"); 
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className={style.aboutMe_heading}>
        Meet the <span className={style.aboutMe_heading_span}> Mind </span>{" "}
        Behind <br />
        WebAdsFusion
      </h1>
      <div className={style.webads_fusion}>
        <div className={style.webads_fusionDetails}>
          <div className={style.image_name}>
            <img
              src="https://media.licdn.com/dms/image/v2/D5616AQGDQpIPsmMiqg/profile-displaybackgroundimage-shrink_350_1400/B56ZhUuPlgHkAo-/0/1753768066103?e=1759363200&v=beta&t=f5ptDLVWkxBPfcBdjVJeeJcVzV2kf1Lk4e7XH67c5hk"
              alt=""
              className={style.image_name_img}
            />
          </div>
          <div className={style.flex_name_img}>
            <Image
              src="/anandSharma.jpg"
              alt=""
              width={130}
              height={130}
              className={style.anand_img}
            />
            <div className={style.name}>
              <p className={style.name_name}>Anand Sharma</p>
              <p className={style.name_Profomance}>Profomance Marketer</p>
            </div>
          </div>
          <div className={style.owner_deatils}>
            <h4>Professional Summary :- </h4>
            <p className={style.owner_deatils_pOne}>
              Performance Marketer & Sales Strategist with 2+ years of
              experience scaling businesses through high-converting Meta
              (Facebook & Instagram) and Google Ads campaigns.
            </p>
            <p className={style.owner_deatils_pTwo}>
              I build predictable ad systems that turn cold traffic into loyal
              customers — using smart targeting, engaging creatives, optimized
              funnels, and continuous performance tracking.
            </p>
            <h4>My Focus :- </h4>
            <p className={style.owner_deatils_pThree}>
              My focus: Clarity, Results & Sustainable Growth for every brand I
              work with.
            </p>
          </div>
          <div className={style.social_media}>
            <h4>Connect with me :- </h4>
            <div className={style.All_fonts}>
              <div className="">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </div>
          </div>

          <button className={style.cta_btn} onClick={() => handleForm("anand")}>
            Let’s Talk with Anand
          </button>

          <div className={style.scrollerSection}>
            <div className={style.scrollerWrapper}>
              <div className={style.scoller_marketing}>
                {[...marketingLogo, ...marketingLogo].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className={style.scroller_container}
                  >
                    <div className={style.scroller_container_Details}>
                      <Image
                        src={item.img}
                        alt="Logo"
                        width={40}
                        height={40}
                        className={style.scoller_logo_img}
                      />
                      <p>{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={style.webads_fusionDetails_right}>
          <div className={style.image_name_fullstack}>
            <Image
              src="/about_skill.png"
              alt=""
              width={350}
              height={200}
              className={style.image_name_img}
            />
          </div>
          <div className={style.flex_name_img}>
            <Image
              src="/Amarjeet_Sharma.png"
              alt=""
              width={130}
              height={130}
              className={style.anand_img}
            />
            <div className={style.name}>
              <p className={style.name_name}>Amarjeet Sharma</p>
              <p className={style.name_Profomance}>
                Full stack developer /MERN stack developer
              </p>
            </div>
          </div>
          <div className={style.owner_deatils}>
            <h4>Professional Summary :- </h4>
            <p className={style.owner_deatils_pOne}>
              I’m a certified Full-Stack Developer passionate about crafting
              modern, scalable, and SEO-friendly web applications using the MERN
              stack and Next.js framework.
            </p>
            <p className={style.owner_deatils_pTwo}>
              From intuitive frontends to robust backends, I deliver
              performance-driven digital solutions that enhance user experiences
              and help brands grow with confidence.
            </p>
            <h4>My Focus :- </h4>
            <p className={style.owner_deatils_pThree}>
              Building high-performance, SEO-friendly applications with MERN
              stack and Next.js, delivering seamless user experiences globally.
            </p>
          </div>
          <div className={style.social_media}>
            <h4>Connect with me :- </h4>
            <div className={style.All_fonts}>
              <div className="">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </div>
          </div>

          <button
            className={style.cta_btn}
            onClick={() => handleForm("amarjeet")}
          >
            Let’s Talk with Amarjeet
          </button>

          <div className={style.scrollerSection}>
            <div className={style.scrollerWrapper}>
              <div className={style.scoller}>
                {[...logo, ...logo].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className={style.scroller_container}
                  >
                    <div className={style.scroller_container_Details}>
                      <Image
                        src={item.img}
                        alt="Logo"
                        width={40}
                        height={40}
                        className={style.scoller_logo_img}
                      />
                      <p>{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <div className={style.overlay_form}>
          <div className={style.overlay_form_flex}>
            <div className={style.overlay_form_flex_img}>
              {selected === "anand" ? (
                <Image
                  src="https://cdn.prod.website-files.com/645258dee17c72222bca47d8/65d346622c0a46badbce6422_ac9eb786-6d47-497c-b6e0-a3d8cd47410b.png"
                  alt=""
                  width={300}
                  height={200}
                  className={style.overlay_form_Image}
                />
              ) : (
                <Image
                  src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg"
                  alt=""
                  width={300}
                  height={200}
                  className={style.overlay_form_Image}
                />
              )}
            </div>
            <div className={style.formWrapper}>
              <h2 className={style.formWrapper_h2} >
                Talk with{" "}
                {selected === "anand" ? "Anand Sharma" : "Amarjeet Sharma"}
              </h2>

              <form className={style.form} onSubmit={handleAboutForm}>
                <div className={style.label_input}>
                  <label htmlFor="" className={style.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={style.forminput}
                  />
                </div>
                <div className={style.label_input}>
                  <label htmlFor="" className={style.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={style.forminput}
                  />
                </div>
                <div className={style.label_input}>
                  <label htmlFor="" className={style.label}>
                    Phone *
                  </label>
                  <PhoneInput
                    country={"in"}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      // padding: "8px",
                      // marginLeft: "2rem",
                    }}
                    containerStyle={{ width: "100%" }}
                    type="Number"
                    name="phone"
                    placeholder="Your Email"
                    value={form.phone}
                    onChange={
                      (phone, country, e, formattedValue) =>
                        setForm({ ...form, phone: formattedValue }) 
                    }
                    enableSearch={true}
                    countryCodeEditable={false}
                    withCountryCallingCode={true}
                    required
                  />
                </div>
                <div className={style.label_input}>
                  <label htmlFor="" className={style.label}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={style.forminput}
                  ></textarea>
                </div>

                {/* Hidden Field - kis se baat karni hai */}
                <input type="hidden" name="talkWith" value={selected} />

                <div className={style.overlay_form_btn_flex}>
                  <button type="submit" className={style.overlay_form_btn}>
                    Send
                  </button>
                  <button
                    type="button"
                    className={style.overlay_form_btn}
                    onClick={() => setSelected(null)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutDetails;
