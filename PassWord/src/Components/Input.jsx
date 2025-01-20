import React, { useState } from 'react'

function Input() {

    let [password , isPassword] = useState(false)
    let [ hide , setHide] = useState(true)
    let [ txt , setTxt ] = useState("")

    const toggle = () =>{
      isPassword((e) => !e)
      setHide((e) => !e)
    }

  return (
    <div className="flex mx-auto w-96 shadow rounded-lg overflow-hidden mb-4">
        <input onChange={(e) => setTxt(e.target.value)} type={password ? "text":"password"} className='outline-none w-full py-1 px-3'/>
        <button onClick={toggle} className='outline-none bg-blue-700 text-white text-center hover:bg-blue-400 px-3 py-0.5' > { hide ? "Show" : "Hide" } </button>
    </div>
  )
}

export default Input