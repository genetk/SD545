import React, { useState } from 'react'

import logo from "../images/logo.jpeg"
import Header from '../components/Header/Header'
import Songs from '../components/Songs/Songs'
import Playlist from '../components/Playlist/Playlist'
function Welcome() {

  return (
    <div>
      <Header/>
      <Songs/>
      <Playlist/>
    </div>
  )
}

export default Welcome