import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import ContactMe from "../Components/ContactMe/ContactMe";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'projects',
                element:<Projects></Projects>
            },
            {
                path:'contact',
                element:<ContactMe></ContactMe>
            }
        ]
    },
]);