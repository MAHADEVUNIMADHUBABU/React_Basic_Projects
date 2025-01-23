import { store } from "./store/store"
import { useSelector } from "react-redux"
import Input from "./components/Input"
import Todo from "./components/Todo"

function App() {

    const counter = useSelector(state => state.counter.value)

  return (
    <div className="flex flex-col justify-center align-top mt-20">
        <Input/>
        <div className="p-4 max-w-md flex text-center rounded-lg bg-green-300 text-xl font-semibold text-white">{counter}</div>
        <div className="flex flex-col mt-5 justify-center ">
        <Todo/>
        </div>
    </div>
  )

}

export default App
