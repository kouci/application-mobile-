import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Form = ({
  title,
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  navigation,
}) => {
  return (
    <View style={styles.form}>
      <View style={{alignItems: "center"}}>
        {title === "Connexion" ? <Ionicons
        name="person-outline"
        size={80}
        color="#215778"
        onPress={() => navigation.navigate("Settings")}
      /> :
      <Ionicons
        name="person-add-outline"
        size={80}
        color="#215778"
        onPress={() => navigation.navigate("Settings")}
      />
      }
      
      </View>
      <Text style={styles.titel}>{title}</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <View>
        <TouchableHighlight style={styles.btn} onPress={handleSubmit}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Connexion</Text>
        </TouchableHighlight>
      </View>
      {title === "Connexion" && (
        <View style={{ alignItems: "center" }}>
          <Text
          onPress={() => navigation.navigate("Creation")}
            style={{
              color: "#266DA9",
              marginTop: 40,
              fontWeight: "bold",
              fontSize: 18,
              borderBottomWidth: 1,
              borderBottomColor: "#266DA9",
            }}
          >
            S'inscrire
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  form :{
    marginBottom: 100
  },
  titel: {
    fontSize: 37,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#005b96",
    color: "#fff",
    borderRadius: 8,
    height: 40,
    width: 300,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Form;

// <ion-icon name="person-add-outline"></ion-icon>
// person-outline