import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Input,Paper,Button,FormControl,InputLabel,Container} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import './styles.css'
import axios from 'axios'
import qs from 'qs'
import { Jumbotron } from 'reactstrap'
import {Link, Redirect} from 'react-router-dom'




class RegisterForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:'',
            username:'',
            email:'',
            password:'',
            message:'',
            isRedirect:false
        }
    }

    changevalue=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    submitValue=()=>{
        const name=this.state.name
        const username=this.state.username
        const email=this.state.email
        const password=this.state.password
         if(this.state.name!=null && this.state.username!=null && this.state.email!=null && this.state.password!=null){
            axios({method:'post',url:'https://chatappback.herokuapp.com/user/_register',data:qs.stringify({name:name,username:username,email:email,password:password}),headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}})  
            .then((res)=>{ 
                console.log(res)
                   if(res['data']['ok']===1){  
                       this.setState({
                           isRedirect:true
                       })
                    }
                else {
                   this.setState({
                       message:res['data']['errmsg']
                   })

                }
            })
            .catch((err)=>console.log(err))
         }
    }

    render(){

           return(

                <>
                {this.state.isRedirect ? <Redirect to='/login' /> : '' }
                <Container>
                
                </Container>
                <Paper>
                <Container>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu"  >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" >
                                Register
                                
                            </Typography>
                            <Link to='/login'>
                            <Button color="inherit" >Login</Button>
                            </Link>
                        </Toolbar>

                    </AppBar>   
                </Container>    
                <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="name">NAME</InputLabel>
                    <Input fullWidth="true" name="name" type="text" value={this.state.name} placeholder="Enter your name" color="inherit" onChange={this.changevalue} />
                 </FormControl> 
                 <br></br>
 
                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlfor="username">USERNAME</InputLabel>
                     <Input fullWidth="true" name="username" type="username" value={this.state.username} placeholder="Enter your Username" color="secondary" onChange={this.changevalue}  />
                 </FormControl>
                 <br></br>

                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlfor="emailid">EMAIL-ID</InputLabel>
                     <Input fullWidth="true" name="email" type="emailid" value={this.state.email} placeholder="Enter your Username" color="secondary" onChange={this.changevalue} />
                 </FormControl>
                 <br></br>

                 <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlfor="username">PASSWORD</InputLabel>
                     <Input fullWidth="true" name="password"  value={this.state.password} placeholder="Enter your Username" color="secondary" onChange={this.changevalue} />
                 </FormControl>

                 <Button fullWidth="true" color="secondary" onClick={this.submitValue} >REGISTER</Button>
                 

                </Paper>
                {this.state.message!=''?   <Jumbotron><h5>{this.state.message}</h5></Jumbotron> : '' }
                
                 
                </> 
           )
    }
}





export default RegisterForm;
