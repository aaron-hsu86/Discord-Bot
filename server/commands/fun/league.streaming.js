const { SlashCommandBuilder } = require("discord.js");

const response = [
    'The Golden God has returned!',
    'Stay calm and watch the stream!',
    "I've got a good feeling...a *GOLD* feeling...",
    "The League God has returned!",
    "Witness the epic climb to Gold live!",
    "Cheer on as Gold awaits - join us!",
    "Streaming the thrilling Gold climb!",
    "Live now: Journey to triumphant Gold!",
    "Tune in for the intense Gold chase!",
    "Support the quest to shine in Gold!",
    "Don't miss the road to League Gold!",
    "Experience the adrenaline of Gold!",
    "Be part of the victorious Gold ascent!",
    "Join the excitement, watch Gold live!",
    "The race to Gold starts streaming!",
    "Catch the action, follow Gold climb!",
    "Experience the thrill of Gold chase!",
    "Witness the magic of Gold journey!",
    "Streaming live: Climb to glorious Gold!",
    "Be inspired by the path to Gold!",
    "Don't blink, Gold is within reach!",
    "Watch the journey to League Gold!",
    "Get ready for a Gold-bound adventure!",
    "Live stream: Road to triumphant Gold!",
    "Follow the climb to shining Gold!",
    "Support the quest to claim Gold!",
    "Join the excitement, Gold awaits!",
    "Be part of the epic Gold climb!",
    "Experience the joy of reaching Gold!",
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('league_stream')
        .setDescription('Watch Tony climb to Gold!'),
    async execute(interaction) {
        // console.log(interaction)
        // const message = '*test*'
        const message = response[Math.floor(Math.random()*response.length)]
        // console.log(test)
        const roleID = '506315743650906112' // role for League
        await interaction.reply(`<@&${roleID}> ${message}`);
        // await interaction.reply(`test message: ${test}`);
    },
};