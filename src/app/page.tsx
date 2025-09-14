"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { title } from "process";
import { useEffect, useState } from "react";
import imgPortofolio from "@/Data/collection";

export default function Home() {
  const [section, setSection] = useState<"home" | "about" | "portofolio" | "contact">("home");
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % imgPortofolio.length);
  const prev = () => setIndex((prev) => (prev - 1 + imgPortofolio.length) % imgPortofolio.length);
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [imgPortofolio.length]);
  return (
    <>
      <header id="header" className="header d-flex align-items-center light-background sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link href="#" className="logo d-flex align-items-center me-auto me-xl-0">
            <Image src="/logo.jpg" alt="Logo" width={50} height={200} />
            <span className="sitename">Stevanie Tanzil</span>
          </Link>


          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="#" onClick={() => setSection("home")} className={`${section == "home" ? "active" : ""}`}>Home</Link></li>
              <li><Link href="#" onClick={() => setSection("about")} className={`${section == "about" ? "active" : ""}`}>About</Link></li>
              <li><Link href="#" onClick={() => setSection("portofolio")} className={`${section == "portofolio" ? "active" : ""}`}>Portofolio</Link></li>


            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <Link href="https://www.instagram.com/stevanie_tanzil/" className="instagram"><i className="bi bi-instagram"></i></Link>
            <Link href="https://www.tiktok.com/@vanie.nie?_t=ZS-8zhJmDFPexF&_r=1" className="tiktok"><i className="bi bi-tiktok"></i></Link>
          </div>
        </div>
      </header>
      <main className="main">
        {section === "home" && (
          <section id="hero" className="hero section">
            <Image src="/logo.jpg" alt="Logo" width={500} height={500} data-aos="fade-in" className="opacity-50" />
            {/* <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in"> */}
            <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 style={{ color: "black" }}>Stevanie Tansil</h2>
                  <p style={{ color: "black" }}>Fashion Designer & MUA(Make Up Artist)</p>
                  <a href="#" onClick={() => setSection("about")} className="btn-get-started">About Me</a>
                </div>
              </div>
            </div>
          </section>
        )}
        {section === "about" && (
          <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
              <h2>About</h2>
              <p>My Biography 💕</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

              <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                  <Image src={"/profile.jpg"} width={1000} height={1000} className="img-fluid" alt=""></Image>
                </div>
                <div className="col-lg-8 content">
                  <h2>Fashion Designer &amp; Make Up Artist.</h2>
                  <p className="fst-italic py-3">
                    ( Korean x Douyin Make up Style )#bystevanietanzil
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Place🗺:</strong> <span>Palembang</span></li>

                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Certificate:</strong> <span>NaomiLane</span></li>
                      </ul>
                    </div>
                  </div>
                  <p className="py-3">
                    Contact Information For Booking / Inquiries <br />
                    <Link style={{ display: "flex" }} href="https://wa.me/6281272457443" target="_blank" rel="noopener noreferrer">
                      <Image src={"/wa.gif"} width={50} height={50} alt="" unoptimized></Image>
                      <span style={{ margin: 0, marginTop: 10 }}>Click Here</span>
                    </Link>
                    <Image src={"/ig.gif"} width={50} height={50} alt="" unoptimized></Image>
                    <span style={{ margin: 0, marginTop: 10 }}>Instagram : 
                      <Link href={"https://www.instagram.com/stevanie_tanzil/"}>@stevanie_tanzil</Link> / 
                      <Link href={"https://www.instagram.com/by_stevanietanzil/"}>@by_stevanietanzil</Link></span>

                  </p>
                </div>
              </div>

            </div>
          </section>
        )}
        {section === "portofolio" && (
          <div className="container section-title" data-aos="fade-up">
            <section id="portfolio-details" className="portfolio-details section">

              <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio Details</h2>
                <p>This My Portofolio</p>
              </div>

              <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                  {imgPortofolio.map((img, idx) => (
                    <div key={idx} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                      <Image
                        src={img} width={400} height={200} className="img-fluid" alt="">
                      </Image>

                    </div>
                  ))}



                </div>
              </div>
            </section>
          </div>
        )}
      </main >

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      {/* <div id="preloader"></div> */}
    </>
  );
}
