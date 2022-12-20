import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList,
  TextInput,
} from "react-native";

import supabase from "../../src/config/SupabaseClient.js";
import ActivityItem from "./ActivityItem.js";

const ProfilCreation = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
   setLoading(true);
   const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    setLoading(false)
    setEmail(null)
    setEPassword(null)
  };

  /*

   */

  return (
    <View style={styles.form}>
      <Text style={styles.titel}>Connection</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <View>
        <TouchableHighlight style={styles.btn} onPress={handleSubmit}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Connection</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  titel: {
   fontSize: 35,
   fontWeight : "bold"
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

export default ProfilCreation;
