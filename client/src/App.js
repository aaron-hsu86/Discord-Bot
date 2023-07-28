import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Games from './views/Games';
import GamesOne from './views/GamesOne';
import GamesEdit from './views/GamesEdit';
import GamesAdd from './views/GamesAdd';

function App() {
  return (
    <>
      <h1>Welcome to the Discord Bot: Toby_Bot</h1>
      <div>
        <Link to={'/'}>Dashboard</Link>
        |
        <Link to={'/games'}>Games List</Link>
        |
        <Link to={'/games/add'}>Add a Game</Link>
      </div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/games' element={<Games />} />
        <Route path='/games/add' element={<GamesAdd />} />
        <Route path='/games/view/:id' element={<GamesOne />} />
        <Route path='/games/edit/:id/' element={<GamesEdit />} />
      </Routes>

    </>
  );
}

export default App;
