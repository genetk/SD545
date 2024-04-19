import About from "../pages/About";
import Home from "../pages/Home";
import PagesNotFound from "../pages/PagesNotFound";
import News from "../pages/Home-News";
import Message from "../pages/Home-Message";
import Messagedetails from "../pages/Message-details";

import { Navigate } from "react-router-dom";
import Newsdetails from "../pages/News-details";

export default[
    {
    path:"/about",
    element:<About/>,
    
},
{
path:"/home",
element:<Home/>,
children:[
    {
    path:"news",
    element:<News/>,
    children:[
        {
        // path:"newsdetails/:id/:message/:title",
        path:"newsdetails",
        element:<Newsdetails/>
        }
    ]
},
{
    path:"message",
    element:<Message/>,
    children:[
        {
          path:"details/:id/:title/:message",
          element:<Messagedetails/>
        }
    ]
}
]
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