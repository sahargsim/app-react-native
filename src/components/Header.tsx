import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { theme } from "../theme/theme";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    marginBottom: 100,
    fontSize: 25,
    lineHeight: 50,
    textAlign: "center",
    backgroundColor: "#8a2be2",
    color: theme.colors.textHeader,
  },
});
export default Header;
