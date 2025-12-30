import React, { useState } from "react";
import Todo from "./Todo";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div id="main">
      <h1>To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
