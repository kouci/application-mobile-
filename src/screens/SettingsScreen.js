import React, { useState, useEffect } from "react";
import { Text, View , StyleSheet, Button} from 'react-native'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '@react-native-community/slider';
import * as Location from "expo-location";

const SettingsScreen = ({ navigation }) => {

  const [range, setRange] = useState(null);

  const confirmer = () => {
    navigation.navigate("Home", {
      name: Math.trunc(range)
    })
  }

  return (
    // TODO - comprendre pourquoi la navigation vers la page profil est impossible depuis settings
    <View style={styles.container}>
         <Header navigation={navigation} />
         <View style={styles.content}>
         <Text>Paramètres</Text>
         <Text>Choisir la distance des activités</Text>
         <Text>{Math.trunc(range)} km</Text>
         <Slider
         style = {{width:250, height:50}}
         thumbTintColor='blue'
         minimumValue = {0}
         maximumValue = {150}
         onValueChange={value => setRange(value)}
         />

<Button
  title="Ok"
  color="#841584"
  onPress={confirmer}
/>


         </View>
         <Footer navigation={navigation}/>
    </View>
  )
}

//* [STYLE]
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
export default SettingsScreen