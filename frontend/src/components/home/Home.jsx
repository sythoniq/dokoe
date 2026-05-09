import { Link } from 'react-router'
import game from '../../assets/ww-1.jpg';

export default function Home() {
  return (
    <main className="home-page">
      <div className="game-images">
        <img src={game} alt="Game image for where's waldo thingy" />
      </div>
      <Link to="/game"><button>Start Game</button></Link>
    </main>
  )
}
