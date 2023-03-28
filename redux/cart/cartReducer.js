import { ACTIONS } from "./cartTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        cartItems: [...state.cartItems, action.payload],
      };
    case ACTIONS.DELETE_ITEM:
      return {
        // cartItems: state.cartItems.filter((item) => item)
        cartItems: [],
      };
    case ACTIONS.EMPTY_CART:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
