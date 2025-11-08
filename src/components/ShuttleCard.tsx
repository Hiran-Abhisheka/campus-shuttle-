import React from 'react'

type Props = {
  route: string
  time: string
  status: string
}

export default function ShuttleCard({ route, time, status }: Props) {
  const statusClass = status.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="shuttle-card">
      <div className="shuttle-top">
        <strong className="route">{route}</strong>
        <span className="time">{time}</span>
      </div>
      <div className="shuttle-bottom">
        <span className={`status ${statusClass}`}>{status}</span>
        <button className="book">Book</button>
      </div>
    </div>
  )
}
