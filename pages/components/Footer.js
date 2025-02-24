import { useState, useEffect } from "react";
import styles from "@/styles/Footer.module.css"; // Importing CSS
import { FaCar } from "react-icons/fa"; // Importing an icon

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
      <FaCar className={styles.icon} /> 
      <span>Made By Abdul Muid !)</span>
    </footer>
  );
};

export default Footer;
