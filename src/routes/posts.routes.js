const express = require('express')
const postRouter = express.Router()
const postcontroller = require('../controller/post.controller')
const {authecticate} = require('../middleware/auth')
postRouter.post('/create',authecticate,postcontroller.createpostcontroller)

module.exports = postRouter