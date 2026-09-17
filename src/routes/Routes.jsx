
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Movies from "../components/Movies";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement: <NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>
            },{
                path:'movies',
                element:<Movies/>
            }
        ]
    }
])

export default router;