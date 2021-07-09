import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../theme/theme";

const FormInput = () => {
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const toggleEyeVisible = () => {
    setPwdVisibility(!pwdVisibility);
  };
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Starships");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Email..."
        placeholderTextColor="#003f5c"
      />
      <View style={styles.pwdStyle}>
        <TextInput
          secureTextEntry={pwdVisibility ? false : true}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={toggleEyeVisible}>
          {pwdVisibility ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </TouchableOpacity>
      </View>
      <Button style={styles.buttonLogin} onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  textLogin: {
    fontSize: 20,
    textAlign: "center",
    color: theme.colors.text,
    fontWeight: "bold",
  },
  pwdStyle: {
    position: "relative",
    flexDirection: "row",
  },
  inputText: {
    height: 50,
    color: theme.colors.textInput,
    marginTop: theme.spacing.m,
    borderWidth: 1,
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    top: "50%",
    right: 15,
  },
  buttonLogin: {
    marginTop: theme.spacing.m,
    backgroundColor: "#ffd700",
    width: "100%",
    textAlign: "center",
  },
});
export default FormInput;
