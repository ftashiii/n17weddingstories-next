import { useLocale, useSetLocale, useTranslations } from "../lib/locale";
import { useState, useEffect, useRef } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const t = useTranslations();
  const [animate, setAnimate] = useState(false);

  // Audio ref
  const clickSound = useRef(null);

  useEffect(() => {
    // Initialize the audio
    clickSound.current = new Audio("/camera-click.mp3");
  }, []);

  const toggleLanguage = () => {
    // Play sound
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }

    // Trigger animation
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);

    // Switch locale
    setLocale(locale === "en" ? "ml" : "en");
  };

  return (
    <div
      onClick={toggleLanguage}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        width: "70px",
        height: "70px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <img
        src="/camera-toggle.jpeg"
        alt="language toggle"
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 0.2s",
          transform: animate ? "scale(0.9) rotate(-8deg)" : "scale(1)",
          filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.4))",
          borderRadius: "6px"
        }}
      />
    </div>
  );
}
