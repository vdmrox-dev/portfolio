import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vini Web Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight} href="https://nextjs.org">Vini</span>!<br/>
          I'm a <span className={styles.highlight}>Web Developer</span>.
        </h1>
        <p>And this is staging.</p>
      </main>
    </div>
  );
}
