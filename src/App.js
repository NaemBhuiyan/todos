import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import Layout from "./components/card/Card";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
