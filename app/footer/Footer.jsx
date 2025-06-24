import React from "react";
import style from "../style/footer.module.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_flex}>
        <div className={style.footer_spread_first}>
          <div className={style.logo_para}>
            <Image
              src="/newLogo.png"
              alt=""
              height={100}
              width={100}
              className={style.footer_img}
            />
            <div className={style.footer_para}>
              WebAdsFusion is your trusted partner in digital growth, blending
              high-converting web development with data-driven marketing to help
              brands scale faster and smarter.{" "}
            </div>
          </div>
        </div>
        <div className={style.footer_spread_links}>
          <div className={style.footer_likns_div}>
            <p className={style.footer_links_heading}>Other Links</p>
            <ul className={style.footer_link_ul}>
              <li className={style.footer_link_ul_li}>
                <Link href="/" className={style.footerLinks}>
                  <span>
                    <i className="fa-solid fa-house"></i>
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li className={style.footer_link_ul_li}>
                <Link href="/about" className={style.footerLinks}>
                  <span>
                    <i className="fa-solid fa-address-card"></i>
                  </span>
                  <span> About Us</span>
                </Link>
              </li>
              <li className={style.footer_link_ul_li}>
                <Link href="" className={style.footerLinks}>
                  <span>
                    <i className="fa-solid fa-blog"></i>
                  </span>
                  <span>Blogs</span>
                </Link>
              </li>
              <li className={style.footer_link_ul_li}>
                <Link href="" className={style.footerLinks}>
                  <span>
                    <i className="fa-solid fa-address-book"></i>
                  </span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer_spread_dev}>
          <div className={style.footer_likns_div}>
            <p className={style.footer_links_heading}>Developments service</p>
            <ul className={style.footer_link_ul}>
              <li className={style.footer_link_ul_li}>
                <Link href="/" className={style.footerLinks}>
                  <Image
                    src="webdesignService.svg"
                    alt=""
                    width={20}
                    height={20}
                    className={style.footer_links_img}
                  />
                  <span>Website Design</span>
                </Link>
              </li>
              <li className={style.footer_link_ul_li}>
                <Link href="/about" className={style.footerLinks}>
                  <Image src="/online-shop.png" alt="" width={20} height={20}   className={style.footer_links_img}/>
                  <span>E - commerce</span>
                </Link>
              </li>
              <li className={style.footer_link_ul_li}>
                <Link href="" className={style.footerLinks}>
                  <Image src="development.svg" alt="" width={20} height={20}  className={style.footer_links_img} />
                  <span>Web Developement</span>
                </Link>
              </li>

              <li className={style.footer_link_ul_li}>
                <Link href="" className={style.footerLinks}>
                  <Image
                    src="/Websitemaintance.png"
                    alt=""
                    width={20}
                    height={20}
                     className={style.footer_links_img}
                  />
                  <span>Website Maintenance</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer_spread_digital}>
          <div className={style.footer_likns_div}>
            <p className={style.footer_links_heading}>Digital Marketing service</p>
            <ul className={style.footer_link_ul}>
              <li className={style.footer_link_ul_li}>
                <Link href="/" className={style.footerLinks}>
                  <Image src="/seo.png" alt="" width={20} height={20}   className={style.footer_links_img}/>
                  <span>Search Engine Optimization</span>
                </Link>
              </li>
              <li className={style.footer_link_ul_li}>
                <Link href="/about" className={style.footerLinks}>
                  <Image
                    src="/social-media.png"
                    alt=""
                    width={20}
                    height={20}
                     className={style.footer_links_img}
                  />
                  <span>Social Media Marketing</span>
                </Link>
              </li>
              <li className={style.footer_link_ul_li}>
                <Link href="" className={style.footerLinks}>
                  <Image src="/GoogleAds.png" alt="" width={20} height={20}  className={style.footer_links_img} />
                  <span>Google Ads / PPC</span>
                </Link>
              </li>

              <li className={style.footer_link_ul_li}>
                <Link href="" className={style.footerLinks}>
                  <Image src="/performance.png" alt="" width={20} height={20}  className={style.footer_links_img} />
                  <span>Performance Marketing</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer_spread_address}>
            <div className={style.address_details}>
                <p className={style.footer_links_heading_contact}>Contact Us</p>
                <div className={style.address_flex}>
                    <span><i className="fa-solid fa-location-dot"></i></span>
                    <p>Mahipalpur matachock k2 block near by international ariport</p>
                </div>
                <div className={style.address_flex}>
                    <span><i className="fa-solid fa-headset"></i></span>
                    <p>+91 7827233543 </p>
                </div>
                <div className={style.address_flex}>
                    <span><i className="fa-solid fa-share-nodes"></i></span>
                   <div className={style.share_links}>
                    <span><i className="fa-brands fa-square-facebook"></i></span>
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <span><i className="fa-brands fa-whatsapp"></i></span>
                   </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
