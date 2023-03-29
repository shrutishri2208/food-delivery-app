import { ACTIONS } from "./cartTypes";

const initialState = {
  cartTotal: 0,
  cartCount: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE_ITEM:
      const inCart = state.cartCount.find((item) =>
        item.id === action.payload ? true : false
      );
      return {
        cartCount: inCart
          ? state.cartCount.map((item) =>
              item.id === action.payload
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...state.cartCount, { id: action.payload, count: 1 }],
      };
    case ACTIONS.DECREASE_ITEM:
      return {
        cartCount: state.cartCount.map((item) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item
        ),
      };

    case ACTIONS.DELETE_ITEM:
      return {
        cartTotal: state.cartTotal - action.payload.price,
      };
    case ACTIONS.EMPTY_CART:
      return {
        cartTotal: 0,
        cartCount: [],
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
//   cartCount: {},
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTIONS.ADD_ITEM:
//       return {
//         cartCount: {
//           ...state.cartCount,
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
//         cartCount: {
//           ...state.cartCount,
//           [action.payload]: state.cartCount[action.payload] + 1,
//         },
//       };
//     case ACTIONS.DECREASE_ITEM:
//       return {
//         ...state,
//         cartCount: {
//           ...state.cartCount,
//           [action.payload]: state.cartCount[action.payload] - 1,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;
