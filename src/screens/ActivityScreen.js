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
import { useState } from "react";
import {
  addToFavorite,
  getActivitiesFavorites,
  deleteFavActivity,
} from "../utils/ActivityUsers";
import supabase from "../../src/config/SupabaseClient.js";
import { useEffect } from "react";
// TODO Gerer la distance avec la position de l user

const ActivityScreen = ({ route, navigation }) => {
  const { width, height } = Dimensions.get("window");
  const item = route.params;
  const [activity, setActivity] = useState(item);
  const [favorite, setFavorite] = useState(false);

  const data = [
    { id: "1", image: require("../../assets/rondo1.jpg") },
    { id: "2", image: require("../../assets/rondonnée2.jpg") },
  ];

  const getDifficulte = () => {
    if (activity.item.difficulte === 0) {
      return <Text style={styles.RigtText}>Facile</Text>;
    }
    if (activity.item.difficulte === 1) {
      return <Text style={styles.RigtText}>Moyen</Text>;
    }
    if (activity.item.difficulte === 2) {
      return <Text style={styles.RigtText}>Difficile</Text>;
    } else {
    }
  };

  const handleFavorite = () => {
    //addToFavorite(supabase.auth.user().id, activity.item.id)
    if (!supabase.auth.user()) {
      alert("Merci de se connecter pour acceder a cette fonctionnalité");
    } else {
      if (favorite == false) {
        addToFavorite(supabase.auth.user().id, activity.item.id);
        setFavorite(true);
      } else {
        deleteFavActivity(supabase.auth.user().id, activity.item.id);
        setFavorite(false);
      }
    }
  };

  function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return { hours, minutes, seconds };
  }

  const getDuree = () => {
    const { hours, minutes, seconds } = convertSeconds(activity.item.duree);
    if (hours === 0) {
      return (
        <Text style={styles.RigtText}> {minutes + "m" + seconds + "s"} </Text>
      );
    } else {
      return (
        <Text style={styles.RigtText}>
          {" "}
          {hours + "h" + minutes + "m" + seconds + "s"}{" "}
        </Text>
      );
    }
  };

  const setStar = async () => {
    const { data, selectError } = await supabase
      .from("User-activities")
      .select()
      .eq("activityId", activity.item.id)
      .eq("userId", supabase.auth.user().id.toString());

    console.log(data);
    if (data.length != 0) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  useEffect(() => {
    if (supabase.auth.user()) {
      setStar();
    }
  }, []);

  return (
    <View style={[styles.container, { height: height }]}>
      <Header navigation={navigation} />
      <View style={{ height: height / 4, marginEnd: 10 }}>
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 15, color: "#2E4053", fontWeight: "bold" }}>
          {activity.item.name}
        </Text>
        {favorite == true ? (
          <Ionicons
            style={{ marginLeft: 25 }}
            size={30}
            color="#F5EA06"
            name="star"
            onPress={handleFavorite}
          ></Ionicons>
        ) : (
          <Ionicons
            style={{ marginLeft: 25 }}
            size={30}
            color="#215778"
            name="star-outline"
            onPress={handleFavorite}
          ></Ionicons>
        )}
      </View>
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
          {getDifficulte()}
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
          {getDuree()}
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
        <Text style={styles.textDescription}>Description</Text>
        <Text style={{ textAlign: "center", marginHorizontal: 10 }}>
          {activity.item.description}
        </Text>
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
  textDescription: {
    marginTop: 17,
    marginBottom: 13,
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});
