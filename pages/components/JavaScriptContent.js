import styles from "@/styles/JavaScriptContent.module.css";

const JavaScriptContent = () => {
  return (
    <div className={styles.container}>
      {/* Title Section */}
      <h1 className={styles.title}>🚀 JavaScript Learning Guide</h1>
      <p className={styles.subtitle}>
        Master JavaScript, the foundation of modern web development.
      </p>

      {/* Introduction */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📌 Introduction</h2>
        <p className={styles.text}>
          JavaScript (JS) is a **powerful scripting language** used to create
          dynamic and interactive web applications. It runs on the browser and,
          with **Node.js**, on the server.
        </p>
      </section>

      {/* Key Topics */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🔥 Key Topics in JavaScript</h2>
        <ul className={styles.list}>
          <li>⚡ Variables (`let`, `const`, `var`)</li>
          <li>🔢 Data Types (String, Number, Boolean, Object, Array, etc.)</li>
          <li>📌 Functions (Arrow functions, Callbacks, Closures)</li>
          <li>🔄 Loops (`for`, `while`, `map`, `filter`, `reduce`)</li>
          <li>🔀 Asynchronous JS (Promises, Async/Await, Event Loop)</li>
          <li>🛠️ DOM Manipulation (`document.querySelector`, `addEventListener`)</li>
          <li>🎭 Object-Oriented JavaScript (Classes, Prototypes, `this` keyword)</li>
          <li>⚙️ ES6+ Features (Destructuring, Spread/Rest Operators, Modules)</li>
        </ul>
      </section>

      {/* Learning Roadmap */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛣️ Learning Roadmap</h2>
        <ol className={styles.list}>
          <li>
            <strong>Step 1:</strong> Learn **basic syntax**, variables, and data types.
          </li>
          <li>
            <strong>Step 2:</strong> Understand **functions**, loops, and conditionals.
          </li>
          <li>
            <strong>Step 3:</strong> Explore **DOM manipulation** for dynamic content.
          </li>
          <li>
            <strong>Step 4:</strong> Master **asynchronous JavaScript** (Promises & Async/Await).
          </li>
          <li>
            <strong>Step 5:</strong> Deep dive into **ES6+ features** and modern JavaScript.
          </li>
          <li>
            <strong>Step 6:</strong> Build **projects** to apply your knowledge.
          </li>
        </ol>
      </section>

      {/* Useful Resources */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📚 Useful Resources</h2>
        <ul className={styles.list}>
          <li>
            📖 JavaScript Guide -{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN Docs
            </a>
          </li>
          <li>
            🎥 JavaScript Full Course -{" "}
            <a
              href="https://www.youtube.com/watch?v=PkZNo7MFNFg"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Tutorial
            </a>
          </li>
          <li>
            🚀 Learn JavaScript Interactive -{" "}
            <a
              href="https://javascript.info/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript.info
            </a>
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className={`${styles.section} ${styles.borderTop}`}>
        <h2 className={styles.sectionTitle}>🎯 Final Thoughts</h2>
        <p className={styles.text}>
          JavaScript is a **must-learn language** for modern web development. By
          mastering its **core concepts**, you can build **interactive websites**
          and move on to frameworks like **React, Next.js, and Node.js**! 🚀
        </p>
      </section>
    </div>
  );
};

export default JavaScriptContent;
