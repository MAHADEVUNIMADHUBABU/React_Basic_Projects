import React, { useState } from 'react'

function Counter() {

    let [count , setCount] = useState(1)

    const increase = () =>{

        setCount(count + 2)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 5)

        increase()
    }

    function inc(){
      setCount(count+3)
    }

    const reset = ()=>{
      setCount(0)
    }

  return (
    <div className='flex items-center p-4 bg-blue-500 '>
        <label className='mx-auto text-3xl bg-blue-300 p-3 rounded-md'> The Counter Value is {count}</label>
        <button className='text-3xl p-2 mx-auto bg-blue-400 rounded-md'  onClick={increase} > Click </button>
        <button className='text-3xl p-2 mx-auto bg-blue-400 rounded-md'  onClick={reset} > Reset </button>
    </div>
  )
}

export default Counter
