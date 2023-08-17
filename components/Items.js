import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
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
  const [isLiked, setIsLiked] = useState(false);

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
      <Pressable
        onPress={() => setIsLiked(!isLiked)}
        className="absolute top-2 right-2"
      >
        <View className="">
          {isLiked ? (
            <FontAwesome name="heart" size={20} color="white" />
          ) : (
            <FontAwesome name="heart-o" size={20} color="white" />
          )}
        </View>
      </Pressable>
      <Text className="text-black text-lg p-1 font-bold">{title}</Text>
      <View className="flex-row items-center space-x-1">
        <MaterialIcons name="stars" size={20} color="#007829" />
        <Text className="text-black">
          {ratings} • {time} mins
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Items;
