import React from 'react'
import RegisterForm from '../RegisteForm/RegisterForm'
import { Card, CardImg } from 'reactstrap'


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {


        return (

            <>
                <div className="jumbotron">
                    <h3 style={{ textAlign: "center" }}> <b>You are one step away to Communicate</b></h3>

                </div>

                <div className="row">
                    <div className="col-6 col-md-5">
                        <RegisterForm />

                    </div>
                    <div className="col-6 col-md-5">
                        <Card>
                            <CardImg src="assests/REGISTRATION.png" alt="registration" />
                        </Card>
                    </div>
                </div>

            </>
        )
    }
}



export default Register;
