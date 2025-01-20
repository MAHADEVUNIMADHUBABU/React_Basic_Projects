import { useState } from "react";
import { ColorProvider } from "./UsingContext/ColorContext";
import Input from "./components/Input";
import Box from "./components/Box";


function App(){

  const setCol = (a) =>{
    color = a;
  }



  return(
    <div>

      <h1 className="text-blue-500 bg-black p-4 m-6 text-3xl flex items-center justify-center ">
      Hare Rama Hare Krishna</h1>

      <ColorProvider value={{ color , setCol}}>

      <Box/>

      <Input></Input>

      </ColorProvider>
    </div>
  )
}

export default App;