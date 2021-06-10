import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ModelData from './components/Model Data';
import LoginForm from './components/LoginForm';
import axios from 'axios'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModelPreviewModal from './components/ModelPreviewModal';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AddDevice from './components/AddDevice'
import InvalidURl from './components/InvalidURl'
import { LoginContext, ModeDataContext } from './helpers/LoginContext'
import { Devices } from './Api';

function App() {
  axios.defaults.baseURL = `http://163.47.115.230:30000/`;
  axios.interceptors.request.use(
    config => {
      config.headers.authorization = `${localStorage.getItem('Token')}`;
      return config;
    }
  );
  const [isLoggedIn, setLogIn] = React.useState<boolean>(false);
  const [modeltypeData, setModelTypeData] = React.useState<Devices[]>([]);

  return (
    <div className="App">
      <LoginContext.Provider value={{ isLoggedIn, setLogIn }}>
        <NavBar></NavBar>
        <Box pb={5}></Box>
        <Switch>
          <Container>
            <ModeDataContext.Provider value={{ modeltypeData, setModelTypeData }}>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={LoginForm} />
              <Route path="/modeltype" component={ModelData} />
              <Route path="/modeldata" component={ModelPreviewModal}></Route>
              <Route path="/devicemodel" component={AddDevice}></Route>
            </ModeDataContext.Provider>
          </Container>
        </Switch>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
