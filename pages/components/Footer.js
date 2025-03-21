import { useState, useEffect } from "react";
import styles from "@/styles/Footer.module.css"; 

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Check if user has reached the bottom
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.show : ""}`}>
      <span>© Abdul Muid - All Rights Researved 2025</span>
    </footer>
  );
};

export default Footer;
