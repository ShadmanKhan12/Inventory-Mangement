import React, { Component ,useContext } from 'react'
import {logInApi} from '../Api'
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {LoginContext} from '../helpers/LoginContext'


    

export default function Form() {

  const [email,setUserEmail] = React.useState<string>("");
  const [password,setPassword] = React.useState<string>("");

  const {isLoggedIn,setLogIn} = useContext(LoginContext);
 const handleSubmit = (event:any) =>{
    event.preventDefault();
    logInApi(email,password).then(res=>{
        if(res.user){
           setLogIn(true)
           console.log("login succsessfull")
        }
        else{
            alert('Error');
        }
    })
}
  return (
    <div>
      <Container component="main" maxWidth="xs">
                <Box pt={5}></Box>
            <CssBaseline />
            <div >
              
              <Typography component="h1" variant="h5">
                Log in
              </Typography>
              <form noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={e => setUserEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  value="Submit"
                >
                  Log In
                </Button>
              </form>
            </div>
          </Container>
    </div>
  )
}
