const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.verifyToken=(req,res,next)=>{
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json({msg:'Unauthorized, missing token'})
}

  jwt.verify(token, process.env.SECRET,(err,decoder)=>{
    
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