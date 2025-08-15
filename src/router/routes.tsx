import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CreateCarPage from "../pages/CreateCarPage.tsx";
import HomePage from "../pages/HomePage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarPage/>},
        ]
    }
])
