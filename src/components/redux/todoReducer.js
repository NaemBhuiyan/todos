import { v4 as uuid } from "uuid";
import {
  ADD_TODO,
  COMPLETE_TODO,
  ALL_TODO,
  CLEAR_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "./types";

const initialState = {
    todos: [
      { id: uuid(), text: "Good morning", complete: false },
      { id: uuid(), text: "Good after Noon", complete: false },
      { id: uuid(), text: "Good night", complete: false },
    ],
  },
  todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          todos: [
            ...state.todos,
            {
              id: uuid(),
              text: action.payload,
              complete: false,
            },
          ],
        };
      case COMPLETE_TODO:
        return {
          todos: [
            ...state.todos.map((todo) => {
              if (todo.id === action.id) {
                todo.complete = action.status;
              }
              return todo;
            }),
          ],
        };

      case ALL_TODO:
        return {
          todos: [...state.todos],
        };
      case CLEAR_TODO:
        return {
          todos: [...action.payload],
        };
      case DELETE_TODO:
        return {
          todos: [...state.todos.filter((todo) => todo.id !== action.id)],
        };
      case EDIT_TODO:
        console.log(action.id, action.text);
        return {
          todos: [
            ...state.todos.map((todo) => {
              if (todo.id === action.id) {
                todo.text = action.text;
              }
              return todo;
            }),
          ],
        };

      default:
        return state;
    }
  };

export default todoReducer;
