const DiscordApp = require('../models/discord.model')
module.exports = {
    test: (req, res) => {res.json({message: 'Hello World'})},
    all: (req, res) => {
        DiscordApp.find()
            .then(info=>res.json(info))
            .catch(err=>res.json(err))
    },
    one: (req,res)=>{
        DiscordApp.findOne({_id:req.params.id})
        .then(info=>res.json(info))
        .catch(err=>res.json(err))
    },
    create: (req,res) => {
        DiscordApp.create(req.body)
            .then(info=>res.json(info))
            .catch(err=>res.status(400).json(err))
    },
    update: (req,res)=>{
        DiscordApp.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {runValidators: true, new: true}
            )
        .then(info=>res.json(info))
        .catch(err=>res.status(400).json(err))
    },
    delete: (req,res)=>{
        DiscordApp.deleteOne({_id:req.params.id})
        .then(info=>res.json(info))
        .catch(err=>res.json(err))
    }

}