const mongoose = require('mongoose')

const DiscordAppSchema = new mongoose.Schema({

}, {timestamps: true})

const DiscordApp = mongoose.model("DiscordApp", DiscordAppSchema)
module.exports = DiscordApp