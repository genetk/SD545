import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
    <ul className="nav nav-pills mb-3 border-bottom">
    <li className="nav-item">
        <NavLink className="nav-link active" to="news">News</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link"to="message">Messages</NavLink> 
    </li>
</ul>
<div>
    <Outlet/>
</div>
</div>
  )
}

export default Home