import { nanoid, createSlice } from "@reduxjs/toolkit";

const defaultState = {
  todo: [{ id: 1, task: "go to gym" }],
};


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{},
        deleteTodo:(state,action)=>{}
    }
})