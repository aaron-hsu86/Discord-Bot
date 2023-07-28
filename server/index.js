const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, Emoji } = require('discord.js');
const { token, PORT } = require('./config.json');

// setup Mongoose backend info
require('./config/mongoose.config')
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json(), express.urlencoded({ extended: true }), cors());
const routeAttacher = require('./routes/discord.routes');
routeAttacher(app);

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildMessageReactions, 
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.on('messageCreate', async (msg) => {
    // This block will prevent the bot from responding to itself and other bots
    if (msg.author.bot) {
        return
    }

    // Check if the message starts with '!hello' and respond with 'world!' if it does.
    if (msg.content.startsWith("!hello")) {
        // reply to message
        // msg.reply({ content: 'world!' });
        // send message back to channel msg was sent in
        msg.channel.send('hello back')
    }
    if (msg.content === '!delete'){
        msg.delete();
    }
    if (msg.content.startsWith('!love')){
        console.log('hello')
        // const heart = client.guilds.emojis.cache.find(emoji => emoji.name === "heart");
        // console.log(client.guilds)
        // console.log(heart)
        msg.react('❤️')
    }
    if (msg.content === '!test'){
        
        msg.channel.send('test')
        msg.reply('test1')
        msg.reply({content:'test2', ephemeral: true})
    }
})

app.listen(PORT, () => console.log(`>> Server Online! Listening to PORT: ${PORT}`))

client.login(token);