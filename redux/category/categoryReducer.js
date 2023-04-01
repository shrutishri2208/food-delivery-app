import { ACTIONS } from "./categoryTypes";

const initialState = {
  category: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CATEGORY:
      return {
        category: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
