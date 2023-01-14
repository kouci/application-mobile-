import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import supabase from "../config/SupabaseClient";
const Footer = ({ navigation }) => {
  const [navigationName,setNavigationName] = useState("home")
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
    console.log("----");
    console.log(supabase.auth.session());
    console.log("-----");
    if (supabase.auth.session() != null) {
      navigation.navigate("Profil");
    } 
    else {
      navigation.navigate("Connexion");
      }
      
    
  };
   

  return (
    <View style={styles.container}>
     
      <Ionicons
        name="home"
        size={35}
        style={{marginTop: 5}}
        color={"#215778"}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    
     
      <Ionicons
        name="search"
        size={35}
        color={"#215778"}
        style={{marginTop: 5}}
        onPress={() => {
          setNavigationName("search")
          navigation.navigate("Search");
        }}
      />

     
      <Ionicons
        name="person-circle-outline"
        size={35}
        color={"#215778"}
        style={{marginTop: 5}}
        onPress={handleProfile}
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#D4E6F1",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: 60,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default Footer;
