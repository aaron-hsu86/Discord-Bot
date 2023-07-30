import React, {useState, useEffect} from 'react'
import GamesList from '../components/GamesList'
import { getAll } from '../services/games-service'

const Games = () => {
    const [gamesList, setGamesList] = useState([]);

    const getAllGames = () => {
        getAll()
            .then(res => setGamesList(res))
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