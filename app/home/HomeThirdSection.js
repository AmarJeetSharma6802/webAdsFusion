import React from 'react'
import style from "../style/home.module.css"
import Image from 'next/image'

function HomeThirdSecotion() {
  const boxes = [
    {
      id:1,
      name :"Web development",
      img:"/thirdSecontionWebDevelopmetn.jpg",
      para:"Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications."
    },
    {
      id:2,
      name :"Web development",
      img:"/HomeThirdSectionWebDesign.jpg",
      para:"Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications."
    },
    {
      id:3,
      name :"Web development",
      img:"/thirdSecontionWebDevelopmetn.jpg",
      para:"Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications."
    },
    {
      id:4,
      name :"Web development",
      img:"/thirdSecontionWebDevelopmetn.jpg",
      para:"Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications."
    },
    {
      id:5,
      name :"Web development",
      img:"/thirdSecontionWebDevelopmetn.jpg",
      para:"Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications."
    },
    {
      id:6,
      name :"Web development",
      img:"/thirdSecontionWebDevelopmetn.jpg",
      para:"Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications."
    },
  ]
  return (
    <>
    <div className={style.HomeThidSection_boxe_wrap}>
      <h1 className={style.HomeThidSection_boxe_wrap_h1}>We’re Offering Creative ,<br></br>
Web Services</h1>
    <div className={style.HomeThidSection_boxes}>
        {
          boxes.map((item)=>{
            return(
              <div key={item.id} className={style.boxes_key}>
                <div className={style.boxes_img}>
                  <Image src={item.img} alt={item.name} width={200} height={180}  className={style.inner_boxes_img}/>
                </div>
                <div className={style.boxes_key_details}>
               <div className={style.boxes_key_name}> <p>{item.name}</p></div>
               <div className={style.boxes_key_para}> <p>{item.para}</p></div>
                <button className={style.boxes_key_btn}>Read more</button>
                </div>
              </div>
            )
          })
        }

    </div>
    </div>
    <div style={{minHeight:"100vh", background:"black"}}></div>
    </>
  )
}

export default HomeThirdSecotion