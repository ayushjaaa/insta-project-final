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
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post" 
      }]
})
const usermodel = mongoose.model('user',userSchema)
module.exports = usermodel