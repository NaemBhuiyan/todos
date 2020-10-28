import { ADD_TODO, COMPLETE_TODO, ALL_TODO, CLEAR_TODO } from "./types";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const completeTodo = (id, status) => {
  return {
    type: COMPLETE_TODO,
    id,
    status,
  };
};

export const allTodo = () => {
  return {
    type: ALL_TODO,
  };
};
export const clearTodo = (data) => {
  return {
    type: CLEAR_TODO,
    payload: data,
  };
};
