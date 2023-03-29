import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart, deleteItem } from "../redux/cart/cartActions";

const CartScreen = () => {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const extraCharges = 31 + 45;
  const finalCartTotal = cartTotal + extraCharges;

  useEffect(() => {
    StatusBar.setBackgroundColor("#fff");
  }, []);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <TouchableOpacity
        className="p-4 bg-white"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#555555" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="">
          <View className="bg-white mx-4 mt-4 rounded-xl">
            <View style={styles.line} className="pb-5">
              {cartItems.map((item, index) => {
                return (
                  <View
                    key={index}
                    className="flex-row justify-between p-5 pb-0"
                  >
                    {/* <Text>{item.id}</Text> */}
                    <View>
                      <Text className="text-lg font-semibold text-gray-500">
                        {item.title}
                      </Text>
                    </View>
                    <View>{item.count}</View>
                    <Text className="font-black text-lg">₹{item.price}</Text>
                    {/* <Button
                      title="DELETE"
                      onPress={() => dispatch(deleteItem(item))}
                    /> */}
                  </View>
                );
              })}
            </View>
            <Pressable
              onPress={() => navigation.goBack()}
              className="flex-row items-center p-5"
              style={styles.line}
            >
              <AntDesign name="plus" size={12} color="black" />
              <Text className="text-lg">{"   "}Add more items</Text>
            </Pressable>
            <View className="flex-row items-center p-5 justify-between">
              <Text className="text-lg">Add cooking requests</Text>
              <AntDesign name="pluscircleo" size={18} color="#555555" />
            </View>
          </View>

          <Text className="text-lg font-bold m-4">Offers & Benefits</Text>

          <View className=" bg-white mx-4 rounded-xl">
            <View className="p-5 flex-row justify-between " style={styles.line}>
              <View className="flex-row items-center gap-1">
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={24}
                  color="#FF5C00"
                />
                <View>
                  <Text className="text-lg font-bold">TRYNEW</Text>
                  <Text>Save another ₹79 on this order </Text>
                </View>
              </View>
              <Text className="text-orange-600 font-bold">Apply</Text>
            </View>
            <Text className="p-3 text-center">View more coupons</Text>
          </View>

          <Text className="text-lg font-bold m-4">Bill Details</Text>

          <View className="bg-white mx-4 p-5 pt-3 rounded-xl gap-y-2">
            <View className="flex-row justify-between">
              <Text className="font-semibold text-gray-500 text-lg">
                Item Total
              </Text>
              <Text className="font-black text-lg">₹{cartTotal}</Text>
            </View>
            <View className="flex-row justify-between pb-2" style={styles.line}>
              <Text className="font-semibold text-gray-500 text-lg">
                Delivery Fee | 1.4km
              </Text>
              <Text className="font-black text-lg">₹31.00</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-bold text-gray-500 text-lg">
                Delivery Tip
              </Text>
              <Text className="font-bold text-orange-600 text-lg">Add Tip</Text>
            </View>
            <View className="flex-row justify-between pb-2" style={styles.line}>
              <Text className="font-bold text-gray-500 text-lg">
                Govt Taxes & Other Chrages
              </Text>
              <Text className="font-bold text-lg">₹45</Text>
            </View>
            <View className="flex-row justify-between pt-2">
              <Text className="font-bold text-lg">To Pay</Text>
              <Text className="font-bold text-lg">₹{finalCartTotal}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="bg-white absolute bottom-0 left-0 right-0 p-4 rounded-t-xl flex-row justify-between items-center">
        <View>
          <Text className="text-2xl font-bold">₹{finalCartTotal}</Text>
          <Text className="text-green-700 font-bold">View Detailed Bill</Text>
        </View>
        <Pressable className="bg-green-700 py-4 px-12 rounded-xl">
          <Text className="text-white text-lg font-bold">Proceed to Pay</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: 1,
    borderStyle: "dotted",
  },
});

export default CartScreen;
