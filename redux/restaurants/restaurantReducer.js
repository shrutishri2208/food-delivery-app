import { ACTIONS } from "./restaurantTypes";

const initialState = {
  loading: true,
  restaurants: [],
  error: "",
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_DATA_SUCCESS:
      return {
        loading: false,
        restaurants: action.payload,
        error: "",
      };
    case ACTIONS.FETCH_DATA_ERROR:
      return {
        loading: false,
        restaurants: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
