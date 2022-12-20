import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import supabase from "../../src/config/SupabaseClient.js";
import ActivityItem from "./ActivityItem.js";

const List = () => {
  const [activities, setActivities] = useState(null);
  //console.log(supabase);

  const getActivities = async () => {
    try {
      const { data, error } = await supabase.from("Activity").select();
      console.log(data);
      if (data) {
        setActivities(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderAct = ({item}) => (
    <ActivityItem item={item}/>
  )

  
 

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={activities} renderItem={renderAct}></FlatList>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activityItem : {
    backgroundColor: "#D9E3E9",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color:"#32749C"
  },
  desc: {
    fontSize:16,
  }
});
