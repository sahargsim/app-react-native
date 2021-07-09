import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import FormInput from "../components/FormInput";
import Header from "../components/Header";

export default function LoginScreen() {
  const navigation = useNavigation();
  const handleTerms = () => {
    navigation.navigate("Terms");
  };
  return (
    <View style={styles.glob}>
      <Header />
      <FormInput />
      <TouchableOpacity onPress={handleTerms}>
        <Text style={styles.textFooter}>Read Conditions and Tearms</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  glob: {
    width: "100%",
  },
  textFooter: {
    margin: 24,
    fontSize: 18,
    color: "#a9a9a9",
    textAlign: "center",
  },
});
