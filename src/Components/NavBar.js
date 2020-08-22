import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
  return (
    <AppBar position="static">
      <ToolBar>
        <Typography variant="subtitle1" color="inherit">My Music App</Typography>
      </ToolBar>
    </AppBar>
  )
}

//add logon information to the navbar? 

export default NavBar;