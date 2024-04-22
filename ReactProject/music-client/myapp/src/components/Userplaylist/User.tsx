import React from 'react'

function User() {
    const userPlaylists = localStorage.getItem('accessToken') || '[]';
    console.log(userPlaylists)

  return (
    <div>User</div>
  )
}

export default User