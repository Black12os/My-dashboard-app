import { Bell, Search, User } from 'lucide-react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="ค้นหา..."
              className={styles.searchInput}
            />
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <button className={styles.notificationButton}>
            <Bell size={20} />
            <span className={styles.notificationDot}></span>
          </button>
          
          <div className={styles.userSection}>
            <div className={styles.avatar}>
              <User size={16} />
            </div>
            <span className={styles.userName}>ผู้ใช้งาน</span>
          </div>
        </div>
      </div>
    </header>
  )
}