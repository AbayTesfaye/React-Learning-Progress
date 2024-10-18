import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import { Zoom } from "@mui/material";

function App(props) {
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
      <Zoom in={true}>
        <button onClick={addItem}>
          <AddCircleIcon />
        </button>
      </Zoom>

      <div className="todo-list">
        <ul>
          {items.map((item, index) => {
            return <Item item={item} index={index} deleteItem={deleteItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
