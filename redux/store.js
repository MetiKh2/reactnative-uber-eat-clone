
  import { createStore } from "redux";

import reducer from "./reducers/cartReducer";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}