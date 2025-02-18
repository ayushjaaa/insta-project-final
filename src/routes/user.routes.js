const usercontroller = require('../controller/user.controller')
const express = require('express')
const routes  = express.Router()
routes.post('/register',usercontroller.registercontroller)
routes.post('/login',usercontroller.loginController)
module.exports = routes