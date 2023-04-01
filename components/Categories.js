import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import client from "../sanity";
import { setCategory } from "../redux/category/categoryActions";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const categories1 = categories.slice(0, 5);
  const categories2 = categories.slice(5, 10);

  const fetchData = async () => {
    client
      .fetch(`*[_type == "categories"]`)
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View className="flex-row items-center justify-between">
            <Text className="text-black text-xl font-bold ">
              What's on your mind?
            </Text>
            <Pressable onPress={() => dispatch(setCategory("all"))}>
              <Text className="font-bold">View All</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingVertical: 12 }}
          >
            <View className="">
              <View className="flex-row">
                {categories1.map((item) => {
                  return <CategoryCard {...item} key={item._id} />;
                })}
              </View>
              <View className="flex-row">
                {categories2.map((item) => {
                  return <CategoryCard {...item} key={item._id} />;
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Categories;
