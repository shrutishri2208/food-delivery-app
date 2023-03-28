import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../redux/cart/cartActions";

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>CartScreen</Text>
      {cart.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
      <Pressable className="m-8" onPress={() => dispatch(emptyCart())}>
        <Text>EMPTY CART</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CartScreen;
