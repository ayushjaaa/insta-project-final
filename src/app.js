const express = require('express')
const route = require('./routes/user.routes')
const postRouter = require('./routes/posts.routes')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/user',route)
app.use('/user',postRouter)
module.exports = app