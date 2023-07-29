const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot_commands')
		.setDescription('List of commands for the bot.'),
	async execute(interaction) {
		await interaction.reply(
            `List of bot commands:
            !hello: Bot will respond hello back
            !love: Bot will react with heart emoji
            /joke: Bot will respond with a joke. There's a chance it'll be NSFW
            /ping: Your standard Ping/Pong bot testing response
            /league_stream: Generate a message to notify @League of someone streaming
            /games_list: List of games we're playing. Early step to automating roles.`
            );
	},
};