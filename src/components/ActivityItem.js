import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";





const ActivityItem = ({ item, navigation }) => {
  //navigation.navigate("ActivityPage", {id : item.id})

  const [latitudeState, setLatitudeState] = useState(null);
  const [longitudeState, setLongitudeState] = useState(null);

const getLat = async () => {
  try {
    const savedLat = await AsyncStorage.getItem('latitude');
    setLatitudeState(savedLat);
  } catch (error) {
    console.log(error);
  }
}

const getLong = async () => {
  try {
    const savedLong = await AsyncStorage.getItem('longitude');
    setLongitudeState(savedLong);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getLat();
  getLong();
}, []);

const calculDistance = () => {

    var radlat1 = Math.PI * parseFloat(latitudeState)/180;
		var radlat2 = Math.PI * item.localisation.lat/180;
		var theta = parseFloat(longitudeState)-item.localisation.long;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		dist = dist * 1.609344;
		return Math.trunc(dist);

}

  return (
    <TouchableHighlight
      underlayColor="white"
      onPress={() => navigation.navigate("Activity")}
      style={styles.activityItem}
    >
      <View style={{ position: "relative" }}>
        <View style={styles.headerCard}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginLeft: 15,
            }}
            source={{uri: item.image}}
          />
          <View style={styles.headerInfos}>
            <View style={styles.infos}>
              <Ionicons
                styles={styles.icons}
                size={25}
                color="#EC7063"
                name="location-outline"
              ></Ionicons>
              <Text style={styles.infosText}>Montpellier</Text>
            </View>
            <View style={styles.infos}>
              <Ionicons
                name="pulse-outline"
                size={25}
                color="#EC7063"
              ></Ionicons>
              <Text style={styles.infosText}>facile</Text>
            </View>
            <View style={styles.infos}>
              <Ionicons
                styles={styles.icons}
                size={25}
                color="#EC7063"
                name="hourglass-outline"
              ></Ionicons>
              <Text style={styles.infosText}>2h 30min</Text>
            </View>
          </View>
        </View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>Distance : {calculDistance()} km</Text>
        <Text>{/*`${getLoc()*/}`</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.desc}>
          {item.description}
        </Text>
        <Ionicons
          style={{ position: "absolute", top: 10, left: 280, bottom: 0 }}
          size={30}
          color="#215778"
          name="star-outline"
        ></Ionicons>
      </View>
    </TouchableHighlight>
  );
};

/**
 * 
 * <View style={styles.footerCard}>
        <View style={styles.favoris}>
          <Ionicons
            styles={styles.icons}
            size={35}
            color="#215778"
            name="heart-outline"
          ></Ionicons>
          <Text style={{ color: "grey" }}>Ajouter au favoris</Text>
        </View>
        <View style={styles.favoris}>
          <Ionicons
            styles={styles.icons}
            size={35}
            color="#215778"
            name="thumbs-up-outline"
          ></Ionicons>
          <Text style={{ color: "grey" }}>10 j'aime</Text>
        </View>
      </View>
 */

export default ActivityItem;

const styles = StyleSheet.create({
  headerCard: {
    position: "relative",
    flexDirection: "row",
    marginTop: 20,
  },
  infos: {
    flexDirection: "row",
    alignItems: "center",
  },
  infosText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 4,
  },
  headerInfos: {
    marginLeft: 20,
    marginTop: 15,
  },

  activityItem: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 15,
    paddingBottom: 40,
    shadowColor: "#32749C",
    height: 200,
    marginTop: 10,
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#32749C",
    textAlign: "center",
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    marginHorizontal: 4,
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 0,
  },
  favoris: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
