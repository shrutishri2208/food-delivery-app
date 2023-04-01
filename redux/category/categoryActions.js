import { ACTIONS } from "./categoryTypes";

export const setCategory = (category) => {
  return {
    type: ACTIONS.SET_CATEGORY,
    payload: category,
  };
};
