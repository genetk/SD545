import React from 'react'
import { useParams } from 'react-router-dom'

function Messagedetails() {
  const{id,title,message}=useParams()
  return (
    <div>
      <p>messageId:{id} </p>
      <p>messagetitle: {title}</p>
      <p>message content:{message} </p></div>
  )
}

export default Messagedetails