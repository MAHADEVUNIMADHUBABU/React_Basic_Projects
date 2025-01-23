import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slice';
import {add} from "../store/counter"

function Input() {

    const dispatch = useDispatch();
    const [ todo , setTodo] = useState("");

    const addTo = ()=> {
      dispatch(addTodo(todo))
      setTodo("")
      dispatch(add())
    } 

  return (
    <div className='flex justify-center flex-row'>
        <input type="text"
        value={todo}
        placeholder='Add what to do'
        onChange={(e) => setTodo(e.target.value)}
        className='min-w-96 text-right outline-none rounded-l-lg'/>
        <button onClick={addTo} 
        className='bg-blue-500 text-white text-center rounded-r-lg font-semibold text-xl
        px-4 py-2' >Add</button>
    </div>
  )
}

export default Input