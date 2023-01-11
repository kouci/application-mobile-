import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Slider from "@react-native-community/slider";
import supabase from "../../src/config/SupabaseClient.js";
import ActivityItem from "../components/ActivityItem.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import DropDownPicker from "react-native-dropdown-picker";

const SearchScreen = ({ navigation }) => {
  //states
  const [activities, setActivities] = useState(null);
  const [orderActivity, setOrderActivity] = useState("");
  const [loading, setLoading] = useState(false);

  const [hourValue, setHourValue] = useState(0);
  const [distanceValue, setDistanceValue] = useState(0);
  const [hour, setHour] = useState(0);
  const [distance, setDistance] = useState(0);

  /* valeur local pour dropList activité et localisation open s'active quand la droplist s'ouvre/ */
  const [openLo, setOpenLo] = useState(false);
  const [localisation, setLocalisation] = useState(null);
  const [openAc, setOpenAc] = useState(false);
  const [activity, setActivity] = useState(false);
  // donnée pour tester
  const [items, setItems] = useState([
    { label: "Randonné", value: "Randonné" },
    { label: "Vélo VTT", value: "vélo VTT" },
  ]);

  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
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

  const handleFacile = () => {
    setOrderActivity("facile");
  };
  const handleMoyen = () => {
    setOrderActivity("moyen");
  };
  const handleDifficile = () => {
    setOrderActivity("difficile");
  };

  const renderAct = ({ item }) => <ActivityItem item={item} />;
  //.order(orderActivity);
  const getActivities = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("Activity").select();

      //console.log(data);
      if (data) {
        setActivities(data);
      }
      setLoading(false);
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
    console.log("la valeu de la distance" + distance);
  }, [distance]);

  // useEffect pour le slidbar de la durée
  useEffect(() => {
    console.log("la valeu de heure" + hour);
  }, [hour]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView nestedScrollEnabled={true}>
        <SafeAreaView horizontal={false}>
          <View style={styles.container}>
            <View
              style={{ width: screenWidth - 30, zIndex: 5, marginBottom: 10 }}
            >
              <DropDownPicker
                open={openLo}
                value={localisation}
                items={items}
                searchable
                setOpen={setOpenLo}
                setValue={setLocalisation}
                setItems={setItems}
                placeholder="Localisation"
              />
            </View>
            {!openLo && (
              <View style={{ width: screenWidth - 30, zIndex: 5 }}>
                <DropDownPicker
                  open={openAc}
                  value={activity}
                  items={items}
                  searchable
                  setOpen={setOpenAc}
                  setValue={setActivity}
                  setItems={setItems}
                  placeholder="Activity"
                />
              </View>
            )}

            <View
              style={{
                position: "relative",
                flexDirection: "row",
                alignItems: "center",
                width: screenWidth - 30,
              }}
            >
              {!openAc && (
                <View>
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
                  {hourValue !== 0 && hourValue < 60 && (
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
                  )}
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
                onSlidingComplete={(distanceValue) =>
                  setDistance(distanceValue)
                }
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
                </View>
              )}
            </View>
            
            <View style={styles.header}>
              <View>
                <TouchableHighlight
                  underlayColor="transparent"
                  style={
                    orderActivity === "facile" ? styles.btnPressed : styles.btn
                  }
                  onPress={handleFacile}
                >
                  <Text
                    style={
                      orderActivity === "facile"
                        ? styles.textBtnPressed
                        : styles.textBtn
                    }
                  >
                    Facile
                  </Text>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight
                  underlayColor="transparent"
                  style={
                    orderActivity === "moyen" ? styles.btnPressed : styles.btn
                  }
                  onPress={handleMoyen}
                >
                  <Text
                    style={
                      orderActivity === "moyen"
                        ? styles.textBtnPressed
                        : styles.textBtn
                    }
                  >
                    Moyen
                  </Text>
                </TouchableHighlight>
              </View>
              <View>
                <TouchableHighlight
                  underlayColor="transparent"
                  style={
                    orderActivity === "difficile"
                      ? styles.btnPressed
                      : styles.btn
                  }
                  onPress={handleDifficile}
                >
                  <Text
                    style={
                      orderActivity === "difficile"
                        ? styles.textBtnPressed
                        : styles.textBtn
                    }
                  >
                    Difficile
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
            {loading && <ActivityIndicator />}
            <View>
              {activities &&
                activities.map((activity) => (
                  <ActivityItem
                    key={activity.id}
                    item={activity}
                    navigation={navigation}
                  />
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
    backgroundColor: "white",
    borderRadius: 8,
    height: 30,
    borderWidth: 1,
    borderColor: "#215778",
    width: 100,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPressed: {
    backgroundColor: "#E9E8E8",
    borderRadius: 8,
    height: 30,
    borderWidth: 1,
    borderColor: "grey",
    width: 100,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontWeight: "bold",
  },
  textBtnPressed: {
    fontWeight: "bold",
    color: "#215778",
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
            <View style={styles.searchAuther}>
              <TouchableHighlight>
                <View style={styles.RowContainer}>
                  <Checkbox value={checked} onValueChange={setChecked} />
                  <Text style={styles.textInfos}>Favoris</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight style={{ marginLeft: 150 }}>
                <View style={styles.RowContainer}>
                  <Checkbox value={checked} onValueChange={setChecked} />
                  <Text style={styles.textInfos}>déja fait</Text>
                </View>
              </TouchableHighlight>
            </View>

 
 */
