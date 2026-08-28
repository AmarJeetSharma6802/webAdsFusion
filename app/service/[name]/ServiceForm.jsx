"use client";
import React, { useState, useEffect } from "react";
import style from "../../style/service.module.css";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

function ServiceForm({ service, heading, sub, submitLabel, plan, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/serviceEnquiry", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: service,
        plan: plan,
      });

      toast.success(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.enq_overlay} onClick={onClose}>
      <div className={style.enq} onClick={(e) => e.stopPropagation()}>
        {/* left: image */}
        <div className={style.enq_media}>
          <Image
            src="/service-page-img.png"
            alt=""
            width={700}
            height={560}
            className={style.enq_media_img}
          />
          <div className={style.enq_media_note}>
            <p className={style.enq_media_note_title}>
              One reply, one working day
            </p>
            <p className={style.enq_media_note_text}>
              No call centre and no sales script. The person who reads this is
              the person who will work on it.
            </p>
          </div>
        </div>

        {/* right: form */}
        <div className={style.enq_panel}>
          <button
            type="button"
            className={style.enq_close}
            onClick={onClose}
            aria-label="Close form"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <p className={style.enq_eyebrow}>Enquiry &mdash; {service}</p>
          <h2 className={style.enq_heading}>{heading}</h2>
          <p className={style.enq_sub}>{sub}</p>

          {plan && (
            <div className={style.enq_plan}>
              <span className={style.enq_plan_badge}>{plan} plan</span>
            </div>
          )}

          <form className={style.enq_form} onSubmit={handleSubmit}>
            <div className={style.enq_row}>
              <div className={style.enq_field}>
                <label className={style.enq_label} htmlFor="enquiry-name">
                  Name
                </label>
                <input
                  id="enquiry-name"
                  className={style.enq_input}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className={style.enq_field}>
                <label className={style.enq_label} htmlFor="enquiry-phone">
                  Phone
                </label>
                <input
                  id="enquiry-phone"
                  className={style.enq_input}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10 digit mobile number"
                  required
                />
              </div>
            </div>

            <div className={style.enq_field}>
              <label className={style.enq_label} htmlFor="enquiry-email">
                Email
              </label>
              <input
                id="enquiry-email"
                className={style.enq_input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div className={style.enq_field}>
              <label className={style.enq_label} htmlFor="enquiry-message">
                Message <span className={style.enq_optional}>(optional)</span>
              </label>
              <textarea
                id="enquiry-message"
                className={style.enq_textarea}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us a little about your project"
              />
            </div>

            <button
              type="submit"
              className={style.enq_submit}
              disabled={loading}
            >
              {loading ? "Sending..." : submitLabel}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceForm;
