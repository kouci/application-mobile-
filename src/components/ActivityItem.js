import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ActivityItem = ({ item }) => {
  return (
    <View style={styles.activityItem}>
      <Image  style={{width: 40, height: 40}} source={require("../../assets/rondo1.jpg")} />
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default ActivityItem;

const styles = StyleSheet.create({
  activityItem: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    image: {
      height: 100,
      width: 200,
      borderRadius: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#32749C",
  },
  desc: {
    fontSize: 16,
  },
});
