const Games = require('../models/discord.model')
module.exports = {
    test: (req, res) => {res.json({message: 'Hello World'})},
    all: (req, res) => {
        Games.find()
            .then(info=>res.json(info))
            .catch(err=>res.json(err))
    },
    one: (req,res)=>{
        Games.findOne({_id:req.params.id})
        .then(info=>res.json(info))
        .catch(err=>res.json(err))
    },
    create: (req,res) => {
        Games.create(req.body)
            .then(info=>res.json(info))
            .catch(err=>res.status(400).json(err))
    },
    update: (req,res)=>{
        Games.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {runValidators: true, new: true}
            )
        .then(info=>res.json(info))
        .catch(err=>res.status(400).json(err))
    },
    delete: (req,res)=>{
        Games.deleteOne({_id:req.params.id})
        .then(info=>res.json(info))
        .catch(err=>res.json(err))
    }

}