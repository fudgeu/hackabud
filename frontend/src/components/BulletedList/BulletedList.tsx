import styles from './styles.module.css'
import { ReactNode } from 'react'

interface BulletedListProps {
  icon?: ReactNode,
  label: string,
  points?: string[],
}

export default function BulletedList({ icon, label, points = [] }: BulletedListProps) {
  return (
    <div className={styles.container}>
      {/* Header */}
      <span className={styles.header}>
        {icon && { icon }}
        <p>{label}</p>
      </span>

      {/* Bullet points */}
      <ul className={styles.list}>
        {points?.map((point) => (
          <li>{point}</li>
        ))}
      </ul>

    </div>
  )
}
