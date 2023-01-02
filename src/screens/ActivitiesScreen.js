import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableHighlight,
  FlatList,
} from "react-native";

import supabase from "../../src/config/SupabaseClient.js";
import ActivityItem from "../components/ActivityItem.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Carousel from 'react-native-snap-carousel';

function ActivitiesScreen({ navigation }) {
  const [activities, setActivities] = useState(null);
  const [activityName,setActivitiesName] = useState();
  const [orderActivity, setOrderActivity] = useState("name");

  
   const SLIDER_WIDTH = Dimensions.get('window').width + 80
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


  const renderAct = ({ item }) => <ActivityItem item={item} />;

  const getActivities = async () => {
    try {
      const { data, error } = await supabase
        .from("Activity")
        .select()
        .order(orderActivity);
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
    //console.log(activities)
  }, []);

 /*
 const [hour, setHour] = useState(0);

  const incrementHour = () => {
    setHour(hour + 1);
  };

    <Button title="Incrémenter l'heure" onPress={incrementHour} />
      <Text>{Math.floor(hour / 60)}h {hour % 60}min</Text>
 
 
 */ 
   return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      
      <Carousel

              data={activities}
              renderItem={renderAct}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              useScrollView={true}  
              
              
            />


      <Footer navigation={navigation} />
    </View>
  );
}

/*
 return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={activities}
              renderItem={renderAct}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
*/


export default ActivitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activityItem: {
    backgroundColor: "#D9E3E9",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#32749C",
  },
  desc: {
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#005b96",
    color: "#fff",
    borderRadius: 8,
    height: 40,
    width: 120,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
});
