const { SlashCommandBuilder } = require("discord.js");
const JokeAPI = require('sv443-joke-api');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Get a random joke!'),
    async execute(interaction) {

        JokeAPI.getJokes()
            .then((body) => body.json())
            .then((data) => {
                if (data.type === 'twopart'){
                    interaction.reply(`${data.setup}\n||${data.delivery}||`)
                } else {
                    interaction.reply(data.joke)
                }
            })

    },
};