import styles from "@/styles/NextContent.module.css";

const NextContentComponent = () => {
  return (
    <div className={styles.container}>
      {/* Title Section */}
      <h1 className={styles.title}>🚀 How to Learn Next.js & JavaScript</h1>
      <p className={styles.subtitle}>
        A powerful framework built on React for production-ready applications.
      </p>

      {/* Introduction */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📌 Introduction</h2>
        <p className={styles.text}>
          Next.js is a **React framework** that enables **server-side rendering (SSR), static site generation (SSG), and API routes**, making it an excellent choice for modern web development.
        </p>
        <p className={styles.text}>
          JavaScript is the **core language** for web development, powering both client-side and server-side applications.
        </p>
      </section>

      {/* Key Features */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>⚡ Key Features of Next.js</h2>
        <ul className={styles.list}>
          <li>🚀 Server-side rendering (SSR) for faster page loads</li>
          <li>🛠️ Static site generation (SSG) for performance optimization</li>
          <li>🔀 API routes to build backend functionality</li>
          <li>📦 Automatic code splitting for optimized loading</li>
          <li>⚡ Image optimization with next/image</li>
          <li>🔌 Built-in support for TypeScript and CSS Modules</li>
        </ul>
      </section>

      {/* Learning Roadmap */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛣️ Learning Roadmap</h2>
        <ol className={styles.list}>
          <li>
            <strong>JavaScript Basics:</strong> Learn ES6+, async/await, DOM manipulation, and event handling.
          </li>
          <li>
            <strong>React Fundamentals:</strong> Understand components, state, props, and hooks.
          </li>
          <li>
            <strong>Next.js Basics:</strong> Learn pages, dynamic routing, and API routes.
          </li>
          <li>
            <strong>SSR & SSG:</strong> Understand **getServerSideProps** and **getStaticProps**.
          </li>
          <li>
            <strong>Data Fetching:</strong> Work with **REST APIs** and **GraphQL**.
          </li>
          <li>
            <strong>Deployment:</strong> Deploy Next.js apps using **Vercel**.
          </li>
        </ol>
      </section>

      {/* Useful Resources */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📚 Useful Resources</h2>
        <ul className={styles.list}>
          <li>
            📝 Official Next.js Documentation -{" "}
            <a
              href="https://nextjs.org/docs"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Docs
            </a>
          </li>
          <li>
            🎥 Next.js Full Course -{" "}
            <a
              href="https://www.youtube.com/watch?v=wm5gMKuwSYk"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Tutorial
            </a>
          </li>
          <li>
            💡 JavaScript Learning Guide -{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN JavaScript Docs
            </a>
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className={`${styles.section} ${styles.borderTop}`}>
        <h2 className={styles.sectionTitle}>🎯 Final Thoughts</h2>
        <p className={styles.text}>
          Next.js is an **amazing framework** that simplifies **React development** while adding powerful features like **SSR and SSG**. With **JavaScript mastery**, you can build high-performance, scalable applications! 🚀
        </p>
      </section>
    </div>
  );
};

export default NextContentComponent;
