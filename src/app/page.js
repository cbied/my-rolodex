import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>    
            By Biediger
        </div>
      </div>

      <div className={styles.center}>
        <h2 className={styles.logo}>My Rolodex</h2>
      </div>

      <div className={styles.grid}>
        <Link
          href="/mypeople"
          className={styles.card}
        >
          <h2>
            My People <span>-&gt;</span>
          </h2>
        </Link>
         
        </div>
    </main>
  )
}
