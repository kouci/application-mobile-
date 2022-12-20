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
      <StatusBar style="auto" />
      <List style = {styles}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  btn:{
    backgroundColor: '#005b96',
    borderRadius: 8,
    height : 40,
    width : 120,
    margin : 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header : {
    marginTop : 50,
    flexDirection : "row"
  }
});

