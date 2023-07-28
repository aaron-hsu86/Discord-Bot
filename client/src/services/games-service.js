// format for creating modularized axios calls
import axios from 'axios'
const http = axios.create({
    baseURL: 'http://localhost:8000/api',
})

async function getAll() {
    try {
        const response = await http.get('/games');
        return response.data
    } catch (error) {
        throw error;
    }
}

async function getOne(gameId) {
    try {
        const response = await http.get(`/games/${gameId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function createOne(data) {
    try {
        const response = await http.post(`/games`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function updateOne(data) {
    try {
        const response = await http.put(`/games/${data._id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function deleteOne(gameId) {
    try {
        const response = await http.delete(`/games/${gameId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
};