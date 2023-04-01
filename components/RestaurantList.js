import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
// import { restaurants } from "../data";
import Restaurant from "./Restaurant";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../redux/restaurants/restaurantActions";
import { setCategory } from "../redux/category/categoryActions";
import { SearchBar } from "react-native-screens";

const RestaurantList = ({ searchTerm, searchRestaurants }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.restaurants.loading);

  // const restaurants = useSelector((state) => state.restaurants.restaurants);

  console.log("SEARCH RESTAURANTS", searchRestaurants.length);
  console.log(searchRestaurants);
  const restaurants =
    searchRestaurants.length !== 0
      ? searchRestaurants
      : useSelector((state) => state.restaurants.restaurants);

  const category = useSelector((state) => state.category.category);

  let showRestaurants = restaurants.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (showRestaurants.length === 0) {
    showRestaurants = restaurants;
  }

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
            {showRestaurants.length} restaurants to explore
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
