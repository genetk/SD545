import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Newsdetails() {
    // const{id,title,message}=useParams()
    const[searchParams,setSearchParams]=useSearchParams()
  return (
    <div>
      {/* <p>newsId:{id} </p>
      <p>newstitle: {title}</p>
      <p>newscontent:{message} </p> */}
      <p>newsId:{searchParams.get('id')} </p>
      <p>newstitle: {searchParams.get("title")}</p>
      <p>newscontent:{searchParams.get("message")} </p>
    </div>
  )
}

export default Newsdetails