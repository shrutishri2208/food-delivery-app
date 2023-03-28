import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import client from "../sanity";

const PROJECT_ID = "rec7oikj";
const DATASET = "production";
const QUERY = encodeURIComponent(`*[_type == "categories"]`);

const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    client
      .fetch(`*[_type == "categories"]`)
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text className="text-black text-xl font-bold mt-8">
            What's on your mind?
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingVertical: 12 }}
          >
            <View className="flex-row">
              {categories.map((item) => {
                return <CategoryCard {...item} key={item._id} />;
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Categories;
