import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,AppBar,Toolbar,IconButton,MenuItem,Typography,Button, InputBase} from '@material-ui/core'
import { Jumbotron,Card,CardImg } from 'reactstrap';
import Users from '../Users/User'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/Notifications'
import TableFooter from '@material-ui/core/TableFooter'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import List from '../ListItem/ListItem'
import {UncontrolledCarousel} from 'reactstrap'
import './styles.css'
import Clock from '../Clock/Time'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link,Redirect} from 'react-router-dom'
import Wheather from '../Wheather/index'


const items=[
    {
        src:'assests/carousel1.jpg',
        altText:'Talk To Friends',
        caption:'HELP',
        header:'CHAT',
        key:1
    },
    {
        src:'assests/carousel2.jpg',
        altText:'GAMES',
        caption:'Play games',
        header:' GAMES',
        key:2
    },
    {
        src:'assests/carousel3.jpg',
        altText:'To do list',
        caption:'Add and delete Task',
        header:'Completed and incompleted',
        key:3
    }
]



class Home extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
           username:'',
           users:[],
           name:'',
           isRedirect:false
        }
    }

  


    

    exitapp=()=>{
        localStorage.clear()
        this.setState({
            isRedirect:true
        })
    }
    

       render(){
           if(localStorage.getItem('username')===null){
               return(
                   <div>
                       ACCESS DENIED
                   </div>
               )
           }
           else{
           if(localStorage.getItem('username')!=null)
           {

                return(

                    <>
                    {this.state.isRedirect ? <Redirect to='/login' />:'' }
                    <Jumbotron>
                        <AppBar>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                 <div>
                                     <div>
                                         <SearchIcon />
                                     </div>
                                     <InputBase placeholder="Search..." />
                                 </div>
                                 <IconButton aria-label="show 17 new notifications" color="inherit">
                                     <Badge badgeContent={17} color="secondary">
                                         <MailIcon/>
                                     </Badge>
                                 </IconButton>
                                 <IconButton aria-label="show 4 new notifications" color="inherit">
                                     <Badge badgeContent={4} color="secondary">
                                         <NotificationIcon />
                                     </Badge>

                                 </IconButton>
                                 <div>
                                   <Clock />
                                 </div>
                                   
                                 <IconButton >
                                    <ExitToAppIcon className="logout" /><Button onClick={this.exitapp}>LOGOUT</Button> 
                                </IconButton>   

                                <Typography variant="h6" >
                                    {this.state.name}
                                </Typography>
                                

                            </Toolbar>

                        </AppBar>
                    </Jumbotron>
                    <br></br>


                   
                     <div className="row" style={{marginTop:20}}>

                         <div className="col-2 col-md-4">
                             <Card>
                                <List/>

                             </Card>
                         </div>
                         <div className="col-8 col-md-4 ">
                             <Card>
                                 <Link to='/chat'>
                                    <CardImg src="images/chat.jpg" alt="Chat photo"  />
                                 </Link>
                                 <h4>CLick to start chatting</h4>

                             </Card>
                         </div>
                         <div className="col-2 col-md-4">
                             <Card>

                                 <Wheather />

                             </Card>
                        </div>
                    </div>
                    
                    <Jumbotron >
                        <div className="container">
                           <UncontrolledCarousel items={items} className="carouselitem"/>
                        </div>  
                    </Jumbotron>

                    <div className="footer">
                        <Jumbotron>
                            <div className="row">
                            <div className="col-4 col-md-4">


                            </div>
                            <div className="col-4 col-md-4">


                            </div>
                            <div className="col-4 col-md-4">
                                <GitHubIcon fontSize="large"/>
                                <InstagramIcon fontSize="large"/>
                                <FacebookIcon fontSize="large" />
                            </div>
                            </div>
                        </Jumbotron>
                    </div>
            </>
        )
            }
            else{
        return (
            <> ACCESS DENIED </>
                )
            }
        }
    }
}


export default Home;