import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import client from "../sanity";

const ItemsList = ({ heading }) => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    client
      .fetch(`*[_type == "featured"]`)
      .then((data) => {
        setFeatured(data);
        setLoading(false);
      })
      .catch(console.error);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className="my-4">
      <Text className="text-black text-xl font-bold">{heading}</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingVertical: 12, columnGap: 16 }}
        >
          {featured.map((item) => {
            return <Items key={item._id} {...item} />;
          })}
          {featured.map((item) => {
            return <Items key={item._id} {...item} />;
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default ItemsList;
