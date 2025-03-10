import styles from "@/styles/FlaskContent.module.css";

const FlaskContentComponent = () => {
  return (
    <div className={styles.container}>
      {/* Title Section */}
      <h1 className={styles.title}>🚀 Mastering Flask</h1>
      <p className={styles.subtitle}>
        A beginner-friendly guide to building web applications with Flask.
      </p>

      {/* What is Flask? */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📌 What is Flask?</h2>
        <p className={styles.text}>
          Flask is a **lightweight** and **versatile** Python web framework known for its **simplicity** and **flexibility**. It is widely used for creating small to medium-sized web applications.
        </p>
      </section>

      {/* Why Choose Flask? */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>⚡ Why Choose Flask?</h2>
        <ul className={styles.list}>
          <li>🚀 Easy to learn and get started</li>
          <li>🛠️ Comes with a built-in development server</li>
          <li>🔗 Supports URL routing and request handling</li>
          <li>🎨 Uses Jinja2 templating for dynamic HTML content</li>
          <li>💾 Seamlessly integrates with databases like SQLAlchemy</li>
          <li>🔌 Extendable with third-party Flask extensions</li>
        </ul>
      </section>

      {/* Steps to Learn Flask */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛣️ Steps to Learn Flask</h2>
        <ol className={styles.list}>
          <li><strong>Learn Python Basics:</strong> Understanding variables, functions, and OOP.</li>
          <li><strong>Setup Flask:</strong> Installing Flask and running a simple app.</li>
          <li><strong>Routes & Views:</strong> Handling HTTP requests and responses.</li>
          <li><strong>Jinja2 Templating:</strong> Using templates for dynamic web pages.</li>
          <li><strong>Database Handling:</strong> Using SQLAlchemy and Flask-Migrate.</li>
          <li><strong>REST API Development:</strong> Creating APIs with Flask-RESTful.</li>
          <li><strong>Authentication & Security:</strong> Implementing login, JWT, and OAuth.</li>
          <li><strong>Deployment:</strong> Deploying Flask apps on **Heroku** or **AWS**.</li>
        </ol>
      </section>

      {/* Additional Resources */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📚 Additional Resources</h2>
        <ul className={styles.list}>
          <li>
            📖 Flask Official Documentation - {" "}
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
            🎥 Flask Full Course - {" "}
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
            💡 Flask Hands-on Projects - {" "}
            <a
              href="https://realpython.com/tutorials/flask/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Real Python Guide
            </a>
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className={`${styles.section} ${styles.borderTop}`}>
        <h2 className={styles.sectionTitle}>🎯 Final Thoughts</h2>
        <p className={styles.text}>
          Flask is a great framework to build **scalable and flexible** web applications. By following this roadmap and **practicing regularly**, you can master Flask quickly! 🚀
        </p>
      </section>
    </div>
  );
};

export default FlaskContentComponent;
