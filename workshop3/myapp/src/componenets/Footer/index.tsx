import React, { ChangeEvent } from 'react'
import './index.css'
import Todo from '../../types'

type Props={
  todos:Todo[],
  onUpdateNewTodo:(e:ChangeEvent<HTMLInputElement>)=>void
  onDeleteCheckedTodos:()=>void

}
function Footer(props:Props){ 
const{todos,onUpdateNewTodo,onDeleteCheckedTodos}=props



const deleteAllChecked=()=>{
  onDeleteCheckedTodos()
}
  return (
    <div className="todo-footer">
    <label>
      <input type="checkbox" onChange={onUpdateNewTodo} checked= {todos.filter(todo => todo.done).length === todos.length && todos.length !== 0}/>
    </label>
    <span>
      <span >Finished  {todos.filter(todo=>todo.done).length} </span>/total {todos.length}
    </span>
    <button className="btn btn-danger"  onClick={deleteAllChecked}> Delete Finished Tasks</button>
  </div>
  )
}

export default Footer