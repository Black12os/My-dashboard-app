import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Chart from './components/Chart/Chart'
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react'
import styles from './page.module.css'

export default function Dashboard() {
  const stats = [
    {
      title: 'ผู้ใช้ทั้งหมด',
      value: '12,345',
      change: '+12%',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'ยอดขาย',
      value: '₿1,234',
      change: '+5%',
      icon: ShoppingCart,
      color: 'green'
    },
    {
      title: 'รายได้',
      value: '฿567,890',
      change: '+8%',
      icon: DollarSign,
      color: 'yellow'
    },
    {
      title: 'การเติบโต',
      value: '23%',
      change: '+3%',
      icon: TrendingUp,
      color: 'purple'
    }
  ]

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <main className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>แดชบอร์ด</h1>
            <p className={styles.subtitle}>ภาพรวมข้อมูลและสถิติ</p>
          </div>
          
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Card key={index} {...stat} />
            ))}
          </div>

          <div className={styles.chartsGrid}>
            <div className={styles.chartContainer}>
              <h3 className={styles.chartTitle}>ยอดขายรายเดือน</h3>
              <Chart type="line" />
            </div>
            <div className={styles.chartContainer}>
              <h3 className={styles.chartTitle}>การกระจายผู้ใช้</h3>
              <Chart type="bar" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}