import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          ยินดีต้อนรับสู่ Dashboard
        </h1>
        <Link href="/dashboard" className={styles.button}>
          เข้าสู่แดชบอร์ด
        </Link>
      </div>
    </main>
  )
}