const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('games_list')
        .setDescription('List of games!'),
    async execute(interaction) {
        await interaction.reply('still testing!');
    },
};