import React, {Component} from 'react';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import { Button, TextField , Card, CardContent, CardMedia} from '@material-ui/core';
import './App.css';

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  clickHandler = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return this.state.loggedIn ? <Dashboard /> : (
      <div>
        <NavBar />
          <Card className="logInCard">
            <CardContent>
               <TextField label="Username *" /><br />
               <TextField label="Password *" /><br />
               <Button onClick={this.clickHandler}>Log In</Button>
            </CardContent>
          </Card>
      </div>
    )
  }
}

export default LogIn;
//must have:
//All material-ui components for below 
//Button for logon - linked to state default false 
//clickHandler 
//each should have className 
//TextField - username & password 
  //could short username & password
//change render based on logon state 