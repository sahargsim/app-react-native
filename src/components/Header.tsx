import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Hi, Open Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
    backgroundColor: "#8a2be2",
  },
});
export default Header;
