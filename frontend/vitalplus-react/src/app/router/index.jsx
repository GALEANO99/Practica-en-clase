import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@/shared/layout/MainLayout";

const router = createBrowserRouter([
{ 
    path: "/",
    element:<MainLayout />,
    children:[
        { 
            index: true,
            element: <h1 className=" p-4" >Inicio</h1>
        },
        {
            path:"cursos",
            index: true,
            element: <h1 className=" p-4" >Inicio</h1>
        },
        {
            path:"contacto",
            index: true,
            element: <h1 className=" p-4" >Inicio</h1>
        },
        {
            path:"videos",
            index: true,
            element: <h1 className=" p-4" >Inicio</h1>
        }
    ]
}
])

export default router;