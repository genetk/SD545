import React, { ChangeEvent, } from 'react'
import './index.css'
import Todo from '../../types'
type Props={
id:string,
name:string,
done:boolean

onUpdateTodo:(id:string)=>void
onDeletById:(id:string)=>void
}

function Item(props:Props) {
    const{name,id,done,onUpdateTodo, onDeletById}=props;
  
   
const changeHandler=()=>{
  onUpdateTodo(id)  

}
const DeleteById=()=>{
  onDeletById(id)
}
    
  return (
    <div>
       <div className="todo-wrap">
      <li>
      <label>
        <input type="checkbox" checked={done} onChange={changeHandler}/>
        <span>{name}</span>
      </label>
      <button className="btn btn-danger"  onClick={DeleteById}>Delete</button>
    </li>
    </div>
    </div>  
   )
}
 
   
   
 
export default Item