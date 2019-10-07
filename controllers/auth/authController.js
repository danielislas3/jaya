const User = require('../../models/User')
const {createToken}= require('../../config/jwt')

exports.signup= async (req,res,next)=>{
  
  const user = await  User.register({...req.body},req.body.password)

  const token = createToken({user}) 
  res.status(201).json({user,token})
 
}

exports.login = async (req,res,next)=>{
  const {user}= req
  const userFind = await User.findOne({email: req.body.userName})
    if(!user) {
        return res.status(404).send("The user doesn't exists")
    }
    const token = createToken(user) 
   res.status(200).json({auth: true,user,token})

}

exports.logout=(req,res,nex)=>{
  // res.clearCookie('headload')
  // res.clearCookie('signature')
  res.status(200).send({ auth: false, token: null })}

