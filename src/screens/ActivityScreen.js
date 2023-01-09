import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";

const ActivityScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  console.log(height)
  const data = [
    { id: "1", image: require("../../assets/rondo1.jpg") },
    { id: "2", image: require("../../assets/rondonnée2.jpg") },
  ];

  return (
    <View style={[styles.container, {height: height}]}>
      <Header navigation={navigation} />
      <View style={{ height: height/4, marginEnd: 10 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Image
                style={{
                  width: width - 20,
                  height: "100%",
                  marginLeft: 10,
                  borderRadius: 5,
                  elevation: 8,
                 
                }}
                source={item.image}
              />
            </View>
          )}
        />
      </View>
      <Text style={{ fontSize: 15, color: "#2E4053", fontWeight: "bold"}}>
        Randonné Pic saint louop
      </Text>
      <View style={styles.infos}>
      <View style={styles.rowContainer}>
          <View style={styles.containerText}>
            <Ionicons
              styles={styles.icons}
              size={25}
              color="#EC7063"
              name="pulse-outline"
            ></Ionicons>
            <Text style={styles.text}> Difficulté</Text>
          </View>
          <Text style={styles.RigtText}>Facile</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.containerText}>
            <Ionicons
              styles={styles.icons}
              size={25}
              color="#EC7063"
              name="hourglass-outline"
            ></Ionicons>
            <Text style={styles.text}> Durée</Text>
          </View>
          <Text style={styles.RigtText}> 3h:50 min </Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.containerText}>
            <Ionicons
              styles={styles.icons}
              size={25}
              color="#EC7063"
              name="golf-outline"
            ></Ionicons>
            <Text style={styles.text}>Distance</Text>
          </View>
          <Text style={styles.RigtText}> 15 Km </Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.containerText}>
            <Ionicons
              styles={styles.icons}
              size={25}
              color="#EC7063"
              name="trending-up-outline"
            ></Ionicons>
            <Text style={styles.text}>Dénevilé</Text>
          </View>
          <Text style={styles.RigtText}> 200 M</Text>
        </View>
        <MapView
          style={{ height: 250, width: width - 20, marginTop: 10 }}
          initialRegion={{
            latitude: 43.610769,
            longitude: 3.876716,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 43.610769, longitude: 3.876716 }} />
        </MapView>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default ActivityScreen;

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

  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#2E4053",
    
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
  },
  RigtText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#32749C",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
});
