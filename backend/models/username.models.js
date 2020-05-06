const mongoose=require('mongoose')


const Schema=mongoose.Schema


const usernameschema=new Schema({
    list:{type:String,trim:true},
    userlist:[{username:{type:String,trim:true},user:{type:String,trim:true}}]
},{
    timestamps:true
})

const userschema=mongoose.model('USM',usernameschema)

module.exports=userschema