import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ActivityItem = ({ item, navigation }) => {
  //navigation.navigate("ActivityPage", {id : item.id})
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
            source={require("../../assets/rondo1.jpg")}
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
