import React, {Component} from 'react'
import NavBar from './NavBar';
import {Card, CardContent, MenuItem, Switch, Slider, Select} from "@material-ui/core"
import './Dash.css'

const offlineNote = "Your application is offline. You won't be able to share or stream music to other devices"
const volumeNote =  "Listening to music at a high volume could cause long-term hearing loss."
const qualityNote =  "Music quality is degraded. Increase quality if your connection allows it."

class Dashboard extends Component {

  constructor(props) {
    //console.log('what props', props)
    super(props)
    this.state = {
      user: props.user,
      online: true,
      currentVolumn: 0,
      quality: 2,
      messages:[]
    }
    //console.log(this.state)
  }

  //add or remove message based on the state of online or offline
  onlineHandler = (e) => {
    console.log('before,', this.state.message)
    e.preventDefault();
    this.setState({
      online: !this.state.online
    }, () => {
      if(this.state.online === false) {
        this.setState({
          messages: [...this.state.messages, offlineNote]
        }) 
      } else if (this.state.online === true) {
        let messageIndex = this.state.messages.indexOf(offlineNote)
        let messageCopy = [...this.state.messages]
          messageCopy.splice(messageIndex, 1)
          this.setState({
            messages: messageCopy
        })
      }
    })
    console.log('after,', this.state.messages)
  }

  // This method should set current volume state to reflect the sliders current position and add or remove a notification based on the the status of the volume 
  slideHandler = (e, v) => {
    e.preventDefault();
    this.setState({
      currentVolumn: v
    }, () => {
      if (this.state.currentVolumn >= 80 && (this.state.messages.includes(volumeNote) === false)) {
        this.setState({
          messages: [...this.state.messages, volumeNote]
        }) 
      } else if (this.state.currentVolumn < 80) {
        let messageIndex = this.state.messages.indexOf(volumeNote)
        let messageCopy = [...this.state.messages]
        messageCopy.splice(messageIndex, 1)
        this.setState({
          messages: messageCopy
      })
      }
    })
  }

  //should change the status of the quality of the music and add or remove a message to notifications based on the volume  
  qualityHandler = (e) => {
    e.preventDefault();

    let int = parseInt(e.target.value)
    this.setState({
      quality: int
    }, () => {
      if (this.state.quality === 1) {
        this.setState({
          messages: [...this.state.messages, qualityNote]
        })
      } else {
        let messageIndex = this.state.messages.indexOf(qualityNote)
        let messageCopy = [...this.state.messages]
        messageCopy.splice(messageIndex, 1)
        this.setState({
          messages: messageCopy
      })
      }
    })
  }
  
  render() {
    return(
      <div>
       <NavBar />
        <h1>Welcome {this.state.user}</h1>

       <div className="card-wrapper">
          <Card className="online" variant="outlined">
              <CardContent>
                <h1>Online Mode</h1>
                <p>Is this application connected to the internet?</p>
                 <Switch
                   onClick={this.onlineHandler} 
                   checked={this.state.online}
                   />
              </CardContent>
          </Card>

          <Card className="volumn" variant="outlined">
              <CardContent>
                <h1>Master Volumn</h1>
                <p>Overrides all other sound settings in this application</p>
                  <Slider
                    onChange={this.slideHandler}
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
                <Select onChange={this.qualityHandler} defaultValue={this.state.quality}>
                  <MenuItem value="1">Low</MenuItem>
                  <MenuItem value="2">Normal</MenuItem>
                  <MenuItem value="3">High</MenuItem>
                </Select>
              </CardContent>
          </Card>
       </div>

       <h2>System Notifications</h2>
        <ul>
          {this.state.messages.map((item, i) => { return <li key={i}>{item}</li> })}
        </ul>
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
