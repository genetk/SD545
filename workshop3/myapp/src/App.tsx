import Header from './componenets/Header';
import List from './componenets/List';
import Footer from './componenets/Footer';

import './App.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Todo from './types';


function App() {
  const [todos,setTodos]=useState<Todo[]>([])
  const[checked,setChecked]=useState(false)


  useEffect(()=>{
   const  getToDo= async ()=>{
    const response =await fetch('http://localhost:9000/todos')
    const data =await response.json()
    setTodos(data)
    

   }
   getToDo()
  },[])

  const addNewToDo=(newToDo:Todo)=>{
    setTodos([...todos,newToDo])
  }
  const updateTodo=(id:string)=>{
    const newTodo=todos.map(todo=>
      todo.id===id?({...todo,done:!todo.done}):todo);
    
    setTodos(newTodo)

  }
  const deleteToDoById=(id:string)=>{
   
   const deleted =todos.filter(todo=>todo.id!==id)
   setTodos(deleted)
  }
  const upDateAll=(checked:boolean)=>{
    const updated=(todos.map(todo=>({...todo,done:checked
    })))
    setTodos(updated)
  }
 

  const deleteCheckedTodos = () => {
    setTodos(todos.filter(todo => !todo.done));
   
  };

  return (
  
    <div>
      <div >
  <div className="todo-container">
    <div className="todo-wrap">
   
     <Header onAddNewToDo={addNewToDo}/>
    
     <List todos={todos}  onUpdateTodo={updateTodo} onDeletById={deleteToDoById}/>
     <Footer todos={todos} onUpdateNewTodo={upDateAll} onDeleteCheckedTodos={deleteCheckedTodos}/>
   
     
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
