import { useEffect, useState } from 'react'
import {Input , Todo , List} from './components/Index'

function App() {

  const [todos , setTodos] = useState(() =>{
    const localList = localStorage.getItem("list");
    return localList ? JSON.parse(localList) : []
  });

  useEffect(() =>{
    localStorage.setItem("list" , JSON.stringify(todos));
  } ,[todos])

  function deleteTodo(id){
    setTodos((prev) =>(prev.filter((a) => a.id !== id)))
  }

  return (
    <>
      <div className='flex justify-start md:justify-center mt-32 mb-14'>
        <Input setTodos={setTodos}></Input>
      </div>
      <div className='flex justify-center'>
      <List list={todos} remove={deleteTodo}></List>
      </div>
     </>
  )
}

export default App
