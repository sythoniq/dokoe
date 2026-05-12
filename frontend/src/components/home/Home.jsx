import { Link } from 'react-router'
import game from '../../assets/ww-1.jpg';

import "./Home.style.css"

export default function Home() {
  return (
    <main className="home-page">
        <div className="game-images">
          <Link to="/images/1">
            <div className="game-image">
              <img src={game} alt="Game image for where's waldo thingy" />
              <div className="game-details">
                <h3>Image 1</h3>
              </div>
            </div>
          </Link>
        </div>
    </main>
  )
}
