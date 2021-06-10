import axios from 'axios'


// todo put these types in respective namespace

export type Devices = {
    Id: string,
    BrandId: string,
    Name: string,
    TypeId: number,
    Comment: string,
    Description: string
}

export type ModelData = {
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

export const modelTypeApi = async() => {
    const url = `api/overview/modeltype`;
    const result = await axios.get<Devices[]>(url);
    return result.data;
}

export const getModelDataApi = async(brandId: string,modelId : string) => {
    const url = `api/overview/modeldata/${brandId}/${modelId}`;
    const result = await axios.get<ModelData[]>(url);
    return result.data;
}

export const getDevicesApi = async() => {
    const url = `api/devicetype?limit=40&page=1`;
    const result = await axios.get<DeviceType[]>(url);
    return result.data;
}

export const addDeviceApi = async(BrandId: string,Name : string,TypeId: number, Comment: string) => {
    const url = `api/devicemodel`;
    const result = await (await axios.post(url,{BrandId,Name,TypeId,Comment}))
    return result.data;
}
