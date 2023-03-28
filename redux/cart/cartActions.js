import { ACTIONS } from "./cartTypes";

export const addItem = (item) => {
  return {
    type: ACTIONS.ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (item) => {
  return {
    type: ACTIONS.DELETE_ITEM,
    payload: item,
  };
};

export const emptyCart = () => {
  return {
    type: ACTIONS.EMPTY_CART,
  };
};
