import React, { useState } from 'react';


export default function Form(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    props.onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoForm">
        <input
          type="text"
          className="todo-input"
          placeholder= "What is the task today?"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="todo-btn">Add</button>
    </form>
  );
}
