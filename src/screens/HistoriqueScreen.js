import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  ScrollView,
  Dimensions
} from "react-native";
import Footer from "../components/Footer";
import supabase from "../config/SupabaseClient";
import Header from "../components/Header.js";
import Ionicons from "@expo/vector-icons/Ionicons";


const HistoriqueScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text style={styles.title}>Historique des activitées</Text>
            <ScrollView style={styles.content}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum nemo odit aliquid, saepe impedit, ex dignissimos maxime eligendi perferendis reprehenderit, quo labore officia itaque culpa sunt dolores natus ipsum.</Text>
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    );
};


//*[STYLES]
const styles = {
    container : {
        flex : 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    content : {
        marginTop: 50,
        flex  : 1,
    },
    title : {
        marginTop: 20,
        fontSize: 37,
        fontWeight: "bold",
        textAlign: "center",
    }
}
export default HistoriqueScreen;