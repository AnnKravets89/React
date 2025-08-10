import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes} from "react-router";
import Layout from "./layouts/Layout.tsx";
import { Route } from 'react-router';
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
// import {RouterProvider} from "react-router-dom";
// import {routes} from "./router/routers.tsx";


// createRoot(document.getElementById('root')!)
//     .render(<RouterProvider router={routes}/>);

createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={''} element={<HomePage/>}/>
                        <Route path={'users'} element={<UsersPage/>}/>
                        <Route path={'posts'} element={<PostsPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                        <Route path={'products'} element={<ProductsPage/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>)
