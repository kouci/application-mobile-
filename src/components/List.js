import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import supabase from "../../src/config/SupabaseClient.js";

const List = () => {
  const [activities, setActivities] = useState(null);
    //console.log(supabase);
  const getActivities = async () => {
    try {
        const {data, error} = await supabase.from('Activity').select()
        console.log(data)
        if(data){
            setActivities(data);
        }
      } catch (error) {
        console.error(error)
  };
  }
  useEffect(() => {
    getActivities()
    console.log(activities);
  },[]);

  return <View></View>;
};

export default List;
