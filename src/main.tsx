import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import MainLayout from "./layouts/MainLayout.tsx";
// import APage from "./pages/APage.tsx";
// import BPage from "./pages/BPage.tsx";
// import HomePage from "./pages/HomePage.tsx";

// const router = createBrowserRouter([
//     {
//         path: '/', element: <MainLayout/>,
//         children:
//             [
//             // /a
//                 { path: '', element: <HomePage/>},
//                 { path: 'a', element: <APage/>},
//                 { path: 'b', element: <BPage/>, children: [
//                         // /b/1
//                         {path: '1', element: <div>1</div>},
//                         {path: '2', element: <div>2</div>},
//                         {path: '3', element: <div>3</div>},
//                     ]
//                 },
//
//         ]
//     },
//
// ]);


createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''} element={<HomePage/>}/>
                <Route path={'a'} element={<APage/>}/>
                <Route path={'b'} element={<BPage/>}>
                    <Route path={'1'} element={<div>1</div>}/>
                    <Route path={'2'} element={<div>2</div>}/>
                    <Route path={'3'} element={<div>3</div>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>)
