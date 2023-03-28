import { View, StyleSheet, Text } from "react-native";
import React from "react";
import OptionCard from "./OptionCard";
import { categories } from "../data";

const Options = () => {
  return (
    <View className="flex-row py-6">
      {categories.map((category) => {
        return <OptionCard key={category.id} {...category} />;
      })}
    </View>
  );
};

export default Options;
