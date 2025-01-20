import { createContext, useContext, useState } from "react";

const Context = createContext({
    color:"yellow",
    setCol:(a) =>{}
})

export const ColorContext = useContext(Context)

export const ColorProvider = Context.Provider

