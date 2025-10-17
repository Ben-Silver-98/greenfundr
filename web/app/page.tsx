import styles from "./page.module.css";

export default function HomePage(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Welcome to Greenfundr</h1>
        <p>Your starting point for building climate-conscious funding tools.</p>
      </div>
      <section className={styles.section}>
        <h2>Next Steps</h2>
        <ol>
          <li>Update your environment variables for Sentry monitoring.</li>
          <li>Run <code>docker compose up</code> to launch the full stack.</li>
          <li>Start iterating on sustainable experiences.</li>
        </ol>
      </section>
    </main>
  );
}
