
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import ActivitiesScreen from './src/screens/ActivitiesScreen';
import SearchScreen from './src/screens/SearchScreen';
import CreationProfilScreen from './src/screens/CreationProfilScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from './src/screens/SettingsScreen';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={ActivitiesScreen} options={{ headerShown: false }}/>
        <stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
        <stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
        <stack.Screen name="Creation" component={CreationProfilScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}



