import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './List';
import ProfilCreation from './ProfilCreate';
import Connexion from './Connexion';
import Ionicons from '@expo/vector-icons/Ionicons';

 const MyTabs = () => {

   const Tab = createBottomTabNavigator();
  return (
   <Tab.Navigator>
   <Tab.Screen name="S'inscrire" component={ProfilCreation}     options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="create" color={color} size={size} />
      ),
    }}/>
   <Tab.Screen name="Liste des activités" component={List} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }}/>
  </Tab.Navigator>
  )
}


export default MyTabs