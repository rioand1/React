import React from 'react';
import {
   AppBar,
   Toolbar,
   Typography,
  withStyles,
 } from '@material-ui/core';


import LoginButton from './LoginButton';

const styles = {
  flex: {
    flex: 1,
  },
};

const AppHeader = ({classes}) => 
     React.createElement(AppBar, {
    position: "static"
  }, React.createElement(Toolbar, null, React.createElement(Typography, {
    variant: "h6",
    color: "inherit"
  }, "My React App"), React.createElement("div", {
    className: classes.flex
  }), React.createElement(LoginButton)));

export default withStyles(styles)(AppHeader);