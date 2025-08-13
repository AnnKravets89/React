import axios from "axios";
import type {IUser} from "../models/IUser.ts";



 const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-Type': 'application/json'},
})

axiosInstance.interceptors.request.use((request) => {
    console.log(request);

    request.headers.set('XXX', 'XXXX');
    console.log(request.method);

    return request;
})

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

export const saveUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post('/users', user);
    return data;
}

// axiosInstance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
// })

// fetch('YOURURL', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     key1: 'value1',
//     key2: 'value2',
//   })
// })
