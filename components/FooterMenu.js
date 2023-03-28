import { View, Text } from "react-native";
import React from "react";
import { menu } from "../data";
import FooterItems from "../components/FooterItems";

const FooterMenu = () => {
  return (
    <View className="flex-row justify-between items-center p-2">
      {menu.map((item) => {
        return <FooterItems key={item.id} {...item} />;
      })}
    </View>
  );
};

export default FooterMenu;
