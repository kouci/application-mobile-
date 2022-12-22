import React from 'react'
import { Text, View } from 'react-native'
import Footer from '../components/Footer'
import Header from '../components/Header'

const SettingsScreen = ({ navigation }) => {
  return (
    <View >
         <Header navigation={navigation} />
         <Text>Settings Page</Text>
         <Footer navigation={navigation}/>
    </View>
  )
}

export default SettingsScreen