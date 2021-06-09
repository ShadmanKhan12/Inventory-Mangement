import React, { useEffect, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { addDeviceApi, DeviceType, getDevices, logInApi } from '../Api'
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import { Devices } from '../Api';
import MenuItem from '@material-ui/core/MenuItem';
import { ModeDataContext } from '../helpers/LoginContext'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function AddDevice() {

    useEffect(() => {
        getDevices().then(response => {
            const items = response.flat().map(item => item.Id).filter(Number);
            setDeviceIds(items);
            const data = modeltypeData.map((item:Devices)=>item.BrandId).filter((item: any, i:any, ar:any) => ar.indexOf(item) === i);
            setTempBrandIds(data);
        })

      
        return () => {

        }
    }, [])

    const classes = useStyles();
    const [brandId, setBrandId] = React.useState("");
    const [name, setName] = React.useState("");
    const [typeId, setTypeId] = React.useState(0);
    const [comment, setComment] = React.useState("");
    const [deviceIds, setDeviceIds] = React.useState<number[]>([]);
    const [tempBrandIds,setTempBrandIds] = React.useState([]);
    const { modeltypeData, setModelTypeData } = useContext(ModeDataContext);
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        addDeviceApi(brandId, name, typeId, comment).then(response => {
            console.log(response);
        })
    }
    const handleTypeIdChange = (evt: any) => {
        setTypeId(evt.target.value)
    }
    const handleBrandIdChange = (evt: any) => {
        setBrandId(evt.target.value)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box pt={5}></Box>
            <CssBaseline />
            <div >

                <Typography component="h1" variant="h5">
                    Add Device
  </Typography>
                <form noValidate onSubmit={handleSubmit} >
                    <TextField
                        fullWidth
                        select
                        label="Product Brand Id"
                        value={brandId}
                        helperText="Please select your Product Brand Id"
                        variant="outlined"
                        onChange={handleBrandIdChange}
                    >
                        {tempBrandIds.map((item: any) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Product Name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        defaultValue="0"
                        select
                        label="Device Type Id"
                        value={typeId}
                        helperText="Please select your Device Type Id"
                        variant="outlined"
                        onChange={handleTypeIdChange}
                    >
                        {deviceIds.map((option: number) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="comment"
                        label="Comment"
                        type="text"
                        id="comment"
                        autoComplete="current-password"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <Box pb={3}></Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        value="Submit"
                    >
                        Add
    </Button>
                </form>
            </div>
        </Container>
    );
}
