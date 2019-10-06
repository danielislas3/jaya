const User = require('../../models/User')
const {createToken}= require('../../config/jwt')

exports.signup=(req,res,next)=>{
  User.register({...req.body, role:'USER'},req.body.password)
  .then(user=>res.status(201).json({user}))
  .catch(err=>res.status(500).json({err}))
}

exports.login=async (req,res,next)=>{
  const {user}= req
  const [header,payload,signature] = createToken(user)
  //cookie que tiene header y payload (para la seguridad de medium)


  //let cookeie1 = await res.cookie('headload', `${header}.${payload}`)
  let cookie1 = await res.cookie('headload', `${header}.${payload}`,
    { maxAge:24*60*60*1000,
      secure:true
    })

    let cookie2 = await res.cookie('signature',signature,{
      httpOnly:true,
      secure:true
    })
   res.status(200).json({user})
}

exports.logout=(req,res,nex)=>{
  res.clearCookie('headload')
  res.clearCookie('signature')
  res.status(200).json({msg:'Logged out'})
}

