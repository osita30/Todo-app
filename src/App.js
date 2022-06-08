import './App.css';
import React,{useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from "./TodoList";
import "tachyons"
const App = () =>{
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos([todo,...todos]);
  }
  return ( 
    <div className='tc' pa3 b--green bg-light-blue>
      <h1> Todo App</h1>
      <TodoForm addTodo = {addTodo} />
      <TodoList  todos ={todos}/>
    </div>
    
  );
}

export default App;
