import React from 'react';
import {Switch, Route} from 'react-router';
import LogIn from './Components/LogIn';
import Dashboard from './Components/Dashboard';

const Router = () => {
  return(
    <Switch>
      <Route exact path="/" component={LogIn}/>
      <Route path="/dash" component={Dashboard}/>
    </Switch>
  )
}

export default Router; 