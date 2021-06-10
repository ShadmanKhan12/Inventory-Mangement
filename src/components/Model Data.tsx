
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { modelTypeApi } from '../Api';
import { Devices, ModelData } from '../Api';
import React, { useState, useEffect, useContext } from 'react';
import { TableRow } from '@material-ui/core';
import { getModelDataApi } from '../Api';
import { ModelDataContext } from '../helpers/ModelDataContext';
import Pagination from './Paginate';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ModelDataComp() {
  const classes = useStyles();
  const [isClicked, setClickValue] = React.useState(false);
  const [modelType, setModelType] = React.useState<ModelData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(40);

  const { modeltypeData, setModelTypeData } = useContext(ModelDataContext);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = modeltypeData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: any) => {

    setCurrentPage(pageNumber);
  } 

  useEffect(() => {

    modelTypeApi().then((modelTypeData => {
      setModelTypeData(modelTypeData)
    }));

    return () => {
    }
  }, [isClicked])

  const clickedData = (brandId: string, modelId: string) => {
    if (brandId && modelId) {
      getModelDataApi(brandId, modelId).then((response => {
        if (response.length > 0) {
          setModelType(response);
          setClickValue(true);
        }
        else {
          setClickValue(false);
        }
      }))
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
            {currentItems.map((item: Devices) => (
              <TableRow key={item.Id}>
                <TableCell component="th"  onClick={() => {
                  clickedData(item.BrandId, item.Name)
                }}>
                  {item.Name}
                </TableCell>
                <TableCell align="right">{item.BrandId}</TableCell>
                <TableCell align="right">{item.TypeId}</TableCell>
                <TableCell align="right">{item.Comment}</TableCell>
                <TableCell align="right">{item.Description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination itemsPerPage={itemsPerPage} totalPosts={modeltypeData.length} paginate={paginate}></Pagination>
    </div>
  )
}
