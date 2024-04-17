import React from 'react'
import './index.css'
import { User } from '../types/user'
import SearchResponse from '../types/search.type'
// type Props={
//     search:SearchResponse
// }
function List(props:SearchResponse) {
    
    // const{search:{isFirst,isLoading,isError,user}}=props
    const{isFirst,isLoading,isError,user}=props
  return (
  <div>
    {isFirst?<h2>PleaseEnter keyword to start</h2>:
           isLoading?<h2>Please wait </h2>:
           isError?<h2>whoops!! try later</h2>:
        
    <div className="row" > 
    {user.map(user=>( <div className="card"  key={user.id}>
       <a href={user.html_url} target= "_blank">
        <img src={user.avatar_url}style={{width:'100px'}}/>
      </a> 
      <p className="card-text">{user.login}</p>
      </div> ))}
      </div>}
      </div>
 
    )
  }
export default List