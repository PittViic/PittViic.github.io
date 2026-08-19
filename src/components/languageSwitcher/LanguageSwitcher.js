import React, {useState, useEffect} from "react";
import {useTranslation} from "react-i18next";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const {i18n} = useTranslation();
  const [isTopVisible, setIsTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setIsTopVisible(true);
      } else {
        setIsTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <div 
      className={`language-switcher ${isTopVisible ? "shifted" : ""}`} 
      onClick={toggleLanguage} 
      title="Change Language"
    >
      <svg
        className="globe-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <span className="lang-text">{i18n.language.startsWith("pt") ? "PT" : "EN"}</span>
    </div>
  );
}
