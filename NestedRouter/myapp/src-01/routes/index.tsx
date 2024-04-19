import React from "react";
import About from "../pages/About"
import Home from "../pages/Home";
import PagesNotFound from "../pages/PagesNotFound";
import { Navigate } from "react-router-dom";

export default[
    {
    path:"/about",
    element:<About/>

},
{
path:"/home",
element:<Home/>
},
{
    path:"/",
    element:<Navigate to="/home"/>
},
{ 
    path:"*",
    element:<PagesNotFound/>

}
]