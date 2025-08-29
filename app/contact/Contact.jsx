"use client"
import React, { useState } from "react";
import style from "../style/contact.module.css";
import Image from "next/image";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interestWebsite: "Performance Marketing",
    // interestAds: "Performance Marketing",
  });

  const interestWebSite = [
    "Performance Marketing",
     "Social Media Marketing",
    "Google Ads / PPC",
    "Web development",
    "UI UX design",
    "Website Maintenance",
    "Other",
  ];

  // const interestADS = [
  //   "Social Media Marketing",
  //   "Google Ads / PPC",
  //   "Performance Marketing",
  //   "Other",
  // ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className={style.contact}>
        <div className={style.contact_flex_width}>
          <div className={style.contact_flex_width_Details}>
          <Image src="/contact.png" alt="" width={300} height={200} className={style.contact_flex_width_Details_img}/>
          </div>
          <div className={style.contact_flex_form}>
            <form className={style.contact_form}>
              <div className={style.contact_form_heading}>
                Let’s discuss on something cool together
              </div>

              <div className={style.input_label}>
                <label htmlFor="name">name *</label>
                <input type="text" name="name" className={style.Contact_input} onChange={handleChange}/>
              </div>

              <div className={style.input_label}>
                <label htmlFor="email">email *</label>
                <input type="text" name="email" className={style.Contact_input} onChange={handleChange}/>
              </div>

              <div className={style.input_label}>
                <label htmlFor="phone">phone *</label>
                <input type="text" name="phone" className={style.Contact_input} onChange={handleChange}/>
              </div>

        <div className={style.wrap_interested}>
              {/* Website Interest */}
              <p className={style.wrap_interested_heading}>I'm interested in...</p>
              <div className={style.interest_options}>
                {interestWebSite.map((option) => (
                  <label
                    key={option}
                    className={`${style.interest_label} ${
                      formData.interestWebsite === option ? style.active : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="interestWebsite"
                      value={option}
                      checked={formData.interestWebsite === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>

              {/* ADS Interest */}
              {/* <p className={style.wrap_interested_heading}>I'm interested in...</p>
              <div className={style.interest_options}>
                {interestADS.map((option) => (
                  <label
                    key={option}
                    className={`${style.interest_label} ${
                      formData.interestAds === option ? style.active : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="interestAds"
                      value={option}
                      checked={formData.interestAds === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div> */}
</div>
              <div className={style.input_label}>
                <label htmlFor="message">message *</label>
                <textarea name="message" rows={5} className={style.Contact_message} onChange={handleChange}></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
