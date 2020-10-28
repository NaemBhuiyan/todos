import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import Todo from "./components/card/Todo";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
