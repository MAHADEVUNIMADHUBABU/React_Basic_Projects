import React from 'react'
import Todo from './Todo'

function List({list , remove}){
  return (
    <>
    <div className='flex justify-center flex-col md:min-w-96 md:min-h-16'>
      {
        list.map((a) =>(<Todo key={a.id} deleteTodo={remove} todo={a}/>))
      }
    </div>
    </>
  )
}

export default List
