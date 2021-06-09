import axios from 'axios'

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
    const url= `api/login`;
    const result = await (await axios.post(url,{email,password}));
    localStorage.setItem('Token',result.data.access_token);
    return result;
}

export const getApi = async() =>{
    const url= `api/users`;
    const result = await axios.get(url);
    console.log(result);
}

export const getAApi = async() => {
   
    const url = `api/overview/modeltype`;
    const result = await axios.get<Devices[]>(url);
    return result.data;
}

export const getModelData = async(brandId: string,modelId : string) => {
   
    const url = `api/overview/modeldata/${brandId}/${modelId}`;
    const result = await axios.get<ModelType[]>(url);
    return result.data;
}

export const getDevices = async() => {
   
    const url = `api/devicetype?limit=40&page=1`;
    const result = await axios.get<DeviceType[]>(url);
    return result.data;
}

export const addDeviceApi = async(BrandId: string,Name : string,TypeId: number, Comment: string) => {
   
    const url = `api/devicemodel`;
    
    const result = await (await axios.post(url,{BrandId,Name,TypeId,Comment}))
    return result.data;
}
