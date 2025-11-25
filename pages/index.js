// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// IMPORT PLAIN GLOBAL CSS (IMPORTANT)
import "../styles/globals.module.css";

export default function Home() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Head>
        <title>N17 Wedding Stories – Premium</title>
        <meta name="description" content="Cinematic wedding photography & videography" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* HEADER */}
      <header className="header">
        <div className="headerInner">
          <div className="brand">N17 Wedding Stories</div>

          <nav className="topNav">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <button className="cta" onClick={() => setOpenContact(true)}>Contact</button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <main>
        <section className="hero">
          <div className="heroOverlay"></div>
          <div className="heroContent">
            <h1>Capturing Beautiful Moments – Forever</h1>
            <p className="lead">
              Cinematic wedding films and elegant photography – timeless storytelling for your big day.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="servicesSection">
          <h2>Our Services</h2>
          <ul className="servicesList">
            <li>Wedding Photography</li>
            <li>Cinematic Videography</li>
            <li>Pre-Wedding Shoots</li>
            <li>Drone Coverage</li>
          </ul>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="gallerySection">
          <h2>Gallery</h2>
          <div className="galleryGrid">
            <Image src="/images/sample1.jpg" alt="Gallery 1" width={400} height={300} />
            <Image src="/images/sample2.jpg" alt="Gallery 2" width={400} height={300} />
            <Image src="/images/sample3.jpg" alt="Gallery 3" width={400} height={300} />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="aboutSection">
          <h2>About Us</h2>
          <p>
            We are a passionate team offering cinematic wedding storytelling with creativity and elegance.
          </p>
        </section>
      </main>

      {/* CHAT BUBBLE */}
      <div className="chatBubble" onClick={() => setOpenContact(true)}>
        💬
      </div>

      {/* CONTACT MODAL */}
      {openContact && (
        <div className="modalBackdrop" onClick={() => setOpenContact(false)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Us</h3>
            <input className="modalInput" placeholder="Your Name" />
            <input className="modalInput" placeholder="Your Email" />
            <textarea className="modalInput" placeholder="Message"></textarea>
            <button className="modalButton">Send</button>
          </div>
        </div>
      )}
    </>
  );
}
