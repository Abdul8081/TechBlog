import React from 'react';
import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>

      <section>
        <h2 className={styles.heading}>Introduction</h2>
        <p className={styles.text}>
          This is the Hunting Coder blog inspired by the Code with Harry tutorial. There are lots of things needed to improve and add, but overall, this blog will become fabulous in the upcoming days. For now, you can see a glimpse of it.
        </p>
      </section>

      <section>
        <h2 className={styles.heading}>Services Offered</h2>
        <p className={styles.text}>
          Explicitly, I don&apos;t offer any services yet. I am looking for professionals and funders to collaborate with me. I have a project plan that will bring high profits for them and allow me to gain experience.
        </p>
        <p className={styles.text}>However, I can performs services like:</p>
        <ul className={styles.list}>
          <li>Website building</li>
          <li>Website monitoring</li>
          <li>Website testing</li>
          <li>Website security</li>
          <li>Website penetration testing</li>
          <li>Website reviewing</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.text}>
          Email : amuid677@gmail.com || Linkedin : <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B03gBhumvQeivIyFYNFEWsQ%3D%3D">linkedin.com/in/abdul-muid-00973b264</a>
        </p>
      </section>
    </div>
  );
};

export default About;
