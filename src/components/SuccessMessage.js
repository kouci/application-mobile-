import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from "react-native";

  
const SuccessMessage = (message) => {
    return (
        <View style={styles.container}>
        <Text style={{color:'green'}}> {message.message}</Text>
    </View>
    );
};



//* [STYLES]
const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 50,
      marginTop: 24,
      alignItems: "center",
      borderRadius : 8,
      color: 'red',
      justifyContent: "center",
      backgroundColor: "#95F49F",
      borderColor : 'green',
      borderWidth : 1,
      marginHorizontal: 1,
      height:70
      
    }
    
  });
export default SuccessMessage;