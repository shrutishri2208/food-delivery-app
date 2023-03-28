import { ACTIONS } from "./restaurantTypes";
import axios from "axios";
import client from "../../sanity";

export const fetchDataRequest = () => {
  return {
    type: ACTIONS.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (restaurants) => {
  return {
    type: ACTIONS.FETCH_DATA_SUCCESS,
    payload: restaurants,
  };
};

export const fetchDataError = (error) => {
  return {
    type: ACTIONS.FETCH_DATA_ERROR,
    payload: error,
  };
};

export const fetchRestaurants = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    client
      .fetch(`*[_type == "restaurant"]`)
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => dispatch(fetchDataError(error)));
  };
};
