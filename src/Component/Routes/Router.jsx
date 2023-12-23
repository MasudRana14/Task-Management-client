import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./LayOut/MainLayout";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Contact from "../../Pages/Contact/Contact";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import DashBoard from "./DashBoard/DashBoard";
import AllTask from "./DashBoard/Pages/AllTask/AllTask";
import CreateTask from "./DashBoard/CreateTask/CreateTask";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ],

    },
    // DashBoard
    {
        path:"/DashBoard",
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:"task",
                element:<AllTask></AllTask>
            },
            {
                path:"createTask",
                element:<CreateTask></CreateTask>
            }
        ]
    }

])




export default Router;