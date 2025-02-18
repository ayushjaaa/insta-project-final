const mongoose = require('mongoose')
const connect = () =>{
    mongoose.connect('mongodb://0.0.0.0/finalinsta').then(()=>{
        console.log("connected to db")
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports = connect