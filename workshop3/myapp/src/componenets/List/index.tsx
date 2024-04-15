import Todo from '../../types'
import Item from '../Item'
import './index.css'

type Props={
    todos:Todo[]
    
    onUpdateTodo:(id:string)=>void;
    onDeletById:(id:string)=>void
    
}
function List(props:Props) {
    const{todos,onUpdateTodo, onDeletById,}=props
  return (
  <div>
    <ul className='todomain'>
        {todos.map(todo=> <Item key={todo.id}{...todo} onUpdateTodo={onUpdateTodo} onDeletById={ onDeletById} />)}
       
    </ul>
  </div>
  )
}

export default List