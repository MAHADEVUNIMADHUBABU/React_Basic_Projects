import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoStore/todoSlice";

export const store = configureStore({
    reducer: todoSlice
})