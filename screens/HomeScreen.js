import {
  View,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import ItemsList from "../components/ItemsList";
import Categories from "../components/Categories";
import RestaurantList from "../components/RestaurantList";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const navigation = useNavigation();
  const restaurants = useSelector((state) => state.restaurants.restaurants);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchRestaurants, setSearchRestaurants] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSubmit = () => {
    const searchRestaurants = restaurants.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchRestaurants(searchRestaurants);
  };

  return (
    <SafeAreaView>
      <View className=" h-full p-4 bg-gray-100">
        {/* HEADER */}
        <View className=" header flex flex-row items-center justify-between pb-4 relative">
          <View className="flex flex-row items-center">
            <View>
              <Ionicons name="location-sharp" size={30} color="#b30000" />
            </View>
            <View className="ml-2">
              <Text className="text-xl font-bold text-black">
                Mathikere <AntDesign name="down" size={14} color="black" />
              </Text>

              <Text className="text-xs text-gray-400">
                Mathikere Extension, Mathikere, Bengaluru, Karnataka, 560054
              </Text>
            </View>
          </View>
          <Pressable
            className="mr-2 absolute top-1 right-0 p-1 "
            onPress={() => navigation.navigate("Cart")}
          >
            <Ionicons name="cart" size={26} color="#b30000" className="" />
          </Pressable>
        </View>

        {/* SEARCHBOX*/}
        <View className="searchBox flex-row justify-between items-center space-x-4 pb-4">
          <View className="flex-row items-center bg-gray-200 flex-1 p-2 px-4 rounded-xl">
            <TextInput
              placeholder="Search for dishes & restaurant"
              keyboardType="default"
              className=" flex-1"
              value={searchTerm}
              onChangeText={setSearchTerm}
              onSubmitEditing={() => onSubmit()}
            />
            {searchTerm === "" ? (
              <Pressable onPress={() => onSubmit()}>
                <FontAwesome name="search" size={20} color="#b30000" />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setSearchTerm("");
                  setSearchRestaurants(restaurants);
                }}
              >
                <AntDesign name="close" size={24} color="#b30000" />
              </Pressable>
            )}
          </View>
        </View>

        {/* BODY */}
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* <Options /> */}
          {/* <Featured /> */}
          <Categories />
          <ItemsList heading={"Top rated near you"} />
          {/* <ItemsList heading={"30 mins or less!"} /> */}
          <RestaurantList
            searchTerm={searchTerm}
            searchRestaurants={searchRestaurants}
          />
        </ScrollView>
        {/* <View className="h-12" style={styles.background}>
          <FooterMenu />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
