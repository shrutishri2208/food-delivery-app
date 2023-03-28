import { View, Text, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ title, image }) => {
  return (
    <View className="mr-8 mb-4">
      <Image
        source={{ uri: urlFor(image).url() }}
        style={{ height: 80, width: 80 }}
        className="rounded-full"
      />
      <Text className="text-center mt-1 text-gray-500 font-bold text-md">
        {title}
      </Text>
    </View>
  );
};

export default CategoryCard;
