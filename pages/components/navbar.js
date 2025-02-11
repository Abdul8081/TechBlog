import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Home.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
              <Link href='/home'><ul>Home</ul></Link>
              <Link href='/about'><ul>About</ul></Link>
              <Link href='/blog'><ul>Blog</ul></Link>
              <Link href='/contact'><ul>Contact</ul></Link>
            </nav>
    </div>
  )
}

export default Navbar
