import { ADD_TODO, COMPLETE_TODO, ACTIVE_TODO, ALL_TODO } from "./types";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const completeTodo = (id, status) => {
  console.log({ id, status });
  return {
    type: COMPLETE_TODO,
    id,
    status,
  };
};

export const activeTodo = (data) => {
  return {
    type: ACTIVE_TODO,
    payload: data,
  };
};
export const allTodo = () => {
  return {
    type: ALL_TODO,
  };
};
