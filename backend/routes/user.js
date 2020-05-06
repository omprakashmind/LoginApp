const router=require('express').Router();
let USER=require('../models/user.models')
let USM=require('../models/username.models')
let jwt=require('jsonwebtoken')

router.post('/_setuser',async(req,res)=>{
    const newMap=new USM({
         list:'joshiii',
         userlist:[{user:'admin',username:'johiii'}]
    })
    newMap.save()
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
})


router.post('/_register',async(req,res)=>{
     const name=req.body.name
     const username=req.body.username
     const email=req.body.email
     const password=req.body.password
    
          
           const newUser=new USER({
               name:name,
               username:username,
               email:email,
               password:password
           }) 
           newUser.save()
           .then((result)=>{
               USM.updateOne({list:'joshiii'},{$push :{userlist:{user:name,username:username}}})
                 .then((result)=>{
                      res.send(result)
                 })
                 .catch((err)=>res.send(err))
           })
           .catch(err=>res.send(err)) 
})

router.post('/_authenticate',async(req,res)=>{
     let username=req.body.username
     let password=req.body.password
    
     USER.findOne({username:username,password:password})
     .then(user=>{ 
            if(user!=null){
               const token=jwt.sign({username},process.env.SECRET_KEY)
               res.header('auth-token',token).send(token)
                   }
            else {  
               res.sendStatus(201)
            }  
     })
     .catch(err=>res.status(400).json('Error'+err))
})



router.post('/_getall',async(req,res)=>{
     USM.findOne({list:'joshiii'})
     .then((result)=>res.send(result))
     .catch((err)=>res.send(err))
})


module.exports=router;