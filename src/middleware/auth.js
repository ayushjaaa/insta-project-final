const { use } = require('../app');
const usermodel = require('../modules/user.model')
const jwt = require('jsonwebtoken')

const authecticate = async (req,res,next) =>{
try{
       
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token)   
    if(!token){
      return  res.status(400).send({
            message:"token is envalid or expired"
        })
    }
 const decoded = jwt.verify(token,"secretkey")
   
 if(!decoded){
    return res.status(400).send({message:"token mis match"})
 
}
// console.log(decoded)
// console.log(decoded)
const user = await usermodel.findOne({ email: decoded.email });
// console.log(user)
    if (!user) { return res.status(404).json({ message: "user not found" });}
    req.user = user;
next()
}catch(error){
    console.error("JWT Verification Error:", error);
    return res.status(500).json({ message: "Internal server error" });

}
}
module.exports = {
    authecticate
}
