import React , {useState} from"react"



const EditTodoForm = ({editTodo , task}) => {
   
    const [value,setValue]=useState("");

     const handleSubmit = (e )=> {
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");               // clear
      
    }

    return ( 
        <form onSubmit={handleSubmit}>

         <div className=" relative  border h-[200px]  top-[100px] ">
            <div className=" relative flex gap-[100px] justify-center top-[90px]">
                <div>
                  <input className=" text-center text-blue-300 bg-blue-900" type="text"
                   placeholder="update task"
                   value={value}
                   onChange={(e) => {
                       setValue(e.target.value);
                  }} />
                </div>
                <div>
                    <button type='submit' className=" bg-blue-900 text-white-300 border  hover:bg-gray-300 hover:text-white "   >Upadate</button>
                </div>
            </div>
         </div>



        </form>
    ) 
}

export default EditTodoForm;