"use client";
import React, { useState } from "react";
import style from "../../style/service.module.css";
import axios from "axios";
import toast from "react-hot-toast";

function ServiceForm({ service, plan, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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
    <div className={style.form_overlay} onClick={onClose}>
      <div className={style.form_box} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={style.form_close}
          onClick={onClose}
          aria-label="Close form"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <p className={style.form_eyebrow}>Enquiry</p>
        <h3 className={style.form_heading}>{service}</h3>
        {plan ? (
          <p className={style.form_plan}>{plan} plan</p>
        ) : (
          <p className={style.form_sub}>
            Fill this in and we will get back to you within one working day.
          </p>
        )}

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.form_field}>
            <label className={style.form_label} htmlFor="enquiry-name">
              Name
            </label>
            <input
              id="enquiry-name"
              className={style.form_input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className={style.form_field}>
            <label className={style.form_label} htmlFor="enquiry-email">
              Email
            </label>
            <input
              id="enquiry-email"
              className={style.form_input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className={style.form_field}>
            <label className={style.form_label} htmlFor="enquiry-phone">
              Phone
            </label>
            <input
              id="enquiry-phone"
              className={style.form_input}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10 digit mobile number"
              required
            />
          </div>

          <div className={style.form_field}>
            <label className={style.form_label} htmlFor="enquiry-message">
              Message <span className={style.form_optional}>(optional)</span>
            </label>
            <textarea
              id="enquiry-message"
              className={style.form_textarea}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us a little about your project"
            />
          </div>

          <button type="submit" className={style.form_submit} disabled={loading}>
            {loading ? "Sending..." : "Send enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;
