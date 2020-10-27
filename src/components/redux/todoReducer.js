import { ADD_TODO } from "./types";

const initialState = {
    todos: [
      { id: 1, text: "Good morning", complete: false },
      { id: 2, text: "Good after Noon", complete: false },
      { id: 3, text: "Good night", complete: false },
    ],
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

      default:
        return state;
    }
  };

export default todoReducer;
