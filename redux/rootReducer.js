import { combineReducers } from "redux";
import restaurantReducer from "./restaurants/restaurantReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  cart: cartReducer,
});

export default rootReducer;
