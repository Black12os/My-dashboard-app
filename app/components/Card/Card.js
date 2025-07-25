import styles from './Card.module.css'

export default function Card({ title, value, change, icon: Icon, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.value}>{value}</p>
          <p className={styles.change}>{change}</p>
        </div>
        <div className={`${styles.iconContainer} ${styles[color]}`}>
          <Icon className={styles.icon} size={24} />
        </div>
      </div>
    </div>
  )
}