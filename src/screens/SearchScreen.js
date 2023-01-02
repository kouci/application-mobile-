import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  TextInput,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Slider from "@react-native-community/slider";
import supabase from "../../src/config/SupabaseClient.js";
import ActivityItem from "../components/ActivityItem.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Checkbox from "expo-checkbox";

const SearchScreen = ({ navigation }) => {
  //states

  const [activities, setActivities] = useState(null);
  const [orderActivity, setOrderActivity] = useState("name");
  const [checked, setChecked] = React.useState(false);
  const [activity, setActivity] = useState("Choisissez une activity");
  const [adresse, setAdresse] = useState("Localisation");
  const [hourValue,setHourValue] = useState(0)
  const [distanceValue,setDistanceValue] = useState(0)
  const [hour, setHour] = useState(0);
  const [distance, setDistance] = useState(0);

  const screenWidth = Dimensions.get("window").width;

  

  const getImages = async () => {
    try {
      const { data, error } = await supabase.storage.getBucket("photos");
      if (data) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDifficulte = () => {
    setOrderActivity("difficulte");
  };
  const handleAlpha = () => {
    setOrderActivity("name");
  };
  const handleDuree = () => {
    setOrderActivity("duree");
  };

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

  

  // Les useEffects 
  useEffect(() => {
    getActivities();
    //console.log(activities);
    getImages();
  }, [orderActivity]);

  // useEffect pour le slidbar de la distance 
 useEffect(() => {
    console.log("la valeu de la distance"+distance) 
  },[distance]);

   // useEffect pour le slidbar de la durée
 useEffect(() => {
  console.log("la valeu de heure"+hour) 
},[hour]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView>
        <SafeAreaView horizontal={false}>
          <View style={styles.container}>
            <TextInput
              style={[styles.input, { width: screenWidth - 30 }]}
              value={adresse}
              onChangeText={setAdresse}
            />
            <TextInput
              style={[styles.input, { width: screenWidth - 30 }]}
              value={activity}
              onChangeText={setActivity}
            />
            <View
              style={{
                position: "relative",
                flexDirection: "row",
                alignItems: "center",
                width: screenWidth - 30,
              }}
            >
              <Text>Durée:</Text>
              <Slider
                style={{ width: "80%", height: 50, marginLeft: 15 }}
                step={1.0}
                value={hourValue}
                onValueChange={(value) => setHourValue(value)}
                onSlidingComplete={(hourValue) => setHour(hourValue)}
                minimumValue={0}
                maximumValue={420}
                minimumTrackTintColor="#32749C"
                maximumTrackTintColor="#000000"
              />
              {hourValue !== 0 && hourValue >= 60 && (
                <Text
                  style={{
                    postion: "absolute",
                    right: 60,
                    top: -15,
                    color: "gray",
                  }}
                >
                  {Math.floor(hourValue / 60)} h {hourValue % 60}min
                </Text>
              )}
              {hourValue !== 0 && hourValue < 60 &&
                 <Text
                 style={{
                   postion: "absolute",
                   right: 60,
                   top: -15,
                   color: "gray",
                 }}
               >
                 {hourValue % 60}min
               </Text>
              }
            </View>
            <View
              style={{
                position: "relative",
                flexDirection: "row",
                alignItems: "center",
                width: screenWidth - 30,
              }}
            >
              <Text>Distance:</Text>
              <Slider
                style={{ width: "80%", height: 50 }}
                minimumValue={0}
                step={1.0}
                maximumValue={50}
                value={distanceValue}
                onValueChange={(value) => setDistanceValue(value)}
                onSlidingComplete={(distanceValue) => setDistance(distanceValue)}
                minimumTrackTintColor="#32749C"
                maximumTrackTintColor="#000000"
              />
              {distanceValue !== 0 && (
                <Text
                  style={{
                    postion: "absolute",
                    right: 60,
                    top: -15,
                    color: "gray",
                  }}
                >
                  {distanceValue} Km
                </Text>
              )}
            </View>
            <View style={styles.searchAuther}>
              <View>
                <View>
                  <TouchableHighlight
                    style={styles.btnSearch}
                    onPress={handleAlpha}
                  >
                    <View style={styles.RowContainer}>
                      <Checkbox value={checked} onValueChange={setChecked} />
                      <Text style={styles.textInfos}>facile</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View>
                  <TouchableHighlight
                    style={styles.btnSearch}
                    onPress={handleAlpha}
                  >
                    <View style={styles.RowContainer}>
                      <Checkbox value={checked} onValueChange={setChecked} />
                      <Text style={styles.textInfos}>Moyenne</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View>
                  <TouchableHighlight
                    style={styles.btnSearch}
                    onPress={handleAlpha}
                  >
                    <View style={styles.RowContainer}>
                      <Checkbox value={checked} onValueChange={setChecked} />
                      <Text style={styles.textInfos}>Difficile</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={{ marginLeft: 100 }}>
                <TouchableHighlight
                  style={styles.btnSearch}
                  onPress={handleAlpha}
                >
                  <View style={styles.RowContainer}>
                    <Checkbox value={checked} onValueChange={setChecked} />
                    <Text style={styles.textInfos}>Favoris</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.btnSearch}
                  onPress={handleAlpha}
                >
                  <View style={styles.RowContainer}>
                    <Checkbox value={checked} onValueChange={setChecked} />
                    <Text style={styles.textInfos}>dèja fait</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View>
              {activities &&
                activities.map((activity) => (
                  <ActivityItem key={activity.id} item={activity} />
                ))}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  RowContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  textInfos: {
    marginLeft: 4,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
  },
  searchAuther: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SearchScreen;

/**
 * 
 * 

 <View style={styles.header}>
        <View>
          <TouchableHighlight style={styles.btn} onPress={handleDifficulte}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Difficulté
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight style={styles.btn} onPress={handleDuree}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Durée</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight style={styles.btn} onPress={handleAlpha}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Alphabetique
            </Text>
          </TouchableHighlight>
        </View>
      </View>
 */
