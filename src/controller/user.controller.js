const userModel = require('../modules/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports.registercontroller = async(req,res) =>{
const {username,email,password} = req.body
if(!username){
    return res.status(400).send({
        mmessage:"username is required"
    })
    
}
if(!email){
    return res.status(400).send({
        mmessage:"email is required"
    })
    
}

if(!password){
    return res.status(400).send({
        mmessage:"password is required"
    })
    
}
const hasedpassword = await bcrypt.hash(password,10)
const newuser = await userModel.create({
    username,
    email,
    password:hasedpassword
})
const token = jwt.sign({
    email
},"secretkey")
res.send(token)
}

module.exports.loginController = async (req,res) =>{

 const {email,password} = req.body
    if(!email){
        return res.status(400).send({
            mmessage:"email is required"
        })
        
    }
    

    if(!password){
        return res.status(400).send({
            mmessage:"password is required"
        })
        



}
const user = await userModel.findOne({email})
if(!user){
    res.status(400).send({message:"enter right password or email"})
}
console.log(user)
const comparepassword =  await bcrypt.compare(password,user.password)
console.log(comparepassword)
const token = jwt.sign({email})
}  