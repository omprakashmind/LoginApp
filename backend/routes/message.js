const router=require('express').Router()

let CHAT=require('../models/chat.models')


router.post('/_sendmessage',async(req,res)=>{
     const sender=req.body.sender
     const receiver=req.body.receiver
     const message=req.body.message
     


     CHAT.find({firstName:sender,secondName:receiver})
     .then((result)=>{
            if(result==''){
                const chatSchema=new CHAT({
                    firstName:sender,
                    secondName:receiver,
                    message:[{sender:sender,message:message}]
                })
                const chatSchema1=new CHAT({
                    firstName:receiver,
                    secondName:sender,
                    message:[{sender:sender,message:message}]
                })


                chatSchema.save()
                .then((resu)=>{
                    chatSchema1.save()
                    .then((resu2)=>res.send(resu))
                })
                .catch((resu)=>res.send(resu))

            }
            else{
                CHAT.updateOne({firstName:sender,secondName:receiver},{$push :{message:{sender:sender,message:message}}})
                .then((result)=>{
                    CHAT.updateOne({firstName:receiver,secondName:sender},{$push:{message:{sender:sender,message}}})
                    .then((result2)=>res.send(result2))
                    .catch((result2)=>res.send(result2))
                })
                .catch((result)=>res.send(result))
            }
     })
     .catch((result)=>res.send(result))
})



router.post('/_getconversation',async(req,res)=>{
     const sender=req.body.sender
     const receiver=req.body.receiver
     

     CHAT.findOne({firstName:sender,secondName:receiver})
     .then((result)=>res.send(result))
     .catch((result)=>res.send(result))
})



module.exports=router;
