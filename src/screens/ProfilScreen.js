import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
import Footer from "../components/Footer";
import supabase from "../config/SupabaseClient";
import Header from "../components/Header.js";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfilScreen = ({ navigation }) => {
  const MY_WIDTH = Dimensions.get("window").width + 80;
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigation.navigate("Connexion");
    console.log(error);
  };

  const handleNavToFav = () => {
    console.log("fav");
    navigation.navigate("Favorites");
  };

  const handleNavToHisto = () => {
    console.log("histo");
    navigation.navigate("Historique");
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Page Profil</Text>
      <View style={styles.content}>
        <View style={styles.person}>
          <Ionicons size={40} color="#215778" name="person"></Ionicons>
          <Text style={{ marginTop: 20, marginLeft: 20 }}>
            {supabase.auth.user().email}
          </Text>
        </View>
        <TouchableHighlight style={styles.element}>
          <Text style={{ marginStart: 30 }} onPress={handleNavToHisto}>
            Voir mon historique
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.element}>
          <Text style={{ marginStart: 30 }} onPress={handleNavToFav}>
            Consulter mes activitées favorites
          </Text>
        </TouchableHighlight>
        <Button title="Deconnexion" onPress={handleSignOut} />
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

//* [STYLE]
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 37,
    fontWeight: "bold",
    textAlign: "center",
  },
  element: {
    height: 70,
    width: Dimensions.get("window").width,
    backgroundColor: "#F1FBFB",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStartColor: "#EDE4C4",
    borderEndColor: "#FAF8F1",
    borderColor: "#D8EEED",
    borderRadius: 7,
    margin: 10,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    marginTop: 70,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  person: {
    flexDirection: "row",
  },
});
export default ProfilScreen;
