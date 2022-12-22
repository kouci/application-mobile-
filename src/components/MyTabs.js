import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivitiesScreen from "../screens/ActivitiesScreen";
import CreationProfilScreen from "../screens/CreationProfilScreen";
import SearchScreen from "../screens/SearchScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";

const MyTabs = () => {
  const HomeStack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator initialRouteName="HomeStack">
        <HomeStack.Screen
          name="HomeStack"
          component={ActivitiesScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </HomeStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      
        tabBarIcon: (focused, color, size) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Creation") {
            iconName = "person-circle-outline";
          }

          return <Ionicons name={iconName} size={30} color="#215778" />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Creation"
        component={CreationProfilScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
