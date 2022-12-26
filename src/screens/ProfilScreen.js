import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  ScrollView,
} from "react-native";
import Footer from "../components/Footer";
import supabase from "../config/SupabaseClient";
import Header from "../components/Header.js";

const ProfilScreen = ({ navigation }) => {
  //console.log(supabase.auth.user());
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigation.navigate('Connexion')
    console.log(error);
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Button title="Deconnexion" onPress={handleSignOut} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          distinctio vitae, fugit impedit eius hic exercitationem quibusdam,
          facilis tempora ex dolores, harum dolorem animi possimus est ipsa
          iste! Voluptates, dolores?
        </Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

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
export default ProfilScreen;
