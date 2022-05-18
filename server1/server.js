const express = require('express')
const cors = require('cors')
const app = express()
require('./configs/mongoose.config')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./routes/author.routes')(app)

app.listen(8000, () => console.log('The port is 8000 and I am listening to it!'))