import React from 'react'
import { Card, CardImg, CardImgOverlay, Navbar, Jumbotron, Container, NavbarBrand, NavbarToggler, NavLink, Collapse } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

class Open extends React.Component {

    render() {

        return (

            <>
                <div>
                   
                <Jumbotron >
                    <NavbarBrand>Connect with friends </NavbarBrand>
                </Jumbotron>
                    
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Card>
                               <Link to='/login' >
                                <CardImg src="assests/Login.png" alt="Login"  /> 
                                </Link> 
                            </Card>
                        </div>
                        <div className="col-6">
                            <Card>
                                <Link to='/register'>
                                <CardImg src="assests/Register.png" alt="Register" />
                                </Link>
                            </Card>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}


export default Open;