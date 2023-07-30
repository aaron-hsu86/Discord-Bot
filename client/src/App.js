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
      <div className='header'>
      <h1>Welcome to the Discord Bot: Toby_Bot</h1>
        <div className='navigation'>
          <Link className='links' to={'/'}><p>Dashboard</p></Link>
          <p className='barrier'>|</p>
          <Link className='links' to={'/games'}><p>Games List</p></Link>
          <p className='barrier'>|</p>
          <Link className='links' to={'/games/add'}><p>Add a Game</p></Link>
        </div>
      </div> 
      <hr/>
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
