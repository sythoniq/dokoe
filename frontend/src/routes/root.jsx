import App from '../App.jsx';
import Home from '../components/home/Home.jsx'
import Game from '../components/game/Game.jsx'

const routes = [
{
  path: "/",
  element: <App />,
  children: [
    { index: true, element: <Home />},
    { path: "/game", element: <Game /> }
  ]
}
]

export default routes;
