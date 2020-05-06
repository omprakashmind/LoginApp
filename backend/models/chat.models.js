const mongoose=require('mongoose')

const Schema=mongoose.Schema

const chatSchema=new Schema({
    firstName:{type:String,trim:true},
    secondName:{type:String,trim:true},
    message:[{sender:{type:String,trim:true},message:{type:String,trim:true}}]
})




const chat=mongoose.model('CHAT',chatSchema)

module.exports=chat;
