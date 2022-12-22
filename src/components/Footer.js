import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const Footer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={35} color="#215778" onPress={() => navigation.navigate("Home")}/>
      <Ionicons name="search" size={35} color="#215778" onPress={() => navigation.navigate("Search")}/>
      <Ionicons name="person-circle-outline" size={35} color="#215778" onPress={() => navigation.navigate("Creation")} />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: 50,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default Footer;
