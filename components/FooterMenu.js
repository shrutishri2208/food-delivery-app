import { View, Text, Pressable } from "react-native";
import React from "react";
import { menu } from "../data";
import FooterItems from "../components/FooterItems";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const FooterMenu = () => {
  const route = useRoute();
  console.log(route.name);

  return (
    <View className="flex-row flex-1 items-center pt-4 ">
      {/* {menu.map((item) => {
        return <FooterItems key={item.id} {...item} />;
      })} */}
      <Pressable className="flex-1 items-center">
        <Ionicons name="fast-food" size={30} color="#FF5C00" />
      </Pressable>
      <Pressable className="flex-1 items-center">
        <Ionicons name="cart" size={30} color="#FF5C00" />
      </Pressable>
    </View>
  );
};

export default FooterMenu;
