import React, {Component} from 'react'
import NavBar from './NavBar';
import {Card, CardContent, CardActions, CardMedia, Switch, Slider, Select} from "@material-ui/core"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      online: true,
      currentVolumn: 0,
      quality: 2
    }
  }
  
  render() {
    return(
      <div>
       <NavBar />

       <Card className="online">
          <h1>Online Mode</h1>
          <Switch></Switch>
       </Card>

       <Card className="volumn">
          <h1>Master Volumn</h1>
          <Slider></Slider>
       </Card>
          
       <Card className="quality">
          <h1>Sound Quality</h1>
          <Select></Select>
       </Card>

       <h1>System Notifications</h1>
      </div>
    )
  }
}

export default Dashboard

//Material UI-Requirements 
//Card - there will be three of theses 
//CardContent
//CardActions 
//Switch
//Slider 
//Select 
//Card 1 - Online Mode 
  //content - must have Switch 
    //should have state online - true or false based on Switch, default as true
      //if false deplay text: Your application is offline. You won't be able to share or stream music to other devices.
//Card 2 - Master Volumn
  //content - must have Slider
    //should have state currentVolum - set to 0? cannot exceed 100
      //slider scale 0 - 100 incerment by 10 
      //if volumn at or exceeds 80 isplay: Listening to music at a high volume could cause long-term hearing loss.
//Card 3 - Sound Quality 
  //content - must have Select
    // should have state quality - number 1, 2, 3 
      //1 = Low - if this display: Music quality is degraded. Increase quality if your connection allows it. 
      //2 = Normal 
      //3 = High

  //maybe use componentDidUpdate() and access prevState 
  //use map to use notification and display "System Notifications"
