'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, ShoppingCart, BarChart3, Settings, LogOut } from 'lucide-react'
import styles from './Sidebar.module.css'

const menuItems = [
  { name: 'แดชบอร์ด', icon: Home, href: '/dashboard' },
  { name: 'ผู้ใช้', icon: Users, href: '/users' },
  { name: 'คำสั่งซื้อ', icon: ShoppingCart, href: '/orders' },
  { name: 'รายงาน', icon: BarChart3, href: '/reports' },
  { name: 'ตั้งค่า', icon: Settings, href: '/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2 className={styles.logoTitle}>Dashboard</h2>
      </div>
      
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      
      <button className={styles.logoutButton} onClick={() => alert('ออกจากระบบ')}>
        <LogOut size={20} />
        <span>ออกจากระบบ</span>
      </button>
    </div>
  )
}