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
  Button,
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
  const [allActivity, setAllActivity] = useState(null);
  const [hourValue, setHourValue] = useState(0);
  const [distanceValue, setDistanceValue] = useState(0);
  const [hour, setHour] = useState(0);
  const [distance, setDistance] = useState(0);
  const [difficult, setDifficult] = useState(null);
  /* valeur local pour dropList activité et localisation open s'active quand la droplist s'ouvre/ */
  const [openLo, setOpenLo] = useState(false);
  const [localisation, setLocalisation] = useState(null);
  const [openAc, setOpenAc] = useState(false);
  const [activity, setActivity] = useState(false);

  // donnée pour afficher les type d'activities 
  const [items, setItems] = useState([
    { label: "Randonné", value: "Randonné" },
    { label: "Vélo VTT", value: "VTT" },
    { label: "Accrobranche", value: "Accrobranche" },
    { label: "Pêche", value: "Pêche" },
    { label: "Escalade", value: "Escalade" },
  ]);


  const screenWidth = Dimensions.get("window").width;

  const getAllActivities = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("List-activities").select();

      if (data) {
        setAllActivity(data);
        console.log(data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getImages = async () => {
    try {
      const { data, error } = await supabase.storage.getBucket("photos");
      if (data) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacile = async () => {
    setDifficult(0);
    setOrderActivity("facile");
  };
  const handleMoyen = async () => {
    setDifficult(1);
    setOrderActivity("moyen");
  };
  const handleDifficile = async () => {
    setDifficult(2);
    setOrderActivity("difficile");
  };

  const renderAct = ({ item }) => <ActivityItem item={item} />;
  //.order(orderActivity);
  const getActivities = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("Activity").select();

      if (data) {
        setActivities(data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getActivitiesFilter = async () => {
    setLoading(true);
    setActivities(null);
    let like = false;
    let isDifficult = false;
    let isDistance = false;
    let isHour = false;
    if (activity != false) {
      like = true;
    }
    if (difficult != null) {
      isDifficult = true;
    }
    if (distance != 0) {
      isDistance = true;
    }
    if (hour != 0) {
      isHour = true;
    }

    if (isDifficult == true && like == true && isHour == false) {
      try {
        const { data, error } = await supabase
          .from("Activity")
          .select()
          .eq("difficulte", difficult)
          .like("name", "%" + activity + "%");
        if (data) {
          console.log(data);
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else if (isDifficult == true && like == false && isHour == false ) {
      try {
        const { data, error } = await supabase
          .from("Activity")
          .select()
          .eq("difficulte", difficult);
        if (data) {
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else if (isDifficult == false && like == true && isHour == false) {
      try {
        const { data, error } = await supabase
          .from("Activity")
          .select()
          .like("name", "%" + activity + "%");
        if (data) {
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else if (isDifficult == false && like == false && isHour == false) {
      try {
        const { data, error } = await supabase.from("Activity").select();
        if (data) {
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    //*__________________

    if (isDifficult == true && like == true && isHour == true) {
      try {
        const { data, error } = await supabase
          .from("Activity")
          .select()
          .eq("difficulte", difficult)
          .like("name", "%" + activity + "%")
          .lt('duree', hour*60);
        if (data) {
          console.log(data);
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else if (isDifficult == true && like == false && isHour == true) {
      try {
        const { data, error } = await supabase
          .from("Activity")
          .select()
          .eq("difficulte", difficult)
          .lt('duree', hour*60);
        if (data) {
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else if (isDifficult == false && like == true && isHour == true) {
      try {
        const { data, error } = await supabase
          .from("Activity")
          .select()
          .like("name", "%" + activity + "%")
          .lt('duree', hour*60);
        if (data) {
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else if (isDifficult == false && like == false && isHour == true) {
      try {
        const { data, error } = await supabase.from("Activity").select().lt('duree', hour*60);
        if (data) {
          setActivities(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    //*---------------
    setLoading(false);
  };

  const handleReset = () => {
    setDifficult(null);
    setDistance(0);
    setHour(0);
    setActivity(false);
    setOrderActivity(null);
    setHourValue(0);
  };

  // Les useEffects
  useEffect(() => {
    getActivities();
    getAllActivities();
    //console.log(activities);
    getImages();
    console.log(allActivity);
  }, []);

  // useEffect pour le slidbar de la distance
  useEffect(() => {
    console.log("la valeu de la distance" + distance);
  }, [distance]);

  // useEffect pour le slidbar de la durée
  useEffect(() => {
    console.log("la valeu de heure" + hour);
  }, [hour]);

  //* useEffect pour le type d'activité choisir dans le dropdown
  useEffect(() => {
    getActivitiesFilter();
  }, [activity, distance, hour, difficult]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <SafeAreaView horizontal={false}>
        <View style={styles.container}>
          {!openLo && (
            <View style={{ width: screenWidth - 30, zIndex: 5 }}>
              <DropDownPicker
                open={openAc}
                value={activity}
                items={items}
                searchable
                setOpen={setOpenAc}
                setValue={setActivity}
                placeholder="Activitées"
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
            {!openLo && !openAc && (
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
                  orderActivity === "difficile" ? styles.btnPressed : styles.btn
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
          <Button title="Réinitialiser la recherche" style={{borderRadius: 10}} onPress={handleReset} />
          <ScrollView nestedScrollEnabled={true}>
            {loading && <ActivityIndicator size={50} style={{marginTop: 100}}/>}
            <View>
              {activities &&
                activities.map((activity) => (
                  <ActivityItem
                    key={activity.id}
                    item={activity}
                    navigation={navigation}
                    style={styles.itemActivity}
                  />
                ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

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
  itemActivity: {
    width: 330,
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
