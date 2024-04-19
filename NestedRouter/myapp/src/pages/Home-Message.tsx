import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Message() {
  const[messages,setMessage]=useState([
    {id:1,title:"sd545",message:"React"},
    {id:2,title:"sd450",message:"Async"},
    {id:3,title:"sd545",message:"Angular"}

  ]
)
  return (
    <div>
      <ul>
       {messages.map(msg=><li>
        <Link to={`details/${msg.id}/${msg.message}/${msg.title}`}>{msg.title} </Link></li>)}
      </ul>
      <div>
      <Outlet/>
      </div>
    </div>
   
  );
}

export default Message;
