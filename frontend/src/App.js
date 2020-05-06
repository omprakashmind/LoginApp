import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Chat from './Components/Chat/Chat'
import Open from './Components/StartPage/Open'


class App extends React.Component {



    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path="/" component={Open} />
                    <Route path="/chathome" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/chat" component={Chat} />
                    
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}

export default App;
