import React, {useState} from 'react'
import GameForm from '../components/GameForm';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const GamesAdd = () => {
    const navigate = useNavigate();
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

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/games`, formData)
            .then( () => navigate('/') )
            .catch( err => {
                let errors = err.response.data.errors
                for (let key in errors){
                    if (formError.hasOwnProperty(key)){
                        setFormError(currentData => ({...currentData, [key]:errors[key].message}))
                    }
                }
            })
    }

    return (
        <>

        <GameForm formData={formData} formError={formError} handleChange={handleChange} handleSubmit={handleSubmit} deleteButton={false}/>
        </>
    )
}

export default GamesAdd