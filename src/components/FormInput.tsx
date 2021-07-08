import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const FormInput = () => {
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const toggleEyeVisible = () => {
    setPwdVisibility(!pwdVisibility);
  };
  return (
    <View>
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
      <Button style={styles.buttonLogin} color={"#8a2be2"}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  pwdStyle: {
    position: "relative",
    flexDirection: "row",
  },
  inputText: {
    height: 50,
    color: "#6495ed",
    margin: 20,
    borderWidth: 2,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
  },
  buttonLogin: {
    margin: 24,
    backgroundColor: "#8a2be2",
    height: 50,
    marginTop: 20,
    width: 150,
  },
});
export default FormInput;
