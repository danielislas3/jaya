const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.verifyToken=(req,res,next)=>{
  
  console.log('verifyToken')
  const { headload, signature } = req.cookies
  console.log({...req})
  if(!headload||!signature)return res.status(401).json({msg:'Unauthorized, missing token(cookie)'})

  jwt.verify(headload+signature, process.env.SECRET,(err,decoder)=>{
    
    if(err) res.status(401).json({msg:'Unauthorized, missing token'})

    User.findById(decoder.userId)
    .then(user=>{
      req.user=user
      next()
    })
    .catch(err=>{
      res.status(404).json({err})
      next()
    })
  })
}