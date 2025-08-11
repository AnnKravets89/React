import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {routes} from "./router/rourters.tsx";


createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>);
