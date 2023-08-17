import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
// import { restaurants } from "../data";
import Restaurant from "./Restaurant";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../redux/restaurants/restaurantActions";

const RestaurantList = ({ searchTerm = king, searchRestaurants }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.restaurants.loading);

  let getRestaurants = useSelector((state) => state.restaurants.restaurants);

  const restaurants =
    searchRestaurants.length !== 0 ? searchRestaurants : getRestaurants;

  const category = useSelector((state) => state.category.category);

  let showRestaurants = restaurants.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (showRestaurants.length === 0) {
    showRestaurants = restaurants;
  }
  const restLength = showRestaurants.length;

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <View className="mt-4">
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text className="text-black text-xl font-bold">
            {restLength} restaurant{restLength === 1 ? "" : "s"} to explore
          </Text>

          {showRestaurants.map((item) => {
            return <Restaurant key={item._id} {...item} />;
          })}
        </View>
      )}
    </View>
  );
};

export default RestaurantList;
