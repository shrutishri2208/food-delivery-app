import { ACTIONS } from "./cartTypes";

const initialState = {
  cartTotal: 0,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE_ITEM:
      const inCart = state.cartItems.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        cartTotal: state.cartTotal + action.payload.price,
        cartItems: inCart
          ? state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [
              ...state.cartItems,
              {
                id: action.payload.id,
                count: 1,
                title: action.payload.title,
                price: action.payload.price,
              },
            ],
      };
    case ACTIONS.DECREASE_ITEM:
      return {
        cartTotal: state.cartTotal - action.payload.price,

        cartItems:
          action.payload.count === 1
            ? state.cartItems.filter((item) => item.id !== action.payload.id)
            : state.cartItems.map((item) =>
                item.id === action.payload.id
                  ? { ...item, count: item.count - 1 }
                  : item
              ),
      };

    case ACTIONS.DELETE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        cartTotal: state.cartTotal - action.payload.price,
      };
    case ACTIONS.EMPTY_CART:
      return {
        cartTotal: 0,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;

// import { ACTIONS } from "./cartTypes";

// const initialState = {
//   cartItems: [],
//   cartTotal: 0,
//   cartItems: {},
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTIONS.ADD_ITEM:
//       return {
//         cartItems: {
//           ...state.cartItems,
//           [action.payload.id]: 1,
//         },

//         cartItems: [
//           ...state.cartItems,
//           {
//             id: action.payload.id,
//             title: action.payload.title,
//             price: action.payload.price,
//           },
//         ],
//         cartTotal: state.cartTotal + action.payload.price,
//       };
//     case ACTIONS.DELETE_ITEM:
//       return {
//         cartItems: state.cartItems.filter((item) => item !== action.payload),
//         cartTotal: state.cartTotal - action.payload.price,
//       };
//     case ACTIONS.EMPTY_CART:
//       return {
//         cartItems: [],
//         cartTotal: 0,
//       };
//     case ACTIONS.INCREASE_ITEM:
//       return {
//         ...state,
//         cartItems: {
//           ...state.cartItems,
//           [action.payload]: state.cartItems[action.payload] + 1,
//         },
//       };
//     case ACTIONS.DECREASE_ITEM:
//       return {
//         ...state,
//         cartItems: {
//           ...state.cartItems,
//           [action.payload]: state.cartItems[action.payload] - 1,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;
