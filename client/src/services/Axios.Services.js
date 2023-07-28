// testing to see if I can call axios get calls from here
import axios from 'axios'

const AxiosServices = {
    getAll: () => {
        axios.get(`http://localhost:8000/api/games`)
            .then(res => res.json(res))
            .catch(err => err.json(err))
    },
    delete: (id) => {
        axios.delete(`http://localhost:8000/api/games/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}

export default AxiosServices;