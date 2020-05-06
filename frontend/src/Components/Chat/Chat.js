import React from 'react'
import {Jumbotron,Card,CardImg, Navbar,Nav} from 'reactstrap'
import {AppBar,Toolbar, Button } from '@material-ui/core'
import axios from 'axios'
import qs from 'qs'
import Clock from '../Clock/Time'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import './styles.css'
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import {Link, Redirect} from 'react-router-dom'



class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userlist:[],
            receiver:'',
            sender:'',
            message:'',
            previousconversation:[],
            isRedirect:false
            
        }
    }
  

    componentDidMount=()=>{
        axios({method:'post',url:'https://chatappback.herokuapp.com/user/_getall',headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}})  
        .then((res)=>{ 
            console.log(res['data']['userlist'])
            this.setState({ 
                 userlist:res['data']['userlist']
                })
        })
        .catch((err)=>console.log(err))

        this.setState({
            sender:localStorage.getItem('username')
        })
    }

    
    getMessages=(receiver)=>{
        this.setState({
            receiver:receiver
        })
        const sender=this.state.sender
        
        axios({method:'post',url:'https://chatappback.herokuapp.com/_getconversation',data:qs.stringify({sender:sender,receiver:receiver}),headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}})  
        .then((res)=>{ 
            if(res['data']['message']==undefined){

            }else{
                console.log(res['data']['message'])
                 this.setState({
                     previousconversation:res['data']['message']
                 })
                
         } })
        .catch((err)=>console.log(err))

    }
    changeValue=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    sendMessage=()=>{
        if(this.state.message!=null){
            const sender=this.state.sender
            const message=this.state.message
            let arr={sender:sender,message:message}
            let conversation=this.state.previousconversation
            conversation.push(arr)
            this.setState({
                previousconversation:conversation
            })
  
        const receiver=this.state.receiver

        axios({method:'post',url:'https://chatappback.herokuapp.com/message/_sendmessage',data:qs.stringify({sender:sender,receiver:receiver,message:message}),headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}})  
        .then((res)=>{ 
            console.log(res)
               })
        .catch((err)=>console.log(err))

        }
    }

    logout=()=>{
        localStorage.clear()
        this.setState({
            isRedirect:true
        })
    }


      render(){


          const listItem=()=>this.state.userlist && this.state.userlist.map((item,index)=>{
  
                return (
                   <List key={item.id}>
                       
                      <Button className="userbtn" onClick={()=>this.getMessages(item['username'])}> <ListItem> <ListItemAvatar><Avatar alt="userPhoto" src=" " /></ListItemAvatar> <ListItemText >{item['user']}</ListItemText>  </ListItem></Button>
                    </List>
                )
          })

          const listMessages=()=>this.state.previousconversation && this.state.previousconversation.map((item,index)=>{
              return(
                  <List key={item.id}>{item.sender}<ListItem>{item.message}</ListItem> </List>
              )
          })

          if(localStorage.getItem('username')!=null){

             return(
                <>
                {this.state.isRedirect ? <Redirect to='/login' /> : ''}
                
                <Jumbotron>
                    <AppBar>
                        <Toolbar><br></br>
                        <Link to='/chathome'>
                        <Button  >HOME</Button>
                        </Link>
                            <Clock /><h3>INDIAN STANDARD TIME(IST)</h3>
                             <h3 style={{marginLeft: 450 }}>WELCOME {localStorage.getItem('username')}</h3>
                             
                        </Toolbar>
                       <Button onClick={()=>this.logout}> LOGOUT</Button>
                    </AppBar>
                </Jumbotron><br></br><br></br>
                <div className="row">
                    <div className="col-3 col-md-4">
                        <Card>
                            {listItem()}


                        </Card>
                    </div>
                    <div className="col-6 col-md-4">
                        <Card>
                            {listMessages()}
                            {this.state.receiver!=''?  
                            <div>



                                 
                            <FormControl margin="normal" required fullWidth >
                                <InputLabel htmlFor="message">MESSAGE</InputLabel>
                                <Input fullWidth="true" name="message" value={this.state.message} placeholder="Enter your message" color="inherit" onChange={this.changeValue} />
                                <Button onClick={this.sendMessage}><SendIcon /></Button>
                            </FormControl>   
                            
                            </div>  : ''        
                        }

                        </Card>
                    </div>
                    <div className="col-3 col-md-4">
                        <Card>
                            
                        </Card>
                    </div>
                </div>   
                <Jumbotron>
                    <AppBar>
                        <Toolbar>




                        </Toolbar>
                    </AppBar>
                </Jumbotron>
                </>
             )}
             else{
                 return <>ACCESS DENIED  </>
             }
      }
}




export default Chat;

