import  axios from "axios";
import type {ILoginData} from "../models/LoginData.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/product-model/IProduct.ts";
import type {IProductResponse} from "../models/product-model/IProductResponse.ts";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

const retriveLocalStorage = <T,> () => {

}


axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'Get') {
        requestObject.headers.Authorization = 'Bearer' + JSON.parse(localStorage.getItem('user'))
    }

    return value;
})

export const login = async ({username, password, expiresInMins}: ILoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductResponse>('/products');
    return products;
}
