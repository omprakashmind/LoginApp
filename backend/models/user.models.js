const mongoose=require('mongoose')


const Schema=mongoose.Schema


const userSchema=new Schema({
    name:{type:String,required:true,trim:true},
    username:{type:String,required:true,trim:true,unique:true},
    email:{type:String,required:true,trim:true,unique:true},
    password:{type:String,required:true,trim:true}
},{
    timestamps:true
})




const user=mongoose.model('USER',userSchema)



module.exports=user;
