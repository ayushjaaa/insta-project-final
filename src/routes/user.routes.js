const usercontroller = require('../controller/user.controller')
const express = require('express')
const {authecticate}  = require('../middleware/auth')

const routes  = express.Router()
routes.post('/register',usercontroller.registercontroller)
routes.post('/login',usercontroller.loginController)
routes.get('/profile',authecticate,usercontroller.profilecontroller)
module.exports = routes