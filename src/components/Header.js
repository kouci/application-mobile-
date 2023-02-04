import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ navigation }) => {
  //console.log(JSON.stringify(navigation));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MOVE</Text>
      <Ionicons
        style={styles.icon}
        name="settings-outline"
        size={28}
        color="#215778"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 20,
    width: 310,
    height: 40,
    borderBottomColor: "#D4E6F1",
    marginHorizontal: 5,
    borderBottomWidth : 1
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#5499C7",
    opacity: 0.6,
  },
});
