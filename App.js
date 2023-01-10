
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import ActivitiesScreen from './src/screens/ActivitiesScreen';
import SearchScreen from './src/screens/SearchScreen';
import CreationProfilScreen from './src/screens/CreationProfilScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from './src/screens/SettingsScreen';
import Connexion from './src/screens/ConnexionScreen';
import ProfilScreen from './src/screens/ProfilScreen';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={ActivitiesScreen} options={{ headerShown: false }}/>
        <stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
        <stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
        <stack.Screen name="Creation" component={CreationProfilScreen} options={{ headerShown: false }} />
        <stack.Screen name="Connexion" component={Connexion} options={{ headerShown: false }} />
        <stack.Screen name="Profil" component={ProfilScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}


 // *[STYLE]
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
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
    flexDirection : "row"
  }
});

