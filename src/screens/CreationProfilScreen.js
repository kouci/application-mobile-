import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
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

import supabase from "../../src/config/SupabaseClient.js";
import Form from "../components/Form.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage.js";

const CreationProfilScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMesssage] = useState("");
  const [successMessage, setSuccessMesssage] = useState("");
  const handleSubmit = async () => {
    Keyboard.dismiss();
    setLoading(true);
    let isValidEmail = false;
    let isValidPass = false;

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (regexEmail.test(email)) {
      isValidEmail = true;
    } else {
      console.log("email non valide");
      setErrMesssage("email non valide");
    }
    if (regexPassword.test(password)) {
      isValidPass = true;
    } else {
      console.log("mdp non valide");
      setErrMesssage("mdp non valide");
    }

    if (isValidPass & isValidEmail) {
      setErrMesssage("");
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if(!error){
        setSuccessMesssage('Le compte à été crée avec succes')
      }
      
    }
    setEmail(null);
    setPassword(null);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <Form
            title="Inscription"
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </View>
        {
          errMessage == "" ? null : <ErrorMessage message={errMessage} />}
        {
          successMessage == "" ? null : <SuccessMessage message={successMessage} />
        }
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

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

export default CreationProfilScreen;
