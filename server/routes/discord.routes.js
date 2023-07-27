const Games = require('../controllers/discord.controller')

module.exports = app => {
    app.get('/', Games.test)
    app.get('/api/games', Games.all)
    app.post('/api/games', Games.create)
    app.get('/api/games/:id', Games.one)
    app.put('/api/games/:id', Games.update)
    app.delete('/api/games/:id', Games.delete)
}