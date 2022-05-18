const {Author} = require('./../models/author.model')


//Get all
module.exports.allAuthor = (req, res) =>{
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

//Get one
module.exports.oneAuthor = (req, res) =>{
    Author.findOne({_id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

//Create
module.exports.createAuthor = (req, res) =>{
    Author.create(req.body)
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

//Update
module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deleteAuthor = (req, res) =>{
    Author.findOneAndDelete({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}