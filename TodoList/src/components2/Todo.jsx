import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../store/todoStore'

function Todo() {

    const list = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    const [read, setRead] = useState(true); 
    const [value, setValue] = useState(todo.todo);
    const [done , setDone] = useState(false)

  return (
    <div className='flex justify-center flex-col md:min-w-96 md:min-h-16'>
    {
        list.map((todo) =>(
            <div key={todo.id} className="flex flex-row my-4">
            <input
                className={`md:min-w-96 md:min-h-16 font-semibold bg-white outline-none rounded-l-lg px-10
                    ${done ? "line-through text-gray-700 font-serif bg-slate-400" : "text-blue-500 font-semibold text-center"}
                    ${read ? "read-only:cursor-not-allowed read-only:text-gray-500" : ""}
                `}
                type="text"
                value={value} 
                readOnly={read} 
                onChange={(e) => setValue(e.target.value)} 
            />
            <button
                onClick={() => setRead(!read)} 
                className="text-center px-4 text-white font-semibold bg-blue-500"
            >
                {read ? "Edit" : "Save"}
            </button>
            <button onClick={() => setDone(!done)} className="bg-green-400 text-white font-semibold px-4 text-center">
                Done
            </button>
            <button
                onClick={() => useDispatch(removeTodo(todo.id))}
                className="rounded-r-lg px-4 text-center bg-red-500 text-white font-semibold"
            >
                Delete
            </button>
        </div>  
        ))
    }
    </div>
  )
}

export default Todo
