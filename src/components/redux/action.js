import { ADD_TODO, COMPLETE_TODO, ACTIVE_TODO } from "./types";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const completeTodo = (status, id, data) => {
  return {
    type: COMPLETE_TODO,
    payload: data,
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
