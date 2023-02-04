import React, { useState, useEffect } from "react";
import { Text, View , StyleSheet, Button} from 'react-native'
import Slider from '@react-native-community/slider';
import * as Location from "expo-location";

async function getLocation() {

    let { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      
    }
  
    let { coords } = await Location.getCurrentPositionAsync()
    //console.log(coords);
    if (coords) {
      const { latitude, longitude } = coords;
    }
  return coords.altitude;
  }

  export default Geoloc;