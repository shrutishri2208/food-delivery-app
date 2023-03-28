import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const Items = ({
  _id,
  image,
  title,
  ratings,
  noOfRatings,
  liked,
  category,
  time,
  address,
  distance,
  discountPercent,
  discount,
  freeDelivery,
  price,
  menu,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="relative"
      onPress={() => {
        navigation.navigate("Restaurant", {
          _id,
          image,
          title,
          ratings,
          noOfRatings,
          liked,
          category,
          time,
          address,
          distance,
          discountPercent,
          discount,
          freeDelivery,
          price,
          menu,
        });
      }}
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        style={{ height: 180, width: 140 }}
        className="rounded-2xl"
      />
      <View className="absolute top-2 right-2">
        {liked ? (
          <FontAwesome name="heart" size={20} color="white" />
        ) : (
          <FontAwesome name="heart-o" size={20} color="white" />
        )}
      </View>
      <Text className="text-black text-lg p-1 font-bold">{title}</Text>
      <View className="flex-row items-center space-x-1">
        <MaterialIcons name="stars" size={20} color="green" />
        <Text className="text-black">
          {ratings} • {time} mins
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Items;
