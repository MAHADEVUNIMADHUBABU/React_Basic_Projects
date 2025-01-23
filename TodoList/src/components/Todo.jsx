import React, { useState } from "react";

function Todo({ deleteTodo, todo }) {
    const [read, setRead] = useState(true); 
    const [value, setValue] = useState(todo.todo);
    const [done , setDone] = useState(false)


    return (
        <div className="flex flex-row my-4">
            <input
                className={`md:min-w-96 md:min-h-16 font-semibold bg-white outline-none rounded-l-lg px-10
                    ${done ? "line-through text-gray-700 font-serif bg-slate-400" : "text-blue-500 font-semibold text-center"}
                    ${read ? "read-only:cursor-not-allowed read-only:text-gray-500" : ""}
                `}
                type="text"
                value={value} // Bind the value to the local state
                readOnly={read} // Controlled by the `read` state
                onChange={(e) => setValue(e.target.value)} // Update the state on change
            />
            <button
                onClick={() => setRead(!read)} // Toggle the `read` state
                className="text-center px-4 text-white font-semibold bg-blue-500"
            >
                {read ? "Edit" : "Save"} {/* Button text changes dynamically */}
            </button>
            <button onClick={() => setDone(!done)} className="bg-green-400 text-white font-semibold px-4 text-center">
                Done
            </button>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="rounded-r-lg px-4 text-center bg-red-500 text-white font-semibold"
            >
                Delete
            </button>
        </div>
    );
}

export default Todo;