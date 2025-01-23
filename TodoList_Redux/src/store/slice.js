import { createSlice } from "@reduxjs/toolkit"

const currState = [{
    id:"id",
    todo:"",
    completed:false
}]

export const slice = createSlice({
    name:"Todos",
    initialState:currState,
    reducers:{
        addTodo:(state , action ) =>{
            let list = {
                id:Date.now().toString(),
                todo:action.payload,
                completed:false
            }
            state.push(list)
        },
        removeTodo: (state , action) =>{
            return state.filter((a) => (a.id !== action.payload))
        },
        updateTodo:(state , action) =>{
            
            // return state = state.map((a) => (a.id === action.payload) ? {...a , completed:!a.completed} : a )

            const todo = state.find((a) => a.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        editTodo:(state,action)=>{
            const todo = state.find((a) => a.id === action.payload.id)
            if(todo){
                todo.todo = action.payload.todo
            }
        }
    }
})

export const { removeTodo , addTodo , updateTodo , editTodo} = slice.actions;
export default slice.reducer