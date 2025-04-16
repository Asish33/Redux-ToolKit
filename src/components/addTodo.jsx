import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
    function handleAdd(){
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <div className="p-4">
      <input
        className="border px-2 py-1"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />
      <button
        className="ml-2 bg-blue-500 text-white px-4 py-1"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}
