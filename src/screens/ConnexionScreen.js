import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  FlatList,
  TextInput,
  Keyboard,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import supabase from "../config/SupabaseClient.js";
import ActivityItem from "../components/ActivityItem.js";
import Form from "../components/Form.js";
import Header from "../components/Header.js";
import ProfilScreen from "./ProfilScreen";
import Footer from "../components/Footer.js";
import ErrorMessage from "../components/ErrorMessage";


const Connexion = ({ navigation }) => {
  //* [STATE]
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMesssage] = useState("");

  //* [METHODS]

  const handleSubmit = async () => {
    Keyboard.dismiss();
    let isValidEmail = false;
    let isValidPass = false;

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (regexEmail.test(email)) {
      isValidEmail = true;
    } else {
      console.log("email non valide");
      setErrMesssage('email non valide')
    }
    if (regexPassword.test(password)) {
      isValidPass = true;
    } else {
      console.log("mdp non valide");
      setErrMesssage('mdp non valide')
      
    }

    if(isValidPass & isValidEmail){
      setErrMesssage('');
      const { data, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if(!error){
        console.log('profil');
        navigation.navigate('Profil');
      }
    }
    
  };

  const errorForm = () =>{
    console.log('function errrr');
   
  }

  const handleCreateProfil = () =>{
    navigation.navigate('Creation')
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={styles.content}>
      <View style={styles.form}>
        <Form
          title="Connexion"
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </View>
      {
        errMessage == '' ? null : <ErrorMessage message={errMessage}/> 
      }
      <Button title='Pas encore de compte ? crée en un ici !' 
      onPress={handleCreateProfil}/>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

//* [STYLES]
const styles = StyleSheet.create({
  content : {
    marginTop : 80
  },
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
