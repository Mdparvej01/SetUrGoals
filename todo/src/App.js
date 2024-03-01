// import logo from './logo.svg';
import React from "react"
import {useState} from "react"
import './App.css';
import Todo from './components/todo';
import Todoform from './components/todoForm';
import TodoWrap from './components/todoWrapper';
import {v4 as uuidv4} from "uuid"
// import { todo } from "node:test";
uuidv4();


// import Todo from "./components/todo";


function App() {

  const [todos,setTodos]=useState([]);
  //now we have to pass values from todo formto app use pros
  const addTodo = todo => {
    // spread operator to make cpy of todos
    setTodos([...todos,{id: uuidv4() ,task: todo ,completed:false, isEditing:false}])
    console.log(todos);
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id?{...todo,completed : !todo.completed }:todo ))
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
   <div className=' text-red-300'>
    parvej
   </div>
   <Todoform addTodo={addTodo}/>
   {/* to generate each value for each */}
   {todos.map((todo,index) => (
          // <Todo  task={todo} key={index}/>
          
            <Todo   task={todo} key={index}
            toggleComplete={toggleComplete}
            //adding delete functionality..
            deleteTodo={deleteTodo}
            />
          
   ))}
   <TodoWrap/>
   
   </>
  );
}

export default App;
