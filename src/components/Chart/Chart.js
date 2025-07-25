'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import styles from './Chart.module.css'

const lineData = [
  { name: 'ม.ค.', value: 4000 },
  { name: 'ก.พ.', value: 3000 },
  { name: 'มี.ค.', value: 5000 },
  { name: 'เม.ย.', value: 4500 },
  { name: 'พ.ค.', value: 6000 },
  { name: 'มิ.ย.', value: 5500 },
]

const barData = [
  { name: 'Desktop', value: 4000 },
  { name: 'Mobile', value: 3000 },
  { name: 'Tablet', value: 2000 },
  { name: 'Others', value: 1000 },
]

export default function Chart({ type }) {
  if (type === 'line') {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}