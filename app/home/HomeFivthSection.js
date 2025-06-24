import React, { useState } from "react";
import style from "../style/home.module.css";

function HomeFivthSection() {
  const [active, setActive] = useState("dev");
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
      id: 3,
      img: "/bootstrap.svg",
      name: "Html",
    },
    {
      id: 4,
      img: "/HTML.svg",
      name: "Html",
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
      name: "Goolge ads ",
    },
  ];
  return (
    <div>
      <div className={style.HomeFivthSection}>
        <h1 className={style.HomeFivthSection_heading}>
          The Tools That Power <br></br> WebAdsFusion
        </h1>

        <div className={style.HomeFivthSection_center}>
        <div className={style.HomeFivthSection_btn}>
          <button onClick={() => setActive("dev")} className={`${style.HomeFivthSection_btns} ${active === "dev" ? style.active :""}`}>Development Tools</button>
          <button onClick={() => setActive("marketing")} className={`${style.HomeFivthSection_btns} ${active === "dev" ? style.active :""}`}>
            Marketing Tools
          </button>
        </div>

<div className={style.digitalLogo}>
        {active === "dev" &&
          logo.map((item) => {
            return (
              <div key={item.id} className={style.HomeFivthSection_key_div}>
                <img src={item.img} alt={item.name} style={{ width: "100%" }} />
                <p>{item.name}</p>
              </div>
            );
          })}
          </div>

<div className={style.digitalLogo}>

        {active === "marketing" &&
          marketingLogo.map((item) => {
            return (
              <div key={item.id}  className={style.HomeFivthSection_key_div}>
                <img src={item.img} alt={item.name} style={{ width: "100%" }} />
                <p>{item.name}</p>
              </div>
            );
          })}
          </div>
      </div>
      </div>
    </div>
  );
}

export default HomeFivthSection;
