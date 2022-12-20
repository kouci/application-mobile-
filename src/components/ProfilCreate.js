import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from '@expo/vector-icons/Ionicons';

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
import Form from "./Form.js";

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
      <Form title="Inscription" handleSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
 
});

export default ProfilCreation;
