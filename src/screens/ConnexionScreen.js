import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    FlatList,
    TextInput,
  } from "react-native";
  import { useNavigation } from '@react-navigation/native';
  import supabase from "../config/SupabaseClient.js";
  import ActivityItem from "../components/ActivityItem.js";
  import Form from "../components/Form.js";
  import Header from "../components/Header.js";
  import ProfilScreen from "./ProfilScreen"
import Footer from "../components/Footer.js";
  /**
   * TODO : Gerer les champs : mettre au bon format les input text 
   * TODO : Ajouter un lien entre les composants Connexions et inscription
   * ![A FAIRE] : ajouter les informations de l'utilisateur dans la session
   */
const Connexion = ({navigation}) => {

  console.log(navigation);
    //* [STATE]
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false)

    //* [METHODS]

    const handleSubmit = async () =>{
        console.log('ff');
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
        
          //console.log(JSON.stringify(data));
          if(data.user != null){
            //*si il est connecté
            storeData(data);
            navigation.navigate("Home");
          }
          else{

          }
          
    }

    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@user', jsonValue)
      } catch (e) {
        // saving error
      }
    }
    return (
        <View style={styles.container}>
          <Header />
          <View style={styles.form}>
            <Form title="Connexion" handleSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
            </View>
            <Footer navigation={navigation}/>
       </View>
    );
};


//* [STYLES]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
    form: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
   
  });


export default Connexion;