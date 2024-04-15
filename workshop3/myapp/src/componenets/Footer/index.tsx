import React, { ChangeEvent } from 'react'
import './index.css'
import Todo from '../../types'

type Props={
  todos:Todo[],
  onUpdateNewTodo:(checked:boolean)=>void
  onDeleteCheckedTodos:()=>void

}
function Footer(props:Props){ 
const{todos,onUpdateNewTodo,onDeleteCheckedTodos}=props

const checkAllTodo=(e:ChangeEvent<HTMLInputElement>)=>{
  const checked = e.target.checked
  onUpdateNewTodo(checked)
 
 }

const deleteAllChecked=()=>{
  if(window.confirm("areyousure?")){
  onDeleteCheckedTodos()
  }
}
  return (
    <div className="todo-footer">
    <label>
      <input type="checkbox" onChange={checkAllTodo} checked= {todos.filter(todo => todo.done).length === todos.length && todos.length !== 0}/>
    </label>
    <span>
      <span >Finished  {todos.filter(todo=>todo.done).length} </span>/total {todos.length}
    </span>
    <button className="btn btn-danger"  onClick={deleteAllChecked}> Delete Finished Tasks</button>
  </div>
  )
}

export default Footer