import { Link } from 'react-router'
import './Nav.style.css';

export default function Nav() {
  return (
    <nav className="page-nav">
      <Link to="/">Dokoe</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  )
}
