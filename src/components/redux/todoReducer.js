import { ADD_TODO, COMPLETE_TODO, ACTIVE_TODO } from "./types";

const initialState = {
    todos: [
      { id: 1, text: "Good morning", complete: false },
      { id: 2, text: "Good after Noon", complete: false },
      { id: 3, text: "Good night", complete: false },
    ],

    active: [],
  },
  todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: action.payload,
              complete: false,
            },
          ],
        };
      case COMPLETE_TODO:
        return {
          todos: action.payload.map((todo) => {
            if (todo.id === action.id) {
              todo.complete = action.status;
            }
            return todo;
          }),
        };
      case ACTIVE_TODO:
        return {
          todos: state.todos,
          active: action.payload,
        };

      default:
        return state;
    }
  };

export default todoReducer;
