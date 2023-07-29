import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getOne, deleteOne } from '../services/games-service'

const GamesOne = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false)
    const [gameData, setGameData] = useState({
        title: '',
        genre: '',
        emote: '',
        description: ''
    });

    const getGameInfo = () => {
        getOne(id)
            .then( res => {
                setGameData(res)
            })
            .catch( err => console.log(err))
    }

    const deleteGame = () => {
        deleteOne(id)
            .then( () => navigate('/games') )
            .catch( err => console.log(err))
    }

    const clearInfo = () => {
        setGameData({
            title: '',
            genre: '',
            emote: '',
            description: ''
        })
    }

    const getGameData = () => {
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then( res => {
                setGameData(res.data)
                setLoaded(true)
            })
            .catch( err => console.log(err))
    }

    useEffect( getGameData, [id] )

    return (
        <div>{loaded?
            <fieldset>
                <h2>Title: {gameData.title}</h2>
                <h4>Genre: {gameData.genre}</h4>
                {gameData.emote !== ''?<p>Emote: {gameData.emote}</p>:<></>}
                <h4>Game Description:</h4>
                <p>{gameData.description}</p>
                <div>
                    <Link to={`/games/edit/${gameData._id}`}><button>Edit Game</button></Link>
                    <button onClick={deleteGame}>Delete Game</button>
                </div>
            </fieldset>
            :<></>}
            <button onClick={getGameInfo}>test modularized services</button>
            <button onClick={clearInfo}>Clear info</button>
        </div>
    )
}

export default GamesOne