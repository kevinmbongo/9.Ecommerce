import { createStore } from "redux";
import carteReducer from "./reducer/cartReducer";

const store = createStore(carteReducer);

export default store;
