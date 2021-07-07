import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Colors, Text } from 'react-native-paper';
import { QueryClientProvider,QueryClient } from 'react-query';
import FeedScreen from '../screens/FeedScreen';
import { useIsConnected } from 'react-native-offline';

const Offline = () => {
    const isConnected = useIsConnected();
  return (
     // La methode isConnected
    <View style={styles.container}>
        
        {/*{!isConnected ? (
            <FeedScreen/>
        ) : (  */}
        
        <Text style={styles.message}>Offline, reconnection in progress ...<ActivityIndicator/></Text>
        {/*)}*/}
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    //position: 'absolute',
    top: 55,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: Colors.red800,
    height: 80,
  },
});