import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from "react-native";


const ErrorMessage = (message) => {
    console.log(message.message);
    return (
        <View style={styles.container}>
            <Text style={{color:'red'}}> {message.message}</Text>
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
      backgroundColor: "#F1AA9B",
      borderColor : 'red',
      borderWidth : 1,
      marginHorizontal: 1,
      height:70
      
    }
    
  });
export default ErrorMessage;