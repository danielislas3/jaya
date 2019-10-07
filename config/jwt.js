const jwt = require('jsonwebtoken')

exports.createToken = user =>jwt.sign(
      {
        userId: user._id,
        userName: user.userName,
      },
      process.env.SECRET,
      { expiresIn: '24h' }
  )


