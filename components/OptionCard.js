import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const OptionCard = ({ title, imgURL }) => {
  return (
    <TouchableOpacity className=" flex-1 ">
      <Image
        // source={require("../assets/1.jpg")}
        source={imgURL}
        style={{ width: 110, height: 80 }}
        className="rounded-2xl m-auto"
      />
      <Text className="text-lg text-black text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default OptionCard;
