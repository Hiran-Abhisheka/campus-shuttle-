import React from 'react'
import SearchBar from './SearchBar'
import ShuttleCard from './ShuttleCard'

const mockRides = [
  { route: 'Route A', time: '08:30', status: 'Available' },
  { route: 'Route B', time: '09:00', status: 'Full' },
  { route: 'Route C', time: '09:30', status: '3 seats' },
]

export default function HeroUI() {
  const [rides] = React.useState(mockRides)

  return (
    <div className="hero-ui">
      <div className="hero-left">
        <h2>Campus Shuttle</h2>
        <p className="lead">Quickly find and book shuttles around campus</p>

        <SearchBar onSearch={(q) => console.log('search', q)} />

        <div className="stats">
          <div className="stat">
            <div className="num">12</div>
            <div className="label">Active Routes</div>
          </div>
          <div className="stat">
            <div className="num">230</div>
            <div className="label">Passengers Today</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="ui-preview">
          <h3>Upcoming Rides</h3>
          <div className="rides-list">
            {rides.map((r) => (
              <ShuttleCard key={r.route} route={r.route} time={r.time} status={r.status} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
