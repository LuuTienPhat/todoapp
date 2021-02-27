import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, updateTodo, deleteTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="todo-table">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
        >
          <div
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            className="todo-text"
          >
            <span>{index + 1}</span>
            <div className={todo.isComplete ? "line-through" : ""}>
              {todo.text}
            </div>
          </div>

          <div className="icons">
            <AiFillEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            />
            <AiFillDelete onClick={() => deleteTodo(todo.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
