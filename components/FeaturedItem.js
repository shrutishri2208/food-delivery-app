import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const FeaturedItem = ({ imgURL, title, desc }) => {
  return (
    <View className="mr-4 rounded-lg">
      <Image
        source={{
          uri: imgURL,
        }}
        style={{ height: 200, width: 300 }}
        className="rounded-2xl"
      />
    </View>
  );
};

export default FeaturedItem;
