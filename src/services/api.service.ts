import  axios from "axios";
import type {ILoginData} from "../models/LoginData.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";
import type {ProductsResponseType} from "../models/product-model/IProductsResponse.ts";
import type {IProduct} from "../models/product-model/IProduct.ts";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }

    return requestObject;
}) // перехватує запит щоб дістати потрібний токен

export const login = async ({username, password, expiresInMins}: ILoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
} // логінить юзера

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<ProductsResponseType>('/products');
    return data.products;
} // запит на ресурс з продуктами

export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {refreshToken, accessToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    console.log(refreshToken);
    console.log(accessToken);

    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));

} // якщо дія токена закінченна - робимо запит на його відновлення

