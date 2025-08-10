import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/placeholder-pages/HomePage.tsx";
import UsersJsonPage from "../pages/placeholder-pages/UsersJsonPage.tsx";
import PostsJsonPage from "../pages/placeholder-pages/PostsJsonPage.tsx";
import CommentsJsonPage from "../pages/placeholder-pages/CommentsJsonPage.tsx";
import UsersDummyPage from "../pages/dummy-pages/UsersDummyPage.tsx";
import PostsDummyPage from "../pages/dummy-pages/PostsDummyPage.tsx";



export const routes = createBrowserRouter([
    {
        path: '', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users/jsonplaceholder', element: <UsersJsonPage/>},
            {path: 'posts/jsonplaceholder', element: <PostsJsonPage/>},
            {path: 'comments/jsonplaceholder', element: <CommentsJsonPage/>},
            {path: 'users/dummyjson', element: <UsersDummyPage/>},
            {path: 'posts/dummyjson', element: <PostsDummyPage/>},
        ]
    }
])

