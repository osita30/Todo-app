import React,{useState} from "react";
import {v4 as uuidv4} from "uuid";

const TodoForm =({addTodo}) =>{
    const[todo, setTodo]=  useState({
        id:"",
        task:"",
        completed:false
    })
    const handleTaskinputChange=(e) =>{
        setTodo({...todo, task: e.target.value})
    }
    const handlesubmit =(e) =>{
        e.preventDefault();
        if (todo.task.trim()){
            addTodo({...todo, id: uuidv4 });
            //reset the input
            setTodo({...todo, task:""})

        }
    }
    return(
        <form onSubmit={handlesubmit}>
         <input 
         name ="task"
         type="text"
         value ={todo.task}

         onChange ={handleTaskinputChange}
          />
         <button type="submit"/>
        </form>
    )
}
export default TodoForm