export default function Home() {
  return (
    <div style={{ fontFamily: "Cinzel, serif", background: "#fff" }}>

      {/* HEADER */}
      <header style={{
        background: "#444",
        padding: "25px",
        textAlign: "center",
        color: "white",
        fontSize: "32px",
        letterSpacing: "2px"
      }}>
        N17 Wedding Stories
      </header>

      {/* HERO SECTION */}
      <section style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524253482453-3fed8042f12b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "44px",
        textShadow: "0px 3px 10px black",
        textAlign: "center",
        padding: "10px"
      }}>
        Capturing Beautiful Moments Forever
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px" }}>Our Services</h2>
        <p style={{ maxWidth: "700px", margin: "auto", fontSize: "16px" }}>
          Cinematic wedding films, elegant photography & premium storytelling.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>

          {/* CARD 1 */}
          <div style={{
            width: "260px",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
          }}>
            <img src="https://cdn-icons-png.flaticon.com/512/2979/2979348.png"
              style={{ width: "70px", marginBottom: "15px" }} />
            <h3>Wedding Photography</h3>
            <p>Elegant, timeless wedding photos.</p>
          </div>

          {/* CARD 2 */}
          <div style={{
            width: "260px",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
          }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3039/3039385.png"
              style={{ width: "70px", marginBottom: "15px" }} />
            <h3>Cinematic Videography</h3>
            <p>Modern films capturing every moment.</p>
          </div>

          {/* CARD 3 */}
          <div style={{
            width: "260px",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
          }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3063/3063823.png"
              style={{ width: "70px", marginBottom: "15px" }} />
            <h3>Pre-Wedding Shoots</h3>
            <p>Cinematic pre-wedding concepts.</p>
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section style={{ padding: "60px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px" }}>Gallery</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" style={imgStyle} />
          <img src="https://images.unsplash.com/photo-1504208434309-cb69f4e52b0e" style={imgStyle} />
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" style={imgStyle} />
          <img src="https://images.unsplash.com/photo-1521310186183-3e6754065486" style={imgStyle} />
          <img src="https://images.unsplash.com/photo-1521300199245-4de361c5a69b" style={imgStyle} />
          <img src="https://images.unsplash.com/photo-1521300199245-4de361c5a69b" style={imgStyle} />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px" }}>Contact Us</h2>
        <p>Book us for your big day!</p>

        <a href="https://wa.me/918976543210"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "white",
            padding: "15px 25px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            marginTop: "20px"
          }}>
          Chat on WhatsApp
        </a>

        <p style={{ marginTop: "25px" }}>
          Email: <strong>n17weddingstories@gmail.com</strong>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#222",
        color: "white",
        textAlign: "center",
        padding: "25px",
        marginTop: "40px"
      }}>
        © 2025 N17 Wedding Stories — All Rights Reserved.
      </footer>

    </div>
  );
}

const imgStyle = {
  width: "100%",
  borderRadius: "12px"
};
