import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Button,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from "react-native";
import Footer from "../components/Footer";
import supabase from "../config/SupabaseClient";
import Header from "../components/Header.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import ActivityItem from "../components/ActivityItem.js";
import {getActivitiesFavorites} from '../utils/ActivityUsers'

const FavoritesScreen = ({navigation}) => {
    const [activities, setActivities] = useState(null);
    const [activitySelected, setActivitySelected] = useState("");
    const [loading, setLoading] = useState(false);
    const renderAct = ({ item }) => <ActivityItem item={item} navigation={navigation} />;
    const getActivities = async () =>{
        try {
            setLoading(true);
            const { data, selectError } = await supabase
            .from("User-activities")
            .select(' *, Activity( *)')
            .eq("isFavorite", true)
            .eq("userId", supabase.auth.user().id);
            if(data){
                console.log(data);
                setActivities(data);
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
       
    }
    useEffect(() => {
        getActivities();
        console.log(activities);
      }, []);
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text style={styles.title}>Activitées favorites</Text>
            {loading && <ActivityIndicator />}
            <View style={styles.content}>
            <ScrollView>
              {activities &&
                activities.map((activity) => (
                  <ActivityItem key={activity.Activity.id} item={activity.Activity} navigation={navigation} style={styles.itemActivity}/>
                ))}
            </ScrollView>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
};


//*[STYLES]
const styles = {
    container : {
        flex : 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    content : {
        marginTop: 50,
        flex  : 1,
    },
    title : {
        marginTop: 20,
        fontSize: 37,
        fontWeight: "bold",
        textAlign: "center",
    },
    itemActivity: {
        width: 330
      }
}
export default FavoritesScreen;