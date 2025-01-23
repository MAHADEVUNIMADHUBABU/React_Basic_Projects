import React, { useState } from 'react';

function Input({ setTodos }) {
  const [value, setValue] = useState('');

  function addToList() {
    if (!value.trim()) {
      alert('Please enter a valid todo');
      return;
    }
    const item = {
      id: Date.now(),
      todo: value,
      edit: false,
      done: false,
    };

    setTodos((prev) => [item , ...prev]);
    setValue(''); // Clear input field
  }

  return (
    <div className="flex shadow-md hover:shadow-none shadow-black">
      <input
        placeholder="Enter your todo..."
        onChange={(e) => setValue(e.target.value)}
        value={value} // Bind value for resetting
        className="outline-none rounded-l-md text-right text-xl text-gray-500 min-w-36 font-bold md:min-w-96 md:min-h-16"
        type="text"
      />
      <button
        onClick={addToList}
        className="rounded-r-md hover:bg-blue-400 px-8 text-center text-white font-semibold bg-blue-500"
      >
        Add
      </button>
    </div>
  );
}

export default Input;


// import React, { useState } from 'react'
// import { nanoid } from '@reduxjs/toolkit'

// function Input({setTodos}) {

//   const [value , setValue] = useState("")
  
//   function addToList(){

//     if(!value.trim()){
//       alert("Please enter a valid todo")
//       return
//     }
//     const item = {
//       id:nanoid(),
//       todo:value,
//       edit:false,
//       done:false
//     }

//     setTodos((prev)=>([...prev, item]))
//   }

//   return (
//     <div className='flex shadow-md hover:shadow-none shadow-black'>
//         <input onChange={(e) => setValue(e.target.value)} className='outline-none rounded-l-md text-right text-xl text-gray-500 min-w-36  font-bold md:min-w-96  md:min-h-16' type="text" name="" id="" />
//         <button onClick={addToList}  className='rounded-r-md hover:bg-blue-400 px-8 text-center text-white font-semibold bg-blue-500'>Add</button>
//     </div>
//   )
// }

// export default Input
