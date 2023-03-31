import { View, Text, StyleSheet, Image, Pressable, Button } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { urlFor } from "../sanity";
import { useSelector, useDispatch } from "react-redux";
import { addItem, increaseItem } from "../redux/cart/cartActions";

const MenuItem = ({
  _key,
  image,
  title,
  price,
  ratings,
  noOfRatings,
  veg,
  bestseller,
}) => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <View
      className="mt-8 flex-row justify-between pb-4 relative"
      style={styles.line}
    >
      <View className="flex-1">
        <View className="flex-row items-center">
          {veg ? (
            <FontAwesome name="circle" size={10} color="green" />
          ) : (
            <FontAwesome name="circle" size={10} color="red" />
          )}
          {bestseller && (
            <Text className="ml-2 text-orange-600">Bestseller</Text>
          )}
        </View>
        <Text className="text-xl font-bold">{title}</Text>
        <Text className="text-xl text-gray-500">₹{price}</Text>
        <Text className="text-gray-500 my-2">
          {ratings} ({noOfRatings})
        </Text>
        <Pressable
          className="border-gray-500 border-2 w-28 px-2 py-1 rounded-full flex-row items-center justify-center  mt-4"
          onPress={() => setIsModal(true)}
        >
          <Text className="items-center text-gray-500 justify-between">
            More Details
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color="#555555"
          />
        </Pressable>
      </View>
      <Pressable onPress={() => setIsModal(true)} className="flex-2 ">
        <Image
          source={{ uri: urlFor(image).url() }}
          style={{ height: 150, width: 150 }}
          className="rounded-2xl"
        />
        {cartItems.some((item) => item.id === _key) ? (
          <Text className="bg-white text-green-700 font-extrabold text-2xl text-center p-1 px-8 shadow-md shadow-black rounded-lg bottom-5">
            ADDED
          </Text>
        ) : (
          <Pressable
            className="items-center"
            onPress={() => {
              dispatch(
                increaseItem({
                  id: _key,
                  title: title,
                  price: price,
                })
              );
            }}
          >
            <Text className="bg-white text-green-700 font-extrabold text-2xl text-center p-1 px-8 shadow-md shadow-black rounded-lg bottom-5">
              ADD
            </Text>
          </Pressable>
        )}
      </Pressable>
      <Modal
        isVisible={isModal}
        backdropOpacity={0.7}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={500}
        animationOutTiming={500}
        onBackButtonPress={() => setIsModal(false)}
        onBackdropPress={() => setIsModal(false)}
        style={{ margin: 0 }}
        className="justify-end"
      >
        <View className="">
          <Image
            source={{ uri: urlFor(image).url() }}
            style={{ height: 300, width: "100%" }}
            className="rounded-t-3xl"
          />
          <Pressable
            className="absolute right-4 top-4"
            onPress={() => setIsModal(false)}
          >
            <AntDesign name="closecircle" size={30} color="white" />
          </Pressable>
          <View className="bg-white px-4 pt-4">
            <View className="flex-row justify-between">
              <View className="">
                <View className="flex-row items-center">
                  {veg ? (
                    <FontAwesome name="circle" size={10} color="green" />
                  ) : (
                    <FontAwesome name="circle" size={10} color="red" />
                  )}
                  {bestseller && (
                    <Text className="ml-2 text-orange-600">Bestseller</Text>
                  )}
                </View>

                <Text className="text-xl font-bold">{title}</Text>
                <Text className="text-xl text-gray-500 mt-2">₹{price}</Text>
                <Text className="text-gray-500 mt-2">
                  {ratings} ({noOfRatings})
                </Text>
              </View>
              {cartItems.some((item) => item.id === _key) ? (
                <Text className="bg-white text-green-700 font-extrabold text-2xl text-center p-1 px-8 shadow-md shadow-black rounded-lg h-10">
                  ADDED
                </Text>
              ) : (
                <Pressable
                  className="items-center"
                  onPress={() => {
                    dispatch(
                      increaseItem({
                        id: _key,
                        title: title,
                        price: price,
                      })
                    );
                  }}
                >
                  <Text className="bg-white text-green-700 font-extrabold text-2xl text-center p-1 px-8 shadow-md shadow-black rounded-lg h-10">
                    ADD
                  </Text>
                </Pressable>
              )}
            </View>
            <Text className="bg-white text-gray-500 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
});

export default MenuItem;
