import style from "./style/home.module.css";
import Image from "next/image";
import HomeSecondSection from "./home/HomeSecondSection.jsx"
export default function Home() {
  const boxDetails = [ 
    {
      id:1,
      img:"/Webdevelopment.png",
      title:"Web Development",
      para:"Web Development involves creating websites using tools like React and Next.js. It handles frontend logic, server-side rendering, APIs, and dynamic content for fast, scalable web applications."
    },
    {
      id:2,
      img:"/web-design.png",
      title:"Web Design",
      para:"Web Design focuses on how a website looks and feels—layout, colors, and user experience. It ensures responsive, attractive interfaces that work well with React and Next.js frameworks."
    },
    {
       id: 3,
      img: "/Homeseo.png",
      title: "Seo",
      para: "SEO improves website rankings on search engines like Google through keyword optimization, content creation, and link building. It increases organic traffic, enhances brand visibility, and drives long-term business growth.",
    },
    {
     id: 4,
      img: "/Homeperformance.png",
      title: "Social-media",
      para: "Social media marketing leverages platforms like Facebook, Instagram, and Twitter for brand awareness, engagement, and sales. It involves content creation, paid advertising, and community management to build strong customer relationships.",
    },
  ]
  return (
    <>
      <div className={style.home}>
        <div className={style.home_content}>
          <p className={style.home_first_heading}>
            WebAdsFuison 
          </p>
          <p className={style.home_second_heading}>
            We Build. We Scale. We Grow Together.
          </p>
          <p className={style.home_third_heading}>
            At WebAdsFusion, we specialize in helping businesses scale and grow
            through high-performance Web Development, Meta Ads (Facebook &
            Instagram), Google Ads, YouTube Ads, and Shopping Ads. Our goal is
            to deliver measurable results and drive impactful digital growth.
          </p>
        </div>
 
        <div className={style.home_video_bg}>
          <video
          className={style.home_video}
            src="https://res.cloudinary.com/futurecoder/video/upload/v1750313516/w7tkh3dgwinnsz7zrhtv.mp4"
            loop
            muted
            autoPlay
            
          ></video>
          <div className={style.rgba_bg_color}></div>
        </div>
        <div className={style.homeboxes}>
          <div className={style.fourBox}>
               {
                boxDetails.map((item,index)=>{
                  return(
                    
                      <div key={item.id || index} className={style.box_details}>
                        <div className={style.box_img}>
                          <Image src={item.img} alt={item.title} width={40} height={40} />
                        </div>
                        <div className={style.box_title}>
                          <p>{item.title}</p>
                        </div>
                        <div className={style.box_para}>
                          <p>{item.para}</p>
                        </div>

                      </div>
                    
                  )
                })
               }   
          </div>
        </div>
      </div>
      <HomeSecondSection/>
    </>
  );
}
