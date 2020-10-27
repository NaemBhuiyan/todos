import { createStore } from "redux";

import reducer from "./redux/todoReducer";

const store = createStore(reducer);

export default store;
