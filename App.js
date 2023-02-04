import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ActivitiesScreen from "./src/screens/ActivitiesScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CreationProfilScreen from "./src/screens/CreationProfilScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from './src/screens/SettingsScreen';
import Connexion from './src/screens/ConnexionScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import HistoriqueScreen from './src/screens/HistoriqueScreen'
import ActivityScreen from "./src/screens/ActivityScreen";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import supabase from "./src/config/SupabaseClient";

const stack = createNativeStackNavigator();

supabase.storage.from('photos').download('vue-automne-64.jpg');

export default function App() {


useEffect(() => {
   requestLocationPermission()
     .then(() => getCurrentPosition())
     .catch((error) => {
       console.log(error);
     });
 }, []);


  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ animation: 'none' }}>

        <stack.Screen
          name="Home"
          component={ActivitiesScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Creation"
          component={CreationProfilScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Connexion"
          component={Connexion}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Profil"
          component={ProfilScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ headerShown: false }}
        />
         <stack.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
        <stack.Screen name="Historique" component={HistoriqueScreen} options={{ headerShown: false }} />

      </stack.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  btn:{
    backgroundColor: '#005b96',
    color: "#fff",
    borderRadius: 8,
    height : 40,
    width : 120,
    margin : 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header : {
    marginTop : 50,
    flexDirection : "row",
  }
});
=======
>>>>>>> 7d06a2c2809eaf8d013bff014e15431ba75d5859

const requestLocationPermission = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
  } catch (error) {
    setErrorMsg(error.message);
  }
};

const getCurrentPosition = async () => {
  try {
    const location = await Location.getCurrentPositionAsync({});
    storeLatitude(location.coords.latitude);
    storeLongitude(location.coords.longitude);
  } catch (error) {
    setErrorMsg(error.message);
  }
};

const storeLatitude = async (latitude) => {
  try {
     await AsyncStorage.setItem('latitude', latitude.toString());
  } catch (error) {
    console.log(error)
  }
}

const storeLongitude = async (longitude) => {
  try {
     await AsyncStorage.setItem('longitude', longitude.toString());
      } catch (error) {
    console.log(error)
  }
}
