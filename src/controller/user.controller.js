const userModel = require('../modules/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports.registercontroller = async(req,res) =>{
try{
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
res.status(200).json({
        data: newuser,
        message: "You are successfully registerd",
        token,
      });
}catch(error){
res.status(400).json({error:error.message})
}
}

module.exports.loginController = async (req,res) =>{

 try{
    const {email,password} = req.body
    if(!email){
        return res.status(400).send({
            message:"email is required"
        })
        
    }
    

    if(!password){
        return res.status(400).send({
            message:"password is required"
        })
        



}
const finduser = await userModel.findOne({email})
if(!finduser){
   return res.status(400).send({message:"enter right password or email"})
}
// console.log(finduser)
const comparepassword =  await bcrypt.compare(password,finduser.password)
// console.log(comparepassword)
if(!comparepassword) {
    return res.status(400).send({
        message:"enter right password or email"
    })
}
const token = jwt.sign({email},"secretkey")

res.status(200).json({message:finduser,token})
 }catch(error){
res.status(404).json({error})
 }
}  
module.exports.profilecontroller = async (req,res) =>{
    try {
        // const user = req.user;
    const newuser = await userModel.findOne({
        _id:req.user.id
    })
        
        res.status(200).json({ message: newuser });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}