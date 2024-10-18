import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  function handleTodo(event) {
    const newValue = event.target.value;
    setTodo(newValue);
  }

  function addItem() {
    if (todo.trim() !== "") {
      setItems((preItem) => {
        return [...preItem, todo];
      });
      setTodo("");
    }
  }

  function deleteItem(index) {
    setItems((preItems) => preItems.filter((item, i) => i !== index));
  }

  return (
    <div className="container">
      <input
        placeholder="Add a new task..."
        onChange={handleTodo}
        value={todo}
      />
      <button onClick={addItem}>Add Task</button>

      <div className="todo-list">
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {item} <button onClick={() => deleteItem(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
