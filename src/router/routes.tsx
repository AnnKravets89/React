import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import Cars from "../components/cars-component/Cars.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children: [
            {path: 'cars', element: <Cars/>}
        ]
    }
])
