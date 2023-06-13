import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('items');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: uuid(), title: title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className='todoWrapper'>
      <Form onSubmit={addTodo} />
      <h1 className="header">To Do List</h1>
      <List todos={todos} toggleToDo={toggleToDo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
