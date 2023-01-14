import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import supabase from "../../src/config/SupabaseClient.js";
import ActivityItem from "../components/ActivityItem.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";


function ActivitiesScreen({ navigation }) {
  const [activities, setActivities] = useState(null);
  const [orderActivity, setOrderActivity] = useState("name");
  const [loading, setLoading] = useState(false);
  const [activitySelected, setActivitySelected] = useState("");

 



  const renderAct = ({ item }) => <ActivityItem item={item} navigation={navigation} />;

  const getActivities = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Activity")
        .select()
        .order(orderActivity);
      //console.log(data);
      if (data) {
        setActivities(data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

 

  const renderItem = ({ item, index }) => (
    <TouchableHighlight
      underlayColor="white"
      style={[
        item.name === activitySelected
          ? styles.categoryContainerPressed
          : styles.categoryContainer,
        index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
       
      ]}
    
    >
      <Text style={{ color: "#32749C", fontWeight: "bold", fontSize: 19 }}>
        {item.name}
      </Text>
    </TouchableHighlight>
  );

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.underContainer}>
        <Text style={styles.title}>Vos activités en plein air</Text>
        <View style={{ height: 110 }}>
          <FlatList
            data={activities}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {loading && <ActivityIndicator size={50} style={{marginTop: 100}}/>}
        <View >
          <FlatList showsVerticalScrollIndicator={false} style={{marginHorizontal: 10}} data={activities} renderItem={renderAct} />
        </View>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}

export default ActivitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  underContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  categoryContainer: {
    padding: 20,
    height: 80,
    borderRadius: 20,
    backgroundColor: "white",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  categoryContainerPressed: {
    padding: 20,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#E9E8E8",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
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
    fontSize: 28,
    color: "#2E4053",
    marginLeft: 15,
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

//#E9E8E8
