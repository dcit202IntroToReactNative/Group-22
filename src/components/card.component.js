import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CardComp = ({ imageUrl, title }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 9,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

});

export default CardComp;
