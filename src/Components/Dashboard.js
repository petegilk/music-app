import React, {Component} from 'react'
import NavBar from './NavBar';
import {Card, CardContent, CardActions, CardMedia, MenuItem, Switch, Slider, Select} from "@material-ui/core"
import './Dash.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      online: false,
      currentVolumn: 0,
      quality: 2
    }
  }

  onlineHandler = () => {
    this.setState({
      online: !this.state.online
    })
  }

  // This method should set current volume state to reflect the sliders current position
  // slideHandler = () => {
  //   this.setState({
      
  //   })
  // }
  
  render() {
    return(
      <div>
       <NavBar />
        <h1>Welcome, user!</h1>
       <div className="card-wrapper">
          <Card className="online" variant="outlined">
              <CardContent>
                <h1>Online Mode</h1>
                <p>Is this application connected to the internet?</p>
                <Switch onClick={this.onlineHandler}></Switch>
              </CardContent>
          </Card>

          <Card className="volumn" variant="outlined">
              <CardContent>
                <h1>Master Volumn</h1>
                <p>Overrides all other sound settings in this application</p>
                  <Slider
                    // onChange={this.slideHandler()}
                    defaultValue={30}
                    step={10}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                  />
              </CardContent>
          </Card>
              
          <Card className="quality" variant="outlined">
              <CardContent>
                <h1>Sound Quality</h1>
                <p>Manually control the music quality in the event of poor connection</p>
                <Select>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </CardContent>
          </Card>
       </div>

       <h2>System Notifications</h2>
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
