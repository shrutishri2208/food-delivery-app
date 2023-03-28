import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import restaurantReducer from "./restaurants/restaurantReducer";
import rootReducer from "./rootReducer.js";

export const store = createStore(rootReducer, applyMiddleware(thunk));
