import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory, NavLink } from 'react-router-dom';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import {LoginContext} from '../helpers/LoginContext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    zIndex: 22,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const {isLoggedIn,setLogIn} = useContext(LoginContext);
console.log("islofff",isLoggedIn)

 const logout= () =>{
   localStorage.removeItem('Token');
   setLogIn(false);
 }
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
        {isLoggedIn && 
        <Link to="/modeltype">
            <Button variant="contained" color="primary">
              Model Data
              </Button>
          </Link>
          }
          {isLoggedIn && 
          <Link to="/devicemodel">
            <Button variant="contained" color="primary">
              Add Device
              </Button>
          </Link>
           }
          <Typography variant="h6" className={classes.title}>
            Inventory Management
          </Typography>
          {!isLoggedIn && 
          <Link to="/login">
            <Button variant="contained" color="primary">
              Login
              </Button>
          </Link>
          }
          {isLoggedIn && 
          <Button variant="contained" color="primary" onClick={()=>{
            logout()
          }}>
              Log Out
              </Button>
              }
        </Toolbar>
      </AppBar>
      <Box pb={5}>

      </Box>
    </div>
  );
}