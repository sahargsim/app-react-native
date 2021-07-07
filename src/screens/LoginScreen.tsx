import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import  FormInput  from '../components/FormInput';
import Header  from '../components/Header';


export default function LoginScreen() {
  return (
    <View style={styles.glob}>
      <Header/>
      <FormInput/>
      <Text style={styles.textFooter}>Read Conditions and Tearms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  glob: {
    margin: '20%',
  },
  textFooter: {
    margin: 24,
    fontSize: 18,
    color:'#ccc',
  },
});
