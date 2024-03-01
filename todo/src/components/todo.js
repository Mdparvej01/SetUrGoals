import React from"react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenSquare,faTrash} from '@fortawesome/free-solid-svg-icons'


const Todo = ({task, toggleComplete ,deleteTodo ,editTodo}) => {
    return ( 
      <div className=" ">
        <div className="relative flex  justify-center top-[200px]  left-[-30px] ">
          <div className="  flex  border w-[900px] bg-orange-100 h-[50px] place-content-center gap-[2px] rounded-[15px] ">
             <div className="relative top-[10px] "> <p onClick={ () => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}> {task.task} </p> </div>
             <div className=" absolute right-[350px] flex gap-[50px]">
             <div className="relative  px-[00px] top-[10px]"><FontAwesomeIcon icon={faPenSquare} onClick={()=>editTodo(task.id)} /> </div> 
             <div className="relative px-[00px] top-[10px]"><FontAwesomeIcon icon={faTrash} onClick = {() =>deleteTodo(task.id)} /> </div>
             </div>
          </div>
        </div>
     </div>
    ) 
}

export default Todo;