import { ToDoItem } from './ToDoItem';
export default function List( {todos, toggleToDo, deleteTodo} ){
    return (
        <ul className="list">
        {todos.length === 0 && "No To Dos"}
        {todos.map(todo => {
          return (
            <ToDoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id}
            toggleToDo = {toggleToDo} deleteTodo = {deleteTodo}/>
          )
          
        })}
      </ul>
    )
}