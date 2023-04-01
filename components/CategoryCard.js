import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/category/categoryActions";

const CategoryCard = ({ title, image }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      className="mr-8 mb-4"
      onPress={() => dispatch(setCategory(title))}
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        style={{ height: 80, width: 80 }}
        className="rounded-full"
      />
      <Text className="text-center mt-1 text-gray-500 font-bold text-md">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
