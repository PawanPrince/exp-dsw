import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import DisplayTodo from './DisplayTodo';

const TodoWrapper = () => {
    const [todo,setTodo]=useState("")
    const [allTodos,setAllTodos] = useState([{id:1,text:"Hello World"}])
    const [editTodoId , setEditTodoId]=useState(null);

    function addTodo(e){
        e.preventDefault();
        console.log(todo);

        //UPDATE EXISTING TODO
        if (editTodoId !==null) {
           setAllTodos(allTodos.map((ele)=>{
            return ele.id === editTodoId?{...ele,text:todo}:ele
           })
         )
         setEditTodoId(null);
         setTodo("");
         return;
        }

        if (todo.trim() !=="") {
            let newTodo = {
            id: Date.now(),
            text:todo,
        };
         console.log(newTodo);
         setAllTodos([...allTodos , newTodo])        
        }else{
            alert("input field is impty")   
        }
        setTodo("")   
    }
    function editTodo(id) {
        console.log("edit Todo id=",id);
        const todoToEdit = allTodos.find((ele) => ele.id === id);
        console.log(todoToEdit);

        if (todoToEdit) {
            setTodo(todoToEdit.text);
             setEditTodoId(id)     
        }    
    }

     function deleteTodo(id)
        {
            let filteredTodo = allTodos.filter((ele)=>{
                return ele.id !==id
            });
            setAllTodos(filteredTodo);
        }
        
  return (
    <div>
        <CreateTodo todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        <DisplayTodo
         allTodos={allTodos} 
         editTodo={editTodo}
         deleteTodo={deleteTodo}/>
    </div>
  );
};

export default TodoWrapper