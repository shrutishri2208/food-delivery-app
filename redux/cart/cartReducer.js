import { ACTIONS } from "./cartTypes";

const initialState = {
  cartItems: [],
  cartTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        cartItems: [
          ...state.cartItems,
          {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            count: state.cartItems.count + 1,
          },
        ],
        cartTotal: state.cartTotal + action.payload.price,
      };
    case ACTIONS.DELETE_ITEM:
      return {
        cartItems: state.cartItems.filter((item) => item !== action.payload),
        cartTotal: state.cartTotal - action.payload.price,
      };
    case ACTIONS.EMPTY_CART:
      return {
        cartItems: [],
        cartTotal: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
