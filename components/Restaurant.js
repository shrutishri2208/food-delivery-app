import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

const Restaurant = ({
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
  // freeDelivery,
  price,
  menu,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mt-3 mb-2 flex-row space-x-4"
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
          // freeDelivery,
          price,
          menu,
        });
      }}
    >
      <View className="relative">
        <Image
          source={{ uri: urlFor(image).url() }}
          style={{ height: 180, width: 140 }}
          className="rounded-2xl"
        />
        <View className="absolute top-2 right-2 ">
          {liked ? (
            <FontAwesome name="heart" size={20} color="white" />
          ) : (
            <FontAwesome name="heart-o" size={20} color="white" />
          )}
        </View>
        <View className="absolute bottom-2 left-2 p-1">
          <Text className="text-white font-extrabold text-2xl">
            {discountPercent}% OFF
          </Text>
          <Text className="text-gray-50 font-bold">UPTO ₹{discount}</Text>
        </View>
      </View>

      {/* BODY */}

      <View className="my-4 justify-between">
        <View>
          <Text className="text-black text-xl font-bold">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <MaterialIcons name="stars" size={20} color="#FFC000" />
            <Text className="text-black font-bold text-lg">
              {ratings} ({noOfRatings}K+) • {time} mins
            </Text>
          </View>
          <Text className="text-gray-500 text-lg">{category}</Text>
          <Text className="text-gray-500 text-lg">
            {address} • {distance} km
          </Text>
        </View>
        {/* {freeDelivery && (
          <View className="flex-row items-center bg-gray-100 py-1 px-2 rounded-full">
            <MaterialIcons name="delivery-dining" size={24} color="#7300e6" />
            <Text style={styles.textColor} className="font-extrabold ml-1">
              FREE DELIVERY
            </Text>
          </View>
        )} */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "#7300e6",
  },
});

export default Restaurant;
