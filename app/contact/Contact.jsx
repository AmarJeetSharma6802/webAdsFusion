"use client"
import React, { useState } from "react";
import style from "../style/contact.module.css";
import Image from "next/image";
import axios from "axios";

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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/api/contact", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interestWebsite,
      message: formData.message,
    });
    console.log(res)

    if (res.status === 201) {
      alert("Form submitted successfully");
      setFormData({ name: "", email: "", phone: "", interestWebsite: "", message: "" });
    } else {
      alert(res.data.message || "Failed to submit query");
    }
  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  }
};


  return (
    <div>
      <div className={style.contact}>
        <div className={style.contact_flex_width}>
          <div className={style.contact_flex_width_Details}>
          <Image src="/contact.png" alt="" width={250} height={200} className={style.contact_flex_width_Details_img}/>
          </div>
          <div className={style.contact_flex_form}>
            <form className={style.contact_form} onSubmit={handleSubmit}>
              <div className={style.contact_form_heading}>
                Let’s discuss on something cool together
              </div>

              <div className={style.input_label}>
                <label htmlFor="name">name *</label>
                <input type="text" name="name" className={style.Contact_input} value={formData.name} onChange={handleChange}/>
              </div>

              <div className={style.input_label}>
                <label htmlFor="email">email *</label>
                <input type="text" name="email" className={style.Contact_input} value={formData.email} onChange={handleChange}/>
              </div>

              <div className={style.input_label}>
                <label htmlFor="phone">phone *</label>
                <input type="text" name="phone" className={style.Contact_input} value={formData.phone} onChange={handleChange}/>
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
                <textarea name="message" rows={5} className={style.Contact_message} value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className={style.Contact_btn}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Contact;
