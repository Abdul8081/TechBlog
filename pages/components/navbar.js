import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"; // Importing Navbar styles

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/"><span className={styles.navItem}>Home</span></Link></li>
          <li><Link href="/about"><span className={styles.navItem}>About</span></Link></li>
          <li><Link href="/blog"><span className={styles.navItem}>Blog</span></Link></li>
          <li><Link href="/contact"><span className={styles.navItem}>Contact</span></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
