const {Schema, model} = require ('mongoose')
const PLM = require ('passport-local-mongoose')

const userSchema= new Schema({
  userName:{
    type:String,
    required:true,
  },
  email:{
    type:String
  },
  role:{
    type:String,
    enum:['USER','ADMIN'],
    default:'USER'
  },
  token:String
},{
  timestamps:true,
  versionKey:false
})

userSchema.plugin(PLM,{usernameField:'userName'})
module.exports = model('User',userSchema)