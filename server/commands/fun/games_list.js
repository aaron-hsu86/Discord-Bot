const { SlashCommandBuilder } = require("discord.js");
const Games = require('../../models/discord.model')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('games_list')
        .setDescription('List of games!'),
    async execute(interaction) {
        let gamesList = ''
        Games.find().then(games => {
            for (let i = 0; i < games.length; i++){
                if (gamesList === ''){
                    gamesList = games[i].title
                } else {
                    gamesList+= `, ${games[i].title}`
                }
            }
            interaction.reply(`List of games:\n${gamesList}`);
        }).catch(err => {
            console.log(err)
            interaction.reply('Unable to get list of games')
        })
    },
};