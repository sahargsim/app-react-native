import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Alert } from "react-native";

const Separator = () => <View style={styles.separator} />;

const ButtonModel = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert("Cannot press this one")}
      />
    </View>
    <Separator />
    <View>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert("Left button pressed")}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert("Right button pressed")}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ButtonModel;
