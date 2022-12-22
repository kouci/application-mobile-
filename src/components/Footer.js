import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from "@expo/vector-icons/Ionicons";
const Footer = ({ navigation }) => {
  const [userAuth, setUserAuth] = useState(null);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        setUserAuth(value);
        console.log("user :");
        console.log(userAuth);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleProfile = () => {
    console.log("nav");
    getData();
    if (userAuth != null) {
      navigation.navigate("Profil");
    } else {
      navigation.navigate("Connexion");
    }
  };
  return (
    <View style={styles.container}>
      <Ionicons
        name="home"
        size={35}
        color="#215778"
        onPress={() => navigation.navigate("Home")}
      />
      <Ionicons
        name="search"
        size={35}
        color="#215778"
        onPress={() => navigation.navigate("Search")}
      />
      <Ionicons
        name="person-circle-outline"
        size={35}
        color="#215778"
        onPress={handleProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
