import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Input, Paper, Button, FormControl, InputLabel, Container, AppBar } from '@material-ui/core'
import './styles.css'
import { Card, CardImg, Jumbotron } from 'reactstrap'
import { blue, red } from '@material-ui/core/colors'
import axios from 'axios'
import qs from 'qs'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message:'',
            redirect:false
        }
    }

   submitValue=()=>{
    if(this.state.username!=null && this.state.password!=null)
    {
        const username=this.state.username
        const password=this.state.password
        axios({method:'post',url:'https://chatappback.herokuapp.com/user/_authenticate',data:qs.stringify({username:username,password:password}),headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}})  
        .then((res)=>{ 
            console.log(res)
               if(res['status']===200){  
                   localStorage.setItem('username',username)
                   localStorage.setItem('key',res['data'])
                   this.setState({
                       redirect:true
                   })
                }
            else {
                   this.setState({
                       message:'USERNAME AND PASSWORD IS INCORECT'
                   })}     
        })
        .catch((err)=>console.log(err))
    }
    else{
        this.setState({
            err:'ENTER THE RIGHT VALUES'
        })}}     

    changeValue=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
          
      

    render() {

        return (

            <>
                <div>
                    {this.state.redirect ? <Redirect to='/chathome' /> : '' }
                    <AppBar position="static" >
                        <h3 className="appbar">LOGIN TO COMMUNICATE</h3>
                    </AppBar>
                    <Jumbotron style={{ backgroundColor: red }}>
                       <h3>{this.state.message}</h3>

                    </Jumbotron>
                </div>
                <div className="row">
                    <div className="col-6 col-md-5">
                        <Card>
                            <CardImg src="assests/LOGINPAGE.jpg" alt="loginPage" />
                        </Card>
                    </div>
                    <div className="col-6 col-md-5">

                        <Paper>
                            

                            <FormControl margin="normal" required fullWidth >
                                <InputLabel htmlFor="username">USERNAME</InputLabel>
                                <Input fullWidth="true" name="username" value={this.state.username} placeholder="Enter your username" color="inherit" onChange={this.changeValue} />
                            </FormControl>
                            <br></br>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlfor="password">PASSWORD</InputLabel>
                                <Input fullWidth="true" name="password" value={this.state.password}  placeholder="Enter your password" color="secondary" onChange={this.changeValue} />
                            </FormControl>
                            
                               <Button fullWidth="true" color="secondary" onClick={this.submitValue} >LOGIN</Button>
                              
                              

                        </Paper><br></br>
                        <Jumbotron>
                            <Link to='/register'>
                               <Button fullWidth="true" color="primary">NOT REGISTERED YET</Button>
                            </Link>
                            
                        </Jumbotron>

                    </div>

                </div>

            </>

        )
    }
}



export default LoginForm;
