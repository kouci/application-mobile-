import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import supabase from "./src/config/SupabaseClient.js";
import List from './src/components/List.js'
import React from 'react';


export default function App() {

  //const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  //console.log(supabase);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
