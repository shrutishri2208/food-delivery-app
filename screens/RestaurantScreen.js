import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Switch,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
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
  const [searchItem, setSearchItem] = useState("");

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

  const [menuToDisplay, setMenuToDisplay] = useState(menu);
  const [isVeg, setIsVeg] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSubmit = () => {
    const filterMenu = menu.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setMenuToDisplay(filterMenu);
  };

  onToggle = () => {
    setIsVeg(!isVeg);
    console.log("IS VEG", isVeg);
    const onlyVegMenu = menu.filter((item) => item.veg === true);

    setMenuToDisplay(!isVeg ? onlyVegMenu : menu);
  };

  return (
    <SafeAreaView className="h-full">
      <TouchableOpacity
        className="p-4"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#555555" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="bg-gray-200 m-4 mt-0 p-4 rounded-3xl relative ">
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
          <View className="flex-row  justify-between mx-4">
            <Text className="mx-4 tracking-widest text-lg font-bold my-auto">
              MENU
            </Text>
            <View>
              <Switch
                trackColor={{ false: "#767577", true: "green" }}
                thumbColor={"#f4f3f4"}
                value={isVeg}
                onValueChange={() => onToggle()}
                className="mr-1"
              />
              <Text className="text-green-700 text-center -mt-2 font-bold">
                ONLY VEG
              </Text>
            </View>
          </View>

          <View className="bg-gray-200 m-4 rounded-xl py-3 px-4 text-center  flex-row justify-between items-center">
            <TextInput
              placeholder="Search for dishes"
              className="text-lg"
              value={searchItem}
              onChangeText={setSearchItem}
              onSubmitEditing={() => onSubmit()}
            />
            <Pressable onPress={() => onSubmit()}>
              <FontAwesome
                name="search"
                size={20}
                color="#FF5C00"
                opacity={0.5}
              />
            </Pressable>
          </View>

          <View className="mx-4 mt-4">
            <Text className="text-2xl font-bold">
              Recommended ({menu.length})
            </Text>
            {menuToDisplay.map((item, index) => {
              return <MenuItem key={index} {...item} />;
            })}
          </View>
        </View>
      </ScrollView>
      {cartItems.length !== 0 && (
        <View className="bottom-2 absolute left-0 right-0 mx-2">
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
