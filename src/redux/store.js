import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import carteReducer from "./reducer/cartReducer";

export default function configureStore(preloadedState) {
  const store = createStore(
    carteReducer,
    preloadedState,
    composeWithDevTools()
  );

  return store;
}
