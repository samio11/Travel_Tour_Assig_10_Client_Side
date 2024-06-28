import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Roots/MainRoot";
import Home from "../Home/Home";
import Login from "../Login";
import Register from "../Register";
import PrivateRoute from "../PrivateRoute";
import AddTourist from "../AddTourist";
import ViewDetails from "../ViewDetails";

const Web_paths = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addTour',
                element: <PrivateRoute><AddTourist></AddTourist></PrivateRoute>
            },
            {
                path: '/viewDetail/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/travel_info/${params.id}`)
            }
        ]
    }
])
    

export default Web_paths;