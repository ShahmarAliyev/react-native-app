import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <Image alt="" source={{ uri: result.image_url }} style={styles.image} />
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
