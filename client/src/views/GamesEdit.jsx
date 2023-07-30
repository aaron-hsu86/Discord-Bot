import React, {useState, useEffect} from 'react'
import GameForm from '../components/GameForm'
import {useNavigate, useParams} from 'react-router-dom'
import { getOne, updateOne, deleteOne } from '../services/games-service'

const GamesEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false)
    const [formError, setFormError] = useState({
        title: '',
        genre: '',
        emote: '',
        description: ''
    })
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        emote: '',
        description: ''
    })

    const getGameData = () => {
        getOne(id)
            .then( res => {
                setFormData(res)
                setLoaded(true)
            })
            .catch( err => console.log(err))
    }

    useEffect(getGameData, [id])

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateOne(formData)
            .then ( () => navigate(`/games/view/${id}`) )
            .catch( err => {
                let errors = err.response.data.errors
                for (let key in errors){
                    if (formError.hasOwnProperty(key)){
                        setFormError(currentData => ({...currentData, [key]:errors[key].message}))
                    }
                }
            })
    }

    const handleDelete = e => {
        deleteOne(id)
            .then( () => navigate('/games') )
            .catch( err => console.log(err))
    }

    return (
        <>
        {loaded?
        <GameForm formData={formData} formError={formError} handleChange={handleChange} handleSubmit={handleSubmit} deleteButton={true} handleDelete={handleDelete}/>
        :<></>}
        </>
    )
}

export default GamesEdit