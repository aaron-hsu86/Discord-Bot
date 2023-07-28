import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GamesList from '../components/GamesList'

const Games = () => {
    const [gamesList, setGamesList] = useState([]);

    const getAllGames = () => {
        axios.get(`http://localhost:8000/api/games`)
            .then(res => setGamesList(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getAllGames, [])

    return (
        <div>
            <GamesList allGames={gamesList} />
        </div>
    )
}

export default Games