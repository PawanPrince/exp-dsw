import React from 'react'
import style from "./createtodo.module.css"

const CreateTodo = ({todo, setTodo, addTodo}) => {
    const handleTodo=(e)=> setTodo(e.target.value);

  return (
    <div id={style.createtodocontainer}>
        <form onSubmit={addTodo}>
            <label htmlFor="todo">Todo</label>
            <input type="text" placeholder="Enter Todo.." value={todo} onChange={handleTodo} required />
            <br />
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default CreateTodo