// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/globals.module.css";
export default function Home() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Head>
        <title>N17 Wedding Stories — Premium</title>
        <meta name="description" content="Cinematic wedding photography & videography" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>N17 Wedding Stories</div>
          <nav className={styles.topNav}>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <button className={styles.cta} onClick={() => setOpenContact(true)}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Capturing Beautiful Moments — Forever</h1>
            <p className={styles.lead}>
              Cinematic wedding films and elegant photography — timeless storytelling for your special day.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryBtn} href="#gallery">Our Work</a>
              <button className={styles.ghostBtn} onClick={() => setOpenContact(true)}>Get a Quote</button>
            </div>
          </div>
          <div className={styles.heroCameraBubble} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
              <path d="M9 2L7 4H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3l-2-2H9zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
            </svg>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionLead}>Cinematic wedding videography, timeless photography, and creative pre-wedding shoots.</p>

          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.iconBox}>📷</div>
              <h3>Wedding Photography</h3>
              <p>Beautiful and timeless photos with professional editing and color grading.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconBox}>🎬</div>
              <h3>Cinematic Videography</h3>
              <p>Modern cinematic wedding films capturing every emotion and detail.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconBox}>💍</div>
              <h3>Pre-Wedding Shoots</h3>
              <p>Stylish pre-wedding shoots with cinematic concepts and direction.</p>
            </article>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className={styles.sectionLight}>
          <h2 className={styles.sectionTitle}>Wedding Gallery</h2>
          <div className={styles.galleryGrid}>
            {/* Replace the URLs with your images (Unsplash links used as placeholders) */}
            <div className={styles.galleryItem} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80')" }}></div>
            <div className={styles.galleryItem} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')" }}></div>
            <div className={styles.galleryItem} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515991403509-8f14d43f3d3b?auto=format&fit=crop&w=1200&q=80')" }}></div>
            <div className={styles.galleryItem} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1200&q=80')" }}></div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.sectionLead}>
              At <strong>N17 Wedding Stories</strong> we treat every moment as a masterpiece. We specialise in cinematic films and timeless
              photography to tell your love story in the most beautiful way possible.
            </p>

            <div className={styles.aboutFlex}>
              <div className={styles.aboutText}>
                <p>Our team blends creativity, emotion and technical expertise to deliver unforgettable memories.</p>
                <ul>
                  <li>Full day wedding packages</li>
                  <li>Professional editing and color grading</li>
                  <li>Fast delivery & client review system</li>
                </ul>
                <button className={styles.primaryBtn} onClick={() => setOpenContact(true)}>Book a Call</button>
              </div>

              <div className={styles.aboutMedia}>
                <div className={styles.mediaPlaceholder}>
                  <Image
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80"
                    alt="sample"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>© {new Date().getFullYear()} N17 Wedding Stories — All Rights Reserved.</div>
            <div>
              <a href="mailto:n17weddingstories@gmail.com">n17weddingstories@gmail.com</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Chat / AI bubble (user-facing) */}
      <div className={styles.floatingAssist} onClick={() => setOpenContact(true)} role="button" title="Chat or get help">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 3C7.03 3 3 6.58 3 11c0 2.14.87 4.09 2.28 5.58L5 21l4.8-1.58C11.07 19.69 11.52 19.75 12 19.75c4.97 0 9-3.58 9-8.75S16.97 3 12 3z"/></svg>
      </div>

      {/* Contact modal (basic) */}
      {openContact && (
        <div className={styles.modalBackdrop} onClick={() => setOpenContact(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setOpenContact(false)}>✕</button>
            <h3>Contact / Quick Quote</h3>
            <p>Send us a message or book a consultation. We’ll get back in 24 hours.</p>
            <form className={styles.form}>
              <input name="name" placeholder="Your name" />
              <input name="email" placeholder="Email" />
              <textarea name="message" placeholder="Tell us about your event" rows="5" />
              <div className={styles.formActions}>
                <button className={styles.primaryBtn} type="button" onClick={() => alert("Message sent (mock). We'll wire this to a real backend later.")}>Send</button>
                <button className={styles.ghostBtn} type="button" onClick={() => setOpenContact(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
