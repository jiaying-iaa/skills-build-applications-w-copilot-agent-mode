import { Link, Route, Routes } from 'react-router-dom'
import logo from './assets/octofitapp-small.png'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="OctoFit Tracker" height="32" />
          OctoFit Tracker
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/activities">Activities</Link>
          <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
          <Link className="nav-link" to="/teams">Teams</Link>
          <Link className="nav-link" to="/users">Users</Link>
          <Link className="nav-link" to="/workouts">Workouts</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  )
}

export default App
