import React from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Footer from '../components/Footer'
import Header from '../components/Header'

const SettingsScreen = ({ navigation }) => {
  return (
    // TODO - comprendre pourquoi la navigation vers la page profil est impossible depuis settings
    <View style={styles.container}>
         <Header navigation={navigation} />
         <View style={styles.content}>
         <Text>Settings Page</Text>

         </View>
         <Text>Settings Page</Text>
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