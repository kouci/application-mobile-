import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native';

import supabase from "../../src/config/SupabaseClient.js";
import ActivityItem from "./ActivityItem.js";



const List = (props) => {
  const [activities, setActivities] = useState(null);
  const [orderActivity, setOrderActivity] = useState("name");

  const getImages = async () => {
    try {
const {data, error} =  await supabase.storage.getBucket('photos');
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleDifficulte = () =>{
      setOrderActivity("difficulte");
  }
  const handleAlpha = ()=>{
    setOrderActivity("name");
  }
  const handleDuree = () => {
      setOrderActivity("duree");
  }

  const renderAct = ({item}) => (
    <ActivityItem item={item}/>
  )


  const getActivities = async () => {
    try {
      const { data, error } = await supabase.from("Activity").select().order(orderActivity);
      //console.log(data);
      if (data) {
        setActivities(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getActivities();
    //console.log(activities);
    getImages();
  }, [orderActivity]);

  return (
    <View>
      <View style = {props.style.header}>
        <View >
          <TouchableHighlight
            style={props.style.btn}
            onPress={handleDifficulte}
          >
            <Text style={{color: "white", fontWeight: "bold"}}>Difficulté</Text>
          </TouchableHighlight>
        </View>
        <View >
          <TouchableHighlight
            style={props.style.btn}
            onPress={handleDuree}
          >
            <Text style={{color: "white", fontWeight: "bold"}}>Durée</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={props.style.btn}
            onPress={handleAlpha}
          >
            <Text style={{color: "white", fontWeight: "bold"}}>Alphabetique</Text>
          </TouchableHighlight>
        </View>
        
      </View>
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
