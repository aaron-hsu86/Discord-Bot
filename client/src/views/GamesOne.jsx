import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const GamesOne = () => {
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false)
    const [gameData, setGameData] = useState({
        title: '',
        genre: '',
        emote: '',
        description: ''
    });

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
                <p>Game Description:</p>
                <p>{gameData.description}</p>
                <div>
                    <Link to={`/games/edit/${gameData._id}`}><button>Edit Game</button></Link>
                    <button>Delete Game</button>
                </div>
            </fieldset>
            :<></>}
        </div>
    )
}

export default GamesOne