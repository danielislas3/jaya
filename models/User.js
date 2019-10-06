const {Schema, model} = require ('mongoose')
const PLM = require ('passport-local-mongoose')

const UserSchema= new Schema({
  userName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    enum:['USER','MASTERMIND'],
    default:'USER'
  },
  token:String
},{
  timestamps:true,
  versionKey:false
})

userSchema.plugin(PLM,{usernameField:'userName'})
module.exports = model('User',userSchema)