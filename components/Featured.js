import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { featured } from "../data";
import FeaturedItem from "./FeaturedItem";

const Featured = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingBottom: 12 }}
      className="mb-4"
    >
      {featured.map((item) => {
        return <FeaturedItem key={item.id} {...item} />;
      })}
    </ScrollView>
  );
};

export default Featured;
