const express=require('express')
const http=require('http')
const socketio=require('socket.io')
const app=express()
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')

const bodyParser=require('body-parser')

const json=require('jsonwebtoken')
app.use(express.json())



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const port=process.env.PORT || 8080


const server=http.createServer(app)

const io=socketio(server)


app.use(express.static('public'))

const uri='mongodb+srv://joshiii:joshiii@cluster0-zgw0h.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
.then(()=>console.log('DAta base connection established'))
.catch(err=>console.log(err))


const connection=mongoose.connection

connection.once('open',()=>{
    console.log('MONGOOSE CONNECTION S  UCCESFULLY ESTABLISHED')


})









const userValue=require('./routes/user')
const messageValue=require('./routes/message')

app.use('/user',userValue)
app.use('/message',messageValue)




server.listen(port,()=>console.log('SERVER IS RUNNING'))
