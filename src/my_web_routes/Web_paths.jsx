import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Roots/MainRoot";
import Home from "../Home/Home";
import Login from "../Login";
import Register from "../Register";
import PrivateRoute from "../PrivateRoute";
import AddTourist from "../AddTourist";
import ViewDetails from "../ViewDetails";
import ViewCountry from "../Home/ViewCountry";
import AllTourSpot from "../AllTourSpot";
import MyTourList from "../MyTourList";
import EditTourInfo from "../EditTourInfo";

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
                loader: ({params})=> fetch(`https://server-side-rkvd32tt1-samios-projects.vercel.app/travel_info/${params.id}`)
            },
            {
                path: '/countryDetails/:country',
                element: <PrivateRoute><ViewCountry></ViewCountry></PrivateRoute>,
                loader: ({params})=> fetch(`https://server-side-rkvd32tt1-samios-projects.vercel.app/country_info/${params.country}`)
            },
            {
                path: '/allTourSpot',
                element: <AllTourSpot></AllTourSpot>,
                loader: ()=> fetch('https://server-side-rkvd32tt1-samios-projects.vercel.app/travel_info')
            },
            {
                path: '/myTourList',
                element: <PrivateRoute><MyTourList></MyTourList></PrivateRoute>
            },
            {
                path: '/edit_tour/:id',
                element: <PrivateRoute><EditTourInfo></EditTourInfo></PrivateRoute>,
                loader: ({params})=> fetch(`https://server-side-rkvd32tt1-samios-projects.vercel.app/travel_info/${params.id}`)
            }
        ]
    }
])
    

export default Web_paths;