import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  

  useEffect(() => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', []);
    }
    else {
      const localStorageTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localStorageTodo);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  // console.log(todos);

  return (
    <>
      <h1 className="title">What is the Plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
