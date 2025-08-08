import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    // {path: '/', element: <MainLayout/>},
    // {path: '/a', element: <div>layout a</div>},
    // {path: '/b', element: <div>layout b</div>}
]);


createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
