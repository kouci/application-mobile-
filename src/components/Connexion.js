import React, { useState, useEffect } from "react";
import {AsyncStorage} from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    FlatList,
    TextInput,
  } from "react-native";
  
  import supabase from "../../src/config/SupabaseClient.js";
  import ActivityItem from "./ActivityItem.js";
  import Form from "./Form.js";
  
const Connexion = () => {
    //* [STATE]
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false)

    //* [METHODS]

    const handleSubmit = async () =>{
        console.log('uhdiuse');
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })

          console.log(JSON.stringify(data));
          const { dataS, errorS } = await supabase.auth.getSession()
          console.log(errorS);
    }
    return (
        <View style={styles.form}>
            <Form title="Connexion" handleSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
       </View>
    );
};


//* [STYLES]
const styles = StyleSheet.create({
    form: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
   
  });


export default Connexion;