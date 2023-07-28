import React, {useState, useEffect} from 'react'
import GameForm from '../components/GameForm'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const GamesEdit = () => {
    const navigate = useNavigate();
    const {id} = useParams();

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
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then(res => {
                setLoaded(true);
                setFormData(res.data);
                })
            .catch(err => console.log(err))
    }

    useEffect(getGameData, [id])

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/games/${id}`, formData)
            .then( () => navigate(`/games/view/${id}`) )
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
        axios.delete(`http://localhost:8000/api/games/${id}`)
            .then( () => navigate('/') )
            .catch( err => console.log(err) )
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