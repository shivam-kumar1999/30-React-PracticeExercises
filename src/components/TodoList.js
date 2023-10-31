import React, { useState } from 'react'

const TodoList = () => {

    const [input, setInput]=useState("");
    const [todos, setTodos]= useState([]);

    function addTodo(){

        if(input.trim() !== ''){
             setTodos([...todos, input])
        }
    }


function removeTodo(index){
      const updatedTodos = todos.filter((_,i)=> i!==index);
      setTodos(updatedTodos)
}
   

  return (

    <div>
        <input type="text"  onChange={(event)=> setInput(event.target.value)}/>

        <button onClick={addTodo}>add</button>

        <ul>
            {todos.map((todo , index) => (
                 <li key={index} >  {todo}   <button onClick={()=>removeTodo(index)} >Remove</button>  </li>   
            ))}
        </ul>
    </div>

  )
}

export default TodoList;