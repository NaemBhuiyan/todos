import {
  ADD_TODO,
  COMPLETE_TODO,
  ALL_TODO,
  CLEAR_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "./types";

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

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
