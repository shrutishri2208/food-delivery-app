import { combineReducers } from "redux";
import restaurantReducer from "./restaurants/restaurantReducer";
import cartReducer from "./cart/cartReducer";
import categoryReducer from "./category/categoryReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  cart: cartReducer,
  category: categoryReducer,
});

export default rootReducer;
