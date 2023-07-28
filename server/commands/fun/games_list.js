const { SlashCommandBuilder } = require("discord.js");
const MongoClient = require('mongodb').MongoClient
// require('../../config/mongoose.config')
// const cors = require('cors')
const express = require('express')
const app = express();
// app.use(express.json(), express.urlencoded({ extended: true }), cors());
// const routes = require('../../routes/discord.routes')
const { URL, ATLAS_DB } = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('games_list')
        .setDescription('List of games!'),
    async execute(interaction) {
        MongoClient.connect(URL, function (err, db) {
            if (err) throw err;
            var dbo = db.db(ATLAS_DB);
            dbo.collection("games").find().toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
            });
        });

        // app.get('/api/games', (req, res) => {

        // })
        await interaction.reply('not able to connect to backend from server yet. :sob: ');
    },
};