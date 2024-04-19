import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Newsdetails from './News-details'


function News() {
  const[news,setNews]=useState([
    {id:1,title:'Noclasstmw',message:'haverest'},
    {id:2,title:'Acceptanceletter',message:'u got offer'},
    {id:3,title:'good start',message:'happyfirstday'}
  ])
  return (
  <div>
     <ul>
   
      
    {news.map(msg=><li key={msg.id}>
      <Link to={`newsdetails?id=${msg.id}&message=${msg.message}&title=${msg.title}`}>{msg.title}</Link></li>)}
       {/* <Link to={`newsdetails/${msg.id}/${msg.message}/${msg.title}`}>{msg.title}</Link></li>)} */}
    </ul>
<Outlet/>
</div>
  )
}

export default News