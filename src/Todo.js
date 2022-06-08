import React from "react";

const Todo = ({todo}) =>{
    return(
        <div>
         <input type ="checkbox"/>
         <li>{todo.task}</li>
         {/* <button>add todo</button>  */}
        </div>
    )
}
export default Todo;