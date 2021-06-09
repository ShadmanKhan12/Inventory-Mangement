import axios from 'axios'
import { Interface } from 'readline';
import React, { useState,useEffect   } from 'react'
import Device from './components/Device';


export type Devices = {
    Id: string,
    BrandId: string,
    Name: string,
    TypeId: number,
    Comment: string,
    Description: string


}

export type ModelType = {
    Id: string,
    DataType: string,
    Brand: string,
    Name: string,
    Model: number,
    DisplayName: string,
    Description: string,
    Status: string,
    GroupId : string,
    ProtocolOrder: string


}

export type DeviceType ={
    Id: number,
    Description : string
}




export const logInApi = async(email: string,password:string) =>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email,password })
    };
    const url= `http://163.47.115.230:30000/api/login`;
    const data = await(await (fetch(url,requestOptions))).json();
    localStorage.setItem('Token',data.access_token);
    console.log(data);
     return data;

}

export const getApi = async() =>{
   
    const url= `http://163.47.115.230:30000/api/users`;
    const result = await axios.get(url);
    console.log(result);
    

}

export const getAApi = async() => {
   
    const url = `http://163.47.115.230:30000/api/overview/modeltype`;
    const result = await axios.get<Devices[]>(url);
    return result.data;
}

export const getModelData = async(brandId: string,modelId : string) => {
   
    const url = `http://163.47.115.230:30000/api/overview/modeldata/${brandId}/${modelId}`;
    const result = await axios.get<ModelType[]>(url);
    return result.data;
}

export const getDevices = async() => {
   
    const url = `http://163.47.115.230:30000/api/devicetype?limit=40&page=1`;
    const result = await axios.get<DeviceType[]>(url);
    return result.data;
}

export const addDeviceApi = async(BrandId: string,Name : string,TypeId: number, Comment: string) => {
   
    const url = `http://163.47.115.230:30000/api/devicemodel`;
    
    const result = await (await axios.post(url,{BrandId,Name,TypeId,Comment}))
    return result.data;
}




// export default function Api() {
    
// const [devices , loadDevices] = React.useState<Devices[]>([]);
//     useEffect(() => {
//         getAApi();
//         return () => {
            
//         }
//     }, [])
//     const getAApi = async() => {
   
//         const url = `http://163.47.115.230:30000/api/overview/modeltype`;
//         const result = await axios.get(url);
//         console.log('api level',result.data)
//         loadDevices(result.data);
//         console.log('Tsssest',devices.length);
//     }
//     return (
//         <div>
//             <p>asfsfsf</p>
//             {devices.map(device=>{
//                 <li>{devices.length }</li>
//             })}
//         </div>
//     )
// }
