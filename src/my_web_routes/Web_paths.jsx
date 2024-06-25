import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Roots/MainRoot";
import Home from "../Home/Home";

const Web_paths = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
    

export default Web_paths;