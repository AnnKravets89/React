import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import PostsJsonPage from "../pages/PostsJsonPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersJsonPage from "../pages/UsersJsonPage.tsx";
import CommentsJsonPage from "../pages/CommentsJsonPage.tsx";
import UsersDummyPage from "../pages/UsersDummyPage.tsx";
import PostsDummyPage from "../pages/PostsDummyPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users/jsonplaceholder', element:<UsersJsonPage/>},
            {path: 'posts/jsonplaceholder', element:<PostsJsonPage/>},
            {path: 'comments/jsonplaceholder', element:<CommentsJsonPage/>},
            {path: 'users/dummyjson', element:<UsersDummyPage/>},
            {path: 'posts/dummyjson', element:<PostsDummyPage/>},
        ]}
])
