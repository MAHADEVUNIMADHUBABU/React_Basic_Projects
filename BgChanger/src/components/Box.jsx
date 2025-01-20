import { useState } from "react";
import { ColorContext } from "../UsingContext/ColorContext";

const {color} = ColorContext()

function Box(){

    return(
        <div style={{backgroundColor:color || "black"}} className={`flex border-blue-500 border-4 w-40 h-40
             justify-center mx-auto mt-8`} >
        </div>
    )
}

export default Box;