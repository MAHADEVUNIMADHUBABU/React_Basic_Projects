import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from "./slice"
import counterReducer from "./counter"

export const store = configureStore({
    reducer:{
        Todos:sliceReducer,
        counter:counterReducer
    }
})