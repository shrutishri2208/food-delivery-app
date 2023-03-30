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

export const increaseItem = (id) => {
  return {
    type: ACTIONS.INCREASE_ITEM,
    payload: id,
  };
};

export const decreaseItem = (id) => {
  return {
    type: ACTIONS.DECREASE_ITEM,
    payload: id,
  };
};

export const closeCart = () => {
  return {
    type: ACTIONS.CLOSE_CART,
  };
};
