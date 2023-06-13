import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export function ToDoItem({ completed, id, title, toggleToDo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          className='item-todo'
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)}>
      <FontAwesomeIcon icon={faTrashCan} style={{color: "#c5aeff"}}/>
      </button>
    </li>
  );
}