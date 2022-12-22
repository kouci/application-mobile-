import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native'
import supabase from "../../src/config/SupabaseClient.js";


const ActivityItem = ({item}) => {
  
  return (
   <View  style={styles.activityItem}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.description}</Text>
         
    </View>
  )
}

export default ActivityItem

const styles = StyleSheet.create({

   activityItem : {
     backgroundColor: "#D9E3E9",
     marginBottom: 10,
     borderRadius: 5,
     padding: 10,
     marginHorizontal: 7,
     shadowColor: "black",
     shadowOffset: { width: 5, height: 5 },
     elevation: 30,
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