import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Games from '../../server/commands/fun/games';
import GamesOne from './views/GamesOne';
import GamesEdit from './views/GamesEdit';

function App() {
  return (
    <>
      <h1>Welcome to the Discord Bot</h1>
      <div>
        <Link to={'/'}>Dashboard</Link>
        |
        <Link to={'/games'}>Games List</Link>
      </div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/games' element={<Games />} />
        <Route path='/games/:id' element={<GamesOne />} />
        <Route path='/games/edit/:id/' element={<GamesEdit />} />
      </Routes>

    </>
  );
}

export default App;
