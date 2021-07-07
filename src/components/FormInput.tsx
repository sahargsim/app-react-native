import React from 'react';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const FormInput = ()=>{

  const [pwdVisibility, setPwdVisibility] = useState(false);
  const toggleEyeVisible = () => {
    setPwdVisibility(!pwdVisibility)
  }
  return(

<View>
      <TextInput 
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          
        />
      <View style={styles.pwdStyle}>
      <TextInput
        secureTextEntry = { pwdVisibility ? false : true}
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"    
      />
      <TouchableOpacity style={styles.eyeIcon}  onPress={toggleEyeVisible}>
        {
            pwdVisibility ? (
              <FontAwesomeIcon icon={faEyeSlash}/>
            ) : (
              <FontAwesomeIcon icon={faEye}/>
            )
        }

      </TouchableOpacity>
      </View>
      <Button style={styles.buttonLogin} title="Login" color={'#8a2be2'} ></Button>
</View>
)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textHead: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor:'#8a2be2',
    color:'#fff',
    
  },
  pwdStyle:{
    position:'relative',
    flexDirection:'row',
  },
  inputText:{
    height:50,
    color:'#6495ed',
    margin:20,
    borderWidth:2,
  },
  eyeIcon:{
    position:'absolute',
    right:0,
  },
  buttonLogin:{
    margin:24,
    backgroundColor:"#8a2be2",
    height:50,
    marginTop:20,
    width:150,
  },
});
export default FormInput;