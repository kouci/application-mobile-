import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";

const Form = ({
  title,
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.titel}>{title}</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <View>
        <TouchableHighlight style={styles.btn} onPress={handleSubmit}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Connexion</Text>
        </TouchableHighlight>
      </View>
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
