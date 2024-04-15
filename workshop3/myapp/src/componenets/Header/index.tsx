import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { nanoid } from 'nanoid'
import './index.css'
import Todo from '../../types'


type Props={
  onAddNewToDo:(todo:Todo)=>void
}
function Header(prop:Props) {
  const{onAddNewToDo}=prop
  const[input,setInput]=useState('')

 const handlechange=(e:ChangeEvent<HTMLInputElement>)=>{
  setInput(e.target.value)
 }
 const addToDo=(e:KeyboardEvent<HTMLInputElement>)=>{
    const value=e.currentTarget.value
    if(value.trim()){
      if(e.key==='Enter'){
        onAddNewToDo({
          id:nanoid(),
          name:value,
          done:false
        })

      }
    }else
    alert('task cant be empty')
     
      }
 
  return (
    <div className="todo-header">
        <input type="text" placeholder="Enter task name" onKeyUp={addToDo} onChange={handlechange}/>
      </div>
  )

  }
export default Header