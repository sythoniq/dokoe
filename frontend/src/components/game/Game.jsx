import game from '../../assets/ww-1.jpg'
import './Game.style.css';

export default function Game() {
  return (
    <main className="game-page">
      <div className="full-game-image">
        <img src={game} alt="game image" />
      </div>
    </main>
  )
}
