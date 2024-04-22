import React, { useState } from 'react'



import Songs from '../components/Songs/Songs'
import Playlist from '../components/Playlist/Playlist'


import Song from '../types/songs.types'

function Welcome() {
const[songs,setsongs]=useState<Song[]>([])



return (
    <div>
    
      <Songs/>
      <Playlist/>
     
    </div>
  )
}

export default Welcome