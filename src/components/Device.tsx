
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import {getAApi, getApi} from '../Api'
import {Devices, ModelType} from '../Api'
import React, { useState,useEffect,useContext  } from 'react'
import { TableRow } from '@material-ui/core';
import {getModelData} from '../Api'
import { Link, useHistory } from 'react-router-dom';
import ModelPreviewModal from './ModelPreviewModal';
import {ModeDataContext} from '../helpers/LoginContext'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Device() {
  const history = useHistory();
  const classes = useStyles();
  const [isClicked,setClickValue] = React.useState(false);
  const [modelType,setModelType] = React.useState<ModelType[]>([]);
  
  const {modeltypeData,setModelTypeData} = useContext(ModeDataContext);
  useEffect(() => {

    getAApi().then((response=>{
      setModelTypeData(response)
      console.log("devices",modeltypeData);
      console.log(response);
    }));
    
    return () => {
      
    }
  }, [isClicked])
  // getModelData(brandId,modelId).then((response=>{
  //   console.log('testtt',response);
  // }))

  const clickedData = (brandId : string,modelId: string) =>{
    if(brandId && modelId){
      getModelData(brandId,modelId).then((response=>{
        if(response.length>0){
          setModelType(response);
          setClickValue(true);
          console.log("modeldata",response);
        }
        else{
          setClickValue(false);
          console.log("empty array")
        }
        
      }))
     
      // history.push('/Test');
      // window.history.pushState("sdsdsd","ssdsdsd","/modelssss");
    }
   
  }
  
  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">BrandId</TableCell>
            <TableCell align="right">TypeId</TableCell>
            <TableCell align="right">Comment</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modeltypeData.map((item : Devices) => (
            <TableRow key={item.Id}>
              <TableCell component="th" scope="device" onClick={()=>{
                clickedData(item.BrandId,item.Name)
              }}>
                {item.Name}
              </TableCell>
              
              <TableCell align="right" 
              >{item.BrandId}</TableCell>
              
              <TableCell align="right">{item.TypeId}</TableCell>
              <TableCell align="right">{item.Comment}</TableCell>
              <TableCell align="right">{item.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* {isClicked && <ModelPreviewModal {...modelType}></ModelPreviewModal>} */}
      {/* <p>
        {modelType.map((item=>
          <ModelPreviewModal Name={item.Name} Brand={item.Brand}></ModelPreviewModal>))}
      </p> */}
  </div>
  )
}
