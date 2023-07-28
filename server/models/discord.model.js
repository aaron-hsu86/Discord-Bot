const mongoose = require('mongoose')

const GamesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must be at least 2 characters long']
    },
    genre: {
        type: String,
        required: [true, 'Please provide genre'],
        minlength: [2, 'Genre must be at least 2 characters long']
    },
    description: {
        type: String,
        maxlength: [250, 'Please limit description to 250 characters']
    },
    emote: {
        type: String
    }

}, {timestamps: true})

const Games = mongoose.model("Games", GamesSchema)
module.exports = Games