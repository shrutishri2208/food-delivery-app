import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import Options from "../components/Options";
import { ScrollView } from "react-native";
import { featured } from "../data";
import Featured from "../components/Featured";
import ItemsList from "../components/ItemsList";
import FooterMenu from "../components/FooterMenu";
import Categories from "../components/Categories";
import RestaurantList from "../components/RestaurantList";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const navigation = useNavigation();
  const restaurants = useSelector((state) => state.restaurants);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className={" h-full p-4"} style={styles.background}>
        {/* HEADER */}
        <View className="header flex flex-row items-center justify-between pb-4 relative">
          <View className="flex flex-row items-center">
            <View>
              <Ionicons name="location-sharp" size={30} color="#FF5C00" />
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
          <View className="mr-2 absolute top-1 right-0">
            <FontAwesome name="user-circle" size={24} color="#FF5C00" />
          </View>
        </View>

        {/* SEARCHBOX*/}
        <View className="searchBox flex-row justify-between items-center space-x-4 pb-4">
          <View className="flex-row items-center bg-gray-200 flex-1 p-2 px-4 rounded-xl">
            <TextInput
              placeholder="Search for dishes & restaurant"
              keyboardType="default"
              className=" flex-1"
            />
            <FontAwesome
              name="search"
              size={20}
              color="#FF5C00"
              opacity={0.5}
            />
          </View>
        </View>

        {/* BODY */}
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <Options />
          {/* <Featured /> */}
          <ItemsList heading={"Top rated near you"} />
          <Categories />
          <ItemsList heading={"30 mins or less!"} />
          <RestaurantList />
        </ScrollView>
        <View className="h-12" style={styles.background}>
          <FooterMenu />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});
export default HomeScreen;
