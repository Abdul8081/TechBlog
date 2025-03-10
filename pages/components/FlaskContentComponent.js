import styles from "./FlaskContent.module.css";

const FlaskContentComponent = () => {
  return (
    <div className={styles.container}>
      {/* Title Section */}
      <h1 className={styles.title}>🚀 How to Learn Flask</h1>
      <p className={styles.subtitle}>
        A lightweight and powerful Python web framework to build scalable applications.
      </p>

      {/* Introduction */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📌 Introduction</h2>
        <p className={styles.text}>
          Flask is a **micro web framework** written in Python. It is **simple, flexible, and scalable**, making it a great choice for beginners and advanced developers alike.
        </p>
      </section>

      {/* Key Features */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>⚡ Key Features</h2>
        <ul className={styles.list}>
          <li>🚀 Minimalistic and lightweight</li>
          <li>🛠️ Built-in development server and debugger</li>
          <li>🔀 Supports routing and request handling</li>
          <li>🎨 Uses Jinja2 templating engine</li>
          <li>💾 Easily integrates with databases like SQLAlchemy</li>
          <li>🔌 Extensible with Flask extensions</li>
        </ul>
      </section>

      {/* Learning Roadmap */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛣️ Learning Roadmap</h2>
        <ol className={styles.list}>
          <li>
            <strong>Basic Python Knowledge:</strong> Learn Python syntax, functions, and OOP concepts.
          </li>
          <li>
            <strong>Flask Basics:</strong> Understand routing, request handling, and creating views.
          </li>
          <li>
            <strong>Templates (Jinja2):</strong> Use dynamic content in web pages with Jinja2.
          </li>
          <li>
            <strong>Database Integration:</strong> Learn **SQLAlchemy** for handling databases.
          </li>
          <li>
            <strong>Authentication & Middleware:</strong> Implement user authentication and middleware.
          </li>
          <li>
            <strong>Deployment:</strong> Deploy Flask apps using **Gunicorn** and **Nginx**.
          </li>
        </ol>
      </section>

      {/* Useful Resources */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📚 Useful Resources</h2>
        <ul className={styles.list}>
          <li>
            📝 Official Flask Documentation -{" "}
            <a
              href="https://flask.palletsprojects.com/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Flask Docs
            </a>
          </li>
          <li>
            🎥 Flask Crash Course -{" "}
            <a
              href="https://www.youtube.com/watch?v=Z1RJmh_OqeA"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Tutorial
            </a>
          </li>
          <li>
            💡 Learn Flask with Real Projects -{" "}
            <a
              href="https://realpython.com/tutorials/flask/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Real Python Flask Guide
            </a>
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className={`${styles.section} ${styles.borderTop}`}>
        <h2 className={styles.sectionTitle}>🎯 Final Thoughts</h2>
        <p className={styles.text}>
          Flask is an **excellent choice** for developers looking to build **simple yet powerful web applications**. By following this guide and continuously **practicing with real-world projects**, you’ll master Flask in no time! 🚀
        </p>
      </section>
    </div>
  );
};

export default FlaskContentComponent;
