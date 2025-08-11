import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import CartsPage from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id/carts', element: <CartsPage/>}

        ]}
])
