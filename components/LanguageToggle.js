import { useLocale } from "../lib/LocaleContext";
import { useState } from "react";

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const [animate, setAnimate] = useState(false);

  const toggleLanguage = () => {
    // Trigger shake animation
    setAnimate(true);

    setTimeout(() => setAnimate(false), 500);

    // Switch EN ↔ ML
    const newLocale = locale === "en" ? "ml" : "en";
    setLocale(newLocale);

    // Play click sound
    const audio = new Audio("/click-sound.mp3");
    audio.play();
  };

  return (
    <div
      onClick={toggleLanguage}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "70px",
        height: "70px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <img
        src="/camera-toggle.png"
        alt="language toggle"
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 0.2s",
          transform: animate ? "scale(0.9) rotate(-10deg)" : "scale(1)",
          filter: "drop-shadow(0 0 8px rgba(0,0,0,0.3))",
        }}
      />
    </div>
  );
}
