import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
// import { restaurants } from "../data";
import Restaurant from "./Restaurant";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../redux/restaurants/restaurantActions";

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const loading = useSelector((state) => state.restaurants.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <View className="mt-8">
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text className="text-black text-xl font-bold">
            {restaurants.length} restaurants to explore
          </Text>
          {restaurants.map((item) => {
            return <Restaurant key={item._id} {...item} />;
          })}
        </View>
      )}
    </View>
  );
};

export default RestaurantList;
