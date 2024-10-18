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
    setItems((preItem) => {
      return [...preItem, todo];
    });
    setTodo("");
  }

  function deleteItems(){
    items.filter(())
  }

  return (
    <div className="container">
      <input placeholder="To do" onChange={handleTodo} value={todo} />
      <button onClick={addItem}>Add</button>

      <div className="todo-list">
        <ul>
          {items.map((item) => {
            return (
              <li>
                item <button onClick={deleteIems}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
