import React , {useState} from"react"



const TodoForm = ({addTodo}) => {
   
    const [value,setValue]=useState("");

     const handleSubmit = (e )=> {
        e.preventDefault();
        addTodo(value);
        setValue("");               // clear
      
    }

    return ( 
        <form onSubmit={handleSubmit}>
      <div className=" border h-[1100px] w-[1100px] absolute left-[170px] rounded-[35px] b-[50px] bg-orange-200 top-[40px] "> 
         <div className=" relative  border h-[200px]  top-[100px] w-[900px] left-[100px]  rounded-[75px] bg-orange-100 ">
            <div className=" relative flex gap-[100px] justify-center top-[90px] ">
                <div>
                  <input className=" text-center text-blue-300 bg-orange-100 hover:bg-orange-200 rounded-xl" type="text"
                   placeholder="Set Ur Goal"
                   value={value}
                   onChange={(e) => {
                       setValue(e.target.value);
                  }} />
                </div>
                <div>
                    <button type='submit' className=" bg-blue-900 text-white-300 border  hover:bg-gray-300 hover:text-white rounded-xl"   >Enter</button>
                </div>
            </div>
         </div>


        </div> 
        </form>
    ) 
}

export default TodoForm;