"use client";
import React, { useState } from "react";
import style from "../../style/service.module.css";
import Image from "next/image";
import ServiceForm from "./ServiceForm.jsx";

// Renders a multi-line heading string ("first line\nsecond line") as <br />-separated lines.
function MultilineHeading({ text, className }) {
  const lines = String(text).split("\n");
  return (
    <h2 className={className}>
      {lines.map((line, index) => (
        <React.Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </h2>
  );
}

function Dynamic({ selectedContent }) {
  const [active, setActive] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleClick = (ques) => {
    setActive(ques === active ? null : ques);
  };

  const goToForm = (planName) => {
    setSelectedPlan(planName);
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ---------- hero ---------- */}
      <div className={style.service_page}>
        <div className={style.service_bg}>
          <div className={style.service_bg_orange}></div>
          <div className={style.service_content}>
            <div className={style.service_content_img}>
              <Image
                src={selectedContent.img}
                alt={selectedContent.name}
                width={400}
                height={500}
                className={style.selectedContent_img}
                priority
              />
            </div>
            <div className={style.service_details}>
              <h1 className={style.selectedContent_name}>
                {selectedContent.name}
              </h1>
              <h2 className={style.selectedContent_heading}>
                {selectedContent.heading}
              </h2>
              <p className={style.selectedContent_para}>
                {selectedContent.para}
              </p>
              <button
                type="button"
                className={style.selectedContent_btn}
                onClick={() => goToForm("")}
              >
                {selectedContent.btn}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.svc}>
        {/* ---------- stats strip ---------- */}
        {selectedContent.stats?.length > 0 && (
          <div className={style.svc_stats}>
            {selectedContent.stats.map((item) => (
              <div key={item.id} className={style.svc_stat}>
                <p className={style.svc_stat_value}>{item.value}</p>
                <p className={style.svc_stat_label}>{item.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* ---------- what's included ---------- */}
        {selectedContent.care?.length > 0 && (
          <section className={style.svc_section}>
            <p className={style.svc_eyebrow}>What&rsquo;s included</p>
            <MultilineHeading
              text={selectedContent.careHeading}
              className={style.svc_heading}
            />
            {selectedContent.careSub && (
              <p className={style.svc_sub}>{selectedContent.careSub}</p>
            )}

            <div className={style.svc_grid}>
              {selectedContent.care.map((item) => (
                <div key={item.id} className={style.svc_card}>
                  <div className={style.svc_card_media}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={120}
                      height={120}
                      className={style.svc_card_img}
                    />
                    <span className={style.svc_card_icon}>
                      <i className={item.icon}></i>
                    </span>
                  </div>
                  <div className={style.svc_card_body}>
                    <h3 className={style.svc_card_title}>{item.title}</h3>
                    <p className={style.svc_card_desc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- process ---------- */}
        {selectedContent.steps?.length > 0 && (
          <section className={style.svc_section}>
            <p className={style.svc_eyebrow}>How it works</p>
            <MultilineHeading
              text={selectedContent.stepsHeading}
              className={style.svc_heading}
            />

            <ol className={style.svc_steps}>
              {selectedContent.steps.map((item, index) => (
                <li key={item.id} className={style.svc_step}>
                  <span className={style.svc_step_marker}>
                    <span className={style.svc_step_dot}></span>
                  </span>
                  <span className={style.svc_step_num}>
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={style.svc_step_title}>{item.title}</h3>
                  <p className={style.svc_step_desc}>{item.desc}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* ---------- industries ---------- */}
        {selectedContent.industries?.length > 0 && (
          <section className={style.svc_section}>
            <p className={style.svc_eyebrow}>Who it&rsquo;s for</p>
            <MultilineHeading
              text={selectedContent.industriesHeading}
              className={style.svc_heading}
            />

            <div className={style.svc_industries}>
              {selectedContent.industries.map((item) => (
                <div key={item.id} className={style.svc_industry}>
                  <Image
                    src={item.img}
                    alt={item.heading}
                    width={64}
                    height={64}
                    className={style.svc_industry_img}
                  />
                  <p className={style.svc_industry_label}>{item.heading}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- plans ---------- */}
        {selectedContent.plans?.length > 0 && (
          <section className={style.svc_section}>
            <p className={style.svc_eyebrow}>Care plans</p>
            <MultilineHeading
              text={selectedContent.plansHeading}
              className={style.svc_heading}
            />
            {selectedContent.plansSub && (
              <p className={style.svc_sub}>{selectedContent.plansSub}</p>
            )}

            <div className={style.svc_plans}>
              {selectedContent.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`${style.svc_plan} ${
                    plan.best ? style.svc_plan_best : ""
                  }`}
                >
                  {plan.best && (
                    <span className={style.svc_plan_badge}>Most chosen</span>
                  )}
                  <h3 className={style.svc_plan_name}>{plan.name}</h3>
                  <p className={style.svc_plan_tagline}>{plan.tagline}</p>
                  <ul className={style.svc_plan_list}>
                    {plan.features.map((feature) => (
                      <li key={feature} className={style.svc_plan_item}>
                        <i className="fa-solid fa-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={style.svc_plan_btn}
                    onClick={() => goToForm(plan.name)}
                  >
                    Get a quote
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- FAQ ---------- */}
        {selectedContent.qeustion?.length > 0 && (
          <section className={style.svc_section}>
            <p className={style.svc_eyebrow}>Questions</p>
            <MultilineHeading
              text={"Things clients ask\nbefore starting"}
              className={style.svc_heading}
            />

            <div className={style.svc_faq}>
              {selectedContent.qeustion.map((item) => (
                <div key={item.id} className={style.svc_faq_key}>
                  <div
                    className={style.svc_faq_flex}
                    onClick={() => handleClick(item.ques)}
                  >
                    <p className={style.svc_faq_title}>{item.ques}</p>
                    <span className={style.svc_faq_icon}>
                      {active === item.ques ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </span>
                  </div>
                  <p
                    className={`${style.svc_faq_ans} ${
                      active === item.ques ? style.active : ""
                    }`}
                  >
                    {item.ans}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- enquiry form ---------- */}
        <ServiceForm
          service={selectedContent.name}
          heading={selectedContent.ctaHeading}
          sub={selectedContent.ctaSub}
          submitLabel={selectedContent.ctaBtn}
          plan={selectedPlan}
          onClearPlan={() => setSelectedPlan('')}
        />
      </div>
    </>
  );
}

export default Dynamic;
