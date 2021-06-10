import React ,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import ModelData from './components/Model Data';
import Form from './components/Form';
import axios from 'axios'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModelPreviewModal from './components/ModelPreviewModal';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AddDevice from './components/AddDevice'
import InvalidURl from './components/InvalidURl'
import {LoginContext,ModeDataContext} from './helpers/LoginContext'
import { Devices } from './Api';

function App() {
  axios.defaults.baseURL = `http://163.47.115.230:30000/`;
  axios.interceptors.request.use(
    config =>{
      console.log("axios",config);
      config.headers.authorization = `${localStorage.getItem('Token')}`;
      return config;
    }
  );
  axios.interceptors.response.use(
    (res) => {
    
       return res;
    },
    (err) => {
      

       return Promise.reject(err);
    }
 );

  const [isLoggedIn,setLogIn] = React.useState<boolean>(false);
  const [modeltypeData,setModelTypeData] = React.useState<Devices[]>([]);
  console.log("checking fun",modeltypeData);

  return (
    <div className="App">
      <LoginContext.Provider value={{isLoggedIn,setLogIn}}>
      <Header></Header>
      <Box pb={5}></Box>
      <Switch>
        <Container>
      
        <ModeDataContext.Provider value={{modeltypeData,setModelTypeData}}>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Form} />
      <Route path="/modeltype" component={ModelData} />
      <Route path="/modeldata" component={ModelPreviewModal}></Route>
      <Route path="/devicemodel" component={AddDevice}></Route>
      </ModeDataContext.Provider>
      {/* <Route path=""  component={InvalidURl} /> */}
     {/* <Header/> */}
     {/* <Device></Device>
     <Form></Form> */}
   
     </Container>
     </Switch>
     </LoginContext.Provider>
    </div>
  );
}

export default App;
