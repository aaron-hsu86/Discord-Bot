const DiscordApp = require('../controllers/discord.controller')

module.exports = app => {
    app.get('/', DiscordApp.test)
    app.get('/api', DiscordApp.all)
    app.post('/api', DiscordApp.create)
    app.get('/api/:id', DiscordApp.one)
    app.put('/api/:id', DiscordApp.update)
    app.delete('/api/:id', DiscordApp.delete)
}