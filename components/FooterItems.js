import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const FooterItems = ({ imgURL, title, active }) => {
  return (
    <TouchableOpacity className="items-center">
      {active ? (
        <FontAwesome
          name="user-circle"
          size={32}
          color={"#FF5C00"}
          className="m-auto"
        />
      ) : (
        <FontAwesome name="user-circle" size={32} color={"black"} />
      )}
      <Text className="text-black text-xs mt-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default FooterItems;
