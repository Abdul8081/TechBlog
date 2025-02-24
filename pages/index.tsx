import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import ReadMore from "./components/ReadMore";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyword" content="NextJs, Coding Hunter, Abdul Muid" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script></Script>

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.heroSection}>
            <img
              className={styles.image}
              src="/images/home.jpg"
              width={237}
              height={158}
              alt="hunting coder"
            />
          </div>

          <h1 className={styles.title}> &lt;Hunting Coder \&gt;</h1>

          <div className={styles.blogContainer}>
            <h2 className={styles.blogHeading}>Latest Blogs</h2>
            <br />

            <div className={styles.blogItem}>
              <h3 className={styles.blogTitle}>How to learn Java-Script </h3>
              <ReadMore
                text="A blog for hunting coders Atul Kumar and gang Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos, sed
                dignissimos facilis consequatur perspiciatis dolorem dolores
                quasi, ea tempore repellat, voluptatibus ipsa consectetur et!"
                maxLength={170}
              />
            </div>

            <div className={styles.blogItem}>
              <h3 className={styles.blogTitle}>How to run React.JS</h3>

              <ReadMore
                text="Abhisek the coder and Programmar Lorem ipsum dolor sit
                consectetur, adipisicing elit. and dolores, distinctio voluptate
                ex non mollitia!Hellp man Magnam dignissimoscanbeinc saepe amet
                quisquam explicabo quam. do this can be increase also"
                maxLength={170}
              />
            </div>

            <div className={styles.blogItem}>
              <h3 className={styles.blogTitle}>How to run Next.JS</h3>
              <ReadMore
                text="Snehil the topper and the conner Lorem ipsum dolor sit,
                consectetur adipisicing elit. Recusandae voluptas iure explicabo
                corporis reiciendis nostrum voluptatem laborum, porro quo eius
                modi ab asperiores cupiditate a?"
                maxLength={170}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
