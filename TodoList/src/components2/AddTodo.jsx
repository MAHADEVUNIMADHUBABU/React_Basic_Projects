import React, { useState } from 'react'
import { addTodo } from '../store/todoStore';
import { useDispatch } from 'react-redux';

function AddTodo() {

    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input));
        setInput('')
    }

  return (
    <div className="flex shadow-md hover:shadow-none shadow-black">
      <input
        placeholder="Enter your todo..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="outline-none rounded-l-md text-right text-xl text-gray-500 min-w-36 font-bold md:min-w-96 md:min-h-16"
        type="text"
      />
      <button
        onClick={() =>{addTodoHandler}}
        className="rounded-r-md hover:bg-blue-400 px-8 text-center text-white font-semibold bg-blue-500"
      >
        Add
      </button>
    </div>
  )
}

export default AddTodo
