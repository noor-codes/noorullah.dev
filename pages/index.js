import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noorullah Ahmadzai</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Noorullah Ahmadzai</h1>

        <p className={styles.description}>Website is currently under construction.</p>
      </main>
    </div>
  )
}
