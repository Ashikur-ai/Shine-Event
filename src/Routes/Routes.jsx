import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import LatestEvent from "../pages/LatestEvent/LatestEvent";
import Meeting from "../pages/Meeting/Meeting";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/data.json')
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
                path: '/services',
                element: <PrivateRoutes>
                    <Services></Services>
                </PrivateRoutes>,
                loader: ()=>fetch('/data.json')
            },
            {
                path: '/:id',
                element: <PrivateRoutes>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoutes>,
                loader: ()=>fetch('/data.json')
            },
            {
                path: '/latestEvent',
                element: <PrivateRoutes>
                    <LatestEvent></LatestEvent>
                </PrivateRoutes>
            },
            {
                path: '/meeting',
                element: <PrivateRoutes>
                    <Meeting></Meeting>
                </PrivateRoutes>
            }
        ]
    },
]);



export default Routes;