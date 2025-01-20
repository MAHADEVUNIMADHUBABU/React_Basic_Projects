import React, { useState } from 'react'
import { ColorContext } from '../UsingContext/ColorContext';

function Input() {

    const {setCol} = ColorContext()

    function handleInput(){
        setCol(col);
    }


  return (
    <div className='flex flex-col justify-center p-3 items-center bg-gray-400 max-w-72 mx-auto mt-4'>
      
      <input onChange={(e) => setCol(e.target.value)} className='mx-auto max-w-56 h-4'  type="text" />

      <button onClick={handleInput} className='mt-2 p-2 bg-gray-700 text-white transition hover:text-black hover:bg-gray-200'>Enter</button>
    </div>
  )
}

export default Input
