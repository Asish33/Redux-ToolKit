import { nanoid, createSlice } from "@reduxjs/toolkit";

const defaultState = {
  todos: [{ id: 1, task: "go to gym" }],
};


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                task:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            const deleteId = action.payload
            state.todos = state.todos.filter(x=>x.id !== deleteId)
        }
    }
})