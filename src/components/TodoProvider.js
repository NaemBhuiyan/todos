import React, { useState } from "react";
import AppContext from "./context";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Good morning", complete: false },
    { id: 2, text: "Good after Noon", complete: false },
    { id: 3, text: "Good night", complete: false },
  ]);
  const [editTodoText, setEditTodoText] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleEdit = (id) => {
    const findCard = todos.find((todo) => todo.id === id);
  };
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const value = {
    todos,
    setTodos,
    handleEdit,
    handleDelete,
    editTodoText,
    setEditTodoText,
    isShow,
    setIsShow,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default TodoProvider;
