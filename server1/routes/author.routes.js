const authorController = require('./../controllers/author.controller')

module.exports = (app) =>{
    app.get('/api/all/authors', authorController.allAuthor)
    app.get('/api/author/:id', authorController.oneAuthor)
    app.post('/api/create/author', authorController.createAuthor)
    app.put('/api/update/author/:id', authorController.updateAuthor)
    app.delete('/api/delete/author/:id', authorController.deleteAuthor)
}