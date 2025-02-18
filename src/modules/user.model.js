const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const usermodel = mongoose.model('user',userSchema)
module.exports = usermodel