import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import MenuItem from "../components/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import FooterMenu from "../components/FooterMenu";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  // const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const {
    params: {
      _id,
      title,
      ratings,
      noOfRatings,
      liked,
      category,
      time,
      address,
      distance,
      price,
      // freeDelivery,
      menu,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="relative bg-white">
      <TouchableOpacity
        className="p-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#555555" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="bg-gray-100 m-4 mt-0 p-4 rounded-3xl relative ">
          <Text className="text-2xl font-bold">{title}</Text>
          <View className="flex-row items-center space-x-1 mt-1 ">
            <MaterialIcons name="stars" size={20} color="green" />
            <Text className="text-black font-bold">
              {ratings} ({noOfRatings} + ratings) • ₹{price} for two
            </Text>
          </View>
          <View style={styles.line} className="py-2">
            <Text className="text-gray-500">{category}</Text>
          </View>
          <View className="absolute top-5 right-5 ">
            {liked ? (
              <FontAwesome name="heart" size={20} color="#666666" />
            ) : (
              <FontAwesome name="heart-o" size={20} color="#666666" />
            )}
          </View>
          <View className="flex-row mt-2 mb-2">
            <Text className="font-bold mr-6">Outlet</Text>
            <Text className="">{address}</Text>
          </View>
          <View className="flex-row pb-2" style={styles.line}>
            <Text className="font-bold mr-3">{time} mins</Text>
            <Text>Delivery to Mathikere</Text>
          </View>
          <View className="mt-4 flex-row items-center">
            <AntDesign name="infocirlce" size={16} color="orange" />
            <Text className="ml-2">{distance} km</Text>
            {/* {freeDelivery ? (
              <Text> | Free delivery for your area</Text>
            ) : (
              <Text> | ₹36</Text>
            )} */}
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-center tracking-widest text-md">MENU</Text>

          <View className="bg-gray-100 m-4 rounded-xl py-3 px-4 text-center  flex-row justify-between items-center">
            <TextInput placeholder="Search for dishes" className="text-lg" />
            <FontAwesome
              name="search"
              size={20}
              color="#FF5C00"
              opacity={0.5}
            />
          </View>

          <View className="mx-4 mt-4">
            <Text className="text-2xl font-bold">
              Recommended ({menu.length})
            </Text>
            {menu.map((item, index) => {
              return <MenuItem key={index} {...item} />;
            })}
          </View>
        </View>
      </ScrollView>
      {cartItems.length !== 0 && (
        <View className="absolute bottom-20 left-0 right-0 mx-2">
          <View className="bg-green-700 flex-row justify-between p-4 rounded-2xl">
            <View>
              <Text className="text-white font-bold text-lg">
                ₹{cartTotal}{" "}
              </Text>
              <Text className="text-white text-xs">
                Extra charges may apply
              </Text>
            </View>
            <View className="justify-center">
              <Pressable
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <Text className="text-white text-lg font-bold">View Cart</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
});

export default RestaurantScreen;
