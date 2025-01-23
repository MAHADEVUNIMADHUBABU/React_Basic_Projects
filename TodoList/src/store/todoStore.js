import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
    todos:[{
        id:nanoid(),
        todo:"what todo",
        completed:false
    }]
}

export const todoSlice = createSlice({

    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action) =>{
            const todo = {
                id:nanoid(),
                todo: action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo) =>{
                return (todo.id === action.payload) ? {...todo ,completed:!todo.completed} : todo 
            })
        }
    }
})

export const { removeTodo , addTodo , updateTodo} = todoSlice.actions;

export default todoSlice.reducer