import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import supabase from "../config/SupabaseClient";
const Footer = ({ navigation }) => {
  const [userAuth, setUserAuth] = useState(supabase.auth.user());
  const [colorHomeIcon, setColorHomeIcon] = useState("#92C5CE");
  const [colorSearchIcon, setColorSearchIcon] = useState("#92C5CE");
  const [colorProfilIcon, setColorProfilIcon] = useState("#92C5CE");
  const getData = async () => {
    try {
      const value = supabase.auth.user();
      //console.log(value);
      if (value !== null) {
        setUserAuth(value);
        console.log(value);
        console.log("user :");
        //console.log(userAuth);
      } else {
        console.log("errrrr");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleProfile = () => {
    //console.log(us);
    //getData();
    //console.log(supabase.auth.session());
    //console.log('-------------');
    setColorSearchIcon("#92C5CE");
    setColorProfilIcon("#215778");
    setColorHomeIcon("#92C5CE");
    console.log(userAuth);
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
        color={colorHomeIcon}
        onPress={() => {
          setColorSearchIcon("#92C5CE");
          setColorProfilIcon("#92C5CE");
          setColorHomeIcon("#215778");
          navigation.navigate("Home");
        }}
      />
      <Ionicons
        name="search"
        size={35}
        color={colorSearchIcon}
        onPress={() => {
          setColorSearchIcon("#215778");
          setColorProfilIcon("#92C5CE");
          setColorHomeIcon("#92C5CE");
          navigation.navigate("Search");
        }}
      />
      <Ionicons
        name="person-circle-outline"
        size={35}
        color={colorProfilIcon}
        onPress={handleProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: 70,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default Footer;
