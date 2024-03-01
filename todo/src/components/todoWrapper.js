import React from"react"
import { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
import {v4 as uuidv4 } from "uuid";
// import EditTodoForm from "./editForm";
import EditTodoForm from "./editForm";
uuidv4();


const TodoWrap = () => {

    //need to create state topass value from todoform tohere....

    const [todos,setTodos]=useState([])

    const addTodo  = (todo) => {
       setTodos([...todos, {id: uuidv4(), task:todo, completed:false, isEditing:false}]);
       console.log(todos)
    }

     
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id? {...todo, completed : !todo.completed }:todo))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id  !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo , isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task,id) => {
              setTodos(todos.map(todo =>  todo.id === id ? {...todo , task ,isEditing: !todo.isEditing} : todo))
    }
    
    return ( 
        <div>

        <div >
        <div ></div>
         <div><TodoForm addTodo={addTodo}  /></div>
         <div className="relative top-[150px] ">
               {todos.map ((todo, index ) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) : (
                    <Todo task={todo} key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo} />
                )

                ))}
         </div>
        </div> 

       
     
        </div>
    ) 
}

export default TodoWrap;