import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import supabase from "../../src/config/SupabaseClient.js";


const List = (props) => {
  const [activities, setActivities] = useState(null);

  const handleDifficulte = () =>{
      console.log("difficulte");
  }
  const handleAlpha = ()=>{
      console.log("alpha");
  }
  const handleDuree = () => {
      console.log("duree");
  }
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
  useEffect(() => {
    getActivities();
    console.log(activities);
  }, []);

  return (
    <View>
      <View style = {props.style.header}>
        <View >
          <TouchableHighlight
            style={props.style.btn}
            onPress={handleDifficulte}
          >
            <Text>Difficulté</Text>
          </TouchableHighlight>
        </View>
        <View >
          <TouchableHighlight
            style={props.style.btn}
            onPress={handleDuree}
          >
            <Text>Durée</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={props.style.btn}
            onPress={handleAlpha}
          >
            <Text>Alphabetique</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default List;
