import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo , updateTodo , editTodo } from '../store/slice'
import {add , decrease} from "../store/counter"

function Todo() {

  const todos = useSelector(state => state.Todos)
  const dispatch = useDispatch()
  const [done,setDone] = useState(false)

  const doit = (id)=>{
    dispatch(updateTodo(id))
    setDone(prev => !prev )
  }

  const removeTodoHandler = (id) =>{
    dispatch(removeTodo(id)),
    dispatch(decrease())
  }

  return (
    <>{
      todos.map((todo) => {
        return <div key={todo.id} className="flex justify-center flex-row my-4">
            <input
                className={`md:min-w-96 md:min-h-16 font-semibold bg-white outline-none rounded-l-lg px-10
                    ${done ? "line-through text-gray-700 font-serif bg-slate-400" : "text-blue-500 font-semibold text-center"}
                `}
                type="text"
                value={todo.todo} 
                readOnly={true}  
            />

            {/* <button onClick={() => doit(todo.id)} className="bg-green-400 text-white font-semibold px-4 text-center">
                {done ? "UnDo" : "Done"}
            </button> */}

            <button
                onClick={() => {removeTodoHandler(todo.id)}}
                className="rounded-r-lg px-4 text-center bg-red-500 text-white font-semibold"
            >
                Delete
            </button>
        </div>
      })
    }
    </>
  )
}

export default Todo
