import React, { useState } from 'react'

import logo from "../images/logo.jpeg"
import Header from '../components/Header/Header'
import Songs from '../components/Songs/Songs'
import Playlist from '../components/Playlist/Playlist'
import Shuffle from '../components/AudioPlayer/Shuffle'
import User from '../components/Userplaylist/User'
function Welcome() {

  return (
    <div>
      <Header/>
      <Songs/>
      <Playlist/>
      <User/>
    </div>
  )
}

export default Welcome