import React from 'react'
import { Link } from 'react-router-dom';

const GamesList = (props) => {

    const {allGames} = props;
    
    return (
        <>
        {allGames.map((game,i) => {
            return (
            <div key={i}>
                <h3>{i+1} - <Link to={`/games/view/${game._id}`}>{game.title}</Link></h3>
            </div>
            )
        })}
        </>
    )
}

export default GamesList