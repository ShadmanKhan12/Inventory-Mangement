import React, { Component, useContext, useEffect } from 'react'
import { logInApi } from '../Api'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { LoginContext } from '../helpers/LoginContext'




export default function LoginForm() {

  const [email, setUserEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const { isLoggedIn, setLogIn } = useContext(LoginContext);

  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/modeltype");
    }
    return () => {
    }
  }, [isLoggedIn])

  const handleSubmit = (event: any) => {

    event.preventDefault();
    logInApi(email, password).then(res => {
      if (res) {
        setLogIn(true)
      }
      else {
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
            <Box p={1}></Box>
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
